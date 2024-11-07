import { StyleSheet } from 'react-native';
import { Text, IconButton } from 'react-native-paper';

import { ThemedView } from '../ThemedView';

import { TaskProps } from '@/constants/types';

export default function Task({ name, description, date, tasks, setTasks }: TaskProps) {
  return (
    <ThemedView style={styles.taskLayout}>
      <Text variant="titleLarge">{name}</Text>
      <Text variant="bodyMedium">{description}</Text>
      <IconButton
        icon="close"
        size={30}
        style={styles.closeBtn}
        onPress={() => setTasks(tasks.filter(({ date: taskDate }) => taskDate !== date))}
      />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  taskLayout: {
    marginHorizontal: 10,
    paddingVertical: 10,
    paddingHorizontal: 5,
    position: 'relative',
  },
  closeBtn: {
    position: 'absolute',
    right: -15,
    top: -15,
  },
});
