Template.threecolourplustable.settings = function () {
    return {
        showFilter: true,
        showNavigation: 'never',
        fields: [{
                    key: 'Product Description',
                    label: 'Product -- Price Per Balloon ABCD',
                    fn: function (str) {
                        var sortString = ("0000" + parseInt(str, 10)).slice(-4); 
                        var html = "<span sortString=" + sortString + ">" + str + "</span>";
                        return Spacebars.SafeString(html);
                    },
                    sort: 'ascending'
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
