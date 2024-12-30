import React from "react";

export default function Header() {
    return (
        <header className="flex justify-between items-center px-8 py-4 bg-transparent fixed w-full top-0 z-10 shadow-lg">
            <div className="text-white text-2xl font-bold">
                <span className="text-white">Code</span>
                <span className="text-blue-500 underline">Craft</span>
            </div>
            <div className="flex space-x-4">
                <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
                    Start Coding
                </button>
                <a
                    href="https://x.com/__rj11"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-gray-800 text-gray-400 rounded-lg hover:bg-gray-700 hover:text-white transition"
                >
                    Twitter
                </a>
            </div>
        </header>
    );
}
