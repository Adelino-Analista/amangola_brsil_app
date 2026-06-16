import { ScrollView, Text, View, TouchableOpacity, FlatList } from "react-native";
import { useState, useEffect } from "react";

import { ScreenContainer } from "@/components/screen-container";
import { useColors } from "@/hooks/use-colors";

interface Evento {
  id: string;
  nome: string;
  data: string;
  local: string;
  inscritos: number;
  descricao: string;
}

export default function EventosScreen() {
  const colors = useColors();
  const [eventos, setEventos] = useState<Evento[]>([]);

  useEffect(() => {
    // Simulando dados de eventos
    setEventos([
      {
        id: "1",
        nome: "Conferência AMANGOLA 2026",
        data: "27/06/2026",
        local: "Luanda, Angola",
        inscritos: 245,
        descricao: "Grande conferência sobre comunicação e desenvolvimento em Angola",
      },
      {
        id: "2",
        nome: "Workshop de Comunicação",
        data: "20/06/2026",
        local: "Benguela, Angola",
        inscritos: 89,
        descricao: "Workshop prático sobre estratégias de comunicação efetiva",
      },
      {
        id: "3",
        nome: "Encontro Regional",
        data: "10/07/2026",
        local: "Huambo, Angola",
        inscritos: 156,
        descricao: "Encontro regional para discussão de projetos locais",
      },
    ]);
  }, []);

  return (
    <ScreenContainer className="bg-background">
      <View className="flex-1">
        {/* Header */}
        <View className="px-4 py-4 border-b border-border">
          <Text className="text-2xl font-bold text-foreground">Eventos</Text>
          <Text className="text-sm text-muted mt-1">
            {eventos.length} evento(s) disponível(is)
          </Text>
        </View>

        {/* Lista de Eventos */}
        <FlatList
          data={eventos}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{ paddingHorizontal: 16, paddingTop: 12, paddingBottom: 20 }}
          scrollEnabled={false}
          renderItem={({ item }) => (
            <View className="bg-surface rounded-lg p-4 mb-3 border border-border">
              <View className="mb-2">
                <Text className="text-base font-semibold text-foreground">
                  {item.nome}
                </Text>
              </View>
              <View className="gap-2 mb-3">
                <View className="flex-row items-center gap-2">
                  <Text className="text-xs text-muted">📅</Text>
                  <Text className="text-sm text-muted">{item.data}</Text>
                </View>
                <View className="flex-row items-center gap-2">
                  <Text className="text-xs text-muted">📍</Text>
                  <Text className="text-sm text-muted">{item.local}</Text>
                </View>
                <View className="flex-row items-center gap-2">
                  <Text className="text-xs text-muted">👥</Text>
                  <Text className="text-sm text-muted">{item.inscritos} inscritos</Text>
                </View>
              </View>
              <Text className="text-sm text-muted mb-3 leading-relaxed">
                {item.descricao}
              </Text>
              <TouchableOpacity
                className="bg-primary rounded-lg py-2 active:opacity-80"
              >
                <Text className="text-white text-sm font-semibold text-center">
                  Inscrever-se
                </Text>
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
    </ScreenContainer>
  );
}
