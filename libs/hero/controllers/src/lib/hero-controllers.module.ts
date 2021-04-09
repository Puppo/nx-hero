import { Module } from '@nestjs/common';
import { HeroController } from './controllers/hero-controller/hero-controller.controller';

@Module({
  controllers: [HeroController],
  providers: [],
  exports: [],
})
export class HeroControllersModule {}
