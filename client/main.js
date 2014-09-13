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

Template.footer.rendered = function () {
  var height_diff = $(window).height() - $('body').height();
    if ( height_diff > 0 ) {
        $('footer').css( 'margin-top', height_diff );
    }
};

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








