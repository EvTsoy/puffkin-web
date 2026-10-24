'use client';

import { useState } from 'react';

/** Copies the support email; announces the result to screen readers. */
export function CopyEmail({ email, className }: { email: string; className?: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      type="button"
      className={className}
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(email);
          setCopied(true);
          setTimeout(() => setCopied(false), 2000);
        } catch {
          window.prompt('Copy this email address:', email);
        }
      }}
    >
      <span aria-live="polite">{copied ? 'Copied ✓' : 'Copy address'}</span>
    </button>
  );
}
