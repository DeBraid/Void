/* ---------------------------------------------------- +/

## Main ##

Global client-side code. Loads last. 

/+ ---------------------------------------------------- */


Template.homepage.rendered = function () {
    var route = Router.current();
    if ( route && route.path == '/' || '/contact' ) {
        document.body.className = "showBackgroundImage";
    }
};

Template.contact.rendered = function () {
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
Template.reactiveTable.events({
  'click .tableimages': function(e,t) {
        e.preventDefault();
        $('.modal').modal();

        _this = $(e.target);
        myImage = _this.attr('src');
        myText = _this.parent().siblings('h3').html();

        var newTitle = $('.modal-title');
        var newModal = $('.modal-body > div');

        newTitle.text('' + myText + '');
        newModal.html('<div class="col-lg-12"><img id="modalImage" src="'+ myImage + '" /></div>');
        
    }, 
    'keyup .reactive-table-input': function (argument) {
        // var foo = $('table > tbody > tr:nth-child(1) > td.Product.Description > div > img').attr('src');
        // console.log(foo);
    }
});

// Template.reactiveTable.rendered = function () {
//   Meteor.defer(function  (argument) {
//     UI.insert( UI.render( Template.filterdropdown ) , $('.reactive-table-filter').get(0) )
//   })
// };
