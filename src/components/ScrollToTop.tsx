import { useState, useEffect, useRef, KeyboardEvent } from "react";
import { ChevronUp } from "lucide-react";

// TypeScript interface for props (if you want to extend in the future)
interface ScrollToTopProps {}

const ScrollToTop: React.FC<ScrollToTopProps> = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [announce, setAnnounce] = useState("");
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  // Show/hide button based on scroll position
  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.pageYOffset > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Focus management: if button disappears while focused, move focus to body
  useEffect(() => {
    if (!isVisible && document.activeElement === buttonRef.current) {
      (document.body as HTMLElement).focus();
    }
  }, [isVisible]);

  // Scroll to top and announce for screen readers
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setAnnounce("Scrolled to top");
    setTimeout(() => setAnnounce(""), 1000); // Clear announcement after 1s
    // Optionally, move focus to the first focusable element on the page
    // document.body.focus();
  };

  // Keyboard support for Enter and Space
  const handleKeyDown = (e: KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      scrollToTop();
    }
  };

  return (
    <>
      {/* Screen reader live region for announcements */}
      <div aria-live="polite" className="sr-only">
        {announce}
      </div>
      {isVisible && (
        <button
          ref={buttonRef}
          type="button"
          onClick={scrollToTop}
          onKeyDown={handleKeyDown}
          className="fixed bottom-8 right-8 z-50 glass rounded-full p-3 hover:bg-primary/20 transition-all duration-300 hover:scale-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
          aria-label="Scroll to top"
          title="Scroll to top"
          tabIndex={0}
          role="button"
        >
          <ChevronUp
            className="w-6 h-6 text-white"
            aria-hidden="true"
            focusable="false"
          />
        </button>
      )}
    </>
  );
};

export default ScrollToTop;