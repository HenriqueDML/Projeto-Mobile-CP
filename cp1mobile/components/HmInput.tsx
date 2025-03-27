
import { View, Text, TextInput, StyleSheet, TextInputProps } from 'react-native';

interface HmInputProps extends TextInputProps {
  label: string;
}

export default function HmInput({ label, ...props }: HmInputProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={styles.input} {...props} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    backgroundColor: '#fff',
  },
});
