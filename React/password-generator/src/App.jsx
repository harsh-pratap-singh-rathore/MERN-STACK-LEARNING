import { useCallback, useEffect, useRef, useState } from "react";

function App() {
  const [inpval, setinpval] = useState("");
  const [passlength, setpasslength] = useState(8);
  const [numallowed, setnumallowed] = useState(false);
  const [charallowed, setcharallowed] = useState(false);

  const passRef = useRef(null);

  const generatepassword = useCallback(() => {
    let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numallowed) {
      chars += "0123456789";
    }

    if (charallowed) {
      chars += "!@#$%^&*";
    }

    let pass = "";

    for (let i = 0; i < passlength; i++) {
      const index = Math.floor(Math.random() * chars.length);
      pass += chars.charAt(index);
    }

    setinpval(pass);
  }, [passlength, numallowed, charallowed]);

  const copypass = useCallback(() => {
    passRef.current?.select();              // Input select hoga
    window.navigator.clipboard.writeText(inpval);
  }, [inpval]);

  useEffect(() => {
    generatepassword();
  }, [generatepassword]);

  return (
    <>
      <h1>Password Generator</h1>

      <input
        type="text"
        value={inpval}
        readOnly
        ref={passRef}
      />

      <button onClick={copypass}>Copy</button>

      <br />
      <br />

      <input
        type="range"
        min={8}
        max={20}
        value={passlength}
        onChange={(e) => setpasslength(Number(e.target.value))}
      />

      <label> Length : {passlength}</label>

      <br />
      <br />

      <input
        type="checkbox"
        checked={numallowed}
        onChange={() => setnumallowed((prev) => !prev)}
      />
      <label> Numbers</label>

      <input
        type="checkbox"
        checked={charallowed}
        onChange={() => setcharallowed((prev) => !prev)}
      />
      <label> Special Characters</label>
    </>
  );
}

export default App;