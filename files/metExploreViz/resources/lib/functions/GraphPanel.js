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
metExploreD3.GraphPanel={getHeight:function(a){return d3.select("#"+a).select("#D3viz").style("height")},getWidth:function(a){return d3.select("#"+a).select("#D3viz").style("width")},resizeViz:function(b){var f=metExploreD3.getScaleById(b);if(f!=undefined){d3.select("#metexplore").text("");d3.select("#"+b).select("#D3viz").attr("width",$("#"+b).width());d3.select("#"+b).select("#D3viz").attr("height",$("#"+b).height());d3.select("#"+b).select("#D3viz").select("#foreignObject").attr("transform","translate("+($("#"+b).width()-300)+",100) scale(1)");var a=f.getZoomScale();var e=d3.scale.linear().domain([0,$("#"+b).width()]).range([0,$("#"+b).width()]);var d=d3.scale.linear().domain([$("#"+b).height(),0]).range([$("#"+b).height(),0]);var c=f.getZoom().translate();f.getZoom().x(e).y(d).translate(c).scale(a);d3.select("#"+b).select("#D3viz").select("#brush").call(d3.svg.brush().x(e).y(d).on("brushstart",function(j){document.addEventListener("mousedown",function(l){if(l.button===1){l.stopPropagation();l.preventDefault();l.stopImmediatePropagation()}});var h=d3.select("#"+b).select("#buttonHand").attr("scrollable");_MyThisGraphNode.activePanel=this.parentNode.parentNode.id;var i=_metExploreViz.getSessionById(_MyThisGraphNode.activePanel);if(d3.event.sourceEvent.button!=1&&h!="true"){if(i!=undefined){if(i.isLinked()){var k=_metExploreViz.getSessionById("viz");if(k!=undefined){var g=k.getForce();if(g!=undefined){g.stop()}}}else{var g=i.getForce();if(g!=undefined){g.stop()}}}brushing=true;d3.select("#"+b).select("#brush").classed("hide",false);d3.select("#"+b).select("#D3viz").on("mousedown.zoom",null);nodeBrushed=d3.select("#"+b).select("#graphComponent").selectAll("g.node");nodeBrushed.each(function(l){l.previouslySelected=l.isSelected()})}else{var g=i.getForce();if(g!=undefined){g.stop()}d3.select("#"+b).selectAll("#D3viz").style("cursor","all-scroll");d3.selectAll("#brush").classed("hide",true)}}).on("brushend",function(){if(d3.event.sourceEvent.button!=1&&brushing){var o=d3.event.target.extent();if(o[1][0]-o[0][0]>20||o[1][1]-o[0][1]>20){var l;var o=d3.event.target.extent();var i=metExploreD3.getScaleById(b);var k=i.getZoomScale();var h=metExploreD3.createLoadMask("Selection in progress...",b);if(h!=undefined){metExploreD3.showMask(h);metExploreD3.deferFunction(function(){nodeBrushed.classed("selected",function(v){var u=i.getZoom().x();var t=i.getZoom().y();l=(u(o[0][0])<=u(v.x)&&u(v.x)<u(o[1][0]))&&(t(o[0][1])<=t(v.y)&&t(v.y)<t(o[1][1]));if((v.isSelected()==false&&l==true)||(v.isSelected()==true&&l==false&&!v.previouslySelected)){_MyThisGraphNode.selection(v,b)}return l});metExploreD3.hideMask(h);var r=_metExploreViz.getSessionById(_MyThisGraphNode.activePanel);if(r!=undefined){if(r.isLinked()){var s=_metExploreViz.getSessionById("viz");if(s!=undefined){var p=metExploreD3.GraphNetwork.isAnimated(s.getId());if(p=="true"){var q=s.getForce();if(q!=undefined){if((metExploreD3.GraphNetwork.isAnimated(s.getId())=="true")||(metExploreD3.GraphNetwork.isAnimated(s.getId())==null)){q.start()}}}}}else{var q=r.getForce();var p=metExploreD3.GraphNetwork.isAnimated(r.getId());if(p=="true"){var q=r.getForce();if(q!=undefined){if((metExploreD3.GraphNetwork.isAnimated(r.getId())=="true")||(metExploreD3.GraphNetwork.isAnimated(r.getId())==null)){q.start()}}}}}brushing=false},100)}}}else{var m=_metExploreViz.getSessionById(_MyThisGraphNode.activePanel);if(m!=undefined){if(m.isLinked()){var j=_metExploreViz.getSessionById("viz");if(j!=undefined){var n=metExploreD3.GraphNetwork.isAnimated(j.getId());if(n=="true"){var g=j.getForce();if(g!=undefined){if((metExploreD3.GraphNetwork.isAnimated(j.getId())=="true")||(metExploreD3.GraphNetwork.isAnimated(j.getId())==null)){g.start()}}}}}else{var g=m.getForce();var n=metExploreD3.GraphNetwork.isAnimated(m.getId());if(n=="true"){var g=m.getForce();if(g!=undefined){if(d3.select(metExploreD3.GraphNetwork.isAnimated(m.getId())=="true")||(metExploreD3.GraphNetwork.isAnimated(m.getId())==null)){g.start()}}}}}}d3.event.target.clear();d3.select(this).call(d3.event.target);var i=metExploreD3.getScaleById(b);d3.select("#"+b).selectAll("#D3viz").style("cursor","default");d3.select("#"+b).selectAll("#D3viz").call(i.getZoom()).on("dblclick.zoom",null).on("mousedown",null);d3.event.target.extent();d3.selectAll("#brush").classed("hide",false)}));d3.select("#viz").select("#D3viz").select("#logoViz").select("image").attr("x",$("#viz").width()-88).attr("y",$("#viz").height()-70);d3.select("#metexplore").text("metExploreViz").attr("x",$("#viz").width()-112).attr("y",$("#viz").height()-10)}},resizePanels:function(a){var g=_metExploreViz.getSessionsSet();var i=_metExploreViz.getSessionById(a);var e=$("#"+a).height();var k=$("#"+a).width();d3.select("#"+a).select("#D3viz").select("foreignObject").attr("x",k-300);if(d3.select("#"+a).select("#D3viz").select("#buttonZoomIn")[0][0]!=null&&d3.select("#"+a).select("#D3viz").select("#buttonZoomOut")[0][0]!=null&&d3.select("#"+a).select("#D3viz").select("#buttonHand")[0][0]!=null){var j=d3.select("#"+a).select("#D3viz").select("#buttonZoomIn").attr("x");var d=k-60-j;d3.select("#"+a).select("#D3viz").select("#buttonZoomIn").attr("transform","translate("+d+",0) scale(1)");j=d3.select("#"+a).select("#D3viz").select("#buttonZoomOut").attr("x");d=k-110-j;d3.select("#"+a).select("#D3viz").select("#buttonZoomOut").attr("transform","translate("+d+",0) scale(1)");j=d3.select("#"+a).select("#D3viz").select("#buttonHand").attr("x");d=k-160-j;d3.select("#"+a).select("#D3viz").select("#buttonHand").attr("transform","translate("+d+",0) scale(1)");j=d3.select("#"+a).select("#D3viz").select("#whiteBlack").attr("x");d=k-100-j;d3.select("#"+a).select("#D3viz").select("#whiteBlack").attr("transform","translate("+d+",0) scale(1)");j=d3.select("#"+a).select("#D3viz").select("#invertColor").attr("x");d=k-100-j;d3.select("#"+a).select("#D3viz").select("#invertColor").attr("transform","translate("+d+",0) scale(1)")}if(i!=undefined){if(i.isLinked()){var f=_metExploreViz.getSessionById("viz");var b=f.getForce();if(b!=undefined){var e=$("#viz").height();var k=$("#viz").width();b.size([k,e]);var c=d3.select("#viz").select("#buttonAnim").attr("animation");if(c=="true"){b.resume()}}}else{var b=i.getForce();if(b!=undefined){var e=$("#"+a).height();var k=$("#"+a).width();b.size([k,e]);var c=d3.select("#"+a).select("#buttonAnim").attr("animation");if(c=="true"){b.resume()}}}}var m=_metExploreViz.getSessionsSet();var i=_metExploreViz.getSessionById(a);if(i!=undefined){var c=metExploreD3.GraphNetwork.isAnimated(a);if(c=="true"){if(i.isLinked()){for(var l in m){if(m[l].isLinked()){metExploreD3.GraphNetwork.animationButtonOn(m[l].getId())}}var b=_metExploreViz.getSessionById("viz").getForce();b.resume()}else{metExploreD3.GraphNetwork.animationButtonOn(a);var b=i.getForce();b.resume()}}}},removeSvgComponents:function(a){d3.select("#"+a).select("#D3viz").selectAll("*").remove()},refreshJSON:function(b){if(!_metExploreViz.isLaunched()){metExploreD3.GraphPanel.initiateViz("D3")}var c=Ext.getCmp("viz");if(c!=undefined){var a=metExploreD3.createLoadMask("Refresh in process...","viz");if(a!=undefined){metExploreD3.showMask(a);var d=this;setTimeout(function(){metExploreD3.fireEvent("selectConditionForm","resetMapping");var e=Ext.decode(b);if(e.sessions!=undefined){metExploreD3.GraphPanel.loadDataJSON(b)}else{metExploreD3.GraphPanel.initDataJSON(b)}metExploreD3.hideMask(a);metExploreD3.fireEvent("graphPanel","afterrefresh")},100)}}},refreshPanel:function(a,c){var b=this;metExploreD3.hideInitialMask();if(!_metExploreViz.isLaunched()||metExploreD3.getGeneralStyle().windowsAlertIsDisable()){metExploreD3.GraphPanel.refreshJSON(a);if(typeof c==="function"){c()}}else{Ext.Msg.show({title:"Are you sure?",msg:"This action will remove previous network. <br />Would you like to do this?",buttons:Ext.Msg.OKCANCEL,fn:function(d){if(d=="ok"){metExploreD3.GraphPanel.refreshJSON(a);if(c!=undefined&&typeof c==="function"){c()}}},icon:Ext.Msg.QUESTION})}},loadDataJSON:function(m){var i=_metExploreViz.getSessionById("viz");var g=i.getForce();if(g!=undefined){g.nodes([]);g.links([]);g.on("start",null);g.on("end",null);g.on("tick",null)}i.reset();var n=Ext.decode(m);if(n.comparedPanels){n.comparedPanels.forEach(function(o){_metExploreViz.addComparedPanel(new ComparedPanel(o.panel,o.visible,o.parent,o.title))})}if(n.mappings){n.mappings.forEach(function(o){var o=new Mapping(o.name,o.conditions,o.targetLabel);_metExploreViz.addMapping(o)})}if(n.generalStyle){var c=metExploreD3.getGeneralStyle();var b=new GeneralStyle(c.getWebsiteName(),n.generalStyle.colorMinMappingContinuous,n.generalStyle.colorMaxMappingContinuous,n.generalStyle.maxReactionThreshold,n.generalStyle.displayLabelsForOpt,n.generalStyle.displayLinksForOpt,n.generalStyle.displayConvexhulls,n.generalStyle.clustered,c.isDisplayedCaption(),c.hasEventForNodeInfo(),c.loadButtonIsHidden(),c.windowsAlertIsDisable());metExploreD3.setGeneralStyle(b)}var j=n.sessions;for(var k in j){if(k!="viz"){var i=new NetworkVizSession();i.setVizEngine("D3");i.setId(k);i.setLinked(j[k].linked);_metExploreViz.addSession(i);var h=Ext.getCmp("comparePanel");var e=_metExploreViz.getComparedPanelById(k);var l=[{id:e.getParent(),title:e.getTitle(),html:'<div id="'+e.getParent()+'" height="100%" width="100%"></div>',flex:1,closable:true,collapsible:true,collapseDirection:"left"}];h.add(l);h.expand();metExploreD3.fireEventArg("comparePanel","initiateviz",k)}if(j[k].colorMappings){j[k].colorMappings.forEach(function(o){i.addColorMapping(o.name,o.value)})}var f=j[k].animated;if(!f){f=false}i.setAnimated(f);var d=new NetworkData(k);d.cloneObject(j[k].d3Data);var a=d.getNodes();a.forEach(function(o){if(o.getBiologicalType()=="metabolite"){if(d.getCompartmentByName(o.getCompartment())==null){d.addCompartment(o.getCompartment())}}else{o.getPathways().forEach(function(p){if(d.getPathwayByName(p)==null){d.addPathway(p)}})}if(o.getMappingDatasLength()>0){o.getMappingDatas().forEach(function(p){p.setNode(o);if(_metExploreViz.getMappingByName(p.getMappingName())!=null){var q=_metExploreViz.getMappingByName(p.getMappingName());q.addMap(p)}})}});d.setId(k);if(k=="viz"){_metExploreViz.setInitialData(_metExploreViz.cloneNetworkData(d))}i.setD3Data(d);if(j[k].selectedNodes){j[k].selectedNodes.forEach(function(o){i.addSelectedNode(o)})}if(_metExploreViz.getMappingsLength()>0&&k=="viz"&&!metExploreD3.getGeneralStyle().windowsAlertIsDisable()){metExploreD3.displayMessageYesNo("Mapping","Do you want keep mappings.",function(o){if(o=="yes"){_metExploreViz.getMappingsSet().forEach(function(p){metExploreD3.GraphMapping.reloadMapping(p);metExploreD3.fireEventArg("selectMappingVisu","jsonmapping",p)});metExploreD3.fireEventArg("buttonRefresh","reloadMapping",true)}else{metExploreD3.fireEventArg("buttonMap","reloadMapping",false);metExploreD3.fireEventArg("buttonRefresh","reloadMapping",false);_metExploreViz.resetMappings()}})}if(j[k].mapped){i.setMapped(j[k].mapped)}if(j[k].mappingDataType){i.setMappingDataType(j[k].mappingDataType)}if(j[k].activeMapping){i.setActiveMapping(j[k].activeMapping)}}if(n.linkStyle){var b=new LinkStyle(n.linkStyle.size,n.linkStyle.lineWidth,n.linkStyle.markerWidth,n.linkStyle.markerHeight,n.linkStyle.markerInColor,n.linkStyle.markerOutColor,n.linkStyle.markerStrokeColor,n.linkStyle.markerStrokeWidth,n.linkStyle.strokeColor);metExploreD3.setLinkStyle(b)}if(n.metaboliteStyle){var b=new MetaboliteStyle(n.metaboliteStyle.height,n.metaboliteStyle.width,n.metaboliteStyle.rx,n.metaboliteStyle.ry,n.metaboliteStyle.fontSize,n.metaboliteStyle.strokeWidth,n.metaboliteStyle.label,n.metaboliteStyle.strokeColor);metExploreD3.setMetaboliteStyle(b)}if(n.reactionStyle){var b=new ReactionStyle(n.reactionStyle.height,n.reactionStyle.width,n.reactionStyle.rx,n.reactionStyle.ry,n.reactionStyle.label,n.reactionStyle.fontSize,n.reactionStyle.strokeColor,n.reactionStyle.strokeWidth);metExploreD3.setReactionStyle(b)}for(var k in j){metExploreD3.GraphNetwork.refreshSvg(k)}},initDataJSON:function(g){var e=_metExploreViz.getSessionById("viz");var h=e.getD3Data();_metExploreViz.resetOldCoodinates();h.getNodes().forEach(function(i){_metExploreViz.addOldCoodinates({id:i.getId(),x:i.x,px:i.px,y:i.y,py:i.py})});var d=e.getForce();if(d!=undefined){d.nodes([]);d.links([]);d.on("start",null);d.on("end",null);d.on("tick",null)}e.reset();e.setAnimated(true);var h=new NetworkData("viz");h.cloneObject(Ext.decode(g));var b=h.getNodes();b.forEach(function(i){if(i.getBiologicalType()=="metabolite"){if(h.getCompartmentByName(i.getCompartment())==null){h.addCompartment(i.getCompartment())}}else{i.getPathways().forEach(function(j){if(h.getPathwayByName(j)==null){h.addPathway(j)}})}});h.setId("viz");_metExploreViz.setInitialData(_metExploreViz.cloneNetworkData(h));e.setD3Data(h);metExploreD3.GraphNetwork.refreshSvg("viz");var c=_metExploreViz.getOldCoodinates();if(c.length>0){var a=false;var f=0;while(f<c.length-1&&!a){if(h.getNodeById(c[f].id)!=undefined){a=true}f++}if(a&&!metExploreD3.getGeneralStyle().windowsAlertIsDisable()){metExploreD3.displayMessageYesNo("Coodinates","Do you want keep node coordinates.",function(i){if(i=="yes"){var j=[];c.forEach(function(k){var l=h.getNodeById(k.id);if(l!=undefined){l.x=k.x;l.y=k.y;l.px=k.px;l.py=k.py;j.push(k.id)}});d3.select("#viz").select("#graphComponent").selectAll("g.node").filter(function(k){return j.indexOf(k.id)!=-1}).each(function(k){_MyThisGraphNode.selection(k,"viz")})}})}}if(_metExploreViz.getMappingsLength()>0){_metExploreViz.getMappingsSet().forEach(function(i){metExploreD3.GraphMapping.reloadMapping(i);metExploreD3.fireEventArg("selectMappingVisu","jsonmapping",i)});metExploreD3.fireEventArg("buttonRefresh","reloadMapping",true)}},initiateViz:function(a){d3.select("#viz").selectAll("#presentationViz, #presentationLogoViz").classed("hide",true);metExploreD3.fireEvent("viz","initiateviz");_metExploreViz.setLaunched(true);if(a=="D3"){metExploreD3.GraphNetwork.delayedInitialisation("viz")}},loadData:function(a){var b=_metExploreViz.getSessionById(a);return b}};