import React, { useState } from "react";
import Header from "../components/Header";

export default function Code() {
    const [html, setHtml] = useState("");
    const [css, setCss] = useState("");
    const [js, setJs] = useState("");
    const [bgColor, setBgColor] = useState("#000000");

    const iframeSrcDoc = `
        <html>
            <style>${css}</style>
            <body>${html}</body>
            <script>${js}</script>
        </html>
    `;

    return (
        <div className="min-h-screen bg-black text-white">
            <Header />
            <div className="pt-20 px-8 text-center">
                <h1 className="text-5xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
                    Unleash Your <span className="text-gray-300">Creativity</span>
                </h1>
                <p className="text-xl font-medium mb-10 bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-500">
                    Code with passion and watch your ideas come alive!
                </p>
            </div>
            <div className="flex justify-center space-x-6 px-8 pb-12">
                {/* HTML Editor Box */}
                <div className="bg-gradient-to-r from-purple-800 via-gray-800 to-blue-800 w-[35%] h-[500px] p-6 rounded-lg shadow-2xl flex flex-col">
                    <h2 className="text-blue-300 mb-4 text-lg font-semibold">
                        Structure with <span className="text-purple-400">HTML</span>
                    </h2>
                    <textarea
                        className="flex-grow bg-gray-900 p-4 rounded-lg text-gray-300 outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                        placeholder="Write HTML code here..."
                        value={html}
                        onChange={(e) => setHtml(e.target.value)}
                    ></textarea>
                    <button
                        className="mt-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 px-4 rounded-lg hover:scale-105 transition-transform focus:outline-none"
                        onClick={() => navigator.clipboard.writeText(html)}
                    >
                        Copy to Clipboard
                    </button>
                </div>
                {/* CSS Editor Box */}
                <div className="bg-gradient-to-r from-purple-800 via-gray-800 to-blue-800 w-[35%] h-[500px] p-6 rounded-lg shadow-2xl flex flex-col">
                    <h2 className="text-blue-300 mb-4 text-lg font-semibold">
                        Style with <span className="text-green-400">CSS</span>
                    </h2>
                    <textarea
                        className="flex-grow bg-gray-900 p-4 rounded-lg text-gray-300 outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                        placeholder="Write CSS code here..."
                        value={css}
                        onChange={(e) => setCss(e.target.value)}
                    ></textarea>
                    <button
                        className="mt-4 bg-gradient-to-r from-green-400 to-teal-500 text-white py-2 px-4 rounded-lg hover:scale-105 transition-transform focus:outline-none"
                        onClick={() => navigator.clipboard.writeText(css)}
                    >
                        Copy to Clipboard
                    </button>
                </div>
                {/* JavaScript Editor Box */}
                <div className="bg-gradient-to-r from-purple-800 via-gray-800 to-blue-800 w-[35%] h-[500px] p-6 rounded-lg shadow-2xl flex flex-col">
                    <h2 className="text-blue-300 mb-4 text-lg font-semibold">
                        Interact with <span className="text-yellow-400">JavaScript</span>
                    </h2>
                    <textarea
                        className="flex-grow bg-gray-900 p-4 rounded-lg text-gray-300 outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                        placeholder="Write JavaScript code here..."
                        value={js}
                        onChange={(e) => setJs(e.target.value)}
                    ></textarea>
                    <button
                        className="mt-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white py-2 px-4 rounded-lg hover:scale-105 transition-transform focus:outline-none"
                        onClick={() => navigator.clipboard.writeText(js)}
                    >
                        Copy to Clipboard
                    </button>
                </div>
            </div>
            <div className="p-8 bg-gradient-to-b from-gray-800 via-gray-700 to-gray-900 rounded-xl shadow-2xl">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold text-blue-400">
                        Live <span className="text-purple-500">Preview</span>
                    </h2>
                    <div className="flex items-center space-x-3">
                        <label
                            htmlFor="bg-color-picker"
                            className="text-sm text-gray-300 font-medium"
                        >
                            Background:
                        </label>
                        <input
                            id="bg-color-picker"
                            type="color"
                            value={bgColor}
                            onChange={(e) => setBgColor(e.target.value)}
                            className="w-8 h-8 rounded-full border border-gray-500 shadow-inner cursor-pointer"
                        />
                    </div>
                </div>
                <iframe
                    srcDoc={iframeSrcDoc}
                    title="Live Preview"
                    sandbox="allow-scripts"
                    frameBorder="0"
                    width="100%"
                    height="500px"
                    style={{ backgroundColor: bgColor }}
                    className="rounded-lg shadow-lg border-2 border-gray-600"
                ></iframe>
            </div>
            <footer className="bg-transparent text-gray-300 py-4">
                <div className="flex justify-center items-center space-x-2">
                    <div className="text-white text-lg font-bold">
                        Code<span className="text-blue-500 underline">Craft</span>
                    </div>
                    <span>|</span>
                    <p>
                        Made with lot of ❤️ by Rajnish Kumar.
                    </p>
                </div>
            </footer>
        </div>
    );
}
