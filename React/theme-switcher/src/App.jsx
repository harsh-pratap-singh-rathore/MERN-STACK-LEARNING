import { useState, useEffect } from "react";
import { ThemeProvider } from "./context/theme";
import ThemeBtn from "./components/ThemeBtn";
import Card from "./components/Card";

function App() {
  const [themeMode, setThemeMode] = useState("light");

  const lightTheme = () => {
    setThemeMode("light");
  };

  const darkTheme = () => {
    setThemeMode("dark");
  };

  // Actual DOM class synchronization for Tailwind dark mode
  useEffect(() => {
    const htmlElement = document.querySelector("html");
    htmlElement.classList.remove("light", "dark");
    htmlElement.classList.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
      <div className="min-h-screen flex flex-col items-center justify-center p-4 sm:p-8 bg-slate-100 dark:bg-slate-950 transition-colors duration-300">
        <div className="w-full max-w-md space-y-4">
          <div className="w-full flex justify-end p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-md transition-colors duration-300">
            <ThemeBtn />
          </div>

          <div className="w-full">
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
