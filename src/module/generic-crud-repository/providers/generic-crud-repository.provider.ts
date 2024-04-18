import { Provider } from "@nestjs/common";
import { CRUDRepositoty, ENTITY_TARGET } from "../generic-crud-repository.service";
import { CRUD_REPOSITORY } from "../generic-crud-repository.service.interface";
import { DataSource, EntityManager } from "typeorm";


const CRUDProviders: Provider[] = [
    {
        provide: CRUD_REPOSITORY,
        useClass: CRUDRepositoty
    },
    {
        provide: ENTITY_TARGET,
        useClass: EntityManager
    }


];


export { CRUDProviders };