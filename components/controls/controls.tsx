import { useRef } from 'react';
import { StyleSheet, TextInput as Input } from 'react-native';
import { Button, TextInput } from 'react-native-paper';

import { ThemedView } from '../ThemedView';

import { useAppDispatch, useAppSelector } from '@/redux/store';
import { saveDescription, saveName, saveTasks } from '@/redux/tasks/tasks';

export default function Controls() {
  const dispatch = useAppDispatch();
  const { currentName, currentDescription, tasks } = useAppSelector(({ tasks }) => tasks);
  const descriptionRef = useRef<Input>(null);

  function submitHandler() {
    const updatedTasks = [
      ...tasks,
      { name: currentName, description: currentDescription, date: new Date().toString() },
    ];
    dispatch(saveTasks(updatedTasks));
    dispatch(saveName(''));
    dispatch(saveDescription(''));
  }

  return (
    <ThemedView style={styles.controlsLayout}>
      <ThemedView style={styles.inputsLayout}>
        <TextInput
          onSubmitEditing={() => descriptionRef?.current?.focus()}
          onChangeText={(text) => dispatch(saveName(text))}
          mode="outlined"
          label="Ваше имя"
          inputMode="text"
          returnKeyLabel="next"
          returnKeyType="next"
          value={currentName}
        />
        <TextInput
          ref={descriptionRef}
          onChangeText={(text) => dispatch(saveDescription(text))}
          onSubmitEditing={() => currentName && submitHandler()}
          mode="outlined"
          label="Описание"
          inputMode="text"
          returnKeyLabel="send"
          returnKeyType="send"
          value={currentDescription}
        />
      </ThemedView>
      <Button
        style={{ marginVertical: 10 }}
        mode="outlined"
        disabled={!currentName || !currentDescription}
        onPress={() => submitHandler()}>
        Добавить
      </Button>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  controlsLayout: {
    paddingTop: 30,
    paddingBottom: 10,
    paddingHorizontal: 10,
  },
  inputsLayout: {
    display: 'flex',
    rowGap: 8,
  },
});
