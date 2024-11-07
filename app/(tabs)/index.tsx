import { useState } from 'react';
import { FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ThemedView } from '@/components/ThemedView';
import Controls from '@/components/controls/controls';
import EmptyTasksList from '@/components/empty-task-list/empty-task-list';
import Task from '@/components/task-item/task-item';
import { TaskItem } from '@/constants/types';

export default function HomeScreen() {
  const [tasks, setTasks] = useState<TaskItem[]>([] as TaskItem[]);

  return (
    <SafeAreaView>
      <ThemedView>
        <FlatList
          style={{ height: '100%' }}
          data={tasks}
          renderItem={({ item: { name, description, date } }) => (
            <Task name={name} description={description} date={date} tasks={tasks} setTasks={setTasks} />
          )}
          ListHeaderComponent={<Controls setTasks={setTasks} tasks={tasks} />}
          ListEmptyComponent={<EmptyTasksList />}
        />
      </ThemedView>
    </SafeAreaView>
  );
}
