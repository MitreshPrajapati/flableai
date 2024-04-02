// const {Configuration, OpenAIApi}  = require('openai');
// const configuration = new Configuration({apiKey: "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"})
// const openai = new OpenAIApi(configuration);
import axios from 'axios';
import OpenAI from 'openai';
// const openai = new OpenAI({ organization: 'org-zKLp2BnHRgLI32IAkUnjiNyi', dangerouslyAllowBrowser: true });
const openai = new OpenAI({apiKey: "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", dangerouslyAllowBrowser:true});

export async function sendMsgToOpenAI(message) {
    const r = await fetch('https://api.openai.com/v1/chat/completions', {
        method: "post",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer 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"
        },
        body: {
            "model": "gpt-3.5-turbo",
            "messages": [{ "role": "user", "content": "Say this is a test!" }],
            "temperature": 0.7
        }
    }).then(res => res.json()).then((data) => console.log(data))
    
    
    // const res = await openai.createCompletion({
    //     model: 'text-davinci-003',
    //     prompt: message,
    //     temperature: 0.7,
    //     max_tokens: 256,
    //     top_p: 1,
    //     frequency_penalty: 0,
    //     presense_penalty: 0
    // });

    // return res.data.choices[0].text;
}
