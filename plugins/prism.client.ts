import Prism from "prismjs";
import "prismjs/themes/prism.css"; // Motyw Prism.js

export default defineNuxtPlugin(() => {
  Prism.highlightAll();
  console.log("HERE");

  document.querySelectorAll("pre").forEach((pre) => {
    const button = document.createElement("button");
    button.textContent = "Copy";
    button.className = "copy-btn";

    button.addEventListener("click", async () => {
      const code = pre.querySelector("code")?.innerText;
      try {
        await navigator.clipboard.writeText(code || "");
        button.textContent = "Copied!";
        setTimeout(() => (button.textContent = "Copy"), 2000);
      } catch (err) {
        console.error("Failed to copy text: ", err);
      }
    });
    pre.style.position = "relative";
    pre.appendChild(button);
  });
});
