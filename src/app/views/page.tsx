"use client";

import { useState } from "react";
import { Button } from "../../components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../../components/ui/dropdown-menu";
import { Copy, Check, ChevronDown, Sun, Moon } from "lucide-react";
import styles from "./views.module.css";

const COMPONENT_PROMPTS = {
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
};

export default function ViewsPage() {
  const [copied, setCopied] = useState(false);
  const [selectedComponent, setSelectedComponent] = useState("750k Views Card");
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
                  onClick={() => setSelectedComponent("750k Views Card")}
                >
                  750k Views Card
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => setSelectedComponent("Radar Loader")}
                >
                  Radar Loader
                </DropdownMenuItem>
                <DropdownMenuItem disabled>
                  More components coming soon...
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
                <p className="text-sm text-muted-foreground">
                  See how the component looks
                </p>
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
