const BROWSER_LABELS = {
    userAgent: "User Agent",
    appName: "Browser",
    appVersion: "Version",
    platform: "Platform",
    language: "Language",
    cookieEnabled: "Cookie",
    onLine: "Online",
    hardwareConcurrency: "CPU Cores",
    deviceMemory: "Memory"
};

const getBrowserInfo = () => ({
    userAgent: navigator.userAgent,
    appName: navigator.appName,
    appVersion: navigator.appVersion,
    platform: navigator.platform,
    language: navigator.language,
    cookieEnabled: navigator.cookieEnabled,
    onLine: navigator.onLine,
    hardwareConcurrency: navigator.hardwareConcurrency,
    deviceMemory: navigator.deviceMemory || "Unknown"
});

const formatValue = (key, value) => {
    if (['cookieEnabled', 'onLine'].includes(key)) return value ? "Yes" : "No";
    if (key === "deviceMemory" && value !== "Unknown") return `${value} GB`;
    return value;
};

const createStorageHTML = () => {
    const items = Object.keys(localStorage).map(key => {
        const rawValue = localStorage.getItem(key);
        let content = '';
        try {
            const parsed = JSON.parse(rawValue);
            if (parsed && typeof parsed === 'object') {
                content = `<div>` + Object.entries(parsed).map(([k, v]) => `
                    <p><strong>${BROWSER_LABELS[k] || k}:</strong> ${formatValue(k, v)}</p>
                `).join('') + `</div>`;
            } else {
                content = `<p><strong>${key}:</strong> ${parsed}</p>`;
            }
        } catch {
            content = `<p><strong>${key}:</strong> ${rawValue}</p>`;
        }
        return content;
    });
    return `<h2>Storage Info</h2>${items.join('')}`;
};

const fetchComments = async () => {
    const container = document.getElementById("comments-container");
    if (!container) return;
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/25/comments");
        const comments = await response.json();
        container.innerHTML = `<h2>Comments</h2>` + comments.map(c => `
            <div style="border-bottom: 1px solid var(--line-color); padding: 10px 0;">
                <h4>${c.name}</h4>
                <p>${c.body}</p>
            </div>
        `).join('');
    } catch {
        container.innerHTML = "<p>Error loading comments.</p>";
    }
};

const updateThemeUI = (theme) => {
    const isDark = theme === "dark";
    document.body.classList.toggle("dark-theme", isDark);
    const btn = document.getElementById("theme-toggle");
    if (btn) btn.textContent = isDark ? "Light Mode" : "Dark Mode";
    localStorage.setItem("theme", theme);
};

const init = () => {
    localStorage.setItem("browserInfo", JSON.stringify(getBrowserInfo()));
    const storageBlock = document.getElementById("storage-info");
    if (storageBlock) storageBlock.innerHTML = createStorageHTML();

    const hour = new Date().getHours();
    const savedTheme = localStorage.getItem("theme") || (hour >= 7 && hour < 21 ? "light" : "dark");
    updateThemeUI(savedTheme);

    document.getElementById("theme-toggle")?.addEventListener("click", () => {
        const current = localStorage.getItem("theme");
        updateThemeUI(current === "dark" ? "light" : "dark");
    });

    document.getElementById("close-modal")?.addEventListener("click", () => {
        document.getElementById("feedback-modal").classList.add("hidden");
    });

    window.addEventListener("click", (e) => {
        if (e.target.id === "feedback-modal") {
            document.getElementById("feedback-modal").classList.add("hidden");
        }
    });

    fetchComments();
    setTimeout(() => {
        document.getElementById("feedback-modal").classList.remove("hidden");
    }, 60000);
};

document.addEventListener("DOMContentLoaded", init);