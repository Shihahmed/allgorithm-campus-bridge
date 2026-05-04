import SectionWrapper from "./SectionWrapper";
import Eyebrow from "./Eyebrow";

export default function Vision2040Section() {
  return (
    <section id="vision-2040" className="bg-offwhite py-20 md:py-32">
      <div className="mx-auto max-w-[1200px] px-5 md:px-8">
        <div className="text-center">
          <Eyebrow className="mb-6">WHY WE ARE RUNNING THIS</Eyebrow>
          <h2 className="font-fraunces font-semibold text-[28px] md:text-[40px] leading-[1.15] text-navy max-w-[880px] mx-auto">
            Oman Vision 2040 places knowledge economy and human capital at the heart of the
            Sultanate's future.
          </h2>
        </div>

        <div className="max-w-[720px] mx-auto mt-8 text-left space-y-6">
          <p className="font-inter text-[18px] text-text-primary leading-[1.6]">
            The vision is explicit. By 2030, Oman targets a place among the top 20 countries in
            global education indices. By 2040, the top 10. As of 2026, 5 Omani universities are
            ranked in the QS World University Rankings — up from 2 the year before. Sultan Qaboos
            University moved up 28 places, now sitting at 334th globally. The trajectory is real.
          </p>
          <p className="font-inter text-[18px] text-text-primary leading-[1.6]">
            Artificial intelligence is one of the defining technologies that will shape how this
            trajectory continues. Universities that engage with AI thoughtfully — at the leadership
            level, not only at the tooling level — will prepare students for the future economy,
            advance research, and operate at international standards.
          </p>
          <p className="font-inter text-[18px] text-text-primary leading-[1.6]">
            This is why Allgorithm.ai is running the campaign. Not as marketing. As a contribution
            to a national mission we are part of, working in the Sultanate, on education, with Omani
            institutions.
          </p>
        </div>

        {/* Pull quote */}
        <div className="max-w-[880px] mx-auto mt-20 text-center">
          <div className="w-10 h-px bg-teal mx-auto mb-6" />
          <p className="font-fraunces font-medium italic text-[22px] md:text-[28px] text-teal leading-[1.4]">
            Universities are the single most important institutions in Oman's knowledge-economy
            mission. The conversation about AI in higher education in Oman should happen on Omani
            campuses, in Omani context, with Omani institutions in the room together.
          </p>
          <div className="w-10 h-px bg-teal mx-auto mt-6" />
        </div>
      </div>
    </section>
  );
}