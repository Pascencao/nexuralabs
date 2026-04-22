import Typography from "./ui/typography";
import ButtonPrimary from "./ui/buttonPrimary";
import Tag from "./ui/tag";

export default function Cta({
  title,
  description,
  tag,
  buttonText,
}: {
  title: string;
  description: string;
  tag: string;
  buttonText: string;
}) {
  return (
    <section id="contacto" className="relative overflow-hidden border-t border-nexura-border/80">
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -z-10 h-64 w-[min(100%,42rem)] -translate-x-1/2 translate-y-1/3 rounded-full bg-nexura-violet/20 blur-[100px] opacity-50"
        aria-hidden
      />
      <div className="mx-auto max-w-site px-5 sm:px-8">
        <div className="rounded-2xl border border-nexura-border/80 bg-nexura-surface/40 py-16 md:py-20">
          <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
            <Tag>{tag}</Tag>
            <Typography type="h2">{title}</Typography>
            <Typography type="p">{description}</Typography>
            <div className="mx-auto flex max-w-xs justify-center scroll-reveal scroll-reveal-delay-2 sm:max-w-none">
              <ButtonPrimary
                text={buttonText}
                href="https://calendar.app.google/xsCKdDtbHWRrH7tHA"
                icon
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
