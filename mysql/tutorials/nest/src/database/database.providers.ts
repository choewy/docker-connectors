import { DATABASE_CONNECTION } from 'src/constants';
import { DataSource, Repository } from 'typeorm';

declare global {
  interface DatabaseProvider {
    provide: string;
    useFactory: () => Promise<DataSource>;
  }

  interface EntityProvider {
    provide: string;
    useFactory: (dataSource: DataSource) => Repository<any>;
    inject: string[];
  }
}

export const DatabaseProvider: DatabaseProvider = {
  provide: DATABASE_CONNECTION,
  useFactory: async () => {
    const dataSource = new DataSource({
      type: 'mysql',
      host: '127.0.0.1',
      port: 5001,
      username: 'root',
      password: 'password',
      database: 'service',
      entities: [__dirname + '/../**/*.entity{.ts,.js}'],
      synchronize: true,
      logging: true,
    });

    return dataSource.initialize();
  },
};
