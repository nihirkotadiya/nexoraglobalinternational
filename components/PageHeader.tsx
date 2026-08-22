import Container from "./Container";

export default function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <section className="relative overflow-hidden bg-navy-950 py-16 sm:py-20">
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />
      <div className="absolute -top-24 right-0 size-72 rounded-full bg-accent-600/20 blur-3xl" />
      <Container className="relative flex flex-col gap-4">
        <span className="inline-flex w-fit items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent-300 ring-1 ring-white/10">
          {eyebrow}
        </span>
        <h1 className="text-balance max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
          {title}
        </h1>
        <p className="text-balance max-w-xl text-base leading-relaxed text-slate-300">
          {description}
        </p>
      </Container>
    </section>
  );
}
