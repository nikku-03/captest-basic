sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"project1/test/integration/pages/productsList",
	"project1/test/integration/pages/productsObjectPage",
	"project1/test/integration/pages/ordersObjectPage"
], function (JourneyRunner, productsList, productsObjectPage, ordersObjectPage) {
    'use strict';

    var runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('project1') + '/test/flp.html#app-preview',
        pages: {
			onTheproductsList: productsList,
			onTheproductsObjectPage: productsObjectPage,
			onTheordersObjectPage: ordersObjectPage
        },
        async: true
    });

    return runner;
});

