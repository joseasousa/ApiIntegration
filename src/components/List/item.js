import React from "react";

import { ActivityIndicator, FlatList, Text, View, Button } from "react-native";
import { styles } from "./style";
import { deleteFut } from "../../service";

function Item({ data, delItem }) {
  // const {local,endereco, presente} = data

  const delFut = async () => {
    try {
      await deleteFut(data.id);

      delItem(data.id);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.item}>
      <Text style={styles.title}>{`${data?.local} - ${data?.endereco}`}</Text>
      <Button onPress={delFut} title="Del" color="#841584" />
    </View>
  );
}

export default Item;
