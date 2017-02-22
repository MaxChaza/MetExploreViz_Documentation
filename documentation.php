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
                    User documentation
                </h1>
                <ol class="breadcrumb">
                    <li><a href="index.php">Home</a>
                    </li>
                    <li class="active">User documentation</li>
                </ol>
            </div>
        </div>
        <!-- /.row -->

            <div class="row">
                <div class="col-sm-3" id="myScrollspy">
                    <nav class="nav-sidebar">
                        <ul id="sidebar" class="nav nav-stacked" data-spy="affix" data-offset-top="170">

                            <li id="titleSectionTab" onclick=this.setActivity><a id="titleSectionLinkTab" href="#generalfunctioning" >General functioning</a></li>
                            <li onclick=this.setActivity><a id="sectionTab" href="#visualisation" >Visualisation from JSON file</a></li>
                            <li onclick=this.setActivity><a id="sectionTab" href="#basic" >Basic features</a></li>
                            <li onclick=this.setActivity><a id="sectionTab" href="#mining" >Mining networks</a></li>
                            <li onclick=this.setActivity><a id="sectionTab" href="#drawing" >Drawing</a></li>
                            <li onclick=this.setActivity><a id="sectionTab" href="#export" >Export</a></li>
                            <li onclick=this.setActivity><a id="sectionTab" href="#import" >Import</a></li>
                            <li onclick=this.setActivity><a id="sectionTab" href="#save" >Save</a></li>
                            <li onclick=this.setActivity><a id="sectionTab" href="#customization" >Customization</a></li>
                            <li onclick=this.setActivity><a id="sectionTab" href="#optimization" >Optimization</a></li>
                            <li onclick=this.setActivity><a id="sectionTab" href="#networkcomparison" >Network comparison</a></li>
                            <li onclick=this.setActivity><a id="sectionTab" href="#searchnode" >Search node</a></li>
                        </ul>
                    </nav>
                </div>
                <div class="col-sm-9">
                <div class='titleSection' id="generalfunctioning">    
                    <h1>General functioning</h1>
                    <p>
                        MetExploreViz is a tool to visualize metabolic network. It allows to map "omics" data and to interact with metabolic networks. 
                        It is usable as a javascript library via the MetExplore web server or within your website. <br/><br/>

                        MetExploreViz works by taking as input:
                        <ul>
                            <li>JSON file;</li>
                            <li><a href="apireference.php#graphpanel">JSON data from a website.</a></li>
                            <!-- <li>SBML file</li> -->
                        </ul>
                        
                        JSON must have a particular format to work in MetExploreViz.

                        The format of this JSON must follow this template:
                        <ul>
