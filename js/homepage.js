//========================================================
//                LOCALIZATION - START
//========================================================
    $(document).ready(function () {
        loadBundles(getLanguage());
    });

        function getLanguage(){
            var locale = localStorage.getItem("locale");
            return locale;
        }


        function setLangague(selectLocale){
            localStorage.setItem("locale", selectLocale.value);
            loadBundles(getLanguage());
        }

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
            var msg_civil = 'msg_civil';
            var text_civil = 'text_civil';
            var msg_immi = 'msg_immi';
            var text_immi = 'text_immi';
            var msg_busin = 'msg_busin';
            var text_busin = 'text_busin';
            var msg_conv = 'msg_conv';
            var text_conv = 'text_conv';
            var msg_consult = 'msg_consult';
            var msg_call = 'msg_call';
            var msg_weekday='msg_weekday';
            var msg_questions='msg_questions';
            var msg_click='msg_click';
            var msg_family='msg_family';
            var msg_business='msg_business';
            var msg_founded='msg_founded';
            var msg_home='msg_home';
            var msg_about='msg_about';
            var msg_services='msg_services';
            var msg_aboutdavid='msg_aboutdavid';
            var msg_contacts='msg_contacts';

    
            $(".msg_lawCorp").text(jQuery.i18n.prop(lawCorp));
            $(".msg_cont").text(jQuery.i18n.prop(cont));
            $(".msg_civil").text(jQuery.i18n.prop(msg_civil));
            $(".text_civil").text(jQuery.i18n.prop(text_civil));
            $(".msg_immi").text(jQuery.i18n.prop(msg_immi));
            $(".text_immi").text(jQuery.i18n.prop(text_immi));
            $(".msg_busin").text(jQuery.i18n.prop(msg_busin));
            $(".text_busin").text(jQuery.i18n.prop(text_busin));
            $(".msg_conv").text(jQuery.i18n.prop(msg_conv));
            $(".text_conv").text(jQuery.i18n.prop(text_conv));
            $(".msg_consult").text(jQuery.i18n.prop(msg_consult));
            $(".msg_call").text(jQuery.i18n.prop(msg_call));
            $(".msg_weekday").text(jQuery.i18n.prop(msg_weekday));
            $(".msg_questions").text(jQuery.i18n.prop(msg_questions));
            $(".msg_click").text(jQuery.i18n.prop(msg_click));
            $(".msg_family").text(jQuery.i18n.prop(msg_family));
            $(".msg_business").text(jQuery.i18n.prop(msg_business));
            $(".msg_founded").text(jQuery.i18n.prop(msg_founded));
            $(".msg_home").text(jQuery.i18n.prop(msg_home));
            $(".msg_about").text(jQuery.i18n.prop(msg_about));
            $(".msg_services").text(jQuery.i18n.prop(msg_services));
            $(".msg_aboutdavid").text(jQuery.i18n.prop(msg_aboutdavid));
            $(".msg_contacts").text(jQuery.i18n.prop(msg_contacts));
           

        }



       
//========================================================
//                LOCALIZATION - END
//========================================================