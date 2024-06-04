import OpenAI from "openai";

export const MAX_OPEN_AI_QUERY_LENGTH = 20000;
export const MODEL_NAME = "gpt-3.5-turbo";

export const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});
