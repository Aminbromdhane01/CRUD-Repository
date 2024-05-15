import { Injectable } from '@nestjs/common';

import * as toxicity from '@tensorflow-models/toxicity';
import '@tensorflow/tfjs-backend-cpu';
import '@tensorflow/tfjs-backend-webgl';

@Injectable()
export class SentimentAnalysisService {
  private model;

  constructor() {
    this.loadModel();
  }
  private async loadModel() {
    const threshold = 0.9;

    this.model = await toxicity.load(threshold, ['insult' , "toxicity" ,"identity_attack"]);
  }

  /*async analyzeComment(comment: string): Promise<any> {
    const sentimentAnalyzer = pipeline(
      'sentiment-analysis',
      'Xenova/bert-base-multilingual-uncased-sentiment',
    );

    const result = await (await sentimentAnalyzer)(comment);

    if ('label' in result[0] && 'score' in result[0]) {
      return {
        sentiment: this.mapLabelToSentiment(result[0].label as string),
        score: result[0].score,
      };
    }

    return {
      sentiment: 'unknown',
      score: 0,
    };
  }*/
  async classifyToxicity(comment: string): Promise<any> {
    
    if (!this.model) {
      return { error: 'Model not loaded' };
    }
    const prediction = await this.model.classify(comment);
    const filteredData = prediction.map(item => ({
      label: item.label,
      match: item.results[0].match
    }));
    return { filteredData };
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
