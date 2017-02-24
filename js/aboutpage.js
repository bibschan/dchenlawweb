//========================================================
//                LOCALIZATION - START
//========================================================
    $(document).ready(function () {
        loadBundles(getLanguage());
    });

        function loadBundles(lang) {
            jQuery.i18n.properties({
                name:'Messages', 
                path:'bundle/', 
                mode:'both',
                language:lang, 
                callback: function() {
                    loadAboutPage();
                }
            });
        }

        function loadAboutPage() {
// Accessing values through the map
              var msg_aboutfirm='msg_aboutfirm';


           






            $(".msg_aboutfirm").text(jQuery.i18n.prop(msg_aboutfirm));




        }







       
//========================================================
//                LOCALIZATION - END
//========================================================