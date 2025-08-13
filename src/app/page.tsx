"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Copy, Check, ChevronDown, Sun, Moon } from "lucide-react";
import styles from "./views.module.css";
import {
  DotsGridBackground,
  TextType,
  Marquee,
  MarqueeDemo,
} from "@/reactbits";

type ComponentKey =
  | "750k Views Card"
  | "Radar Loader"
  | "E-Card Designer"
  | "Flip Card"
  | "Generating Loader"
  | "Card Hover Effect"
  | "Dots Grid Background"
  | "Text Type"
  | "Marquee";

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

  "Flip Card": `# Flip Card Component

A realistic credit card component with flip animation revealing the back side on hover.

## Installation

No additional dependencies required - uses CSS modules.

## Files to create:

### 1. Component file (FlipCard.tsx)
\`\`\`tsx
import styles from "./FlipCard.module.css";

interface FlipCardProps {
  cardType?: string;
  cardNumber?: string;
  expiryDate?: string;
  holderName?: string;
  cvv?: string;
}

export default function FlipCard({ 
  cardType = "MASTERCARD",
  cardNumber = "9759 2484 5269 6576",
  expiryDate = "1 2 / 2 4",
  holderName = "BRUCE WAYNE",
  cvv = "***"
}: FlipCardProps) {
  return (
    <div className={styles.flipCard}>
      <div className={styles.flipCardInner}>
        <div className={styles.flipCardFront}>
          <p className={styles.heading8264}>{cardType}</p>
          <svg className={styles.logo} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="36" height="36" viewBox="0 0 48 48">
            <path fill="#ff9800" d="M32 10A14 14 0 1 0 32 38A14 14 0 1 0 32 10Z"></path>
            <path fill="#d50000" d="M16 10A14 14 0 1 0 16 38A14 14 0 1 0 16 10Z"></path>
            <path fill="#ff3d00" d="M18,24c0,4.755,2.376,8.95,6,11.48c3.624-2.53,6-6.725,6-11.48s-2.376-8.95-6-11.48 C20.376,15.05,18,19.245,18,24z"></path>
          </svg>
          <svg version="1.1" className={styles.chip} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30px" height="30px" viewBox="0 0 50 50">
            <image width="50" height="50" x="0" y="0" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAMAAAAp4XiDAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAB6VBMVEUAAACNcTiVeUKVeUOYfEaafEeUeUSYfEWZfEaykleyklaXe0SWekSZZjOYfEWYe0WXfUWXe0WcgEicfkiXe0SVekSXekSWekKYe0a9nF67m12ZfUWUeEaXfESVekOdgEmVeUWWekSniU+VeUKVeUOrjFKYfEWliE6WeESZe0GSe0WYfES7ml2Xe0WXeESUeEOWfEWcf0eWfESXe0SXfEWYekSVeUKXfEWxklawkVaZfEWWekOUekOWekSYfESZe0eXekWYfEWZe0WZe0eVeUSWeETAnmDCoWLJpmbxy4P1zoXwyoLIpWbjvXjivnjgu3bfu3beunWvkFWxkle/nmDivXiWekTnwXvkwHrCoWOuj1SXe0TEo2TDo2PlwHratnKZfEbQrWvPrWuafUfbt3PJp2agg0v0zYX0zYSfgkvKp2frxX7mwHrlv3rsxn/yzIPgvHfduXWXe0XuyIDzzISsjVO1lVm0lFitjVPzzIPqxX7duna0lVncuHTLqGjvyIHeuXXxyYGZfUayk1iyk1e2lln1zYTEomO2llrbtnOafkjFpGSbfkfZtXLhvHfkv3nqxH3mwXujhU3KqWizlFilh06khk2fgkqsjlPHpWXJp2erjVOhg0yWe0SliE+XekShhEvAn2D///+gx8TWAAAARnRSTlMACVCTtsRl7Pv7+vxkBab7pZv5+ZlL/UnU/f3SJCVe+Fx39naA9/75XSMh0/3SSkia+pil/KRj7Pr662JPkrbP7OLQ0JFOijI1MwAAAAFiS0dEorDd34wAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAHdElNRQfnAg0IDx2lsiuJAAACLElEQVRIx2NgGAXkAUYmZhZWPICFmYkRVQcbOwenmzse4MbFzc6DpIGXj8PD04sA8PbhF+CFaxEU8iWkAQT8hEVgOkTF/InR4eUVICYO1SIhCRMLDAoKDvFDVhUaEhwUFAjjSUlDdMiEhcOEItzdI6OiYxA6YqODIt3dI2DcuDBZsBY5eVTr4xMSYcyk5BRUOXkFsBZFJTQnp6alQxgZmVloUkrKYC0qqmji2WE5EEZuWB6alKoKdi35YQUQRkFYPpFaCouKIYzi6EDitJSUlsGY5RWVRGjJLyxNy4ZxqtIqqvOxaVELQwZFZdkIJVU1RSiSalAt6rUwUBdWG1CP6pT6gNqwOrgCdQyHNYR5YQFhDXj8MiK1IAeyN6aORiyBjByVTc0FqBoKWpqwRCVSgilOaY2OaUPw29qjOzqLvTAchpos47u6EZyYnngUSRwpuTe6D+6qaFQdOPNLRzOM1dzhRZyW+CZouHk3dWLXglFcFIflQhj9YWjJGlZcaKAVSvjyPrRQ0oQVKDAQHlYFYUwIm4gqExGmBSkutaVQJeomwViTJqPK6OhCy2Q9sQBk8cY0DxjTJw0lAQWK6cOKfgNhpKK7ZMpUeF3jPa28BCET amiEqJKM+X1gxvWXpoUjVIVPnwErw71nmpgiqiQGBjNzbgs3j1nus+fMndc+Cwm0T52/oNR9lsdCSy25ra7Tq1cbWjpXV3sHRCb1idXZ0sGdltXNxRateRwHRAACYHutzk/2I5QAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMy0wMi0xM1QwODoxNToyOSswMDowMEUnN7UAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjMtMDItMTNUMDg6MTU6MjkrMDA6MDA0eo8JAAAAKHRFWHRkYXRlOnRpbWVzdGFtcAAyMDIzLTAyLTEzVDA4OjE1OjI5KzAwOjAwY2+u1gAAAABJRU5ErkJggg=="></image>
          </svg>
          <svg version="1.1" className={styles.contactless} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20px" height="20px" viewBox="0 0 50 50">
            <image width="50" height="50" x="0" y="0" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAQAAAC0NkA6AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAJcEhZcwAACxMAAAsTAQCanBgAAAAHdElNRQfnAg0IEzgIwaKTAAADDklEQVRYw+1XS0iUURQ+f5qPyjQflGRFEEFK76koKGxRbWyVVLSOgsCgwjZBJJYuKogSIoOonUK4q3U0WVBWFPZYiIE6kuArG3VGzK/FfPeMM/MLt99/NuHdfPd888/57jn3nvsQWWj/VcMlvMMd5KRTogqx9iCdIjUUmcGR9ImUYowyP3xNGQJoRLVaZ2DaZf8kyjEJALhI28ELioyiwC+Rc3QZwRYyO/DH51hQgWm6DMIh10KmD4u9O16K49itVoPOAmcGAWWOepXIRScAoJZ2Frro8oN+EyTT6lWkkg6msZfMSR35QTJmjU0g15tIGSJ08ZZMJkJkHpNZgSkyXosS13TkJpZ62mPIJvOSzC1bp8vRhhCakEk7G9/o4gmZdbpsTcKu0m63FbnBP9Qrc15zbkbemfgNDtEOI8NO5L5O9VYyRYgmJayZ9nPaxZrSjW4+F6Uw9yQqIiIZwhp2huQTf6OIvCZyGM6gDJBZbyXifJXr7FZjGXsdxADxI7HUJFB6iWvsIhFpkoiIiGTJfjJfiCuJg2ZEspq9EHGVpYgzKqwJqSAOEwuJQ/pxPvE3cYltJCLdxBLiSKKIE5HxJKcTRNeadxfhDiuYw44zVs1dxKwRk/uCxIiQkxKBsSctRVAge9g1E15EHE6yRUaJecRxcWlukdRIbGFOSZCMWQA/iWauIP3slREHXPyliqBcrrD71Amz Z+rD1Mt2Yr8TZc/UR4/YtFnbijnHi3UrN9vKQ9rPaJf867ZiaqDB+rzeKYmd3pNa6fuI75MiC0uXXSR5aEMf7s7a6r/PudVXkjFb/SsrCRfROk0Fx6+H1i9kkTGn/E1vEmt1m089fh+RKdQ5O+xNJPUicUIjO0Dm7HwvErEr0YxeibL1StSh37STafE4I7zcBdRq1DiOkdmlTJVnkQTBTS7X1FYyvfO4piaInKbDCDaT2anLudYXCRFsQBgAcIF2/Okwgvz5+Z4tsw118dzruvIvjhTB+HOuWy8UvovEH6beitBKxDyxm9MmISKCWrzB7bSlaqGlsf0FC0gMjzTg6GgAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjMtMDItMTNUMDg6MTk6NTYrMDA6MDCjlq7LAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIzLTAyLTEzVDA4OjE5OjU2KzAwOjAw0ssWdwAAACh0RVh0ZGF0ZTp0aW1lc3RhbXAAMjAyMy0wMi0xM1QwODoxOTo1Nisw MDowMIXeN6gAAAAASUVORK5CYII="></image>
          </svg>
          <p className={styles.number}>{cardNumber}</p>
          <p className={styles.validThru}>VALID THRU</p>
          <p className={styles.date8264}>{expiryDate}</p>
          <p className={styles.cardName}>{holderName}</p>
        </div>
        <div className={styles.flipCardBack}>
          <div className={styles.strip}></div>
          <div className={styles.mstrip}></div>
          <div className={styles.sstrip}>
            <p className={styles.code}>{cvv}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
\`\`\`

### 2. CSS Module file (FlipCard.module.css)
\`\`\`css
.flipCard {
  background-color: transparent;
  width: 15em;
  height: 9em;
  perspective: 1000px;
  font-family: sans-serif;
}

.flipCardInner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
}

.flipCard:hover .flipCardInner {
  transform: rotateY(180deg);
}

.flipCardFront, .flipCardBack {
  box-shadow: 0 8px 14px 0 rgba(0,0,0,0.2);
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  border-radius: 1rem;
}

.flipCardFront {
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 2px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -1px 0px inset;
  background-color: #171717;
}

.flipCardBack {
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 2px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -1px 0px inset;
  background-color: #171717;
  transform: rotateY(180deg);
}
\`\`\`

## Usage

\`\`\`tsx
import FlipCard from "./FlipCard";

// Default usage
<FlipCard />

// Custom values
<FlipCard 
  cardType="VISA" 
  cardNumber="4532 1234 5678 9012" 
  expiryDate="0 8 / 2 7" 
  holderName="JOHN DOE" 
  cvv="123" 
/>
\`\`\`

## Features

- 💳 Realistic credit card design
- 🔄 Smooth flip animation on hover
- 🎨 Mastercard branding with logos
- 📱 Fully customizable card details
- 🚀 No external dependencies
- 💫 3D perspective effects

Perfect for payment forms, e-commerce sites, or any modern UI requiring credit card displays.`,

  "Generating Loader": `# Generating Loader Component

An animated text loader with colorful gradient effects and letter-by-letter animation.

## Installation

No additional dependencies required - uses CSS modules.

## Files to create:

### 1. Component file (GeneratingLoader.tsx)
\`\`\`tsx
import styles from "./GeneratingLoader.module.css";

interface GeneratingLoaderProps {
  text?: string;
}

export default function GeneratingLoader({ text = "Generating" }: GeneratingLoaderProps) {
  const letters = text.split("");
  
  return (
    <div className={styles.loaderWrapper}>
      {letters.map((letter, index) => (
        <span key={index} className={styles.loaderLetter}>
          {letter}
        </span>
      ))}
      <div className={styles.generatingLoader}></div>
    </div>
  );
}
\`\`\`

### 2. CSS Module file (GeneratingLoader.module.css)
\`\`\`css
.loaderWrapper {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 120px;
  width: auto;
  margin: 2rem;

  font-family: "Poppins", sans-serif;
  font-size: 1.6em;
  font-weight: 600;
  user-select: none;
  color: #fff;

  scale: 2;
}

.generatingLoader {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 1;

  background-color: transparent;
  mask: repeating-linear-gradient(
    90deg,
    transparent 0,
    transparent 6px,
    black 7px,
    black 8px
  );
}

.generatingLoader::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  background-image: radial-gradient(circle at 50% 50%, #ff0 0%, transparent 50%),
    radial-gradient(circle at 45% 45%, #f00 0%, transparent 45%),
    radial-gradient(circle at 55% 55%, #0ff 0%, transparent 45%),
    radial-gradient(circle at 45% 55%, #0f0 0%, transparent 45%),
    radial-gradient(circle at 55% 45%, #00f 0%, transparent 45%);
  mask: radial-gradient(
    circle at 50% 50%,
    transparent 0%,
    transparent 10%,
    black 25%
  );
  animation:
    transform-animation 2s infinite alternate,
    opacity-animation 4s infinite;
  animation-timing-function: cubic-bezier(0.6, 0.8, 0.5, 1);
}

@keyframes transform-animation {
  0% {
    transform: translate(-55%);
  }
  100% {
    transform: translate(55%);
  }
}

@keyframes opacity-animation {
  0%,
  100% {
    opacity: 0;
  }
  15% {
    opacity: 1;
  }
  65% {
    opacity: 0;
  }
}

.loaderLetter {
  display: inline-block;
  opacity: 0;
  animation: loader-letter-anim 4s infinite linear;
  z-index: 2;
}

.loaderLetter:nth-child(1) {
  animation-delay: 0.1s;
}
.loaderLetter:nth-child(2) {
  animation-delay: 0.205s;
}
.loaderLetter:nth-child(3) {
  animation-delay: 0.31s;
}
.loaderLetter:nth-child(4) {
  animation-delay: 0.415s;
}
.loaderLetter:nth-child(5) {
  animation-delay: 0.521s;
}
.loaderLetter:nth-child(6) {
  animation-delay: 0.626s;
}
.loaderLetter:nth-child(7) {
  animation-delay: 0.731s;
}
.loaderLetter:nth-child(8) {
  animation-delay: 0.837s;
}
.loaderLetter:nth-child(9) {
  animation-delay: 0.942s;
}
.loaderLetter:nth-child(10) {
  animation-delay: 1.047s;
}

@keyframes loader-letter-anim {
  0% {
    opacity: 0;
  }
  5% {
    opacity: 1;
    text-shadow: 0 0 4px #fff;
    transform: scale(1.1) translateY(-2px);
  }
  20% {
    opacity: 0.2;
  }
  100% {
    opacity: 0;
  }
}
\`\`\`

## Usage

\`\`\`tsx
import GeneratingLoader from "./GeneratingLoader";

// Default usage
<GeneratingLoader />

// Custom text
<GeneratingLoader text="Loading" />
\`\`\`

## Features

- ✨ Animated letter-by-letter text reveal
- 🌈 Colorful gradient background effects
- 🎨 Customizable text content
- 📱 Responsive design
- 🚀 No external dependencies
- 💫 Smooth animations with cubic-bezier timing

Perfect for loading states, AI generation indicators, or any modern UI requiring dynamic text animations.`,

  "Card Hover Effect": `# Card Hover Effect Component

A sleek card component with smooth hover animations and glowing border effects.

## Installation

No additional dependencies required - uses CSS modules.

## Files to create:

### 1. Component file (CardHoverEffect.tsx)
\`\`\`tsx
import styles from "./CardHoverEffect.module.css";

interface CardHoverEffectProps {
  heading?: string;
  description?: string;
  buttonText?: string;
}

export default function CardHoverEffect({ 
  heading = "Card Hover Effect",
  description = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi laboriosam at voluptas minus culpa deserunt delectus sapiente inventore pariatur",
  buttonText = "Read more"
}: CardHoverEffectProps) {
  return (
    <div className={styles.hoverCard}>
      <div className={styles.hoverCardContent}>
        <p className={styles.hoverCardHeading}>{heading}</p>
        <p className={styles.hoverCardPara}>{description}</p>
        <button className={styles.hoverCardBtn}>{buttonText}</button>
      </div>
    </div>
  );
}
\`\`\`

### 2. CSS Module file (CardHoverEffect.module.css)
\`\`\`css
.hoverCard {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 320px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  padding: 32px;
  overflow: hidden;
  border-radius: 10px;
  background: #212121;
  border: 2px solid #313131;
  transition: all 0.5s cubic-bezier(0.23, 1, 0.320, 1);
}

.hoverCardContent {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  color: #e8e8e8;
  transition: all 0.5s cubic-bezier(0.23, 1, 0.320, 1);
}

.hoverCardContent .hoverCardHeading {
  font-weight: 700;
  font-size: 32px;
}

.hoverCardContent .hoverCardPara {
  line-height: 1.5;
}

.hoverCardContent .hoverCardBtn {
  color: #e8e8e8;
  text-decoration: none;
  padding: 10px;
  font-weight: 600;
  border: none;
  cursor: pointer;
  background: #0974f1;
  border-radius: 5px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
}

.hoverCard:hover {
  box-shadow: 0 0 20px rgba(9, 117, 241, 0.8);
  border-color: #0974f1;
}

.hoverCardContent .hoverCardBtn:hover {
  outline: 2px solid #e8e8e8;
  background: transparent;
  color: #e8e8e8;
}

.hoverCardContent .hoverCardBtn:active {
  box-shadow: none;
}
\`\`\`

## Usage

\`\`\`tsx
import CardHoverEffect from "./CardHoverEffect";

// Default usage
<CardHoverEffect />

// Custom values
<CardHoverEffect 
  heading="Custom Title" 
  description="Your custom description here" 
  buttonText="Learn More" 
/>
\`\`\`

## Features

- ✨ Smooth hover animations with cubic-bezier timing
- 💙 Blue glowing border effect on hover
- 🎨 Dark theme with elegant styling
- 📱 Responsive design
- 🚀 No external dependencies
- 💫 Interactive button with outline effect

Perfect for feature cards, product showcases, or any modern UI requiring elegant hover interactions.`,

  "Dots Grid Background": `# Dots Grid Background Component

A customizable dotted grid background component perfect for modern UI designs.

## Installation

No additional dependencies required - uses SVG patterns.

## Files to create:

### 1. Component file (DotsGridBackground.tsx)
\`\`\`tsx
import React from "react";

interface DotsGridBackgroundProps {
  className?: string;
  dotSize?: number;
  dotColor?: string;
  spacing?: number;
}

export const DotsGridBackground: React.FC<DotsGridBackgroundProps> = ({
  className = "",
  dotSize = 0.5,
  dotColor = "#e5e7eb",
  spacing = 16,
}) => {
  const patternId = \`dots-pattern-\${Math.random().toString(36).substr(2, 9)}\`;

  return (
    <div className={\`absolute inset-0 overflow-hidden \${className}\`}>
      <svg
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        style={{ opacity: 0.4 }}
      >
        <defs>
          <pattern
            id={patternId}
            x="0"
            y="0"
            width={spacing}
            height={spacing}
            patternUnits="userSpaceOnUse"
          >
            <circle
              cx={spacing / 2}
              cy={spacing / 2}
              r={dotSize}
              fill={dotColor}
              fillOpacity="0.8"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={\`url(#\${patternId})\`} />
      </svg>
    </div>
  );
};
\`\`\`

## Usage

\`\`\`tsx
import { DotsGridBackground } from "./DotsGridBackground";

// Default usage
<div className="relative h-64">
  <DotsGridBackground />
  <div className="relative z-10 p-8">
    <h1>Your content here</h1>
  </div>
</div>

// Custom styling
<div className="relative h-64">
  <DotsGridBackground 
    dotSize={1} 
    dotColor="#3b82f6" 
    spacing={20} 
  />
  <div className="relative z-10 p-8">
    <h1>Your content here</h1>
  </div>
</div>
\`\`\`

## Features

- 🎨 Fully customizable dot size, color, and spacing
- 📱 Responsive SVG-based implementation
- 🚀 No external dependencies
- 💫 Subtle opacity for background use
- ⚡ Lightweight and performant
- 🎯 Perfect for hero sections and backgrounds

Perfect for landing pages, hero sections, or any modern UI requiring subtle background patterns.`,

  "Text Type": `# Text Type Component

A typewriter-style text animation component that types out text character by character.

## Installation

No additional dependencies required - uses React hooks and Tailwind CSS.

## Files to create:

### 1. Component file (TextType.tsx)
\`\`\`tsx
import React, { useState, useEffect } from "react";

interface TextTypeProps {
  text?: string;
  speed?: number;
  className?: string;
}

export const TextType: React.FC<TextTypeProps> = ({
  text = "Hello, World!",
  speed = 100,
  className = "",
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, speed);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, speed]);

  useEffect(() => {
    setDisplayedText("");
    setCurrentIndex(0);
  }, [text]);

  return (
    <div className={\`font-mono text-2xl \${className}\`}>
      {displayedText}
      <span className="animate-pulse">|</span>
    </div>
  );
};
\`\`\`

## Usage

\`\`\`tsx
import { TextType } from "./TextType";

// Default usage
<TextType />

// Custom text and speed
<TextType 
  text="Welcome to our website!" 
  speed={150} 
  className="text-blue-600 text-4xl" 
/>

// Slow typing effect
<TextType 
  text="This types slowly..." 
  speed={200} 
/>
\`\`\`

## Features

- ⌨️ Realistic typewriter animation
- 🎨 Customizable text content
- ⚡ Adjustable typing speed
- 💫 Animated cursor with pulse effect
- 🚀 No external dependencies
- 📱 Responsive design with Tailwind CSS
- 🔄 Auto-resets when text changes

Perfect for hero sections, loading states, or any modern UI requiring engaging text animations.`,

  Marquee: `# Marquee Component

A smooth scrolling marquee component with customizable direction, speed, and hover effects.

## Installation

Requires Framer Motion for animations.

\`\`\`bash
npm install framer-motion
\`\`\`

## Files to create:

### 1. Component file (Marquee.tsx)
\`\`\`tsx
"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface MarqueeProps {
  children: React.ReactNode;
  direction?: "left" | "right";
  speed?: number;
  pauseOnHover?: boolean;
  className?: string;
}

export function Marquee({
  children,
  direction = "left",
  speed = 50,
  pauseOnHover = false,
  className = "",
}: MarqueeProps) {
  const [containerWidth, setContainerWidth] = useState(0);
  const [contentWidth, setContentWidth] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateWidths = () => {
      if (containerRef.current && contentRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
        setContentWidth(contentRef.current.offsetWidth);
      }
    };

    updateWidths();
    window.addEventListener("resize", updateWidths);
    return () => window.removeEventListener("resize", updateWidths);
  }, [children]);

  const duration = contentWidth > 0 ? contentWidth / speed : 20;

  return (
    <div
      ref={containerRef}
      className={\`relative overflow-hidden \${className}\`}
      style={{
        maskImage:
          "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
      }}
    >
      <motion.div
        className="flex gap-4"
        animate={{
          x: direction === "left" ? [-contentWidth, 0] : [0, -contentWidth],
        }}
        transition={{
          duration,
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop",
        }}
        whileHover={pauseOnHover ? { animationPlayState: "paused" } : {}}
      >
        <div ref={contentRef} className="flex gap-4 shrink-0">
          {children}
        </div>
        <div className="flex gap-4 shrink-0">{children}</div>
      </motion.div>
    </div>
  );
}
\`\`\`

### 2. Demo component (MarqueeDemo.tsx)
\`\`\`tsx
import React from "react";
import { Marquee } from "./Marquee";

export function MarqueeDemo() {
  const items = [
    { id: 1, text: "Item 1", color: "bg-red-500" },
    { id: 2, text: "Item 2", color: "bg-blue-500" },
    { id: 3, text: "Item 3", color: "bg-green-500" },
    { id: 4, text: "Item 4", color: "bg-yellow-500" },
    { id: 5, text: "Item 5", color: "bg-purple-500" },
  ];

  return (
    <div className="w-full py-8 bg-white">
      <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">
        Marquee Demo
      </h2>

      {/* Basic Marquee */}
      <Marquee speed={50} className="mb-8">
        {items.map((item) => (
          <div
            key={item.id}
            className={\`\${item.color} text-white px-6 py-3 rounded-lg min-w-[200px] text-center\`}
          >
            {item.text}
          </div>
        ))}
      </Marquee>

      {/* Reverse Direction with Hover Pause */}
      <Marquee direction="right" speed={30} pauseOnHover className="mb-8">
        {items.map((item) => (
          <div
            key={item.id}
            className="bg-gray-800 text-white px-6 py-3 rounded-lg min-w-[200px] text-center border border-gray-600"
          >
            Hover to pause - {item.text}
          </div>
        ))}
      </Marquee>
    </div>
  );
}
\`\`\`

## Usage

\`\`\`tsx
import { Marquee } from "./Marquee";

// Basic usage
<Marquee>
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</Marquee>

// Custom direction and speed
<Marquee direction="right" speed={30} pauseOnHover>
  <div>Scrolling right with hover pause</div>
</Marquee>
\`\`\`

## Features

- 🎯 Smooth scrolling animation with Framer Motion
- ↔️ Customizable scroll direction (left/right)
- ⚡ Adjustable scroll speed
- ⏸️ Optional pause on hover
- 🎨 Gradient fade edges for smooth appearance
- 📱 Responsive and accessible
- 🔄 Infinite loop scrolling

Perfect for showcasing logos, testimonials, or any content that needs continuous scrolling display.`,
};

