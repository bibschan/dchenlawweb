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
                    loadServicePage();
                }
            });
        }

        function loadServicePage() {
// Accessing values through the map

            populateGlobals();

              var header_services='header_services';
              var msg_servicerange='msg_servicerange';
              var header_core='header_core';
              var msg_corporate='msg_corporate';
              var msg_family='msg_family';
              var msg_wills='msg_wills';
              var msg_civil='msg_civil';
              var msg_business='msg_business';
              var msg_intellectual='msg_intellectual';


              (".header_services").text(jQuery.i18n.prop(header_services));
              (".msg_servicerange").text(jQuery.i18n.prop(msg_servicerange));
              (".header_core").text(jQuery.i18n.prop(header_core));
              (".msg_corporate").text(jQuery.i18n.prop(msg_corporate));
              (".msg_family").text(jQuery.i18n.prop(msg_family));
              (".msg_wills").text(jQuery.i18n.prop(msg_wills));
              (".msg_civil").text(jQuery.i18n.prop(msg_civil));
              (".msg_business").text(jQuery.i18n.prop(msg_business));
              (".msg_intellectual").text(jQuery.i18n.prop(msg_intellectual));


        }







       
//========================================================
//                LOCALIZATION - END
//========================================================