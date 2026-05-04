import SectionWrapper from "./SectionWrapper";
import Eyebrow from "./Eyebrow";

export default function SocialProofSection() {
  return (
    <SectionWrapper id="proof" bg="sand">
      <div className="text-center">
        <Eyebrow className="mb-6">INSTITUTIONS PARTICIPATING IN THE CAMPAIGN</Eyebrow>
        <h2 className="font-fraunces font-semibold text-[28px] md:text-[40px] leading-[1.15] text-navy max-w-[880px] mx-auto">
          Universities across the Sultanate are reserving sessions.
        </h2>
        <p className="font-inter text-[17px] text-text-primary leading-[1.55] max-w-[720px] mx-auto mt-6 mb-12">
          We will update this section as the campaign progresses. Below are the institutions that
          have confirmed sessions to date.
        </p>
      </div>

      <div className="max-w-[720px] mx-auto text-center">
        <p className="font-fraunces font-medium text-[18px] text-text-muted italic leading-[1.5]">
          We are launching this campaign now. As institutions confirm and complete sessions, this
          section will reflect their participation in real time. No fake counters. No placeholder
          reviews.
        </p>
      </div>
    </SectionWrapper>
  );
}