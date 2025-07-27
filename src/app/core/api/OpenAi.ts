import OpenAI from "openai";

export default async function OpenAIResponse() {
    const client = new OpenAI({
        apiKey: '',
        dangerouslyAllowBrowser: true,
    });

    // console.log('wysyłam pytanie do openai.');

    // const response = await client.responses.create({
    //     model: "gpt-4.1",
    //     input: "Jaka jest pogoda w Środzie Wielkopolskiej?"
    // });

    // console.log('Odpowiedź: ', response.output_text);
}