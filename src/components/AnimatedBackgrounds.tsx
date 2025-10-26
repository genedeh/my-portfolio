"use client";
import React, { useEffect, useState } from "react";

interface Petal {
    id: string;
    left: number;
    size: number;
    duration: number;
    delay: number;
    rotate: number;
}

const PetalBackground: React.FC<{ count?: number }> = ({ count = 20 }) => {
    const [petals, setPetals] = useState<Petal[]>([]);

    useEffect(() => {
        const newPetals = Array.from({ length: count }).map(() => ({
            id: crypto.randomUUID(),
            left: Math.random() * 100, 
            size: 0.6 + Math.random() * 1.5, 
            duration: 10 + Math.random() * 15,
            delay: Math.random() * 5, 
            rotate: Math.random() * 360, 
        }));
        setPetals(newPetals);
    }, [count]);

    return (
        <div className="pointer-events-none fixed inset-0 overflow-hidden z-1">
            {petals.map((p) => (
                <div
                    key={p.id}
                    className="absolute animate-petal-fall"
                    style={{
                        left: `${p.left}%`,
                        animationDuration: `${p.duration}s`,
                        animationDelay: `${p.delay}s`,
                        transform: `scale(${p.size}) rotate(${p.rotate}deg)`,
                    }}
                >
                    <svg
                        width="20"
                        height="16"
                        viewBox="0 0 12 10"
                        xmlns="http://www.w3.org/2000/svg"
                        className="opacity-80"
                    >
                        <path
                            d="M6 0C8 .7 11 3.4 9.4 6.1 8 8.4 6 9.2 6 10c0-.8-2-1.6-3.4-3.9C1 3.4 4 0.7 6 0z"
                            fill="var(--accent)"
                        />
                    </svg>
                </div>
            ))}
        </div>
    );
};

export default PetalBackground;
