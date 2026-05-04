import { useState } from "react";
import Eyebrow from "./Eyebrow";


function FormField({ label, required, helper, error, children }) {
  return (
    <div className="space-y-1.5">
      <label className="block font-inter font-semibold text-[14px] text-text-primary">
        {label} {required && <span className="text-copper">*</span>}
      </label>
      {children}
      {error ? (
        <p className="font-inter text-[13px] text-[#B33A2D]">{error}</p>
      ) : helper ? (
        <p className="font-inter text-[13px] text-text-muted">{helper}</p>
      ) : null}
    </div>
  );
}

const inputClass = "w-full h-12 px-4 font-inter text-[16px] text-text-primary bg-white border border-hairline rounded focus:border-navy focus:ring-[3px] focus:ring-navy/10 outline-none transition-all";
const selectClass = "w-full h-12 px-4 font-inter text-[16px] text-text-primary bg-white border border-hairline rounded focus:border-navy focus:ring-[3px] focus:ring-navy/10 outline-none transition-all appearance-none cursor-pointer";
const errorBorder = "border-[#B33A2D]";

export default function ReserveSection() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    institution: "",
    phone: "+968 ",

    notes: "",
  });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errs = {};
    if (!formData.fullName.trim()) errs.fullName = "Full name is required.";
    if (!formData.institution.trim()) errs.institution = "Institution name is required.";
    const digits = formData.phone.replace(/\D/g, "");
    if (digits.length < 7) errs.phone = "Please enter a valid phone number.";

    return errs;
  };

  const handlePhoneChange = (e) => {
    let val = e.target.value;
    // Ensure prefix stays
    if (!val.startsWith("+968")) {
      val = "+968 " + val.replace(/^\+968\s?/, "");
    }
    update("phone", val);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;
    setSubmitting(true);
    try {
      const res = await fetch("https://formspree.io/f/maqaordz", {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          full_name: formData.fullName,
          institution: formData.institution,
          phone: formData.phone,
          message: formData.notes,
          _subject: "New Lead – Allgorithm Website",
        }),
      });
      if (res.ok) {
        setSubmitted(true);
        setFormData({ fullName: "", institution: "", phone: "+968 ", notes: "" });
      }
    } finally {
      setSubmitting(false);
    }
  };

  const update = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  return (
    <section id="reserve" className="bg-navy py-16 md:py-24">
      <div className="mx-auto max-w-[1200px] px-5 md:px-8">
        <div className="text-center">
          <Eyebrow className="mb-6">RESERVE YOUR SESSION</Eyebrow>
          <h2 className="font-fraunces font-semibold text-[28px] md:text-[40px] leading-[1.15] text-offwhite max-w-[880px] mx-auto">
            Reserve your university's 2-hour session.
          </h2>
          <p className="font-inter text-[17px] text-text-light max-w-[720px] mx-auto mt-6 mb-12">
            We respond within 2 working days. No commitment until you confirm a date.
          </p>
        </div>

        <div className="max-w-[560px] mx-auto bg-offwhite rounded-xl p-8 md:p-10">
          {submitted ? (
            <div className="text-center py-8">
              <h3 className="font-fraunces font-semibold text-[28px] text-navy">
                Thank you! We will contact you shortly.
              </h3>
              <p className="font-inter text-[17px] text-text-primary mt-4 leading-[1.6]">
                We will be in touch within 2 working days to schedule the 30-minute diagnostic call.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              {/* Hidden fields */}
              <input type="hidden" name="_subject" value="New Lead – Allgorithm Website" />
              <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />

              <FormField label="Your full name" required error={errors.fullName}>
                <input
                  type="text"
                  name="full_name"
                  placeholder="Dr. Khalid Al-Hinai"
                  value={formData.fullName}
                  onChange={e => update("fullName", e.target.value)}
                  className={`${inputClass} ${errors.fullName ? errorBorder : ""}`}
                />
              </FormField>

              <FormField label="Institution name" required error={errors.institution} helper="Public, private, or applied sciences institutions all welcome">
                <input
                  type="text"
                  name="institution"
                  placeholder="e.g. Sultan Qaboos University"
                  value={formData.institution}
                  onChange={e => update("institution", e.target.value)}
                  className={`${inputClass} ${errors.institution ? errorBorder : ""}`}
                />
              </FormField>

              <FormField label="Phone number" required error={errors.phone} helper="We will call to schedule the diagnostic call">
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handlePhoneChange}
                  className={`${inputClass} ${errors.phone ? errorBorder : ""}`}
                  placeholder="+968 XXXX XXXX"
                />
              </FormField>

              <FormField label="Anything you would like us to focus on?" helper="Optional. The diagnostic call covers this in more depth.">
                <textarea
                  rows={3}
                  name="message"
                  placeholder="A topic, a recent event, a question — optional"
                  value={formData.notes}
                  onChange={e => update("notes", e.target.value)}
                  className={`${inputClass} h-auto py-3`}
                />
              </FormField>

              <button
                type="submit"
                disabled={submitting}
                className="w-full bg-copper text-white font-inter font-semibold text-[17px] py-4 rounded-lg hover:bg-copper-hover transition-colors disabled:opacity-60"
              >
                {submitting ? "Submitting..." : "Reserve session"}
              </button>
            </form>
          )}

          {!submitted && (
            <p className="font-inter text-[13px] text-text-muted text-center mt-6">
              We will use your information only to schedule and prepare the session. We will not
              share it with third parties. You can ask us to delete your details at any point.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}