// Template.latexMenu.events({
//   'click #Agates': function (e,t) {
//     e.preventDefault();
        
//         var selection = e.target.id,
//         inp = $('.reactive-table-input');
        
//         // 1.  insert text into filter/search bar
//         inp.val(selection);
        
//         // 2.  simulate key event and filter table
//         inp.trigger('keyup');
//   },
//   'click #Globe': function (e,t) {
//     e.preventDefault();
        
//         var selection = e.target.id,
//         inp = $('.reactive-table-input');
        
//         // 1.  insert text into filter/search bar
//         inp.val(selection);
        
//         // 2.  simulate key event and filter table
//         inp.trigger('keyup');
//   }
// });
Template.resourcesMenu.helpers({
  resources: function () {
    return [
      { title : "QuickLink Instructions" , href : "http://www.pioneerline.com/downloads/instructions/QL_Instructions.pdf" },
      { title : "Proper Balloon Inflation" , href : "http://www.pioneerline.com/downloads/13fliers/Proper_Balloon_Inflation_Instructions.pdf" },
      { title : "AdPunch Instructions" , href : "http://www.pioneerline.com/downloads/13fliers/AdPunch_Ball_Inflation_Instructions.pdf" },
      { title : "Inflate Vinyl Balloons" , href : "http://www.pioneerline.com/downloads/instructions/inflate_vinyl.pdf" }
    ] 
  }
});






