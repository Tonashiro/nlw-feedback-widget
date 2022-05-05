import { Check } from "phosphor-react";

export function Success() {
  return (
    <div className="w-6 h-6 flex items-center justify-center overflow-hidden">
      <Check weight="bold" className="w-6 h-6 animate-pulse" />
    </div>
  );
}
