import { Configuration, OpenAIApi } from "openai";
const configuration = new Configuration({
  apiKey: process.env.OPEN_AI_API_KEY,
});
const openai = new OpenAIApi(configuration);

/** @type {import('./$types').Actions} */
export const actions = {
  default: async ({ request }) => {
    const formData = await request.formData()
    const { prompt } = Object.fromEntries(formData)

    console.log('Sending request to open ai')
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: `Given a description of a man, give me five relevant, specific, and very unique gift ideas in a list. If my description of the guy is nonsense, or has no clear answer, respond with "Unknown". Man: ${prompt}`,
      temperature: 0,
      max_tokens: 175,
    });
    const choices = response.data.choices;

    if (choices && choices.length > 0) {
      return `Ok, I've got some ideas for you. Try these!\n\n${choices[0].text?.trim()}`
    }
    else {
      return 'Something went wrong, sorry!'
    }
  }
};