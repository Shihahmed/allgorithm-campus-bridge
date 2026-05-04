import SectionWrapper from "./SectionWrapper";
import Eyebrow from "./Eyebrow";

const INCLUDED = [
  "30-minute diagnostic call before the session",
  "2-hour on-campus working session, facilitated by 2 Allgorithm.ai team members",
  "Written reference summary of 4 international peer institutions, tailored to your profile",
  "1-page Vision 2040 alignment note for board reporting",
  "30-day post-session check-in call (optional)",
];

const WE_GET = [
  "Visibility \u2014 Allgorithm.ai becomes known to the institutions we hope to work with on paid engagements in the future, when the institution is ready and only if the institution initiates that conversation.",
  "Pattern-recognition \u2014 Running 20+ of these sessions teaches us more about the actual state of AI in Omani higher education than any amount of desk research.",
  "A real Vision 2040 contribution \u2014 Most institutional leaders cannot cite a single agency that has contributed substantively to Vision 2040 in the education pillar. We are choosing to be one of the few.",
  "Relationships \u2014 The 6 to 12 leaders in each room become part of a network we can call on for the next decade.",
];

export default function OfferSection() {
  return (
    <SectionWrapper id="offer" bg="sand">
      <div className="text-center">
        <Eyebrow className="mb-6">THE OFFER</Eyebrow>
        <h2 className="font-fraunces font-semibold text-[28px] md:text-[40px] leading-[1.15] text-navy max-w-[880px] mx-auto">
          Here is exactly what is included — and what we get from it.
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-[1100px] mx-auto mt-14">
        <div>
          <h3 className="font-fraunces font-semibold text-[22px] text-navy mb-5">What's included</h3>
          <ul className="space-y-3">
            {INCLUDED.map((item, i) => (
              <li key={i} className="font-inter text-[16px] text-text-primary leading-[1.8] flex items-start gap-3">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-copper shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-fraunces font-semibold text-[22px] text-navy mb-5">What we get from it</h3>
          <ul className="space-y-3">
            {WE_GET.map((item, i) => (
              <li key={i} className="font-inter text-[16px] text-text-primary leading-[1.8] flex items-start gap-3">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-copper shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Stating it openly */}
      <div className="max-w-[880px] mx-auto mt-16 bg-white border border-hairline border-l-[3px] border-l-copper rounded-lg p-8">
        <h4 className="font-fraunces font-semibold text-[18px] text-navy mb-3">
          Stating it openly
        </h4>
        <p className="font-inter text-[17px] text-text-primary leading-[1.6]">
          We are a commercial agency. We hope some of the institutions we visit will, eventually,
          want to engage us for paid work. That conversation will only happen if you initiate it.
          The 2-hour session has no embedded pitch and no follow-on contract on the agenda.
        </p>
      </div>

      <div className="text-center mt-14">
        <a
          href="#reserve"
          className="inline-flex items-center justify-center bg-copper text-white font-inter font-semibold text-[17px] px-8 py-4 rounded-lg hover:bg-copper-hover transition-colors"
        >
          Reserve your university's session
        </a>
      </div>
    </SectionWrapper>
  );
}