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
metExploreD3.GraphUtils={launchWebService:function(a,b){$.ajax({url:"src/php/metExplore.php",type:"POST",dataType:"text",data:{data:a},success:function(c){b(c)},error:function(c){alert("Bad")}})},parseWebServiceMapping:function(a){var c=Ext.decode(a);var d=c.mappingdata[0].mappings;d.forEach(function(h){var g=h.data;var f=0;var e=false;while(f<g.length&&!e){if(g.value!=undefined){e=true}f++}if(!e){h.name="undefined"}});var b=JSON.stringify(c.mappingdata[0]);return b},handleFileSelect:function(b,c){if(!window.File||!window.FileReader||!window.FileList||!window.Blob){alert("The File APIs are not fully supported in this browser.");return}if(!b){alert("couldn't find the fileinput element.")}else{if(!b.files){alert("This browser doesn't seem to support the `files` property of file inputs.")}else{file=b.files[0];var a=new FileReader();a.onload=function(){c(a.result,file.name)};a.readAsText(file)}}},RGB2Color:function(d,c,a){return"#"+metExploreD3.GraphUtils.byte2Hex(d)+metExploreD3.GraphUtils.byte2Hex(c)+metExploreD3.GraphUtils.byte2Hex(a)},chooseTextColor:function(c){if(c!=undefined){var b;if(c.slice(0,1)=="#"){var d=metExploreD3.GraphUtils.hexToRGB(c);var f=d.r;var e=d.g;var a=d.b;if((f*0.299+e*0.687+a*0.114)>186){b="black"}else{b="white"}}else{if(c.slice(0,3)=="rgb"){c=c.replace("rgb","");c=c.replace("(","");c=c.replace(")","");d=c.split(",");var f=d[0];var e=d[1];var a=d[2];if((f*0.299+e*0.687+a*0.114)>186){b="black"}else{b="white"}}else{b="black"}}return b}else{return"black"}},byte2Hex:function(b){var a="0123456789ABCDEF";return String(a.substr((b>>4)&15,1))+a.substr(b&15,1)},hexToRGB:function(c){var b=/^#?([a-f\d])([a-f\d])([a-f\d])$/i;c=c.replace(b,function(e,h,f,d){return h+h+f+f+d+d});var a=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(c);return a?{r:parseInt(a[1],16),g:parseInt(a[2],16),b:parseInt(a[3],16)}:null},exportGraphPng:function(){var c=$("#viz").cytoscape("get");var b=c.png();var a=new Blob([String(b)],{type:"image/png",encoding:"utf-8"});saveAs(a,"graph.png")},exportPNG:function(){metExploreD3.GraphUtils.escapeUnExportNode();window.URL=(window.URL||window.webkitURL);metExploreD3.GraphUtils.initialize("png")},exportJPG:function(){metExploreD3.GraphUtils.escapeUnExportNode();window.URL=(window.URL||window.webkitURL);metExploreD3.GraphUtils.initialize("jpeg")},escapeUnExportNode:function(){d3.selectAll("#buttonAnim").style("display","none");var b=d3.selectAll("#brush");if(b!=null){b.style("display","none")}var c=d3.selectAll("#buttonLink");if(c!=null){c.style("display","none")}var e=d3.selectAll("#buttonZoomIn");if(e!=null){e.style("display","none")}var g=d3.selectAll("#buttonHand");if(g!=null){g.style("display","none")}var a=d3.selectAll("#whiteBlack");if(a!=null){a.style("display","none")}var f=d3.selectAll("#invertColor");if(f!=null){f.style("display","none")}var d=d3.selectAll("#buttonZoomOut");if(d!=null){d.style("display","none")}},exportSVG:function(){metExploreD3.GraphUtils.escapeUnExportNode();window.URL=(window.URL||window.webkitURL);var a=metExploreD3.GraphUtils.initialize("svg")},initialize:function(h){var g=_metExploreViz.getSessionById("viz");var a=g.getForce();if(g!=undefined){var a=g.getForce();if(a!=undefined){if(metExploreD3.GraphNetwork.isAnimated("viz")=="true"){a.stop()}}}var f={xmlns:"http://www.w3.org/2000/xmlns/",xlink:"http://www.w3.org/1999/xlink",svg:"http://www.w3.org/2000/svg"};var j=[window.document],b=[];iframes=document.querySelectorAll("iframe"),objects=document.querySelectorAll("object");var c=window.document.createElementNS(f.svg,"svg");window.document.body.appendChild(c);var e=getComputedStyle(c);var d=metExploreD3.createLoadMask("Export initialization...","viz");if(d!=undefined){metExploreD3.showMask(d);metExploreD3.deferFunction(function(){[].forEach.call(iframes,function(l){try{if(l.contentDocument){j.push(l.contentDocument)}}catch(m){console.log(m)}});[].forEach.call(objects,function(l){try{if(l.contentDocument){j.push(l.contentDocument)}}catch(m){console.log(m)}});j.forEach(function(m){var n=metExploreD3.GraphUtils.getSources(m,e,f);for(var l=0;l<n.length;l++){if(n[l].classe=="D3viz"){b.push(n[l])}}});metExploreD3.hideMask(d);var k=c.parentNode;k.removeChild(c);if(b.length>1){metExploreD3.GraphUtils.createPopover(b,h)}else{if(b.length>0){return metExploreD3.GraphUtils.download(b[0],h)}else{alert("The Crowbar couldn’t find any SVG nodes.")}}},100)}},createPopover:function(b,d){metExploreD3.GraphUtils.cleanup();b.forEach(function(e){b.forEach(function(f){if(e!==f){if((Math.abs(e.top-f.top)<38)&&(Math.abs(e.left-f.left)<38)){f.top+=38;f.left+=38}}})});var a=document.createElement("div");document.body.appendChild(a);a.setAttribute("class","svg-crowbar");a.style["z-index"]=10000000;a.style.position="absolute";a.style.top=0;a.style.left=0;var c=document.createElement("div");document.body.appendChild(c);c.setAttribute("class","svg-crowbar");c.style.background="rgba(255, 255, 255, 0.7)";c.style.position="fixed";c.style.left=0;c.style.top=0;c.style.width="100%";c.style.height="100%";b.forEach(function(h,f){var g=document.createElement("div");a.appendChild(g);g.setAttribute("class","svg-crowbar");g.style.position="absolute";g.style.top=(h.top+document.body.scrollTop)+"px";g.style.left=(document.body.scrollLeft+h.left)+"px";g.style.padding="4px";g.style["border-radius"]="3px";g.style.color="white";g.style["text-align"]="center";g.style["font-family"]="'Helvetica Neue'";g.style.background="rgba(0, 0, 0, 0.8)";g.style["box-shadow"]="0px 4px 18px rgba(0, 0, 0, 0.4)";g.style.cursor="move";g.textContent="SVG #"+f+": "+(h.id?"#"+h.id:"")+(h.classe?"."+h.classe:"");var e=document.createElement("button");g.appendChild(e);e.setAttribute("data-source-id",f);e.style.width="150px";e.style["font-size"]="12px";e.style["line-height"]="1.4em";e.style.margin="5px 0 0 0";e.textContent="Download";e.onclick=function(j){metExploreD3.GraphUtils.download(h,d)}})},cleanup:function(){var f=document.querySelectorAll(".svg-crowbar");[].forEach.call(f,function(j){j.parentNode.removeChild(j)});d3.selectAll("#buttonAnim").style("display","inline");var b=d3.selectAll("#brush");if(b!=null){b.style("display","inline")}var c=d3.selectAll("#buttonLink");if(c!=null){c.style("display ","inline")}var e=d3.selectAll("#buttonZoomIn");if(e!=null){e.style("display","inline")}var h=d3.selectAll("#buttonHand");if(h!=null){h.style("display","inline")}var g=d3.selectAll("#invertColor");if(g!=null){g.style("display","inline")}var a=d3.selectAll("#whiteBlack");if(a!=null){a.style("display","inline")}var d=d3.selectAll("#buttonZoomOut");if(d!=null){d.style("display","inline")}},getSources:function(c,d,a){var b=[],e=c.querySelectorAll("svg");[].forEach.call(e,function(l){svg=l;if(svg.id=="D3viz"){function k(z){var A=d3.select(z).node();return d3.select(A.parentNode.insertBefore(A.cloneNode(true),A.nextSibling))[0][0]}var s=k(svg);s.setAttribute("version","1.1");s.removeAttribute("xmlns");s.removeAttribute("xlink");if(!s.hasAttributeNS(a.xmlns,"xmlns")){s.setAttributeNS(a.xmlns,"xmlns",a.svg)}if(!s.hasAttributeNS(a.xmlns,"xmlns:xlink")){s.setAttributeNS(a.xmlns,"xmlns:xlink",a.xlink)}var p=s.getElementById("buttonZoomIn");if(p!=null){p.parentNode.removeChild(p)}var o=s.getElementById("buttonZoomOut");if(o!=null){o.parentNode.removeChild(o)}var w=s.getElementById("buttonHand");if(w!=null){w.parentNode.removeChild(w)}var h=s.getElementById("buttonAnim");if(h!=null){h.parentNode.removeChild(h)}var j=s.getElementById("invertColor");if(j!=null){j.parentNode.removeChild(j)}var u=s.getElementById("whiteBlack");if(u!=null){u.parentNode.removeChild(u)}var g=s.getElementById("brush");if(g!=null){g.parentNode.removeChild(g)}var m;d3.select(s).select("#graphComponent").selectAll("g.node").select(".structure_metabolite").each(function(){var A=this.firstChild.getAttribute("href");if(window.XDomainRequest){xdr=new XDomainRequest()}else{if(window.XMLHttpRequest){var E=new XMLHttpRequest();E.open("GET",A,false);E.send(null);if(E.responseXML!=null){var C=E.responseXML.getElementsByTagName("svg")[0];if(this.getAttribute("width")!=null){var F=parseFloat(this.getAttribute("width").split("px")[0])/parseFloat(C.getAttribute("width").split("px")[0]);C.setAttribute("x",this.getAttribute("x"));C.setAttribute("y",this.getAttribute("y"));C.setAttribute("width",this.getAttribute("width").split("px")[0]);C.setAttribute("height",this.getAttribute("height").split("px")[0]);C.setAttribute("class","structure_metabolite");var z=C.children;for(var B=0;B<z.length;B++){z[B].setAttribute("transform","scale("+F+")")}var D=this.parentNode;D.removeChild(this);D.appendChild(C)}}}else{alert("Votre navigateur ne gère pas l'AJAX cross-domain !")}}});d3.select(s).select(".logoViz").each(function(){var A=this.firstChild.getAttribute("href");if(window.XDomainRequest){xdr=new XDomainRequest()}else{if(window.XMLHttpRequest){var D=new XMLHttpRequest();D.open("GET",A,false);D.send(null);if(D.responseXML!=null){var B=D.responseXML.getElementsByTagName("svg")[0];if(this.firstChild.getAttribute("width")!=null){B.setAttribute("x",this.firstChild.getAttribute("x"));B.setAttribute("y",this.firstChild.getAttribute("y"));B.setAttribute("width",this.firstChild.getAttribute("width").split("px")[0]);B.setAttribute("height",this.firstChild.getAttribute("height").split("px")[0]);B.setAttribute("class","logoViz");var z=B.children;var C=this.parentNode;C.removeChild(this);C.appendChild(B)}}}else{alert("Votre navigateur ne gère pas l'AJAX cross-domain !")}}});m=metExploreD3.GraphUtils.setInlineStyles(s,d,m);var r=svg.parentNode.getBoundingClientRect();var n=d3.select(s).select("#graphComponent")[0][0].getBoundingClientRect();var y=r.left+100-n.left;var x=r.top+50-n.top;d3.select(s).select("#graphComponent").attr("transform","translate("+y+","+x+") scale(1)");n=d3.select(s).select("#graphComponent")[0][0].getBoundingClientRect();var t=r.width;if((r.width+n.right-r.right+20)>t){t=r.width+n.right-r.right+20}else{d3.select(s).select("#graphComponent").attr("transform","translate(0,"+x+") scale(1)")}s.setAttribute("width",t);var f=r.height;if((r.height+n.bottom-r.bottom+20)>f){f=r.height+n.bottom-r.bottom+20}s.setAttribute("height",f);d3.select(s).select("#metexplore").text("MetExploreViz").attr("x",s.getAttribute("width")-92).attr("y",s.getAttribute("height")-10);var n=d3.select(s).select("#graphComponent")[0][0].getBoundingClientRect();var y=r.left+100-n.left;var x=r.top+50-n.top;d3.select(s).select("#graphComponent").attr("transform",d3.select(svg).select("#graphComponent").attr("transform"));n=d3.select(s).select("#graphComponent")[0][0].getBoundingClientRect();var t=r.width;s.setAttribute("width",t);var f=r.height;s.setAttribute("height",f);var q=(new XMLSerializer()).serializeToString(s);var v='<?xml version="1.0" standalone="no"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">';b.push({top:r.top,left:r.left,width:parseInt(s.getAttribute("width"))*2,height:parseInt(s.getAttribute("height"))*2,classe:s.getAttribute("class"),id:s.getAttribute("id"),parent:svg.parentNode.id,childElementCount:s.childElementCount,source:[v+q]});d3.select(s).remove()}});return b},saveAsSvg:function(c,a){var b=document.createElement("a");if(typeof b.download==="string"){b.href=c;b.download=a;document.body.appendChild(b);b.click();document.body.removeChild(b)}else{window.open(c)}var e=_metExploreViz.getSessionById("viz");var d=e.getForce();if(e!=undefined){if(d!=undefined){if(metExploreD3.GraphNetwork.isAnimated("viz")=="true"){d.start()}}}},binaryblob:function(b,h){var d=window.atob(b.toDataURL("image/"+h).replace(/^data:image\/(png|jpeg);base64,/,""));var l=new ArrayBuffer(d.length);var c=new Uint8Array(l);for(var g=0;g<d.length;g++){c[g]=d.charCodeAt(g)}var j=new DataView(l);var a=new Blob([j],{type:"image/"+h});var e=self.URL||self.webkitURL||self;var k=e.createObjectURL(a);var f='<img src="'+k+'">';d3.select("#img").html(f);return k},saveAsBinary:function(e,b,d){var g="data:image/svg+xml;base64,"+window.btoa(decodeURIComponent(encodeURIComponent(e.source)));var c=document.createElement("canvas");c.id="canvas";c.height=e.height*4;c.width=e.width*4;c.style.zIndex=8;c.style.position="absolute";c.style.border="1px solid";var a=document.getElementsByTagName("body")[0];a.appendChild(c);context=c.getContext("2d");var f=new Image();f.onload=function(){var h=metExploreD3.createLoadMask("Export in progress...",e.parent);if(h!=undefined){metExploreD3.showMask(h);metExploreD3.deferFunction(function(){context.drawImage(f,0,0,e.width*4,e.height*4);var j=metExploreD3.GraphUtils.binaryblob(c,d);var l=document.createElement("a");if(typeof l.download==="string"){l.download=b;l.href=j;document.body.appendChild(l);l.click();document.body.removeChild(l)}else{window.open(j)}var k=c.parentNode;k.removeChild(c);metExploreD3.hideMask(h);var n=_metExploreViz.getSessionById("viz");var m=n.getForce();if(n!=undefined){if(m!=undefined){if(metExploreD3.GraphNetwork.isAnimated("viz")=="true"){m.start()}}}},100)}};f.src=g},download:function(d,c){if(c=="jpeg"||c=="png"){metExploreD3.GraphUtils.saveAsBinary(d,"metabolicNetwork."+c,c)}if(c=="svg"){var a=new Blob([d.source],{type:"data:image/svg+xml"});var b=URL.createObjectURL(a);metExploreD3.GraphUtils.saveAsSvg(b,"metabolicNetwork.svg")}metExploreD3.GraphUtils.cleanup()},explicitlySetStyle:function(f,h){var b=getComputedStyle(f);var e,a,d,g;var c="";for(e=0,a=b.length;e<a;e++){d=b[e];g=b.getPropertyValue(d);if(g!==h.getPropertyValue(d)){if(f.tagName=="rect"){if(f.getAttribute("class")=="stroke"){if(d!="height"&&d!="width"){c+=d+":"+g+";"}}else{if(d!="fill"&&d!="height"&&d!="width"){c+=d+":"+g+";"}}}else{if(d!="marker-start"||d!="marker-end"){c+=d+":"+g+";"}}}}f.setAttribute("style",c)},traverse:function(c){var a=[];a.push(c);b(c);function b(d){if(d&&d.hasChildNodes()){var e=d.firstChild;if(e.className!=undefined){if(e.tagName!="image"){while(e){if(e.getAttribute("href")!="resources/icons/pause.svg"&&e.getAttribute("href")!="resources/icons/whiteBlack.png"&&e.getAttribute("href")!="resources/icons/invertColor.svg"&&e.getAttribute("href")!="resources/icons/link.svg"&&e.getAttribute("href")!="resources/icons/unlink.svg"){if(e.nodeType===1&&e.nodeName!="SCRIPT"){a.push(e);b(e)}e=e.nextSibling}else{if(e.nodeType===1&&e.nodeName!="SCRIPT"){b(e)}e=e.nextSibling}}}}else{while(e){if(e.nodeType===1&&e.nodeName!="SCRIPT"){b(e)}e=e.nextSibling}}}}return a},setInlineStyles:function(a,e,d){var c=metExploreD3.GraphUtils.traverse(a);d=c;var b=c.length;while(b--){metExploreD3.GraphUtils.explicitlySetStyle(c[b],e)}return d},exportSVGMain:function(){d3.selectAll("#buttonAnim").style("display","none");var c=d3.selectAll("#buttonLink");if(c!=null){c.style("display","none")}var b=d3.selectAll("#brush");if(b!=null){b.style("display","none")}var f=d3.selectAll("#buttonZoomIn");if(f!=null){f.style("display","none")}var h=d3.selectAll("#buttonHand");if(h!=null){h.style("display","none")}var g=d3.selectAll("#invertColor");if(g!=null){g.style("display","none")}var a=d3.selectAll("#whiteBlack");if(a!=null){a.style("display","none")}var e=d3.selectAll("#buttonZoomOut");if(e!=null){e.style("display","none")}window.URL=(window.URL||window.webkitURL);var d=metExploreD3.GraphUtils.initializeMain();return d},initializeMain:function(){var d={xmlns:"http://www.w3.org/TR/xml-names/",xlink:"http://www.w3.org/1999/xlink",svg:"http://www.w3.org/2000/svg"};var b=[window.document],a=[];iframes=document.querySelectorAll("iframe"),objects=document.querySelectorAll("object");var c=window.document.createElementNS(d.svg,"svg");window.document.body.appendChild(c);var e=getComputedStyle(c);[].forEach.call(iframes,function(f){try{if(f.contentDocument){b.push(f.contentDocument)}}catch(g){console.log(g)}});[].forEach.call(objects,function(f){try{if(f.contentDocument){b.push(f.contentDocument)}}catch(g){console.log(g)}});b.forEach(function(g){var h=metExploreD3.GraphUtils.getSources(g,e,d);for(var f=0;f<h.length;f++){if(h[f].classe=="D3viz"){a.push(h[f])}}});if(a.length>0){return metExploreD3.GraphUtils.downloadMain(a[a.length-1])}else{alert("The Crowbar couldn’t find any SVG nodes.")}},downloadMain:function(c){var a="untitled";if(c.id){a=c.id}else{if(c.classe){a=c.classe}else{if(window.document.title){a=window.document.title.replace(/[^a-z0-9]/gi,"-").toLowerCase()}}}var b=window.URL.createObjectURL(new Blob(c.source,{type:"text/xml"}));metExploreD3.GraphUtils.cleanup();return c.source[0]},saveNetworkDot:function(){var a=metExploreD3.createLoadMask("Export DOT file...","viz");if(a!=undefined){metExploreD3.showMask(a);metExploreD3.deferFunction(function(){var b="digraph dotGraph {";var d=_metExploreViz.getSessionById("viz").getD3Data().getLinks();var f=d.length;var g={};var j=0;d.forEach(function(k){var l=k.getSource().getId();var m=k.getTarget().getId();if(g[l]==undefined){g[l]=i;l=i;i++}else{l=g[l]}if(g[m]==undefined){g[m]=i;m=i;i++}else{m=g[m]}if(k.isReversible()=="true"){b+=l+" -> "+m;b+=",\n";b+=m+" -> "+l}else{b+=l+" -> "+m}if(d.indexOf(k)!=f-1){b+=",\n"}});b+="}";var c=new Blob([b],{type:"text"});var e=URL.createObjectURL(c);var h=document.createElement("a");if(typeof h.download==="string"){h.href=e;h.download="save.dot";document.body.appendChild(h);h.click();document.body.removeChild(h)}else{window.open(uri)}metExploreD3.hideMask(a)},100)}},saveNetworkJSON:function(){var a=metExploreD3.createLoadMask("Saving...","viz");if(a!=undefined){metExploreD3.showMask(a);metExploreD3.deferFunction(function(){var b="{";b+='\n"linkStyle":'+JSON.stringify(metExploreD3.getLinkStyle());b+=',\n"reactionStyle":'+JSON.stringify(metExploreD3.getReactionStyle());b+=',\n"generalStyle":'+JSON.stringify(metExploreD3.getGeneralStyle());b+=',\n"metaboliteStyle":'+JSON.stringify(metExploreD3.getMetaboliteStyle());b+=',\n"comparedPanels":'+JSON.stringify(_metExploreViz.comparedPanels);b+=',\n"linkedByTypeOfMetabolite":'+JSON.stringify(_metExploreViz.linkedByTypeOfMetabolite);if(_metExploreViz.getMappingsLength!=undefined){b+=',\n"mappings":'+JSON.stringify(_metExploreViz.getMappingsSet(),function(k,j){if(k==="name"){if(j.search("(json)")==-1){j+="(json)"}return j}if(k==="data"){return undefined}return j})}b+=',\n"sessions":{';var h=_metExploreViz.getSessionsSet();for(var e in h){h[e].getD3Data().initNodeIndex();b+="\n"+JSON.stringify(e)+':{\n"id":"'+_metExploreViz.getSessionById(e).getId()+'",';b+='\n"animated": false ,';b+='\n"d3Data":{"id":'+JSON.stringify(e)+",";b+='"nodes":[';_metExploreViz.getSessionById(e).getD3Data().getNodes().forEach(function(j){b+='{"name":'+JSON.stringify(j.getName())+",";if(j.getCompartment()!=undefined){b+='"compartment":'+JSON.stringify(j.getCompartment())+","}if(j.getPathways()!=undefined){b+='"pathways":'+JSON.stringify(j.getPathways())+","}b+='"dbIdentifier":'+JSON.stringify(j.getDbIdentifier())+",";if(j.getIdentifier()!=undefined){b+='"identifier":'+JSON.stringify(j.getIdentifier())+","}if(j.getEC()!=undefined){b+='"ec":'+JSON.stringify(j.getEC())+","}b+='"id":'+JSON.stringify(j.getId())+",";if(j.getIdentifier()!=undefined){b+='"identifier":'+JSON.stringify(j.getIdentifier())+","}if(j.getReactionReversibility()!=undefined){b+='"reactionReversibility":'+JSON.stringify(j.getReactionReversibility())+","}if(j.getIsSideCompound()!=undefined){b+='"isSideCompound":'+JSON.stringify(j.getIsSideCompound())+","}b+='"biologicalType":'+JSON.stringify(j.getBiologicalType())+",";b+='"selected":'+JSON.stringify(j.isSelected())+",";b+='"duplicated":'+JSON.stringify(j.isDuplicated())+",";b+='"labelVisible":'+JSON.stringify(j.getLabelVisible())+",";if(j.getSvg()!=undefined){b+='"svg":'+JSON.stringify(j.getSvg())+",";b+='"svgWidth":'+JSON.stringify(j.getSvgWidth())+",";b+='"svgHeight":'+JSON.stringify(j.getSvgHeight())+","}if(j.getMappingDatasLength()>0){b+='"mappingDatas":[';j.getMappingDatas().forEach(function(k){b+='{"node":'+JSON.stringify(j.index)+",";if(k.getMappingName().search("(json)")==-1){b+='"mappingName":'+JSON.stringify(k.getMappingName()+"(json)")+","}else{b+='"mappingName":'+JSON.stringify(k.getMappingName())+","}b+='"conditionName":'+JSON.stringify(k.getConditionName())+",";b+='"mapValue":'+JSON.stringify(k.getMapValue());b+="},"});b+="],"}if(j.x!=undefined){b+='"x":'+JSON.stringify(j.x)+","}if(j.y!=undefined){b+='"y":'+JSON.stringify(j.y)+","}if(j.px!=undefined){b+='"px":'+JSON.stringify(j.px)+","}if(j.py!=undefined){b+='"py":'+JSON.stringify(j.py)}b+="},"});b+="],";b+='"links":[';_metExploreViz.getSessionById(e).getD3Data().getLinks().forEach(function(j){b+='{"id":'+JSON.stringify(j.getId())+",";b+='"source":'+JSON.stringify(j.getSource().index)+",";b+='"target":'+JSON.stringify(j.getTarget().index)+",";b+='"interaction":'+JSON.stringify(j.getInteraction())+",";b+='"reversible":'+JSON.stringify(j.isReversible());b+="},"});b+="]},";b+='\n"colorMappings":'+JSON.stringify(_metExploreViz.getSessionById(e).getColorMappingsSet())+",";b+='\n"linked":'+JSON.stringify(_metExploreViz.getSessionById(e).isLinked())+",";b+='\n"active":'+JSON.stringify(_metExploreViz.getSessionById(e).isActive())+",";b+='\n"mapped":'+JSON.stringify(_metExploreViz.getSessionById(e).isMapped())+",";b+='\n"mappingDataType":'+JSON.stringify(_metExploreViz.getSessionById(e).getMappingDataType())+",";if(JSON.stringify(_metExploreViz.getSessionById(e).getActiveMapping())!=undefined&&_metExploreViz.getSessionById(e).getActiveMapping().search("(json)")==-1){var g=JSON.stringify(_metExploreViz.getSessionById(e).getActiveMapping()+"(json)")}else{var g=JSON.stringify(_metExploreViz.getSessionById(e).getActiveMapping())}b+='\n"activeMapping":'+g+",";b+='\n"duplicatedNodes":'+JSON.stringify(_metExploreViz.getSessionById(e).getDuplicatedNodes())+",";b+='\n"selectedNodes":'+JSON.stringify(_metExploreViz.getSessionById(e).getSelectedNodes())+",";b+='\n"resizable":'+_metExploreViz.getSessionById(e).isResizable();b+="},"}b+="}}";var c=new Blob([b],{type:"text/json"});var d=URL.createObjectURL(c);var f=document.createElement("a");if(typeof f.download==="string"){f.href=d;f.download="save.json";document.body.appendChild(f);f.click();document.body.removeChild(f)}else{window.open(uri)}metExploreD3.hideMask(a)},100)}},saveNetworkGml:function(){var a=metExploreD3.createLoadMask("Export GML file...","viz");if(a!=undefined){metExploreD3.showMask(a);metExploreD3.deferFunction(function(){var b="graph [";b+="\ndirected 1\n";var e=0;var g={};_metExploreViz.getSessionById("viz").getD3Data().getNodes().forEach(function(h){g[h.getId()]=e;b+="node [\n";b+="id "+e+"\n";b+='label "'+h.getName()+'"\n';b+="graphics [\n";b+="x "+h.x+"\n";b+="y "+h.y+"\n";b+="]\n";b+="]\n";e++});_metExploreViz.getSessionById("viz").getD3Data().getLinks().forEach(function(h){b+="edge [\n";b+="source "+g[h.getSource().getId()]+"\n";b+="target "+g[h.getTarget().getId()]+"\n";b+='label "'+h.getSource().getId().replace("-","")+"-"+h.getTarget().getId().replace("-","")+'"\n';b+="]\n";if(h.isReversible()=="true"){b+="edge [\n";b+="source "+g[h.getTarget().getId()]+"\n";b+="target "+g[h.getSource().getId()]+"\n";b+='label "'+h.getSource().getId().replace("-","")+"-"+h.getTarget().getId().replace("-","")+'"\n';b+="]\n"}});b+="]";var c=new Blob([b],{type:"text"});var d=URL.createObjectURL(c);var f=document.createElement("a");if(typeof f.download==="string"){f.href=d;f.download="save.gml";document.body.appendChild(f);f.click();document.body.removeChild(f)}else{window.open(uri)}metExploreD3.hideMask(a)},100)}}};