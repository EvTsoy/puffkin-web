type Mood = 'smug' | 'wink' | 'shocked' | 'calm' | 'annoyed';

const BODY = (
  <>
    <circle cx="48" cy="80" r="32" />
    <circle cx="80" cy="58" r="40" />
    <circle cx="114" cy="76" r="32" />
    <circle cx="30" cy="96" r="20" />
    <circle cx="132" cy="96" r="20" />
    <rect x="28" y="76" width="106" height="40" rx="20" />
  </>
);

const FACES: Record<Mood, { d: string; dots?: [number, number, number][]; whites?: [number, number, number][]; mouth?: boolean }> = {
  smug: { d: 'M55 76h18M89 76h18M89 62l18-6M69 96q13 8 26-5', dots: [[64, 82, 5], [98, 82, 5]] },
  wink: { d: 'M90 64l16-6M56 66l14 3M88 80q8-6 16 0M68 96q14 9 28-4', dots: [[60, 80, 5]] },
  shocked: { d: 'M55 60l15-4M107 60l-15-4', dots: [[64, 78, 3.5], [98, 78, 3.5]], whites: [[64, 78, 9], [98, 78, 9]], mouth: true },
  calm: { d: 'M57 79q7 6 14 0M91 79q7 6 14 0M73 95q8 6 16 0' },
  annoyed: { d: 'M56 81h16M90 81h16M55 69l16 5M107 69l-16 5M70 99h22' },
};

/** The Puffkin character. Decorative by default; pass `label` to make it meaningful to screen readers. */
export function Puffkin({ mood = 'smug', size = 160, label, className }: { mood?: Mood; size?: number; label?: string; className?: string }) {
  const f = FACES[mood];
  return (
    <svg
      className={className}
      width={size}
      height={(size * 106) / 146}
      viewBox="8 16 146 106"
      role={label ? 'img' : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
    >
      <g fill="var(--lime-deep)" transform="translate(0 5)">{BODY}</g>
      <g fill="var(--lime)">{BODY}</g>
      {f.whites?.map(([x, y, r]) => (
        <circle key={`w${x}`} cx={x} cy={y} r={r} fill="#F4F6EE" stroke="var(--ink)" strokeWidth="4" />
      ))}
      <path d={f.d} fill="none" stroke="var(--ink)" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
      {f.dots?.map(([x, y, r]) => <circle key={`d${x}`} cx={x} cy={y} r={r} fill="var(--ink)" />)}
      {f.mouth && <ellipse cx="81" cy="101" rx="6" ry="8" fill="var(--ink)" />}
    </svg>
  );
}
