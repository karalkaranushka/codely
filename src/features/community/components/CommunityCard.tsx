import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import {
  FEED_COLORS,
  FEED_RADIUS,
  FEED_TYPO,
  FEED_SPACING,
} from "../../feed/theme";
import type { Community } from "../types";

interface Props {
  community: Community;
  onPress?: (community: Community) => void;
  onJoinPress?: (community: Community) => void;
}

export const CommunityCard: React.FC<Props> = ({
  community,
  onPress,
  onJoinPress,
}) => {
  const isJoined = community.kind === "joined";

  const handlePress = () => onPress?.(community);
  const handleJoin = () => onJoinPress?.(community);

  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={handlePress}
      style={styles.cardWrapper}
    >
      <View style={styles.card}>
        <View style={styles.cardTopRow}>
          <View style={styles.avatar}>
            <Text style={styles.avatarInitial}>
              {community.name.charAt(0).toUpperCase()}
            </Text>
          </View>

          <View style={styles.nameBlock}>
            <View style={styles.nameRow}>
              <Text style={styles.name}>{community.name}</Text>

              {community.unreadCount ? (
                <View style={styles.unreadBadge}>
                  <Text style={styles.unreadText}>
                    {community.unreadCount}
                  </Text>
                </View>
              ) : null}
            </View>

            <Text style={styles.meta}>
              {community.members.toLocaleString()} members •{" "}
              {community.online} online
            </Text>
          </View>

          <View style={styles.rightSlot}>
            {isJoined && community.lastActiveLabel ? (
              <Text style={styles.timeLabel}>
                {community.lastActiveLabel}
              </Text>
            ) : (
              <TouchableOpacity
                activeOpacity={0.9}
                onPress={handleJoin}
                style={styles.joinButton}
              >
                <Text style={styles.joinText}>Join</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>

        <Text style={styles.lastMessage} numberOfLines={2}>
          {community.lastMessage}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardWrapper: {
    paddingHorizontal: FEED_SPACING.screenPadding,
    paddingBottom: 12,
  },
  card: {
    borderRadius: FEED_RADIUS.card,
    backgroundColor: FEED_COLORS.cardBackground,
    borderWidth: 1,
    borderColor: FEED_COLORS.cardBorder,
    paddingHorizontal: 16,
    paddingVertical: 14,
  },
  cardTopRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: "#151b26",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  avatarInitial: {
    fontSize: 18,
    fontWeight: "600",
    color: FEED_COLORS.textPrimary,
  },
  nameBlock: {
    flex: 1,
  },
  nameRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 2,
  },
  name: {
    fontSize: FEED_TYPO.subtitle,
    fontWeight: "600",
    color: FEED_COLORS.textPrimary,
  },
  unreadBadge: {
    marginLeft: 8,
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 999,
    backgroundColor: "#2563EB",
  },
  unreadText: {
    fontSize: 11,
    fontWeight: "600",
    color: "#FFFFFF",
  },
  meta: {
    fontSize: FEED_TYPO.meta,
    color: FEED_COLORS.textMuted,
  },
  rightSlot: {
    marginLeft: 8,
    alignItems: "flex-end",
  },
  timeLabel: {
    fontSize: FEED_TYPO.meta,
    color: FEED_COLORS.sectionLabel,
  },
  joinButton: {
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: FEED_COLORS.cardBorder,
    backgroundColor: "rgba(15,23,42,0.9)",
  },
  joinText: {
    fontSize: 13,
    fontWeight: "500",
    color: FEED_COLORS.textPrimary,
  },
  lastMessage: {
    fontSize: FEED_TYPO.subtitle,
    color: FEED_COLORS.textSecondary,
  },
});