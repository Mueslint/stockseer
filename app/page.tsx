import { TickersSection } from "@/app/ui/TickersSection";

import OpenAI from "openai";

const openai = new OpenAI();

const messages: OpenAI.Chat.Completions.ChatCompletionMessageParam[] = [
  {
    role: "system",
    content: `
          You are a talented lyricist and you should create nice lyrics about a theme sent to you by the user. 
          You can add info such as chords to be sing along with a sentence.
          Be creative and nice! 
        `,
  },
  {
    role: "user",
    content: "I want a song about the cool life in the 80's",
  },
];
try {
  // const response = await openai.chat.completions.create({
  //   model: "gpt-3.5-turbo",
  //   messages,
  // });
  // console.log(response.choices[0].message.content);
} catch (error) {
  console.error("Error generating lyrics:", error);
}

export default function Home() {
  return <TickersSection />;
}
