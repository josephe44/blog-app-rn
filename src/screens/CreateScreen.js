import React, { useState, useContext } from "react";
import { View, StyleSheet } from "react-native";
import { Context } from "../context/BlogContext";
import BlogPostForm from "../components/BlogPostForm";

export default function CreateScreen({ navigation }) {
  const { addBlogPost } = useContext(Context);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleAddBlogPost = (title, content) => {
    addBlogPost(title, content);
    navigation.navigate("Index");
  };

  return (
    <View style={styles.container}>
      <BlogPostForm
        title={title}
        setTitle={setTitle}
        content={content}
        setContent={setContent}
        onSubmit={handleAddBlogPost}
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
