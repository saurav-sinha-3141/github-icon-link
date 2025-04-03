import { useEffect } from "react";

interface GithubIconProps {
  url?: string;
  imageSrc?: string;
  size?: number;
  position?: { bottom?: string; right?: string; top?: string; left?: string };
}

export default function GithubIcon({
  url = "https://github.com/saurav-sinha-3141",
  imageSrc,
  size = 40,
  position = { bottom: "20px", right: "20px" },
}: GithubIconProps) {
  useEffect(() => {
    const GITHUB_ID = "github-icon-link";
    if (document.getElementById(GITHUB_ID)) return;

    const anchor = document.createElement("a");
    anchor.id = GITHUB_ID;
    anchor.href = url;
    anchor.target = "_blank";
    anchor.ariaLabel = "GitHub Profile";

    if (imageSrc) {
      anchor.innerHTML = `<img src="${imageSrc}" alt="GitHub Icon" width="${size}" height="${size}" style="border-radius:50%;"/>`;
    } else {
      anchor.innerHTML = `
        <svg height="${size}" width="${size}" viewBox="0 0 24 24" fill="white">
          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.302 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.082-.729.082-.729 1.205.086 1.84 1.242 1.84 1.242 1.07 1.835 2.807 1.305 3.495.998.107-.775.42-1.305.762-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.302-.54-1.524.105-3.175 0 0 1.005-.322 3.3 1.23a11.503 11.503 0 013-.405c1.02.005 2.04.138 3 .405 2.295-1.552 3.3-1.23 3.3-1.23.645 1.651.24 2.873.105 3.175.77.84 1.235 1.91 1.235 3.22 0 4.61-2.805 5.625-5.475 5.92.43.372.825 1.102.825 2.22 0 1.605-.015 2.895-.015 3.285 0 .322.22.695.825.575 4.765-1.582 8.2-6.08 8.2-11.38 0-6.627-5.37-12-12-12z"/>
        </svg>`;
    }

    Object.assign(anchor.style, {
      position: "fixed",
      zIndex: "1000",
      cursor: "pointer",
      opacity: "0.8",
      transition: "opacity 0.3s",
      bottom: position.bottom,
      right: position.right,
      top: position.top,
      left: position.left,
    });

    anchor.addEventListener("mouseenter", () => (anchor.style.opacity = "1"));
    anchor.addEventListener("mouseleave", () => (anchor.style.opacity = "0.8"));

    document.body.appendChild(anchor);

    return () => {
      document.body.removeChild(anchor);
    };
  }, [url, imageSrc, size, position]);

  return null;
}
