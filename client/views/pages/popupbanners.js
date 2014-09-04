Template.popupbanners.settings = function () {
    return {
        showFilter: true,
        showNavigation: 'never',
        fields: [{
                  key: 'Product Description',
                  label: 'Product',
                  fn: function (name, object) {

                      var image = object.PSD.slice(0,-4);
                      
                      var html = '<h3 class="productname">' + name + '</h3>' + 
                          '<div class="thumbnail tableimages">' + 
                              '<img src="' + image + '.jpg' + '">' + 
                          '</div>';

                      return new Spacebars.SafeString(html);
                    }
                }, {
                    key: 'Panels', 
                    label: 'Panels'
                },{
                    key: 'ItemNum', 
                    label: 'Item #'
                }, {
                    key: '1',
                    label: '1'
                }, {
                    key: '2 to 4',
                    label: '2 to 4'
                }, {
                    key: '5 to 9',
                    label: '5 to 9'
                }, {
                    key: '10 to 24',
                    label: '10 to 24' 
                }, {
                    key: '25 to 49',
                    label: '25 to 49' 
                }
            ]
    };
};