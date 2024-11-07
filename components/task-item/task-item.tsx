import { memo } from 'react';
import { StyleSheet } from 'react-native';
import { Text, IconButton } from 'react-native-paper';

import { ThemedView } from '../ThemedView';

import { TaskProps } from '@/constants/types';
import { useAppDispatch, useAppSelector } from '@/redux/store';
import { saveTasks } from '@/redux/tasks/tasks';

export default memo(
  function Task({ name, description, date }: TaskProps) {
    const dispatch = useAppDispatch();
    const { tasks } = useAppSelector(({ tasks }) => tasks);

    return (
      <ThemedView style={styles.taskLayout}>
        <Text variant="titleLarge">{name}</Text>
        <Text variant="bodyMedium">{description}</Text>
        <IconButton
          icon="close"
          size={30}
          style={styles.closeBtn}
          onPress={() => {
            const updatedTasks = tasks.filter(({ date: taskDate }) => taskDate !== date);
            dispatch(saveTasks(updatedTasks));
          }}
        />
      </ThemedView>
    );
  },
  (prev, next) => prev.date === next.date,
);

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
