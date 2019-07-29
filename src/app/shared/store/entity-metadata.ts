import {EntityMetadataMap} from '@ngrx/data';

const entityMetadata: EntityMetadataMap = {
    Request: {}
    // api/requests GET, PUT, POST
    // service that exposes add, delete, update, get
    // observabe selector
};

// // because the plural of "hero" is not "heros" - for api renaming
// const pluralNames = { Request: 'Requests' };

export const entityConfig = {
    entityMetadata,
    // pluralNames
};