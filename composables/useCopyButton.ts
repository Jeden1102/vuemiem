export const useCopyButton = () => {
  document.querySelectorAll("pre").forEach((pre) => {
    const button = document.createElement("button");
    button.textContent = "Kopiuj";
    button.className = "copy-btn";
    button.addEventListener("click", async () => {
      const code = pre.querySelector("code")?.innerText;
      try {
        await navigator.clipboard.writeText(code || "");
        button.textContent = "Skopiowano!";
        setTimeout(() => (button.textContent = "Kopiuj"), 2000);
      } catch (err) {
        console.error("Failed to copy text: ", err);
      }
    });
    pre.style.position = "relative";
    pre.appendChild(button);
  });
};
