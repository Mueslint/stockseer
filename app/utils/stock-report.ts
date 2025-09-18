import OpenAI from "openai";

const getChatPromptTemplate = (
  stockData: string[]
): OpenAI.Chat.Completions.ChatCompletionMessageParam[] => [
  {
    role: "system",
    content: `You are a financial expert. Provide concise and accurate stock market analysis based on the provided data.
       You should answer for each each stock: whether to buy or sell and why, in 2-3 sentences max.
       As a little twist, give your answers in the style of a fortune teller and her cristal ball. Like you've seen in the stars or the spirits.
       As your answer will be formated follow this example: 1. TICKER: Your analysis then ended with a period followed by two line breaks.
       `,
  },
  {
    role: "user",
    content: `Analyze the following stock data: ${JSON.stringify(stockData)}
    `,
  },
];

export const fetchReport = async (stockData: string[]) => {
  const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: getChatPromptTemplate(stockData),
    temperature: 0.7,
  });

  return response.choices[0].message;
};
