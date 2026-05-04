import SectionWrapper from "./SectionWrapper";
import Eyebrow from "./Eyebrow";

const BLOCKS = [
  {
    num: 1,
    time: "0:00 \u2014 0:25",
    title: "Where AI is in higher education globally and in Oman",
    body: "A grounded picture, not a hype reel. Where peer institutions in the GCC are making moves. Where the Sultanate\u2019s institutions sit. What is actually deployed versus what is press release.",
  },
  {
    num: 2,
    time: "0:25 \u2014 1:05",
    title: "The 6 questions every credible university AI policy must answer",
    body: "The 6 questions, the strategic forks at each one, and what 4 international peer institutions decided. Your team works through each in real time.",
  },
  {
    num: 3,
    time: "1:05 \u2014 1:35",
    title: "Your institution\u2019s situation",
    body: "A facilitated discussion of where your institution actually is, what is already in motion, and what the 12-month roadmap could look like. This segment is recorded by our facilitator and summarized in your post-session note.",
  },
  {
    num: 4,
    time: "1:35 \u2014 2:00",
    title: "Decisions and next steps",
    body: "What will your team commit to before the next board meeting? Who owns each step? What are you taking back to the Council of Trustees?",
    last: true,
  },
];

const DELIVERABLES = [
  "Written summary of the 6-questions discussion as it applied to your institution",
  "Reference summary of the 4 peer institutions discussed",
  "A 1-page Vision 2040 alignment note for board reporting",
  "Optional 30-day check-in call",
];

export default function AgendaSection() {
  return (
    <SectionWrapper id="agenda">
      <div className="text-center">
        <Eyebrow className="mb-6">THE 2-HOUR AGENDA</Eyebrow>
        <h2 className="font-fraunces font-semibold text-[28px] md:text-[40px] leading-[1.15] text-navy max-w-[880px] mx-auto">
          A structured 2-hour working session. Four segments. Specific deliverables.
        </h2>
      </div>

      <div className="mt-14 max-w-[900px] mx-auto">
        {BLOCKS.map((block) => (
          <div
            key={block.num}
            className={`flex flex-col md:flex-row gap-4 md:gap-10 py-8 ${
              !block.last ? "border-b border-hairline" : ""
            }`}
          >
            <div className="md:w-[180px] shrink-0">
              <p className="font-inter font-medium text-[12px] text-text-muted tracking-[0.12em] uppercase mb-2">
                BLOCK {block.num}
              </p>
              <span className="inline-block bg-navy text-white font-inter font-semibold text-[13px] px-3 py-1.5 rounded-md font-mono">
                {block.time}
              </span>
            </div>
            <div>
              <h3 className="font-fraunces font-semibold text-[24px] text-navy leading-[1.2]">
                {block.title}
              </h3>
              <p className="font-inter text-[16px] text-text-primary leading-[1.6] mt-3">
                {block.body}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Deliverables card */}
      <div className="bg-sand rounded-lg p-8 max-w-[800px] mx-auto mt-16">
        <h3 className="font-fraunces font-semibold text-[22px] text-navy">
          You leave with
        </h3>
        <ul className="mt-4 space-y-2">
          {DELIVERABLES.map((item, i) => (
            <li key={i} className="font-inter text-[16px] text-text-primary leading-[1.8] flex items-start gap-3">
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-copper shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </SectionWrapper>
  );
}