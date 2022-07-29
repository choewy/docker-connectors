import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1',
      port: 5001,
      username: 'root',
      password: 'password',
      database: 'service',
      entities: ['dist/**/*.entity.{js, ts}'],
      synchronize: true,
      logging: true,
    }),
  ],
})
export class AppModule {}
