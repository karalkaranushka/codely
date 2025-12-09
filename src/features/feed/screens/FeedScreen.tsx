import React, { useMemo, useState } from "react";
import {
  View,
  SectionList,
  StyleSheet,
  StatusBar,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  FEED_COLORS,
  FEED_RADIUS,
  FEED_SPACING,
} from "../theme";
import type { ReleaseSection } from "../types";
import { SearchFrameworksInput } from "../../../components/Input/SearchFrameworksInput";
import { FilterChip } from "../components/FilterChip";
import { SectionHeader } from "../components/SectionHeader";
import { ReleaseCard } from "../../../components/cards/ReleaseCard";

const MOCK_SECTIONS: ReleaseSection[] = [
  {
    id: "march-2025",
    title: "MARCH 2025",
    data: [
      {
        id: "react-19-1-0",
        framework: "React",
        title: "React 19.1.0 Released",
        subtitle: "Enhanced server components",
        dateLabel: "Mar 15, 2025",
        badge: "New",
        typeLabel: "Major Release",
      },
      {
        id: "next-15-2",
        framework: "Next.js",
        title: "Next.js 15.2 Update",
        subtitle: "Performance improvements",
        dateLabel: "Mar 12, 2025",
        badge: "New",
        typeLabel: "Minor Update",
      },
    ],
  },
  {
    id: "feb-2025",
    title: "FEBRUARY 2025",
    data: [
      {
        id: "node-22-beta",
        framework: "Node.js",
        title: "Node.js 22.0 Beta",
        subtitle: "New V8 engine features",
        dateLabel: "Feb 28, 2025",
        typeLabel: "Minor Update",
      },
    ],
  },
];

export const FeedScreen: React.FC = () => {
  const [search, setSearch] = useState("");

  const filteredSections = useMemo<ReleaseSection[]>(() => {
    if (!search.trim()) return MOCK_SECTIONS;

    const q = search.toLowerCase();
    return MOCK_SECTIONS.map((section) => ({
      ...section,
      data: section.data.filter(
        (item) =>
          item.framework.toLowerCase().includes(q) ||
          item.title.toLowerCase().includes(q)
      ),
    })).filter((section) => section.data.length > 0);
  }, [search]);

  return (
    <SafeAreaView style={styles.container}>
      {/* <StatusBar barStyle="light-content" /> */}

      <View style={styles.topShell}>
        <SearchFrameworksInput
          value={search}
          onChangeText={setSearch}
        />

        <View style={{ height: 12 }} />

        <FilterChip label="Monthly" onPress={() => {}} />
      </View>

      <SectionList
        sections={filteredSections}
        keyExtractor={(item) => item.id}
        renderSectionHeader={({ section }) => (
          <SectionHeader title={section.title} />
        )}
        renderItem={({ item }) => (
          <ReleaseCard
            item={item}
            onPress={(release) => {
              console.log("Pressed release", release.id);
            }}
          />
        )}
        ItemSeparatorComponent={() => null}
        stickySectionHeadersEnabled={false}
        contentContainerStyle={{ paddingBottom: 24 }}
        ListFooterComponent={<View style={{ height: 24 }} />}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: FEED_COLORS.background,
    overflow: "hidden",
  },
  topShell: {
    paddingHorizontal: 12,
    paddingTop: 12,
    paddingBottom: 10,
  },
});