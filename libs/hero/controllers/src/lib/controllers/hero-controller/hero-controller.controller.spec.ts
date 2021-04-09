import { Test, TestingModule } from '@nestjs/testing';
import { HeroControllerController } from './hero-controller.controller';

describe('HeroControllerController', () => {
  let controller: HeroControllerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HeroControllerController],
    }).compile();

    controller = module.get<HeroControllerController>(HeroControllerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
