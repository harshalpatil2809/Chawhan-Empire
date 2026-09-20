import type { Metadata } from 'next';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import SmartImage from '@/components/ui/SmartImage';
import StatsSection from '@/components/public/StatsSection';
import CTASection from '@/components/public/CTASection';
import { team, values } from '@/data/company';
import { img } from '@/data/images';

export const metadata: Metadata = {
  title: 'About us',
  description:
    'BuildCraft Constructions has built homes, offices and retail developments across Maharashtra since 2011. Meet the team and how we work.',
  openGraph: {
    title: 'About BuildCraft Constructions',
    description: 'A Nagpur construction firm, building since 2011.'
  }
};

export default function AboutPage() {
  return (
    <>

    <div className='min-h-screen text-center '>

      <h1>Coming Soon</h1>
      </div>
      {/* <section className="border-b border-concrete-dark bg-white py-16 sm:py-20">
        <Container className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <h1 className="font-display text-4xl font-semibold leading-tight tracking-tight text-ink sm:text-5xl">
              A construction company that finishes what it starts
            </h1>
            <p className="mt-6 text-base leading-relaxed text-ink-mute">
              BuildCraft Constructions began in 2011 with a two-person team and a single
              residential project in Manish Nagar. Fifteen years later we run residential,
              commercial and turnkey work across Nagpur, Wardha, Amravati, Bhandara and Pune,
              with 45 engineers, supervisors and site staff on the payroll.
            </p>
            <p className="mt-4 text-base leading-relaxed text-ink-mute">
              We kept one thing from those early days: the person who quotes your project is
              the person accountable for delivering it. No handing you to a different team
              after the agreement is signed.
            </p>
          </div>
          <div className="aspect-[4/3] bg-concrete">
            <SmartImage
              src={img.teamMeeting}
              alt="BuildCraft engineers reviewing drawings at the Nagpur office"
            />
          </div>
        </Container>
      </section>

      <StatsSection />

      <section className="py-20 sm:py-24">
        <Container className="grid gap-10 lg:grid-cols-2">
          <div className="border border-concrete-dark bg-white p-8">
            <h2 className="font-display text-xl font-semibold text-ink">Our mission</h2>
            <p className="mt-3 text-[15px] leading-relaxed text-ink-mute">
              To make construction predictable for the people paying for it. Clear scope,
              honest estimates, measured billing and a handover date we can defend.
            </p>
          </div>
          <div className="border border-concrete-dark bg-white p-8">
            <h2 className="font-display text-xl font-semibold text-ink">Our vision</h2>
            <p className="mt-3 text-[15px] leading-relaxed text-ink-mute">
              To be the firm central Maharashtra calls first for high-value construction,
              known less for how much we build and more for how few surprises there are on
              the way.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-concrete/40 py-20 sm:py-24">
        <Container>
          <SectionHeading
            title="How we work"
            intro="Four rules that decide what we take on and how we run a site."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {values.map((v) => (
              <div key={v.title} className="border border-concrete-dark bg-white p-6">
                <h3 className="font-display text-base font-semibold text-ink">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-mute">{v.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-24">
        <Container>
          <SectionHeading
            title="The people running your project"
            intro="Every project is assigned to a named engineer who reports directly to one of these four."
          />
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member) => (
              <article key={member.name}>
                <div className="aspect-[3/4] bg-concrete">
                  <SmartImage src={member.image} alt={`${member.name}, ${member.role}`} />
                </div>
                <h3 className="mt-4 font-display text-base font-semibold text-ink">
                  {member.name}
                </h3>
                <p className="text-sm text-steel">{member.role}</p>
                <p className="mt-2 text-sm leading-relaxed text-ink-mute">{member.bio}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <CTASection /> */}
    </>
  );
}
