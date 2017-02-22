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
    <!-- Page Content -->
    <div class="container">

        <!-- Page Heading/Breadcrumbs -->
        <div class="row">
            <div class="col-lg-12">
                <h1 class="page-header">
                    <span class="glyphicon glyphicon-cog"></span>
                    Structure
                    <small>References</small>
                </h1>
                <ol class="breadcrumb">
                    <li><a href="index.php">Home</a>
                    </li>
                    <li class="active">Structure</li>
                </ol>
            </div>
        </div>
        <!-- /.row -->

        <!-- Image Header -->
        <div class="row">
            <div class="col-lg-12">
                <img class="img-responsive" src="images/structure/references1200x400grey.png" alt="">
            </div>
        </div>
        <!-- /.row -->

        <!-- Service Panels -->
        <!-- The circle icons use Font Awesome's stacked icon classes. For more information, visit http://fontawesome.io/examples/ -->
        <div class="row">
            <div class="col-lg-12">
                <h2 class="page-header">References</h2>
            </div>
            <div class="col-md-4 col-sm-12">
                <div class="panel panel-default text-center">
                    <div class="panel-heading">
                        <span class="fa-stack fa-5x" 
                            style="background-image:url('images/structure/metexploreLogo.png'); background-repeat: no-repeat; background-position: center; ">
                        </span>
                    </div>
                    <div class="panel-body">
                        <h4>MetExplore</h4>
                        <p>MetExplore is a web server dedicated to the analysis of genome scale metabolic networks.</p>
                        <a href="http://metexplore.toulouse.inra.fr/" target="_blank" class="btn btn-primary">Learn More</a>
                    </div>
                </div>
            </div>
            <div class="col-md-4 col-sm-12">
                <div class="panel panel-default text-center">
                    <div class="panel-heading">
                        <span class="fa-stack fa-5x" 
                            style="background-image:url('images/structure/d3Logo.png'); background-repeat: no-repeat; background-position: center; ">
                        </span>
                    </div>
                    <div class="panel-body">
                        <h4>D3.js</h4>
                        <p>D3.js is a JavaScript library for manipulating documents based on data.</p>
                        <a href="http://d3js.org/" target="_blank" class="btn btn-primary">Learn More</a>
                    </div>
                </div>
            </div>
            <div class="col-md-4 col-sm-12">
                <div class="panel panel-default text-center">
                    <div class="panel-heading">
                         <span class="fa-stack fa-5x" 
                            style="background-image:url('images/structure/extjsLogo.jpg'); background-repeat: no-repeat; background-size:100%; background-position: center; ">
                        </span>
                    </div>
                    <div class="panel-body">
                        <h4>Ext JS</h4>
                        <p>Sencha Ext JS is a MVC/MVVM JavaScript framework for building rich web applications. </p>
                        <a href="https://www.sencha.com/products/extjs" target="_blank" class="btn btn-primary">Learn More</a>
                    </div>
                </div>
            </div>
        </div>

        <!-- Service Tabs -->
        <div class="row">
            <div class="col-lg-12">
                <h2 class="page-header">References Tabs</h2>
            </div>
            <div class="col-lg-12">

                <ul id="myTab" class="nav nav-tabs nav-justified">
                    <li class="active"><a href="#service-one" data-toggle="tab"> MetExplore</a>
                    </li>
                    <li class=""><a href="#service-two" data-toggle="tab"> D3.js</a>
                    </li>
                    <li class=""><a href="#service-three" data-toggle="tab"> Ext JS</a>
                    </li>
                </ul>

                <div id="myTabContent" class="tab-content">
                    <div class="tab-pane fade active in" id="service-one">
                        <h4>MetExplore</h4>
                        <p>
                            <ul> 
                                <li> MetExplore  <a href="http://metexplore.toulouse.inra.fr/" target="_blank" class="link">website.</a></li> 
                                <li> Publication: Cottret, L.,Wildridge, D., Vinson, F., Barrett, M. P., Charles, H., Sagot, M.-f., and Jourdan, F. (2010). MetExplore : a web server to link metabolomic experiments and genome-scale metabolic networks. <u>Nucleic acids research</u>, 38(May) :132–137., 17 :2301–2309.</a></li> 
                            </ul> 
                        </p>  
                    </div>
                    <div class="tab-pane fade" id="service-two">
                        <h4>D3.js</h4>
                        <p>D3.js is a JavaScript library for manipulating documents based on data. D3 helps you bring data to life using HTML, SVG, and CSS. D3’s emphasis on web standards gives you the full capabilities of modern browsers without tying yourself to a proprietary framework, combining powerful visualization components and a data-driven approach to DOM manipulation.</p>
                        <p>
                            <ul> 
                                <li> D3.js  <a href="http://d3js.org/" target="_blank" class="link">website.</a></li> 
                                <li> Publication: Bostock, M., Ogievetsky, V., and Heer, J. (2011). D3 ; Data-Driven Documents. <u>IEEE Transactions on Visualization and Computer Graphics</u>, 17 :2301–2309.</a></li> 
                            </ul> 
                        </p>     
                    </div>
                    <div class="tab-pane fade" id="service-three">
                        <h4>Ext JS</h4>
                        <p>Sencha Ext JS is the most comprehensive MVC/MVVM JavaScript framework for building feature-rich cross-platform web applications targeting desktops, tablets, and smartphones. Ext JS leverages HTML5 features on modern browsers while maintaining compatibility and functionality for legacy browsers.
                            Ext JS features hundreds of high-performance UI widgets that are meticulously designed to fit the needs of the simplest as well as the most complex web applications. Ext JS templates and layout manager give you full control over your display irrespective of devices and screen sizes. An advanced charting package allows you to visualize large quantities of data. The framework includes a robust data package that can consume data from any backend data source. Ext JS also offers several out-of-the-box themes, and complete theming support that lets you build applications that reflect your brand. It also includes an accessibility package (ARIA) to help with Section 508 compliance.</p>
                        <p>
                            <ul> 
                                <li> Ext JS  <a href="https://www.sencha.com/products/extjs" target="_blank" class="link">website.</a></li> 
                            </ul> 
                        </p>    
                    </div>
                </div>

            </div>
        </div>

        <!-- /.row -->


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
