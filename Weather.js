import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import PropTypes from "prop-types";
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const weatherOptions = {

    Thunderstorm: {
        iconName: "weather-lightning",
        gradient: ["#373B44", "#4286f4"],
        title: "우릉릉 쾅쾅 🌩",
        subtitle: "번개 맞지 않게 조심하세요 ⚡️",
      },
      Drizzle: {
        iconName: "weather-hail",
        gradient: ["#89F7FE", "#66A6FF"],
        title: "이슬비가 보슬보슬 💦",
        subtitle: "그래도 우산은 챙겨야겠지요? ☂️",
      },
      Rain: {
        iconName: "weather-rainy",
        gradient: ["#00C6FB", "#005BEA"],
        title: "비 내리는 중 🌧",
        subtitle: "외출하실 때 우산 꼭 챙기세요! ☔️",
      },
      Snow: {
        iconName: "weather-snowy",
        gradient: ["#7DE2FC", "#B9B6E5"],
        title: "눈이 펑펑 내리는 중 ❄️",
        subtitle: "안전운전 해야겠죠? ☃️",
      },
      Atmosphere: {
        iconName: "weather-hail",
        gradient: ["#89F7FE", "#66A6FF"],
      },
      Clear: {
        iconName: "weather-sunny",
        gradient: ["#FF7300", "#FEF253"],
        title: "맑은 날이에요 ☀️",
        subtitle: "얼굴 타지 않게 조심하세요 🔥",
      },
      Clouds: {
        iconName: "weather-cloudy",
        gradient: ["#D7D2CC", "#304352"],
        title: "구름이 드리운 날 ☁️",
        subtitle: "비가 올수도 있을 것 같네요 💧",
      },
      Mist: {
        iconName: "weather-fog",
        gradient: ["#4DA0B0", "#D39D38"],
        title: "옅은 안개가 꼈어요",
        subtitle: "습도가 조금 높을지도 몰라요 🌫",
      },
      Fog: {
        iconName: "weather-fog",
        gradient: ["#4DA0B0", "#D39D38"],
        title: "짙은 안개가 꼈어요",
        subtitle: "가시거리가 짧으니 주의하세요",
      },
      Dust: {
        iconName: "weather-fog",
        gradient: ["#4DA0B0", "#D39D38"],
        title: "먼지투성이네요",
        subtitle: "마스크 잘 쓰셔야겠어요 😷",
      },
      Haze: {
        iconName: "weather-fog",
        gradient: ["#4DA0B0", "#D39D38"],
        title: "미세먼지가 많아요",
        subtitle: "마스크 잘 쓰셔야겠어요 😷",
      }
  }

  export default function Weather({ temp, condition, name}) {
    return (
      <LinearGradient
        colors={weatherOptions[condition].gradient}
        style={styles.container}
      >
        <StatusBar barStyle="light-content" />
        <View style={styles.topContainer}>
          <MaterialCommunityIcons
            size={150}
            name={weatherOptions[condition].iconName}
            color="white"
          />
          <Text style={styles.temp}>{temp}°c</Text>
          <Text style={styles.name}>{name}</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{weatherOptions[condition].title}</Text>
          <Text style={styles.subtitle}>
            {weatherOptions[condition].subtitle}
          </Text>
        </View>
      </LinearGradient>
    );
  }

Weather.propTypes = {
    name : PropTypes.string.isRequired,
    temp : PropTypes.number.isRequired,
    condition : PropTypes.oneOf([
        "Thundestorm",
        "Drizzle",
        "Rain",
        "Snow",
        "Atmosphere",
        "Clear",
        "Clouds",
        "Dust",
        "Haze",
        "Mist",
        "Fog",
        "Smoke",
        "Sand"
    ]).isRequired
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  temp: {
    fontSize: 60,
    color: "white"
  },
  name: {
    fontSize : 30,
    color : "white"
  },
  topContainer: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",

  },
  title: {
    color: "white",
    fontSize: 40,
    fontWeight: "300",
    marginBottom: 10,
    textAlign: "left"
  },
  subtitle: {
    fontWeight: "600",
    color: "white",
    fontSize: 20,
    textAlign: "left"
  },
  textContainer: {
    alignItems: "flex-start",
    paddingHorizontal: 40,
    //justifyContent: "center",
    flex: 1
  }
});