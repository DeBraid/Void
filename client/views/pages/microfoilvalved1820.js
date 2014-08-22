Template.microfoilvalved1820.settings = function () {
    return {
        showFilter: true,
        fields: [{
                  key: 'Product Description',
                  label: 'Product',
                  fn: function (name, object) {

                      // var image = object.PSD.slice(0,-4);
                      var image = 'placeholder';
                      var html = '<h3 class="productname">' + name + '</h3>' + 
                          '<div class="thumbnail tableimages">' + 
                              '<img src="' + image + '.jpg' + '">' + 
                          '</div>';

                      return new Spacebars.SafeString(html);
                    }
                }, {
                    key: 'Number of Colours', 
                    label: 'Number of Colours'
                }, {
                    key: '50',
                    label: '50'
                }, {
                    key: '100',
                    label: '100'
                }, {
                    key: '250',
                    label: '250'
                },{
                    key: '500',
                    label: '500'
                }, {
                    key: '1000',
                    label: '1000'
                }
            ]
    };
};