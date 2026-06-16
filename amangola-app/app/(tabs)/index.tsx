import { ScrollView, Text, View, TouchableOpacity, Image } from "react-native";
import { useRouter } from "expo-router";

import { ScreenContainer } from "@/components/screen-container";
import { useColors } from "@/hooks/use-colors";

export default function HomeScreen() {
  const router = useRouter();
  const colors = useColors();

  return (
    <ScreenContainer className="bg-background">
      <ScrollView contentContainerStyle={{ flexGrow: 1, paddingBottom: 20 }}>
        {/* Header com Logo */}
        <View className="items-center pt-6 pb-4 px-4 border-b border-border">
          <Text className="text-3xl font-bold text-primary">AMANGOLA</Text>
          <Text className="text-xs text-muted mt-1">Credenciamento e Inscrições</Text>
        </View>

        {/* Seção de Boas-vindas */}
        <View className="px-4 py-6 gap-2">
          <Text className="text-2xl font-bold text-foreground">
            Bem-vindo ao AMANGOLA
          </Text>
          <Text className="text-sm text-muted leading-relaxed">
            Gerencie suas inscrições e credenciamentos para o projeto "Comunicação: Todos Construímos Angola"
          </Text>
        </View>

        {/* Cards de Ação Rápida */}
        <View className="px-4 gap-3">
          {/* Nova Inscrição */}
          <TouchableOpacity
            onPress={() => router.push("../nova-inscricao")}
            className="bg-primary rounded-2xl p-4 active:opacity-80"
          >
            <Text className="text-white font-semibold text-base">+ Nova Inscrição</Text>
            <Text className="text-white text-xs mt-1 opacity-90">
              Crie uma nova ficha de credenciamento
            </Text>
          </TouchableOpacity>

          {/* Minhas Inscrições */}
          <TouchableOpacity
            onPress={() => router.push("/(tabs)/inscricoes")}
            className="bg-surface rounded-2xl p-4 border border-border active:opacity-80"
          >
            <Text className="text-foreground font-semibold text-base">Minhas Inscrições</Text>
            <Text className="text-muted text-xs mt-1">
              Visualize e gerencie suas inscrições
            </Text>
          </TouchableOpacity>

          {/* Eventos */}
          <TouchableOpacity
            onPress={() => router.push("/(tabs)/eventos")}
            className="bg-surface rounded-2xl p-4 border border-border active:opacity-80"
          >
            <Text className="text-foreground font-semibold text-base">Eventos</Text>
            <Text className="text-muted text-xs mt-1">
              Conheça os eventos disponíveis
            </Text>
          </TouchableOpacity>
        </View>

        {/* Seção de Informações */}
        <View className="px-4 py-6 gap-4">
          <View className="bg-surface rounded-2xl p-4 border border-border">
            <Text className="text-sm font-semibold text-foreground mb-2">
              📋 Sobre o Projeto
            </Text>
            <Text className="text-xs text-muted leading-relaxed">
              AMANGOLA é uma iniciativa de comunicação e construção coletiva em Angola. Participe e faça parte desta transformação.
            </Text>
          </View>

          <View className="bg-surface rounded-2xl p-4 border border-border">
            <Text className="text-sm font-semibold text-foreground mb-2">
              📞 Contato
            </Text>
            <Text className="text-xs text-muted">
              Email: brasil@amangola.org
            </Text>
            <Text className="text-xs text-muted mt-1">
              WhatsApp: +55 (21) 99999-9999
            </Text>
          </View>
        </View>

        {/* Footer */}
        <View className="px-4 py-4 items-center border-t border-border mt-4">
          <Text className="text-xs text-muted">
            AMANGOLA © 2026 - Todos os direitos reservados
          </Text>
        </View>
      </ScrollView>
    </ScreenContainer>
  );
}
