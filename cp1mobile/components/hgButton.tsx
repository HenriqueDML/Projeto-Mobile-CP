
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface hgButtonProps {
  title: string;
  onPress: () => void;
}

export default function hgButton({ title, onPress }: hgButtonProps) {
  return (
    <TouchableOpacity style={styles.botao} onPress={onPress}>
      <Text style={styles.botaoTexto}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  botao: {
    backgroundColor: '#0051A2',
    padding: 12,
    borderRadius: 5,
    marginTop: 10,
  },
  botaoTexto: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
