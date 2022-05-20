import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {
  const friends = [
    { name: "Friend #1", age: 26 },
    { name: "Friend #2", age: 72 },
    { name: "Friend #3", age: 95 },
    { name: "Friend #4", age: 52 },
    { name: "Friend #5", age: 67 },
    { name: "Friend #6", age: 34 },
    { name: "Friend #7", age: 73 },
    { name: "Friend #8", age: 36 },
    { name: "Friend #9", age: 12 },
  ];
  return (
    <FlatList
      keyExtractor={(friend) => friend.name}
      data={friends}
      renderItem={({ item }) => {
        return (
          <Text style={styles.textStyle}>
            {item.name} - Age {item.age}
          </Text>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50,
    marginHorizontal: 25,
  },
});

export default ListScreen;
