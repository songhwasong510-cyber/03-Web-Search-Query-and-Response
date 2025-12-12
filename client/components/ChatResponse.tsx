import { ChevronUp, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

interface WebLink {
  id: number;
  title: string;
  description: string;
  url?: string;
}

interface ChatResponseProps {
  intro?: string;
  content: string;
  webLinks?: WebLink[];
  showWebLinks?: boolean;
  className?: string;
}

export default function ChatResponse({
  intro,
  content,
  webLinks = [],
  showWebLinks = true,
  className,
}: ChatResponseProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-start gap-4 max-w-[814px] w-full",
        className,
      )}
    >
      {intro && (
        <div className="flex flex-col items-start gap-5 w-full">
          <div className="flex items-center gap-3.5">
            <svg
              width="28"
              height="24"
              viewBox="0 0 28 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="flex-shrink-0"
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
            <p className="text-base text-agentgo-neutral-900 leading-[150%] flex-1">
              {intro}
            </p>
          </div>
          <div className="relative w-full h-px">
            <div className="absolute left-0 top-0 w-full h-px" />
            <div className="absolute left-[46px] top-0 w-[calc(100%-46px)] h-px bg-agentgo-neutral-border" />
          </div>
        </div>
      )}

      <div className="w-full max-w-[768px]">
        <div
          className="text-base text-agentgo-neutral-900 leading-[200%] whitespace-pre-wrap"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>

      {showWebLinks && webLinks.length > 0 && (
        <div className="w-full max-w-[768px] flex flex-col gap-4">
          <div className="flex items-center justify-between h-[31px]">
            <div className="flex items-center gap-2">
              <div className="text-2xl">💻</div>
              <h3 className="text-xl font-bold text-black leading-[155%]">
                사이트 ({webLinks.length}개)
              </h3>
            </div>
            <button className="flex items-center gap-1.5 h-8 px-3 border border-agentgo-neutral-border rounded hover:bg-agentgo-neutral-050 transition-colors">
              <ChevronUp className="w-[18px] h-[18px] text-agentgo-neutral-color" />
              <span className="text-sm font-bold text-agentgo-neutral-color leading-[142%]">
                접기
              </span>
            </button>
          </div>

          <div className="flex flex-col gap-1.5">
            {webLinks.map((link) => (
              <div
                key={link.id}
                className="relative flex items-center h-[62px] px-3.5 border border-agentgo-neutral-border rounded-md bg-white shadow-sm hover:shadow-md transition-shadow cursor-pointer group"
              >
                <div className="flex items-center justify-center w-[23px] h-5 bg-agentgo-primary-soft rounded-xl mr-2.5">
                  <span className="text-sm font-bold text-agentgo-primary-soft-fg leading-[142%]">
                    {link.id}
                  </span>
                </div>

                <div className="flex flex-col gap-0.5 flex-1 min-w-0">
                  <p className="text-sm text-agentgo-text-primary leading-[142%] truncate">
                    {link.title}
                  </p>
                  <p className="text-xs text-agentgo-text-tertiary leading-[150%] truncate">
                    {link.description}
                  </p>
                </div>

                <button className="flex items-center justify-center w-8 h-8 rounded hover:bg-agentgo-neutral-050 transition-colors flex-shrink-0">
                  <ExternalLink className="w-[18px] h-[18px] text-agentgo-text-tertiary" />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
