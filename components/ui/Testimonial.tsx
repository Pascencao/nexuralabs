import Image, { StaticImageData } from "next/image";

export function Testimonial({
    testimonial,
    category,
    children,
  }: {
    testimonial: {
      img: StaticImageData;
      clientImg: StaticImageData;
      name: string;
      company: string;
      content: string;
      categories: number[];
    };
    category: number;
    children: React.ReactNode;
  }) {
    return (
      <article
        className={`relative rounded-2xl bg-gradient-to-br from-gray-900/50 via-gray-800/25 to-gray-900/50 p-5 backdrop-blur-sm transition-opacity before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,theme(colors.gray.800),theme(colors.gray.700),theme(colors.gray.800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] ${!testimonial.categories.includes(category) ? "opacity-30" : ""}`}
      >
        <div className="flex flex-col gap-4">
          <div>
            <Image src={testimonial.clientImg} height={36} alt="Client logo" />
          </div>
          <p className={`text-indigo-200/65 before:content-['"'] after:content-['"']`}>
            {children}
          </p>
          <div className="flex items-center gap-3">
            <Image
              className="inline-flex shrink-0 rounded-full"
              src={testimonial.img}
              width={36}
              height={36}
              alt={testimonial.name}
            />
            <div className="text-sm font-medium text-gray-200">
              <span>{testimonial.name}</span>
              <span className="text-gray-700"> - </span>
              <a
                className="text-indigo-200/65 transition-colors hover:text-indigo-500"
                href="#0"
              >
                {testimonial.company}
              </a>
            </div>
          </div>
        </div>
      </article>
    );
  }

  export default Testimonial;