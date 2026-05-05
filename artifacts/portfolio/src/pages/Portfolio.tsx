import { useEffect } from "react";
import "../index.css";
import HeroSection from "../components/HeroSection";
import HowIThinkSection from "../components/HowIThinkSection";
import OperatingPrinciplesSection from "../components/OperatingPrinciplesSection";
import ProofIBuildSection from "../components/ProofIBuildSection";
import HarnessSection from "../components/HarnessSection";
import DetailSection from "../components/DetailSection";
import ExperienceModal from "../components/ExperienceModal";
import FooterSection from "../components/FooterSection";
import StatusBar from "../components/StatusBar";

export default function Portfolio() {
  useEffect(() => {
    // 1. Reveal sections on scroll
    const revealObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    for (const el of document.querySelectorAll(".reveal")) {
      revealObserver.observe(el);
    }

    // 2. Breadcrumb scroll-spy
    const tabsRoot = document.getElementById("statusbar-tabs");
    let scrollHandler: (() => void) | null = null;
    if (tabsRoot) {
      const tabs = Array.from(
        tabsRoot.querySelectorAll<HTMLAnchorElement>("a[data-section]")
      );
      const sectionIds = tabs.map((a) => a.dataset.section as string);
      const sections = sectionIds
        .map((id) => document.getElementById(id))
        .filter(Boolean) as HTMLElement[];

      let activeId: string | null = null;
      const setActive = (id: string | null) => {
        if (id === activeId) return;
        activeId = id;
        for (const tab of tabs) {
          const isActive = tab.dataset.section === id;
          tab.classList.toggle("is-active", isActive);
          if (isActive) {
            tab.scrollIntoView({
              behavior: "smooth",
              inline: "center",
              block: "nearest",
            });
          }
        }
      };

      const pickActive = () => {
        const probe = window.innerHeight * 0.35;
        let current = sections[0]?.id ?? null;
        for (const s of sections) {
          if (s.getBoundingClientRect().top - probe <= 0) current = s.id;
        }
        setActive(current);
      };

      pickActive();
      let ticking = false;
      scrollHandler = () => {
        if (ticking) return;
        ticking = true;
        requestAnimationFrame(() => {
          pickActive();
          ticking = false;
        });
      };
      window.addEventListener("scroll", scrollHandler, { passive: true });
    }

    // 3. Live clock
    const clock = document.getElementById("clock");
    const tickClock = () => {
      if (!clock) return;
      const now = new Date();
      const hh = String(now.getHours()).padStart(2, "0");
      const mm = String(now.getMinutes()).padStart(2, "0");
      clock.textContent = `${hh}:${mm}`;
    };
    tickClock();
    const clockInterval = setInterval(tickClock, 30_000);

    // 4. Vim-style keyboard scrolling
    const keydownVim = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement;
      if (target.matches("input, textarea")) return;
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      if (document.querySelector(".modal:not([hidden])")) return;
      const step = window.innerHeight * 0.85;
      switch (e.key) {
        case "j":
          window.scrollBy({ top: step, behavior: "smooth" });
          break;
        case "k":
          window.scrollBy({ top: -step, behavior: "smooth" });
          break;
        case "g":
          window.scrollTo({ top: 0, behavior: "smooth" });
          break;
        case "G":
          window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
          break;
      }
    };
    document.addEventListener("keydown", keydownVim);

    // 5. Modal open/close
    const openModal = (id: string) => {
      const modal = document.getElementById(id);
      if (!modal) return;
      modal.removeAttribute("hidden");
      document.body.classList.add("modal-open");
      (modal.querySelector(".modal__close") as HTMLElement | null)?.focus();
    };
    const closeModal = (modal: HTMLElement) => {
      modal.setAttribute("hidden", "");
      document.body.classList.remove("modal-open");
    };

    const clickHandler = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const opener = target.closest<HTMLElement>("[data-open-modal]");
      if (opener) {
        e.preventDefault();
        const modalId = opener.getAttribute("data-open-modal");
        if (modalId) openModal(modalId);
        return;
      }
      const closer = target.closest<HTMLElement>("[data-close-modal]");
      if (closer) {
        const modal = closer.closest<HTMLElement>(".modal");
        if (modal) closeModal(modal);
      }
    };
    document.addEventListener("click", clickHandler);

    const keydownModal = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      const open = document.querySelector<HTMLElement>(".modal:not([hidden])");
      if (open) closeModal(open);
    };
    document.addEventListener("keydown", keydownModal);

    return () => {
      revealObserver.disconnect();
      clearInterval(clockInterval);
      document.removeEventListener("keydown", keydownVim);
      document.removeEventListener("click", clickHandler);
      document.removeEventListener("keydown", keydownModal);
      if (scrollHandler) window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  return (
    <>
      <HeroSection />
      <HowIThinkSection />
      <OperatingPrinciplesSection />
      <ProofIBuildSection />
      <HarnessSection />
      <DetailSection />
      <ExperienceModal />
      <FooterSection />
      <StatusBar />
    </>
  );
}
