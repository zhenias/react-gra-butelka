import OpenAI from "openai";

export default async function OpenAIResponse() {
    const client = new OpenAI({
        apiKey: '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',
        dangerouslyAllowBrowser: true,
    });

    // console.log('wysyłam pytanie do openai.');

    // const response = await client.responses.create({
    //     model: "gpt-4.1",
    //     input: "Jaka jest pogoda w Środzie Wielkopolskiej?"
    // });

    // console.log('Odpowiedź: ', response.output_text);
}