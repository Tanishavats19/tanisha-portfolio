import { contact } from "../data/contact";

export default function Contact() {
  return (
    <div className="relative left-1/2 w-screen -translate-x-1/2 bg-[var(--color-accent)] py-24">
      <div className="mx-auto max-w-2xl px-6 text-center">
        <h2 className="mb-3 font-[var(--font-display)] text-sm font-medium uppercase tracking-widest text-[var(--color-accent-soft)]">
          Contact
        </h2>

        <p className="mb-8 text-lg text-[var(--color-bg)]/80">
          Open to product roles and conversations — reach out anytime.
        </p>

        <a
          href={`mailto:${contact.email}`}
          className="inline-block font-[var(--font-display)] text-3xl font-semibold text-[var(--color-bg)] transition-opacity hover:opacity-80 sm:text-4xl"
        >
          {contact.email}
        </a>

        <div className="mt-10 flex items-center justify-center gap-6">
          {contact.links.map((link, index) => (
            <div key={link.label} className="flex items-center gap-6">
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-[var(--color-bg)]/70 transition-colors hover:text-[var(--color-bg)]"
              >
                {link.label}
              </a>
              {index < contact.links.length - 1 && (
                <span className="text-[var(--color-bg)]/30">·</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}