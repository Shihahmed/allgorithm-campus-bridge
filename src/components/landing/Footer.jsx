const CAMPAIGN_LINKS = [
  { label: "The Session", href: "#agenda" },
  { label: "Outcomes", href: "#outcomes" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Reserve a session", href: "#reserve" },
];

const ABOUT_LINKS = [
  { label: "Who we are", href: "#who-we-are" },
  { label: "Vision 2040 alignment", href: "#vision-2040" },
  { label: "FAQ", href: "#faq" },
];

const LEGAL_LINKS = [
  { label: "Privacy policy", href: "#" },
  { label: "Terms of use", href: "#" },
  { label: "Imprint", href: "#" },
];

function FooterColumn({ title, links }) {
  return (
    <div>
      <h4 className="font-inter font-semibold text-[14px] text-offwhite tracking-[0.12em] uppercase mb-4">
        {title}
      </h4>
      <ul className="space-y-2">
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              className="font-inter text-[14px] text-text-light leading-relaxed hover:text-copper transition-colors"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer id="footer" className="bg-dark-bg border-t border-white/10">
      <div className="mx-auto max-w-[1200px] px-5 md:px-8 pt-16 md:pt-24 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <span className="font-fraunces font-semibold text-[22px] text-offwhite">
              Allgorithm.ai
            </span>
            <p className="font-inter text-[14px] text-text-light mt-1 mb-5">
              AI for education. In Muscat.
            </p>
            <div className="font-inter text-[14px] text-text-light leading-[1.8] space-y-1">
              <p>Muscat, Sultanate of Oman</p>
              <p>Address to be confirmed</p>
            </div>
          </div>

          <FooterColumn title="The Campaign" links={CAMPAIGN_LINKS} />
          <FooterColumn title="About" links={ABOUT_LINKS} />
          <FooterColumn title="Legal" links={LEGAL_LINKS} />
        </div>

        {/* Bottom strip */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between gap-4">
          <p className="font-inter text-[13px] text-text-light">
            &copy; 2026 Allgorithm.ai — AI and digital transformation for education, based in Muscat,
            Sultanate of Oman.
          </p>
          <p className="font-inter text-[13px] text-text-light italic">
            This campaign is run as our contribution to Oman Vision 2040.
          </p>
        </div>
      </div>
    </footer>
  );
}