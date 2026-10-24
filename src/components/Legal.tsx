import { prettyDate, site } from '@/site.config';

export type Section = { id: string; title: string; body: React.ReactNode };

/** Shared shell for the Privacy Policy and Terms: title, dates, summary, table of contents, numbered sections. */
export function LegalPage({ title, summary, sections }: { title: string; summary: React.ReactNode; sections: Section[] }) {
  return (
    <article className="wrap legal">
      <p className="eyebrow">{site.name}</p>
      <h1 className="display" style={{ marginTop: 10 }}>{title}</h1>
      <p className="meta">
        Effective {prettyDate(site.effectiveDate)} · Last updated {prettyDate(site.effectiveDate)}
      </p>
      <div className="tldr">{summary}</div>
      <nav className="toc" aria-label="Contents">
        <strong>Contents</strong>
        <ol>
          {sections.map((s) => (
            <li key={s.id}>
              <a href={`#${s.id}`}>{s.title}</a>
            </li>
          ))}
        </ol>
      </nav>
      {sections.map((s, i) => (
        <section key={s.id} aria-labelledby={s.id}>
          <h2 id={s.id}>
            {i + 1}. {s.title}
          </h2>
          {s.body}
        </section>
      ))}
    </article>
  );
}

export const Operator = () => (
  <>
    {site.operator.legalName}, {site.operator.address}, {site.operator.country}
  </>
);
