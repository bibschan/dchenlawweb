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
                    loadDavidPage();
                }
            });
        }

        function loadDavidPage() {
// Accessing values through the map

            populateGlobals();

              var header_david='header_david';
              var header_about='header_about';
              var msg_abtdavid='msg_abtdavid';
              var header_experience='header_experience';



              (".header_david").text(jQuery.i18n.prop(header_david));
               (".header_about").text(jQuery.i18n.prop(header_about));
              (".msg_abtdavid").text(jQuery.i18n.prop(msg_abtdavid));
              (".header_experience").text(jQuery.i18n.prop(header_experience));
              (".header_david").text(jQuery.i18n.prop(header_david));


        }







       
//========================================================
//                LOCALIZATION - END
//========================================================