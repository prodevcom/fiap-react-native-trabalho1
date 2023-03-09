import { useState } from "react";
import Notes from "../interfaces/notes";

export default function useNotes() {

  const [notes, setNotes] = useState<Notes[]>([]);
  const [text, setText] = useState('');

  const handleSave = () => {
    if (text) {
      var note: Notes = {id: Date.now().toString(), text};
      setNotes([...notes, note]);
      setText('');
    }
  };

  const handleDelete = (id: string) => {
    const updatedNotes = notes.filter(note => note.id !== id);
    setNotes(updatedNotes);
  };


return {notes, text, setText, handleSave, handleDelete}

}