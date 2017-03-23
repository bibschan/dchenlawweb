<!DOCTYPE html>
<html lang="en">
<head>
    <title>Contacts</title>
 <meta charset="utf-8">
    <meta name = "format-detection" content = "telephone=no" />
     <meta name = "format-detection" content = "telephone=no" />
    <meta name="description" content="D.chen Law Corporation">
    <meta name="keywords" content="law, civil law, lawyer, conveyance, business law, business, family law, divorce, canada, new westminster, vancouver, richmond, chinese, korean, contract, lawsuit">
    <meta name="author" content="Bibiana Marocco de Souza">
  <link rel="icon" href="images/logochen.jpg" type="image/x-icon"> 
  <link rel="stylesheet" type="text/css" href="css/contact-form.css">
    <link rel="import" href="js/common.js">


<!-- linking css  -->

    <link rel="stylesheet" type="text/css" href="css/animate.css">
    <link rel="stylesheet" type="text/css" href="css/contact-form.css">
    <link rel="stylesheet" type="text/css" href="css/grid.css">
    <link rel="stylesheet" type="text/css" href="css/owl.carousel.css">
    <link rel="stylesheet" type="text/css" href="css/reset.css">
    <link rel="stylesheet" type="text/css" href="css/slicknav.css">
    <link rel="stylesheet" type="text/css" href="css/stuck-menu.css">
    <link rel="stylesheet" type="text/css" href="css/style.css">
    <link rel="stylesheet" type="text/css" href="css/superfish-menu.css">
    <link rel="stylesheet" type="text/css" href="css/ui.totop.css">

    
    <script src="js/contactpage.js"></script>
    <script>
        $(document).ready(function () {
            $("#owl3").owlCarousel({
                items : 1, //10 items above 1000px browser width
                itemsDesktop : [1199,1], //5 items between 1000px and 901px
                itemsDesktopSmall : [767, 1], // betweem 900px and 601px
                itemsTablet: [700, 1], //2 items between 600 and 0
                itemsMobile : [479, 1], // itemsMobile disabled - inherit from itemsTablet option
                navigation : true,
                pagination : false
            });
        });
    </script>
    <!--[if lt IE 9]>
    <script src="js/html5shiv.js"></script>
    <div style=' clear: both; text-align:center; position: relative;'>
        <a href="http://windows.microsoft.com/en-US/internet-explorer/products/ie/home?ocid=ie6_countdown_bannercode">
            <img src="http://storage.ie6countdown.com/assets/100/images/banners/warning_bar_0000_us.jpg" border="0" height="42" width="820" alt="You are using an outdated browser. For a faster, safer browsing experience, upgrade for free today." />
        </a>
    </div>
    <![endif]-->
</head>

<body>

<!--========================================================
                          HEADER
=========================================================-->
<header id="header" class="header__1">
    <div id="stuck_container">
        <nav>
            <ul class="sf-menu">
                <li class="first menu_item"><a class="msg_home" href="index.html">Home</a></li>
                <li class="menu_item"><a class="msg_about"    href="about.html">About us</a></li>
                <li class="menu_item"><a class="msg_services" href="services.html">Services</a> </li>
                <li class="menu_item"><a class="msg_aboutdavid" href="service-for-lawyers.html">Service for Lawyers</a></li>
                <li class="last menu_item"><a class="msg_contacts" href="contact.html">Contact</a></li>
            </ul>
            <div class="clearfix"></div>
        </nav>
    </div>
    <div class="container">
        <div class="row">
            <div class="grid_12">
                <h1>
                    <a href="index.html">
                        <span class="main msg_dchen">D.CHEN</span><br>
                        <span class="secondary msg_lawCorp">LAW CORPORATION</span>
                    </a>
                </h1>
            </div>
        </div>
    </div>
</header>

<!--========================================================
                          CONTENT
