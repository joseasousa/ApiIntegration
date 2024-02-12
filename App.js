import { useCallback, useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { getFut } from "./src/service";
import List from "./src/components/List";

export default function App() {
  const [data, setData] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [size, setSize] = useState(0);

  const delFut = (id) => {
    newData = data.filter((item) => item.id !== id);
    setData(newData);
  };

  const get = useCallback(async () => {
    try {
      const response = await getFut();

      setData(response);

      setSize(response.length);
    } catch (error) {
      console.log(error);
    } finally {
      setCarregando(false);
    }
  }, []);

  useEffect(() => {
    get();
  }, [get]);

  return (
    <View style={styles.container}>
      {carregando ? (
        <Text>carregando</Text>
      ) : (
        <List data={data} delItem={delFut} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
