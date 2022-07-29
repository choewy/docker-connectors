import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getDatabases(): Promise<{ databases: string[] }> {
    const databases = await this.appService.getDatabases();
    return { databases };
  }
}
