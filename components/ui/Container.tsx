import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "section" | "header" | "footer" | "main" | "article";
};

export function Container({ children, className, as: Tag = "div" }: Props) {
  return (
    <Tag className={cn("mx-auto w-full max-w-[1440px] px-6 md:px-10 lg:px-16", className)}>
      {children}
    </Tag>
  );
}
