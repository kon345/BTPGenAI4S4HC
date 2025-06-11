using { S4HCP_ServiceOrder_Odata } from './external/S4HCP_ServiceOrder_Odata.cds';

using { HenryLin0610_STUDENTG20 as my } from '../db/schema.cds';

@path : '/service/henryLin0610_STUDENTG20'
service henryLin0610_STUDENTG20Srv
{
    @odata.draft.enabled
    entity CustomerMessage as
        projection on my.CustomerMessage;

    entity A_ServiceOrder as
        projection on S4HCP_ServiceOrder_Odata.A_ServiceOrder
        {
            ServiceOrder,
            ServiceOrderDescription
        };
}

annotate henryLin0610_STUDENTG20Srv with @requires :
[
    'authenticated-user'
];
