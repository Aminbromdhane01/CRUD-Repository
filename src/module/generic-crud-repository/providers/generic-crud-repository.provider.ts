import { Provider } from "@nestjs/common";
import { CRUDRepositoty } from "../generic-crud-repository.service";
import { CRUD_REPOSITORY } from "../generic-crud-repository.service.repository";

const CRUDProviders: Provider[] = [
    {
        provide: CRUD_REPOSITORY,
        useClass: CRUDRepositoty
    },

];


export { userProviders };