import { Provider } from '@nestjs/common';
import { USER_SERVIVE } from '../user.service.interface';
import { UserService } from '../user.service';
import { USER_REPOSITORY } from '../user.repository.interface';
import { UserReposotiroy } from '../user.repository';

const UserProviders: Provider[] = [
  {
    provide: USER_SERVIVE,
    useClass: UserService,
  },
  {
    provide: USER_REPOSITORY,
    useClass: UserReposotiroy,
  },
];

export { UserProviders };
