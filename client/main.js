/* ---------------------------------------------------- +/

## Main ##

Global client-side code. Loads last. 

/+ ---------------------------------------------------- */


Template.homepage.rendered = function () {
    $('#scrollToTop').hide();
    var route = Router.current();
    if ( route && route.path == '/' ) {
        document.body.className = "showBackgroundImage";
    }
};

Template.contact.rendered = function () {
    $('#scrollToTop').hide();

    var route = Router.current();
    if ( route && route.path == '/contact' ) {
        document.body.className = "showBackgroundImage";
    }
};

// Template.footer.rendered = function () {
//   var height_diff = $(window).height() - $('body').height();
//     if ( height_diff > 0 ) {
//         $('footer').css( 'margin-top', height_diff );
//     }
// };

// pop up when user clicks images
Template.layout.events({
    'click #primary-image img': function(e,t) {
        e.preventDefault();
        $('.modal').modal();

        _this = $(e.target);
        myImage = _this.attr('src');

        myText = t.find('h1').textContent;
        
        var newTitle = $('.modal-title');
        var newModal = $('.modal-body > div');

        newTitle.text('' + myText + '');
        newModal.html('<div class="col-lg-12"><img id="modalImage" src="'+ myImage + '" /></div>');
        
    },
    'click .srcs': function (e,t) {
        e.preventDefault();
        $('.modal').modal();

        _this = $(e.target);
        myImage = _this.attr('src');
        myText = _this.attr('alt');

        sectionHeadline = t.find('h1').textContent;
        
        var newTitle = $('.modal-title');
        var newModal = $('.modal-body > div');

        newTitle.text('' + sectionHeadline + ' -- ' + myText + '');
        newModal.html('<div class="col-lg-12"><img id="modalImage" src="'+ myImage + '" /></div>');
        
    }
});

UI.registerHelper('hasPalDropdown', function () {

    var route = Router.current();
    var routeName = route.route.name.toString();
    var noPals = ['tablecovers','popupbanners','eventtents', 'promoflags'];

    return !_.contains(noPals, routeName);

})



Template.categories.helpers({
    latexMenu: function () {
        return [
            { title : "<p>One-Colour Print</p>" , path : "roundballoons", src : "Prairie.jpg", href : "" },
            { title : "<p>Heart Balloons</p>" , path : "heartballoons", src : "Heart.jpg", href : "" },
            { title : "<p>Multi-Colour Print</p>" , path : "multicolourprint", src : "MulticolourCrop.png", href : "" },
            { title : "<p>QuickLink™ One-Colour</p>" , path : "quicklinkonecolour", src : "qlinkarch.jpg", href : "" },
            { title : "<p>AdWrap® Balloons</p>" , path : "adwrap", src : "AdWrapStockAware.jpg", href : "" },
            { title : "<p>AdWave® Balloons</p>" , path : "adwave", src : "Adwaves2014.jpg", href : "" },
            { title : "<p>Giant Latex Balloons</p>" , path : "giantlatexballoons", src : "giantballoons.jpg", href : "" }

        ]
    },
    ballsMenu: function () {
        return [
            { title : "<p>AdMax™ Mini Sport Balls</p>" , path : "admaxminisportballs", src : "footballstripe.jpg" },
            { title : "<p>Beachballs</p>" , path : "beachballs", src : "16inchbeachball.jpg" },
            { title : "<p>AdPunch™ Balls</p>" , path : "adpunchballs", src : "adpunchballs.jpg" }
        ]
    },
    eventsMenu: function () {
        return [
            { title : "<p>Pop Up Banners</p>" , path : "popupbanners", src : "verticalpopup.jpg" },
            { title : "<p>Table Covers</p>" , path : "tablecovers", src : "tablecoversCrop.png" },
            { title : "<p>Event Tents</p>" , path : "eventtents", src : "newnationalcellularCrop.png" },
            { title : "<p>Promotional Flags</p>" , path : "promoflags", src : "flagsredone.jpg" }
        ]
    },
    microfoilMenu: function () {
        return [
            { title : "<p>Small Quantity Screen Print Balloons</p>" , path : "microfoilvalved", src : "smallmicrocropped.png" },
            { title : "<p>Large Quantity Flexo Print Balloons</p>" , path : "largequantmicrofoil", src : "lgqtymicrofoil.jpg" }
            
        ]
    },
    adriteMenu: function () {
        return [
            { title : "<p>AdRite™ Latex Balloons</p>" , path : "adriteeconomyline", src : "adritebasicpal.jpg" },
            { title : "<p>Cloudbuster Balloons</p>" , path : "cloudbuster", src : "cloudbuster.jpg" },
            { title : "<p>Outdoor Balloons Print</p>" , path : "outdoorballoons", src : "outdoor-asst-basic.jpg" }
            
        ]
    }

});



