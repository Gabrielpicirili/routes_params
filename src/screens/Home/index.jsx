import { View, TouchableOpacity } from "react-native";
import React from "react";
import Title from "../../components/Title";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import {user} from "../../data/Profile"


export default function Home() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Title title="Home" />
      <TouchableOpacity style={styles.button}
      
        onPress={() => navigation.navigate("Profile", {user})}
      >
        <Title title="Go to Profile" />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Categories")}
      >
        <Title title="Go to Categories" />
      </TouchableOpacity>

    </View>
  );
};
