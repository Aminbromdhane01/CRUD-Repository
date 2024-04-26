import { Module } from '@nestjs/common';
import { SentimentAnalysisController } from './sentimental-analysis.controller';
import { SentimentAnalysisService } from './sentimental-analysis.service';

@Module({
  controllers: [SentimentAnalysisController],
  providers: [SentimentAnalysisService],
})
export class SentimentalAnalysisModule {}
