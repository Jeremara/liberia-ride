import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  TextInput
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  Star,
  ThumbsUp,
  Heart,
  Zap,
  Award
} from "lucide-react-native";

const badges = [
  { id: "friendly", label: "Friendly", icon: ThumbsUp },
  { id: "clean", label: "Clean Car", icon: Zap },
  { id: "safe", label: "Safe Driving", icon: Award },
  { id: "professional", label: "Professional", icon: Heart }
];

export default function RatingScreen() {

  const navigation = useNavigation<any>();

  const [rating, setRating] = useState(0);
  const [selectedBadges, setSelectedBadges] = useState<string[]>([]);
  const [feedback, setFeedback] = useState("");

  const handleBadgeToggle = (badgeId: string) => {
    setSelectedBadges(prev =>
      prev.includes(badgeId)
        ? prev.filter(id => id !== badgeId)
        : [...prev, badgeId]
    );
  };

  const handleSubmit = () => {
    navigation.replace("Main", {
      screen: "Home"
    });
  };

  return (
    <SafeAreaView style={styles.container}>

      {/* Driver Info */}
      <View style={styles.driverSection}>

        <View style={styles.avatar}>
          <Text style={styles.avatarText}>JD</Text>
        </View>

        <Text style={styles.title}>Rate Your Trip</Text>

        <Text style={styles.subtitle}>
          How was your ride with John?
        </Text>

      </View>

      {/* Star Rating */}
      <View style={styles.starsRow}>

        {[1, 2, 3, 4, 5].map(star => (

          <TouchableOpacity
            key={star}
            onPress={() => setRating(star)}
          >

            <Star
              size={45}
              color={star <= rating ? "#f59e0b" : "#ccc"}
              fill={star <= rating ? "#f59e0b" : "none"}
            />

          </TouchableOpacity>

        ))}

      </View>

      {rating > 0 && (

        <View style={styles.content}>

          {/* Message */}
          <View style={styles.messageBox}>

            <Text style={styles.messageText}>
              {rating === 5 && "Excellent! 🎉"}
              {rating === 4 && "Great ride! 👍"}
              {rating === 3 && "Good experience"}
              {rating <= 2 && "We'll do better"}
            </Text>

          </View>

          {/* Badges */}
          {rating >= 4 && (

            <View>

              <Text style={styles.sectionTitle}>
                What did you like?
              </Text>

              <View style={styles.badgesGrid}>

                {badges.map(badge => {

                  const Icon = badge.icon;
                  const isSelected = selectedBadges.includes(badge.id);

                  return (

                    <TouchableOpacity
                      key={badge.id}
                      onPress={() => handleBadgeToggle(badge.id)}
                      style={[
                        styles.badge,
                        isSelected && styles.badgeSelected
                      ]}
                    >

                      <Icon
                        size={22}
                        color={isSelected ? "#00b894" : "#777"}
                      />

                      <Text style={styles.badgeText}>
                        {badge.label}
                      </Text>

                    </TouchableOpacity>

                  );

                })}

              </View>

            </View>

          )}

          {/* Feedback */}
          <View>

            <Text style={styles.sectionTitle}>
              {rating <= 3
                ? "How can we improve?"
                : "Additional Comments (Optional)"
              }
            </Text>

            <TextInput
              style={styles.textArea}
              placeholder="Share your experience..."
              value={feedback}
              onChangeText={setFeedback}
              multiline
            />

          </View>

          {/* Buttons */}
          <View style={styles.buttons}>

            <TouchableOpacity
              style={styles.submitButton}
              onPress={handleSubmit}
            >
              <Text style={styles.submitText}>
                Submit Rating
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.skipButton}
              onPress={() => navigation.navigate("Home")}
            >
              <Text>Skip</Text>
            </TouchableOpacity>

          </View>

        </View>

      )}

      {rating === 0 && (

        <Text style={styles.hint}>
          Tap a star to rate your experience
        </Text>

      )}

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20
  },

  driverSection: {
    alignItems: "center",
    marginTop: 20
  },

  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: "#00b894",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10
  },

  avatarText: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "600"
  },

  title: {
    fontSize: 24,
    fontWeight: "600"
  },

  subtitle: {
    color: "#777"
  },

  starsRow: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 20,
    gap: 6
  },

  content: {
    gap: 20
  },

  messageBox: {
    backgroundColor: "#00b89420",
    padding: 12,
    borderRadius: 10,
    alignItems: "center"
  },

  messageText: {
    fontWeight: "500"
  },

  sectionTitle: {
    fontWeight: "600",
    marginBottom: 8
  },

  badgesGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10
  },

  badge: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 12,
    borderRadius: 10,
    alignItems: "center",
    width: "47%"
  },

  badgeSelected: {
    borderColor: "#00b894",
    backgroundColor: "#00b89410"
  },

  badgeText: {
    marginTop: 4,
    fontSize: 12
  },

  textArea: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    padding: 10,
    height: 100,
    textAlignVertical: "top"
  },

  buttons: {
    gap: 10
  },

  submitButton: {
    backgroundColor: "#00b894",
    height: 55,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center"
  },

  submitText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600"
  },

  skipButton: {
    height: 50,
    justifyContent: "center",
    alignItems: "center"
  },

  hint: {
    textAlign: "center",
    marginTop: 30,
    color: "#777"
  }

});