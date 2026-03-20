import { useEffect, useRef } from "react";

/**
 * FadeIn
 * Wraps children in an element that animates into view on scroll.
 *
 * Props:
 *   direction  – "bottom" | "left" | "right"  (default: "bottom")
 *   delay      – CSS delay string, e.g. "0.2s"           (default: "0s")
 *   threshold  – IntersectionObserver threshold           (default: 0.15)
 *   duration   – CSS duration string, e.g. "0.7s"        (default: "0.7s")
 *   className  – extra classes on the wrapper
 *   as         – element tag                              (default: "div")
 */
export default function FadeIn({
  children,
  direction = "bottom",
  delay = "0s",
  threshold = 0.15,
  duration = "0.7s",
  className = "",
  as: Tag = "div",
}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
          observer.disconnect();
        }
      },
      { threshold, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  const dirClass =
    direction === "left"  ? "from-left"  :
    direction === "right" ? "from-right" :
                            "from-bottom";

  return (
    <Tag
      ref={ref}
      className={`fade-in-ready ${dirClass} ${className}`}
      style={{ transitionDelay: delay, transitionDuration: duration }}
    >
      {children}
    </Tag>
  );
}