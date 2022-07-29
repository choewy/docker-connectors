import { DATABASE_CONNECTION, USER_REPOSITORY } from 'src/constants';
import { User } from './user.entity';

export const UserProvider: EntityProvider = {
  inject: [DATABASE_CONNECTION],
  provide: USER_REPOSITORY,
  useFactory: (dataSource) => dataSource.getRepository(User),
};
