import React from 'react';
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  FlatList,
  Text,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import useNotes from './hooks/useNotes';
import Notes from './interfaces/notes';

export default function App() {
  const {notes, text, setText, handleSave, handleDelete} = useNotes();

  const renderItem = ({item}: {item: Notes}) => (
    <View style={styles.item}>
      <View style={styles.itemContent}>
        <Text style={styles.itemText}>{item.text}</Text>
        <Button title="Excluir" onPress={() => handleDelete(item.id)} />
      </View>
    </View>
  );

  return (
    <>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={'transparent'}
        translucent
      />

      <View style={styles.container}>
        <SafeAreaView style={{flex: 1}}>
          <Text style={styles.headline1}>Meu Bloco de Notas</Text>
          <View style={styles.form}>
            <TextInput
              style={styles.input}
              multiline
              placeholder="Digite sua nota aqui!"
              value={text}
              onChangeText={setText}
            />
            <Button title="Salvar" onPress={handleSave} />
          </View>

          {notes.length > 0 && <Text>Minhas notas: </Text>}
          {notes.length == 0 && <Text>Não existem notas cadastradas</Text>}

          <FlatList
            data={notes}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        </SafeAreaView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0e0e0',
    padding: 20,
  },
  headline1: {
    marginVertical: 10,
    fontSize: 18,
    fontWeight: 'bold',
  },
  form: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginBottom: 20,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 10,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    height: 100,
    textAlignVertical: 'top',
  },
  item: {
    backgroundColor: '#fff',
    padding: 20,
    marginVertical: 8,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  itemContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  itemText: {
    flex: 1,
    marginRight: 10,
  },
});
