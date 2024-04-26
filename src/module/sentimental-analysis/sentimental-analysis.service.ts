import { Injectable } from '@nestjs/common';

const TransformersApi = Function('return import("@xenova/transformers")')();

@Injectable()
export class SentimentAnalysisService {
  constructor() {}

  async analyzeComment(comment: string): Promise<any> {
    const { pipeline } = await TransformersApi;
    // Initialize the BERT model and tokenizer

    // Create a sentiment analysis pipeline
    const sentimentAnalyzer = pipeline(
      'sentiment-analysis',
      'Xenova/bert-base-multilingual-uncased-sentiment',
    );

    // Perform sentiment analysis on the comment
    const result = await (await sentimentAnalyzer)(comment);

    console.log(result[0].label);

    return {
      sentiment: this.mapLabelToSentiment(result[0].label),
      score: result[0].score,
    };
  }

  private mapLabelToSentiment(label: string): string {
    switch (label) {
      case '1 star':
        return 'bad';
      case '3 stars':
        return 'neutral';
      case '4 stars':
        return 'good';
      default:
        return 'unknown';
    }
  }
}
