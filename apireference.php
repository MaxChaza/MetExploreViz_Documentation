<?php include('./header.html'); ?>
    <!-- Google Analytics -->
    <script>
      (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
      (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
      m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
      })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

      ga('create', 'UA-75484425-1', 'auto');
      ga('send', 'pageview');

    </script>
    <script type="text/javascript">
        function setActivity(){
            for (var i = 0; i < this.parentNode.children.length; i++) {
                if(this.parentNode.children[i].getAttribute('class') != 'nav-divider')
                    this.parentNode.children[i].setAttribute('class', '');
            }
            this.setAttribute('class', 'active');
        }

// Wrap everything in an IIFE
(function($, viewport){

   

    // Execute only after document has fully loaded
    $(document).ready(function() {
        if( viewport.is('xs') ) {
            document.getElementById("sidebar").setAttribute('data-spy', '');
        }
        if( viewport.is('>=sm') ) {
            document.getElementById("sidebar").setAttribute('data-spy', 'affix');
        }
    });

    // Execute code each time window size changes
    $(window).resize(
        viewport.changed(function() {
            if( viewport.is('xs') ) {
                document.getElementById("sidebar").setAttribute('data-spy', '');
            }
            if( viewport.is('>=sm') ) {
                document.getElementById("sidebar").setAttribute('data-spy', 'affix');
            }
        })
    ); 

})(jQuery, ResponsiveBootstrapToolkit);
    </script>
    <!-- Page Content -->
    <div class="container">

        <!-- Page Heading/Breadcrumbs -->
        <div class="row">
            <div class="col-lg-12">
                <h1 class="page-header">
                    <span class="glyphicon glyphicon-education"></span>
                    API Reference
                </h1>
                <ol class="breadcrumb">
                    <li><a href="index.php">Home</a>
                    </li>
                    <li class="active">API Reference</li>
                </ol>
            </div>
        </div>
        <!-- /.row -->
            <div class="row">
                <div class="col-sm-3" id="myScrollspy">
                    <nav class="nav-sidebar">
                        <ul id="sidebar" class="nav nav-stacked" data-spy="affix" data-offset-top="170">
                            <li id="titleSectionTab" onclick=this.setActivity><a id="titleSectionLinkTab" href="#apireference" >API Reference</a></li>
                            <li onclick=this.setActivity><a id="sectionTab" href="#graphpanel" >GraphPanel</a></li>
                            <li onclick=this.setActivity><a id="sectionTab" href="#graphnode" >GraphNode</a></li>
                            <li onclick=this.setActivity><a id="sectionTab" href="#graphmapping" >GraphMapping</a></li>
                            <li onclick=this.setActivity><a id="sectionTab" href="#graphutils" >GraphUtils</a></li>
                        </ul>
                    </nav>
                </div>
                <div class="col-sm-9">
                
                <div class='titleSection' id="apireference">    
                    <h1>API Reference</h1>
                </div>       
                <div class='section'>      
                    <p>Everything in MetExploreViz is scoped under the <font size="4"><code style="color:#428BCA">metExploreViz</code></font> namespace.</p>
                    <p>
                        See one of:
                        <ul>
                            <li><a href="#core">Core</a> </li>
                            <li><a href="#graphpanel">GraphPanel</a> - To manage the panel where is the graph</li>
                            <li><a href="#graphnode">GraphNode</a> - To draw and manage nodes</li>
                            <li><a href="#graphmapping">GraphMapping</a> - To map data on nodes</li>
                            <li><a href="#graphutils">GraphUtils</a> - Some useful functions</li>
                        </ul>
                    </p>
                </div>
                <div class='section' id="core">    
                    <h2>Core</h2>
                    <p>
                        <font size="4"><code style="color:#428BCA">metExploreViz</code></font> provides some features to manage the style of the visualisation like:
                        <ul>
                            <li> GeneralStyle - To manage the siteName, the color for min value in continuous mapping, the color for max value in continuous mapping, a threshold to optimize drawing, if the node labels are displayed, if the links are displayed, if the compartments or pathways are highlighted, if the components highligthed are clustered, what caption are displayed</li>
                            <li> MetaboliteStyle - To manage the height, width, rx, ry, fontSize, strokeWidth, displayNodeName, strokeColor of metabolites</li>
                            <li> Reaction style - To manage the height, width, rx, ry, displayNodeName, fontSize, strokeColor, strokeWidth of reactions</li>
                            <li> LinkStyle - To manage the size, lineWidth, markerWidth, markerHeight, markerInColor, markerOutColor, markerStrokeColor, markerStrokeWidth, strokeColor of links</li>
                        </ul>
                    </p>
                    <br/>
                    <p>
                        <t style="color: #5FA2DD;">#</t> 
                        <font size="4">
                            <code style="color:#000" >metExploreViz.<b style="color:#5FA2DD">setGeneralStyle</b>(<i>style</i>)</code> 
                        </font> 
                    </p>
                    <br/>
                    <p>
                        So to change general style you could create new general style and set the style by default.
                    </p>

