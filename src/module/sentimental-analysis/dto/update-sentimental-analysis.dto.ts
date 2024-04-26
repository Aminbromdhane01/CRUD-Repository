import { PartialType } from '@nestjs/mapped-types';
import { CreateSentimentalAnalysisDto } from './create-sentimental-analysis.dto';

export class UpdateSentimentalAnalysisDto extends PartialType(
  CreateSentimentalAnalysisDto,
) {}
