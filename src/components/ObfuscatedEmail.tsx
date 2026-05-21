'use client';

import { useEffect, useState } from 'react';

type Props = {
  user: string;
  domain: string;
  className?: string;
};

/**
 * Renders an email address that is assembled at hydration time so the literal
 * "user@domain" string never appears in the server-rendered HTML. This makes
 * the address invisible to the vast majority of (HTML-only) email harvesters
 * while preserving a real, clickable mailto: link for humans and accessibility.
 *
 * Pre-hydration fallback: "user [at] domain" plain text (no link, not
 * harvestable as an email, still legible to users without JS).
 */
export default function ObfuscatedEmail({ user, domain, className }: Props) {
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  if (!hydrated) {
    return (
      <span className={className}>
        {user} [at] {domain}
      </span>
    );
  }

  const address = `${user}@${domain}`;
  return (
    <a href={`mailto:${address}`} className={className}>
      {address}
    </a>
  );
}
