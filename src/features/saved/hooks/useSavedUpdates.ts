import { useMemo, useState, useCallback } from "react";
import type { SavedUpdate } from "../types";

const MOCK_SAVED: SavedUpdate[] = [
  {
    id: "react-19-1-0",
    framework: "React",
    title: "React 19.1.0 Released",
    subtitle: "Enhanced server components",
    dateLabel: "Mar 15, 2025",
    typeLabel: "Major Release",
  },
  {
    id: "node-22-beta",
    framework: "Node.js",
    title: "Node.js 22.0 Beta",
    subtitle: "New V8 engine features",
    dateLabel: "Feb 28, 2025",
    typeLabel: "Minor Update",
  },
];

export const useSavedUpdates = () => {
  const [saved, setSaved] = useState<SavedUpdate[]>(MOCK_SAVED);

  const totalSaved = useMemo(() => saved.length, [saved]);

  const removeSaved = useCallback((id: string) => {
    setSaved((prev) => prev.filter((item) => item.id !== id));
  }, []);

  // if you want toggle behaviour later:
  const isSaved = useCallback(
    (id: string) => saved.some((item) => item.id === id),
    [saved]
  );

  return {
    saved,
    totalSaved,
    removeSaved,
    isSaved,
  };
};