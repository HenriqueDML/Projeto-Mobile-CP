
import { View, Text, TextInput, StyleSheet, TextInputProps } from 'react-native';

interface hgInputProps extends TextInputProps {
  label: string;
}

export default function hgInput({ label, ...props }: hgInputProps) {
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
