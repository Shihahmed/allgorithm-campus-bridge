export default function SectionWrapper({ id, bg = "offwhite", padding = "default", children, className = "" }) {
  const bgClass = bg === "sand" ? "bg-sand" : bg === "navy" ? "bg-navy" : "bg-offwhite";
  const padClass = padding === "large" 
    ? "py-20 md:py-32" 
    : padding === "default" 
    ? "py-16 md:py-24" 
    : "py-16 md:py-24";

  return (
    <section id={id} className={`${bgClass} ${padClass} ${className}`}>
      <div className="mx-auto max-w-[1200px] px-5 md:px-8">
        {children}
      </div>
    </section>
  );
}