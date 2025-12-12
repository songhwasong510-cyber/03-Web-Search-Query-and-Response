import { Paperclip, ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";

interface ChatInputProps {
  onSend?: (message: string) => void;
  className?: string;
}

export default function ChatInput({ onSend, className }: ChatInputProps) {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (message.trim() && onSend) {
      onSend(message);
      setMessage("");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div
      className={cn(
        "w-full max-w-[768px] p-2.5 flex flex-col gap-6 bg-white rounded-lg border border-[#155DFC] shadow-[0_2px_8px_-2px_rgba(50,56,62,0.08),0_20px_24px_-4px_rgba(50,56,62,0.08)]",
        className
      )}
    >
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="AgentGo에게 물어보세요."
        className="w-full text-base text-agentgo-neutral-900 placeholder:text-agentgo-neutral-disabled leading-[150%] resize-none outline-none border-none bg-transparent"
        rows={1}
      />

      <div className="flex items-center justify-between">
        <button className="flex items-center justify-center w-8 h-8 border border-agentgo-neutral-border rounded hover:bg-agentgo-neutral-050 transition-colors">
          <Paperclip className="w-[18px] h-[18px] text-agentgo-neutral-color" />
        </button>

        <button
          onClick={handleSend}
          disabled={!message.trim()}
          className={cn(
            "flex items-center justify-center w-8 h-8 rounded transition-colors",
            message.trim()
              ? "bg-agentgo-neutral-disabled hover:bg-agentgo-neutral-color"
              : "bg-agentgo-neutral-disabled cursor-not-allowed"
          )}
        >
          <ArrowUp className="w-[18px] h-[18px] text-white" />
        </button>
      </div>
    </div>
  );
}
