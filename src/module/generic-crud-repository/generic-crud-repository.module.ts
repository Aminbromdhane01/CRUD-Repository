import { Module } from '@nestjs/common';
import { CRUDProviders } from './providers/generic-crud-repository.provider';
@Module({
    imports: [
    ],
    providers: [
        ...CRUDProviders]

})
export class CRUDRepositotyModule { }