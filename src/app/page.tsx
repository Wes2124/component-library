"use client";

import { useState } from "react";
import { Button } from "../components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../components/ui/dropdown-menu";
import { Copy, Check, ChevronDown, Sun, Moon } from "lucide-react";
import styles from "./views.module.css";

type ComponentKey = "750k Views Card" | "Radar Loader" | "E-Card Designer";

const COMPONENT_PROMPTS: Record<ComponentKey, string> = {
  "750k Views Card": `# 750k Views Component

A sleek animated card component displaying view counts with a modern gradient design.

## Installation

No additional dependencies required - uses CSS modules.

## Files to create:

### 1. Component file (ViewsCard.tsx)
\`\`\`tsx
import styles from "./ViewsCard.module.css";

interface ViewsCardProps {
  count?: string;
  label?: string;
}

export default function ViewsCard({ count = "750k", label = "Views" }: ViewsCardProps) {
  return (
    <div className={styles.outer}>
      <div className={styles.dot}></div>
      <div className={styles.card}>
        <div className={styles.ray}></div>
        <div className={styles.text}>{count}</div>
        <div>{label}</div>
        <div className={\`\${styles.line} \${styles.topl}\`}></div>
        <div className={\`\${styles.line} \${styles.leftl}\`}></div>
        <div className={\`\${styles.line} \${styles.bottoml}\`}></div>
        <div className={\`\${styles.line} \${styles.rightl}\`}></div>
      </div>
    </div>
  );
}
\`\`\`

### 2. CSS Module file (ViewsCard.module.css)
\`\`\`css
.outer {
  width: 300px;
  height: 250px;
  border-radius: 10px;
  padding: 1px;
  background: radial-gradient(circle 230px at 0% 0%, #ffffff, #0c0d0d);
  position: relative;
}

@keyframes moveDot {
  0%,
  100% {
    top: 10%;
    right: 10%;
  }
  25% {
    top: 10%;
    right: calc(100% - 35px);
  }
  50% {
    top: calc(100% - 30px);
    right: calc(100% - 35px);
  }
  75% {
    top: calc(100% - 30px);
    right: 10%;
  }
}

.card {
  z-index: 1;
  width: 100%;
  height: 100%;
  border-radius: 9px;
  border: solid 1px #202222;
  background-size: 20px 20px;
  background: radial-gradient(circle 280px at 0% 0%, #444444, #0c0d0d);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  flex-direction: column;
  color: #fff;
}

.ray {
  width: 220px;
  height: 45px;
  border-radius: 100px;
  position: absolute;
  background-color: #c7c7c7;
  opacity: 0.4;
  box-shadow: 0 0 50px #fff;
  filter: blur(10px);
  transform-origin: 10%;
  top: 0%;
  left: 0;
  transform: rotate(40deg);
}

.card .text {
  font-weight: bolder;
  font-size: 4rem;
  background: linear-gradient(45deg, #000000 4%, #fff, #000);
  background-clip: text;
  color: transparent;
}
\`\`\`

## Usage

\`\`\`tsx
import ViewsCard from "./ViewsCard";

// Default usage
<ViewsCard />

// Custom values
<ViewsCard count="1.2M" label="Downloads" />
\`\`\`

## Features

- ✨ Modern gradient design
- 🎨 Customizable count and label
- 📱 Responsive design
- 🚀 No external dependencies
- 💫 Subtle glow effects

Perfect for dashboards, analytics displays, or any modern UI requiring elegant stat cards.`,

  "Radar Loader": `# Radar Loader Component

A sleek animated radar-style loader with rotating sweep effect and glowing elements.

## Installation

No additional dependencies required - uses pure CSS animations.

## Files to create:

### 1. Component file (RadarLoader.tsx)
\`\`\`tsx
import styles from "./RadarLoader.module.css";

interface RadarLoaderProps {
  size?: number;
}

export default function RadarLoader({ size = 150 }: RadarLoaderProps) {
  return (
    <div className={styles.loader} style={{ width: size, height: size }}>
      <span></span>
    </div>
  );
}
\`\`\`

### 2. CSS Module file (RadarLoader.module.css)
\`\`\`css
.loader {
  position: relative;
  width: 150px;
  height: 150px;
  background: transparent;
  border-radius: 50%;
  box-shadow: 25px 25px 75px rgba(0,0,0,0.55);
  border: 1px solid #333;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.loader::before {
  content: '';
  position: absolute;
  inset: 20px;
  background: transparent;
  border: 1px dashed #444;
  border-radius: 50%;
  box-shadow: inset -5px -5px 25px rgba(0,0,0,0.25),
  inset 5px 5px 35px rgba(0,0,0,0.25);
}

.loader::after {
  content: '';
  position: absolute;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 1px dashed #444;
  box-shadow: inset -5px -5px 25px rgba(0,0,0,0.25),
  inset 5px 5px 35px rgba(0,0,0,0.25);
}

.loader span {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 50%;
  height: 100%;
  background: transparent;
  transform-origin: top left;
  animation: radar81 2s linear infinite;
  border-top: 1px dashed #fff;
}

.loader span::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: seagreen;
  transform-origin: top left;
  transform: rotate(-55deg);
  filter: blur(30px) drop-shadow(20px 20px 20px seagreen);
}

@keyframes radar81 {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
\`\`\`

## Usage

\`\`\`tsx
import RadarLoader from "./RadarLoader";

// Default usage
<RadarLoader />

// Custom size
<RadarLoader size={200} />
\`\`\`

## Features

- 🎯 Radar-style rotating animation
- 💚 Glowing seagreen sweep effect
- 🎨 Multiple concentric circles
- 📏 Customizable size
- 🚀 Pure CSS animations
- 🌙 Dark theme optimized

Perfect for loading states, data processing indicators, or any modern UI requiring a sophisticated loader.`,

  "E-Card Designer": `# E-Card Designer Component

A beautiful animated designer card with wave effects and professional styling.

## Installation

No additional dependencies required - uses pure CSS animations.

## Files to create:

### 1. Component file (ECard.tsx)
\`\`\`tsx
interface ECardProps {
  title?: string;
  name?: string;
  playing?: boolean;
}

export default function ECard({ 
  title = "UI / EX Designer", 
  name = "MikeAndrewDesigner", 
  playing = true 
}: ECardProps) {
  return (
    <div className={\`e-card \${playing ? 'playing' : ''}\`}>
      <div className="image"></div>
      
      <div className="wave"></div>
      <div className="wave"></div>
      <div className="wave"></div>
      
      <div className="infotop">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="icon">
          <path fill="currentColor" d="M19.4133 4.89862L14.5863 2.17544C12.9911 1.27485 11.0089 1.27485 9.41368 2.17544L4.58674 4.89862C2.99153 5.7992 2 7.47596 2 9.2763V14.7235C2 16.5238 2.99153 18.2014 4.58674 19.1012L9.41368 21.8252C10.2079 22.2734 11.105 22.5 12.0046 22.5C12.6952 22.5 13.3874 22.3657 14.0349 22.0954C14.2204 22.018 14.4059 21.9273 14.5872 21.8252L19.4141 19.1012C19.9765 18.7831 20.4655 18.3728 20.8651 17.8825C21.597 16.9894 22 15.8671 22 14.7243V9.27713C22 7.47678 21.0085 5.7992 19.4133 4.89862ZM4.10784 14.7235V9.2763C4.10784 8.20928 4.6955 7.21559 5.64066 6.68166L10.4676 3.95848C10.9398 3.69152 11.4701 3.55804 11.9996 3.55804C12.5291 3.55804 13.0594 3.69152 13.5324 3.95848L18.3593 6.68166C19.3045 7.21476 19.8922 8.20928 19.8922 9.2763V9.75997C19.1426 9.60836 18.377 9.53091 17.6022 9.53091C14.7929 9.53091 12.1041 10.5501 10.0309 12.3999C8.36735 13.8847 7.21142 15.8012 6.68783 17.9081L5.63981 17.3165C4.69466 16.7834 4.10699 15.7897 4.10699 14.7235H4.10784ZM10.4676 20.0413L8.60933 18.9924C8.94996 17.0479 9.94402 15.2665 11.4515 13.921C13.1353 12.4181 15.3198 11.5908 17.6022 11.5908C18.3804 11.5908 19.1477 11.6864 19.8922 11.8742V14.7235C19.8922 15.2278 19.7589 15.7254 19.5119 16.1662C18.7615 15.3596 17.6806 14.8528 16.4783 14.8528C14.2136 14.8528 12.3781 16.6466 12.3781 18.8598C12.3781 19.3937 12.4861 19.9021 12.68 20.3676C11.9347 20.5316 11.1396 20.4203 10.4684 20.0413H10.4676Z"></path>
        </svg>
        <br />      
        {title}
        <br />
        <div className="name">{name}</div>
      </div>
    </div>
  );
}
\`\`\`

## Usage

\`\`\`tsx
import ECard from "./ECard";

// Default usage
<ECard />

// Custom values
<ECard title="Frontend Developer" name="JohnDoe" playing={false} />
\`\`\`

## Features

- 🌊 Animated wave effects
- 🎨 Beautiful gradient backgrounds
- 👤 Professional designer card layout
- ⚡ Customizable animation states
- 🚀 No external dependencies
- 📱 Responsive design

Perfect for team pages, portfolio displays, or any modern UI requiring elegant profile cards.`,
};

