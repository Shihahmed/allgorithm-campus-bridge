import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import SectionWrapper from "./SectionWrapper";
import Eyebrow from "./Eyebrow";

const FAQS = [
  {
    q: "What is the catch with free?",
    a: "There isn\u2019t one. The full economics are stated in the offer section above. Allgorithm.ai gets visibility, pattern-recognition, a Vision 2040 contribution, and relationships. The institution gets a structured 2-hour session with no procurement tail.",
  },
  {
    q: "Will this become a sales pitch?",
    a: "No. The 2-hour agenda has no slot for a pitch. Our facilitators are not on commission. If you want to talk about paid engagements at any point during or after the session, we will \u2014 but only because you raised it.",
  },
  {
    q: "We have no budget for AI right now. Is this still relevant?",
    a: "Yes \u2014 and probably more so. The session is built for institutions still defining their position, not for institutions ready to procure. If anything, booking this session at the current stage is more useful than booking it after a budget decision.",
  },
  {
    q: "We have an internal IT team working on AI. Why bring in an outside facilitator?",
    a: "The session is not a substitute for your IT team. It is a structured strategic conversation involving your VC, provost, deans, and IT director together \u2014 which most institutions never schedule on their own. The IT director is welcome and central to the session.",
  },
  {
    q: "In which language is the session conducted?",
    a: "English by default. We can run the session in Arabic if your team prefers. State your preference during the diagnostic call.",
  },
  {
    q: "How many people should attend?",
    a: "6 to 12 leaders. Fewer than 6 limits the discussion. More than 12 turns the working session into a presentation.",
  },
  {
    q: "How quickly can we schedule?",
    a: "Most sessions schedule 2 to 4 weeks out. We can occasionally accommodate sooner. The 3-month campaign window is real \u2014 sessions booked in the final weeks may have limited slots.",
  },
  {
    q: "What if we book and need to reschedule?",
    a: "Reschedule freely up to 5 working days before the session. We will move it.",
  },
];

export default function FAQSection() {
  return (
    <SectionWrapper id="faq">
      <div className="text-center">
        <Eyebrow className="mb-6">QUESTIONS WE GET ASKED</Eyebrow>
        <h2 className="font-fraunces font-semibold text-[28px] md:text-[40px] leading-[1.15] text-navy max-w-[880px] mx-auto">
          The questions every Leader in Education asks before booking.
        </h2>
      </div>

      <div className="max-w-[800px] mx-auto mt-14">
        <Accordion type="single" collapsible defaultValue="item-0">
          {FAQS.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border-b border-hairline">
              <AccordionTrigger className="py-6 text-left font-fraunces font-semibold text-[19px] text-navy hover:no-underline hover:text-copper transition-colors [&[data-state=open]]:text-navy">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="pb-8 font-inter text-[16px] text-text-primary leading-[1.6]">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </SectionWrapper>
  );
}