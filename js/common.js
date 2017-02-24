<link rel="stylesheet" type="text/css" href="../css/grid.css">
<link rel="stylesheet" type="text/css" href="../css/owl.carousel.css">
<link rel="stylesheet" type="text/css" href="../css/style.css">
<link rel="stylesheet" href="../css/slicknav.css" />
<link rel="icon" href="../images/favicon.ico" type="image/x-icon">
<script src="jquery.js"></script>
<script src="jquery-migrate-1.2.1.js"></script>
<script src="owl.carousel.js"></script>
<script src="jquery.slicknav.js"></script>
<script src="jquery.i18n.properties.js"></script>
<script>
    $(document).ready(function () {

        $("#owl1").owlCarousel({
            items : 3, //10 items above 1000px browser width
            itemsDesktop : [1199,3], //5 items between 1000px and 901px
            itemsDesktopSmall : [767, 1], // betweem 900px and 601px
            itemsTablet: [700, 1], //2 items between 600 and 0
            itemsMobile : [479, 1], // itemsMobile disabled - inherit from itemsTablet option
            navigation : true,
            pagination : false
        });
        $("#owl2").owlCarousel({
            items : 1, //10 items above 1000px browser width
            itemsDesktop : [1199,1], //5 items between 1000px and 901px
            itemsDesktopSmall : [767, 1], // betweem 900px and 601px
            itemsTablet: [700, 1], //2 items between 600 and 0
            itemsMobile : [479, 1], // itemsMobile disabled - inherit from itemsTablet option
            navigation : true,
            pagination : false
        });

        $('.sf-menu').slicknav({
                prependTo:'.sf-menu'
        });
    });

    function getLanguage(){
        var locale = localStorage.getItem("locale");
        return locale;
    }

    function populateGlobals(){
        var lawCorp = 'msg_lawCorp';
        var msg_home='msg_home';
        var msg_about='msg_about';
        var msg_services='msg_services';
        var msg_aboutdavid='msg_aboutdavid';
        var msg_contacts='msg_contacts';

        $(".msg_lawCorp").text(jQuery.i18n.prop(lawCorp));
        $(".msg_home").text(jQuery.i18n.prop(msg_home));
        $(".msg_about").text(jQuery.i18n.prop(msg_about));
        $(".msg_services").text(jQuery.i18n.prop(msg_services));
        $(".msg_aboutdavid").text(jQuery.i18n.prop(msg_aboutdavid));
        $(".msg_contacts").text(jQuery.i18n.prop(msg_contacts));
    }

</script>
