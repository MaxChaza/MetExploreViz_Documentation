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
                    Git Contribution Workflow
                </h1>
                <ol class="breadcrumb">
                    <li><a href="index.php">Home</a>
                    </li>
                    <li class="active">Git Contribution Workflow</li>
                </ol>
            </div>
        </div>
        <!-- /.row -->

        <div class="row">
            <div class="col-sm-3" id="myScrollspy">
                <nav class="nav-sidebar">
                    <ul id="sidebar" class="nav nav-stacked" data-spy="affix" data-offset-top="170">

                        <li id="titleSectionTab" onclick=this.setActivity><a id="titleSectionLinkTab" href="#generalfunctioning" >Git Contribution Workflow</a></li>
                        <li onclick=this.setActivity><a id="sectionTab" href="#topicbranch" >Topic Branch</a></li>
                        <li onclick=this.setActivity><a id="sectionTab" href="#gitworkflow" >Git Workflow</a></li>
                        <li onclick=this.setActivity><a id="sectionTab" href="#sendingapullrequestfromgogs" >Sending a Pull Request from Gogs</a></li>
                        <li onclick=this.setActivity><a id="sectionTab" href="#whilewaitingcontinuingcraftingcommits" >While Waiting, Continuing Crafting Commits</a></li>
                        <li onclick=this.setActivity><a id="sectionTab" href="#whenyourpullrequestisaccepted" >When your Pull Request is Accepted</a></li>
                    </ul>
                </nav>
            </div>
            <div class="col-sm-9">
	            <div class='titleSection' id="gitcontributionworkflow">    
	                <h1>Git Contribution Workflow</h1>
	                <p>  
	                	Now that you have Forked the MetExploreViz Documentation, you can starting making some changes.
	                </p>
	            </div>	
	            <div class='section' id="topicbranch">   
	                <h2>Topic Branch</h2>
	                <p>
	                    A good habit to get into is using topic branches for your work, while keeping the master branch untouched. You can then keep the master branch up-to-date with the main repository without worrying about merge conflicts.<br/>
	                </p>
	            </div>
	            <div id="reducemergeconflicts">   
	                <h3>Reduce Merge Conflicts</h3>
	                <p>
	                   By not working on the master branch, you ensure that the branch's history will not diverge from the main repository's master branch. This allows you to pull in updates from the main repository (origin/incubator-cordova-docs) without merge conflicts.<br/>
					</p>
	            </div>
	            <div id="organizeandisolatecontributes">   
	                <h3>Organize and Isolate Contributes</h3>
	                <p>
	                   By creating a topic branch for each contribution, you effectively isolate your changes into a single branch of history. As long as the topic branch is up-to-date, your changes will merge cleanly into the main repository. If your contributions cannot be merged cleanly, the repository maintainer may have to reject your contribution until you update it.<br/>
					</p>
	            </div>
	            <div id="easierforthemaintainer">   
	                <h3>Easier for the Maintainer</h3>
	                <p>
						Maintainers like topic branches. It is easier to review the pull request and merge the commit into the main repository<br/>
					</p>
	            </div>
	            <div id="organizeandisolatecontributes">   
	                <h3>Organize and Isolate Contributes</h3>
	                <p>
	                   By creating a topic branch for each contribution, you effectively isolate your changes into a single branch of history. As long as the topic branch is up-to-date, your changes will merge cleanly into the main repository. If your contributions cannot be merged cleanly, the repository maintainer may have to reject your contribution until you update it.<br/>
					</p>
	            </div>
	            <div id="organizeandisolatecontributes">   
	                <h3>Organize and Isolate Contributes</h3>
	                <p>
	                   By creating a topic branch for each contribution, you effectively isolate your changes into a single branch of history. As long as the topic branch is up-to-date, your changes will merge cleanly into the main repository. If your contributions cannot be merged cleanly, the repository maintainer may have to reject your contribution until you update it.<br/>
					</p>
	            </div>
	            <div class='section' id="gitworkflow">   
	                <h2>Git Workflow</h2>
	                <p>
	                   Consider that you've decided to work on MetExplore ticket #121, which is "Add in the Organism table the NCBI taxonomy table".<br/>
					</p>
	            </div>
	            <div id="createatopicbranch">   
	                <h3>Create a topic branch</h3>
	                <p>
<pre><code><t style="color: green;">$</t> git <t style="color: #fcc28c;">checkout</t> master
<t style="color: green;">$</t> git <t style="color: #fcc28c;">checkout -b</t> ticket_121
<t style="color: green;">$</t> git <t style="color: #fcc28c;">branch</t>
    master
  * ticket_11
</code></pre>	               	
						<p>Now, create a topic branch named ticket_121 from master for ticket #121.</p>

						<p>You can name the topic branch anything, but it makes sense to name it after the ticket. This topic branch is now isolated and branched off the history of your master branch.</p>
					</p>
	            </div>
	            <div id="makefilechanges">   
	                <h3>Make File Changes</h3>
	                <p>
<pre><code><t style="color: green;">$</t> [ edit aFile.js ]
<t style="color: green;">$</t> git <t style="color: #fcc28c;">status</t>
  modified: aFile.js 
</code></pre>	                	
						git status shows that you have modified one file.<br/>
					</p>
	            </div>
	            <div id="committhefilechanges">   
	                <h3>Commit the File Changes</h3>
	                <p>
