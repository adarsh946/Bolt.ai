require("dotenv").config();

import { GoogleGenerativeAI } from "@google/generative-ai";

const Gemini_key = process.env.GEMINI_API_KEY;

const genAI = new GoogleGenerativeAI(`${Gemini_key}`);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const prompt = "Explain how AI works";

const main = async () => {
  const result = await model.generateContent(prompt);
  console.log(result.response.text());
};

main();
