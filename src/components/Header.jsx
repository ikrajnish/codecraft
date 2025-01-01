import React from "react";
import { useNavigate } from "react-router-dom";


export default function Header() {
    const navigate = useNavigate();
    return (
        <header className="flex justify-between items-center px-8 py-4 bg-gray-900/40 backdrop-blur-md fixed w-full top-0 z-10 shadow-lg">
            <div className="text-white text-2xl font-bold">
                <span className="text-white"
                onClick={() => navigate("/")}>Code</span>
                <span className="text-blue-500 underline"
                onClick={() => navigate("/")}>Craft</span>
            </div>
            <div className="flex space-x-4">
                {location.pathname === "/" ? (
                    <button
                        onClick={() => navigate("/code")}
                        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
                    >
                        Start Coding
                    </button>
                ) : (
                    <button
                        onClick={() => navigate("/")}
                        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
                    >
                        Go Home
                    </button>
                )}
                <button
                    className="px-4 py-2 bg-gray-800 text-gray-400 rounded-lg hover:bg-gray-700 hover:text-white transition"
                    onClick={() => window.open("https://x.com/__rj11", "_blank")}
                >
                    Twitter
                </button>
            </div>
        </header>
    );
};
