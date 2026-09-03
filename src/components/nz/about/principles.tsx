import { Reveal, Section, SectionLabel } from "../primitives";

const PRINCIPLES = [
  {
    title: "Useful over flashy",
    body: "A product should solve something real before it tries to impress.",
  },
  {
    title: "Open over opaque",
    body: "Developers should be able to understand the tools they depend on.",
  },
  {
    title: "Simple over unnecessarily complicated",
    body: "Complex technology should not require a complicated developer experience.",
  },
  {
    title: "Developer experience matters",
    body: "Installation, documentation, defaults, and APIs are part of the product.",
  },
  {
    title: "Security and privacy are product features",
    body: "They should be designed in, not added at the end.",
  },
  {
    title: "Ship, learn, improve",
    body: "Build the useful version, learn from real use, and keep making it better.",
  },
];

export function AboutPrinciples() {
  return (
    <Section ariaLabel="Principles">
      <div className="grid gap-12 md:grid-cols-[minmax(0,16rem)_minmax(0,1fr)] md:gap-20">
        <div>
          <Reveal>
            <SectionLabel>Principles</SectionLabel>
          </Reveal>
          <Reveal delay={60}>
            <h2 className="mt-8 nz-h2">
              How we want to build.
            </h2>
          </Reveal>
        </div>

        <ol className="border-t border-border">
          {PRINCIPLES.map((item, i) => (
            <li key={item.title}>
              <Reveal delay={i * 80}>
                <div className="grid gap-3 border-b border-border py-8 sm:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] sm:gap-10">
                  <h3 className="text-lg font-medium tracking-[-0.01em]">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {item.body}
                  </p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}
