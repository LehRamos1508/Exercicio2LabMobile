import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import AsyncStorage from "./componentes/AsyncStorage";

export default function App() {
  return (
    <View style={estilos.container}>
      <Text style={estilos.cabecalho}>Armazenamento Local</Text>
      <AsyncStorage />
      <StatusBar style="auto" />
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fffff9",
    alignItems: "center",
    justifyContent: "center",
  },
  cabecalho: {
    marginTop: 80,
    fontSize: 18,
    fontStyle: "italic",
  },
});
