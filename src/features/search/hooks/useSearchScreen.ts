import { useCallback, useState } from "react";
import {
  RECENT_SEARCHES,
  BROWSE_FRAMEWORKS,
} from "../utils/searchData";
import type { RecentSearch, FrameworkItem } from "../types";

export const useSearchScreen = () => {
  const [query, setQuery] = useState("");

  const handleChangeText = useCallback((value: string) => {
    setQuery(value);
  }, []);

  const handleRecentPress = useCallback((item: RecentSearch) => {
    setQuery(item.query);
    // TODO: trigger search / navigation
    console.log("Recent pressed", item.query);
  }, []);

  const handleFrameworkPress = useCallback((item: FrameworkItem) => {
    // TODO: navigate to framework detail / pre-filled search
    console.log("Framework pressed", item.name);
  }, []);

  return {
    query,
    recentSearches: RECENT_SEARCHES,
    frameworks: BROWSE_FRAMEWORKS,
    handleChangeText,
    handleRecentPress,
    handleFrameworkPress,
  };
};