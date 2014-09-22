Template.microfoilvalved1820.settings = function () {
    return {
        showFilter: true,
        showNavigation: 'never',
        fields: [{
                  key: 'Product Description',
                  label: 'Product -- Price Per Balloon 4AB'
                }, {
                    key: 'Number of Colours', 
                    label: '# of Ink Colours',
                    fn: function (str) {
                        return parseInt(str)
                    }
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