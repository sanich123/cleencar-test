import { useCallback } from 'react';
import { FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ThemedView } from '@/components/ThemedView';
import Controls from '@/components/controls/controls';
import EmptyTasksList from '@/components/empty-task-list/empty-task-list';
import Task from '@/components/task-item/task-item';
import { TaskItem } from '@/constants/types';
import { useAppSelector } from '@/redux/store';

export default function HomeScreen() {
  const { tasks } = useAppSelector(({ tasks }) => tasks);

  const renderItem = useCallback(
    ({ item: { name, description, date } }: { item: TaskItem }) => (
      <Task name={name} description={description} date={date} />
    ),
    [],
  );

  return (
    <SafeAreaView>
      <ThemedView>
        <FlatList
          style={{ height: '100%' }}
          data={tasks}
          renderItem={renderItem}
          ListHeaderComponent={<Controls />}
          ListEmptyComponent={<EmptyTasksList />}
          initialNumToRender={15}
          maxToRenderPerBatch={20}
          keyExtractor={(item) => item.date}
        />
      </ThemedView>
    </SafeAreaView>
  );
}