<pre><code><t style="color: green;">$</t> git <t style="color: #fcc28c;">add</t> aFile.md
<t style="color: green;">$</t> git <t style="color: #fcc28c;">status</t>
<t style="color: green;">$</t> git commit -m "[#121] Add in the Organism table the NCBI taxonomy table."
</code></pre>	                	
						<p>git add will stage the file changes. You can then commit the staged file(s) with git commit.</p>

						<p>Alternatively, you could skip git add and use git commit -am "...."</p>
					</p>
	            </div>
	            <div id="commitmorefilechanges">   
	                <h3>Commit More File Changes</h3>
	                <p>
<pre><code><t style="color: green;">$</t> [ edit aFile.md ]
<t style="color: green;">$</t> git <t style="color: #fcc28c;">commit -am</t> "[#121] Fix syntax error." 
</code></pre>	                	
						<p>git add will stage the file changes. You can then commit the staged file(s) with git commit.</p>

						<p>Alternatively, you could skip git add and use git commit -am "...."</p>
					</p>
	            </div>
	            <div id="preparetosendpullrequest">   
	                <h3>Prepare to Send Pull Request</h3>
	                <p>
<pre><code><t style="color: green;">$</t> git <t style="color: #fcc28c;">checkout</t> master
<t style="color: green;">$</t> git <t style="color: #fcc28c;">pull</t> origin master
<t style="color: green;">$</t> git <t style="color: #fcc28c;">checkout</t> ticket_121
<t style="color: green;">$</t> git <t style="color: #fcc28c;">rebase</t> master
</code></pre>	
						<p>Before sending the pull request, you should ensure that your changes merge cleanly with the main repository origin/incubator-cordova-docs.</p>						

						<p>You can do this by pulling the latest changes from the main repository and rebasing the history of the master branch onto the topic branch ticket_121. Essentially, this will fast-forward your topic branch to the latest commit of the master.</p>						

						<p>Alternatively, you can use git merge master instead of git rebase master, but your topic branches history may not be as clean.</p>
					</p>
	            </div>
	            <div id="shareyourchangesongogs">   
	                <h3>Share your Changes on Gogs</h3>
	                <p>
<pre><code><t style="color: green;">$</t> git <t style="color: #fcc28c;">checkout</t> ticket_121
<t style="color: green;">$</t> git <t style="color: #fcc28c;">push</t> origin ticket_121
</code></pre>	                	
						<p>By pushing your topic branch onto your Gogs fork, a MetExplore2 maintainer can review and merge the topic branch into the main repository.</p>
					</p>
	            </div>
	            <div class='section' id="sendingapullrequestfromgogs">   
	                <h2>Sending a Pull Request from Gogs</h2>
	                <p>
						Open a web browser to your Gogs account's fork of the MetExplore2 repository. Select your topic branch so that the pull request references the topic branch.
						<ul>
							<li>Click the Pull Request button.</li>              
						</ul>
					</p>
	            </div>
	            <div class='section' id="whilewaitingcontinuingcraftingcommits">   
	                <h2>While Waiting, Continuing Crafting Commits</h2>
	                <p>
						Since you worked on the topic branch instead of the master branch, you can continue working while waiting for the pull request to go through.
					</p>
	                <p>
						Be sure to create the topic branch from master.
					</p>
	                <p>
<pre><code><t style="color: green;">$</t> git <t style="color: #fcc28c;">checkout</t> master
<t style="color: green;">$</t> git <t style="color: #fcc28c;">pull</t> origin master
<t style="color: green;">$</t> git <t style="color: #fcc28c;">checkout -b</t> fix_ugly_bug_example
<t style="color: green;">$</t> git <t style="color: #fcc28c;">branch -a</t>
  * fix_ugly_bug_example
    master
    ticket_11
</code></pre>	                	
					</p>
	            </div>
	            <div class='section' id="whenyourpullrequestisaccepted">   
	                <h2>When your Pull Request is Accepted</h2>
	                <p>
<pre><code><t style="color: green;">$</t> git <t style="color: #fcc28c;">checkout -b</t> master
<t style="color: green;">$</t> git <t style="color: #fcc28c;">pull</t> origin master
<t style="color: green;">$</t> git <t style="color: #fcc28c;">log</t> 
</code></pre>	                	
					</p>
	                <p>
						You can now delete your topic branch, because it is now merged into the main repository and in master branch.
					</p>
	                <p>
<pre><code><t style="color: green;">$</t> git <t style="color: #fcc28c;">branch -d</t> ticket_121
<t style="color: green;">$</t> git <t style="color: #fcc28c;">push</t> origin :ticket_121
</code></pre>	                	
					</p>
	                <p>
						I know, deleting a remote topic branch is ugly (git push origin :ticket_121).
					</p>
	            </div>
	            <div class='section' id="ifyourpullrequestisrejected">   
	                <h2>If your Pull Request is Rejected</h2>
	                <p>
						In this case, you just need to update your branch from the main repository and then address the rejection reason.
					</p>
	                <p>
<pre><code><t style="color: green;">$</t> git <t style="color: #fcc28c;">checkout</t> master
<t style="color: green;">$</t> git <t style="color: #fcc28c;">pull</t> origin master
<t style="color: green;">$</t> git <t style="color: #fcc28c;">checkout</t> ticket_121
<t style="color: green;">$</t> git <t style="color: #fcc28c;">rebase</t> master
( edit / commit / edit / commit)
<t style="color: green;">$</t> git <t style="color: #fcc28c;">push</t> origin ticket_121
</code></pre>	                	
					</p>
	                <p>
	                	Once you are ready, resend the pull request from your Gogs account.
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