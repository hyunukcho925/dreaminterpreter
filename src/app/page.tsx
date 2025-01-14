import backgroundImage from '@/assets/images/background.webp';
import Header from '@/components/Header';
import DreamInterpretationForm from './DreamInterpretationForm';

export default function Home() {
  return (
    <>
      <Header />
      <div
        className="grid items-center justify-items-center text-center min-h-screen bg-repeat bg-center bg-fixed mx-auto"
        style={{ backgroundImage: `url(${backgroundImage.src})` }}
      >
        <main className="flex flex-col gap-4 row-start-2 w-full max-w-[720px] p-6">
          <h1 className="text-3xl font-black mb-4 leading-10">
            꿈 해몽 <br />
            AI 해몽 서비스
          </h1>
          <p>
            꿈 해몽을 받아보고 싶다면
            <br />
            아래에 꿈 내용을 자세히 입력해 주세요.
          </p>

          <DreamInterpretationForm />

          <div className="my-4">
            <h2 className="text-3xl text-left font-black mb-4 leading-10">
              꿈 해몽 <br />
              인기 해몽 주제
            </h2>

            <div className="text-left">
              <div className="bg-white rounded-2xl flex flex-col items-start justify-start mb-4 py-8 px-6">
                <h3 className="text-xl mb-3 font-extrabold">
                  뱀꿈 🐍
                </h3>
                <div className="pb-2">
                  <p className="font-bold">① 뱀이 나타나는 꿈</p>
                  ·긍정적 의미: 새로운 변화나 기회가 다가오고 있음을 암시합니다.
                  재물이 들어올 징조로 해석되기도 합니다.
                  <br />
                  ·부정적 의미: 현재의 불안이나 두려움을 반영할 수 있습니다.
                  인간관계에서 갈등이나 배신을 의미할 수 있습니다.
                </div>
                <div className="pb-2">
                  <p className="font-bold">② 뱀에게 물리는 꿈</p>
                  ·긍정적 의미: 뜻밖의 행운이나 기회가 생길 징조입니다. 건강
                  회복이나 재물 운 상승을 의미하기도 합니다.
                  <br />
                  ·부정적 의미: 주변 사람들로부터 상처를 받을 가능성을 경고할 수
                  있습니다.
                </div>
                <div className="pb-2">
                  <p className="font-bold">③ 뱀이 도망가는 꿈</p>
                  문제나 걱정거리가 해결될 가능성을 암시합니다. 원치 않던 상황이
                  마무리될 수도 있습니다.
                </div>
              </div>

              <div className="bg-white rounded-2xl flex flex-col items-start justify-start mb-4 py-8 px-6">
                <h3 className="text-xl mb-3 font-extrabold">
                  밥꿈 🍚
                </h3>
                <div className="pb-2">
                  <p className="font-bold">① 밥을 먹는 꿈</p>
                  ·긍정적 의미: 건강과 활력이 넘치는 상태를 암시합니다. 에너지와
                  자신감을 얻는 계기가 될 수 있습니다.
                  <br />
                  ·부정적 의미: 지나친 욕심이나 과한 스트레스를 경고할 수
                  있습니다.
                </div>
                <div className="pb-2">
                  <p className="font-bold">② 밥을 차려주는 꿈</p>
                  ·긍정적 의미: 타인과의 관계가 돈독해지거나 좋은 소식이 있을
                  가능성을 암시합니다.
                  <br />
                  ·부정적 의미: 희생이나 부담을 느낄 수 있는 상황이 올 수
                  있습니다.
                </div>
                <div className="pb-2">
                  <p className="font-bold">③ 밥을 흘리는 꿈</p>
                  ·긍정적 의미: 기존의 어려움이나 걱정을 내려놓고 새로운 시작을
                  준비하는 것을 의미합니다.
                  <br />
                  ·부정적 의미: 기회를 놓치거나 실수로 인해 후회할 수 있음을
                  경고합니다.
                </div>
              </div>

              <div className="bg-white rounded-2xl flex flex-col items-start justify-start mb-4 py-8 px-6">
                <h3 className="text-xl mb-3 font-extrabold">
                  강아지꿈 🐶
                </h3>
                <div className="pb-2">
                  <p className="font-bold">① 강아지를 안는 꿈</p>
                  ·긍정적 의미: 사랑과 신뢰가 넘치는 관계를 나타냅니다. 새로운
                  인연이나 귀여운 동반자를 얻게 될 가능성을 암시합니다.
                  <br />
                  ·부정적 의미: 보호하거나 책임져야 할 상황이 생길 수 있음을
                  경고합니다.
                </div>
                <div className="pb-2">
                  <p className="font-bold">② 강아지가 짖는 꿈</p>
                  ·긍정적 의미: 경계심을 갖고 주의해야 할 상황을 알려주는 경고일
                  수 있습니다.
                  <br />
                  ·부정적 의미: 주변 사람들과의 갈등이나 오해를 나타낼 수
                  있습니다.
                </div>
                <div className="pb-2">
                  <p className="font-bold">③ 강아지와 놀아주는 꿈</p>
                  ·긍정적 의미: 마음의 여유와 행복을 암시합니다. 즐거운 일이
                  생길 가능성이 큽니다.
                  <br />
                  ·부정적 의미: 현실에서 해야 할 중요한 일을 미루고 있음을
                  나타낼 수 있습니다.
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
