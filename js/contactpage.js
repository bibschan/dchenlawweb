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
                    loadContactPage();
                }
            });
        }

        function loadContactPage() {
// Accessing values through the map

            populateGlobals();

              var header_contact='header_contact';
              var msg_adress='msg_adress';
              var msg_satellite='msg_satellite';




              $(".header_contact").text(jQuery.i18n.prop(header_contact));
              $(".msg_adress").text(jQuery.i18n.prop(msg_adress));
              $(".msg_satellite").text(jQuery.i18n.prop(msg_satellite));

              


        }







       
//========================================================
//                LOCALIZATION - END
//========================================================