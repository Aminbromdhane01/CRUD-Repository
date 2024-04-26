import { Controller, Post, Body } from '@nestjs/common';
import { SentimentAnalysisService } from './sentimental-analysis.service';

@Controller('comments')
export class SentimentAnalysisController {
  constructor(
    private readonly sentimentAnalysisService: SentimentAnalysisService,
  ) {}

  @Post('analyze')
  async analyzeComment(@Body() body: { comment: string }) {
    const { comment } = body;
    const analysisResult =
      await this.sentimentAnalysisService.analyzeComment(comment);
    return analysisResult;
  }
}
