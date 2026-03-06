import type { ReactNode } from "react";

interface InforamtionCardProps {
  title: string;
  desc: string;
  SecureButton: ReactNode;
  variant?: string;
}

export const InforamtionCard = (props: InforamtionCardProps) => {
  const { title, desc, SecureButton, variant = "bg-blue-100" } = props;
  return (
    <div
      className={`p-4 ${variant} rounded-lg border border-gray-100 flex items-center justify-between`}
    >
      <div className="space-y-1">
        <p className="font-bold text-gray-700">{title}</p>
        <p className="text-xs text-gray-500">{desc}</p>
      </div>
      <div className="w-40">{SecureButton}</div>
    </div>
  );
};
