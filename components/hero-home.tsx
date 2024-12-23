import VideoThumb from "@/public/images/hero-image-01.jpg";
import ModalVideo from "@/components/modal-video";
import ButtonPrimary from "./ui/buttonPrimary";
import ButtonSecondary from "./ui/buttonSecondary";
import GradientHeading from "./ui/gradientHeading";
import SubtitleHeading from "./ui/subtitleHeading";
import Image from "next/image";
import Typography from "./ui/typography";

export default function HeroHome({title, subtitle, description}: 
  {title: string, subtitle: string, description: string}) {
  const HeroImage = "/images/hero2.jpg";
  return (
    <section className="block pt-[80px]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero content */}
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="pb-12 text-center md:pb-20">
            <GradientHeading>
              {title}
            </GradientHeading>
            <div className="mx-auto max-w-3xl">
              <SubtitleHeading>
                {subtitle}
              </SubtitleHeading>
              <Typography type="p">
                {description}
              </Typography>
              <div className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center">
               <ButtonPrimary text="Let’s Build Together" href="https://calendar.app.google/xsCKdDtbHWRrH7tHA" icon={true}/>
              </div>
            </div>
          </div>
          <Image width={1000} height={1000} src={HeroImage} alt="Hero Image" />
        </div>
      </div>
    </section>
  );
}
