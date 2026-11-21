import { useEffect, useState } from 'react';

const EMOJI = [
  { key: 'like', char: '👍' },
  { key: 'love', char: '❤️' },
  { key: 'fire', char: '🔥' },
  { key: 'think', char: '🤔' },
];

const BASE = 'https://abacus.jasoncameron.dev';
const NS = 'harvestingmoon.github.io';

// Counts are shared through abacus (free counter API, no signup). `mine` stays in
// localStorage so one device can't count itself twice. abacus only increments, so a
// reaction is one-way — no un-reacting. Counters expire after ~6 months of no hits.
export default function PostReactions({ slug }) {
  const [counts, setCounts] = useState({});
  const [mine, setMine] = useState({});

  useEffect(() => {
    try {
      setMine(JSON.parse(localStorage.getItem(`react:${slug}`)) || {});
    } catch {
      setMine({});
    }

    let live = true;
    const read = (text) => {
      try {
        return JSON.parse(text).value;
      } catch {
        return undefined; // abacus answers text/html, and "Key not found" for a fresh counter
      }
    };
    EMOJI.forEach(({ key }) => {
      fetch(`${BASE}/get/${NS}/react-${slug}-${key}`)
        .then((r) => r.text())
        .then((t) => {
          const v = read(t);
          if (live && typeof v === 'number') setCounts((c) => ({ ...c, [key]: v }));
        })
        .catch(() => {});
    });
    return () => {
      live = false;
    };
  }, [slug]);

  const react = async (key) => {
    if (mine[key]) return;
    const next = { ...mine, [key]: true };
    setMine(next);
    try {
      localStorage.setItem(`react:${slug}`, JSON.stringify(next));
    } catch {}
    setCounts((c) => ({ ...c, [key]: (c[key] || 0) + 1 }));
    try {
      const r = await fetch(`${BASE}/hit/${NS}/react-${slug}-${key}`);
      const v = JSON.parse(await r.text()).value;
      if (typeof v === 'number') setCounts((c) => ({ ...c, [key]: v }));
    } catch {
      /* keep the optimistic count; it is retried by the next visitor */
    }
  };

  return (
    <div className="post-reactions">
      {EMOJI.map(({ key, char }) => (
        <button
          key={key}
          className="reaction"
          aria-pressed={!!mine[key]}
          aria-label={`React with ${char}`}
          disabled={!!mine[key]}
          onClick={() => react(key)}
        >
          {char}
          {(counts[key] || 0) > 0 && <span>{counts[key]}</span>}
        </button>
      ))}
    </div>
  );
}
