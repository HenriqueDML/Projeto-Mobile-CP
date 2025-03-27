
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface HmButtonProps {
  title: string;
  onPress: () => void;
}

export default function HmButton({ title, onPress }: HmButtonProps) {
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
