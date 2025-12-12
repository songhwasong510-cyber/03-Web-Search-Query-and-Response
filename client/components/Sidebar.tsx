import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  MessageSquare,
  Lightbulb,
  BarChart3,
  Settings,
  Mail,
  AppWindow,
  Menu,
  FileText,
  User,
  Sparkles,
} from "lucide-react";

interface SidebarProps {
  onToggle?: () => void;
}

export default function Sidebar({ onToggle }: SidebarProps) {
  const menuItems = [
    {
      icon: MessageSquare,
      label: "Hi, AgentGo",
      active: true,
      sparkle: true,
    },
    { icon: Lightbulb, label: "오늘의 업무 요약", active: false },
    { icon: BarChart3, label: "나의 활동", active: false },
    { icon: Settings, label: "나의 에이전트 설정", active: false },
    { icon: Mail, label: "Teams", active: false },
    { icon: AppWindow, label: "Portal", active: false },
  ];

  return (
    <aside className="w-[234px] flex-shrink-0 bg-agentgo-neutral-050 flex flex-col h-screen overflow-hidden">
      <div className="flex items-center justify-between h-[52px] px-[18px]">
        <div className="flex items-center gap-2">
          <svg
            width="23"
            height="20"
            viewBox="0 0 28 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.1192 0C17.3357 0 17.5484 0.0552074 17.7342 0.158007C17.9201 0.262711 18.0753 0.4112 18.1806 0.592052L27.8448 17.0153C27.9464 17.1885 28 17.3827 28 17.5826C28 17.7806 27.9464 17.9767 27.8448 18.1499L24.7524 23.406C24.6471 23.585 24.4938 23.7354 24.306 23.8401C24.1202 23.9448 23.9075 24 23.691 24H4.3071C4.0906 24 3.87793 23.9448 3.69208 23.8401C3.50623 23.7354 3.35103 23.585 3.24566 23.406L0.155194 18.1499C0.0536475 17.9767 0 17.7806 0 17.5826C0 17.3846 0.0536475 17.1885 0.155194 17.0153L9.81744 0.592052C9.92281 0.413104 10.078 0.262711 10.2639 0.158007C10.4497 0.0533037 10.6624 0 10.8789 0H17.1192ZM7.28261 18.1423C7.28261 18.1423 11.2103 15.519 13.9981 15.519C16.7858 15.519 20.7136 18.1423 20.7136 18.1423L13.9981 6.55255L7.28261 18.1423Z"
              fill="url(#paint0_linear)"
            />
            <defs>
              <linearGradient
                id="paint0_linear"
                x1="14"
                y1="0"
                x2="14"
                y2="24"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#003EC3" />
                <stop offset="1" stopColor="#0091FF" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <button
          onClick={onToggle}
          className="lg:flex items-center justify-center w-8 h-8 rounded hover:bg-agentgo-neutral-soft transition-colors hidden"
        >
          <Menu className="w-[18px] h-[18px] text-agentgo-text-tertiary" />
        </button>
      </div>

      <nav className="flex flex-col gap-1.5 px-3 mt-2.5">
        {menuItems.map((item, index) => (
          <button
            key={index}
            className={cn(
              "flex items-center gap-1.5 h-[42px] px-2.5 rounded transition-all text-left",
              item.active
                ? "bg-white shadow-sm font-bold"
                : "font-bold hover:bg-white/50",
            )}
          >
            <div className="relative">
              <item.icon
                className={cn(
                  "w-[18px] h-[18px]",
                  item.active
                    ? "text-agentgo-primary"
                    : "text-agentgo-text-tertiary",
                )}
              />
              {item.sparkle && (
                <Sparkles className="w-2 h-2 absolute -top-0.5 -right-0.5 text-agentgo-primary fill-agentgo-primary" />
              )}
            </div>
            <span
              className={cn(
                "text-sm leading-[142%]",
                item.active
                  ? "text-agentgo-primary"
                  : "text-agentgo-text-secondary",
              )}
            >
              {item.label}
            </span>
            {item.active && (
              <div className="w-0.5 h-[22px] bg-agentgo-primary absolute left-0 rounded-r" />
            )}
          </button>
        ))}
      </nav>

      <div className="mt-auto px-3 pb-5 space-y-2.5">
        <button className="flex items-center gap-1.5 h-[42px] px-2.5 rounded border border-agentgo-neutral-border w-full text-left hover:bg-white/50 transition-colors">
          <FileText className="w-[18px] h-[18px] text-agentgo-text-tertiary" />
          <span className="text-sm font-bold text-agentgo-text-secondary leading-[142%]">
            이용가이드
          </span>
        </button>

        <button className="w-full h-[58px] rounded hover:bg-white/50 transition-colors">
          <div className="flex items-center gap-2.5 px-1.5">
            <Avatar className="w-8 h-8 border border-agentgo-neutral-border">
              <AvatarFallback className="bg-white">
                <User className="w-5 h-5 text-agentgo-neutral-color" />
              </AvatarFallback>
            </Avatar>
            <div className="flex flex-col items-start">
              <span className="text-sm font-bold text-agentgo-text-secondary leading-5">
                홍길동
              </span>
              <span className="text-xs text-agentgo-text-tertiary leading-[18px]">
                gildong@itcen.com
              </span>
            </div>
          </div>
        </button>
      </div>
    </aside>
  );
}
