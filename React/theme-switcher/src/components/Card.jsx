import React from 'react';

export default function Card() {
    return (
        <div className="w-full bg-white border border-slate-200 rounded-3xl shadow-xl dark:bg-slate-900 dark:border-slate-800 transition-all duration-300 hover:shadow-2xl overflow-hidden">
            <div className="relative h-64 overflow-hidden group">
                <img
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000&auto=format&fit=crop"
                    alt="Wireless Headphones"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-70"></div>
                <span className="absolute top-4 left-4 bg-indigo-600/90 backdrop-blur-md text-white text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full shadow-lg">
                    Featured
                </span>
            </div>

            <div className="p-6 space-y-4">
                <div>
                    <h5 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white transition-colors duration-200">
                        Apple AirPods Max — Wireless Over-Ear Headphones
                    </h5>
                    <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                        High-fidelity audio with Active Noise Cancellation and Transparency mode.
                    </p>
                </div>

                <div className="flex items-center space-x-1.5">
                    <div className="flex text-amber-400">
                        {[...Array(5)].map((_, i) => (
                            <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                        ))}
                    </div>
                    <span className="bg-amber-100 text-amber-800 text-xs font-semibold px-2.5 py-0.5 rounded-full dark:bg-amber-900/40 dark:text-amber-300">
                        4.9
                    </span>
                </div>

                <div className="pt-2 flex items-center justify-between border-t border-slate-100 dark:border-slate-800/80">
                    <div>
                        <span className="text-xs text-slate-400 dark:text-slate-500 block uppercase font-medium">Price</span>
                        <span className="text-2xl font-extrabold text-slate-900 dark:text-white">$549</span>
                    </div>

                    <button
                        type="button"
                        className="bg-indigo-600 hover:bg-indigo-700 active:scale-95 text-white font-semibold text-sm px-5 py-2.5 rounded-xl shadow-lg shadow-indigo-500/25 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    >
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
}
