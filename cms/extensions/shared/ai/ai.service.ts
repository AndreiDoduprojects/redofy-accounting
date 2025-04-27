/**
 * AI Service for Redofy integrating Claude and ChatGPT
 */

import { Anthropic } from 'anthropic';
import OpenAI from 'openai';

// Interface for AI prompt types
export interface AIPrompt {
  text: string;
  type: 'text' | 'document' | 'invoice' | 'receipt';
  model?: 'claude' | 'gpt';
  language?: 'en' | 'sv';
}

// Interface for AI response
export interface AIResponse {
  text: string;
  confidence: number;
  extractedData?: any;
  source: 'claude' | 'gpt';
}

/**
 * Process a text query or document through AI
 * 
 * @param prompt The input prompt and configuration
 * @returns AI-generated response
 */
export async function processAIQuery(prompt: AIPrompt): Promise<AIResponse> {
  // Select AI provider based on prompt type or explicit selection
  const useGPT = prompt.model === 'gpt' || 
                (!prompt.model && ['receipt', 'invoice'].includes(prompt.type));
  
  if (useGPT) {
    return processWithGPT(prompt);
  } else {
    return processWithClaude(prompt);
  }
}

/**
 * Process query with OpenAI models
 */
async function processWithGPT(prompt: AIPrompt): Promise<AIResponse> {
  // This would be implemented with actual API calls
  console.log('Processing with GPT:', prompt.text);
  
  // Mock implementation
  return {
    text: `GPT processed: ${prompt.text}`,
    confidence: 0.92,
    extractedData: { /* mock data */ },
    source: 'gpt'
  };
}

/**
 * Process query with Claude models
 */
async function processWithClaude(prompt: AIPrompt): Promise<AIResponse> {
  // This would be implemented with actual API calls
  console.log('Processing with Claude:', prompt.text);
  
  // Mock implementation
  return {
    text: `Claude processed: ${prompt.text}`,
    confidence: 0.89,
    extractedData: { /* mock data */ },
    source: 'claude'
  };
} 