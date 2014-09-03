// if button is clicked insert text into filter box
Template.filterbuttons.events({
    'click .tags': function (e,t) {
        e.preventDefault();
        
        var selection = e.target.id,
        inp = $('.reactive-table-input');
        
        // 1.  insert text into filter/search bar
        inp.val(selection);
        
        // 2.  simulate key event and filter table
        inp.trigger('keyup');

    }
});

Template.filterbuttons.rendered = function () {
  var buttonGroup = $('.filter-button-container'); 
    
    Meteor.defer(function () {
      if ( buttonGroup.length > 1 ) {
        buttonGroup.get(1).remove();
    }
    } )
};

// Template.filterbuttons.rendered = function () {
//     var route = Router.current();
//     // var foo = Session.get('' + route.path + '');
//     var foo = route.route.name;
//     console.log(foo);

//     var baz = Session.set('ddd', foo);
//     console.log('baz: ', baz)
    
//     console.log('filterbtn route is here:', route);
    
//     console.log('filterbtn this.data is here:', this.data);
    
// };