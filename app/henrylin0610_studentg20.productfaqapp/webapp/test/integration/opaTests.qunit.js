sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'henrylin0610studentg20/productfaqapp/test/integration/FirstJourney',
		'henrylin0610studentg20/productfaqapp/test/integration/pages/ProductFAQList',
		'henrylin0610studentg20/productfaqapp/test/integration/pages/ProductFAQObjectPage'
    ],
    function(JourneyRunner, opaJourney, ProductFAQList, ProductFAQObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('henrylin0610studentg20/productfaqapp') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheProductFAQList: ProductFAQList,
					onTheProductFAQObjectPage: ProductFAQObjectPage
                }
            },
            opaJourney.run
        );
    }
);