"use client";

import React, {
  createContext,
  useContext,
  useEffect,
  useId,
  useRef,
  useState,
} from "react";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import { createPortal } from "react-dom";
import { X } from "lucide-react";

interface MorphingDialogContextType {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  uniqueId: string;
  triggerRef: React.RefObject<HTMLElement>;
}

const MorphingDialogContext = createContext<MorphingDialogContextType | null>(
  null,
);

function useMorphingDialog() {
  const context = useContext(MorphingDialogContext);
  if (!context) {
    throw new Error("useMorphingDialog must be used within MorphingDialog");
  }
  return context;
}

type MorphingDialogProps = {
  children: React.ReactNode;
  transition?: any;
};

export function MorphingDialog({ children, transition }: MorphingDialogProps) {
  const [isOpen, setIsOpen] = useState(false);
  const uniqueId = useId();
  const triggerRef = useRef<HTMLElement>(null);

  return (
    <MorphingDialogContext.Provider
      value={{ isOpen, setIsOpen, uniqueId, triggerRef }}
    >
      <MotionConfig transition={transition}>{children}</MotionConfig>
    </MorphingDialogContext.Provider>
  );
}

type MorphingDialogTriggerProps = {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
};

export function MorphingDialogTrigger({
  children,
  className,
  style,
}: MorphingDialogTriggerProps) {
  const { setIsOpen, isOpen, uniqueId, triggerRef } = useMorphingDialog();

  return (
    <motion.div
      ref={triggerRef as any}
      layoutId={`dialog-${uniqueId}`}
      onClick={() => setIsOpen(!isOpen)}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}

type MorphingDialogContainerProps = {
  children: React.ReactNode;
};

export function MorphingDialogContainer({
  children,
}: MorphingDialogContainerProps) {
  const { isOpen, setIsOpen, uniqueId } = useMorphingDialog();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
        >
          <motion.div
            onClick={(e) => e.stopPropagation()}
            layoutId={`dialog-${uniqueId}`}
            className="relative"
          >
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  );
}

type MorphingDialogContentProps = {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
};

export function MorphingDialogContent({
  children,
  className,
  style,
}: MorphingDialogContentProps) {
  return (
    <motion.div className={className} style={style}>
      {children}
    </motion.div>
  );
}

type MorphingDialogImageProps = {
  src: string;
  alt: string;
  className?: string;
};

export function MorphingDialogImage({
  src,
  alt,
  className,
}: MorphingDialogImageProps) {
  return (
    <motion.img
      src={src}
      alt={alt}
      className={className}
      layoutId="dialog-img"
    />
  );
}

type MorphingDialogTitleProps = {
  children: React.ReactNode;
  className?: string;
};

export function MorphingDialogTitle({
  children,
  className,
}: MorphingDialogTitleProps) {
  return (
    <motion.h3 className={className} layoutId="dialog-title">
      {children}
    </motion.h3>
  );
}

type MorphingDialogSubtitleProps = {
  children: React.ReactNode;
  className?: string;
};

export function MorphingDialogSubtitle({
  children,
  className,
}: MorphingDialogSubtitleProps) {
  return (
    <motion.p className={className} layoutId="dialog-subtitle">
      {children}
    </motion.p>
  );
}

type MorphingDialogDescriptionProps = {
  children: React.ReactNode;
  className?: string;
  disableLayoutAnimation?: boolean;
  variants?: any;
};

export function MorphingDialogDescription({
  children,
  className,
  disableLayoutAnimation,
  variants,
}: MorphingDialogDescriptionProps) {
  return (
    <motion.div
      className={className}
      {...(!disableLayoutAnimation && { layoutId: "dialog-description" })}
      {...(variants && {
        variants,
        initial: "initial",
        animate: "animate",
        exit: "exit",
      })}
    >
      {children}
    </motion.div>
  );
}

type MorphingDialogCloseProps = {
  className?: string;
};

export function MorphingDialogClose({ className }: MorphingDialogCloseProps) {
  const { setIsOpen } = useMorphingDialog();

  return (
    <button
      onClick={() => setIsOpen(false)}
      className={`absolute right-6 top-6 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none ${className}`}
    >
      <X className="h-4 w-4" />
      <span className="sr-only">Close</span>
    </button>
  );
}
