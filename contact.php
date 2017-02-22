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
                    <span class="glyphicon glyphicon-send"></span>
                    <!-- envelope -->
                    Contact
                </h1>
                <ol class="breadcrumb">
                    <li><a href="index.php">Home</a>
                    </li>
                    <li class="active">Contact</li>
                </ol>
            </div>
        </div>
        <!-- /.row -->

        <!-- Content Row -->
        <div class="row">
            <!-- Map Column -->
            <div class="col-md-8">
                <!-- Embedded Google Map -->
                <iframe width="100%" height="400px" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="http://maps.google.com/maps?hl=en&amp;ie=UTF8&amp;ll=43.602328, 1.375175&amp;spn=56.506174,79.013672&amp;t=m&amp;z=14&amp;output=embed"></iframe>
    
            </div>
            <!-- Contact Details Column -->
            <div class="col-md-4">
                <h3>Contact Details</h3>
                <p>
                     UMR 1331,
                     <br>180 Chemin de Tournefeuille, 
                     <br>31300 Toulouse
                </p>
                <p><i class="fa fa-phone"></i> 
                    <abbr title="Phone">Phone</abbr>: +33 (0) 582 06 63 95 </p>
                <p><i class="fa fa-envelope-o"></i> 
                    <abbr title="Email">Email</abbr>: <a target="_blank" href="mailto:metexplore@toulouse.inra.fr">metexplore@toulouse.inra.fr</a>
                </p>
                <p><i class="fa fa-clock-o"></i> 
                    <abbr title="Hours">Hours</abbr>: Monday - Friday: 9:00 AM to 5:00 PM</p>
                <ul class="list-unstyled list-inline list-social-icons">
                    <li>
                        <a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Fmetexplore.toulouse.inra.fr%2Fjoomla3%2Findex.php%23.VmAZagMeFLk.facebook"><i class="fa fa-facebook-square fa-2x"></i></a>
                    </li>
                    <li>
                        <a target="_blank" href="https://www.linkedin.com/shareArticle?mini=true&url=http%3A%2F%2Fmetexplore.toulouse.inra.fr%2Fjoomla3%2Findex.php%23.VmAZq43dFU4.linkedin&title=MetExplore+-+MetExplore&ro=false&summary=&source="><i class="fa fa-linkedin-square fa-2x"></i></a>
                    </li>
                    <li>
                        <a target="_blank" href="https://twitter.com/intent/tweet?text=MetExplore%20-%20MetExplore&url=http%3A%2F%2Fmetexplore.toulouse.inra.fr%2Fjoomla3%2Findex.php%23.VmAZoXnQnjE.twitter&related="><i class="fa fa-twitter-square fa-2x"></i></a>
                    </li>
                    <li>
                        <a target="_blank" href="http://www.researchgate.net/go.Share.html?url=http%3A%2F%2Fmetexplore.toulouse.inra.fr%2Fjoomla3%2Findex.php%23.VmAd2UkG7KI.researchgate&title=MetExplore+-+MetExplore"><i class="ai ai-researchgate-square ai-2x"></i></a>
                    </li>
                </ul>
            </div>
        </div>
        <!-- /.row -->
        <div class="row">
            <div class="col-md-12" >
                <a target="_blank" href="http://www.toulouse.inra.fr/"><img height="100px"src="images/contact/inraLogo.jpg" alt=""></a>
                <a target="_blank" href="https://www6.toulouse.inra.fr/toxalim/Equipes-Recherche/E2-MeX-Metabolisme-des-xenobiotiques"><img height="100px"src="images/contact/mexLogo.png" alt=""></a>
                <a target="_blank" href="https://www6.toulouse.inra.fr/toxalim"><img height="100px"src="images/contact/toxalimLogo.jpg" alt=""></a>
                <a target="_blank" href="http://phenomenal-h2020.eu/home/"><img height="100px"src="images/contact/phenomenalLogo.png" alt=""></a>
            </div>
        </div>
        <!-- Contact Form -->
        <!-- In order to set the email address and subject line for the contact form go to the bin/contact_me.php file. -->
        <div class="row">
            <div class="col-md-8">
                <h3>Send us a Message</h3>
                <form name="sentMessage" id="contactForm" novalidate>
                    <div class="control-group form-group">
                        <div class="controls">
                            <label>Full Name:</label>
                            <input type="text" class="form-control" id="name" required data-validation-required-message="Please enter your name.">
                            <p class="help-block"></p>
                        </div>
                    </div>
                    <div class="control-group form-group">
                        <div class="controls">
                            <label>Phone Number:</label>
                            <input type="tel" class="form-control" id="phone" required data-validation-required-message="Please enter your phone number.">
                        </div>
                    </div>
                    <div class="control-group form-group">
                        <div class="controls">
                            <label>Email Address:</label>
                            <input type="email" class="form-control" id="email" required data-validation-required-message="Please enter your email address.">
                        </div>
                    </div>
                    <div class="control-group form-group">
                        <div class="controls">
                            <label>Message:</label>
                            <textarea rows="10" cols="100" class="form-control" id="message" required data-validation-required-message="Please enter your message" maxlength="999" style="resize:none"></textarea>
                        </div>
                    </div>
                    <div id="success"></div>
                    <!-- For success/fail messages -->
                    <button type="submit" class="btn btn-primary">Send Message</button>
                </form>
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

    <!-- Contact Form JavaScript -->
    <!-- Do not edit these files! In order to set the email address and subject line for the contact form go to the bin/contact_me.php file. -->
    <script src="js/jqBootstrapValidation.js"></script>
    <script src="js/contact_me.js"></script>

</body>

</html>
