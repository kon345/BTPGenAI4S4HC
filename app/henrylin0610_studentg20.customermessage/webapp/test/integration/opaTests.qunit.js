sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'henrylin0610studentg20/customermessage/test/integration/FirstJourney',
		'henrylin0610studentg20/customermessage/test/integration/pages/CustomerMessageList',
		'henrylin0610studentg20/customermessage/test/integration/pages/CustomerMessageObjectPage'
    ],
    function(JourneyRunner, opaJourney, CustomerMessageList, CustomerMessageObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('henrylin0610studentg20/customermessage') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheCustomerMessageList: CustomerMessageList,
					onTheCustomerMessageObjectPage: CustomerMessageObjectPage
                }
            },
            opaJourney.run
        );
    }
);