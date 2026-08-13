import { useEffect } from "react";

/**
 * Swaps the browser tab title when the visitor tabs away — a small, common
 * personality beat, harmless because it only ever shows while the tab isn't
 * being read anyway. Restores the real title on return.
 */
const AWAY_TITLE = "come back — AZY.01";

const TabTitleSwap = () => {
  useEffect(() => {
    const original = document.title;
    const onVisibility = () => {
      document.title = document.hidden ? AWAY_TITLE : original;
    };
    document.addEventListener("visibilitychange", onVisibility);
    return () => {
      document.removeEventListener("visibilitychange", onVisibility);
      document.title = original;
    };
  }, []);

  return null;
};

export default TabTitleSwap;
