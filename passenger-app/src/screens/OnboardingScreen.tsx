import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  MapPin,
  Navigation,
  CreditCard,
  ChevronLeft,
  ChevronRight
} from "lucide-react-native";

const slides = [
  {
    icon: MapPin,
    title: "Book Your Ride",
    description:
      "Choose your pickup and destination with ease. Get instant fare estimates.",
    color: "#00b894"
  },
  {
    icon: Navigation,
    title: "Track in Real-Time",
    description:
      "See your driver's location live on the map. Know exactly when they'll arrive.",
    color: "#0984e3"
  },
  {
    icon: CreditCard,
    title: "Easy Payments",
    description:
      "Pay with cash, mobile money, or card. Safe and convenient for everyone.",
    color: "#00b894"
  }
];

export default function OnboardingScreen() {
  const navigation = useNavigation<any>();
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      navigation.navigate("Login");
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const skip = () => {
    navigation.navigate("Login");
  };

  const slide = slides[currentSlide];
  const Icon = slide.icon;

  return (
    <SafeAreaView style={styles.container}>
      {/* Skip Button */}
      <View style={styles.skipContainer}>
        <TouchableOpacity onPress={skip}>
          <Text style={styles.skipText}>Skip</Text>
        </TouchableOpacity>
      </View>

      {/* Content */}
      <View style={styles.content}>
        <View
          style={[
            styles.iconCircle,
            { backgroundColor: `${slide.color}20` }
          ]}
        >
          <Icon size={60} color={slide.color} />
        </View>

        <Text style={styles.title}>{slide.title}</Text>
        <Text style={styles.description}>{slide.description}</Text>
      </View>

      {/* Navigation Dots */}
      <View style={styles.dotsContainer}>
        {slides.map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              index === currentSlide && styles.activeDot
            ]}
          />
        ))}
      </View>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity
          onPress={prevSlide}
          disabled={currentSlide === 0}
          style={styles.circleButton}
        >
          <ChevronLeft size={24} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.nextButton} onPress={nextSlide}>
          <Text style={styles.nextText}>
            {currentSlide === slides.length - 1
              ? "Get Started"
              : "Next"}
          </Text>

          {currentSlide < slides.length - 1 && (
            <ChevronRight size={20} color="#fff" style={{ marginLeft: 6 }} />
          )}
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },

  skipContainer: {
    alignItems: "flex-end",
    padding: 20
  },

  skipText: {
    color: "#888",
    fontSize: 16
  },

  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 30
  },

  iconCircle: {
    width: 140,
    height: 140,
    borderRadius: 70,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 30
  },

  title: {
    fontSize: 28,
    fontWeight: "600",
    marginBottom: 10,
    textAlign: "center"
  },

  description: {
    fontSize: 17,
    color: "#777",
    textAlign: "center",
    lineHeight: 24
  },

  dotsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20
  },

  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#ccc",
    marginHorizontal: 4
  },

  activeDot: {
    width: 24,
    backgroundColor: "#00b894"
  },

  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 30,
    paddingBottom: 30
  },

  circleButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f2f2f2"
  },

  nextButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#00b894",
    paddingHorizontal: 30,
    height: 55,
    borderRadius: 30
  },

  nextText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600"
  }
});