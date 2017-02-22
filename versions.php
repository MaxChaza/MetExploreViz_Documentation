<?php include('./header.html'); ?>

    <!-- Page Content -->
    <div class="container">

        <!-- Page Heading/Breadcrumbs -->
        <div class="row">
            <div class="col-lg-12">
                <h1 class="page-header">Versions
                </h1>
                <ol class="breadcrumb">
                    <li><a href="index.php">Home</a>
                    </li>
                    <li class="active">Versions</li>
                </ol>
            </div>
        </div>
        <!-- /.row -->

        <div class="row">

            <!-- Blog Entries Column -->
            <div class="col-md-8">

                <!-- First Blog Post -->
                <div class="section" id='1.0'>
                    <h2>1.0</h2>
                    <p class="lead">
                        by <a target="_blank" href="http://vm-metexplore-dev.toulouse.inra.fr:3000/mchazalviel">Maxime Chazalviel</a>
                    </p>
                    <p><i class="fa fa-clock-o"></i> Posted on April 10, 2016 at 2:45 PM</p>
                    <hr>
                    <a href="documentation.php#visualisation" target="_blank" >
                        <img class="img-responsive img-portfolio img-hover" src="images/versions900x300/genomeScale.png" alt="">
                    </a>
                    <hr>
                    <p>The first version of MetExploreViz allows to visualize metabolic networks. Some features permits to map omics data, find paths or change layout on this visualization.</p>
                    <a href="files/metExploreViz.zip"  class="btn btn-primary"><span class="glyphicon glyphicon-download-alt" aria-hidden="true"></span></a>
                    <a class="btn btn-primary" href="documentation.php">Read More <i class="fa fa-angle-right"></i></a>
                </div>

                <div class="section" id='1.1'>
                    <h2 id='1.1'>1.1</h2>
                    <p class="lead">
                        by <a target="_blank" href="http://vm-metexplore-dev.toulouse.inra.fr:3000/mchazalviel">Maxime Chazalviel</a>
                    </p>
                    <p><i class="fa fa-clock-o"></i> Posted on April 30, 2016 at 9:10 AM</p>
                    <hr>
                    <a href="documentation.php#visualisation" target="_blank" >
                        <img class="img-responsive img-portfolio img-hover" src="images/versions900x300/pathways.png" alt="">
                    </a>
                    <hr>
                    <p>Clust nodes by compartments or pathways.</p>
                    <a href="files/metExploreViz_1.1.zip"  class="btn btn-primary"><span class="glyphicon glyphicon-download-alt" aria-hidden="true"></span></a>
                    <a class="btn btn-primary" href="documentation.php#layout">Read More <i class="fa fa-angle-right"></i></a>
                </div>

                <div class="section" id='1.2'>
                    <h2 id='1.2'>1.2</h2>
                    <p class="lead">
                        by <a target="_blank" href="http://vm-metexplore-dev.toulouse.inra.fr:3000/mchazalviel">Maxime Chazalviel</a>
                    </p>
                    <p><i class="fa fa-clock-o"></i> Posted on July 04, 2016 at 11:31 M</p>
                    <hr>
                    <a href="documentation.php#visualisation" target="_blank" >
                        <img class="img-responsive img-portfolio img-hover" src="images/versions900x300/flux.png" alt="">
                    </a>
                    <hr>
                    <p>Map flux values on links.</p>
                    <a href="files/metExploreViz_1.2.zip"  class="btn btn-primary"><span class="glyphicon glyphicon-download-alt" aria-hidden="true"></span></a>
                    <a class="btn btn-primary" href="documentation.php#flux">Read More <i class="fa fa-angle-right"></i></a>
                </div>

                <!-- Pager -->
                <!-- <ul class="pager">
                    <li class="previous">
                        <a href="#">&larr; Older</a>
                    </li>
                    <li class="next">
                        <a href="#">Newer &rarr;</a>
                    </li>
                </ul> -->
            </div>

            <!-- Blog Sidebar Widgets Column -->
            <div class="col-md-4">

                <!-- Blog Search Well -->
                <!-- 
                <div class="well">
                    <h4>Version Search</h4>
                    <div class="input-group">
                        <input type="text" class="form-control">
                        <span class="input-group-btn">
                            <button class="btn btn-default" type="button"><i class="fa fa-search"></i></button>
                        </span>
                    </div>
                </div>
                -->
                <!-- Blog Categories Well -->
                <div class="well">
                    <h4>Versions</h4>
                    <div class="row">
                        <div class="col-lg-6">
                            <ul class="list-unstyled">
                                <li><a href="#1.0">1.0</a>
                                </li>
                                <li><a href="#1.1">1.1</a>
                                </li>
                                <li><a href="#1.2">1.2</a>
                                </li>
                            </ul>
                        </div>
                        <!-- /.col-lg-6 
                        <div class="col-lg-6">
                            <ul class="list-unstyled">
                                <li><a href="#">Category Name</a>
                                </li>
                                <li><a href="#">Category Name</a>
                                </li>
                                <li><a href="#">Category Name</a>
                                </li>
                                <li><a href="#">Category Name</a>
                                </li>
                            </ul>
                        </div>-->
                        <!-- /.col-lg-6 -->
                    </div>
                    <!-- /.row -->
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
