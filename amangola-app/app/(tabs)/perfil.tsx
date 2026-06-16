import { ScrollView, Text, View, TouchableOpacity } from "react-native";
import { useState } from "react";

import { ScreenContainer } from "@/components/screen-container";
import { useColors } from "@/hooks/use-colors";

export default function PerfilScreen() {
  const colors = useColors();
  const [usuario] = useState({
    nome: "João Silva",
    email: "joao@example.com",
    telefone: "+55 (21) 99999-9999",
    instituicao: "Universidade Federal",
  });

  return (
    <ScreenContainer className="bg-background">
      <ScrollView contentContainerStyle={{ flexGrow: 1, paddingBottom: 20 }}>
        {/* Header */}
        <View className="px-4 py-4 border-b border-border">
          <Text className="text-2xl font-bold text-foreground">Meu Perfil</Text>
        </View>

        {/* Informações do Usuário */}
        <View className="px-4 py-6">
          <View className="bg-surface rounded-2xl p-6 border border-border mb-4">
            <View className="items-center mb-4">
              <View className="w-16 h-16 rounded-full bg-primary items-center justify-center">
                <Text className="text-2xl font-bold text-white">
                  {usuario.nome.charAt(0).toUpperCase()}
                </Text>
              </View>
            </View>
            <Text className="text-lg font-bold text-foreground text-center mb-1">
              {usuario.nome}
            </Text>
            <Text className="text-sm text-muted text-center">
              {usuario.instituicao}
            </Text>
          </View>

          {/* Dados de Contato */}
          <View className="bg-surface rounded-2xl p-4 border border-border mb-4">
            <Text className="text-base font-semibold text-foreground mb-3">
              Informações de Contato
            </Text>
            <View className="gap-3">
              <View>
                <Text className="text-xs font-semibold text-muted mb-1">Email</Text>
                <Text className="text-sm text-foreground">{usuario.email}</Text>
              </View>
              <View>
                <Text className="text-xs font-semibold text-muted mb-1">Telefone</Text>
                <Text className="text-sm text-foreground">{usuario.telefone}</Text>
              </View>
            </View>
          </View>

          {/* Configurações */}
          <View className="bg-surface rounded-2xl border border-border overflow-hidden mb-4">
            <TouchableOpacity className="px-4 py-3 border-b border-border active:opacity-80">
              <Text className="text-base font-semibold text-foreground">
                ⚙️ Configurações
              </Text>
            </TouchableOpacity>
            <TouchableOpacity className="px-4 py-3 border-b border-border active:opacity-80">
              <Text className="text-base font-semibold text-foreground">
                🔔 Notificações
              </Text>
            </TouchableOpacity>
            <TouchableOpacity className="px-4 py-3 active:opacity-80">
              <Text className="text-base font-semibold text-foreground">
                🔒 Privacidade
              </Text>
            </TouchableOpacity>
          </View>

          {/* Botão Logout */}
          <TouchableOpacity
            className="bg-error rounded-lg py-3 active:opacity-80"
          >
            <Text className="text-white font-semibold text-center">Sair</Text>
          </TouchableOpacity>

          {/* Informações da App */}
          <View className="mt-6 pt-4 border-t border-border">
            <Text className="text-xs text-muted text-center">
              AMANGOLA v1.0.0
            </Text>
            <Text className="text-xs text-muted text-center mt-1">
              © 2026 - Todos os direitos reservados
            </Text>
          </View>
        </View>
      </ScrollView>
    </ScreenContainer>
  );
}
