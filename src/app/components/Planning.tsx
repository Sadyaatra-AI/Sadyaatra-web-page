"use client"

import react from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Interface } from "readline";

interface Planning {
    id: number;
    title: String;
    description: String;
}

const cards = [
    {
        id: 1,
        title: "AI powered research",
        description: "AI powered research that saves you hours of work finding hotels under budget",
    },
    {
        id: 2,
        title: "Budget Estimation",
        description: "Estimate prices of transport, food and accommodation instantly.",
    },
    {
        id: 3,
        title: "detailed day-wise itinereary",
        description: "Custom generated day-wise itinerary covering places to visit, food to try and things to do.",
    },
];


export default function Planning() {
    return (
        <section className="max-w-6xl mx-auto p-6">
            {/* 3-Column Responsive Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {cards.map((card) => (
                    <div
                        key={card.id}
                        className="p-6 bg-slate-900 border border-slate-800 rounded-2xl shadow-lg transition-all duration-300 hover:border-slate-700 hover:shadow-xl hover:-translate-y-1"
                    >
                        <h3 className="text-xl font-bold text-white mb-2">
                            {card.title}
                        </h3>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            {card.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}