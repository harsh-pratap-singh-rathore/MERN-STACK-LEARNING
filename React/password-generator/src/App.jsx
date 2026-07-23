import { useCallback, useEffect, useRef, useState } from "react";

function App() {
  const [inpval, setinpval] = useState("");
  const [passlength, setpasslength] = useState(12);
  const [numallowed, setnumallowed] = useState(true);
  const [charallowed, setcharallowed] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const passRef = useRef(null);

  const generatepassword = useCallback(() => {
    let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numallowed) {
      chars += "0123456789";
    }

    if (charallowed) {
      chars += "!@#$%^&*()-_=+[]{}|;:,.<>?";
    }

    let pass = "";

    for (let i = 0; i < passlength; i++) {
      const index = Math.floor(Math.random() * chars.length);
      pass += chars.charAt(index);
    }

    setinpval(pass);
  }, [passlength, numallowed, charallowed]);

  const copypass = useCallback(() => {
    passRef.current?.select();
    window.navigator.clipboard.writeText(inpval);
    setIsCopied(true);
    setShowToast(true);
    setTimeout(() => {
      setIsCopied(false);
      setShowToast(false);
    }, 2000);
  }, [inpval]);

  useEffect(() => {
    generatepassword();
  }, [generatepassword]);

  // Calculate password strength score (1 to 4)
  const getStrengthScore = () => {
    let score = 1;
    if (passlength >= 11) score++;
    if (passlength >= 15) score++;
    if (numallowed && charallowed) score++;
    return score;
  };

  const score = getStrengthScore();

  const getStrengthLabel = () => {
    if (score <= 1) return { text: "Weak", color: "var(--strength-weak)" };
    if (score === 2) return { text: "Medium", color: "var(--strength-medium)" };
    if (score === 3) return { text: "Strong", color: "var(--strength-strong)" };
    return { text: "Very Secure", color: "var(--strength-secure)" };
  };

  const strength = getStrengthLabel();

  return (
    <>
      <main className="app-container">
        <header>
          <div className="title-badge">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: "4px", verticalAlign: "middle" }}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            Security Tool
          </div>
          <h1>SecureKey</h1>
        </header>

        <section className="display-wrapper">
          <input
            type="text"
            className="password-input"
            value={inpval}
            readOnly
            ref={passRef}
            placeholder="Loading..."
          />
          <button
            className={`btn-copy ${isCopied ? "copied" : ""}`}
            onClick={copypass}
            title="Copy to Clipboard"
            aria-label="Copy password to clipboard"
          >
            {isCopied ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 5 12"/></svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
            )}
          </button>
        </section>

        <section className="strength-section">
          <span className="strength-label">Strength</span>
          <div className="strength-indicator">
            <span className="strength-text" style={{ color: strength.color }}>{strength.text}</span>
            <div className="strength-bars">
              {[1, 2, 3, 4].map((barIndex) => (
                <div
                  key={barIndex}
                  className="bar"
                  style={{
                    backgroundColor: barIndex <= score ? strength.color : "rgba(255, 255, 255, 0.1)",
                    boxShadow: barIndex <= score ? `0 0 8px ${strength.color}` : "none"
                  }}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="control-group">
          <div className="slider-container">
            <div className="slider-header">
              <span>Password Length</span>
              <span className="length-val">{passlength}</span>
            </div>
            <input
              type="range"
              className="range-slider"
              min={8}
              max={25}
              value={passlength}
              onChange={(e) => setpasslength(Number(e.target.value))}
            />
          </div>

          <div className="control-item">
            <label className="switch-label">
              <span className="control-label">Include Numbers</span>
              <input
                type="checkbox"
                className="switch-input"
                checked={numallowed}
                onChange={() => setnumallowed((prev) => !prev)}
              />
              <span className="switch-slider"></span>
            </label>
          </div>

          <div className="control-item">
            <label className="switch-label">
              <span className="control-label">Include Special Characters</span>
              <input
                type="checkbox"
                className="switch-input"
                checked={charallowed}
                onChange={() => setcharallowed((prev) => !prev)}
              />
              <span className="switch-slider"></span>
            </label>
          </div>
        </section>

        <footer>
          Designed by <a href="https://github.com/harsh-pratap-singh-rathore" target="_blank" rel="noopener noreferrer">Harsh Pratap Singh Rathore</a>
        </footer>
      </main>

      <div className={`toast-msg ${showToast ? "show" : ""}`}>
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: "4px" }}><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
        Password copied to clipboard!
      </div>
    </>
  );
}

export default App;