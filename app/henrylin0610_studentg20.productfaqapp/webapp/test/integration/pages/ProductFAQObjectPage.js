sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'henrylin0610studentg20.productfaqapp',
            componentId: 'ProductFAQObjectPage',
            contextPath: '/ProductFAQ'
        },
        CustomPageDefinitions
    );
});