import SectionWrapper from "./SectionWrapper";
import Eyebrow from "./Eyebrow";

function FacilitatorCard({ initials }) {
  return (
    <div className="bg-white border border-hairline rounded-lg p-8 text-center">
      <div className="w-[120px] h-[120px] rounded-full bg-sand mx-auto flex items-center justify-center">
        <span className="font-fraunces font-semibold text-[28px] text-navy">{initials}</span>
      </div>
      <p className="font-fraunces font-semibold text-[22px] text-navy mt-6">
        Name to be confirmed
      </p>
      <p className="font-inter font-medium text-[15px] text-text-muted mt-2">
        Role at Allgorithm.ai
      </p>
      <p className="font-inter text-[15px] text-text-primary leading-[1.55] mt-4">
        Credibility bio — to be supplied.
      </p>
      <p className="font-inter text-[13px] text-text-muted mt-4">
        Languages: to be confirmed
      </p>
    </div>
  );
}

export default function FacilitatorsSection() {
  return (
    <SectionWrapper id="facilitators" bg="sand">
      <div className="text-center">
        <Eyebrow className="mb-6">WHO WILL BE IN THE ROOM</Eyebrow>
        <h2 className="font-fraunces font-semibold text-[28px] md:text-[40px] leading-[1.15] text-navy max-w-[880px] mx-auto">
          Two facilitators from Allgorithm.ai for every session.
        </h2>
        <p className="font-inter text-[17px] text-text-primary leading-[1.55] max-w-[720px] mx-auto mt-6">
          Each on-campus session is led by two people from our team. One leads the strategic
          discussion. The other captures decisions, manages the agenda, and ensures every person in
          the room gets time to contribute.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[800px] mx-auto mt-14">
        <FacilitatorCard initials="AA" />
        <FacilitatorCard initials="BB" />
      </div>

      <p className="font-inter text-[15px] text-text-muted text-center mt-12">
        If you would like to know in advance which facilitators will be assigned to your session,
        ask during the diagnostic call.
      </p>
    </SectionWrapper>
  );
}