<pre><code>var style = new GeneralStyle("Website", "yellow", "blue", 500, false, false, false, false, false);
metExploreViz.setGeneralStyle(style);
</code></pre>
                    <br/>
                    <p>
                        <t style="color: #5FA2DD;">#</t> 
                        <font size="4">
                            <code style="color:#000" >metExploreViz.<b style="color:#5FA2DD">setMetaboliteStyle</b>(<i>style</i>)</code> 
                        </font> 
                    </p>
                    <br/>
                    <p>
                        So to change metabolite style you could create new metabolite style and set the style by default.
                    </p>

<pre><code>var style = new MetaboliteStyle(20, 20, 10, 10, 12, 2,'name', '#b2ae92');
metExploreViz.setMetaboliteStyle(style);
</code></pre>
                    <br/>
                    <p>
                        <t style="color: #5FA2DD;">#</t> 
                        <font size="4">
                            <code style="color:#000" >metExploreViz.<b style="color:#5FA2DD">setReactionStyle</b>(<i>style</i>)</code> 
                        </font> 
                    </p>
                    <br/>
                    <p>
                        So to change reaction style you could create new reaction style and set the style by default.
                    </p>
<pre><code>var style = new ReactionStyle(20, 80, 6, 6, 'ec', 20, '#154B7D', 1);
metExploreViz.setReactionStyle(style);
</code></pre>

                    <br/>
                    <p>
                        <t style="color: #5FA2DD;">#</t> 
                        <font size="4">
                            <code style="color:#000" >metExploreViz.<b style="color:#5FA2DD">setLinkStyle</b>(<i>style</i>)</code> 
                        </font> 
                    </p>
                    <br/>
                    <p>
                        So to change link style you could create new link style and set the style by default.
                    </p>
<pre><code>var style = new LinkStyle(25, 2, 5, 5, 'red', 'green', 'black', '0.7', '#000000');
metExploreViz.setLinkStyle(style);
</code></pre>

                    <br/>
                    <p>
                        <t style="color: #5FA2DD;">#</t> 
                        <font size="4">
                            <code style="color:#000" >metExploreViz.<b style="color:#5FA2DD">fireEventParentWebSite</b>(<i>"eventName", arg</i>)</code> 
                        </font> 
                    </p>
                    <br/>
                    <p>
                        To bind your data with the visualisation, MetExploreViz sends events. For example, when you assign metabolite as a side compound. 
                        So to use this you could add listener on your DOM like this:
                    </p>
<pre><code>document.addEventListener('eventName', function (e) {
    // Your function
    var eventArg = e.value;    
}, false);
</code></pre>
                    <br/>
                    <p>
                        For the moment the event developed are:
                        <ul>
                            <li>"sidecompound": With the node as argument.</li>
                        </ul>
                        
                    </p>
                    <br/>
                    <p>
                        <t style="color: #5FA2DD;">#</t> 
                        <font size="4">
                            <code style="color:#000" >metExploreViz.<b style="color:#5FA2DD">newNetworkData</b>()</code> 
                        </font> 
                    </p>
                    <br/>
                    <p>
                        To bind your data with the visualisation, MetExploreViz sends events. For example, when you assign metabolite as a side compound. 
                        So to use this you could add listener on your DOM like this:
                    </p>
<pre><code>document.addEventListener('eventName', function (e) {
    // Your function
    var eventArg = e.value;    
}, false);
</code></pre>
                    <br/>
                    <p>
                        For the moment the event developed are:
                        <ul>
                            <li>"sidecompound": With the node as argument.</li>
                        </ul>
                        
                    </p>
                </div>

                <div class='section' id="graphpanel">    
                    <h2>GraphPanel</h2>
                    <p>
                        metExploreViz.GraphPanel provides some features to manage the window where is integrated MetExploreViz
                    </p>
                    <br/>
                    <p>
                        <t style="color: #5FA2DD;">#</t> 
                        <font size="4">
                            <code style="color:#000" >metExploreViz.GraphPanel.<b style="color:#5FA2DD">refreshPanel</b>(<i>yourJsonString</i>)</code> 
                        </font> 
                    </p>
                    <p>
                        So, if you have your data on un website you can compute this to use the past function like this:
                    </p>
                    <br/>
<pre><code>var networkData = metExploreViz.newNetworkData('viz');
....
var myJsonString = JSON.stringify(networkData);
</code></pre>
<pre><code>var myJsonString = '{"nodes":[{"name":"aspartate transaminase","dbIdentifier":"R_ASPTA","ec":"2.6.1.1","id":"2405504","reactionReversibility":true,"biologicalType":"reaction"},{.....],"links":[{"id":"2405504 -- 1109303","source":1,"target":0,"interaction":"in","reversible":true},{....],"mappingdata":[{"name":"Global Mapping","targetLabel":"metaboliteId","mappings":[{"name":"Control Condition","data":[{"node":"1107024"},{"node":"1107031"},{"node":"1107950"}]}]}]}';

