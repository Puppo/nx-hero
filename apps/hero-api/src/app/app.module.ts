import { Module } from '@nestjs/common';
import { HeroControllersModule } from '@flowing/hero/controllers';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [HeroControllersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
