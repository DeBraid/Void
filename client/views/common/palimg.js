Template.palimg.helpers({
  colourPals: function () {
      return [{ src: 'superagatepal.jpg' , desc : 'Super Agate' },
      { src: 'standardpal.jpg' , desc : 'Standard' },
      { src: 'radiantpal.jpg' , desc : 'Radiant' },
      { src: 'pastelpearlpal.jpg' , desc : 'Pearl' },
      { src: 'neonpal.jpg' , desc : 'Neon' },
      { src: 'metallicpal.jpg' , desc : 'Mettallic' },
      { src: 'jewelpal.jpg' , desc : 'Jewel' },
      { src: 'adwrappal.jpg' , desc : 'Adwrap' },
      { src: 'adritemetallicpal.jpg' , desc : 'Adrite Metallic' },
      { src: 'adritefunpal.jpg' , desc : 'Adrite Fun' },
      { src: 'adritecrystalpal.jpg' , desc : 'Adrite Crystal' },
      { src: 'adritebasicpal.jpg' , desc : 'Adrite Basic' },
      { src: 'outdoorpal.jpg' , desc : 'Outdoor' },
      { src: 'qlinkpal.jpg' , desc : 'Quick Link' }]
  }
});

Template.palimg.events({
  'click #close': function () {
    $('#palimg .btn-group .open').collapse('hide');
  }
});