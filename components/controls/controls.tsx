import { useRef, useState } from 'react';
import { StyleSheet, TextInput as Input } from 'react-native';
import { Button, TextInput } from 'react-native-paper';

import { ThemedView } from '../ThemedView';

import { ControlsProps } from '@/constants/types';

export default function Controls({ setTasks, tasks }: ControlsProps) {
  const [name, setName] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const descriptionRef = useRef<Input>(null);

  function submitHandler() {
    setTasks([...tasks, { name, description, date: new Date().toString() }]);
    setName('');
    setDescription('');
  }

  return (
    <ThemedView style={styles.controlsLayout}>
      <ThemedView style={styles.inputsLayout}>
        <TextInput
          onSubmitEditing={() => descriptionRef?.current?.focus()}
          onChangeText={(text) => setName(text)}
          mode="outlined"
          label="Ваше имя"
          inputMode="text"
          returnKeyLabel="next"
          returnKeyType="next"
          value={name}
        />
        <TextInput
          ref={descriptionRef}
          onChangeText={(text) => setDescription(text)}
          onSubmitEditing={() => name && submitHandler()}
          mode="outlined"
          label="Описание"
          inputMode="text"
          returnKeyLabel="send"
          returnKeyType="send"
          value={description}
        />
      </ThemedView>

      <Button
        style={{ marginVertical: 10 }}
        mode="outlined"
        disabled={!name || !description}
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
