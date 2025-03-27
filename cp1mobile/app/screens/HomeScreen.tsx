import { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  SafeAreaView,
  Linking,
} from "react-native";
import HmInput from "../../components/HmInput";
import HmButton from "../../components/HmButton";

export default function HomeScreen() {
  const [hmNota1, setHmNota1] = useState("");
  const [hmNota2, setHmNota2] = useState("");
  const [hmNota3, setHmNota3] = useState("");
  const [hmFaltas, setHmFaltas] = useState("");
  const [hmResultado, setHmResultado] = useState("");

  const hmValidar = () => {
    const nota1 = parseFloat(hmNota1) || 0;
    const nota2 = parseFloat(hmNota2) || 0;
    const nota3 = parseFloat(hmNota3) || 0;
    const faltas = parseInt(hmFaltas) || 0;

    const limiteFaltas = 25;
    const notas = [nota1, nota2, nota3];
    const menorNota = Math.min(...notas);
    const media = (notas.reduce((a, b) => a + b) - menorNota) / 2;

    if (media < 7 && faltas > limiteFaltas) {
      setHmResultado(`Reprovado por nota. Média: ${media.toFixed(2)}`);
    } else if (faltas > limiteFaltas) {
      setHmResultado(`Reprovado por falta. Média: ${media.toFixed(2)}`);
    } else if (media < 7) {
      setHmResultado(`Reprovado por nota. Média: ${media.toFixed(2)}`);
    } else {
      setHmResultado(`Aprovado com média de ${media.toFixed(2)}`);
    }
  };

  const hmResetar = () => {
    setHmNota1("");
    setHmNota2("");
    setHmNota3("");
    setHmFaltas("");
    setHmResultado("");
  };

  const abrirSiteFiap = () => {
    Linking.openURL("https://www.fiap.com.br");
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <View style={styles.header}>
          <TouchableOpacity
            onPress={abrirSiteFiap}
            style={styles.logoContainer}
          >
            <Image
              source={require("../../assets/images/fiap.png")}
              style={styles.logo}
            />
          </TouchableOpacity>
          <Text style={styles.headerTitulo}>FIAP</Text>
        </View>

        <ScrollView contentContainerStyle={styles.scroll}>
          <View style={styles.inputContainer}>
            <Text style={styles.label}></Text>
            <HmInput
              label="Nota 1:"
              keyboardType="decimal-pad"
              value={hmNota1}
              onChangeText={setHmNota1}
            />
            <HmInput
              label="Nota 2:"
              keyboardType="decimal-pad"
              value={hmNota2}
              onChangeText={setHmNota2}
            />
            <HmInput
              label="Nota 3:"
              keyboardType="decimal-pad"
              value={hmNota3}
              onChangeText={setHmNota3}
            />
            <HmInput
              label="Faltas:"
              keyboardType="numeric"
              value={hmFaltas}
              onChangeText={setHmFaltas}
            />

            <HmButton title="Validar" onPress={hmValidar} />

            {hmResultado !== "" && (
              <Text style={styles.resultado}>{hmResultado}</Text>
            )}
          </View>
        </ScrollView>

        <View style={styles.rodape}>
          <Text style={styles.rodapeTexto}>
            FIAP - Validador de Notas{"\n"}
            Avenida Paulista, 1106, 7º andar, Cerqueira César, São Paulo/SP‎
          </Text>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#f1f5f9",
  },
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
  scroll: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    paddingVertical: 30,
    paddingHorizontal: 20,
    backgroundColor: "#000",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  logoContainer: {
    alignItems: "flex-start",
  },
  logo: {
    width: 150,
    height: 70,
    resizeMode: "contain",
  },
  inputContainer: {
    width: "80%",
  },
  label: {
    fontWeight: "bold",
    marginTop: 10,
  },
  input: {
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    backgroundColor: "#fff",
  },
  botao: {
    backgroundColor: "#0051A2",
    padding: 12,
    borderRadius: 5,
    marginTop: 10,
  },
  botaoTexto: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
  },
  resultado: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  rodape: {
    backgroundColor: "#000",
    paddingVertical: 20,
    paddingHorizontal: 10,
    alignItems: "center",
  },
  headerTitulo: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 20,
    marginLeft: 10,
  },
  rodapeTexto: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
  },
});
