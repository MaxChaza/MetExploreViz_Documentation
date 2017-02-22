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
    <!-- Header Carousel -->
    <header id="myCarousel" class="carousel slide" style="max-height:400px">
        <!-- Indicators -->
        <ol class="carousel-indicators">
            <li data-target="#myCarousel" data-slide-to="0" class="active" style="border-color:#10253F;"></li>
            <li data-target="#myCarousel" data-slide-to="1" style="border-color:#10253F;"></li>
            <li data-target="#myCarousel" data-slide-to="2" style="border-color:#10253F;"></li>
            <li data-target="#myCarousel" data-slide-to="3" style="border-color:#10253F;"></li>
        </ol>

        <!-- Wrapper for slides -->
        <div class="carousel-inner">
            <div class="item active">
                <div class="fill" style="background-image:url('images/metabolicNetworkRecon.png'); "></div>
                <div class="carousel-caption" style='color:#10253F;'>
                    <h3>Recon2 - Genome scale network</h3>
                </div>
            </div>
            <div class="item">
                <div class="fill" style="background-image:url('images/metabolicNetwork4.png');"></div>
                <div class="carousel-caption" style='color:#10253F;'>
                    <h3>Recon2 - Alanine & asparate pathway</h3>
                </div>
            </div>
            <div class="item">
                <div class="fill" style="background-image:url('images/metabolicNetworkSC.png');"></div>
                <div class="carousel-caption" style='color:#10253F;'>
                    <h3>Network with duplicated side compounds</h3>
                </div>
            </div>
            <div class="item">
                <div class="fill" style="background-image:url('images/metabolicNetworkOvisAries.png');"></div>
                <div class="carousel-caption"style='color:#10253F;'>
                    <h3>Path in Ovis Aries</h3>
                </div>
            </div>
        </div>

        <!-- Controls -->
        <a class="left carousel-control" href="#myCarousel" data-slide="prev">
            <span class="icon-prev"></span>
        </a>
        <a class="right carousel-control" href="#myCarousel" data-slide="next">
            <span class="icon-next"></span>
        </a>
    </header>

    <!-- Page Content -->
    <div class="container">

        <!-- Marketing Icons Section -->
        <div class="row">
            <div class="col-lg-12">
                <h1 class="page-header">
                    <div class="row hidden-lg hidden-md" style="padding-bottom:20px; border-bottom:1px solid #ddd;">
                            <img alt="MetExploreViz logo" class="img-responsive" src="images/metExploreViz_Logo.png" width="120" height="120">
                            MetExploreViz
                    </div>
                    <div class="row hidden-sm hidden-xs" style="padding-bottom:20px; border-bottom:1px solid #ddd;">
                            <img alt="MetExploreViz logo" src="images/metExploreViz_Logo.png" width="120" height="120">                          
                            MetExploreViz
                    </div>
                    
                </h1>
            </div>
            <div class="col-lg-12">
                <div class="row hidden-lg hidden-md" style="padding-bottom:20px; border-bottom:1px solid #ddd;">
                        <a target="_blank" href="http://phenomenal-h2020.eu/home/"><img class="img-responsive" src="images/contact/phenomenalLogo.png" alt=""></a>
                        <a target="_blank" href="http://www.toulouse.inra.fr/"><img class="img-responsive" src="images/contact/inraLogo.jpg" alt=""></a>
                        <a target="_blank" href="https://www6.toulouse.inra.fr/toxalim"><img class="img-responsive" src="images/contact/toxalimLogo.jpg" alt=""></a>
                        <a target="_blank" href="https://www6.toulouse.inra.fr/toxalim/Equipes-Recherche/E2-MeX-Metabolisme-des-xenobiotiques"><img class="img-responsive" src="images/contact/mexLogo.png" alt=""></a>
                </div>
                <div class="row hidden-sm hidden-xs" style="padding-bottom:20px; border-bottom:1px solid #ddd;">
                        <a target="_blank" href="http://phenomenal-h2020.eu/home/"><img height="100px" src="images/contact/phenomenalLogo.png" alt=""></a>
                        <a target="_blank" href="http://www.toulouse.inra.fr/"><img height="100px" src="images/contact/inraLogo.jpg" alt=""></a>
                        <a target="_blank" href="https://www6.toulouse.inra.fr/toxalim"><img height="100px" src="images/contact/toxalimLogo.jpg" alt=""></a>
                        <a target="_blank" href="https://www6.toulouse.inra.fr/toxalim/Equipes-Recherche/E2-MeX-Metabolisme-des-xenobiotiques"><img height="100px" src="images/contact/mexLogo.png" alt=""></a>
                </div>
                <h4 style="padding-top:20px; padding-bottom:20px;">MetExploreViz provides an interactive visualisation of metabolic networks in order to mine metabolomics (and other “omics”) data. </h4>
            </div>
           

            <div class="col-md-4">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4><i class="fa fa-fw fa-check"></i> MetExploreViz v1.2</h4>
                    </div>
                    <div class="panel-body">
                        <p> 
                            The first version of MetExploreViz allows to visualize metabolic networks. 
                            Some features permits to map omics data, find paths or change layout on this visualization.  
                        </p>

                        <a href="versions.php"  class="btn btn-default">Download</a>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4><i class="fa fa-fw fa-gift"></i> Free &amp; Open Source</h4>
                    </div>
                    <div class="panel-body">
                        <p>
                            It's an academic projet which allows to biologists to analyse metabolic network
                        </p>
                        <a href="http://vm-metexplore-dev.toulouse.inra.fr:3000/MetExplore/MetExploreViz" target="_blank" class="btn btn-default">git</a>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4><i class="fa fa-fw fa-compass"></i> Easy to Use</h4>
                    </div>
                    <div class="panel-body">
                        <p>
                            You can use it simply just as an application or really integrate the functionalities in your web site.
                        </p>
                        <a href="documentation.php" class="btn btn-default">Learn More</a>
                    </div>
                </div>
            </div>
        </div>
        <!-- /.row -->

        <!-- Portfolio Section -->
        <div class="row">
            <div class="col-lg-12">
                <h2 class="page-header">Portfolio of Features</h2>
            </div>
            <div class="col-md-4 col-sm-6">
                <a href="documentation.php#visualisation" target="_blank" >
                    <img class="img-responsive img-portfolio img-hover" src="images/examples700x450/genomeScale.png" alt="">
                </a>
            </div>
            <div class="col-md-4 col-sm-6">
                <a href="documentation.php#drawing" target="_blank" >
                    <img class="img-responsive img-portfolio img-hover" src="images/examples700x450/highlight1.png" alt="">
                </a>
            </div>
            <div class="col-md-4 col-sm-6">
                <a href="documentation.php#sidecoumpounds" target="_blank" >
                    <img class="img-responsive img-portfolio img-hover" src="images/examples700x450/sideCompounds3.png" alt="">
                </a>
            </div>
            <div class="col-md-4 col-sm-6">
                <a href="documentation.php#import" target="_blank" >
                    <img class="img-responsive img-portfolio img-hover" src="images/examples700x450/continuousMapping.png" alt="">
                </a>
            </div>
            <div class="col-md-4 col-sm-6">
                <a href="documentation.php#import" target="_blank" >
                    <img class="img-responsive img-portfolio img-hover" src="images/examples700x450/discreteMapping2.png" alt="">
                </a>
            </div>
            <div class="col-md-4 col-sm-6">
                <a href="documentation.php#networkcomparison" target="_blank" >
                    <img class="img-responsive img-portfolio img-hover" src="images/examples700x450/compareMappings.png" alt="">
                </a>
            </div>
            <div class="col-md-4 col-sm-6">
                <a href="documentation.php#visualisation" target="_blank" >
                    <img class="img-responsive img-portfolio img-hover" src="images/examples700x450/compartments.png" alt="">
                </a>
            </div>
            <div class="col-md-4 col-sm-6">
                <a href="documentation.php#flux" target="_blank" >
                    <img class="img-responsive img-portfolio img-hover" src="images/examples700x450/flux.png" alt="">
                </a>
            </div>
            <div class="col-md-4 col-sm-6">
                <a href="documentation.php#flux" target="_blank" >
                    <img class="img-responsive img-portfolio img-hover" src="images/examples700x450/pathways.png" alt="">
                </a>
            </div>
        </div>
        <!-- /.row -->

        <!-- Features Section
        <div class="row">
            <div class="col-lg-12">
                <h2 class="page-header">Modern Business Features</h2>
            </div>
            <div class="col-md-6">
                <p>The Modern Business template by Start Bootstrap includes:</p>
                <ul>
                    <li><strong>Bootstrap v3.2.0</strong>
                    </li>
                    <li>jQuery v1.11.0</li>
                    <li>Font Awesome v4.1.0</li>
                    <li>Working PHP contact form with validation</li>
                    <li>Unstyled page elements for easy customization</li>
                    <li>17 HTML pages</li>
                </ul>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, omnis doloremque non cum id reprehenderit, quisquam totam aspernatur tempora minima unde aliquid ea culpa sunt. Reiciendis quia dolorum ducimus unde.</p>
            </div>
            <div class="col-md-6">
                <img class="img-responsive" src="http://placehold.it/700x450" alt="">
            </div>
        </div> -->
        <!-- /.row -->

        <!-- <hr> -->

        <!-- Call to Action Section 
        <div class="well">
            <div class="row">
                <div class="col-md-8">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, expedita, saepe, vero rerum deleniti beatae veniam harum neque nemo praesentium cum alias asperiores commodi.</p>
                </div>
                <div class="col-md-4">
                    <a class="btn btn-lg btn-default btn-block" href="#">Call to Action</a>
                </div>
            </div>
        </div>-->

        <!-- Footer -->
        <?php include('./footer.php'); ?>

    </div>
    <!-- /.container -->

    <!-- jQuery -->
    <script src="js/jquery.js"></script>

    <!-- Bootstrap Core JavaScript -->
    <script src="js/bootstrap.min.js"></script>

    <!-- Script to Activate the Carousel -->
    <script>
    $('.carousel').carousel({
        interval: 5000 //changes the speed
    })
    </script>

</body>

</html>
