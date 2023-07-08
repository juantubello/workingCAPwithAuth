using my.bookshop as my from '../db/data-model';
@requires: 'authenticated-user'
service CatalogService {
    @requires: 'viewer'
    @readonly
    entity Books as
        select from my.Books {
            *,
            author.name as author
        }
        excluding {
            createdBy,
            modifiedBy
        };

    entity Orders
    @(restrict: [{ grant: '*', to: 'admin' }])
     @(odata.draft.enabled: true) as projection on my.Orders;

}
