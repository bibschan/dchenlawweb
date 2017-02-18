//========================================================
//                LOCALIZATION - START
//========================================================
    $(document).ready(function () {
        loadBundles(jQuery.i18n.browserLang());
        //loadBundles("ko");
    });


        function loadBundles(lang) {
            jQuery.i18n.properties({
                name:'Messages', 
                path:'bundle/', 
                mode:'both',
                language:lang, 
                callback: function() {
                    loadHomePage();
                }
            });
        }

        function loadHomePage() {
            // Accessing values through the map
            var lawCorp = 'msg_lawCorp';
            var cont = 'msg_cont';
            $(".msg_lawCorp").text(jQuery.i18n.prop(lawCorp));
            $(".msg_cont").text(jQuery.i18n.prop(cont));
        }
//========================================================
//                LOCALIZATION - END
//========================================================