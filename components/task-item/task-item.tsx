import { memo } from 'react';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';

import { ThemedView } from '../ThemedView';
import CloseBtn from '../close-btn/close-btn';

import { TaskProps } from '@/constants/types';
import { useAppDispatch, useAppSelector } from '@/redux/store';
import { saveTasks } from '@/redux/tasks/tasks';

export default memo(
  function Task({ name, description, date }: TaskProps) {
    const dispatch = useAppDispatch();
    const { tasks } = useAppSelector(({ tasks }) => tasks);
    const onPressFn = () => dispatch(saveTasks(tasks.filter(({ date: taskDate }) => taskDate !== date)));

    return (
      <ThemedView style={styles.taskLayout}>
        <Text variant="titleLarge">{name}</Text>
        <Text variant="bodyMedium">{description}</Text>
        <CloseBtn size={30} onPressFn={onPressFn} />
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
