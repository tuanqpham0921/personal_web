import { useState, useRef, useEffect } from "react";
import { ArrowLeft, ChevronDown } from "lucide-react";

const versions = [
  { key: "v1", label: "Version 1", path: "/book-recommender-v1" },
  { key: "v2", label: "Version 2", path: "/book-recommender" },
];

export function VersionDropdown({ currentVersion }) {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleVersionChange = (path) => {
    window.location.href = path;
  };

  return (
    <div
      className="fixed top-4 right-4 z-50"
      ref={dropdownRef}
    >
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex items-center gap-2 px-4 py-2 text-base bg-secondary/80 hover:bg-secondary/90 rounded-lg shadow border font-semibold"
        aria-label="Switch version"
      >
        <span>{versions.find((v) => v.key === currentVersion)?.label || "Version"}</span>
        <ChevronDown size={18} className={`transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="absolute right-0 mt-2 w-40 bg-card border rounded-lg shadow-lg py-2">
          {versions.map((ver) => (
            <button
              key={ver.key}
              onClick={() => handleVersionChange(ver.path)}
              className={`block w-full px-4 py-3 text-left text-base whitespace-nowrap hover:bg-secondary/40 transition-colors rounded-lg ${
                currentVersion === ver.key ? "bg-primary/10 text-primary font-bold" : ""
              }`}
            >
              {ver.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export function BackArrow() {
  return (
    <div className="w-full flex justify-start px-4 mt-2 mb-4">
      <button
        onClick={() => window.location.href = "/"}
        className="flex items-center justify-center px-2 py-2 bg-secondary/80 hover:bg-secondary/90 rounded-lg shadow border"
        aria-label="Back to Home"
      >
        <ArrowLeft size={20} />
      </button>
    </div>
  );
}

// For compatibility, you can still use VersionSwitcher as before
export default function VersionSwitcher({ currentVersion }) {
  return (
    <>
      <BackArrow />
      <VersionDropdown currentVersion={currentVersion} />
    </>
  );
}
