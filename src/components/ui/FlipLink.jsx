import { useRef, useEffect, forwardRef, useImperativeHandle } from "react";
import gsap from "gsap";

const FlipLink = forwardRef(({ text, icon }, ref) => {
  const topRef = useRef([]);
  const bottomRef = useRef([]);
  const iconTopRef = useRef(null);
  const iconBottomRef = useRef(null);
  const tl = useRef(null);

  const letters = text.split("");

  useEffect(() => {
    // Initial state
    gsap.set(bottomRef.current, { yPercent: 110 });
    if (iconBottomRef.current) {
      gsap.set(iconBottomRef.current, { yPercent: 100 });
    }

    tl.current = gsap.timeline({ paused: true });

    tl.current
      .to(
        topRef.current,
        {
          yPercent: -130,
          stagger: 0.03,
          duration: 0.3,
          ease: "power2.out",
        },
        0,
      )
      .to(
        bottomRef.current,
        {
          yPercent: 0,
          stagger: 0.03,
          duration: 0.3,
          ease: "power2.out",
        },
        0,
      );

    if (iconTopRef.current && iconBottomRef.current) {
      tl.current
        .to(iconTopRef.current, { yPercent: -130, duration: 0.3 }, 0.15)
        .to(iconBottomRef.current, { yPercent: 0, duration: 0.3 }, 0.15);
    }
  }, []);

  // Expose controls
  useImperativeHandle(ref, () => ({
    play: () => tl.current?.play(),
    reverse: () => tl.current?.reverse(),
  }));

  return (
    <div className="relative inline-flex items-center overflow-hidden leading-none">
      {/* TOP */}
      <div className="flex items-center">
        {letters.map((letter, i) => (
          <span
            key={i}
            ref={(el) => (topRef.current[i] = el)}
            className="inline-block"
            style={{ marginRight: letter === " " ? "0.25em" : "0.03em" }}
          >
            {letter}
          </span>
        ))}

        {icon && (
          <span ref={iconTopRef} className="inline-block ml-[0.2em]">
            {icon}
          </span>
        )}
      </div>

      {/* BOTTOM */}
      <div className="absolute inset-0 flex items-center">
        {letters.map((letter, i) => (
          <span
            key={i}
            ref={(el) => (bottomRef.current[i] = el)}
            className="inline-block"
            style={{ marginRight: letter === " " ? "0.25em" : "0.03em" }}
          >
            {letter}
          </span>
        ))}

        {icon && (
          <span ref={iconBottomRef} className="inline-block ml-[0.2em]">
            {icon}
          </span>
        )}
      </div>
    </div>
  );
});

export default FlipLink;
