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
metExploreD3.GraphMapping={mapNodeDataFile:function(b,d){var e=_metExploreViz.getSessionById("viz");var c=e.getForce();c.stop();var a=metExploreD3.createLoadMask("Mapping in progress...","viz");if(a!=undefined){metExploreD3.showMask(a);setTimeout(function(){var l=e.getD3Data();var m=b.getConditions();var f=d3.select("#viz").select("#D3viz").select("#graphComponent").selectAll("g.node");var h=undefined;switch(b.getTargetLabel()){case"reactionDBIdentifier":for(var g=m.length-1;g>=0;g--){d.forEach(function(o){var n=new MappingData(o[b.getTargetLabel()],b.getName(),m[g],o[m[g]]);b.addMap(n);h=l.getNodeByDbIdentifier(o[b.getTargetLabel()]);if(h!=undefined){var i=new MappingData(h,b.getName(),m[g],o[m[g]]);h.addMappingData(i)}})}break;case"reactionId":for(var g=m.length-1;g>=0;g--){d.forEach(function(o){var n=new MappingData(o[b.getTargetLabel()],b.getName(),m[g],o[m[g]]);b.addMap(n);h=l.getNodeByDbIdentifier(o[b.getTargetLabel()]);if(h!=undefined){var i=new MappingData(h,b.getName(),m[g],o[m[g]]);h.addMappingData(i)}})}break;case"metaboliteId":for(var g=m.length-1;g>=0;g--){d.forEach(function(o){var n=new MappingData(o[b.getTargetLabel()],b.getName(),m[g],o[m[g]]);b.addMap(n);h=l.getNodeByDbIdentifier(o[b.getTargetLabel()]);if(h!=undefined){var i=new MappingData(h,b.getName(),m[g],o[m[g]]);h.addMappingData(i)}})}break;case"metaboliteDBIdentifier":for(var g=m.length-1;g>=0;g--){d.forEach(function(o){var n=new MappingData(o[b.getTargetLabel()],b.getName(),m[g],o[m[g]]);b.addMap(n);h=l.getNodeByDbIdentifier(o[b.getTargetLabel()]);if(h!=undefined){var i=new MappingData(h,b.getName(),m[g],o[m[g]]);h.addMappingData(i)}})}break;case"inchi":for(var g=m.length-1;g>=0;g--){d.forEach(function(n){var i=new MappingData(n[b.getTargetLabel()],b.getName(),m[g],n[m[g]]);b.addMap(i);h=l.getNodeByMappedInchi(n[b.getTargetLabel()]);if(h!=undefined){h.forEach(function(p){var o=new MappingData(p,b.getName(),m[g],n[m[g]]);p.addMappingData(o)})}})}break;default:metExploreD3.displayMessage("Warning",'The type of node "'+b.getTargetLabel()+"\" isn't know.")}metExploreD3.hideMask(a);var k=metExploreD3.GraphNetwork.isAnimated("viz");if(k=="true"){var j=e.getForce();if((d3.select("#viz").select("#D3viz").attr("animation")=="true")||(d3.select("#viz").select("#D3viz").attr("animation")==null)){j.resume()}}},1)}},mapNodeData:function(c,b){var e=_metExploreViz.getSessionById("viz");var d=e.getForce();d.stop();var a=metExploreD3.createLoadMask("Mapping in progress...","viz");if(a!=undefined){metExploreD3.showMask(a);setTimeout(function(){var l=e.getD3Data();var m=c.getConditions();var f=d3.select("#viz").select("#D3viz").select("#graphComponent").selectAll("g.node");var h=undefined;switch(c.getTargetLabel()){case"reactionDBIdentifier":for(var g=m.length-1;g>=0;g--){b.forEach(function(i){var o=new MappingData(i[0],c.getName(),m[g],i[g+1]);c.addMap(o);h=l.getNodeByDbIdentifier(i[0]);if(h!=undefined){var n=new MappingData(h,c.getName(),m[g],i[g+1]);h.addMappingData(n)}})}break;case"reactionId":for(var g=m.length-1;g>=0;g--){b.forEach(function(i){var o=new MappingData(i[0],c.getName(),m[g],i[g+1]);c.addMap(o);h=l.getNodeById(i[0]);if(h!=undefined){var n=new MappingData(h,c.getName(),m[g],i[g+1]);h.addMappingData(n)}})}break;case"metaboliteId":for(var g=m.length-1;g>=0;g--){b.forEach(function(i){var o=new MappingData(i[0],c.getName(),m[g],i[g+1]);c.addMap(o);h=l.getNodeById(i[0]);if(h!=undefined){var n=new MappingData(h,c.getName(),m[g],i[g+1]);h.addMappingData(n)}})}break;case"metaboliteDBIdentifier":for(var g=m.length-1;g>=0;g--){b.forEach(function(i){var o=new MappingData(i[0],c.getName(),m[g],i[g+1]);c.addMap(o);h=l.getNodeByDbIdentifier(i[0]);if(h!=undefined){var n=new MappingData(h,c.getName(),m[g],i[g+1]);h.addMappingData(n)}})}break;case"inchi":break;default:metExploreD3.displayMessage("Warning",'The type of node "'+c.getTargetLabel()+"\" isn't know.")}metExploreD3.hideMask(a);var k=metExploreD3.GraphNetwork.isAnimated("viz");if(k=="true"){var j=e.getForce();if((d3.select("#viz").select("#D3viz").attr("animation")=="true")||(d3.select("#viz").select("#D3viz").attr("animation")==null)){j.resume()}}},1)}},mapNodes:function(b,a){metExploreD3.onloadMapping(b,function(){d3.select("#viz").select("#D3viz").select("#graphComponent").selectAll("g.node").filter(function(e){if(this.getAttribute("mapped")==undefined||this.getAttribute("mapped")==false||this.getAttribute("mapped")=="false"){return false}else{return true}}).attr("mapped","false").selectAll("rect.stroke").remove();var c=metExploreD3.createLoadMask("Mapping in progress...","viz");var d=_metExploreViz.getMappingByName(b);if(c!=undefined){metExploreD3.showMask(c);setTimeout(function(){var h=_metExploreViz.getSessionById("viz");var f=h.getForce();f.stop();var g=d.getConditions();g.forEach(function(i){d3.select("#viz").select("#D3viz").select("#graphComponent").selectAll("g.node").filter(function(j){if(this.getAttribute("mapped")==undefined||this.getAttribute("mapped")==false||this.getAttribute("mapped")=="false"){return true}else{return false}}).each(function(l){if(l.getBiologicalType()=="reaction"){if(l.getMappingDataByNameAndCond(d.getName(),i)!=null){var j=metExploreD3.getReactionStyle();_MyThisGraphNode.addText(l,"viz",j);d3.select(this).attr("mapped","true").insert("rect",":first-child").attr("class","stroke").attr("width",parseInt(d3.select(this).select(".reaction").attr("width"))+10).attr("height",parseInt(d3.select(this).select(".reaction").attr("height"))+10).attr("rx",parseInt(d3.select(this).select(".reaction").attr("rx"))+5).attr("ry",parseInt(d3.select(this).select(".reaction").attr("ry"))+5).attr("transform","translate(-"+parseInt(parseInt(d3.select(this).select(".reaction").attr("width"))+10)/2+",-"+parseInt(parseInt(d3.select(this).select(".reaction").attr("height"))+10)/2+")").style("opacity","0.5").style("fill","red");h.addSelectedNode(l.getId())}}else{if(l.getBiologicalType()=="metabolite"){var m=d3.select(this).select(".metabolite").attr("identifier");if(l.getMappingDataByNameAndCond(d.getName(),i)!=null){var k=metExploreD3.getReactionStyle();_MyThisGraphNode.addText(l,"viz",k);d3.select(this).attr("mapped","true").insert("rect",":first-child").attr("class","stroke").attr("width",parseInt(d3.select(this).select(".metabolite").attr("width"))+10).attr("height",parseInt(d3.select(this).select(".metabolite").attr("height"))+10).attr("rx",parseInt(d3.select(this).select(".metabolite").attr("rx"))+5).attr("ry",parseInt(d3.select(this).select(".metabolite").attr("ry"))+5).attr("transform","translate(-"+parseInt(parseInt(d3.select(this).select(".metabolite").attr("width"))+10)/2+",-"+parseInt(parseInt(d3.select(this).select(".metabolite").attr("height"))+10)/2+")").style("opacity","0.5").style("fill","red");h.addSelectedNode(l.getId())}}}}).each(function(l){if(d3.select(this).select(".stroke")[0][0]==null){if(l.getBiologicalType()=="reaction"){if(l.getMappingDataByNameAndCond(d.getName(),i)!=null){var j=metExploreD3.getReactionStyle();_MyThisGraphNode.addText(l,"viz",j);d3.select(this).insert("rect",":first-child").attr("class","stroke").attr("width",parseInt(d3.select(this).select(".reaction").attr("width"))+10).attr("height",parseInt(d3.select(this).select(".reaction").attr("height"))+10).attr("rx",parseInt(d3.select(this).select(".reaction").attr("rx"))+5).attr("ry",parseInt(d3.select(this).select(".reaction").attr("ry"))+5).attr("transform","translate(-"+parseInt(parseInt(d3.select(this).select(".reaction").attr("width"))+10)/2+",-"+parseInt(parseInt(d3.select(this).select(".reaction").attr("height"))+10)/2+")").style("opacity","0.5").style("fill","red");h.addSelectedNode(l.getId());return true}else{return false}}else{if(l.getBiologicalType()=="metabolite"){var m=d3.select(this).select(".metabolite").attr("identifier");if(l.getMappingDataByNameAndCond(d.getName(),i)!=null){var k=metExploreD3.getReactionStyle();_MyThisGraphNode.addText(l,"viz",k);d3.select(this).insert("rect",":first-child").attr("class","stroke").attr("width",parseInt(d3.select(this).select(".metabolite").attr("width"))+10).attr("height",parseInt(d3.select(this).select(".metabolite").attr("height"))+10).attr("rx",parseInt(d3.select(this).select(".metabolite").attr("rx"))+5).attr("ry",parseInt(d3.select(this).select(".metabolite").attr("ry"))+5).attr("transform","translate(-"+parseInt(parseInt(d3.select(this).select(".metabolite").attr("width"))+10)/2+",-"+parseInt(parseInt(d3.select(this).select(".metabolite").attr("height"))+10)/2+")").style("opacity","0.5").style("fill","red");h.addSelectedNode(l.getId());return true}else{return false}}}}})});metExploreD3.hideMask(c);if(a!=undefined){a()}var e=metExploreD3.GraphNetwork.isAnimated("viz");if(e=="true"){var h=_metExploreViz.getSessionById("viz");var f=h.getForce();if((d3.select("#viz").select("#D3viz").attr("animation")=="true")||(d3.select("#viz").select("#D3viz").attr("animation")==null)){f.resume()}}},1)}})},mapFluxes:function(g,d,f,h,b,e){var c=_metExploreViz.getMappingByName(g);var a=metExploreD3.createLoadMask("Mapping in progress...","viz");if(a!=undefined){metExploreD3.showMask(a);setTimeout(function(){var u=_metExploreViz.getGeneralStyle();var n=d3.select("#viz").select("#D3viz");var s=_metExploreViz.getSessionById("viz");var k=_metExploreViz.getSessionById("viz").getD3Data().getNodes();var v=c.getConditions();var r=undefined;var w=undefined;var x=c.getName();var o=metExploreD3.getLinkStyle();var m=s.getForce();m.linkDistance(function(z){if(z.getSource().getIsSideCompound()||z.getTarget().getIsSideCompound()){return o.getSize()}else{return o.getSize()*2}});n.selectAll("g.node").filter(function(z){if(this.getAttribute("mapped")==undefined||this.getAttribute("mapped")==false||this.getAttribute("mapped")=="false"){return false}else{return true}}).selectAll("rect.stroke").remove();v.forEach(function(z){k.forEach(function(B){var C=B.getMappingDataByNameAndCond(x,z);if(C!=null){var A=Math.abs(C.getMapValue())}else{var A=0}if(!isNaN(A)){if(r==undefined){w=parseFloat(A);r=parseFloat(A)}else{if(w>parseFloat(A)){w=parseFloat(A)}if(r<parseFloat(A)){r=parseFloat(A)}}}})});if(h==undefined){h=metExploreD3.GraphUtils.colorNameToHex(u.getColorMinMappingContinuous());if(h==false){h=u.getColorMinMappingContinuous()}}else{u.setMinColorMappingContinuous(h)}if(f==undefined){f=metExploreD3.GraphUtils.colorNameToHex(u.getColorMaxMappingContinuous());if(f==false){f=u.getColorMaxMappingContinuous()}}else{u.setMaxColorMappingContinuous(f)}var n=d3.select("#viz").select("#D3viz");var j=s.getColorMappingsSet();s.resetColorMapping();var l=f;if(v[1]==d){l=h}if(b){var i=0.5;var y=0.2}else{var i=1;var y=1}var q=d3.scale.linear().domain([-4,-1,0,1,4]).range([1,i,y,i,1]);var t=d3.scale.linear().domain([-r,0,r]).range([-7,0,7]);s.addColorMapping(r,f);s.addColorMapping(-r,h);n.selectAll("g.node").each(function(E){if(E.getMappingDatasLength()!=0){if(E.getBiologicalType()=="reaction"){var D=E.getMappingDataByNameAndCond(x,v[0]);var C=E.getMappingDataByNameAndCond(x,v[1]);var B=D;if(v[1]==d){B=C}if(B==null){var z=0}else{if(isNaN(B.getMapValue())){var z=0}else{var z=B.getMapValue()}}var A=metExploreD3.getReactionStyle();_MyThisGraphNode.addText(E,"viz",A);d3.select(this).transition().duration(2000).style("opacity",q(t(parseFloat(z))));s.addSelectedNode(E.getId())}}});metExploreD3.hideMask(a);d3.select("#viz").select("#D3viz").selectAll("path.link").style("fill",function(B){var C,E;if(B.getSource().getBiologicalType()=="reaction"){C=B.getSource();E=B.getTarget()}else{E=B.getSource();C=B.getTarget()}var F=C.getMappingDataByNameAndCond(x,v[0]);var D=C.getMappingDataByNameAndCond(x,v[1]);n.selectAll("g#node"+E.getId()+".node").each(function(H){var I=F;if(v[1]==d){I=D}if(I==null){var G=0}else{if(isNaN(I.getMapValue())){var G=0}else{var G=I.getMapValue()}}if(H.flux==undefined){H.flux=t(G)}else{if(Math.abs(H.flux)<Math.abs(t(G))){H.flux=t(G)}}});n.selectAll("g#node"+E.getId()+".node").style("opacity",function(G){if(G.getIsSideCompound()){return 0.2}return q(G.flux)});if(this.id!="linkRev"){if(F==null){var z=0}else{if(isNaN(F.getMapValue())){var z=0}else{var z=F.getMapValue()}}if(t(z)==0){var A=d3.select("#viz").select("#D3viz").select("#graphComponent").selectAll("path:link");d3.select(this).style("opacity",0.5).style("stroke","black").style("stroke-width",0.5).style("stroke-dasharray","2,3").each(function(G){var H=A[0][0];this.parentNode.insertBefore(this,H)})}else{d3.select(this).style("opacity",q(t(parseFloat(z))))}if(E.getIsSideCompound()){d3.select(this).style("opacity",0.1)}return f}else{if(D==null){var z=0}else{if(isNaN(D.getMapValue())){var z=0}else{var z=D.getMapValue()}}if(t(z)==0){var A=d3.select("#viz").select("#D3viz").select("#graphComponent").selectAll("path:link");d3.select(this).style("opacity",0.5).style("stroke","black").style("stroke-width",0.5).style("stroke-dasharray","2,3").each(function(G){var H=A[0][0];this.parentNode.insertBefore(this,H)})}else{d3.select(this).style("opacity",q(t(parseFloat(z))))}if(E.getIsSideCompound()){d3.select(this).style("opacity",0.1)}return h}});if(w!=undefined){metExploreD3.fireEventArg("selectConditionForm","afterContinuousMapping","flux")}else{metExploreD3.displayMessage("Warning","No mapped node on network.")}if(e!=undefined){e()}var p=metExploreD3.GraphNetwork.isAnimated("viz");if(p=="true"){var s=_metExploreViz.getSessionById("viz");if((d3.select("#viz").select("#D3viz").attr("animation")=="true")||(d3.select("#viz").select("#D3viz").attr("animation")==null)){m.resume()}}metExploreD3.GraphNetwork.tick("viz")},1)}},mapUniqueFlux:function(g,d,f,b,e){var c=_metExploreViz.getMappingByName(g);var a=metExploreD3.createLoadMask("Mapping in progress...","viz");if(a!=undefined){metExploreD3.showMask(a);setTimeout(function(){var u=_metExploreViz.getGeneralStyle();var s=d3.select("#viz").select("#D3viz");var i=_metExploreViz.getSessionById("viz");var t=_metExploreViz.getSessionById("viz").getD3Data().getNodes();var n=c.getConditions();var w=undefined;var r=undefined;var o=c.getName();var x=metExploreD3.getLinkStyle();var j=i.getForce();j.linkDistance(function(z){if(z.getSource().getIsSideCompound()||z.getTarget().getIsSideCompound()){return x.getSize()}else{return x.getSize()*2}});s.selectAll("g.node").filter(function(z){if(this.getAttribute("mapped")==undefined||this.getAttribute("mapped")==false||this.getAttribute("mapped")=="false"){return false}else{return true}}).selectAll("rect.stroke").remove();n.forEach(function(z){t.forEach(function(B){var C=B.getMappingDataByNameAndCond(o,z);if(C!=null){var A=C.getMapValue();if(!isNaN(A)){if(w==undefined){r=parseFloat(A);w=parseFloat(A)}else{if(r>parseFloat(A)){r=parseFloat(A)}if(w<parseFloat(A)){w=parseFloat(A)}}}}})});if(f==undefined){f=u.getColorMaxMappingContinuous()}else{u.setMaxColorMappingContinuous(f)}var s=d3.select("#viz").select("#D3viz");var m=i.getColorMappingsSet();i.resetColorMapping();var p=d3.scale.linear().domain([-4,-1,1,4]).range([f,f,f,f]);if(b){var k=0.5;var h=0.2}else{var k=1;var h=1}var l=d3.scale.linear().domain([-4,-1,0,1,4]).range([1,k,h,k,1]);var q=d3.scale.linear().domain([-4,-1,1,4]).range([f,f,f,f]);var y=d3.scale.linear().domain([r,0,w]).range([-7,0,7]);i.addColorMapping(w,p(parseFloat(w)));s.selectAll("g.node").each(function(D){if(D.getMappingDatasLength()!=0){if(D.getBiologicalType()=="reaction"){var C=D.getMappingDataByNameAndCond(o,n[0]);var B=D.getMappingDataByNameAndCond(o,n[1]);var A=C;if(n[1]==d){A=B}if(A!=null){if(!isNaN(A.getMapValue())){var z=metExploreD3.getReactionStyle();_MyThisGraphNode.addText(D,"viz",z);d3.select(this).transition().duration(2000).style("opacity",l(y(parseFloat(A.getMapValue()))));i.addSelectedNode(D.getId())}}}}});metExploreD3.hideMask(a);d3.select("#viz").select("#D3viz").selectAll("path.link").style("fill",function(C){var D,F;if(C.getSource().getBiologicalType()=="reaction"){D=C.getSource();F=C.getTarget()}else{F=C.getSource();D=C.getTarget()}var G=D.getMappingDataByNameAndCond(o,n[0]);var E=D.getMappingDataByNameAndCond(o,n[1]);s.selectAll("g#node"+F.getId()+".node").each(function(I){var J=G;if(n[1]==d){J=E}if(J==null){var H=0}if(I.flux==undefined){I.flux=y(H)}else{if(Math.abs(I.flux)<Math.abs(y(H))){I.flux=y(H)}}});s.selectAll("g#node"+F.getId()+".node").style("opacity",function(H){if(H.getIsSideCompound()){return 0.2}return l(H.flux)});if(n[0]==d){if(this.id!="linkRev"){if(G==null){var B=0}else{if(isNaN(G.getMapValue())){var B=0}else{var B=G.getMapValue()}}if(y(B)==0){var z=d3.select("#viz").select("#D3viz").select("#graphComponent").selectAll("path:link");d3.select(this).style("opacity",0.5).style("stroke","black").style("stroke-width",0.5).style("stroke-dasharray","2,3").each(function(H){var I=z[0][0];this.parentNode.insertBefore(this,I)})}else{d3.select(this).style("opacity",l(y(parseFloat(B))))}if(F.getIsSideCompound()){d3.select(this).style("opacity",0.1)}return p(y(B))}}else{if(this.id=="linkRev"){if(E==null){var A=0}else{if(isNaN(E.getMapValue())){var A=0}else{var A=E.getMapValue()}}if(y(A)==0){var z=d3.select("#viz").select("#D3viz").select("#graphComponent").selectAll("path:link");d3.select(this).style("opacity",0.5).style("stroke","black").style("stroke-width",0.5).style("stroke-dasharray","2,3").each(function(H){var I=z[0][0];this.parentNode.insertBefore(this,I)})}else{d3.select(this).style("opacity",l(y(parseFloat(A))))}if(F.getIsSideCompound()){d3.select(this).style("opacity",0.1)}return p(y(A))}}}).filter(function(z){if(n[0]==d){return this.id=="linkRev"}else{return this.id!="linkRev"}}).remove();if(r!=undefined){metExploreD3.fireEventArg("selectConditionForm","afterContinuousMapping","flux")}else{metExploreD3.displayMessage("Warning","No mapped node on network.")}if(e!=undefined){e()}var v=metExploreD3.GraphNetwork.isAnimated("viz");if(v=="true"){var i=_metExploreViz.getSessionById("viz");if((d3.select("#viz").select("#D3viz").attr("animation")=="true")||(d3.select("#viz").select("#D3viz").attr("animation")==null)){j.resume()}}metExploreD3.GraphNetwork.tick("viz")},1)}},parseFluxValues:function(c){var b=_metExploreViz.getMappingByName(c);var a=metExploreD3.createLoadMask("Mapping in progress...","viz");if(a!=undefined){metExploreD3.showMask(a);setTimeout(function(){var j=_metExploreViz.getSessionById("viz");var e=_metExploreViz.getSessionById("viz").getD3Data().getNodes();var i=b.getConditions();var h=undefined;var f=undefined;var g=b.getName();var k=[];i.forEach(function(l){e.forEach(function(n){var o=n.getMappingDataByNameAndCond(g,l);if(o!=null){var m=o.getMapValue()}else{var m=0}if(!isNaN(m)){if(parseFloat(m)!=0&(999999-Math.abs(parseFloat(m)))*100/999999<0.001){k.push(n)}else{if(h==undefined){f=parseFloat(m);h=parseFloat(m)}else{if(f>parseFloat(m)){f=parseFloat(m)}if(h<parseFloat(m)){h=parseFloat(m)}}}}})});if(k.length>0){h=h+h/2;var d=_metExploreViz.getSessionById("viz").getColorMappingsSet();k.forEach(function(l){i.forEach(function(m){if((999999-Math.abs(parseFloat(l.getMappingDataByNameAndCond(g,m).getMapValue())))*100/999999<0.001){d.forEach(function(n){if(n.getName()==parseFloat(l.getMappingDataByNameAndCond(g,m).getMapValue())){n.setName(f)}if(n.getName()==parseFloat(l.getMappingDataByNameAndCond(g,m).getMapValue())){n.setName(h)}});l.setMappingDataByNameAndCond(g,m,h)}})})}metExploreD3.hideMask(a)},1)}},graphMappingFlux:function(e,a,c,b,f,d){metExploreD3.onloadMapping(e,function(){var g=_metExploreViz.getSessionById("viz");metExploreD3.GraphMapping.parseFluxValues(e);metExploreD3.GraphLink.loadLinksForFlux("viz",g.getD3Data(),metExploreD3.getLinkStyle(),metExploreD3.getMetaboliteStyle());if(c=="Compare"){metExploreD3.GraphMapping.mapFluxes(e,a,b,f,d)}else{metExploreD3.GraphMapping.mapUniqueFlux(e,a,b,d)}})},reloadMapping:function(b){var d=_metExploreViz.getSessionById("viz");var c=d.getForce();c.stop();var a=metExploreD3.createLoadMask("Mapping in progress...","viz");if(a!=undefined){metExploreD3.showMask(a);setTimeout(function(){var h=d.getD3Data();var i=b.getConditions();var e=undefined;switch(b.getTargetLabel()){case"reactionDBIdentifier":b.getData().forEach(function(l){var j=h.getNodeByDbIdentifier(l.getNode());if(j!=undefined){var k=new MappingData(j,b.getName(),l.getConditionName(),l.getMapValue());j.addMappingData(k)}});break;case"reactionId":b.getData().forEach(function(l){var j=h.getNodeById(l.getNode());if(j!=undefined){var k=new MappingData(j,b.getName(),l.getConditionName(),l.getMapValue());j.addMappingData(k)}});break;case"metaboliteId":b.getData().forEach(function(l){var j=h.getNodeById(l.getNode());if(j!=undefined){var k=new MappingData(j,b.getName(),l.getConditionName(),l.getMapValue());j.addMappingData(k)}});break;case"metaboliteDBIdentifier":b.getData().forEach(function(l){var j=h.getNodeByDbIdentifier(l.getNode());if(j!=undefined){var k=new MappingData(j,b.getName(),l.getConditionName(),l.getMapValue());j.addMappingData(k)}});break;case"inchi":break;default:metExploreD3.displayMessage("Warning",'The type of node "'+b.getTargetLabel()+"\" isn't know.")}metExploreD3.hideMask(a);var g=metExploreD3.GraphNetwork.isAnimated("viz");if(g=="true"){var f=d.getForce();if((d3.select("#viz").select("#D3viz").attr("animation")=="true")||(d3.select("#viz").select("#D3viz").attr("animation")==null)){f.resume()}}},1)}},graphMappingDiscreteData:function(c,a,b){metExploreD3.onloadMapping(c,function(){var e=_metExploreViz.getMappingByName(c);var d=metExploreD3.createLoadMask("Mapping in progress...","viz");if(d!=undefined){metExploreD3.showMask(d);setTimeout(function(){var s=_metExploreViz.getSessionById("viz");var j=s.getForce();j.stop();var t=e.getConditions();var h=s.getD3Data().getNodes();var w=[];var k=d3.select("#viz").select("#D3viz");k.selectAll("g.node").filter(function(i){if(this.getAttribute("mapped")==undefined||this.getAttribute("mapped")==false||this.getAttribute("mapped")=="false"){return false}else{return true}}).selectAll("rect.stroke").remove();t.forEach(function(i){h.forEach(function(z){var A=z.getMappingDataByNameAndCond(e.getName(),i);if(A!=null){var y=false;var x=A.getMapValue().valueOf();w.forEach(function(B){if(B.valueOf()==x.valueOf()){y=true}});if(!y){w.push(x)}}})});function f(x,i){if(parseFloat(x)<parseFloat(i)){return -1}if(parseFloat(x)>parseFloat(i)){return 1}return 0}function q(x,i){if(x<i){return -1}if(x>i){return 1}return 0}var r=[];var v=[];w.forEach(function(i){if(isNaN(i)){v.push(i)}else{r.push(i)}});r.sort(f);v.sort(q);w=r.concat(v);if(w.length==undefined){w.length=0}center=128;width=127;frequency=Math.PI*2*0.95/w.length;var p=top;var g=s.getColorMappingsSet();s.resetColorMapping();for(var o=0;o<w.length;o++){var l=Math.sin(frequency*o+2+w.length)*width+center;var n=Math.sin(frequency*o+0+w.length)*width+center;var u=Math.sin(frequency*o+4+w.length)*width+center;color=metExploreD3.GraphUtils.RGB2Color(l,n,u);s.addColorMapping(w[o],color);metExploreD3.GraphMapping.fixMappingColorOnNodeData(color,w[o],a,e.getName())}metExploreD3.hideMask(d);if(b!=undefined){b()}if(w.length!=0){metExploreD3.fireEventArg("selectConditionForm","afterDiscreteMapping","discrete")}else{metExploreD3.displayMessage("Warning","No mapped node on network.")}var m=metExploreD3.GraphNetwork.isAnimated("viz");if(m=="true"){var s=_metExploreViz.getSessionById("viz");var j=s.getForce();if((d3.select("#viz").select("#D3viz").attr("animation")=="true")||(d3.select("#viz").select("#D3viz").attr("animation")==null)){j.resume()}}},1)}})},fixMappingColorOnNodeData:function(a,e,c,g){var d=d3.select("#viz").select("#D3viz");var f=_metExploreViz.getSessionById("viz");var b=a;d.selectAll("g.node").filter(function(k){if(k.getBiologicalType()=="reaction"){if(k.getMappingDatasLength()==0){return false}else{var j=k.getMappingDataByNameAndCond(g,c);if(j!=null){if(j.getMapValue()==e){var h=metExploreD3.getReactionStyle();_MyThisGraphNode.addText(k,"viz",h);f.addSelectedNode(k.getId());return true}else{return false}}else{return false}}}else{if(k.getBiologicalType()=="metabolite"){if(k.getMappingDatasLength()==0){return false}else{var j=k.getMappingDataByNameAndCond(g,c);if(j!=null){if(j.getMapValue()==e){var i=metExploreD3.getMetaboliteStyle();_MyThisGraphNode.addText(k,"viz",i);f.addSelectedNode(k.getId());return true}else{return false}}else{return false}}}}}).transition().duration(3000).attr("mapped",a).style("fill",a).each(function(i){if(i.getBiologicalType()=="reaction"){var h=metExploreD3.GraphUtils.chooseTextColor(b);d3.select(this).select("text").style("fill",h)}})},graphMappingContinuousData:function(d,a,e,c,b){metExploreD3.onloadMapping(d,function(){var g=_metExploreViz.getMappingByName(d);var f=metExploreD3.createLoadMask("Mapping in progress...","viz");if(f!=undefined){metExploreD3.showMask(f);setTimeout(function(){var s=_metExploreViz.getGeneralStyle();var k=d3.select("#viz").select("#D3viz");var r=_metExploreViz.getSessionById("viz");var i=_metExploreViz.getSessionById("viz").getD3Data().getNodes();var t=g.getConditions();var o=undefined;var u=undefined;var v=g.getName();var q='{"mapping":[';var p=metExploreD3.getMetaboliteStyle();var m=metExploreD3.getReactionStyle();k.selectAll("g.node").filter(function(w){if(this.getAttribute("mapped")==undefined||this.getAttribute("mapped")==false||this.getAttribute("mapped")=="false"){return false}else{return true}}).selectAll("rect.stroke").remove();t.forEach(function(w){q+='\n{"'+w+'":[';i.forEach(function(y){var z=y.getMappingDataByNameAndCond(v,w);if(z!=null){q+="\n{";var x=z.getMapValue();q+='"node" : "'+y.getName();q+='", "value" : "'+x;if(!isNaN(x)){if(o==undefined){u=parseFloat(x);o=parseFloat(x)}else{if(u>parseFloat(x)){u=parseFloat(x)}if(o<parseFloat(x)){o=parseFloat(x)}}}q+='"},\n'}});q+="]}\n"});q+="]}\n";if(e==undefined){e=s.getColorMinMappingContinuous()}else{s.setMinColorMappingContinuous(e)}if(c==undefined){c=s.getColorMaxMappingContinuous()}else{s.setMaxColorMappingContinuous(c)}var k=d3.select("#viz").select("#D3viz");var h=r.getColorMappingsSet();r.resetColorMapping();var n=d3.scale.linear().domain([parseFloat(u),parseFloat(o)]).range([e,c]);if(u==o){r.addColorMapping(o,n(parseFloat(o)))}else{r.addColorMapping(o,n(parseFloat(o)));r.addColorMapping(u,n(parseFloat(u)))}k.selectAll("g.node").each(function(z){if(z.getMappingDatasLength()!=0){if(z.getBiologicalType()=="reaction"){var y=z.getMappingDataByNameAndCond(v,a);if(y!=null){if(!isNaN(y.getMapValue())){_MyThisGraphNode.addText(z,"viz",m);d3.select(this).transition().duration(2000).attr("mapped",n(parseFloat(parseFloat(y.getMapValue())))).style("fill",n(parseFloat(y.getMapValue())));var w=metExploreD3.GraphUtils.chooseTextColor(n(parseFloat(y.getMapValue())));d3.select(this).select("text").style("fill",w);r.addSelectedNode(z.getId())}}}else{var y=z.getMappingDataByNameAndCond(v,a);if(y!=null){if(!isNaN(y.getMapValue())){var x=metExploreD3.getMetaboliteStyle();_MyThisGraphNode.addText(z,"viz",x);d3.select(this).transition().duration(2000).attr("mapped",n(parseFloat(parseFloat(y.getMapValue())))).style("fill",n(parseFloat(y.getMapValue())));r.addSelectedNode(z.getId())}}}}});metExploreD3.hideMask(f);if(u!=undefined){metExploreD3.fireEventArg("selectConditionForm","afterContinuousMapping","continuous")}else{metExploreD3.displayMessage("Warning","No mapped node on network.")}if(b!=undefined){b()}var l=metExploreD3.GraphNetwork.isAnimated("viz");if(l=="true"){var r=_metExploreViz.getSessionById("viz");var j=r.getForce();if((d3.select("#viz").select("#D3viz").attr("animation")=="true")||(d3.select("#viz").select("#D3viz").attr("animation")==null)){j.resume()}}},1)}})},graphMappingBinary:function(b){var c=metExploreD3.getSessionsSet();var e=metExploreD3.getSessionById(c,"viz");var d=e.getForce();d.stop();var a=metExploreD3.createLoadMask("Mapping in progress...","viz");if(a!=undefined){metExploreD3.showMask(a);setTimeout(function(){metExploreD3.GraphMapping.fixMappingColorOnNode("#056da1",1,b);metExploreD3.hideMask(a);var h=metExploreD3.GraphNetwork.isAnimated("viz");if(h=="true"){var f=metExploreD3.getSessionsSet();var i=metExploreD3.getSessionById(f,"viz");var g=i.getForce();if((d3.select("#viz").select("#D3viz").attr("animation")=="true")||(d3.select("#viz").select("#D3viz").attr("animation")==null)){g.resume()}}},1)}},fixMappingColorOnNode:function(b,e,c){var d=d3.select("#viz").select("#D3viz");var f=metExploreD3.getMetabolitesSet();var a=metExploreD3.getReactionsSet();d.selectAll("g.node").filter(function(i){if(i.getBiologicalType()=="reaction"){if(metExploreD3.getReactionById(a,i.getId()).get("mapped")==undefined){return false}else{if((metExploreD3.getReactionById(a,i.getId()).get("mapped")!=0)&&metExploreD3.getReactionById(a,i.getId()).get(c)==e){var j=metExploreD3.getSessionsSet();var g=metExploreD3.getReactionStyle();_MyThisGraphNode.addText(i,"viz",g,j);return true}else{return false}}}else{if(i.getBiologicalType()=="metabolite"&&!i.isSideCompound()){if(metExploreD3.getMetaboliteById(f,i.getId())==null){return false}if(metExploreD3.getMetaboliteById(f,i.getId()).get("mapped")==undefined){return false}else{if((metExploreD3.getMetaboliteById(f,i.getId()).get("mapped")!=0)&&metExploreD3.getMetaboliteById(f,i.getId()).get(c)==e){var j=metExploreD3.getSessionsSet();var h=metExploreD3.getMetaboliteStyle();_MyThisGraphNode.addText(i,"viz",h,j);return true}else{return false}}}}}).transition().duration(4000).attr("mapped",b).style("fill",b)},setDiscreteMappingColor:function(b,e,c,g){var f=_metExploreViz.getSessionById("viz");var d=f.getForce();d.stop();var a=metExploreD3.createLoadMask("Mapping in progress...","viz");if(a!=undefined){metExploreD3.showMask(a);setTimeout(function(){var i=d3.select("#viz").select("#D3viz");var j=f.getColorMappingsSet();var h=f.getColorMappingById(e);h.setValue(b);metExploreD3.GraphMapping.fixMappingColorOnNodeData(b,e,c,g);metExploreD3.hideMask(a)},1)}},setContinuousMappingColor:function(f,i,j,e){var h=_metExploreViz.getSessionById("viz");var b=h.getForce();b.stop();var d=metExploreD3.createLoadMask("Mapping in progress...","viz");if(d!=undefined){metExploreD3.showMask(d);var c=d3.select("#viz").select("#D3viz");var a=h.getColorMappingsSet();var g=h.getColorMappingById(i);g.setValue(f);metExploreD3.hideMask(d)}},removeGraphMapping:function(b){var e=_metExploreViz.getSessionById("viz");var c=d3.select("#viz").select("#D3viz");var d=metExploreD3.getMetabolitesSet();var a=metExploreD3.getReactionsSet();c.selectAll("g.node").filter(function(f){if(f.getBiologicalType()=="reaction"){if(metExploreD3.getReactionById(a,f.getId()).get("mapped")==undefined){return false}else{return metExploreD3.getReactionById(a,f.getId()).get("mapped")!=0}}else{if(f.getBiologicalType()=="metabolite"){if(metExploreD3.getMetaboliteById(d,f.getId()).get("mapped")==undefined){return false}else{return metExploreD3.getMetaboliteById(d,f.getId()).get("mapped")!=0}}}}).transition().duration(1000).attr("transform",function(f){return"translate("+f.x+", "+f.y+") scale(1)"}).style("fill","white");c.selectAll("g.node").filter(function(f){if(this.getAttribute("mapped")==undefined||this.getAttribute("mapped")==false||this.getAttribute("mapped")=="false"){return false}else{return true}}).attr("mapped","false").selectAll("rect.stroke").remove()},removeGraphMappingData:function(a){var e=_metExploreViz.getSessionById("viz");var c=d3.select("#viz").select("#D3viz");c.selectAll("g.node").transition().duration(1000).attr("transform",function(f){return"translate("+f.x+", "+f.y+") scale(1)"}).style("fill","white").style("opacity",1).each(function(f){if(f.getBiologicalType()=="reaction"){if(f.isSelected()){d3.select(this).select("text").transition().duration(4000).style("fill","white")}else{d3.select(this).select("text").transition().duration(4000).style("fill","black")}}});c.selectAll("g.node").filter(function(f){if(this.getAttribute("mapped")==undefined||this.getAttribute("mapped")==false||this.getAttribute("mapped")=="false"){return false}else{return true}}).attr("mapped","false").selectAll("rect.stroke").remove();var d=metExploreD3.getMetaboliteStyle();var b=metExploreD3.getLinkStyle();metExploreD3.GraphLink.refreshLink("viz",e,b,d)},launchAfterMappingFunction:function(b,d){var a=_metExploreViz.getMappingByName(b);if(a!==null){d(a);return}var c=this;setTimeout(function(){c.launchAfterMappingFunction(b,d)},100)},onloadMapping:function(a,b){this.launchAfterMappingFunction(a,b)},removeMappingData:function(a){this.onloadMapping(a.get("title"),function(b){metExploreD3.fireEventArg("selectConditionForm","removeMapping",b)})},loadDataFromJSON:function(b){var d=_metExploreViz.getSessionById("viz");var c=d.getForce();c.stop();var a=metExploreD3.createLoadMask("Mapping in progress...","viz");if(a!=undefined){metExploreD3.showMask(a);setTimeout(function(){var g=Ext.decode(b);var f=[];g.mappings.forEach(function(j){f.push(j.name)});var e=new Mapping(g.name,f,g.targetLabel);_metExploreViz.addMapping(e);metExploreD3.GraphMapping.generateMapping(e,g.mappings);metExploreD3.hideMask(a);metExploreD3.fireEventArg("selectMappingVisu","jsonmapping",e);var i=metExploreD3.GraphNetwork.isAnimated("viz");if(i=="true"){var h=d.getForce();if((d3.select("#viz").select("#D3viz").attr("animation")=="true")||(d3.select("#viz").select("#D3viz").attr("animation")==null)){h.resume()}}},1)}},loadDataTSV:function(b,c){var e=_metExploreViz.getSessionById("viz");var d=e.getForce();d.stop();var a=metExploreD3.createLoadMask("Mapping in progress...","viz");if(a!=undefined){metExploreD3.showMask(a);d3.tsv(b,function(i){var j=b.split("/");var n=b.split("/")[j.length-1];var k=Object.keys(i[0])[0];var o=Object.keys(i[0]).indexOf(k);var l=Object.keys(i[0]);if(o>-1){l.splice(o,1)}var m=[];var f=new Mapping(n,l,k,m);_metExploreViz.addMapping(f);metExploreD3.GraphMapping.mapNodeDataFile(f,i);metExploreD3.fireEventArg("selectMappingVisu","jsonmapping",f);metExploreD3.hideMask(a);if(c!=undefined){c()}var h=metExploreD3.GraphNetwork.isAnimated("viz");if(h=="true"){var g=e.getForce();if((d3.select("#viz").select("#D3viz").attr("animation")=="true")||(d3.select("#viz").select("#D3viz").attr("animation")==null)){g.resume()}}})}},generateMapping:function(a,b){var d=_metExploreViz.getSessionById("viz");var c=d.getD3Data();switch(a.getTargetLabel()){case"reactionDBIdentifier":if(!(b.length==1&&b[0].name=="undefined")){b.forEach(function(e){e.data.forEach(function(h){var i=new MappingData(h.node,a.getName(),e.name,h.value);a.addMap(i);var f=c.getNodeByDbIdentifier(h.node);if(f!=undefined){var g=new MappingData(f,a.getName(),e.name,h.value);f.addMappingData(g)}})})}else{b[0].data.forEach(function(g){var h=new MappingData(g.node,a.getName(),b[0].name,g.value);a.addMap(h);var e=c.getNodeByDbIdentifier(g.node);if(e!=undefined){var f=new MappingData(e,a.getName(),b[0].name,g.value);e.addMappingData(f)}})}break;case"metaboliteDBIdentifier":b.forEach(function(e){e.data.forEach(function(h){var i=new MappingData(h.node,a.getName(),e.name,h.value);a.addMap(i);var f=c.getNodeByDbIdentifier(h.node);if(f!=undefined){var g=new MappingData(f,a.getName(),e.name,h.value);f.addMappingData(g)}})});break;case"reactionId":if(!(b.length==1&&b[0].name=="undefined")){b.forEach(function(e){e.data.forEach(function(h){var i=new MappingData(h.node,a.getName(),e.name,h.value);a.addMap(i);var f=c.getNodeById(h.node);if(f!=undefined){var g=new MappingData(f,a.getName(),e.name,h.value);f.addMappingData(g)}})})}else{b[0].data.forEach(function(g){var h=new MappingData(g.node,a.getName(),b[0].name,g.value);a.addMap(h);var e=c.getNodeById(g.node);if(e!=undefined){var f=new MappingData(e,a.getName(),b[0].name,g.value);e.addMappingData(f)}})}break;case"metaboliteId":b.forEach(function(e){e.data.forEach(function(h){var i=new MappingData(h.node,a.getName(),e.name,h.value);a.addMap(i);var f=c.getNodeById(h.node);if(f!=undefined){var g=new MappingData(f,a.getName(),e.name,h.value);if(h.inchi!=undefined){f.mappedInchi=h.inchi}f.addMappingData(g)}})});break;case"inchi":break;default:metExploreD3.displayMessage("Warning",'The type of node "'+a.getTargetLabel()+"\" isn't know.")}}};