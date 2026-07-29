import { useState, useEffect } from "react";

function App() {
  // =========================================================================
  // 1. REACT CODE: useState Hook
  // =========================================================================
  // 'theme' stores the current theme state ("light" or "dark").
  // 'setTheme' is the function we use to update 'theme'.
  // Default theme is set to "light".
  const [theme, setTheme] = useState("light");

  // =========================================================================
  // 2. REACT CODE: Function to Toggle Theme
  // =========================================================================
  // When user clicks the toggle button, this function switches between light & dark.
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  // =========================================================================
  // 3. REACT CODE: useEffect Hook
  // =========================================================================
  // This useEffect runs EVERY time the 'theme' state changes.
  // Tailwind CSS looks for the class "dark" on the <html> tag to enable Dark Mode styles.
  useEffect(() => {
    const htmlElement = document.querySelector("html");
    
    // Remove existing theme classes first
    htmlElement.classList.remove("light", "dark");
    
    // Add the active theme class ("light" or "dark") to <html> tag
    htmlElement.classList.add(theme);
  }, [theme]); // [theme] dependency array means: run this effect whenever 'theme' changes

  return (
    // Main Background Container - updates color dynamically based on theme
    <div className={`min-h-screen ${theme === "dark" ? "bg-slate-950 text-slate-100" : "bg-slate-100 text-slate-800"} flex flex-col items-center justify-center p-4 sm:p-8 transition-colors duration-300`}>
      
      {/* ===================================================================== */}
      {/* TOP TOGGLE BUTTON BOX                                                 */}
      {/* ===================================================================== */}
      <div className={`w-full max-w-md mb-6 flex justify-between items-center ${theme === "dark" ? "bg-slate-900 border-slate-800" : "bg-white border-slate-200"} p-4 rounded-2xl shadow-md border transition-colors duration-300`}>
        
        {/* Label displaying current theme mode */}
        <span className="text-sm font-semibold tracking-wide flex items-center gap-2">
          {theme === "dark" ? (
            <span className="text-indigo-400 flex items-center gap-2">🌙 Dark Mode ON</span>
          ) : (
            <span className="text-amber-500 flex items-center gap-2">☀️ Light Mode ON</span>
          )}
        </span>

        {/* 
          =================================================================== 
          REACT CODE: Toggle Button with onClick event listener
          =================================================================== 
        */}
        <button 
          type="button"
          onClick={toggleTheme} // Calls toggleTheme function when clicked
          className={`relative inline-flex h-8 w-14 shrink-0 cursor-pointer rounded-full border-2 border-transparent ${theme === "dark" ? "bg-indigo-600" : "bg-slate-300"} transition-colors duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500`}
          aria-label="Toggle Dark Mode"
        >
          {/* Toggle Knob / Thumb moving left and right using inline conditional className */}
          <span 
            className={`${theme === "dark" ? "translate-x-6" : "translate-x-0"} pointer-events-none inline-block h-7 w-7 transform rounded-full bg-white shadow-lg ring-0 transition duration-300 ease-in-out flex items-center justify-center`}
          >
            {theme === "dark" ? (
              /* Moon Icon for Dark Mode */
              <svg className="w-4 h-4 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            ) : (
              /* Sun Icon for Light Mode */
              <svg className="w-4 h-4 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            )}
          </span>
        </button>
      </div>

      {/* ===================================================================== */}
      {/* CARD COMPONENT                                                        */}
      {/* ===================================================================== */}
      <div className={`w-full max-w-md ${theme === "dark" ? "bg-slate-900 border-slate-800 text-white" : "bg-white border-slate-200 text-slate-900"} rounded-3xl shadow-xl border overflow-hidden transition-all duration-300 hover:shadow-2xl`}>
        
        {/* Card Header Image & Badge */}
        <div className="relative h-64 overflow-hidden group">
          <img 
            src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000&auto=format&fit=crop" 
            alt="Wireless Headphones" 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-70"></div>
          
          {/* Top Floating Badge */}
          <span className="absolute top-4 left-4 bg-indigo-600 text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-sm">
            Featured
          </span>

          {/* Wishlist Button */}
          <button 
            type="button"
            className={`absolute top-4 right-4 ${theme === "dark" ? "bg-slate-900/80 text-slate-200" : "bg-white/80 text-slate-700"} backdrop-blur-md p-2.5 rounded-full hover:text-rose-500 transition-colors shadow-md focus:outline-none`}
            aria-label="Add to wishlist"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
          </button>
        </div>

        {/* Card Body */}
        <div className="p-6">
          
          {/* Category Tag & Rating */}
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold text-indigo-500 uppercase tracking-widest">
              Audio • Premium
            </span>
            <div className="flex items-center gap-1">
              <div className="flex text-amber-400">
                ★ ★ ★ ★ ★
              </div>
              <span className={`text-xs ${theme === "dark" ? "text-slate-400" : "text-slate-500"} font-medium`}>
                (4.9)
              </span>
            </div>
          </div>

          {/* Card Title */}
          <h2 className="text-xl font-bold mb-2 leading-snug tracking-tight">
            Apex ANC Wireless Headphones
          </h2>

          {/* Card Description */}
          <p className={`text-sm ${theme === "dark" ? "text-slate-300" : "text-slate-600"} mb-6 line-clamp-2 leading-relaxed`}>
            Experience studio-quality sound with active noise cancellation, 40-hour battery life, and ultra-soft memory foam ear cushions.
          </p>

          {/* Features / Highlights */}
          <div className="flex items-center gap-2 sm:gap-3 mb-6">
            <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-lg ${theme === "dark" ? "bg-slate-800 text-slate-300" : "bg-slate-100 text-slate-600"} text-xs font-medium`}>
              ⚡ 40h Battery
            </span>
            <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-lg ${theme === "dark" ? "bg-slate-800 text-slate-300" : "bg-slate-100 text-slate-600"} text-xs font-medium`}>
              🎧 Active NC
            </span>
            <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-lg ${theme === "dark" ? "bg-slate-800 text-slate-300" : "bg-slate-100 text-slate-600"} text-xs font-medium`}>
              📶 BT 5.3
            </span>
          </div>

          {/* Price & Action Section */}
          <div className={`flex items-center justify-between pt-4 border-t ${theme === "dark" ? "border-slate-800" : "border-slate-100"}`}>
            <div>
              <span className={`text-xs ${theme === "dark" ? "text-slate-400" : "text-slate-400"} block uppercase font-medium`}>Price</span>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-extrabold">
                  $299.99
                </span>
                <span className="text-sm text-slate-400 line-through">
                  $349.99
                </span>
              </div>
            </div>

            {/* Primary Action Button */}
            <button 
              type="button"
              className="bg-indigo-600 hover:bg-indigo-700 active:scale-95 text-white font-semibold text-sm px-5 py-3 rounded-xl shadow-lg shadow-indigo-500/25 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Add to Cart
            </button>
          </div>

        </div>

      </div>

    </div>
  );
}

export default App;
