!function(t){"use strict";t(".app-sidebar #sidemenu-Tab a").each((function(){var a=window.location.href.split(/[?#]/)[0];this.href==a&&(t(this).addClass("active"),t(this).parent().parent().parent().addClass("active"),t(this).parent().parent().prev().addClass("active"),t(this).parent().parent().prev().click())})),t("#sidemenu-Tab").easyResponsiveTabs({type:"vertical",width:"auto",fit:!0,closed:"accordion",tabidentify:"hor_1",activate:function(a){var e=t(this),i=t("#nested-tabInfo2");t("span",i).text(e.text()),i.show()}})}(jQuery);