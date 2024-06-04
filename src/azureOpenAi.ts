import { OpenAIClient, AzureKeyCredential } from "@azure/openai";

export const MAX_OPEN_AI_QUERY_LENGTH = 200000;
export const MODEL_NAME = "watchmen-deploy-gpt-4";

const OPENAI_API_KEY = process.env.OPENAI_API_KEY as string;
export const openai = new OpenAIClient(
    "https://gs-hackathon.openai.azure.com/",
    new AzureKeyCredential(OPENAI_API_KEY)
);