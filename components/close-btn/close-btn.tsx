import { StyleSheet } from 'react-native';
import { IconButton } from 'react-native-paper';

export default function CloseBtn({ size, onPressFn }: { size: number; onPressFn: () => void }) {
  return <IconButton icon="close" size={size} style={styles.closeBtn} onPress={onPressFn} />;
}

const styles = StyleSheet.create({
  closeBtn: {
    position: 'absolute',
    right: -15,
    top: -15,
  },
});
