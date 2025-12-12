import { cn } from "@/lib/utils";

interface ChatBubbleProps {
  message: string;
  isUser?: boolean;
  className?: string;
}

export default function ChatBubble({
  message,
  isUser = false,
  className,
}: ChatBubbleProps) {
  if (isUser) {
    return (
      <div className={cn("flex justify-end", className)}>
        <div className="inline-flex py-3.5 px-5 bg-agentgo-primary-soft rounded-[26px_2px_26px_26px] max-w-[80%]">
          <p className="text-base text-agentgo-neutral-900 leading-[150%]">
            {message}
          </p>
        </div>
      </div>
    );
  }

  return null;
}
