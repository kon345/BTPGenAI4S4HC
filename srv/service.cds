using { HenryLin0610_STUDENTG20 as my } from '../db/schema.cds';

@path: '/service/henryLin0610_STUDENTG20'
@requires: 'authenticated-user'
service henryLin0610_STUDENTG20Srv {
  @odata.draft.enabled
  entity CustomerMessage as projection on my.CustomerMessage;
}