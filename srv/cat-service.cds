using my.bookshop as my from '../db/data-model';
using {managed} from '@sap/cds/common';

@requires: 'authenticated-user'
service CatalogService {

    entity requests as projection on my.requests;
    entity Roles as projection on my.Roles;
    
    @requires: 'viewer'
    @readonly
    entity Books                               as
        select from my.Books {
            *,
            author.name as author
        }
        excluding {
            createdBy,
            modifiedBy
        };

    entity Orders @(restrict: [{
        grant: '*',
        to   : 'admin'
    }])           @(odata.draft.enabled: true) as projection on my.Orders;

}
