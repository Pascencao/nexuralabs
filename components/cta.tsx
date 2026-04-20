import Image from "next/image";
import BlurredShape from "@/public/images/blurred-shape.svg";
import Typography from "./ui/typography";
import ButtonPrimary from "./ui/buttonPrimary";
import Tag from "./ui/tag";

export default function Cta({
  title,
  description,
  tag,
}: {
  title: string;
  description: string;
  tag: string;
}) {
  return (
    <section id="contacto" className="relative overflow-hidden border-t border-nexura-border/80">
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -mb-24 ml-20 -translate-x-1/2 opacity-40"
        aria-hidden="true"
      >
        <Image
          className="max-w-none"
          src={BlurredShape}
          width={760}
          height={668}
          alt=""
        />
      </div>
      <div className="mx-auto max-w-site px-5 sm:px-8">
        <div className="rounded-2xl border border-nexura-border/80 bg-nexura-surface/40 py-16 md:py-20">
          <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
            <Tag>{tag}</Tag>
            <Typography type="h2">{title}</Typography>
            <Typography type="p">{description}</Typography>
            <div
              className="mx-auto flex max-w-xs justify-center sm:max-w-none"
              data-aos="fade-up"
              data-aos-duration="450"
              data-aos-delay="120"
            >
              <ButtonPrimary
                text="Agendar una reunión"
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
