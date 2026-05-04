import SectionWrapper from "./SectionWrapper";
import Eyebrow from "./Eyebrow";

const OUTCOMES = [
  {
    num: "1",
    title: "A clear-eyed view of the AI landscape",
    body: "What is real, what is hype, what is happening in your peer set. No vendor demos. No theoretical frameworks.",
  },
  {
    num: "2",
    title: "The 6 questions, mapped to your institution",
    body: "And the strategic trade-offs at each one. You will know which questions you can answer now and which need more work.",
  },
  {
    num: "3",
    title: "A 12-month roadmap framework",
    body: "Not a generic template. The version that took 90 minutes of your team\u2019s actual discussion.",
  },
  {
    num: "4",
    title: "Shared vocabulary across your leadership team",
    body: "The single biggest blocker most institutions face is that the VC, the provost, and the IT director are not using the same words. After 2 hours, you are.",
  },
  {
    num: "5",
    title: "A 1-page Vision 2040 alignment note",
    body: "For your next board meeting or your ministry reporting.",
  },
  {
    num: "6",
    title: "A 30-day check-in call",
    body: "If you want one. No agenda. No sales conversation. Just to answer questions that surface 3 weeks after the session.",
  },
];

export default function OutcomesSection() {
  return (
    <SectionWrapper id="outcomes" bg="sand">
      <div className="text-center">
        <Eyebrow className="mb-6">WHAT THE LEADERSHIP TEAM WALKS AWAY WITH</Eyebrow>
        <h2 className="font-fraunces font-semibold text-[28px] md:text-[40px] leading-[1.15] text-navy max-w-[880px] mx-auto">
          Six concrete outcomes — not a slide deck.
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
        {OUTCOMES.map((o) => (
          <div key={o.num} className="bg-white border border-hairline rounded-lg p-8">
            <span className="font-fraunces font-semibold text-[40px] text-copper leading-none">
              {o.num}
            </span>
            <h3 className="font-fraunces font-semibold text-[20px] text-navy mt-4 leading-[1.3]">
              {o.title}
            </h3>
            <p className="font-inter text-[15px] text-text-primary leading-[1.55] mt-3">
              {o.body}
            </p>
          </div>
        ))}
      </div>

      <div className="text-center mt-16">
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