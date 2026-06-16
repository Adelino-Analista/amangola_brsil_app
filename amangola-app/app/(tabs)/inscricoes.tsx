import { ScrollView, Text, View, TouchableOpacity, FlatList } from "react-native";
import { useRouter } from "expo-router";
import { useState, useEffect } from "react";

import { ScreenContainer } from "@/components/screen-container";
import { useColors } from "@/hooks/use-colors";

interface Inscricao {
  id: string;
  nome: string;
  evento: string;
  data: string;
  status: "pendente" | "aprovado" | "rejeitado";
}

export default function InscricoesScreen() {
  const router = useRouter();
  const colors = useColors();
  const [inscricoes, setInscricoes] = useState<Inscricao[]>([]);

  useEffect(() => {
    // Simulando dados de inscrições
    setInscricoes([
      {
        id: "1",
        nome: "João Silva",
        evento: "Conferência AMANGOLA 2026",
        data: "15/06/2026",
        status: "aprovado",
      },
      {
        id: "2",
        nome: "Maria Santos",
        evento: "Workshop de Comunicação",
        data: "10/06/2026",
        status: "pendente",
      },
    ]);
  }, []);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "aprovado":
        return "bg-success";
      case "pendente":
        return "bg-warning";
      case "rejeitado":
        return "bg-error";
      default:
        return "bg-muted";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "aprovado":
        return "Aprovado";
      case "pendente":
        return "Pendente";
      case "rejeitado":
        return "Rejeitado";
      default:
        return status;
    }
  };

  return (
    <ScreenContainer className="bg-background">
      <View className="flex-1">
        {/* Header */}
        <View className="px-4 py-4 border-b border-border">
          <Text className="text-2xl font-bold text-foreground">Minhas Inscrições</Text>
          <Text className="text-sm text-muted mt-1">
            Total: {inscricoes.length} inscrição(ões)
          </Text>
        </View>

        {/* Botão Nova Inscrição */}
        <View className="px-4 py-3">
          <TouchableOpacity
            onPress={() => router.push("/nova-inscricao")}
            className="bg-primary rounded-lg p-3 active:opacity-80"
          >
            <Text className="text-white font-semibold text-center">+ Nova Inscrição</Text>
          </TouchableOpacity>
        </View>

        {/* Lista de Inscrições */}
        {inscricoes.length > 0 ? (
          <FlatList
            data={inscricoes}
            keyExtractor={(item) => item.id}
            contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 20 }}
            scrollEnabled={false}
            renderItem={({ item }) => (
              <View className="bg-surface rounded-lg p-4 mb-3 border border-border">
                <View className="flex-row justify-between items-start mb-2">
                  <Text className="text-base font-semibold text-foreground flex-1">
                    {item.nome}
                  </Text>
                  <View className={`${getStatusColor(item.status)} rounded-full px-3 py-1`}>
                    <Text className="text-white text-xs font-semibold">
                      {getStatusText(item.status)}
                    </Text>
                  </View>
                </View>
                <Text className="text-sm text-muted mb-1">{item.evento}</Text>
                <Text className="text-xs text-muted mb-3">Data: {item.data}</Text>
                <View className="flex-row gap-2">
                  <TouchableOpacity
                    className="flex-1 bg-primary rounded-lg py-2 active:opacity-80"
                  >
                    <Text className="text-white text-sm font-semibold text-center">
                      Editar
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    className="flex-1 bg-error rounded-lg py-2 active:opacity-80"
                  >
                    <Text className="text-white text-sm font-semibold text-center">
                      Excluir
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
          />
        ) : (
          <View className="flex-1 items-center justify-center px-4">
            <Text className="text-lg font-semibold text-foreground mb-2">
              Nenhuma inscrição
            </Text>
            <Text className="text-sm text-muted text-center">
              Você ainda não possui inscrições. Crie uma nova inscrição para começar.
            </Text>
          </View>
        )}
      </View>
    </ScreenContainer>
  );
}
