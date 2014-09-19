Template.roundballoons.settings = function () {
    return {
        rowsPerPage: 25,
        showFilter: true,
        showNavigation: 'never',
        fields: [{
                    key: 'Size',
                    label: 'Size - Inch',
                    fn: function (value, object) {
                        return value = parseInt(value);
                    }
                },{
                    key: 'Product Description',
                    label: 'Product -- Price Per Balloon 4ABCD'
                }, {
                    key: '250',
                    label: '250'
                }, {
                    key: '500',
                    label: '500'
                }, {
                    key: '1000',
                    label: '1000'
                }, {
                    key: '2500',
                    label: '2500'
                }, {
                    key: '5000',
                    label: '5000'
                }, {
                    key: '10000',
                    label: '10000'
                }, {
                    key: '25000',
                    label: '25000'
                }
            ]
    };
};


Template.roundballoons.rendered = function (evt,tmpl) {
    var desc = $('td.Product').innerText;
    console.log('desc: ', desc);
    var foo  = desc.replace(/^0+/, '');
    console.log('foo: ', foo);

};