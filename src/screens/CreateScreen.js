import React from "react";
import BlogForm from "../components/BlogForm";

const CreateScreen = ({ navigation }) => {
  return <BlogForm action={"Add"} navigation={navigation} />;
};

export default CreateScreen;
