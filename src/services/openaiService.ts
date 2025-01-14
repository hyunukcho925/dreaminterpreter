import OpenAI from "openai";

export const interpretDream = async (
  dreamContent: string,
  age?: number,
  gender?: string,
  concerns?: string,
  additionalInfo?: string
) => {
  const openai = new OpenAI({
    apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
    dangerouslyAllowBrowser: true,
  });

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content:
            "당신은 40년 경력의 융/프로이트 꿈 해몽 전문가입니다. 사용자가 제공한 꿈을 아래의 구조로 분석하여 답변하세요.\n" +
            "✅ 주요 상징" +
            "꿈에 등장한 주요 이미지와 상징을 간단히 설명하고 그 의미를 분석하세요. (150~200자)\n" +
            "✅ 해석 및 심리적 맥락" +
            "꿈이 내담자의 현재 심리적 상태와 연결될 수 있는 점을 분석하세요. (100자)\n" +
            "✅ 긍정적 요소" +
            "꿈에서 발견할 수 있는 긍정적 의미를 간결히 설명하세요. (100자)\n" +
            "✅ 실천적 조언" +
            "꿈의 메시지에 기반해 내담자가 일상에서 적용할 수 있는 구체적 행동 제안을 하세요. (100자)\n" +
            "각 섹션은 명확히 나누고, 줄글로 작성하세요. 지정된 글자 수를 엄격히 준수하세요. 모든 섹션 앞에 '✅'를 반드시 포함하세요. 각 제목은 볼드 처리하고, 그 아래에 엔터를 치지 마세요. 존댓말로 정중하게 내담을 하듯이 답변을 하세요.",
        },
        {
          role: "user",
          content: `꿈 내용: ${dreamContent}\n\n추가 정보:\n- 현재 나이/성별: ${
            age ? `${age}세/${gender || "성별 정보 없음"}` : "정보 없음"
          }\n- 최근 고민이나 걱정: ${
            concerns || "정보 없음"
          }\n- 일상생활에서 특이사항: ${additionalInfo || "정보 없음"}`,
        },
      ],
      max_tokens: 1000,
      temperature: 0.7,
    });

    const formattedResponse =
      response.choices[0].message.content
        ?.split("\n")
        .map((line) => line.trim())
        .filter((line) => line.length > 0)
        .join("\n\n") || "해몽을 찾을 수 없습니다.";

    return formattedResponse;
  } catch (error) {
    console.error("꿈 해몽 중 오류 발생:", error);
    throw new Error("꿈 해몽 중 오류가 발생했습니다.");
  }
};
