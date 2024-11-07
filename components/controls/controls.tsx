import { useRef } from 'react';
import { StyleSheet, TextInput as Input, ReturnKeyType } from 'react-native';
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

  const inputValues = [
    {
      onSubmitEditing: () => descriptionRef?.current?.focus(),
      onChangeText: (text: string) => dispatch(saveName(text)),
      label: 'Ваше имя',
      returnKey: 'next',
      value: currentName,
      ref: undefined,
    },
    {
      onSubmitEditing: () => currentName && submitHandler(),
      onChangeText: (text: string) => dispatch(saveDescription(text)),
      label: 'Описание',
      returnKey: 'send',
      value: currentDescription,
      ref: descriptionRef,
    },
  ];

  return (
    <ThemedView style={styles.controlsLayout}>
      <ThemedView style={styles.inputsLayout}>
        {inputValues.map(({ onSubmitEditing, onChangeText, label, returnKey, value, ref }) => (
          <TextInput
            key={label}
            onSubmitEditing={onSubmitEditing}
            onChangeText={onChangeText}
            mode="outlined"
            label={label}
            inputMode="text"
            returnKeyLabel={returnKey}
            returnKeyType={returnKey as ReturnKeyType}
            ref={ref}
            value={value}
          />
        ))}
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
