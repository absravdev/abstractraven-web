const PROJECTS = [
    {
        title: "Aeternum",
        image: "./assets/screenshot_aeternum.png",
        desc: "Top-down shooter with 15 levels across 5 planets, 6 enemy types and a tiered upgrade shop. Later extended with a global online leaderboard (Node + Express + PostgreSQL) and 2-player host-authoritative LAN co-op over ENet.",
        tags: ["Lua", "Love2D", "ENet", "Node.js", "PostgreSQL"],
        links: [
            { label: "GitHub", url: "https://github.com/absravdev/Aeternum" },
            { label: "Itchio", url: "https://absrav.itch.io/aeternum" }
        ]
    },
    {
        title: "Mini Game Engine",
        image: "./assets/screenshot_minigameengine.png",
        desc: "A small reusable C++ console engine running three games through a shared IGame interface. Frame-buffered rendering, fixed-timestep loop and input edge detection.",
        tags: ["C++", "Win32", "tinyxml2"],
        links: [
            { label: "GitHub", url: "https://github.com/absravdev/Mini-Game-Engine" }
        ]
    },
    {
        title: "TPV Learner",
        image: "./assets/screenshot_postrainerlua.png",
        desc: "A Lua/Love2D POS training simulator built while working as a waiter, so new staff could practice finding products without holding up service.",
        tags: ["Lua", "Love2D"],
        links: [
            { label: "GitHub", url: "https://github.com/absravdev/pos-trainer-lua" }
        ]
    }
];

const SKILLS = ["C#", "C++", "Lua", "Unity", "Unreal", "Love2D", "3ds Max", "Substance", "Git"];

const CONTACTS = [
    {
        name: "Email",
        handle: "absravdev@gmail.com",
        copy: "absravdev@gmail.com",
        icon: '<svg viewBox="0 0 24 24" fill="#BB9AF7"><path d="M3 4h18a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1zm9 7.7L4.6 6H3v.5l9 6.9 9-6.9V6h-1.6L12 11.7zM21 8.3l-9 6.9-9-6.9V18h18V8.3z"/></svg>'
    },
    {
        name: "Discord",
        handle: "absrav",
        copy: "absrav",
        icon: '<svg viewBox="0 0 24 24" fill="#7DCFFF"><path d="M20.317 4.369a19.79 19.79 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.6 12.6 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.1 13.1 0 0 1-1.872-.892.077.077 0 0 1-.008-.128c.126-.094.252-.192.372-.291a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.009c.12.099.246.198.373.292a.077.077 0 0 1-.006.127 12.3 12.3 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.84 19.84 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.331c-1.182 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/></svg>'
    }
];

/* Render */

document.getElementById("year").textContent = new Date().getFullYear();

const projectsGrid = document.querySelector(".projects-grid");
if (projectsGrid) {
    PROJECTS.forEach(p => {
        const links = p.links.map(l => `<a href="${l.url}" target="_blank" rel="noopener">${l.label} →</a>`).join("");
        const tags = p.tags.map(t => `<span>${t}</span>`).join("");
        const thumb = p.image
            ? `<img src="${p.image}" alt="${p.title}" loading="lazy">`
            : `<span>project image</span>`;
        const card = document.createElement("article");
        card.className = "project-card";
        card.innerHTML = `
            <div class="project-thumb">${thumb}</div>
            <div class="project-body">
                <h3>${p.title}</h3>
                <p>${p.desc}</p>
                <div class="project-tags">${tags}</div>
                <div class="project-links">${links}</div>
            </div>`;
        projectsGrid.appendChild(card);
    });
}

const skillsGrid = document.querySelector(".skills-grid");
SKILLS.forEach(s => {
    const chip = document.createElement("span");
    chip.className = "skill-chip";
    chip.textContent = s;
    skillsGrid.appendChild(chip);
});

const contactLinks = document.querySelector(".social-links");
if (contactLinks) {
    CONTACTS.forEach(c => {
        const inner = `${c.icon}<span><span class="social-name">${c.name}</span><br><span class="social-handle">${c.handle}</span></span>`;
        let el;
        if (c.url) {
            el = document.createElement("a");
            el.href = c.url;
            if (!c.url.startsWith("mailto:")) {
                el.target = "_blank";
                el.rel = "noopener";
            }
        } else {
            el = document.createElement("button");
            el.type = "button";
        }
        el.className = "social-card";
        el.innerHTML = inner;
        if (c.copy) {
            el.addEventListener("click", () => {
                if (navigator.clipboard) navigator.clipboard.writeText(c.copy);
                const handle = el.querySelector(".social-handle");
                const original = handle.textContent;
                handle.textContent = "Copied!";
                setTimeout(() => { handle.textContent = original; }, 1400);
            });
        }
        contactLinks.appendChild(el);
    });
}

/* Menu */

const toggle = document.querySelector(".mobile-menu-toggle");
const navLinks = document.getElementById("nav-links");

toggle.addEventListener("click", () => {
    const open = navLinks.classList.toggle("open");
    toggle.classList.toggle("open", open);
    toggle.setAttribute("aria-expanded", String(open));
});

navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("open");
        toggle.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
    });
});

/* Background */

const canvas = document.getElementById("code-canvas");
const ctx = canvas.getContext("2d");
const COLORS = ["#BB9AF7", "#7DCFFF", "#9ECE6A"];
const TOKENS = ["{ }", "( )", "[ ]", "</>", "=>", ";", "//", "&&", "::", "==", "!=", "++", "const", "void", "fn", "0xFF"];
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

let tokens = [];
let width = 0;
let height = 0;

function makeToken() {
    return {
        x: Math.random() * width,
        y: Math.random() * height,
        vy: -(0.12 + Math.random() * 0.22),
        vx: (Math.random() - 0.5) * 0.08,
        size: 13 + Math.random() * 11,
        alpha: 0.05 + Math.random() * 0.11,
        text: TOKENS[Math.floor(Math.random() * TOKENS.length)],
        color: COLORS[Math.floor(Math.random() * COLORS.length)]
    };
}

function resize() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const rect = canvas.getBoundingClientRect();
    width = rect.width;
    height = rect.height;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    const count = Math.min(28, Math.max(8, Math.round((width * height) / 46000)));
    tokens = Array.from({ length: count }, makeToken);
}

function drawToken(t) {
    ctx.font = `${t.size}px "JetBrains Mono", ui-monospace, monospace`;
    ctx.fillStyle = t.color;
    ctx.globalAlpha = t.alpha;
    ctx.fillText(t.text, t.x, t.y);
}

function tick() {
    ctx.clearRect(0, 0, width, height);
    const margin = 40;
    tokens.forEach(t => {
        t.x += t.vx;
        t.y += t.vy;
        if (t.y < -margin) { t.y = height + margin; t.x = Math.random() * width; }
        if (t.x < -margin) t.x = width + margin;
        if (t.x > width + margin) t.x = -margin;
        drawToken(t);
    });
    ctx.globalAlpha = 1;
    requestAnimationFrame(tick);
}

resize();
window.addEventListener("resize", resize);

if (reduceMotion) {
    ctx.clearRect(0, 0, width, height);
    tokens.forEach(drawToken);
    ctx.globalAlpha = 1;
} else {
    requestAnimationFrame(tick);
}