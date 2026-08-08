"use client";

import { ArrowUpRight, ShieldCheck } from "lucide-react";
import { PointerEvent, useEffect, useRef, useState } from "react";

type HoldToSubmitButtonProps = {
  disabled: boolean;
  loading: boolean;
  label: string;
  className?: string;
};

const HOLD_DURATION = 1600;

export default function HoldToSubmitButton({ disabled, loading, label, className = "" }: HoldToSubmitButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const frameRef = useRef<number | null>(null);
  const startedAtRef = useRef(0);
  const [holding, setHolding] = useState(false);
  const [progress, setProgress] = useState(0);

  const stopHold = (reset = true) => {
    if (frameRef.current !== null) cancelAnimationFrame(frameRef.current);
    frameRef.current = null;
    startedAtRef.current = 0;
    setHolding(false);
    if (reset) setProgress(0);
  };

  useEffect(() => () => {
    if (frameRef.current !== null) cancelAnimationFrame(frameRef.current);
  }, []);

  useEffect(() => {
    if (disabled || loading) stopHold();
  }, [disabled, loading]);

  const submitForm = () => {
    const form = buttonRef.current?.form;
    if (!form || !form.reportValidity()) {
      stopHold();
      return;
    }
    form.requestSubmit();
  };

  const beginHold = () => {
    if (disabled || loading || holding) return;
    const form = buttonRef.current?.form;
    if (!form || !form.reportValidity()) return;

    setHolding(true);
    setProgress(0);
    startedAtRef.current = performance.now();

    const update = (now: number) => {
      const nextProgress = Math.min(100, ((now - startedAtRef.current) / HOLD_DURATION) * 100);
      setProgress(nextProgress);
      if (nextProgress >= 100) {
        stopHold(false);
        submitForm();
        return;
      }
      frameRef.current = requestAnimationFrame(update);
    };

    frameRef.current = requestAnimationFrame(update);
  };

  const handlePointerDown = (event: PointerEvent<HTMLButtonElement>) => {
    if (event.button !== 0) return;
    event.preventDefault();
    event.currentTarget.setPointerCapture(event.pointerId);
    beginHold();
  };

  const handlePointerEnd = (event: PointerEvent<HTMLButtonElement>) => {
    if (event.currentTarget.hasPointerCapture(event.pointerId)) event.currentTarget.releasePointerCapture(event.pointerId);
    if (progress < 100) stopHold();
  };

  const buttonText = loading
    ? "Sending…"
    : disabled
      ? "Complete security check"
      : holding
        ? `Keep holding ${Math.round(progress)}%`
        : `Hold to ${label}`;

  return <button
    ref={buttonRef}
    type="button"
    className={`hold-submit ${holding ? "is-holding" : ""} ${className}`.trim()}
    disabled={disabled || loading}
    aria-label={disabled ? "Complete the Cloudflare security check first" : `Hold to ${label}. Keyboard users can press Enter.`}
    onPointerDown={handlePointerDown}
    onPointerUp={handlePointerEnd}
    onPointerCancel={handlePointerEnd}
    onKeyDown={(event) => {
      if (event.key === "Enter") {
        event.preventDefault();
        submitForm();
      }
    }}
    onClick={(event) => event.preventDefault()}
  >
    <span className="hold-submit-progress" style={{ transform: `scaleX(${progress / 100})` }} aria-hidden="true" />
    <span className="hold-submit-label">{disabled && !loading ? <ShieldCheck size={16} /> : null}{buttonText}<ArrowUpRight size={16} /></span>
  </button>;
}