export default function Home() {
  const [selectedComponent, setSelectedComponent] =
    useState<ComponentKey>("750k Views Card");
  const [copied, setCopied] = useState(false);

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
          <div className={`${styles.eCard} ${styles.playing}`}>
            <div className={styles.image}></div>
            <div className={styles.wave}></div>
            <div className={styles.wave}></div>
            <div className={styles.wave}></div>
            <div className={styles.infotop}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className={styles.icon}
              >
                <path
                  fill="currentColor"
                  d="M19.4133 4.89862L14.5863 2.17544C12.9911 1.27485 11.0089 1.27485 9.41368 2.17544L4.58674 4.89862C2.99153 5.7992 2 7.47596 2 9.2763V14.7235C2 16.5238 2.99153 18.2014 4.58674 19.1012L9.41368 21.8252C10.2079 22.2734 11.105 22.5 12.0046 22.5C12.6952 22.5 13.3874 22.3657 14.0349 22.0954C14.2204 22.018 14.4059 21.9273 14.5872 21.8252L19.4141 19.1012C19.9765 18.7831 20.4655 18.3728 20.8651 17.8825C21.597 16.9894 22 15.8671 22 14.7243V9.27713C22 7.47678 21.0085 5.7992 19.4133 4.89862ZM4.10784 14.7235V9.2763C4.10784 8.20928 4.6955 7.21559 5.64066 6.68166L10.4676 3.95848C10.9398 3.69152 11.4701 3.55804 11.9996 3.55804C12.5291 3.55804 13.0594 3.69152 13.5324 3.95848L18.3593 6.68166C19.3045 7.21476 19.8922 8.20928 19.8922 9.2763V9.75997C19.1426 9.60836 18.377 9.53091 17.6022 9.53091C14.7929 9.53091 12.1041 10.5501 10.0309 12.3999C8.36735 13.8847 7.21142 15.8012 6.68783 17.9081L5.63981 17.3165C4.69466 16.7834 4.10699 15.7897 4.10699 14.7235H4.10784ZM10.4676 20.0413L8.60933 18.9924C8.94996 17.0479 9.94402 15.2665 11.4515 13.921C13.1353 12.4181 15.3198 11.5908 17.6022 11.5908C18.3804 11.5908 19.1477 11.6864 19.8922 11.8742V14.7235C19.8922 15.2278 19.7589 15.7254 19.5119 16.1662C18.7615 15.3596 17.6806 14.8528 16.4783 14.8528C14.2136 14.8528 12.3781 16.6466 12.3781 18.8598C12.3781 19.3937 12.4861 19.9021 12.68 20.3676C11.9347 20.5316 11.1396 20.4203 10.4684 20.0413H10.4676Z"
                ></path>
              </svg>
              <br />
              UI / EX Designer
              <br />
              <div className={styles.name}>MikeAndrewDesigner</div>
            </div>
          </div>
        );
      case "Flip Card":
        return (
          <div className={styles.flipCard}>
            <div className={styles.flipCardInner}>
              <div className={styles.flipCardFront}>
                <p className={styles.heading8264}>MASTERCARD</p>
                <svg
                  className={styles.logo}
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="36"
                  height="36"
                  viewBox="0 0 48 48"
                >
                  <path
                    fill="#ff9800"
                    d="M32 10A14 14 0 1 0 32 38A14 14 0 1 0 32 10Z"
                  ></path>
                  <path
                    fill="#d50000"
                    d="M16 10A14 14 0 1 0 16 38A14 14 0 1 0 16 10Z"
                  ></path>
                  <path
                    fill="#ff3d00"
                    d="M18,24c0,4.755,2.376,8.95,6,11.48c3.624-2.53,6-6.725,6-11.48s-2.376-8.95-6-11.48 C20.376,15.05,18,19.245,18,24z"
                  ></path>
                </svg>
                <svg
                  version="1.1"
                  className={styles.chip}
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="30px"
                  height="30px"
                  viewBox="0 0 50 50"
                >
                  <image
                    width="50"
                    height="50"
                    x="0"
                    y="0"
                    href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAMAAAAp4XiDAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAB6VBMVEUAAACNcTiVeUKVeUOYfEaafEeUeUSYfEWZfEaykleyklaXe0SWekSZZjOYfEWYe0WXfUWXe0WcgEicfkiXe0SVekSXekSWekKYe0a9nF67m12ZfUWUeEaXfESVekOdgEmVeUWWekSniU+VeUKVeUOrjFKYfEWliE6WeESZe0GSe0WYfES7ml2Xe0WXeESUeEOWfEWcf0eWfESXe0SXfEWYekSVeUKXfEWxklawkVaZfEWWekOUekOWekSYfESZe0eXekWYfEWZe0WZe0eVeUSWeETAnmDCoWLJpmbxy4P1zoXwyoLIpWbjvXjivnjgu3bfu3beunWvkFWxkle/nmDivXiWekTnwXvkwHrCoWOuj1SXe0TEo2TDo2PlwHratnKZfEbQrWvPrWuafUfbt3PJp2agg0v0zYX0zYSfgkvKp2frxX7mwHrlv3rsxn/yzIPgvHfduXWXe0XuyIDzzISsjVO1lVm0lFitjVPzzIPqxX7duna0lVncuHTLqGjvyIHeuXXxyYGZfUayk1iyk1e2lln1zYTEomO2llrbtnOafkjFpGSbfkfZtXLhvHfkv3nqxH3mwXujhU3KqWizlFilh06khk2fgkqsjlPHpWXJp2erjVOhg0yWe0SliE+XekShhEvAn2D///+gx8TWAAAARnRSTlMACVCTtsRl7Pv7+vxkBab7pZv5+ZlL/UnU/f3SJCVe+Fx39naA9/75XSMh0/3SSkia+pil/KRj7Pr662JPkrbP7OLQ0JFOijI1MwAAAAFiS0dEorDd34wAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAHdElNRQfnAg0IDx2lsiuJAAACLElEQVRIx2NgGAXkAUYmZhZWPICFmYkRVQcbOwenmzse4MbFzc6DpIGXj8PD04sA8PbhF+CFaxEU8iWkAQT8hEVgOkTF/InR4eUVICYO1SIhCRMLDAoKDvFDVhUaEhwUFAjjSUlDdMiEhcOEItzdI6OiYxA6YqODIt3dI2DcuDBZsBY5eVTr4xMSYcyk5BRUOXkFsBZFJTQnp6alQxgZmVloUkrKYC0qqmji2WE5EEZuWB6alKoKdi35YQUQRkFYPpFaCouKIYzi6EDitJSUlsGY5RWVRGjJLyxNy4ZxqtIqqvOxaVELQwZFZdkIJVU1RSiSalAt6rUwUBdWG1CP6pT6gNqwOrgCdQyHNYR5YQFhDXj8MiK1IAeyN6aORiyBjByVTc0FqBoKWpqwRCVSgilOaY2OaUPw29qjOzqLvTAchpos47u6EZyYnngUSRwpuTe6D+6qaFQdOPNLRzOM1dzhRZyW+CZouHk3dWLXglFcFIflQhj9YWjJGlZcaKAVSvjyPrRQ0oQVKDAQHlYFYUwIm4gqExGmBSkutaVQJeomwViTJqPK6OhCy2Q9sQBk8cY0DxjTJw0lAQWK6cOKfgNhpKK7ZMpUeF3jPa28BCET amiEqJKM+X1gxvWXpoUjVIVPnwErw71nmpgiqiQGBjNzbgs3j1nus+fMndc+Cwm0T52/oNR9lsdCSy25ra7Tq1cbWjpXV3sHRCb1idXZ0sGdltXNxRateRwHRAACYHutzk/2I5QAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMy0wMi0xM1QwODoxNToyOSswMDowMEUnN7UAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjMtMDItMTNUMDg6MTU6MjkrMDA6MDA0eo8JAAAAKHRFWHRkYXRlOnRpbWVzdGFtcAAyMDIzLTAyLTEzVDA4OjE1OjI5KzAwOjAwY2+u1gAAAABJRU5ErkJggg=="
                  ></image>
                </svg>
                <svg
                  version="1.1"
                  className={styles.contactless}
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="20px"
                  height="20px"
                  viewBox="0 0 50 50"
                >
                  <image
                    width="50"
                    height="50"
                    x="0"
                    y="0"
                    href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAQAAAC0NkA6AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAJcEhZcwAACxMAAAsTAQCanBgAAAAHdElNRQfnAg0IEzgIwaKTAAADDklEQVRYw+1XS0iUURQ+f5qPyjQflGRFEEFK76koKGxRbWyVVLSOgsCgwjZBJJYuKogSIoOonUK4q3U0WVBWFPZYiIE6kuArG3VGzK/FfPeMM/MLt99/NuHdfPd888/57jn3nvsQWWj/VcMlvMMd5KRTogqx9iCdIjUUmcGR9ImUYowyP3xNGQJoRLVaZ2DaZf8kyjEJALhI28ELioyiwC+Rc3QZwRYyO/DH51hQgWm6DMIh10KmD4u9O16K49itVoPOAmcGAWWOepXIRScAoJZ2Frro8oN+EyTT6lWkkg6msZfMSR35QTJmjU0g15tIGSJ08ZZMJkJkHpNZgSkyXosS13TkJpZ62mPIJvOSzC1bp8vRhhCakEk7G9/o4gmZdbpsTcKu0m63FbnBP9Qrc15zbkbemfgNDtEOI8NO5L5O9VYyRYgmJayZ9nPaxZrSjW4+F6Uw9yQqIiIZwhp2huQTf6OIvCZyGM6gDJBZbyXifJXr7FZjGXsdxADxI7HUJFB6iWvsIhFpkoiIiGTJfjJfiCuJg2ZEspq9EHGVpYgzKqwJqSAOEwuJQ/pxPvE3cYltJCLdxBLiSKKIE5HxJKcTRNeadxfhDiuYw44zVs1dxKwRk/uCxIiQkxKBsSctRVAge9g1E15EHE6yRUaJecRxcWlukdRIbGFOSZCMWQA/iWauIP3slREHXPyliqBcrrD71Amz Z+rD1Mt2Yr8TZc/UR4/YtFnbijnHi3UrN9vKQ9rPaJf867ZiaqDB+rzeKYmd3pNa6fuI75MiC0uXXSR5aEMf7s7a6r/PudVXkjFb/SsrCRfROk0Fx6+H1i9kkTGn/E1vEmt1m089fh+RKdQ5O+xNJPUicUIjO0Dm7HwvErEr0YxeibL1StSh37STafE4I7zcBdRq1DiOkdmlTJVnkQTBTS7X1FYyvfO4piaInKbDCDaT2anLudYXCRFsQBgAcIF2/Okwgvz5+Z4tsw118dzruvIvjhTB+HOuWy8UvovEH6beitBKxDyxm9MmISKCWrzB7bSlaqGlsf0FC0gMjzTg6GgAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjMtMDItMTNUMDg6MTk6NTYrMDA6MDCjlq7LAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIzLTAyLTEzVDA4OjE5OjU2KzAwOjAw0ssWdwAAACh0RVh0ZGF0ZTp0aW1lc3RhbXAAMjAyMy0wMi0xM1QwODoxOTo1Nisw MDowMIXeN6gAAAAASUVORK5CYII="
                  ></image>
                </svg>
                <p className={styles.number}>9759 2484 5269 6576</p>
                <p className={styles.validThru}>VALID THRU</p>
                <p className={styles.date8264}>1 2 / 2 4</p>
                <p className={styles.cardName}>BRUCE WAYNE</p>
              </div>
              <div className={styles.flipCardBack}>
                <div className={styles.strip}></div>
                <div className={styles.mstrip}></div>
                <div className={styles.sstrip}>
                  <p className={styles.code}>***</p>
                </div>
              </div>
            </div>
          </div>
        );
      case "Generating Loader":
        return (
          <div className={styles.loaderWrapper}>
            {"Generating".split("").map((letter, index) => (
              <span key={index} className={styles.loaderLetter}>
                {letter}
              </span>
            ))}
            <div className={styles.generatingLoader}></div>
          </div>
        );
      case "Card Hover Effect":
        return (
          <div className={styles.hoverCard}>
            <div className={styles.hoverCardContent}>
              <p className={styles.hoverCardHeading}>Card Hover Effect</p>
              <p className={styles.hoverCardPara}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi
                laboriosam at voluptas minus culpa deserunt delectus sapiente
                inventore pariatur
              </p>
              <button className={styles.hoverCardBtn}>Read more</button>
            </div>
          </div>
        );
      case "Dots Grid Background":
        return (
          <div className="relative h-64 w-full">
            <DotsGridBackground />
            <div className="relative z-10 p-8 text-center">
              <h1 className="text-2xl font-bold text-gray-800">
                Dots Grid Background
              </h1>
              <p className="text-gray-600 mt-2">
                A customizable dotted grid background
              </p>
            </div>
          </div>
        );
      case "Text Type":
        return (
          <div className="p-8">
            <TextType
              text="Hello, World! This is a typewriter effect."
              speed={100}
            />
          </div>
        );
      case "Marquee":
        return (
          <div className="w-full">
            <MarqueeDemo />
          </div>
        );
      default:
        return <div>Select a component to preview</div>;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">ReactBits</h1>
          <p className="text-lg text-gray-600 mb-6">
            A collection of beautiful, reusable React components
          </p>

          <div className="flex items-center justify-center gap-4 mb-8">
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
              <DropdownMenuContent className="w-[200px]">
                {Object.keys(COMPONENT_PROMPTS).map((component) => (
                  <DropdownMenuItem
                    key={component}
                    onClick={() =>
                      setSelectedComponent(component as ComponentKey)
                    }
                  >
                    {component}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Button
              onClick={copyToClipboard}
              className="flex items-center gap-2"
            >
              {copied ? (
                <Check className="h-4 w-4" />
              ) : (
                <Copy className="h-4 w-4" />
              )}
              {copied ? "Copied!" : "Copy Code"}
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-gray-50 rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Preview</h2>
            <div className="flex items-center justify-center bg-white rounded border h-[400px]">
              {renderPreview()}
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Installation Guide</h2>
            <div className="bg-white rounded border p-4 max-h-[400px] overflow-y-auto">
              <pre className="text-sm text-gray-800 whitespace-pre-wrap">
                {COMPONENT_PROMPTS[selectedComponent]}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
