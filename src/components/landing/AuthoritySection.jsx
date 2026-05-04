import SectionWrapper from "./SectionWrapper";
import Eyebrow from "./Eyebrow";

export default function AuthoritySection() {
  return (
    <SectionWrapper id="who-we-are">
      <Eyebrow className="mb-6 md:text-left text-center">WHO IS RUNNING THIS CAMPAIGN</Eyebrow>
      <h2 className="font-fraunces font-semibold text-[28px] md:text-[40px] leading-[1.15] text-navy max-w-[880px] mb-12">
        Allgorithm.ai is an agency in Muscat, working only on AI and digital transformation
        in education.
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-16 max-w-[1100px]">
        {/* Left: founder photo placeholder */}
        <div className="md:col-span-2 flex justify-center md:justify-start">
          <img
            src="/images/authority-photo.jpg"
            alt="Founder, Allgorithm.ai"
            className="w-full max-w-[240px] md:max-w-none aspect-[4/5] object-cover rounded-lg"
          />
        </div>

        {/* Right: text */}
        <div className="md:col-span-3">
          <p className="font-inter font-semibold text-[19px] text-text-primary leading-[1.7] mb-5">
            Our team works on one thing — AI and digital transformation in education — for institutions in Oman and the wider region.
          </p>
          <p className="font-inter text-[19px] text-text-primary leading-[1.7] mb-5">
            Our goal is simple: help institutions move faster, make better decisions, and actually benefit from AI instead of just talking about it. We are building this from Muscat, close to our clients, because real transformation requires presence, trust, and responsibility.
          </p>
          <p className="font-inter text-[19px] text-text-primary leading-[1.7] mb-5">
            This 3-month campaign is not a marketing program. It is what we do when we believe a national conversation needs better facilitation than it is currently getting.
          </p>
          <p className="font-inter text-[19px] text-text-muted leading-[1.7]">
            We are based in Muscat. You can visit us. You can call us. We answer the phone.
          </p>

          <div className="mt-8 pt-8 border-t border-hairline">
            <img
              src="/images/authority-badge.png"
              alt="Signature"
              className="h-14 mb-3 opacity-80"
            />
            <p className="font-inter font-semibold text-[16px] text-navy">Sergey Belousov</p>
            <p className="font-inter text-[14px] text-text-muted mt-0.5">Founder, Allgorithm.ai</p>
            <a
              href="https://www.linkedin.com/in/sergey-belousov-it/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-3 font-inter text-[14px] font-medium text-[#0A66C2] hover:underline underline-offset-4"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#0A66C2" className="w-4 h-4 shrink-0">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              Follow me on LinkedIn
            </a>
          </div>
        </div>
      </div>


    </SectionWrapper>
  );
}