import OpenAI from "openai";

const getChatPromptTemplate = (
  stockData: string[]
): OpenAI.Chat.Completions.ChatCompletionMessageParam[] => [
  {
    role: "system",
    content: `You are a financial expert. Provide concise and accurate stock market analysis based on the provided data.
       You should answer for each each stock: whether to buy or sell and why, in 2-3 sentences max.`,
  },
  {
    role: "user",
    content: `Analyze the following stock data: ${JSON.stringify(stockData)}`,
  },
];

export const fetchReport = async (stockData: string[]) => {
  const openai = new OpenAI();
  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: getChatPromptTemplate(stockData),
  });
  return response.choices[0].message;
};
