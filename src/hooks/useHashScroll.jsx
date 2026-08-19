import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function useHashScroll() {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;

    // Small delay lets the page render before scrolling
    const timer = setTimeout(() => {
      const el = document.querySelector(hash);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 100);

    return () => clearTimeout(timer);
  }, [hash]);
}