=========================================================-->
   <div class="container">
        <div class="wrapper5 wrapper7">
            <div class="row">
                <div class="grid_12">
                    <h2><strong>send us your questions</strong></h2>
                </div>
            </div>
            <div class="row">
                <div class="grid_12">
                    <form id="contact-form" action="email.php" method="post">
                        <div class="contact-form-loader"></div>
                        <fieldset>
                            <div class="row">
                                <div class="grid_5">
                                    <label class="name">
                                        <input type="text" name="name" placeholder="Name:" data-constraints="@Required @JustLetters" />
                                        <span class="empty-message">*This field is required.</span>
                                    </label>
                                    <label class="email">
                                        <input type="text" name="email" placeholder="E-mail:" value=""
                                               data-constraints="@Required @Email" />
                                        <span class="empty-message">*This field is required.</span>
                                        <span class="error-message">*This is not a valid email.</span>
                                    </label>
                                    <label class="phone">
                                        <input type="text" name="phone" placeholder="Phone:" value=""
                                               data-constraints="@Required @JustNumbers" />
                                        <span class="empty-message">*This field is required.</span>
                                        <span class="error-message">*This is not a valid phone.</span>
                                    </label>
                                </div>
                                <div class="grid_7">
                                    <label class="message">
                                        <textarea name="message" placeholder="Message:" data-constraints='@Required @Length(min=10,max=999999)'></textarea>
                                        <span class="empty-message">*This field is required.</span>
                                        <span class="error-message">*The message is too short.</span>
                                    </label>
                                </div>
                            </div>
                            <label class="recaptcha"><span class="empty-message">*This field is required.</span></label> 
                            <div class="contact-form-buttons">
                                <!--<a href="#" type="submit" data-type="submit" class="btn-default" >Send Message</a>-->
                            </div>
                        </fieldset>
                        <div class="modal fade response-message">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                                        <h4 class="modal-title">Modal title</h4>
                                    </div>
                                    <div class="modal-body">
                                        You message has been sent! We will be in touch soon.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div> 

            
        
    
<!--     <div class="container">
        <div class="wrapper5 wrapper7">
            <div class="row">
                <div class="grid_12">
                    <h2><strong>feedback</strong></h2>
                </div>
            </div>
            <div class="row">
                <div class="grid_12">
                    <form id="contact-form">
                        <div class="contact-form-loader"></div>
                        <fieldset>
                            <div class="row">
                                <div class="grid_5">
                                    <label class="name">
                                        <input type="text" name="name" placeholder="Name:" data-constraints="@Required @JustLetters" />
                                        <span class="empty-message">*This field is required.</span>
                                    </label>
                                    <label class="email">
                                        <input type="text" name="email" placeholder="E-mail:" value=""
                                               data-constraints="@Required @Email" />
                                        <span class="empty-message">*This field is required.</span>
                                        <span class="error-message">*This is not a valid email.</span>
                                    </label>
                                    <label class="phone">
                                        <input type="text" name="phone" placeholder="Phone:" value=""
                                               data-constraints="@Required @JustNumbers" />
                                        <span class="empty-message">*This field is required.</span>
                                        <span class="error-message">*This is not a valid phone.</span>
                                    </label>
                                </div>
                                <div class="grid_7">
                                    <label class="message">
                                        <textarea name="message" placeholder="Message:" data-constraints='@Required @Length(min=20,max=999999)'></textarea>
                                        <span class="empty-message">*This field is required.</span>
                                        <span class="error-message">*The message is too short.</span>
                                    </label>
                                </div>
                            </div>
                            <label class="recaptcha"><span class="empty-message">*This field is required.</span></label> 
                            <div class="contact-form-buttons">
                                <a href="#" data-type="submit" class="btn-default">Send Message</a>
                            </div>
                        </fieldset>
                        <div class="modal fade response-message">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                                        <h4 class="modal-title">Modal title</h4>
                                    </div>
                                    <div class="modal-body">
                                        You message has been sent! We will be in touch soon.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div> -->
</section>

<!--========================================================
                          FOOTER
=========================================================-->
<footer id="footer">
    <div class="wrapper">
        <div class="container">
            <div class="row">
                <div class="grid_12">
                    <h1>
                        <a href="index.html">
                            <span class="secondary msg_lawcorp2">D.Chen Law Corporation</span><br>
                        </a>
                            <span class="secondary">&copy; <span id="copyright-year"></span> 

                    
                </div>
            </div>
        </div>
    </div>
</footer>

<script src="js/script.js"></script>
</body>
</html>