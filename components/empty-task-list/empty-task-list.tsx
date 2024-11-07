import { StyleSheet, useWindowDimensions } from 'react-native';
import { Text } from 'react-native-paper';

import { ThemedView } from '../ThemedView';

export default function EmptyTasksList() {
  const { height } = useWindowDimensions();
  return (
    <ThemedView style={{ height: height - 320, ...styles.emptyList }}>
      <Text variant="titleMedium">Здесь отобразятся Ваши задачи, как только Вы добавите их</Text>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  emptyList: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
});
