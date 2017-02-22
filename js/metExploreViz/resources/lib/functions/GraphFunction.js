/* 
This file is part of MetExploreViz 
 
Copyright (c) 2016 INRA 
 
Contact: http://metexplore.toulouse.inra.fr/metexploreViz/doc/contact 
 
GNU General Public License Usage 
This file may be used under the terms of the GNU General Public License version 3.0 as 
published by the Free Software Foundation and appearing in the file LICENSE included in the 
packaging of this file. 
 
Please review the following information to ensure the GNU General Public License version 3.0 
requirements will be met: http://www.gnu.org/copyleft/gpl.html. 
 
If you are unsure which license is appropriate for your use, please contact us 
at http://metexplore.toulouse.inra.fr/metexploreViz/doc/contact 
 
Version: 1 Build date: 2016-04-13 9:34:37 
*/ 
metExploreD3.GraphFunction={hierarchicalDrawing:function(){},drawNetwork:function(){},randomDrawing:function(){},stopSpringDrawing:function(){},extractSubNetwork:function(c){var b=_metExploreViz.getSessionById("viz");var u=[];if(b.getVizEngine()=="D3"){var h=d3.select("#viz").select("#D3viz");u=b.getSelectedNodes();if(u.length<2){metExploreD3.displayMessage("Warning","At least two nodes have to be selected or mapped.");return null}else{var v={};for(s=0;s<u.length;s++){v[u[s]]=s}var o=[];for(s=0;s<u.length;s++){o[s]=[];for(r=0;r<u.length;r++){o[s][r]=null}}for(var l in c.nodes){c.nodes[l].inSubNet=false}for(var s=0;s<c.edges.length;s++){c.edges[s].inSubNet=false}for(var s=0;s<u.length;s++){var a=u[s];var w=new Array();for(var r=0;r<u.length;r++){if(r!=s){if(o[s][r]==null){var y=new Array();var d=u[r];for(var l in c.nodes){c.nodes[l].distance=Infinity;c.nodes[l].predecessor=null;c.nodes[l].optimized=false}var m=c.nodes[a];m.distance=0;var k=new BinaryMinHeap(c.nodes,"distance");var p;var f=false;while((k.min()!=undefined)&&(!f)){p=k.extractMin();p.optimized=true;for(e in p.edges){var g=p.edges[e].target;if(g.optimized){continue}var x=p.distance+(p.edges.length)*(p.edges.length);if((x<g.distance)&&y.indexOf(metExploreD3.GraphFunction.getReactionIdWithoutBack(g.id))==-1){y.push(metExploreD3.GraphFunction.getReactionIdWithoutBack(g.id));g.distance=x;k.heapify();g.predecessor=p}if(g.id==d){f=true;o[s][r]=metExploreD3.GraphFunction.getPathBasedOnPredecessors(c,d)}else{var t=v[g.id];if((t!=undefined)&&(o[s][t]==null)){o[s][t]=metExploreD3.GraphFunction.getPathBasedOnPredecessors(c,g.id)}}}}}}}}}return c}},getGraph:function(){var c=_metExploreViz.getSessionById("viz");var b=new Graph();var a=d3.select("#viz").select("#D3viz");a.selectAll("g.node").each(function(d){if(d.getBiologicalType()=="reaction"&&d.getReactionReversibility()){b.addNode(d.getId()+"_back")}b.addNode(d.getId())});a.selectAll("path.link").each(function(f){var h=f.source;var i=f.target;var g=h.getId();var d=i.getId();if(h.getBiologicalType()=="reaction"&&h.getReactionReversibility()){b.addEdge(d,g+"_back")}if(i.getBiologicalType()=="reaction"&&i.getReactionReversibility()){b.addEdge(d+"_back",g)}b.addEdge(g,d)});return b},getPathBasedOnPredecessors:function(h,d){var i=new Array();var f=h.nodes[d].predecessor;if(f==null){return i}else{var c=new Array();var b=h.nodes[d];b.inSubNet=true;while(b!=null){c.push(b);b.inSubNet=true;for(e in b.edges){var g=b.edges[e];if(b.predecessor!=null){if(g.source.id==b.predecessor.id){g.inSubNet=true}}}b=b.predecessor}for(var a=c.length-1;a>=0;a--){i.push(c[a].id)}return i}},keepOnlySubnetwork:function(){var f=_metExploreViz.getSessionById("viz");var d=f.getForce();var c=f.getD3Data();var b=metExploreD3.GraphFunction.getGraph();var a=metExploreD3.createLoadMask("Remove elements not in path...","viz");if(a!=undefined){metExploreD3.showMask(a);metExploreD3.deferFunction(function(){var l=d3.select("#viz").select("#D3viz");if(f!=undefined){var k=f.getForce();if(k!=undefined){if(metExploreD3.GraphNetwork.isAnimated("viz")=="true"){k.stop()}}}var j=metExploreD3.GraphFunction.extractSubNetwork(b);console.log("graph after extraction ",j);if(j!=null){var h=true;for(var g in f.getSelectedNodes()){var m=f.getSelectedNodes()[g];if(j.nodes[m].inSubNet){h=false}}if(h){metExploreD3.displayMessage("Warning","There is no path between the selected nodes !!")}else{var l=d3.select("#viz").select("#D3viz");l.selectAll("g.node").filter(function(o){if(o.getBiologicalType()=="metabolite"){var p=o.getId();return !j.nodes[p].inSubNet}else{if(o.getBiologicalType()=="reaction"){var p=o.getId();var i=o.getId()+"_back";if(j.nodes[i]==undefined){return !j.nodes[p].inSubNet}else{return !(j.nodes[p].inSubNet||j.nodes[i].inSubNet)}}}}).each(function(i){metExploreD3.GraphNetwork.removeANode(i,"viz")})}}if(f!=undefined){if(k!=undefined){if(metExploreD3.GraphNetwork.isAnimated("viz")=="true"){k.start()}}}metExploreD3.hideMask(a)},10)}},highlightSubnetwork:function(){var b=_metExploreViz.getSessionById("viz");var a=metExploreD3.createLoadMask("Highlight Subnetwork...","viz");if(a!=undefined){metExploreD3.showMask(a);metExploreD3.deferFunction(function(){var j=d3.select("#viz").select("#D3viz");if(b!=undefined){var h=b.getForce();if(h!=undefined){if(metExploreD3.GraphNetwork.isAnimated("viz")=="true"){h.stop()}}}var c=metExploreD3.GraphFunction.getGraph();var g=metExploreD3.GraphFunction.extractSubNetwork(c);console.log("graph after extraction in highlight subnetwork ",g);if(g!=null){var f=true;for(var d in b.getSelectedNodes()){var k=b.getSelectedNodes()[d];if(g.nodes[k].inSubNet){f=false}}if(f){metExploreD3.displayMessage("Warning","There is no path between the selected nodes !!")}else{var j=d3.select("#viz").select("#D3viz");j.selectAll("g.node").filter(function(i){return i.getBiologicalType()=="metabolite"}).filter(function(i){var l=i.getId();return g.nodes[l].inSubNet}).selectAll(".metabolite").transition().duration(4000).style("opacity",1);j.selectAll("g.node").filter(function(i){return i.getBiologicalType()=="metabolite"}).filter(function(i){var l=i.getId();return !g.nodes[l].inSubNet}).selectAll(".metabolite").transition().duration(4000).style("stroke","gray").style("opacity",0.25);j.selectAll("g.node").filter(function(i){return i.getBiologicalType()=="metabolite"}).filter(function(i){var l=i.getId();return g.nodes[l].inSubNet}).selectAll("text").transition().duration(4000).style("opacity",1);j.selectAll("g.node").filter(function(i){return i.getBiologicalType()=="metabolite"}).filter(function(i){var l=i.getId();return !g.nodes[l].inSubNet}).selectAll("text").transition().duration(4000).style("opacity",0.25);j.selectAll("g.node").filter(function(i){return i.getBiologicalType()=="reaction"}).filter(function(l){var m=l.getId();var i=l.getId()+"_back";if(g.nodes[i]==undefined){return g.nodes[m].inSubNet}else{return(g.nodes[m].inSubNet||g.nodes[i].inSubNet)}}).selectAll(".reaction").transition().duration(4000).style("opacity",1);j.selectAll("g.node").filter(function(i){return i.getBiologicalType()=="reaction"}).filter(function(l){var m=l.getId();var i=l.getId()+"_back";if(g.nodes[i]==undefined){return !g.nodes[m].inSubNet}else{return !(g.nodes[m].inSubNet||g.nodes[i].inSubNet)}}).selectAll(".reaction").transition().duration(4000).style("stroke","gray").style("opacity",0.25);j.selectAll("g.node").filter(function(i){return i.getBiologicalType()=="reaction"}).filter(function(l){var m=l.getId();var i=l.getId()+"_back";if(g.nodes[i]==undefined){return g.nodes[m].inSubNet}else{return(g.nodes[m].inSubNet||g.nodes[i].inSubNet)}}).selectAll("text").transition().duration(4000).style("opacity",1);j.selectAll("g.node").filter(function(i){return i.getBiologicalType()=="reaction"}).filter(function(l){var m=l.getId();var i=l.getId()+"_back";if(g.nodes[i]==undefined){return !g.nodes[m].inSubNet}else{return !(g.nodes[m].inSubNet||g.nodes[i].inSubNet)}}).selectAll("text").transition().duration(4000).style("opacity",0.25);j.selectAll("path.link").filter(function(o){var l=o.source.getId();var m=o.target.getId();if(o.source.getBiologicalType()=="reaction"){var i=l+"_back";if(g.nodes[i]==undefined){return(g.nodes[l].inSubNet&&g.nodes[m].inSubNet)}else{return(g.nodes[l].inSubNet&&g.nodes[m].inSubNet)||(g.nodes[i].inSubNet&&g.nodes[m].inSubNet)}}else{var i=m+"_back";if(g.nodes[i]==undefined){return(g.nodes[l].inSubNet&&g.nodes[m].inSubNet)}else{return(g.nodes[l].inSubNet&&g.nodes[m].inSubNet)||(g.nodes[l].inSubNet&&g.nodes[i].inSubNet)}}}).transition().duration(4000).style("opacity",1);j.selectAll("path.link").filter(function(o){var l=o.source.getId();var m=o.target.getId();if(o.source.getBiologicalType()=="reaction"){var i=l+"_back";if(g.nodes[i]==undefined){return !(g.nodes[l].inSubNet&&g.nodes[m].inSubNet)}else{return !(g.nodes[l].inSubNet&&g.nodes[m].inSubNet)&&!(g.nodes[i].inSubNet&&g.nodes[m].inSubNet)}}else{var i=m+"_back";if(g.nodes[i]==undefined){return !(g.nodes[l].inSubNet&&g.nodes[m].inSubNet)}else{return !(g.nodes[l].inSubNet&&g.nodes[m].inSubNet)&&!(g.nodes[l].inSubNet&&g.nodes[i].inSubNet)}}}).transition().duration(4000).style("stroke","gray").style("opacity",0.25)}}if(b!=undefined){if(h!=undefined){if(metExploreD3.GraphNetwork.isAnimated("viz")=="true"){h.start()}}}metExploreD3.hideMask(a)},10)}},isBackReaction:function(a){if(a.indexOf("_back")!=-1){return true}else{return false}},getReactionIdWithoutBack:function(a){if(metExploreD3.GraphFunction.isBackReaction(a)){a=a.replace("_back","")}return a},nodeInDegree:function(c){var b=0;for(e in c.edges){var a=c.edges[e].source;if(a.id!=c.id){b++}}return b},nodeOutDegree:function(c){var b=0;for(e in c.edges){var a=c.edges[e].source;if(a.id==c.id){b++}}return b},getLeafs:function(c){var a=new Array();for(var d in c.nodes){var b=c.nodes[d];if(metExploreD3.GraphFunction.nodeOutDegree(b)==0){a.push(b)}}return a},isAcyclic:function(b){var f=new Graph();for(var g in b.edges){var d=b.edges[g];f.addEdge(d.source.id,d.target.id)}var a=metExploreD3.GraphFunction.getLeafs(f);while(a.length!=0&&Object.keys(f.nodes).length!=0){var c=a.pop();f.removeNode(c);a=metExploreD3.GraphFunction.getLeafs(f)}if(Object.keys(f.nodes).length==0){return true}if(a.length==0){return false}},getMinimalFAS:function(f){var b=new Array();var d=new Graph();var a=new Array();for(e in f.edges){var c=f.edges[e];d.addEdge(c.source.id,c.target.id);if(metExploreD3.GraphFunction.isAcyclic(d)){b.push(c)}else{d.removeEdge(c);a.push(c)}}return a},getStronglyConnectedComponents:function(f){if(f==null){f=this.createGraph(false)}var d=new Array();var c=0;var a=new Array();for(n in f.nodes){var b=f.nodes[n];b.index=undefined;b.lowlink=Number.MAX_VALUE}for(n in f.nodes){var b=f.nodes[n];if(b.index==undefined){metExploreD3.GraphFunction.strongconnect(b,f,c,d,a)}}return a},strongconnect:function(d,h,f,g,b){d.index=f;d.lowlink=f;f=f+1;g.push(d);for(e in d.edges){var a=d.edges[e].target;if(a.id!=d.id){if(a.index==undefined){metExploreD3.GraphFunction.strongconnect(a,h,f,g,b);d.lowlink=Math.min(d.lowlink,a.lowlink)}else{if(g.indexOf(a)!=undefined){d.lowlink=Math.min(d.lowlink,a.lowlink)}}}}if(d.lowlink==d.index){var c=new Array();var a=g.pop();while(a.id!=d.id){c.push(a);var a=g.pop()}c.push(a);b.push(c)}},getMinimalFASstory:function(h,a){var c=new Array();var g=new Graph();var b=new Array();var i=h.edges.length;for(e in h.edges){var d=h.edges[e];var f=0;if(a.length>0){if(a.indexOf(d.source.id)==-1){f=f+i}if(a.indexOf(d.target.id)==-1){f=f+i}}f=f-Math.max(d.source.edges.length,f+d.target.edges.length);d.weight=f}h.edges.sort(function(k,j){return k.weight-j.weight});for(e in h.edges){var d=h.edges[e];g.addEdge(d.source.id,d.target.id);if(metExploreD3.GraphFunction.isAcyclic(g)){c.push(d)}else{g.removeEdge(d);b.push(d)}}return b}};