export default function ComponentLibrary() {
  const [copied, setCopied] = useState(false);
  const [selectedComponent, setSelectedComponent] =
    useState<ComponentKey>("750k Views Card");
  const [previewTheme, setPreviewTheme] = useState("dark");

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(COMPONENT_PROMPTS[selectedComponent]);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  const renderPreview = () => {
    switch (selectedComponent) {
      case "750k Views Card":
        return (
          <div className={styles.outer}>
            <div className={styles.dot}></div>
            <div className={styles.card}>
              <div className={styles.ray}></div>
              <div className={styles.text}>750k</div>
              <div>Views</div>
              <div className={`${styles.line} ${styles.topl}`}></div>
              <div className={`${styles.line} ${styles.leftl}`}></div>
              <div className={`${styles.line} ${styles.bottoml}`}></div>
              <div className={`${styles.line} ${styles.rightl}`}></div>
            </div>
          </div>
        );
      case "Radar Loader":
        return (
          <div className={styles.loader}>
            <span></span>
          </div>
        );
      case "E-Card Designer":
        return (
          <div className="e-card playing">
            <div className="image"></div>
            <div className="wave"></div>
            <div className="wave"></div>
            <div className="wave"></div>
            <div className="infotop">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="icon"
              >
                <path
                  fill="currentColor"
                  d="M19.4133 4.89862L14.5863 2.17544C12.9911 1.27485 11.0089 1.27485 9.41368 2.17544L4.58674 4.89862C2.99153 5.7992 2 7.47596 2 9.2763V14.7235C2 16.5238 2.99153 18.2014 4.58674 19.1012L9.41368 21.8252C10.2079 22.2734 11.105 22.5 12.0046 22.5C12.6952 22.5 13.3874 22.3657 14.0349 22.0954C14.2204 22.018 14.4059 21.9273 14.5872 21.8252L19.4141 19.1012C19.9765 18.7831 20.4655 18.3728 20.8651 17.8825C21.597 16.9894 22 15.8671 22 14.7243V9.27713C22 7.47678 21.0085 5.7992 19.4133 4.89862ZM4.10784 14.7235V9.2763C4.10784 8.20928 4.6955 7.21559 5.64066 6.68166L10.4676 3.95848C10.9398 3.69152 11.4701 3.55804 11.9996 3.55804C12.5291 3.55804 13.0594 3.69152 13.5324 3.95848L18.3593 6.68166C19.3045 7.21476 19.8922 8.20928 19.8922 9.2763V9.75997C19.1426 9.60836 18.377 9.53091 17.6022 9.53091C14.7929 9.53091 12.1041 10.5501 10.0309 12.3999C8.36735 13.8847 7.21142 15.8012 6.68783 17.9081L5.63981 17.3165C4.69466 16.7834 4.10699 15.7897 4.10699 14.7235H4.10784ZM10.4676 20.0413L8.60933 18.9924C8.94996 17.0479 9.94402 15.2665 11.4515 13.921C13.1353 12.4181 15.3198 11.5908 17.6022 11.5908C18.3804 11.5908 19.1477 11.6864 19.8922 11.8742V14.7235C19.8922 15.2278 19.7589 15.7254 19.5119 16.1662C18.7615 15.3596 17.6806 14.8528 16.4783 14.8528C14.2136 14.8528 12.3781 16.6466 12.3781 18.8598C12.3781 19.3937 12.4861 19.9021 12.68 20.3676C11.9347 20.5316 11.1396 20.4203 10.4684 20.0413H10.4676Z"
                ></path>
              </svg>
              <br />
              UI / EX Designer
              <br />
              <div className="name">MikeAndrewDesigner</div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b bg-card">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-foreground">
                Component Library
              </h1>
              <p className="text-muted-foreground">
                Copy-paste ready components for your projects
              </p>
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  className="min-w-[200px] justify-between"
                >
                  {selectedComponent}
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="min-w-[200px]">
                <DropdownMenuItem
                  onClick={() =>
                    setSelectedComponent("750k Views Card" as ComponentKey)
                  }
                >
                  750k Views Card
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() =>
                    setSelectedComponent("Radar Loader" as ComponentKey)
                  }
                >
                  Radar Loader
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() =>
                    setSelectedComponent("E-Card Designer" as ComponentKey)
                  }
                >
                  E-Card Designer
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
      {/* Main Content */}
      <div className="container mx-auto px-6 py-8">
        <div className="grid lg:grid-cols-2 gap-8 h-[calc(100vh-200px)]">
          {/* Left Panel - Code */}
          <div className="flex flex-col">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-foreground">
                Component Code
              </h2>
              <Button
                onClick={copyToClipboard}
                variant="outline"
                size="sm"
                className="flex items-center gap-2"
              >
                {copied ? (
                  <>
                    <Check className="h-4 w-4" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy className="h-4 w-4" />
                    Copy Code
                  </>
                )}
              </Button>
            </div>
            <div className="flex-1 bg-card border rounded-lg overflow-hidden">
              <pre className="h-full overflow-auto p-4 text-sm text-foreground font-mono leading-relaxed">
                <code>{COMPONENT_PROMPTS[selectedComponent]}</code>
              </pre>
            </div>
          </div>

          {/* Right Panel - Preview */}
          <div className="flex flex-col">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <h2 className="text-lg font-semibold text-foreground">
                  Live Preview
                </h2>
              </div>
              <div className="flex items-center gap-2">
                <Button
                  variant={previewTheme === "light" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setPreviewTheme("light")}
                  className="flex items-center gap-2"
                >
                  <Sun className="h-4 w-4" />
                  Light
                </Button>
                <Button
                  variant={previewTheme === "dark" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setPreviewTheme("dark")}
                  className="flex items-center gap-2"
                >
                  <Moon className="h-4 w-4" />
                  Dark
                </Button>
              </div>
            </div>
            <div
              className={`border rounded-lg flex items-center justify-center p-8 min-h-[300px] ${
                previewTheme === "light" ? "bg-white" : "bg-gray-900"
              }`}
            >
              {renderPreview()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