//Run graph
metExploreViz.GraphPanel.refreshPanel(myJsonString, function(){
    metExploreViz.onloadSession(function(){
        
        var mapJSON = metExploreViz.GraphUtils.parseWebServiceMapping(myJsonString);
        //Load mapping
        metExploreViz.GraphMapping.loadDataFromJSON(mapJSON);
        //Highlight
        metExploreViz.GraphMapping.mapNodes("Global Mapping");
        // //Color nodes
        //metExploreViz.GraphMapping.graphMappingContinuousData("mapping_D-Galactose", "conditionName1");
    }); 
});   
</code></pre>

                </div>
                <div class='section' id="graphnode">    
                    <h2>GraphNode</h2>
                        <p>
                            <t style="color: #5FA2DD;">#</t> 
                            <font size="4">
                                <code style="color:#000" >metExploreViz.GraphNode.<b style="color:#5FA2DD">setIsSideCompoundById</b>(<i>idMetabolite, bool</i>)</code> 
                            </font> 
                        </p>
                        <br/>
                        <p>
                            This function allows to bind the visualisation with your data. It could be used when you change the attribute isSideCompound of metabolite.
                        </p>
                        <br/> 
                        <p>
                            <t style="color: #5FA2DD;">#</t> 
                            <font size="4">
                                <code style="color:#000" >metExploreViz.GraphNode.<b style="color:#5FA2DD">selectNodeFromGrid</b>(<i>node</i>)</code> 
                            </font> 
                        </p>
                        <br/>
                        <p>
                            This function allows to select node in the visualisation from your website data.ble as a Java executable file (.jar format) via command line or graphical user interface.
                        </p>
                </div>
                <div class='section' id="graphmapping">    
                    <h2>GraphMapping</h2>
                    <p>
                        metExploreViz.GraphMapping provides some features to map data on nodes.
                    </p>
                    <br/>
                    <p>
                        <t style="color: #5FA2DD;">#</t> 
                        <font size="4">
                            <code style="color:#000" >metExploreViz.GraphMapping.<b style="color:#5FA2DD">loadDataFromJSON</b>(<i>yourJsonString</i>)</code> 
                        </font> 
                    </p>
                    <br/>
                    <p>
                        So, if you have your data on un website you can compute this to use the past function like this:
                    </p>
                    <br/>

<pre><code>//Load mapping
metExploreViz.GraphMapping.loadDataFromJSON(mapJSON);
</code></pre>
                    <br/>
                    <p>
                        <t style="color: #5FA2DD;">#</t> 
                        <font size="4">
                            <code style="color:#000" >metExploreViz.GraphMapping.<b style="color:#5FA2DD">mapNodes</b>(<i>theMappingNane</i>)</code> 
                        </font> 
                    </p>
                    <br/>
                    <p>
                        So, if you have loaded your data in the visualisation with the previous function you can highlight mapped nodes like this:
                    </p>
                    <br/>

<pre><code>//Highlight
metExploreViz.GraphMapping.mapNodes("Mappingname");
</code></pre>
                    <br/>
                    <p>
                        <t style="color: #5FA2DD;">#</t> 
                        <font size="4">
                            <code style="color:#000" >metExploreViz.GraphMapping.<b style="color:#5FA2DD">graphMappingContinuousData</b>(<i>theMappingNane, </i>)</code> 
                        </font> 
                    </p>
                    <br/>
                    <p>
                        So, if you have your data on un website you can compute this to use the past function like this:
                    </p>
                    <br/>

<pre><code>//Color nodes
//metExploreViz.GraphMapping.graphMappingContinuousData("mapping_D-Galactose", "conditionName1");
</code></pre>

                </div>
                <div class='section' id="graphutils">    
                    <h2>GraphUtils</h2>
                        <p>
                            <t style="color: #5FA2DD;">#</t> 
                            <font size="4">
                                <code style="color:#000" >metExploreViz.GraphNode.<b style="color:#5FA2DD">setIsSideCompoundById</b>(<i>idMetabolite, bool</i>)</code> 
                            </font> 
                        </p>
                        <br/>
                        <p>
                            This function allows to bind the visualisation with your data. It could be used when you change the attribute isSideCompound of metabolite.
                        </p>
                        <br/> 
                        <p>
                            <t style="color: #5FA2DD;">#</t> 
                            <font size="4">
                                <code style="color:#000" >metExploreViz.GraphNode.<b style="color:#5FA2DD">selectNodeFromGrid</b>(<i>node</i>)</code> 
                            </font> 
                        </p>
                        <br/>
                        <p>
                            This function allows to select node in the visualisation from your website data.ble as a Java executable file (.jar format) via command line or graphical user interface.
                        </p>
                </div>
            </div>
        </div>

        <!-- Footer -->
        <?php include('./footer.php'); ?>

    </div>
    <!-- /.container -->

    <!-- jQuery -->
    <script src="js/jquery.js"></script>

    <!-- Bootstrap Core JavaScript -->
    <script src="js/bootstrap.min.js"></script>

</body>

</html>

