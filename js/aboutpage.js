//========================================================
//                LOCALIZATION - START
//========================================================
    $(document).ready(function () {
        //loadBundles(jQuery.i18n.browserLang());
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

            populateGlobals();

              var msg_aboutfirm='msg_aboutfirm';
              var msg_inception='msg_inception';
              var msg_dchen='msg_dchen';
              var msg_goal='msg_goal';
              var msg_approach='msg_approach';
              var msg_fullrange='msg_fullrange';
              var msg_fullrange2='msg_fullrange2';
              var msg_mission='msg_mission';
              var msg_deliver='msg_deliver';






            $(".msg_aboutfirm").text(jQuery.i18n.prop(msg_aboutfirm));
            $(".msg_inception").text(jQuery.i18n.prop(msg_inception));
            $(".msg_dchen").text(jQuery.i18n.prop(msg_dchen));
            $(".msg_goal").text(jQuery.i18n.prop(msg_goal));
            $(".msg_approach").text(jQuery.i18n.prop(msg_approach));
            $(".msg_fullrange").text(jQuery.i18n.prop(msg_fullrange));
            $(".msg_fullrange2").text(jQuery.i18n.prop(msg_fullrange2));
            $(".msg_mission").text(jQuery.i18n.prop(msg_mission));
            $(".msg_deliver").text(jQuery.i18n.prop(msg_deliver));


        }







       
//========================================================
//                LOCALIZATION - END
//========================================================