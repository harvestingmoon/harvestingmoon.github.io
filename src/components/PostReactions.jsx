import { useEffect, useState } from 'react';

const EMOJI = ['👍', '❤️', '🔥', '🤔'];

// shortcut: counts live in localStorage so they are per-visitor, not shared.
// Swap the read/write below for a counter API when shared numbers matter.
export default function PostReactions({ slug }) {
  const [state, setState] = useState({});

  useEffect(() => {
    try {
      setState(JSON.parse(localStorage.getItem(`react:${slug}`)) || {});
    } catch {
      setState({});
    }
  }, [slug]);

  const toggle = (emoji) => {
    const cur = state[emoji] || { n: 0, mine: false };
    const next = {
      ...state,
      [emoji]: { n: Math.max(0, cur.n + (cur.mine ? -1 : 1)), mine: !cur.mine },
    };
    setState(next);
    try {
      localStorage.setItem(`react:${slug}`, JSON.stringify(next));
    } catch {}
  };

  return (
    <div className="post-reactions">
      {EMOJI.map((emoji) => {
        const cur = state[emoji] || { n: 0, mine: false };
        return (
          <button
            key={emoji}
            className="reaction"
            aria-pressed={cur.mine}
            aria-label={`React with ${emoji}`}
            onClick={() => toggle(emoji)}
          >
            {emoji}
            {cur.n > 0 && <span>{cur.n}</span>}
          </button>
        );
      })}
    </div>
  );
}
