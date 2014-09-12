Template.palimg.events({
  'click #close': function () {
    $('#palimg .btn-group .open').collapse('hide');
  }
});

Template.palimg.helpers({
  qualatexPals: function () {
      return [
        { src: 'superagatepal.jpg' , desc : 'Super Agate' },
        { src: 'neonpal.jpg' , desc : 'Neon' },
        { src: 'metallicpal.jpg' , desc : 'Mettallic' },
        { src: 'standardpal.jpg' , desc : 'Standard' },
        { src: 'pearlpastelpal.jpg' , desc : 'Pastel Pearl' },
        { src: 'pearlradiantpal.jpg' , desc : 'Radiant Pearl' },
        { src: 'jewelpal.jpg' , desc : 'Jewel' },
        { src: 'fashionpal.jpg' , desc : 'Fashion' }
      ]
  },
  qlPals: function () {
    return [
        { src: 'qlstandardpal.jpg' , desc : 'QuickLink Standard' },
        { src: 'qljewelpal.jpg' , desc : 'QuickLink Jewel' },
        { src: 'qlfashionpal.jpg' , desc : 'QuickLink Fashion' }
    ]
  },
  adritePals: function () {
   return [
      { src: 'adrite-asst-basic.jpg' , desc : 'Basic Assortment' },
      { src: 'adrite-asst-crystal.jpg' , desc : 'Crystal Assortment' },
      { src: 'adrite-asst-fun.jpg' , desc : 'Fun Assortment' },
      { src: 'adritebasicpal.jpg' , desc : 'Basic' },
      { src: 'adritecrystalpal.jpg' , desc : 'Crystal' },
      { src: 'adritefunpal.jpg' , desc : 'Fun' },
      { src: 'adritemetallicpal.jpg' , desc : 'Metallic' }
    ]
  },
  cloudbusterPals: function () {
    return [
      { src: 'cloudbusterpal.jpg' , desc : 'Cloudbuster' }
    ]
  },
  outdoorPals: function () {
   return [
      { src: 'outdoor-asst-autumn.jpg' , desc : 'Autumn Assortment' },
      { src: 'outdoor-asst-basic.jpg' , desc : 'Basic Assortment' },
      { src: 'outdoor-asst-crystal.jpg' , desc : 'Crystal Assortment' },
      { src: 'outdoor-basic.jpg' , desc : 'Basic' },
      { src: 'outdoor-crystal.jpg' , desc : 'Crystal' },
      { src: 'outdoor-fun.jpg' , desc : 'Fun' },
      { src: 'outdoor-metallic.jpg' , desc : 'Metallic' },
      { src: 'outdoor-tropical.jpg' , desc : 'Tropical' },
    ]
  },
  microfoilPals: function () {
      return [
        { src: 'microfoilblimp.jpg' , desc : 'Blimp' },
        { src: 'microfoildiamond.jpg' , desc : 'Diamond' },
        { src: 'microfoilhorzrect.jpg' , desc : 'Horz Rectangle' },
        { src: 'microfoilverticalrect.jpg' , desc : 'Vert Rectangle' },
        { src: 'microfoiloval.jpg' , desc : 'Oval' },
        { src: 'spm-heart.jpg' , desc : 'Heart' },
        { src: 'spm-round-gold.jpg' , desc : 'Round Gold' },
        { src: 'spm-round-lime.jpg' , desc : 'Round Lime' },
        { src: 'spm-round-quartz.jpg' , desc : 'Round Quartz' },
        { src: 'spm-round-turq.jpg' , desc : 'Round Turquoise' },
        { src: 'spm-star-blue.jpg' , desc : 'Star Blue' },
        { src: 'spm-white-star.jpg' , desc : 'Star White' }
      ]
  },
  ballPals: function () {
      return [
        { src: 'baseballsoccerpal.jpg' , desc : 'Baseball & Soccer' },
        { src: 'basketballpal.jpg' , desc : 'Basketball' },
        { src: 'footballnostripes.jpg' , desc : 'Football No Stripes 1' },
        { src: 'footballnostripes2.jpg' , desc : 'Football No Stripes 2' },
        { src: 'footballstripe.jpg' , desc : 'Football Striped' },
        { src: 'playballpal.jpg' , desc : 'Playball' }
      ]
  }
});

// Template.outdoorpalsdropdown.helpers({
//   outdoorPals: function () {
//    return [
//       { src: 'outdoor-asst-autumn.jpg' , desc : 'Autumn Assortment' },
//       { src: 'outdoor-asst-basic.jpg' , desc : 'Basic Assortment' },
//       { src: 'outdoor-asst-crystal.jpg' , desc : 'Crystal Assortment' },
//       { src: 'outdoor-basic.jpg' , desc : 'Basic' },
//       { src: 'outdoor-crystal.jpg' , desc : 'Crystal' },
//       { src: 'outdoor-fun.jpg' , desc : 'Fun' },
//       { src: 'outdoor-metallic.jpg' , desc : 'Metallic' },
//       { src: 'outdoor-tropical.jpg' , desc : 'Tropical' },
//     ]
//   }
// });

// Template.adritepalsdropdown.helpers({
//   adritePals: function () {
//    return [
//       { src: 'adrite-asst-basic.jpg' , desc : 'Basic Assortment' },
//       { src: 'adrite-asst-crystal.jpg' , desc : 'Crystal Assortment' },
//       { src: 'adrite-asst-fun.jpg' , desc : 'Fun Assortment' },
//       { src: 'adritebasicpal.jpg' , desc : 'Basic' },
//       { src: 'adritecrystalpal.jpg' , desc : 'Crystal' },
//       { src: 'adritefunpal.jpg' , desc : 'Fun' },
//       { src: 'adritemetallicpal.jpg' , desc : 'Metallic' }
//     ]
//   }
// });

// Template.cloudbusterpalsdropdown.helpers({
//   cloudbusterPals: function () {
//     return [
//       { src: 'cloudbusterpal.jpg' , desc : 'Cloudbuster' }
//     ]
//   }
// });

// Template.qualatexpalsdropdown.helpers({
//   qualatexPals: function () {
//       return [
//         { src: 'superagatepal.jpg' , desc : 'Super Agate' },
//         { src: 'neonpal.jpg' , desc : 'Neon' },
//         { src: 'metallicpal.jpg' , desc : 'Mettallic' },
//         { src: 'standardpal.jpg' , desc : 'Standard' },
//         { src: 'pearlpastelpal.jpg' , desc : 'Pastel Pearl' },
//         { src: 'pearlradiantpal.jpg' , desc : 'Radiant Pearl' },
//         { src: 'jewelpal.jpg' , desc : 'Jewel' },
//         { src: 'fashionpal.jpg' , desc : 'Fashion' }
//       ]
//   }
// });