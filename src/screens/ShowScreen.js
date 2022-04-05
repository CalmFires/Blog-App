import React, { useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Context } from "../context/BlogContext";
import { EvilIcons } from "@expo/vector-icons";

const ShowScreen = ({ route: { params } }) => {
  const { state } = useContext(Context);
  const id = params.id;

  const blogPost = state.find((blogPost) => blogPost.id === id);
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.titleStyle}>{blogPost.title}</Text>
      <Text style={styles.ContentStyle}>{blogPost.content}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    margin: 10,
  },
  titleStyle: {
    fontSize: 25,
    borderBottomWidth: 3,
    borderColor: "black",
  },
  ContentStyle: {
    textAlignVertical: "center",
    textAlign: "center",
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "black",
    height: 200,
  },
});

export default ShowScreen;
