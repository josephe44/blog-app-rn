import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

export default function BlogPostForm({
  title,
  setTitle,
  content,
  setContent,
  onSubmit,
}) {
  return (
    <View style={styles.container}>
      <View style={styles.input_form}>
        <Text>Enter Title:</Text>
        <TextInput
          style={styles.input}
          value={title}
          onChangeText={(value) => setTitle(value)}
          placeholder="Enter title"
        />
      </View>
      <View style={styles.input_form}>
        <Text>Enter Content:</Text>
        <TextInput
          style={styles.input}
          value={content}
          onChangeText={(value) => setContent(value)}
          placeholder="Enter content"
        />
      </View>

      <TouchableOpacity
        style={styles.addBtn}
        onPress={() => onSubmit(title, content)}
      >
        <Text style={styles.btnText}>Save</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
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
