import SectionWrapper from "./SectionWrapper";
import Eyebrow from "./Eyebrow";

const CARDS = [
  {
    img: "/images/audience-1.png",
    title: "The Senior Leader",
    description: "President, Rector, or Vice-Chancellor. The person who sets the institutional direction.",
  },
  {
    img: "/images/audience-2.png",
    title: "Academic & Operations Leads",
    description: "Provost, Director of IT, Director of Strategy. The people who will implement what is decided.",
  },
  {
    img: "/images/audience-3.png",
    title: "Faculty Leadership",
    description: "1 to 2 Deans from the faculties most affected by AI — typically Engineering, Business, and Education.",
  },
];

function AudienceCard({ img, title, description }) {
  return (
    <div className="flex flex-col bg-white border border-hairline rounded-lg overflow-hidden">
      <img
        src={img}
        alt={title}
        className="w-full aspect-[3/2] object-cover rounded-t-[12px]"
      />
      <div className="p-6">
        <h3 className="font-fraunces font-semibold text-[20px] text-navy leading-[1.2]">
          {title}
        </h3>
        <p className="font-inter text-[15px] text-text-primary leading-[1.6] mt-2">
          {description}
        </p>
      </div>
    </div>
  );
}

export default function AudienceSection() {
  return (
    <SectionWrapper id="audience">
      <div className="text-center">
        <Eyebrow className="mb-6">WHO IT IS FOR</Eyebrow>
        <h2 className="font-fraunces font-semibold text-[28px] md:text-[40px] leading-[1.15] text-navy max-w-[880px] mx-auto">
          For the leadership team that sets the direction.
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[1000px] mx-auto mt-14">
        {CARDS.map((card) => (
          <AudienceCard key={card.title} {...card} />
        ))}
      </div>

      <p className="font-inter italic text-[16px] text-text-muted text-center mt-8">
        Typically 4 to 8 people. No preparation required.
      </p>
    </SectionWrapper>
  );
}