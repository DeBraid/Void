Template.roundballoons.settings = function () {
    return {
        rowsPerPage: 25,
        showFilter: true,
        showNavigation: 'never',
        fields: [{
                    key: 'Product Description',
                    label: 'Product -- Price Per Balloon 4ABCD',
                    fn: function (str) {
                        var sortString = ("0000" + parseInt(str, 10)).slice(-4),
                            unit = 'inch',
                            str1 = str.split(unit),
                            size = str1,
                            myString = "" + size[0] + " " + unit + " " + str1[1] + "";
                        
                        var html = "<span sortString=" + sortString + ">" + myString + "</span>";
                        return Spacebars.SafeString(html);
                    },
                    sort: 'ascending'
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


// Template.roundballoons.rendered = function (evt,tmpl) {
//     var desc = $('td.Product').innerText;
//     console.log('desc: ', desc);
//     var foo  = desc.replace(/^0+/, '');
//     console.log('foo: ', foo);

// };