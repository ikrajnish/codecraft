import React from "react";
import bgimg from '../assets/bgimg.jpg';

export default function Homepage() {
    return (
        <div
            className="min-h-screen bg-cover bg-center text-white"
            style={{
                backgroundImage: `url(${bgimg})`,
            }}
        >
            {/* Header */}
            <header className="flex justify-between items-center px-8 py-4 bg-transparent fixed w-full top-0 z-10">
                <div className="text-white text-2xl font-bold">
                    <span className="text-white">Code</span>
                    <span className="text-blue-500 underline">Craft</span>
                </div>
                <div className="flex space-x-4">
                    <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
                        Start Coding
                    </button>
                    <button className="px-4 py-2 bg-gray-800 text-gray-400 rounded-lg hover:bg-gray-700 hover:text-white transition">
                        Twitter
                    </button>
                </div>
            </header>

            {/* Hero Section */}
            <main className="flex flex-col items-center justify-center text-center min-h-screen px-4">
                <h1 className="text-5xl font-extrabold mt-20">
                    Build, Edit, and Code{" "}
                    <span className="text-blue-500">Instantly</span>
                </h1>
                <p className="text-xl mt-4 text-gray-300">
                    A lightweight, fast, and user-friendly online code editor supporting HTML, CSS, and JavaScript. 💻✨
                </p>
                <button className="mt-8 px-6 py-3 bg-blue-500 text-white text-lg font-medium rounded-lg hover:bg-blue-600 transition">
                    Start Coding
                </button>
                <p className="mt-4 text-sm text-gray-400">
                    Just saying, this definitely isn’t a CodePen clone. Nope, not at all. 😇✌️
                </p>
            </main>

            {/* Footer */}
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
