import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import ContactForm from "@/components/public/ContactForm";
import { site, whatsappLink } from "@/lib/site";
import ComingSoon from "@/components/ui/ComingSoon";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Call, email or visit BuildCraft Constructions at our Ramdaspeth office in Nagpur. Office hours, map and contact form.",
  openGraph: {
    title: "Contact BuildCraft Constructions",
    description: "Office address, phone, WhatsApp and enquiry form.",
  },
};

export default function ContactPage() {
  return (
    <>
      <div className="min-h-screen text-center ">
        <ComingSoon />
      </div>

      {/* <section className="border-b border-concrete-dark bg-white py-16 sm:py-20">
        <Container>
          <h1 className="font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
            Contact us
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-mute">
            Our office is on Wardha Road in Ramdaspeth. Walk in during working hours, or send
            a message and we will call you back.
          </p>
        </Container>
      </section>

      <section className="py-14 sm:py-20">
        <Container className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-start">
          <div className="space-y-6">
            <div className="border border-concrete-dark bg-white p-6">
              <h2 className="font-display text-lg font-semibold text-ink">Reach us</h2>
              <dl className="mt-4 space-y-4 text-sm">
                <div>
                  <dt className="text-ink-mute">Phone</dt>
                  <dd>
                    <a href={`tel:${site.phoneDisplay.replace(/\s/g, '')}`} className="font-medium text-ink hover:text-steel">
                      {site.phoneDisplay}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-ink-mute">Email</dt>
                  <dd>
                    <a href={`mailto:${site.email}`} className="font-medium text-ink hover:text-steel">
                      {site.email}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-ink-mute">Office</dt>
                  <dd className="font-medium text-ink">
                    {site.address.line1}
                    <br />
                    {site.address.line2}
                  </dd>
                </div>
                <div>
                  <dt className="text-ink-mute">Business hours</dt>
                  <dd className="font-medium text-ink">
                    {site.hours.map((h) => (
                      <span key={h.days} className="block">
                        {h.days}: {h.time}
                      </span>
                    ))}
                  </dd>
                </div>
              </dl>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex w-full items-center justify-center rounded-sm bg-[#1FA855] px-5 py-3 text-sm font-medium text-white hover:bg-[#188945]"
              >
                Chat on WhatsApp
              </a>
            </div>

            <div className="border border-concrete-dark bg-white">
              <iframe
                title="Map showing the BuildCraft Constructions office in Ramdaspeth, Nagpur"
                src={`https://maps.google.com/maps?q=${encodeURIComponent(site.mapQuery)}&output=embed`}
                className="h-64 w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <p className="border-t border-concrete px-4 py-3 text-xs text-ink-mute">
                Demo map area. Replace the query in lib/site.ts with the real office pin.
              </p>
            </div>
          </div>

          <ContactForm />
        </Container>
      </section> */}
    </>
  );
}
