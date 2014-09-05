Template.eventtents.settings = function () {
    return {
        showFilter: true,
        showNavigation: 'never',
        fields: [{
                        key: 'Product Description',
                        label: 'Product -- Price Per Piece $CAD 4C',
                        fn: function (name, object) {
                              var image = object.PSD.slice(0,-4);
                              var html = '<h3 class="productname">' + name + '</h3>' + 
                                    '<div class="thumbnail tableimages">' + 
                                        '<img src="' + image + '.jpg' + '">' + 
                                    '</div>';
                            return new Spacebars.SafeString(html);
                        }
                    }, {
                        key: '1',
                        label: '1'
                    }, {
                        key: '2 to 5',
                        label: '2 to 5'
                    }, {
                        key: '6 to 11',
                        label: '6 to 11'
                    }, {
                        key: '12 to 24',
                        label: '12 to 24'
                    }
                ]
    };
};

Template.eventtentwalls.settings = function () {
    return {
        showFilter: true,
        showNavigation: 'never',
        fields: [{
                        key: 'Product Description',
                        label: 'Product -- Price Per Piece $CAD 4C',
                        fn: function (name, object) {
                              // var image = object.PSD.slice(0,-4);
                              var image = 'placeholder';
                              var html = '<h3 class="productname">' + name + '</h3>';
                                    // '<div class="thumbnail tableimages">' + 
                                        // '<img src="' + image + '.jpg' + '">' + 
                                    // '</div>';
                            return new Spacebars.SafeString(html);
                        }
                    }, {
                        key: '1',
                        label: '1'
                    }, {
                        key: '2 to 5',
                        label: '2 to 5'
                    }, {
                        key: '6 to 11',
                        label: '6 to 11'
                    }, {
                        key: '12 to 24',
                        label: '12 to 24'
                    }
                ]
    };
};
