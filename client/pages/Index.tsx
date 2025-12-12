import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import ChatBubble from "@/components/ChatBubble";
import ChatResponse from "@/components/ChatResponse";
import ChatInput from "@/components/ChatInput";
import { Settings, ChevronDown, Menu } from "lucide-react";

export default function Index() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const webLinks = [
    {
      id: 1,
      title: "행정규칙 > 정부청사관리본부 방호직렬 공무원 운영 규정 | 국가법령 ...",
      description:
        "2022. 5. 27. ... 제4조(조직) ① 「보안업무규정」에 따른 국가보안시설로 지정된 ... ② 방호공무원의 휴가일수 산정은「국가공무원 복무규...",
    },
    {
      id: 2,
      title: "법령 > 본문 > 국가공무원 복무규정 | 국가법령정보센터",
      description:
        "... 지정하여 휴무하게 할 수 있다. 1. 「공직선거법」 제146조의2제1항에 따른 ... 이 경우 종전의 규정에 따라 사용한 휴가 일수는 제20조제...",
    },
    {
      id: 3,
      title: "행정규칙 > 현장 소방공무원 복무규칙 | 국가법령정보센터",
      description:
        "2022. 10. 21. ... ... 기준(별도 기준 수립시). 7. 부득이한 경우를 제외하고는 휴가자 등 발생에 따른 대체근무자 지정 자제. ② 소방기관의...",
    },
  ];

  const responseContent = `<strong>1. 공휴일</strong>
관공서의 공휴일에 관한 규정: 국경일, 신정, 설 연휴, 삼일절, 근로자의 날, 어린이날,  부처님오신날, 현충일, 광복절, 추석 연휴, 개천절, 한글날, 성탄절, 공직선거일, 대체공휴일 등이 포함됩니다. 
대체공휴일 제도: 공휴일이 주말이나 다른 공휴일과 겹칠 경우, 비공휴일을  추가 휴일로 지정하여 휴무하게 하는 제도입니다.
<strong>2. 연차유급휴가 (근로기준법)</strong>
1년 80% 이상 출근 시: 15일의 유급휴가가 부여됩니다.
1년 미만 근로 또는 80% 미만 출근 시: 1개월 개근 시 1일의 유급휴가가 부여됩니다.
3년 이상 근속 시: 최초 1년을 초과하는 계속 근로 연수 매 2년에 대하여 1일을 가산하며,  총 휴가일수는 25일을 한도로 합니다.
회사는 근로자가 청구한 시기에 휴가를 주어야 하지만, 사업 운영에 막대한 지장이 있는 경우  시기를 변경할 수 있습니다.`;

  return (
    <div className="flex h-screen overflow-hidden bg-white">
      <Sidebar isOpen={sidebarOpen} onToggle={() => setSidebarOpen(!sidebarOpen)} />

      <main className="flex-1 flex flex-col overflow-hidden relative">
        <header className="flex items-center justify-between h-[52px] px-6 lg:px-8 border-b border-transparent">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="lg:hidden p-2 rounded hover:bg-agentgo-neutral-050"
          >
            <Menu className="w-5 h-5" />
          </button>
          
          <div className="flex-1" />

          <button className="flex items-center gap-1.5 h-8 px-3 bg-agentgo-neutral-soft rounded hover:bg-agentgo-neutral-border transition-colors">
            <Settings className="w-[18px] h-[18px] text-agentgo-neutral-color" />
            <span className="text-sm font-bold">
              <span className="text-agentgo-neutral-color">활성 에이전트 </span>
              <span className="text-agentgo-primary">9</span>
              <span className="text-agentgo-neutral-color">개</span>
            </span>
            <ChevronDown className="w-[18px] h-[18px] text-agentgo-neutral-color" />
          </button>
        </header>

        <div className="flex-1 overflow-y-auto px-4 lg:px-12 py-6">
          <div className="max-w-[1206px] mx-auto flex flex-col items-end gap-4">
            <ChatBubble
              message="나라에서 지정한 휴가 규정을 간략하게 알려줘"
              isUser
            />

            <ChatResponse
              intro="나라에서 지정한 휴가 규정은 주로 근로기준법과 관공서의 공휴일에 관한 규정에 따라 정해집니다."
              content={responseContent}
              webLinks={webLinks}
              showWebLinks
            />
          </div>
        </div>

        <div className="flex justify-center px-4 lg:px-12 pb-6 pt-4">
          <ChatInput onSend={(msg) => console.log("Send:", msg)} />
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-[250px] pointer-events-none overflow-hidden">
          <div
            className="absolute bottom-0 right-[200px] w-[618px] h-[250px] rounded-full opacity-24 blur-[150px]"
            style={{ background: "#7797FF" }}
          />
          <div
            className="absolute bottom-0 left-0 w-[794px] h-[250px] rounded-full opacity-14 blur-[150px]"
            style={{ background: "#70CFFF" }}
          />
        </div>
      </main>
    </div>
  );
}
