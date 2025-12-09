import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import {
  FEED_COLORS,
  FEED_RADIUS,
  FEED_SPACING,
  FEED_TYPO,
} from "../../features/feed/theme";
import type { ReleaseItem } from "../../features/feed/types";

interface Props {
  item: ReleaseItem;
  onPress?: (item: ReleaseItem) => void;
}

export const ReleaseCard: React.FC<Props> = ({ item, onPress }) => {
  return (
    <TouchableOpacity
      onPress={() => onPress?.(item)}
      activeOpacity={0.9}
      style={styles.wrapper}
    >
      <View style={styles.card}>
        <View style={styles.headerRow}>
          <Text style={styles.framework}>{item.framework}</Text>

          <View style={styles.headerRight}>
            {item.badge && (
              <View style={styles.badge}>
                <Text style={styles.badgeText}>{item.badge}</Text>
              </View>
            )}
            <View style={styles.bookmarkStub} />
          </View>
        </View>

        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.subtitle}>{item.subtitle}</Text>

        <View style={styles.metaRow}>
          <Text style={styles.meta}>{item.dateLabel}</Text>
          <Text style={styles.dot}>•</Text>
          <Text style={styles.meta}>{item.typeLabel}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 12,
    paddingBottom: FEED_SPACING.betweenCards,
  },
  card: {
    borderRadius: 12,
    backgroundColor: FEED_COLORS.cardBackground,
    borderWidth: 1,
    borderColor: FEED_COLORS.cardBorder,
    paddingHorizontal: 18,
    paddingVertical: 25,
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  framework: {
    fontSize: FEED_TYPO.tag,
    color: FEED_COLORS.textMuted,
    fontWeight: "500",
  },
  headerRight: {
    flexDirection: "row",
    alignItems: "center",
  },
  badge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 6,
    backgroundColor: FEED_COLORS.badgeBg,
    marginRight: 10,
  },
  badgeText: {
    fontSize: 12,
    color: FEED_COLORS.badgeText,
    fontWeight: "600",
  },
  bookmarkStub: {
    width: 14,
    height: 18,
    borderRadius: 2,
    borderWidth: 1,
    borderColor: FEED_COLORS.bookmark,
  },
  title: {
    fontSize: 16,
    color: '#ffffffff',
    fontWeight: "700",
    marginBottom: 4,
  },
  subtitle: {
    fontSize: FEED_TYPO.subtitle,
    color: '#9CA3AF',
    marginBottom: 14,
    fontWeight: "400",
  },
  metaRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  meta: {
    fontSize: 12,
    color: '#9CA3AF',
  },
  dot: {
    fontSize: 10,
    color: '#9CA3AF',
    marginHorizontal: 6,
  },
});