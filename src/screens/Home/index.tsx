import { useState } from "react";
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  FlatList,
  Alert,
} from "react-native";

import { Participant } from "../../components/Participant";

import { styles } from "./styles";

export default function Home() {
  const [participants, setParticipants] = useState<string[]>([]);
  const [participantName, setParticipantName] = useState("");

  function handleParticipantAdd() {
    if (participants.includes(participantName.trimEnd())) {
      return Alert.alert(
        "Participante existe",
        "Já existe um participante na lista com esse nome!"
      );
    } else if (participantName.trim() == "") {
      return Alert.alert("Erro!", "O campo não pode estar vazio!");
    }
    console.log("Vc clicou no botao Adicionar");

    setParticipants((prevState) => [...prevState, participantName.trimEnd()]);
    setParticipantName("");
  }

  function handleParticipantRemove(name: string) {
    Alert.alert("Remover", `Deseja remover o participante ${name}?`, [
      {
        text: "Sim",
        onPress: () =>
          setParticipants((prevState) =>
            prevState.filter((participant) => participant !== name)
          ),
      },
      {
        text: "Não",
        style: "cancel",
      },
    ]);
    console.log(`Vc clicou no botao Remover o participante ${name}`);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Desenvolvedores</Text>
      <Text style={styles.eventDate}>Sábado, 27 de Julho de 2024</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Escreva aqui um texto"
          placeholderTextColor="#6b6b6b"
          onChangeText={setParticipantName}
          value={participantName}
          keyboardType="default"
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleParticipantAdd()}
        >
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={participants}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Participant
            key={item}
            name={item}
            onRemove={() => handleParticipantRemove(item)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Não há desenvolvedores na lista!
          </Text>
        )}
      />
    </View>
  );
}
