import React, { useState, useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
} from "react-native";
import { Context } from "../context/BlogContext";
import BlogPostForm from "../components/BlogPostForm";

export default function EditScreen({ navigation }) {
  const id = navigation.getParam("id");

  const { state } = useContext(Context);
  const blogPost = state.find((blogPost) => blogPost.id === id);

  const [title, setTitle] = useState(blogPost?.title);
  const [content, setContent] = useState(blogPost?.content);

  const handleAddBlogPost = (title, content) => {};

  return (
    <View style={styles.container}>
      <Text>{id}</Text>
      <BlogPostForm
        title={title}
        setTitle={setTitle}
        content={content}
        setContent={setContent}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    // justifyContent: "center",
    paddingHorizontal: 10,
    paddingVertical: 10,
    width: "100%",
  },

  input_form: {
    width: "100%",
  },

  input: {
    height: 40,
    width: "100%",
    marginVertical: 10,
    borderWidth: 1,
    padding: 10,
  },

  addBtn: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    alignItems: "center",
    width: "100%",
    height: 50,
    justifyContent: "center",
  },

  btnText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});
