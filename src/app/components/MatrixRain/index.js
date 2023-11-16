import React, { useEffect } from "react";
import "./css/index.css";

const MatrixRain = ({width, height}) => {
    useEffect(() => {
        const canvas = document.getElementById("matrix-rain");
        const ctx = canvas.getContext("2d");

        const width = 1800;
        const height = 700;
        canvas.width = width;
        canvas.height = height;

        const symbols = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        const symbolSize = 16;
        const columns = width / symbolSize;
        const drops = [];

        for (let x = 0; x < columns; x++) {
            drops[x] = Math.floor(Math.random() * height);
        }

        const symbolSpeed = 0.4;

        const centerText = "ENEMY DETECTION SYSTEM";
        const centerTextFontSize = 40;

        function draw() {
            ctx.fillStyle = "rgba(0, 0, 0, 0.04)";
            ctx.fillRect(0, 0, width, height);

            ctx.fillStyle = "#FF0000";
            ctx.font = `${symbolSize}px monospace`;

            for (let i = 0; i < drops.length; i++) {
                const text = symbols[Math.floor(Math.random() * symbols.length)];
                ctx.fillText(text, i * symbolSize, drops[i] * symbolSize);

                if (drops[i] * symbolSize > height && Math.random() > 0.975) {
                    drops[i] = 0;
                }

                drops[i] += symbolSpeed;
            }

            ctx.font = `${centerTextFontSize}px Anonymous Pro`;
            const textWidth = ctx.measureText(centerText).width;
            const x = (width - textWidth) / 2;
            const y = height / 2;
            ctx.fillStyle = "white";
            ctx.fillText(centerText, x, y);
        }

        function animate() {
            draw();
            requestAnimationFrame(animate);
        }

        animate();
    }, []);

    return <canvas id="matrix-rain" className="matrix-rain"></canvas>;
};

export default MatrixRain;
