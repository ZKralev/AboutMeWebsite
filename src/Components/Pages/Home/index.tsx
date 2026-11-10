import { useEffect, useState } from "react";
import dev from "../../images/dev.jpg";
import "./styles.css";
import ts from '../MyStack/icons/typescript_icon.png'
import rect from '../MyStack/icons/react_react native_icon.svg'
import smile from '../../images/smile.png'

const reducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const TYPING_LINES = [
  "Hello and welcome to my website",
  "it will tell you a little bit about me"
];

function TypingText({ lines, delay = 0 }: { lines: string[]; delay?: number }) {
  const [displayedLines, setDisplayedLines] = useState<string[]>(() => (reducedMotion() ? lines : []));
  const [currentLine, setCurrentLine] = useState(() => (reducedMotion() ? lines.length : 0));
  const [currentChar, setCurrentChar] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  const done = currentLine >= lines.length;
  const lineTyped = !done && currentChar >= lines[currentLine].length;

  useEffect(() => {
    if (done) return;
    // pause 600ms at the end of a line before starting the next
    const timeout = setTimeout(() => {
      if (lineTyped) {
        setDisplayedLines((prev: string[]) => [...prev, lines[currentLine]]);
        setCurrentLine((l: number) => l + 1);
        setCurrentChar(0);
      } else {
        setCurrentChar((c: number) => c + 1);
      }
    }, lineTyped ? 600 : delay + 70);
    return () => clearTimeout(timeout);
  }, [done, lineTyped, currentLine, currentChar, lines, delay]);

  useEffect(() => {
    if (done) return;
    const interval = setInterval(() => setShowCursor((s: boolean) => !s), 530);
    return () => clearInterval(interval);
  }, [done]);

  return (
    <div className="typing-container">
      {displayedLines.map((line: string, i: number) => (
        <h1 key={i} className="h1-text-home typed-line">{line}</h1>
      ))}
      {!done && (
        <h1 className="h1-text-home typing-line">
          {lines[currentLine].slice(0, currentChar)}
          <span className={`typing-cursor ${showCursor ? "visible" : ""}`}>|</span>
        </h1>
      )}
    </div>
  );
}

function Home() {
  return (
    <div className="hp animate-fade-in-up">
      <div className="home-hero">
        <img src={dev} className="img-dev" alt="" />
        <div className="page-text hpt">
          <TypingText lines={TYPING_LINES} />
          <div className="home-tagline">
            <img className="hicon animate-pulse" src={smile} width={40} height={40} alt="" />
            <p className="hpt2">Software Engineer with passion for clean code &amp; scalable systems</p>
          </div>
          <div className="home-built-with">
            <span>Built with</span>
            <img className="hicon" src={ts} width={40} height={40} alt="typescript" />
            <span>+</span>
            <img className="hicon" src={rect} width={40} height={40} alt="react" />
          </div>
          <p className="home-ps">P.S. works great on mobile too ;)</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
