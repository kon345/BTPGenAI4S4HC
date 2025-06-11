sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'henrylin0610studentg20.customermessage',
            componentId: 'CustomerMessageList',
            contextPath: '/CustomerMessage'
        },
        CustomPageDefinitions
    );
});