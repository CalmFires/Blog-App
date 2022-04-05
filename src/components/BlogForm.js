import React, { useContext, useState, useEffect } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import { Context } from "../context/BlogContext";

const BlogForm = ({ action, id, navigation }) => {
  const { state, editBlogPost, addBlogPost } = useContext(Context);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    if (id) {
      const blogPost = state.find((blogPost) => blogPost.id === id);
      setTitle(blogPost.title);
      setContent(blogPost.content);
    }
  }, []);

  return (
    <View>
      <Text style={styles.label}>{action} Title:</Text>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={(text) => {
          setTitle(text);
        }}
      />
      <Text style={styles.label}>{action} Content:</Text>
      <TextInput
        style={styles.input}
        value={content}
        onChangeText={(text) => setContent(text)}
      />
      <Button
        title={`${action} blog post`}
        onPress={() => {
          action === "Add"
            ? addBlogPost(title, content, () => {
                navigation.navigate("Index");
              })
            : editBlogPost(title, content, id, () => {
                navigation.goBack();
              });
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: "black",
    marginBottom: 15,
    padding: 5,
    margin: 5,
  },
  label: {
    fontSize: 20,
    marginBottom: 5,
    marginLeft: 5,
  },
});

export default BlogForm;
