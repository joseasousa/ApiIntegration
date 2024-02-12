import React from "react";
import { ActivityIndicator, FlatList, Text, View } from "react-native";
import Item from "./item";

const List = ({ data, delItem }) => {
  


  return (
    <FlatList
      data={data}
      renderItem={({ item }) => <Item data={item} delItem={delItem} />}
      keyExtractor={(item) => item.id}
    />
  );
};

export default List;
