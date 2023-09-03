// soil.ts
import { Configuration, OpenAIApi } from "openai-edge";
import { OpenAIStream, StreamingTextResponse } from "ai";

export const runtime = "edge";

const config = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(config);

export async function POST(request: Request) {
    const { messages } = await request.json();

    // Modify the system message to inform GPT-4 about soil-related queries
    const systemMessage = "You are a helpful assistant. You provide insights into soil conditions.";

    // Combine the system message with user messages
    const chatMessages = [
        { role: "system", content: systemMessage },
        ...messages,
    ];

    // Send the chat messages to GPT-4
    const response = await openai.createChatCompletion({
        model: "gpt-4",
        stream: true,
        messages: chatMessages,
    });

    const stream = await OpenAIStream(response);

    return new StreamingTextResponse(stream);
}
