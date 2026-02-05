"use client";

import { useEffect } from "react";

export default function DevToolsCleaner() {
  useEffect(() => {
    const removeDevTools = () => {
      try {
        document.querySelectorAll('[data-nextjs-dev-tools-button], #next-logo, [data-next-mark], [data-next-badge], [data-nextjs-dev-tools-menu]').forEach(el => el.remove());
        // also try common dev overlay selectors
        document.querySelectorAll('[id*="nextjs-dev"], [class*="nextjs-dev"]').forEach(el => el.remove());
      } catch {
        // ignore
      }
    };

    const observer = new MutationObserver(removeDevTools);
    observer.observe(document.body, { childList: true, subtree: true });

    // initial cleanup shortly after mount
    const t1 = setTimeout(removeDevTools, 50);
    const t2 = setTimeout(removeDevTools, 300);

    return () => {
      observer.disconnect();
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  return null;
}
