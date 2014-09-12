/* ---------------------------------------------------- +/

## Client Router ##

Client-side Router.

/+ ---------------------------------------------------- */

// Config

Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
});
// Filters
var filters = {
  clearInputValue: function () {
    var inp = $('.reactive-table-input');
    inp.val('');
    inp.trigger('keyup');
  },
  setBackground: function () {
    document.body.className = "noBackgroundImage"
  }, 
  showScrollToTopButton: function () {
    $('#scrollToTop').show();
  }
}

Router.onBeforeAction(filters.setBackground);
Router.onBeforeAction(filters.clearInputValue);
Router.onAfterAction(filters.showScrollToTopButton);

// Routes
Router.map(function() {
  
  this.route('homepage', {
      path: '/'
  });

  this.route('geninfo', {
    path: '/geninfo',
    template: 'geninfo',
    waitOn: function () {
      return Meteor.subscribe('geninfo');
    },
    data: function () {
      return {
        geninfo: Geninfo.find()
      }
    }
  });

  this.route('contact');
  this.route('login');
  this.route('signup');
  this.route('forgot');

  this.route('roundballoons', {
    path: '/roundballoons',
    template: 'roundballoons',
    yieldTemplates: {
      'charges': {to: 'charges'},
      'palimg': {to: 'palimg'},
      'filterdropdown': {to: 'filterdropdown'}
    }, 
    waitOn: function () {
      return [Meteor.subscribe('roundballoons'),
              Meteor.subscribe('charges'),
              Meteor.subscribe('tags')];
    },
    data: function () {
      return {
        roundballoons: Roundballoons.find(),
        charges: Charges.find(), 
        tags: Tags.find()
      }
    }
  });

  this.route('heartballoons', {
    path: '/heartballoons',
    template: 'heartballoons',
    yieldTemplates: {
      'charges': {to: 'charges'},
      'filterdropdown': {to: 'filterdropdown'},
    }, 
    waitOn: function () {
      return [Meteor.subscribe('heartballoons'),
              Meteor.subscribe('hearttags'),
              Meteor.subscribe('charges')];
    },
    data: function () {
      return {
        heartballoons: Heartballoons.find(),
        tags: Hearttags.find(),
        charges: Charges.find()
      }
    }
  });

  this.route('quicklinkonecolour', {
    path: '/quicklinkonecolour',
    template: 'quicklinkonecolour',
    yieldTemplates: {
      'charges': {to: 'charges'},
      'filterdropdown': {to: 'filterdropdown'}
    }, 
    waitOn: function () {
      return [Meteor.subscribe('quicklinkonecolour'),
              Meteor.subscribe('charges'),
              Meteor.subscribe('qltags')];
    },
    data: function () {
      return {
        quicklinkonecolour: Quicklinkonecolour.find(),
        tags: Qltags.find(),
        charges: Charges.find()
      }
    }
  });

  this.route('adwave', {
    path: '/adwave',
    template: 'adwave',
    yieldTemplates: {
      'charges': {to: 'charges'},
      'filterdropdown': {to: 'filterdropdown'}
    }, 
    waitOn: function () {
      return [Meteor.subscribe('adwave'),
              Meteor.subscribe('charges'),
              Meteor.subscribe('adwavetags')];
    },
    data: function () {
      return {
        adwave: Adwave.find(),
        tags: Adwavetags.find(),
        charges: Charges.find()
      }
    }
  });


  this.route('adwrap', {
    path: '/adwrap',
    template: 'adwrap',
    yieldTemplates: {
      'charges': {to: 'charges'},
      'filterdropdown': {to: 'filterdropdown'}
    }, 
    waitOn: function () {
      return [Meteor.subscribe('adwrap'),
              Meteor.subscribe('charges'),
              Meteor.subscribe('qltags')];
    },
    data: function () {
      return {
        adwrap: Adwrap.find(),
        tags: Qltags.find(),
        charges: Charges.find()
      }
    }
  });

  this.route('adriteeconomyline', {
    path: '/adriteeconomyline',
    template: 'adriteeconomyline',
    yieldTemplates: {
      'charges': {to: 'charges'},
      'filterdropdown': {to: 'filterdropdown'}
    }, 
    waitOn: function () {
      return [Meteor.subscribe('adriteeconomyline'),
              Meteor.subscribe('charges'),
              Meteor.subscribe('adritetags')];
    },
    data: function () {
      return {
        adriteeconomyline: Adriteeconomyline.find(),
        tags: Adritetags.find(),
        charges: Charges.find()
      }
    }
  });

  this.route('cloudbuster', {
    path: '/cloudbuster',
    template: 'cloudbuster',
    yieldTemplates: {
      'filterdropdown': {to: 'filterdropdown'} 
    }, 
    waitOn: function () {
      return [Meteor.subscribe('cloudbuster'),
              Meteor.subscribe('cloudbusterkits'),
              Meteor.subscribe('cloudbustertags')];
    },
    data: function () {
      return {
        cloudbuster: Cloudbuster.find(),
        cloudbusterkits: Cloudbusterkits.find(),
        tags: Cloudbustertags.find()
      }
    }
  });
  
  this.route('outdoorballoons', {
    path: '/outdoorballoons',
    template: 'outdoorballoons',
    yieldTemplates: {
      'outdoorcharges': {to: 'charges'},
      'filterdropdown': {to: 'filterdropdown'}
    }, 
    waitOn: function () {
      return [Meteor.subscribe('outdoorballoons'),
              Meteor.subscribe('charges'),
              Meteor.subscribe('outdoortags')];
    },
    data: function () {
      return {
        outdoorballoons: Outdoorballoons.find(),
        tags: Outdoortags.find(),
        charges: Charges.find()
      }
    }
  });

  this.route('microfoilvalved', {
    path: '/microfoilvalved',
    template: 'microfoilvalved1820',
    yieldTemplates: {
      'smallmicrofoilcharges': {to: 'charges'},
      'filterdropdown': {to: 'filterdropdown'}
    }, 
    waitOn: function () {
      return [Meteor.subscribe('microfoilvalved1820'),
              Meteor.subscribe('microfoilvalved36'),
              Meteor.subscribe('microfoiltags'),
              Meteor.subscribe('charges')];
    },
    data: function () {
      return {
        microfoilvalved1820: Microfoilvalved1820.find(),
        microfoilvalved36: Microfoilvalved36.find(),
        tags: Microfoiltags.find(),
        charges: Charges.find()
      }
    }
  });

  this.route('largequantmicrofoil', {
    path: '/largequantmicrofoil',
    template: 'largequantmicrofoil',
    yieldTemplates: {
      'charges': {to: 'charges'},
      'filterdropdown': {to: 'filterdropdown'}
    }, 
    waitOn: function () {
      return [Meteor.subscribe('largequantmicrofoil'),
              Meteor.subscribe('charges'),
              Meteor.subscribe('largequanttags')];
    },
    data: function () {
      return {
        largequantmicrofoil: Largequantmicrofoil.find(),
        tags: Largequanttags.find(),
        charges: Charges.find()
      }
    }
  });

  this.route('giantlatexballoons', {
    path: '/giantlatexballoons',
    template: 'giantlatexballoons',
    yieldTemplates: {
      'charges': {to: 'charges'},
      'filterdropdown': {to: 'filterdropdown'}
    }, 
    waitOn: function () {
      return [Meteor.subscribe('giantlatexballoons'),
              Meteor.subscribe('charges'),
              Meteor.subscribe('gianttags')];
    },
    data: function () {
      return {
        giantlatexballoons: Giantlatexballoons.find(),
        tags: Gianttags.find(),
        charges: Charges.find()
      }
    }
  });


  this.route('charges', {
    path: '/charges',
    template: 'charges',
    waitOn: function () {
      return Meteor.subscribe('charges');
    },
    data: function () {
      return {
        charges: Charges.find()
      }
    }
  });

  // newroutes
  this.route('eventtents', {
    path: '/eventtents',
    template: 'eventtents',
    yieldTemplates: {
      'filterdropdown': {to: 'filterdropdown'}
    },
    waitOn: function () {
      return [Meteor.subscribe('eventtents'),
              Meteor.subscribe('eventtentwalls'),
              Meteor.subscribe('eventtags')]
    },
    data: function () {
      return {
        eventtents: Eventtents.find(),
        eventtentwalls: Eventtentwalls.find(),
        tags: Eventtags.find()
      }
    }
  });

  this.route('popupbanners', {
    path: '/popupbanners',
    template: 'popupbanners',
    yieldTemplates: {
      'filterdropdown': {to: 'filterdropdown'}
    },
    waitOn: function () {
      return [Meteor.subscribe('popupbanners'), 
              Meteor.subscribe('popuptags')];
    },
    data: function () {
      return {
        popupbanners: Popupbanners.find(),
        tags: Popuptags.find()
      }
    }
  });

  this.route('tablecovers', {
    path: '/tablecovers',
    template: 'tablecovers',
    waitOn: function () {
      return [Meteor.subscribe('nonfittedtablecovers'),
              Meteor.subscribe('stretchtablecovers'),
              Meteor.subscribe('tablecovertags')]
    },
    data: function () {
      return {
        nonfittedtablecovers: Nonfittedtablecovers.find(),
        tags: Tablecovertags.find(),
        stretchtablecovers: Stretchtablecovers.find()
      }
    }
  });

  this.route('promoflags', {
    path: '/promoflags',
    template: 'promoflags',
    yieldTemplates: {
      'filterdropdown': {to: 'filterdropdown'}
    },
    waitOn: function () {
      return [Meteor.subscribe('promoflags'),
              Meteor.subscribe('flagtags'),
              Meteor.subscribe('econflags')];
    },
    data: function () {
      return {
        promoflags: Promoflags.find(),      
        tags: Flagtags.find(),      
        econflags: Econflags.find()      
      }
    }
  });

  this.route('multicolourprint', {
    path: '/multicolourprint',
    template: 'multicolourprint',
    yieldTemplates: {
      'filterdropdown': {to: 'filterdropdown'}
    },
    waitOn: function () {
      return [Meteor.subscribe('twocolourballoons'),
              Meteor.subscribe('threecolourplus'),
              Meteor.subscribe('multitags'),
              Meteor.subscribe('charges')];
    },
    data: function () {
      return {
        twocolourballoons: Twocolourballoons.find(),      
        threecolourplus: Threecolourplus.find(),      
        tags: Multitags.find(),
        charges: Charges.find()
      }
    }
  });

  this.route('admaxminisportballs', {
    path: '/admaxminisportballs',
    template: 'admaxminisportballs',
    yieldTemplates: {
      'filterdropdown': {to: 'filterdropdown'}
    },
    waitOn: function () {
      return [Meteor.subscribe('admaxminisportballs'),
              Meteor.subscribe('admaxtags')]
    },
    data: function () {
      return {
        admaxminisportballs: Admaxminisportballs.find(),
        tags: Admaxtags.find()
      }
    }
  });

  this.route('adpunchballs', {
    path: '/adpunchballs',
    template: 'adpunchballs',
    waitOn: function () {
      return Meteor.subscribe('adpunchballs');
    },
    data: function () {
      return {
        adpunchballs: Adpunchballs.find()
      }
    }
  });

  this.route('beachballs', {
    path: '/beachballs',
    template: 'beachballs',
    waitOn: function () {
      return Meteor.subscribe('beachballs');
    },
    data: function () {
      return {
        beachballs: Beachballs.find()
      }
    }
  });

});
