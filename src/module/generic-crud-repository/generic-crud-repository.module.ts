import { Module } from '@nestjs/common';
import { CRUDProviders } from './providers/generic-crud-repository.provider';
import { CRUD_REPOSITORY } from './generic-crud-repository.service.interface';
import { ENTITY_TARGET } from './generic-crud-repository.service';
export const DATA_SOURCE = 'DATA_SOURCE';

@Module({
  imports: [],
  providers: [...CRUDProviders],
  exports: [CRUD_REPOSITORY, ENTITY_TARGET],
})
export class CRUDRepositotyModule {}
