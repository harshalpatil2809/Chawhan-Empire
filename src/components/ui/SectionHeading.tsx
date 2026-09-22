import { cn } from "@/lib/utils";

interface Props {
  title: string;
  intro?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
  className?: string;
  as?: "h2" | "h3";
}

export default function SectionHeading({
  title,
  intro,
  align = "left",
  tone = "dark",
  className,
  as: Tag = "h2",
}: Props) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      <Tag className="font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl ">
        {title}
      </Tag>
      {intro ? (
        <p className="mt-4 text-base leading-relaxed ">
          {intro}
        </p>
      ) : null}
    </div>
  );
}
