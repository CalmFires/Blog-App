import React from "react";
import BlogForm from "../components/BlogForm";

const EditScreen = ({ navigation, route: { params } }) => {
  return <BlogForm action={"Edit"} id={params.id} navigation={navigation} />;
};

export default EditScreen;
