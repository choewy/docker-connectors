import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

const configs = {
  protocol: 'mongodb',
  host: '127.0.0.1',
  port: 5002,
  username: 'root',
  password: 'password',
  adminPath: 'admin',
};

@Module({
  imports: [
    MongooseModule.forRoot(
      [
        `${configs.protocol}://`,
        `${configs.username}:${configs.password}@`,
        `${configs.host}:${configs.port}/${configs.adminPath}`,
      ].join(''),
    ),
  ],
})
export class AppModule {}
