import { View, Text } from "react-native";
import React from "react";
import Title from "../../components/Title";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";


export default function Profile({route}) {
  const { user} = route.params;
  
  return (
    <View styles={styles.container}>
      <Title title="Profile" />
      <Text> Nome: {user.name}</Text>
      <Text> Email: {user.email}</Text>
      <Text> Telefone: {user.phone}</Text>
      <Text> Idade: {user.age}</Text>
    </View>
  );
};
