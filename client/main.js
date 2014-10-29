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



Template.imageGrid.helpers({
    latexMenu: function () {
        return [
            { title : "<p>One-Colour Print</p>" , path : "roundballoons", src : "Prairie.jpg", href : "" },
            { title : "<p>Heart Balloons</p>" , path : "heartballoons", src : "Heart.jpg", href : "" },
            { title : "<p>Multi-Colour Print</p>" , path : "multicolourprint", src : "MulticolourCrop.png", href : "" },
            { title : "<p>QuickLink<sup>TM</sup> One-Colour</p>" , path : "quicklinkonecolour", src : "qlinkarch.jpg", href : "" },
            { title : "<p>AdWrap<sup>®</sup> Balloons</p>" , path : "adwrap", src : "AdWrapStockAware.jpg", href : "" },
            { title : "<p>AdWave<sup>®</sup> Balloons</p>" , path : "adwave", src : "Adwaves2014.jpg", href : "" },
            { title : "<p>Giant Latex Balloons</p>" , path : "giantlatexballoons", src : "giantballoons.jpg", href : "" }

        ]
    }
});