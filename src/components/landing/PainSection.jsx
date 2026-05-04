import SectionWrapper from "./SectionWrapper";
import Eyebrow from "./Eyebrow";

const QUOTES = [
  {
    quote: "\u201CWhat is our AI strategy?\u201D",
    caption: "Asked once, the answer \u201Cwe are exploring options\u201D works. Asked twice, it does not.",
    byline: "\u2014 A board member",
  },
  {
    quote: "\u201CFaculty are using these tools whether we have a policy or not.\u201D",
    caption: "Some openly. Some quietly. Without a position, every passing week adds risk.",
    byline: "\u2014 A senior academic leader",
  },
  {
    quote: "\u201CUniversities in the UAE and Saudi Arabia are announcing AI initiatives.\u201D",
    caption: "Each announcement is a quiet pressure on the institution that has not yet announced one.",
    byline: "\u2014 A regional institution",
  },
  {
    quote: "\u201CEvery dean asks me what to tell the faculty. I do not have a good answer yet.\u201D",
    caption: "Three drafts of a policy. Three drafts shelved.",
    byline: "\u2014 A university president",
  },
  {
    quote: "\u201CHow is our institution contributing to the knowledge-based economy?\u201D",
    caption: "A real question, asked in real reporting cycles, that needs more than goodwill.",
    byline: "\u2014 Vision 2040 reporting",
    fullWidth: true,
  },
];

function QuoteCard({ quote, caption, byline, fullWidth }) {
  return (
    <div
      className={`bg-white border border-hairline rounded-lg p-8 ${
        fullWidth ? "md:col-span-2" : ""
      }`}
    >
      <p className="font-fraunces font-medium text-[20px] text-navy italic leading-[1.4]">
        {quote}
      </p>
      <p className="font-inter text-[14px] text-text-muted mt-4 leading-[1.55]">
        {caption}
      </p>
      <p className="font-inter font-medium text-[13px] text-text-muted mt-3 tracking-wide">
        {byline}
      </p>
    </div>
  );
}

export default function PainSection() {
  return (
    <SectionWrapper id="recognize">
      <div className="text-center">
        <Eyebrow className="mb-6">THE QUESTIONS</Eyebrow>
        <h2 className="font-fraunces font-semibold text-[28px] md:text-[40px] leading-[1.15] text-navy max-w-[880px] mx-auto mb-12">
          These questions are on every university leader's desk right now.
        </h2>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[1000px] mx-auto">
        {QUOTES.map((q, i) => (
          <QuoteCard key={i} {...q} />
        ))}
      </div>
    </SectionWrapper>
  );
}