<pre><code class="json">{
    nodes:
    [
        {
            "name":"RE1473",
            "dbIdentifier":"R_RE1473C",
            "ec":"2.3.2.2",
            "id":"938355",
            "reactionReversibility":true,
            "biologicalType":"reaction"
        },
        {
            "name":"Coenzyme A",
            "compartment":"m",
            "dbIdentifier":"M_coa_m",
            "id":"1109601",
            "isSideCompound":false,
            "biologicalType":"metabolite",
        }
    ],
    links:
    [
        {
            "id":"938355 -- 1109601",
            "source":1,
            "target":0,
            "interaction":"in",
            "reversible":"true"
        }
    ]
}
</code></pre>
                        </ul>
                        <button type="button" class="btn btn-primary btn-sm" 
                            onclick="
                                var link = document.createElement('a');
                                if (typeof link.download === 'string') {
                                    link.href = 'files/dataReconAlanine&asparate.json';
                                    link.download = 'dataReconAlanine&asparate.json';
                                
                                    //Firefox requires the link to be in the body
                                    document.body.appendChild(link);
                                    
                                    //simulate click
                                    link.click();
                                
                                    //remove the link when done
                                    document.body.removeChild(link);
                                }
                            "
                            href="files/dataReconAlanine&asparate.json" target="_blank" download>Download example</button> <br/><br/>
                        Soon other attributes can be used to have more informations on the visualisation.
                    </p>
                </div>
                <div class='section' id="visualisation">   
                    <h2>Visualisation from JSON file</h2>
                    <p>
                        To used a JSON file you should use the browse button on the top left corner. Choose a JSON file which follows MetExploreViz requirement. And the visualisation will be launched.<br/>
                    </p>
                    <div class="row">
                        <div class="col-md-offset-1 col-md-10 col-md-offset-1 ">
                            <img class="img-responsive img-portfolio" src="images/userDocumentation/metExploreVizWindowNetwork.png" alt="">
                        </div>
                    </div>
                </div>
                <div class='section' id="basic">   
                    <h2>Basic features</h2>
                    <p>
                        After created the network representation, you will be able to:
                        <ul>
                            <li>Move or zoom in the drawing via mouse interactions;</li>
                            <li>Once the algorithm is providing a relevant drawing you can pause the animation.</li>
                        </ul>
                         
                        <h3>Mouse interaction: Zoom and pan</h3>

                        Panning: By pressing the mouse wheel you can then translate the drawing.
                        <br/>
                        Zooming: using mouse wheel you can zoom in and out. Zoom will be centered on the mouse position
                        <br/><br/>
                        <div class="row">
                            <div class="col-md-offset-1 col-md-10 col-md-offset-1 ">
                                <img class="img-responsive img-portfolio" src="images/userDocumentation/metExploreVizWindowBasic.png" alt="">
                            </div>
                        </div>

                        We also provide zoom for laptop mouse pads.
                        <ul>
                            <li>Zoom in the drawing via this button: <img width="40px" src="images/userDocumentation/zoomin.svg" alt=""></li>
                            <li>Zoom out the drawing via this button: <img width="40px" src="images/userDocumentation/zoomout.svg" alt=""></li>
                            <li>Pan the drawing via this button: <img width="40px" src="images/userDocumentation/handcursor.svg" alt=""></li>
                        </ul>

                        <h3>Force directed animation</h3>

                        The default way to draw the metabolic network is by using a force directed algorithm. This algorithm simulates a forces on edges between nodes. It allows animation.
                        <br/><br/>
                        Click on the <img width="20px" src="images/userDocumentation/pause.svg" alt=""> button to stop the animation.
                        <br/><br/>
                        Click on the <img width="20px" src="images/userDocumentation/play.svg" alt=""> button to start the animation.

                        <h3>Interactive visualisation</h3>
                        <p>
                            MetExploreViz provides direct interactions with nodes. So, you can:
                            <ul>
                                <li>Remove node with right click;</li>
                                <li>Select node by:</li>
                                <ul>
                                    <li>clicking on node;</li>
                                    <li>grouped selection.</li>
                                </ul>
                                <li>Select a node and its nearest neighbours by clicking on node with "N" key:</li>

                                <li>Drag and drop nodes. You can also move all selected node with "ctrl" key.</li>
                            </ul>
                            
                        </p> 

                        <h3>Remove node</h3>
                        <p>
                            MetExploreViz provides a function to remove nodes with right click.
                        </p>
                    </p>
                </div>
                <div class='section' id="mining"> 
                    <h2>Mining networks</h2>
                    <p>
                        Networks may be quite dense and can involve reactions and metabolites that are of no interest for the current study. To lower the complexity of the representation we are developing “mining” methods based on graph algorithms.
                        <br/><br/>
                        The aim is, given a set of nodes, to try to compute relevant paths between each pair of nodes. A path is a set of reactions that allows to go from one element in the network to another.
                        <br/><br/>
                        Remark: not that reactions can be used only once, avoiding artificial loops on paths.
                        <br/><br/>
                        This function can have two kinds of inputs:
                        <ul>
                            <li>A selection of nodes: by left clicking on nodes you can select some of them and then start the computation;</li>
                            <li>Mapped data: if there is no manual selection, nodes with mapped data will be used for the computation.</li>
                        </ul>
                    </p>
                    <div class="row">
                        <div class="col-md-offset-1 col-md-10 col-md-offset-1 ">
                            <img class="img-responsive img-portfolio" src="images/userDocumentation/metExploreVizWindowMining.png" alt="">
                        </div>
                    </div>

                    <h3>Highlight subnetwork</h3>
                    <p>
                        When you launch this, subnetwork is hithlighted, links and nodes absent from the subnetwork become transparent.
                        <div class="row">
                            <div class="col-md-offset-1 col-md-10 col-md-offset-1 ">
                                <img class="img-responsive img-portfolio" src="images/userDocumentation/highligthSubnetwork.png" alt="">
                            </div>
                        </div>
                    </p>
                    
                    <h3>Extract subnetwork</h3>
                    <p>
                        This function allows to keep only links and nodes in the subnetwork. All other will be removed.
                        <div class="row">
                            <div class="col-md-offset-1 col-md-10 col-md-offset-1 ">
                                <img class="img-responsive img-portfolio" src="images/userDocumentation/extractSubnetwork.png" alt="">
                            </div>
                        </div>
                    </p>
                    
                </div> 
                <div class='section' id="drawing"> 
                    <h2>Drawing</h2>
                    <p>
                        To ease visualization and interpretation of metabolic networks, 
                        MetExploreViz allows to duplicate or remove side compounds, 
                        change nodes position or highlight compartments or pathways.

                    <div class="row">
                        <div class="col-md-offset-1 col-md-10 col-md-offset-1 ">
                            <img class="img-responsive img-portfolio" src="images/userDocumentation/metExploreVizWindowDrawing.png" alt="">
                        </div>
                    </div>
                    <div class='subsection' id="sidecoumpounds"> 
                        <h3>Side compounds</h3>
                        <p>
                            In metabolic networks compounds are considered of variable important in metabolism flow. 
                            Taking into account this heterogeneity is important to avoid interpretation mistakes and to facilitate visualization.
                            
                            MetExploreViz allows to:
                                <ul>
                                    <li>Duplicate side compounds;</li>
                                    <li>Remove side compounds.</li>
                                </ul>
                            </p>
                            <div class="row">
                                <div class="col-md-6">
                                    <img class="img-responsive img-portfolio" src="images/userDocumentation/duplicateSC.png" alt="">
                                </div>
                                <div class="col-md-6">
                                    <img class="img-responsive img-portfolio" src="images/userDocumentation/removeSC.png" alt="">
                                </div>
                            </div>

                            To do this the attribute value "isSideCompound" of metabolite must be set to "true", and the action can be picked from the drawing menu. 
                        </p>
                    </div>

                    <div class='subsection' id="layout"> 
                    <h3>Layouts</h3>
                        <p>
                            To group substrates and products on each side of a reaction, click on "Reaction components direction" in the drawing menu.
                            <div class="row">
                                <div class="col-md-offset-1 col-md-10 col-md-offset-1 ">
                                    <img class="img-responsive img-portfolio" src="images/userDocumentation/bringCloser.png" alt="">
                                </div>
                            </div>
                        </p>
                        <p>
                            When compartments or pathways are highlighted it's possible to clust nodes by these components.
                            <div class="row">
                                <div class="col-md-offset-1 col-md-10 col-md-offset-1 ">
                                    <img class="img-responsive img-portfolio" src="images/userDocumentation/clustConvex.png" alt="">
                                </div>
                            </div>
                        </p>
                    </div>
                    
                </div>  
                <div class='section' id="export"> 
                    <h2>Export</h2>
                    <p>
                        These functions allow you to export the visualization in SVG, PNG or JPG.

                    <div class="row">
                        <div class="col-md-offset-1 col-md-10 col-md-offset-1 ">
                            <img class="img-responsive img-portfolio" src="images/userDocumentation/metExploreVizWindowExport.png" alt="">
                        </div>
                    </div>                 
                </div> 
                <div class='section' id="import"> 
                    <h2>Import</h2>
                    <p>
                        You can import files to enrich your network.

                    </p>
                      
                    <div class='subsection' id="mapping"> 
                    <h3>Mapping</h3>
                        <p>
                            The mapping import allows you to import data on metabolites or reactions and highlights/colors the nodes according to the provided numerical values.
                        </p>
                        <div class="row">
                            <div class="col-md-6"> 
                                <p>
                                    First you could import tab file with some requirements:
                                    <ul>
                                        <li>"identifier"</li>
                                        <li>"conditionName."</li>
                                        <li>"identifierN."</li>
                                        <li>"x" values</li>
                                    </ul>
                                </p>
                            </div>

                            <div class="col-md-6 ">
    <pre><code class="html"><t style="color: #A2FCA2;">identifier</t>    <t style="color: #3386D5;">conditionName1  conditionName2 ...</t>
    <t style="color: #E2A759;">identifierN1</t>   x    x1 ...
    <t style="color: #E2A759;">identifierN2</t>   x2   x3 ...
    <t style="color: #E2A759;">identifierN3</t>   x4   x5 ...
    <t style="color: #E2A759;">identifierN4</t>   x6   x7 ...
    </code></pre>
                            </div>
                        </div>
                        <button type="button" class="btn btn-primary btn-sm" 
                            onclick="
                                var link = document.createElement('a');
                                if (typeof link.download === 'string') {
                                    link.href = 'files/mappTabMeta.txt';
                                    link.download = 'mappTabMeta.txt';
                                
                                    //Firefox requires the link to be in the body
                                    document.body.appendChild(link);
                                    
                                    //simulate click
                                    link.click();
                                
                                    //remove the link when done
                                    document.body.removeChild(link);
                                }
                            "
                            href="files/dataReconAlanine&asparate.json" target="_blank" download>Download example</button> <br/><br/>
                            
                        <p>
                            "identifier" allows MetExploreViz to identify the corresponding nodes. The following identifiers are currently supported: 
                            <ul>
                                <li>"reactionDBIdentifier"</li>
                                <li>"metaboliteDBIdentifier"</li>
                                <li>"inchi"</li>
                                <li>under development:</li>
                                <ul>
                                    <li>"name"</li>
                                    <li>"your attribute"</li>
                                </ul>
                            </ul>
                        </p>
                        <p>"conditionName." can arbitrarily chosen.</p>
                        <p>"identifierN." allows to MetExploreViz to recongnize nodes on data.</p>
                        <p>"x" are the values given to one component under each condition.</p>
                        <br/>
                        <p>
                            In order to import your file, click on mapping button.
                        </p>

                        <div class="row">
                            <div class="col-md-offset-1 col-md-10 col-md-offset-1 ">
                                <img class="img-responsive img-portfolio" src="images/userDocumentation/metExploreVizWindowMapping.png" alt="">
                            </div>
                        </div>

                        <p>
                            After choosing a file, MetExploreViz maps values on nodes and open the "Network Manager" window.
                        </p>

                        <div class="row">
                            <div class="col-md-offset-1 col-md-10 col-md-offset-1 ">
                                <img class="img-responsive img-portfolio" src="images/userDocumentation/metExploreVizWindowMappingImported.png" alt="">
                            </div>
                        </div>  
                        <p>
                            Select a mapping imported and the nodes mapped are highlighted.
                        </p>
                        <div class="row">
                            <div class="col-md-offset-1 col-md-10 col-md-offset-1 ">
                                <img class="img-responsive img-portfolio" src="images/userDocumentation/metExploreVizWindowChooseMapping2.png" alt="">
                            </div>
                        </div>  
                        <p>
                            Then select a condition, values type and click on the <img width="20px" src="images/userDocumentation/add.svg" alt=""> button.
                        </p>
                        <p>
                            Depending on the data type, colors are assigned to nodes according to numerical values. 
                        </p>
                        <br/>

                        <p>
                            For discrete values, a color is assigned to each value.
                        </p>
                        <div class="row">
                            <div class="col-md-offset-1 col-md-10 col-md-offset-1 ">
                                <img class="img-responsive img-portfolio" src="images/userDocumentation/metExploreVizWindowChooseMapping3.png" alt="">
                            </div>
                        </div>  
                        
                        <p>
                            For continuous values, a gradient from yellow to blue is created and each node color is assigned accordingly.
                        </p>

                        <div class="row">
                            <div class="col-md-3" align="right">
                                Minimum
                            </div>
                            <div class="col-md-6" style=
                            " 
                                border-radius:4px;
                                height:20px;
                                background: yellow; /* For browsers that do not support gradients */
                                background: -webkit-linear-gradient(left, yellow, blue); /* For Safari 5.1 to 6.0 */
                                background: -o-linear-gradient(right, yellow, blue); /* For Opera 11.1 to 12.0 */
                                background: -moz-linear-gradient(right, yellow, blue); /* For Firefox 3.6 to 15 */
                                background: linear-gradient(to right, yellow, blue); /* Standard syntax */
                            ">
                            </div>
                            <div class="col-md-3">
                                Maximum
                            </div>
                        </div>  
                        <br/>
                        <div class="row">
                            <div class="col-md-offset-1 col-md-10 col-md-offset-1 ">
                                <img class="img-responsive img-portfolio" src="images/userDocumentation/metExploreVizWindowChooseMapping4.png" alt="">
                            </div>
                        </div> 
                        <p>
                            For flux values, a gradient from yellow to blue is created and each node color is assigned accordingly and values are assigned to links.
                        </p>

                        <div class="row">
                            <div class="col-md-3" align="right">
                                Minimum
                            </div>
                            <div class="col-md-6" style=
                            " 
                                border-radius:4px;
                                height:20px;
                                background: yellow; /* For browsers that do not support gradients */
                                background: -webkit-linear-gradient(left, yellow, blue); /* For Safari 5.1 to 6.0 */
                                background: -o-linear-gradient(right, yellow, blue); /* For Opera 11.1 to 12.0 */
                                background: -moz-linear-gradient(right, yellow, blue); /* For Firefox 3.6 to 15 */
                                background: linear-gradient(to right, yellow, blue); /* Standard syntax */
                            ">
                            </div>
                            <div class="col-md-3">
                                Maximum
                            </div>
                        </div>  
                        <br/>
                        <div class="row">
                            <div class="col-md-offset-1 col-md-10 col-md-offset-1 ">
                                <img class="img-responsive img-portfolio" src="images/userDocumentation/flux.png" alt="">
                            </div>
                        </div> 

                        <p>
                            It is possible to change colors. To do this change the hexadecimal value or select a color in the color picker, and click on refresh button <img width="20px" src="images/userDocumentation/refresh.svg" alt="">. 
                        </p> 
                        <div class="row">
                            <div class="col-md-offset-1 col-md-10 col-md-offset-1 ">
                                <img class="img-responsive img-portfolio" src="images/userDocumentation/metExploreVizWindowChooseMapping4ChangeColor.png" alt="">
                            </div>
                        </div>                 
                    </div> 
                    <div class='subsection' id="importSC"> 
                    <h3>Side Compounds</h3>
                        <p>
                             The side compounds import allows you to assign metabolites as a side compounds.
                             After this import, it's possible to duplicate side compounds.
                             The text file must contain metabolite identifiers.

                        </p>
                        <button type="button" class="btn btn-primary btn-sm" 
                            onclick="
                                var link = document.createElement('a');
                                if (typeof link.download === 'string') {
                                    link.href = 'files/idSC.txt';
                                    link.download = 'idSC.txt';

                                    //Firefox requires the link to be in the body
                                    document.body.appendChild(link);
                                    
                                    //simulate click
                                    link.click();

                                    //remove the link when done
                                    document.body.removeChild(link);
                                }
                            "
                            href="files/idSC.json" target="_blank" download>Download example</button> <br/><br/>

                    </div>
                </div>
                <div class='section' id="save"> 
                    <h2>Save</h2>
                    <p>
                        These functions allow you to save the visualization in JSON, DOT or GML.
                    </p>
                    <p>  
                    <ul>
                        <li> JSON can be used to save your work. It can be reloaded in MetExploreViz.
                        <li> DOT and GML are simple ways of describing graphs that both humans and computer programs can use.  
                    </ul>               
                    </p>                 
                    <div class="row">
                        <div class="col-md-offset-1 col-md-10 col-md-offset-1 ">
                            <img class="img-responsive img-portfolio" src="images/userDocumentation/metExploreVizWindowSave.png" alt="">
                        </div>
                    </div>
                </div> 
                <div class='section' id="customization"> 
                    <h2>Customization</h2>
                    <p>
                        MetExploreViz allow you to custom your visualization.
                        <ul>
                            <li> MetaboliteStyle - To manage the height, width, rx, ry, font size, stroke width, display node name, stroke color of metabolites</li>
                            <li> Reaction style - To manage the height, width, rx, ry, display node name, font size, stroke color, stroke width of reactions</li>
                        </ul>
                    </p>  
                    <div class="row">
                        <div class="col-md-offset-1 col-md-10 col-md-offset-1 ">
                            <img class="img-responsive img-portfolio" src="images/userDocumentation/metExploreVizWindowCustom.png" alt="">
                        </div>
                    </div>                 
                </div> 
                <div class='section' id="optimization"> 
                    <h2>Optimization</h2>
                    <p>
                        For big network network drawing can be long.
                        To optimize this you can remove some components during drawing.
                        You can fix a threshold on the number of nodes and when this threshold is exceeded selected components are removed.
                        
                    <div class="row">
                        <div class="col-md-offset-1 col-md-10 col-md-offset-1 ">
                            <img class="img-responsive img-portfolio" src="images/userDocumentation/metExploreVizWindowOptimization.png" alt="">
                        </div>
                    </div>                 
                </div> 
                <div class='section' id="networkcomparison"> 
                    <h2>Network comparison</h2>
                    <p>
                        MetExploreViz allows the comparison of a metabolic network under several conditions.
                    </p>
                    
                    <h3>Duplicate network</h3>
                    <p>
                        It is possible to duplicate network in another frame to visualise separately two conditions.
                    </p>

                    <br/>
                    <p>
                        To do this click on this button <img width="20px" src="images/userDocumentation/copy-network.svg" alt=""> and give a name to the network.
                    </p>

                    <h3>Link and compare representations</h3>
                    <p>
                        After duplication you can link by clicking this button <img width="20px" src="images/userDocumentation/unlink.svg" alt=""> the two representations of network to have the nodes in the same position of the original graph.
                        If data have been mapped onto the original network the same colors are assigned to the nodes.
                        So you can compare easily a network with different data.
                    </p>

                    <div class="row">
                        <div class="col-md-offset-1 col-md-10 col-md-offset-1 ">
                            <img class="img-responsive img-portfolio" src="images/userDocumentation/metExploreVizWindowDuplicateNetwork.png" alt="">
                        </div>
                    </div>

                    <h3>Example</h3>
                    <div class="row">
                        <div class="col-md-offset-1 col-md-10 col-md-offset-1 ">
                            <img class="img-responsive img-portfolio" src="images/userDocumentation/metExploreVizWindowCompare.png" alt="">
                        </div>
                    </div>
                    
                </div> 
                <div class='section' id="searchnode"> 
                    <h2>Search node</h2>
                    <p>
                        MetExploreViz allows you to search nodes in metabolic network. 
                    </p>
                    <p>
                        To do this, enter the name, id, compartment of a node and click on the "search" button <img width="20px" src="images/userDocumentation/search.png " alt="">.    
                    </p>

                    <div class="row">
                        <div class="col-md-offset-1 col-md-10 col-md-offset-1 ">
                            <img class="img-responsive img-portfolio" src="images/userDocumentation/metExploreVizWindowSearch.png" alt="">
                        </div>
                    </div>
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

