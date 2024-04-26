import { Test, TestingModule } from '@nestjs/testing';
import { SentimentAnalysisController } from './sentimental-analysis.controller';

describe('SentimentalAnalysisController', () => {
  let controller: SentimentAnalysisController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SentimentAnalysisController],
      providers: [SentimentAnalysisController],
    }).compile();

    controller = module.get<SentimentAnalysisController>(
      SentimentAnalysisController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
