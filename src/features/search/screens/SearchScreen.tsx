import React from "react";
import {
  View,
  ScrollView,
  StyleSheet,
  StatusBar,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  FEED_COLORS,
  FEED_RADIUS,
} from "../../feed/theme";
import { SearchFrameworksInput } from "../../../components/Input/SearchFrameworksInput";
import FrameworkOptionCard from "../../../components/cards/FrameworkOptionCard";
import { useSearchScreen } from "../hooks/useSearchScreen";
import { SectionTitle } from "../components/SectionTitle";
import { RecentSearchItem } from "../components/RecentSearchItem";

export const SearchScreen: React.FC = () => {
  const {
    query,
    recentSearches,
    frameworks,
    handleChangeText,
    handleRecentPress,
    handleFrameworkPress,
  } = useSearchScreen();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />

      <SearchFrameworksInput value={query} onChangeText={handleChangeText} />
      <View style={styles.topDivider} />

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <SectionTitle label="Recent Searches" />
        {recentSearches.map((item) => (
          <RecentSearchItem
            key={item.id}
            item={item}
            onPress={handleRecentPress}
          />
        ))}

        {/* Browse Frameworks */}
        <SectionTitle label="Browse Frameworks" />

        <View style={styles.frameworkGrid}>
          {frameworks.map((fw) => (
            <FrameworkOptionCard
              key={fw.id}
              item={fw}
              onPress={() => handleFrameworkPress(fw)}
            />
          ))}
        </View>

        <View style={{ height: 24 }} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: FEED_COLORS.background,
    borderTopLeftRadius: FEED_RADIUS.screen,
    borderTopRightRadius: FEED_RADIUS.screen,
    overflow: "hidden",
  },
  topDivider: {
    height: 1,
    backgroundColor: FEED_COLORS.divider,
    marginTop: 20,
  },
  scrollContent: {
    paddingTop: 8,
    paddingBottom: 24,
  },
  frameworkGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingHorizontal: 12,
    paddingTop: 4,
  },
});