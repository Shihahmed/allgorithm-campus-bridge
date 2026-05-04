import Eyebrow from "./Eyebrow";

const CAMPUS_IMAGE = "https://media.base44.com/images/public/69ee0975f64f0037c62a668d/b505fe874_generated_image.png";

export default function HeroSection({ heroImage }) {
  return (
    <section className="relative min-h-screen flex items-center bg-offwhite overflow-hidden">

      {/* Full-bleed background pattern */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover opacity-20"
        />
      </div>

      {/* Left-side cream overlay — dims pattern behind text */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="h-full w-full md:w-[55%] bg-offwhite/82" />
      </div>

      <div className="relative mx-auto max-w-[1200px] px-5 md:px-8 md:pl-12 pt-24 pb-16 md:pt-32 md:pb-24 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">

          {/* Left: text content */}
          <div className="md:pl-4">
            <Eyebrow className="mb-6">A 3-MONTH NATIONWIDE CAMPAIGN</Eyebrow>

            <h1 className="font-fraunces font-semibold text-[40px] md:text-[58px] leading-[1.05] text-navy mb-0">
              A 2-hour AI leadership session, on your campus, for free.
            </h1>

            <p className="font-inter font-medium text-[20px] leading-[1.6] text-text-primary mt-6 mb-0">
              Allgorithm.ai is visiting every university in Oman with a structured
              working session for Senior Management, Academic Leaders and Directors of IT.
            </p>

            <div className="flex flex-col sm:flex-row sm:items-center gap-5 mt-8">
              <a
                href="#reserve"
                className="inline-flex items-center justify-center bg-copper text-white font-inter font-bold text-[17px] px-8 py-[18px] rounded-lg hover:bg-copper-hover transition-colors duration-200 whitespace-nowrap"
              >
                Reserve your university's session
              </a>
              <a
                href="#agenda"
                className="inline-flex items-center gap-1.5 font-inter font-medium text-[16px] text-navy hover:underline underline-offset-4 transition-all duration-200 whitespace-nowrap"
              >
                See the 2-hour agenda <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>

          {/* Right: university campus photo */}
          <div className="hidden md:flex justify-end items-center h-full">
            <div className="relative w-full max-w-[480px]">
              {/* Accent frame */}
              <div className="absolute -top-4 -right-4 w-full h-full border border-copper/25 rounded-lg" />
              <img
                src={CAMPUS_IMAGE}
                alt="Senior university leader"
                className="relative z-10 w-full h-[520px] object-cover rounded-lg"
              />
              {/* Bottom fade to blend with page */}
              <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-offwhite/60 to-transparent rounded-b-lg z-20" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}