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
                    <span class="glyphicon glyphicon-wrench"></span>
                    Installation
                </h1>
                <ol class="breadcrumb">
                    <li><a href="index.php">Home</a>
                    </li>
                    <li class="active">Installation</li>
                </ol>
            </div>
        </div>
        <!-- /.row -->

            <div class="row">
                <div class="col-sm-3" id="myScrollspy">
                        <nav class="nav-sidebar">
                            <ul id="sidebar" class="nav  nav-stacked" data-spy="affix" data-offset-top="170">

                            <li id="titleSectionTab" onclick=this.setActivity><a id="titleSectionLinkTab" href="#title1" >Download</a></li>

                            <!-- <li class="nav-divider"></li> -->

                            <li id="titleSectionTab" onclick=this.setActivity><a id="titleSectionLinkTab" href="#title2" >Installation</a></li>
                            <li onclick=this.setActivity><a id="sectionTab" href="#section3" >Include the library</a></li>
                            <li onclick=this.setActivity><a id="sectionTab" href="#section4" >Launch the window</a></li>
                        </ul>
                    </nav>
                </div>
                <div class="col-sm-9">
                <div class='titleSection' id="title1">    
                    <h1>Download</h1>
                    <p>
                        Download the latest version <a href="http://localhost/doc/versions.php" ><b>here</b></a>.
                        <!-- Or, to link directly to the latest release, copy this snippet: 

                        <script src="//d3js.org/d3.v3.min.js" charset="utf-8"></script>-->
                    </p>
                </div> 

                <div class='titleSection' id="title2">    
                    <h1>Installation</h1>
                </div>       
                <div class='section' id="section3">         
                    <h2>Include the library</h2>
                    <p>Include the release in your website:
                        <ul>
<pre><code class="html">&#60;script type="text/javascript" src="YOUR-FOLDER/metExploreViz/metexploreviz.js" charset="utf-8">  &#60;/script>
</code></pre>
                        </ul>  
                    </p>
                </div>
                 <div class='section' id="section4">    
                    <h2>Launch the window</h2>
                    <p>Include the release in your website:
                        <ul>
<pre><code class="html">&#60;script type="text/javascript">
    MetExploreViz.initFrame("YOUR-DIV-ID");
&#60;/script>
</code></pre>
                        </ul>  
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

