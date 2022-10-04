import { Get, Controller, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index')

  root() {
    return { 
        title: 'Hacktoberfest!',
        favicon: 'https://hacktoberfest.com/_next/static/media/favicon.b9af3f66.svg',
        backdrop: 'https://github.com/pujayana/pujayana/blob/main/assets/hacktoberfest9/virtual-background-hacktoberfest9.png?raw=true'
    };
  }

  getHello(): string {
    return this.appService.getHello();
  }
}
