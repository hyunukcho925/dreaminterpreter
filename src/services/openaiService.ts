import OpenAI from 'openai';

export const interpretDream = async (dreamContent: string) => {
  const openai = new OpenAI({
    apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
    dangerouslyAllowBrowser: true
  });

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system", 
          content: "당신은 꿈 해몽 전문가입니다. 사용자의 꿈을 전문적이고 심층적으로 해석해주세요."
        },
        {
          role: "user", 
          content: `다음 꿈을 전문적으로 해석해주세요: ${dreamContent}`
        }
      ],
      max_tokens: 300,
      temperature: 0.7
    });

    return response.choices[0].message.content || '해몽을 찾을 수 없습니다.';
  } catch (error) {
    console.error('꿈 해몽 중 오류 발생:', error);
    throw new Error('꿈 해몽 중 오류가 발생했습니다.');
  }
}; 