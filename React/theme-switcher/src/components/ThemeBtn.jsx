import React from 'react';
import { useTheme } from '../context/theme';

export default function ThemeBtn() {
    const { themeMode, lightTheme, darkTheme } = useTheme();

    const onChangeBtn = (e) => {
        const darkModeStatus = e.currentTarget.checked;
        if (darkModeStatus) {
            darkTheme();
        } else {
            lightTheme();
        }
    };

    return (
        <label className="relative inline-flex items-center cursor-pointer select-none">
            <input
                type="checkbox"
                value=""
                className="sr-only peer"
                onChange={onChangeBtn}
                checked={themeMode === "dark"}
            />
            <div className="w-11 h-6 bg-slate-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 dark:peer-focus:ring-indigo-800 rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-slate-600 peer-checked:bg-indigo-600"></div>
            <span className="ml-3 text-sm font-semibold text-slate-900 dark:text-slate-100">
                {themeMode === "dark" ? "🌙 Dark Mode" : "☀️ Light Mode"}
            </span>
        </label>
    );
}
