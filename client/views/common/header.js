Template.nav.events({
  // Fix for mobile nav bar staying when switching routes
  'click .dropdown-menu, .navbar-collapse a': function () {
    var myNav = $('.navbar-header .navbar-toggle');
    if ( myNav.css('display') !='none' ) {
        myNav.trigger( 'click' );
    }
  },
  'click #contact-button' : function() {
    $('.collapse.in').collapse('hide');
  },
});

UI.registerHelper('activeIfTemplateIs', function (template) {
// var balls = ["AdMax™ Mini Sport Balls","Beachballs","AdPunch™ Balls","Pop Up Banners","Table Covers","Event Tents","promoflags"];
var latex = ['roundballoons','heartballoons','quicklinkonecolour','adwave','adwrap','adriteeconomyline', 'latexMenu'];
     var currentRoute = Router.current(),
     route = currentRoute.lookupTemplate();
     console.log("route", route);
     console.log("template", template);

     return template === route && _.contains(latex, route) ? 'active' : '';
  
});

// Qualatex® Latex
//     {item : "One-Colour Print"},
//     {item : "Heart Balloons"},
//     {item : "Multi-Colour Print"},
//     {item : "QuickLinkTM One-Colour"},
//     {item : "AdWrap® Balloons "},
//     {item : "AdWave® Balloons"},
//     {item : "Giant Latex Balloons"},
// Economy Line
// {item : "AdRite™ Latex Balloons"},
// {item : "Cloudbuster Balloons"},
// {item : "Outdoor Balloons Print"},
// Qualatex® Microfoil®
// {item : "Small Quantity Screen Print Balloons"},
// {item : "Large Quantity Flexo Print Balloons"},
// Balls
// return