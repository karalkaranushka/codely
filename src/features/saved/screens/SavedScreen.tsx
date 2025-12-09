import React from "react";
import {
  View,
  FlatList,
  StyleSheet,
  StatusBar,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  FEED_COLORS,
  FEED_RADIUS,
  FEED_SPACING,
} from "../../feed/theme";
import { SavedHeader } from "../components/SavedHeader";
import { useSavedUpdates } from "../hooks/useSavedUpdates";
import type { SavedUpdate } from "../types";
import { ReleaseCard } from "../../../components/cards/ReleaseCard";

export const SavedScreen: React.FC = () => {
  const { saved, totalSaved } = useSavedUpdates();

  const renderItem = ({ item }: { item: SavedUpdate }) => (
    <ReleaseCard
      item={item}
      onPress={() => {
        console.log("Open saved release", item.id);
      }}
    />
  );

  return (
    <SafeAreaView style={styles.container}>

      <SavedHeader totalSaved={totalSaved} />

      <FlatList
        data={saved}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.listContent}
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
  listContent: {
    paddingTop: 16,
    paddingBottom: 24,
    paddingHorizontal: 12,
  },
});