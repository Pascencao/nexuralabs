import Logo from "./logo";
import Image from "next/image";
import FooterIllustration from "@/public/images/footer-illustration.svg";

export default function Footer() {
  return (
    <footer>
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        {/* Footer illustration */}
        <div
          className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -translate-x-1/2"
          aria-hidden="true"
        >
          <Image
            className="max-w-none"
            src={FooterIllustration}
            width={1076}
            height={378}
            alt="Footer illustration"
          />
        </div>
        <div className="grid grid-cols-8 justify-between gap-2 
        py-8   md:grid-rows-[auto_auto] 
        md:py-12">
          
            <div className="mb-3">
              <Logo />
            </div>
            <div className="text-sm">
              <p className="mb-3 text-indigo-200/65">
                Nexura Labs
              </p>
              <ul className="inline-flex">
                <li className="mr-2">
                  <a
                    className="flex items-center justify-center text-indigo-500 transition hover:text-indigo-400"
                    href="https://www.linkedin.com/company/nexuralabs/"
                    aria-label="Twitter"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="28" height="28" viewBox="0,0,256,256">
                      <g fill="#5A58EB" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{mixBlendMode: "normal"}}><g transform="scale(9.84615,9.84615)"><path d="M21.125,0h-16.25c-2.69141,0 -4.875,2.18359 -4.875,4.875v16.25c0,2.69141 2.18359,4.875 4.875,4.875h16.25c2.69141,0 4.875,-2.18359 4.875,-4.875v-16.25c0,-2.69141 -2.18359,-4.875 -4.875,-4.875zM8.03906,22.07031h-4.03906l-0.02344,-12.09375h4.03906zM5.91797,8.39453h-0.02344c-1.32031,0 -2.17187,-0.91016 -2.17187,-2.04297c0,-1.16016 0.87891,-2.03906 2.22266,-2.03906c1.34375,0 2.16797,0.87891 2.19531,2.03906c0,1.13281 -0.85547,2.04297 -2.22266,2.04297zM22.04297,22.07031h-4.07422v-6.57031c0,-1.58984 -0.42187,-2.67187 -1.84375,-2.67187c-1.08594,0 -1.67187,0.73047 -1.95312,1.4375c-0.10547,0.25391 -0.13281,0.60156 -0.13281,0.95703v6.84766h-4.09375l-0.02344,-12.09375h4.09375l0.02344,1.70703c0.52344,-0.80859 1.39453,-1.95312 3.48047,-1.95312c2.58594,0 4.51953,1.6875 4.51953,5.31641v7.02344z"></path></g></g>
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    className="flex mt-[-2px] items-center justify-center text-indigo-500 transition hover:text-indigo-400"
                    href="#0"
                    aria-label="Medium"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="34" height="34" viewBox="0,0,256,256">
                      <g fill="#5A58EB" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{mixBlendMode: "normal"}}><g transform="scale(8.53333,8.53333)"><path d="M9.99805,3c-3.859,0 -6.99805,3.14195 -6.99805,7.00195v10c0,3.859 3.14195,6.99805 7.00195,6.99805h10c3.859,0 6.99805,-3.14195 6.99805,-7.00195v-10c0,-3.859 -3.14195,-6.99805 -7.00195,-6.99805zM22,7c0.552,0 1,0.448 1,1c0,0.552 -0.448,1 -1,1c-0.552,0 -1,-0.448 -1,-1c0,-0.552 0.448,-1 1,-1zM15,9c3.309,0 6,2.691 6,6c0,3.309 -2.691,6 -6,6c-3.309,0 -6,-2.691 -6,-6c0,-3.309 2.691,-6 6,-6zM15,11c-2.20914,0 -4,1.79086 -4,4c0,2.20914 1.79086,4 4,4c2.20914,0 4,-1.79086 4,-4c0,-2.20914 -1.79086,-4 -4,-4z"></path></g></g>
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    className="flex mt-[-2px] ml-[2px] items-center justify-center text-indigo-500 transition hover:text-indigo-400"
                    href="#0"
                    aria-label="Github"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="35" height="35" viewBox="0,0,256,256">
                      <g fill="#5A58EB" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{mixBlendMode: "normal"}}><g transform="scale(5.33333,5.33333)"><path d="M12.5,6c-3.57194,0 -6.5,2.92806 -6.5,6.5v23c0,3.57194 2.92806,6.5 6.5,6.5h23c3.57194,0 6.5,-2.92806 6.5,-6.5v-23c0,-3.57194 -2.92806,-6.5 -6.5,-6.5zM12.5,9h23c1.95006,0 3.5,1.54994 3.5,3.5v23c0,1.95006 -1.54994,3.5 -3.5,3.5h-23c-1.95006,0 -3.5,-1.54994 -3.5,-3.5v-23c0,-1.95006 1.54994,-3.5 3.5,-3.5zM13.82813,14l7.73633,11.05664l-7.74219,8.94336h2.04297l6.60352,-7.64844l5.35156,7.64844h6.4375l-8.23242,-11.76562l7.11133,-8.23437h-2l-6.01367,6.94336l-4.85742,-6.94336zM16.93555,15.69531h2.5625l11.65234,16.60938h-2.5625z"></path></g></g>
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
        </div>
      </div>
    </footer>
  );
}
