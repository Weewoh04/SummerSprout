import { Pin } from "lucide-react";

type PinButtonProps = {
  title: string;
  description: string;
};

export function PinButton({ title, description }: PinButtonProps) {
  const href = `https://www.pinterest.com/pin/create/button/?description=${encodeURIComponent(
    `${title}: ${description}`
  )}`;

  return (
    <a className="pin-button" href={href} target="_blank" rel="noreferrer">
      <Pin size={18} aria-hidden="true" />
      Pin this idea
    </a>
  );
}
