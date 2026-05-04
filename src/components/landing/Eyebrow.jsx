export default function Eyebrow({ children, className = "" }) {
  return (
    <span className={`block font-inter font-semibold text-[13px] uppercase tracking-[0.12em] text-copper ${className}`}>
      {children}
    </span>
  );
}