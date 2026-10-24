// Lists [PLACEHOLDER] values left in src/site.config.ts.
// `npm run build` only warns; `npm run lint:placeholders` fails (use it in CI before launch).
import { readFileSync } from 'node:fs';

const src = readFileSync(new URL('../src/site.config.ts', import.meta.url), 'utf8')
  .split('\n')
  .filter((l) => !l.trim().startsWith('//'))
  .join('\n');
const hits = [...src.matchAll(/'\[([A-Z][^\]']*)\]'/g)].map((m) => m[1]);

if (hits.length) {
  console.warn(`\n⚠  ${hits.length} placeholder(s) left in src/site.config.ts:`);
  for (const h of hits) console.warn(`   - [${h}]`);
  console.warn('   Fill these in before publishing the Privacy Policy and Terms.\n');
  if (process.argv.includes('--strict')) process.exit(1);
} else {
  console.log('✓ No placeholders left in site.config.ts');
}
