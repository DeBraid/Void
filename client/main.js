(function ($) {

/**
* @function
* @property {object} jQuery plugin which runs handler function once specified element is inserted into the DOM
* @param {function} handler A function to execute at the time when the element is inserted
* @param {bool} shouldRunHandlerOnce Optional: if true, handler is unbound after its first invocation
* @example $(selector).waitUntilExists(function);
*/

$.fn.waitUntilExists    = function (handler, shouldRunHandlerOnce, isChild) {
    var found       = 'found';
    var $this       = $(this.selector);
    var $elements   = $this.not(function () { return $(this).data(found); }).each(handler).data(found, true);

    if (!isChild)
    {
        (window.waitUntilExists_Intervals = window.waitUntilExists_Intervals || {})[this.selector] =
            window.setInterval(function () { $this.waitUntilExists(handler, shouldRunHandlerOnce, true); }, 500)
        ;
    }
    else if (shouldRunHandlerOnce && $elements.length)
    {
        window.clearInterval(window.waitUntilExists_Intervals[this.selector]);
    }

    return $this;
}

}(jQuery));

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
        
    }
});

Template.filterbuttons.created = function() {
  this.state = new ReactiveDict;
};

Template.reactiveTable.rendered = function () {
  Meteor.defer(function  (argument) {
    UI.insert( UI.render( Template.filterbuttons ) , $('.reactive-table-filter').get(0) )
  })
};

Template.filterbuttons.helpers({
  dynamicButtons: function () {
    var words = UI._templateInstance().state.get('words');
    return _.map(words, function(word) {
      return {name: word};
    });
  }
});


Template.filterbuttons.rendered = function() {
  var self = this;


  Meteor.defer(function  (argument) {
      $('.productname').waitUntilExists(function (argument) {
        
      var names = $('.productname').text().split(' ');
      console.log('names inside 1st defer are: ', names);

      Meteor.defer(function  (argument) {
          var names = $('.productname').text().split(' ');

          if ( names == '' || names.length < 1 ) {
            console.log('names is empty string, clearing input');
            $('.reactive-table-input').val('');
            var names = $('.productname').text().split(' ');
            console.log('unique 2nd defer: ', _.uniq(names));

            self.state.set('words', _.uniq(names));  
          } else {

            console.log('unique 2nd defer: ', _.uniq(names));

            self.state.set('words', _.uniq(names));
          }
      })
    })
  })

};

/* 

Code below added to reactive_table.js


Template.reactiveTable.helpers({
  'getField': function (object) {
        var fn = this.fn || function (value) { return value; };
        var key = this.key || this;
        var value = get(object, key);
        
        if ( value.length == undefined ) {
            value = value.toFixed(2)
        } else {
            value = value;
        }
        return fn(value, object);
    }
});

*/

