import Image from "next/image";
import BlurredShape from "@/public/images/blurred-shape.svg";
import Typography from "./ui/typography";
import ButtonPrimary from "./ui/buttonPrimary";
import Tag from "./ui/tag";

export default function Cta({ title, description, tag}: { title: string, description: string, tag: string}) {
  return (
    <section className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -mb-24 ml-20 -translate-x-1/2"
        aria-hidden="true"
      >
        <Image
          className="max-w-none"
          src={BlurredShape}
          width={760}
          height={668}
          alt="Blurred shape"
        />
      </div>
      <div className="max-w6xl mx-auto px-4 sm:px-6">
        <div className="bg-gradient-to-r from-transparent via-gray-800/50 py-12 md:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <Tag>
              {tag}
            </Tag>
            <Typography type="h2">
              {title}
            </Typography>
            <Typography type="p">
              {description}
            </Typography>
            <div className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center">
              
              <div data-aos="fade-up" data-aos-delay={600}>
                <ButtonPrimary
                  text="Schedule a Meeting"
                  href="https://calendar.app.google/xsCKdDtbHWRrH7tHA"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
