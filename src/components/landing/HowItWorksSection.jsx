import SectionWrapper from "./SectionWrapper";
import Eyebrow from "./Eyebrow";

const STEPS = [
  {
    num: 1,
    title: "Reserve your session",
    body: "Submit the form below. We respond within 2 working days. No commitment until you confirm a date.",
  },
  {
    num: 2,
    title: "30-minute diagnostic call",
    body: "A scheduled call with the VC and one designated coordinator. We map your institution\u2019s current AI posture and agree on the focus for the 2 hours.",
  },
  {
    num: 3,
    title: "2-hour on-campus session",
    body: "On the date your institution chooses. On your campus. Your leadership team in the room.",
  },
  {
    num: 4,
    title: "30-day check-in (optional)",
    body: "A scheduled call 30 days after the workshop. Open agenda.",
  },
];

export default function HowItWorksSection() {
  return (
    <SectionWrapper id="how-it-works">
      <div className="text-center">
        <Eyebrow className="mb-6">HOW IT WORKS</Eyebrow>
        <h2 className="font-fraunces font-semibold text-[28px] md:text-[40px] leading-[1.15] text-navy max-w-[880px] mx-auto">
          Four steps. Two hours of your leadership team's time.
        </h2>
      </div>

      {/* Desktop: horizontal with connector line */}
      <div className="hidden md:grid grid-cols-4 gap-0 mt-14 relative">
        {/* Connector line */}
        <div className="absolute top-[20px] left-[calc(12.5%+20px)] right-[calc(12.5%+20px)] h-px bg-hairline" />

        {STEPS.map((step) => (
          <div key={step.num} className="flex flex-col items-center text-center px-4 relative">
            <div className="w-10 h-10 rounded-full bg-navy flex items-center justify-center relative z-10">
              <span className="font-fraunces font-semibold text-[18px] text-white">{step.num}</span>
            </div>
            <h3 className="font-fraunces font-semibold text-[18px] text-navy mt-4">
              {step.title}
            </h3>
            <p className="font-inter text-[15px] text-text-primary leading-[1.55] mt-2">
              {step.body}
            </p>
          </div>
        ))}
      </div>

      {/* Mobile: vertical stack */}
      <div className="md:hidden mt-10 space-y-8">
        {STEPS.map((step) => (
          <div key={step.num} className="flex gap-5">
            <div className="w-10 h-10 rounded-full bg-navy flex items-center justify-center shrink-0">
              <span className="font-fraunces font-semibold text-[18px] text-white">{step.num}</span>
            </div>
            <div>
              <h3 className="font-fraunces font-semibold text-[18px] text-navy">
                {step.title}
              </h3>
              <p className="font-inter text-[15px] text-text-primary leading-[1.55] mt-2">
                {step.body}
              </p>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}