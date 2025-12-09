import React from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import { FEED_COLORS, FEED_RADIUS } from "../../feed/theme";
import { useCommunityScreen } from "../hooks/useCommunityScreen";
import { CommunityHeader } from "./components/CommunityHeader";
import { SectionTitle } from "./components/SectionTitle";
import { CommunityCard } from "./components/CommunityCard";

export const CommunityScreen: React.FC = () => {
  const {
    yourCommunities,
    discoverCommunities,
    handleOpenCommunity,
    handleJoinCommunity,
  } = useCommunityScreen();

  return (
    <View style={styles.container}>
      <CommunityHeader />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <SectionTitle title="Your Communities" />
        {yourCommunities.map((c) => (
          <CommunityCard
            key={c.id}
            community={c}
            onPress={handleOpenCommunity}
          />
        ))}

        <SectionTitle title="Discover Communities" />
        {discoverCommunities.map((c) => (
          <CommunityCard
            key={c.id}
            community={c}
            onPress={handleOpenCommunity}
            onJoinPress={handleJoinCommunity}
          />
        ))}

        <View style={{ height: 24 }} />
      </ScrollView>
    </View>
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
  scrollContent: {
    paddingTop: 8,
    paddingBottom: 24,
  },
});