"use client"

import { useState } from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { interpretDream } from '@/services/openaiService';

export default function DreamInterpretationForm() {
  const [dreamContent, setDreamContent] = useState('');
  const [dreamInterpretation, setDreamInterpretation] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [canCall, setCanCall] = useState(true);
  const [cooldownTime, setCooldownTime] = useState(0);

  const handleDreamInterpretation = async () => {
    if (!dreamContent.trim()) {
      alert('꿈 내용을 입력해주세요.');
      return;
    }

    if (!canCall) {
      alert(`${cooldownTime}초 후에 다시 시도해주세요.`);
      return;
    }

    setIsLoading(true);
    setDreamInterpretation('');

    try {
      const interpretation = await interpretDream(dreamContent);
      setDreamInterpretation(interpretation);
    } catch (error) {
      console.error(error);
      setDreamInterpretation('꿈 해몽 중 오류가 발생했습니다. 다시 시도해주세요.');
    } finally {
      setIsLoading(false);
      setCanCall(false);
      let remainingTime = 30;
      const cooldownInterval = setInterval(() => {
        remainingTime--;
        setCooldownTime(remainingTime);
        
        if (remainingTime <= 0) {
          clearInterval(cooldownInterval);
          setCanCall(true);
          setCooldownTime(0);
        }
      }, 1000);
    }
  };

  return (
    <div>
      <div>
        <textarea
          value={dreamContent}
          onChange={(e) => setDreamContent(e.target.value)}
          placeholder="꿈 내용을 자세히 입력해주세요..."
          className="w-full p-4 border-2 border-primary rounded-xl h-48 resize-none"
          disabled={!canCall}
        />
      </div>

      <button
        onClick={handleDreamInterpretation}
        disabled={isLoading || !canCall}
        className="flex items-center justify-center w-full bg-primary text-white rounded-xl py-4 hover:bg-primary-dark transition-colors disabled:opacity-50"
      >
        {isLoading ? "꿈해몽 중..." : "꿈해몽 시작하기"}
        {!isLoading && <MagnifyingGlassIcon className="h-5 w-5 ml-1 mb-1" />}
      </button>

      {dreamInterpretation && (
        <div className="bg-white rounded-2xl py-6 px-4 mt-6 min-h-[240px] max-h-[1000px] overflow-y-auto">
          <h2 className="text-xl font-bold mb-4">꿈해몽 결과</h2>
          <div className="whitespace-pre-wrap break-words leading-relaxed text-base text-left">
            {dreamInterpretation.split("**").map((part, index) =>
              index % 2 === 1 ? (
                <span key={index} className="font-bold break-words">
                  {part}
                </span>
              ) : (
                <span key={index} className="break-words">
                  {part}
                </span>
              )
            )}
          </div>
        </div>
      )}

      {!canCall && (
        <div className="mt-4">
          다음 꿈 해몽은 {cooldownTime}초 뒤 진행할 수 있습니다.
        </div>
      )}
    </div>
  );
} 