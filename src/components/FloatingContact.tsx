"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function FloatingContact() {

  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("Website Design");

  return (
    <div className="floating-contact">

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{opacity:0, y:30, scale:.9}}
            animate={{opacity:1, y:0, scale:1}}
            exit={{opacity:0, y:30, scale:.9}}
            className="floating-contact-panel"
            id="floating-project-panel"
          >
            <div className="floating-contact-status"><span /> Available for select projects</div>
            <h3>Start a project.</h3>
            <p>What are you interested in building?</p>

            <div className="floating-contact-options">

              {[
                "Website Design",
                "Web Application",
                "AI Product",
                "Website Redesign"
              ].map(item => (
                <button
                  key={item}
                  type="button"
                  className={selected === item ? "is-selected" : ""}
                  onClick={() => setSelected(item)}
                >
                  <span>{item}</span><i>{selected === item ? "✓" : "→"}</i>
                </button>
              ))}

            </div>

            <a
              href={`/contact?project=${encodeURIComponent(selected)}`}
              className="floating-contact-cta"
            >
              Continue to project inquiry <span>↗</span>
            </a>

          </motion.div>
        )}
      </AnimatePresence>


      <button
        onClick={() => setOpen(!open)}
        className="floating-contact-trigger"
        aria-expanded={open}
        aria-controls="floating-project-panel"
      >
        {open ? "Close" : "Start Project"}<span>{open ? "×" : "↗"}</span>
      </button>

    </div>
  );
}
