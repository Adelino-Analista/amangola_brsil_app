import { ScrollView, Text, View, TouchableOpacity, TextInput, Alert } from "react-native";
import { useRouter } from "expo-router";
import { useState } from "react";

import { ScreenContainer } from "@/components/screen-container";
import { useColors } from "@/hooks/use-colors";

interface FormData {
  nomeCompleto: string;
  nacionalidade: string;
  whatsapp: string;
  instituicao: string;
  cargo: string;
  cep: string;
  cidade: string;
  estado: string;
  escola: string;
  camiseta: string;
  preFilicao: string;
  compromisso: string;
  // Acessibilidade
  precisaAcessibilidade: boolean;
  tipoDeficiencia: string;
  precisaAcompanhante: string;
  recursosAcessibilidade: string;
}

export default function NovaInscricaoScreen() {
  const router = useRouter();
  const colors = useColors();
  const [formData, setFormData] = useState<FormData>({
    nomeCompleto: "",
    nacionalidade: "",
    whatsapp: "",
    instituicao: "",
    cargo: "",
    cep: "",
    cidade: "",
    estado: "",
    escola: "",
    camiseta: "M",
    preFilicao: "Não",
    compromisso: "Não",
    // Acessibilidade
    precisaAcessibilidade: false,
    tipoDeficiencia: "",
    precisaAcompanhante: "Não",
    recursosAcessibilidade: "",
  });

  const handleInputChange = (field: keyof FormData, value: string | boolean) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = () => {
    if (!formData.nomeCompleto.trim()) {
      Alert.alert("Erro", "Por favor, preencha o nome completo");
      return;
    }
    if (!formData.whatsapp.trim()) {
      Alert.alert("Erro", "Por favor, preencha o WhatsApp");
      return;
    }

    Alert.alert("Sucesso", "Inscrição enviada com sucesso!", [
      {
        text: "OK",
        onPress: () => router.back(),
      },
    ]);
  };

  return (
    <ScreenContainer className="bg-background">
      <ScrollView contentContainerStyle={{ flexGrow: 1, paddingBottom: 20 }}>
        {/* Header */}
        <View className="px-4 py-4 border-b border-border flex-row items-center gap-3">
          <TouchableOpacity onPress={() => router.back()}>
            <Text className="text-2xl">←</Text>
          </TouchableOpacity>
          <View className="flex-1">
            <Text className="text-2xl font-bold text-foreground">Nova Inscrição</Text>
            <Text className="text-xs text-muted mt-1">
              Ficha Digital de Credenciamento
            </Text>
          </View>
        </View>

        {/* Formulário */}
        <View className="px-4 py-4 gap-4">
          {/* Nome Completo */}
          <View>
            <Text className="text-sm font-semibold text-foreground mb-2">
              Nome Completo *
            </Text>
            <TextInput
              placeholder="Digite seu nome completo"
              placeholderTextColor={colors.muted}
              value={formData.nomeCompleto}
              onChangeText={(value) => handleInputChange("nomeCompleto", value)}
              className="bg-surface border border-border rounded-lg px-4 py-3 text-foreground"
            />
          </View>

          {/* Nacionalidade */}
          <View>
            <Text className="text-sm font-semibold text-foreground mb-2">
              Nacionalidade
            </Text>
            <TextInput
              placeholder="Ex: Angolana"
              placeholderTextColor={colors.muted}
              value={formData.nacionalidade}
              onChangeText={(value) => handleInputChange("nacionalidade", value)}
              className="bg-surface border border-border rounded-lg px-4 py-3 text-foreground"
            />
          </View>

          {/* WhatsApp */}
          <View>
            <Text className="text-sm font-semibold text-foreground mb-2">
              WhatsApp *
            </Text>
            <TextInput
              placeholder="(21) 99999-9999"
              placeholderTextColor={colors.muted}
              value={formData.whatsapp}
              onChangeText={(value) => handleInputChange("whatsapp", value)}
              keyboardType="phone-pad"
              className="bg-surface border border-border rounded-lg px-4 py-3 text-foreground"
            />
          </View>

          {/* Instituição */}
          <View>
            <Text className="text-sm font-semibold text-foreground mb-2">
              Instituição/Organização
            </Text>
            <TextInput
              placeholder="Ex: Universidade Federal"
              placeholderTextColor={colors.muted}
              value={formData.instituicao}
              onChangeText={(value) => handleInputChange("instituicao", value)}
              className="bg-surface border border-border rounded-lg px-4 py-3 text-foreground"
            />
          </View>

          {/* Cargo */}
          <View>
            <Text className="text-sm font-semibold text-foreground mb-2">
              Cargo/Função
            </Text>
            <TextInput
              placeholder="Ex: Consultor"
              placeholderTextColor={colors.muted}
              value={formData.cargo}
              onChangeText={(value) => handleInputChange("cargo", value)}
              className="bg-surface border border-border rounded-lg px-4 py-3 text-foreground"
            />
          </View>

          {/* CEP */}
          <View>
            <Text className="text-sm font-semibold text-foreground mb-2">
              CEP
            </Text>
            <TextInput
              placeholder="00000-000"
              placeholderTextColor={colors.muted}
              value={formData.cep}
              onChangeText={(value) => handleInputChange("cep", value)}
              keyboardType="numeric"
              className="bg-surface border border-border rounded-lg px-4 py-3 text-foreground"
            />
          </View>

          {/* Cidade e Estado */}
          <View className="flex-row gap-3">
            <View className="flex-1">
              <Text className="text-sm font-semibold text-foreground mb-2">
                Cidade
              </Text>
              <TextInput
                placeholder="Ex: Luanda"
                placeholderTextColor={colors.muted}
                value={formData.cidade}
                onChangeText={(value) => handleInputChange("cidade", value)}
                className="bg-surface border border-border rounded-lg px-4 py-3 text-foreground"
              />
            </View>
            <View className="flex-1">
              <Text className="text-sm font-semibold text-foreground mb-2">
                Estado
              </Text>
              <TextInput
                placeholder="Ex: LA"
                placeholderTextColor={colors.muted}
                value={formData.estado}
                onChangeText={(value) => handleInputChange("estado", value)}
                className="bg-surface border border-border rounded-lg px-4 py-3 text-foreground"
              />
            </View>
          </View>

          {/* Escola/Departamento */}
          <View>
            <Text className="text-sm font-semibold text-foreground mb-2">
              Escola/Departamento
            </Text>
            <TextInput
              placeholder="Ex: Comunicação Social"
              placeholderTextColor={colors.muted}
              value={formData.escola}
              onChangeText={(value) => handleInputChange("escola", value)}
              className="bg-surface border border-border rounded-lg px-4 py-3 text-foreground"
            />
          </View>

          {/* Tamanho de Camiseta */}
          <View>
            <Text className="text-sm font-semibold text-foreground mb-2">
              Tamanho de Camiseta
            </Text>
            <View className="flex-row gap-2">
              {["P", "M", "G", "GG", "XG"].map((size) => (
                <TouchableOpacity
                  key={size}
                  onPress={() => handleInputChange("camiseta", size)}
                  className={`flex-1 py-2 rounded-lg border ${
                    formData.camiseta === size
                      ? "bg-primary border-primary"
                      : "bg-surface border-border"
                  }`}
                >
                  <Text
                    className={`text-sm font-semibold text-center ${
                      formData.camiseta === size ? "text-white" : "text-foreground"
                    }`}
                  >
                    {size}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          {/* Pré-filiação */}
          <View>
            <Text className="text-sm font-semibold text-foreground mb-2">
              Pré-filiação
            </Text>
            <View className="flex-row gap-2">
              {["Sim", "Não"].map((option) => (
                <TouchableOpacity
                  key={option}
                  onPress={() => handleInputChange("preFilicao", option)}
                  className={`flex-1 py-2 rounded-lg border ${
                    formData.preFilicao === option
                      ? "bg-primary border-primary"
                      : "bg-surface border-border"
                  }`}
                >
                  <Text
                    className={`text-sm font-semibold text-center ${
                      formData.preFilicao === option ? "text-white" : "text-foreground"
                    }`}
                  >
                    {option}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          {/* Declaração de compromisso Obrigatório */}
          <View>
            <Text className="text-sm font-semibold text-foreground mb-2">
              Declaração de compromisso Obrigatório
            </Text>
            <View className="flex-row gap-2">
              {["Sim", "Não"].map((option) => (
                <TouchableOpacity
                  key={option}
                  onPress={() => handleInputChange("compromisso", option)}
                  className={`flex-1 py-2 rounded-lg border ${
                    formData.compromisso === option
                      ? "bg-primary border-primary"
                      : "bg-surface border-border"
                  }`}
                >
                  <Text
                    className={`text-sm font-semibold text-center ${
                      formData.compromisso === option ? "text-white" : "text-foreground"
                    }`}
                  >
                    {option}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
            <Text className="text-xs text-muted mt-2 leading-relaxed">
              Comprometo-me obrigatoriamente a vestir a camisola oficial ("Angola Unida vai Vencer" e "Amemos Angola com Educação") durante todas as atividades protocolares oficiais do evento.
            </Text>
          </View>

          {/* SEÇÃO DE ACESSIBILIDADE E INCLUSÃO */}
          <View className="bg-blue-50 rounded-lg p-4 mt-4 border border-blue-200">
            <Text className="text-base font-bold text-blue-900 mb-3">
              ♿ Acessibilidade e Inclusão
            </Text>

            {/* Checkbox Principal */}
            <View className="mb-4">
              <TouchableOpacity
                onPress={() =>
                  handleInputChange("precisaAcessibilidade", !formData.precisaAcessibilidade)
                }
                className="flex-row items-center gap-3"
              >
                <View
                  className={`w-6 h-6 rounded border-2 items-center justify-center ${
                    formData.precisaAcessibilidade
                      ? "bg-primary border-primary"
                      : "bg-white border-border"
                  }`}
                >
                  {formData.precisaAcessibilidade && (
                    <Text className="text-white font-bold">✓</Text>
                  )}
                </View>
                <Text className="text-sm font-semibold text-foreground flex-1">
                  Você precisa de algum recurso de acessibilidade ou adaptação?
                </Text>
              </TouchableOpacity>
            </View>

            {/* Painel de Perguntas (aparece se SIM) */}
            {formData.precisaAcessibilidade && (
              <View className="gap-4 bg-white rounded-lg p-4">
                {/* Pergunta 1: Tipo de Deficiência */}
                <View>
                  <Text className="text-sm font-semibold text-foreground mb-2">
                    1. Você precisa de auxílio de acessibilidade ou é pessoa com deficiência?
                  </Text>
                  {[
                    { label: "Sim, utilizo cadeira de rodas", value: "cadeira_rodas" },
                    {
                      label: "Sim, tenho outro tipo de deficiência ou mobilidade reduzida",
                      value: "outra_deficiencia",
                    },
                    { label: "Não, não necessito de auxílio", value: "nenhuma" },
                  ].map((option) => (
                    <TouchableOpacity
                      key={option.value}
                      onPress={() => handleInputChange("tipoDeficiencia", option.value)}
                      className="flex-row items-center gap-2 py-2"
                    >
                      <View
                        className={`w-5 h-5 rounded-full border-2 items-center justify-center ${
                          formData.tipoDeficiencia === option.value
                            ? "bg-primary border-primary"
                            : "bg-white border-border"
                        }`}
                      >
                        {formData.tipoDeficiencia === option.value && (
                          <View className="w-2 h-2 bg-white rounded-full" />
                        )}
                      </View>
                      <Text className="text-sm text-foreground">{option.label}</Text>
                    </TouchableOpacity>
                  ))}
                </View>

                {/* Pergunta 2: Acompanhante */}
                <View>
                  <Text className="text-sm font-semibold text-foreground mb-2">
                    2. Você necessita do auxílio de um(a) acompanhante durante o evento?
                  </Text>
                  {[
                    { label: "Sim, levarei um(a) acompanhante", value: "Sim" },
                    { label: "Não, participarei de forma independente", value: "Não" },
                  ].map((option) => (
                    <TouchableOpacity
                      key={option.value}
                      onPress={() => handleInputChange("precisaAcompanhante", option.value)}
                      className="flex-row items-center gap-2 py-2"
                    >
                      <View
                        className={`w-5 h-5 rounded-full border-2 items-center justify-center ${
                          formData.precisaAcompanhante === option.value
                            ? "bg-primary border-primary"
                            : "bg-white border-border"
                        }`}
                      >
                        {formData.precisaAcompanhante === option.value && (
                          <View className="w-2 h-2 bg-white rounded-full" />
                        )}
                      </View>
                      <Text className="text-sm text-foreground">{option.label}</Text>
                    </TouchableOpacity>
                  ))}
                </View>

                {/* Pergunta 3: Outros Recursos */}
                <View>
                  <Text className="text-sm font-semibold text-foreground mb-2">
                    3. De qual outro recurso de acessibilidade você precisará para o evento?
                  </Text>
                  <TextInput
                    placeholder="Descreva aqui seus recursos de acessibilidade necessários..."
                    placeholderTextColor={colors.muted}
                    value={formData.recursosAcessibilidade}
                    onChangeText={(value) =>
                      handleInputChange("recursosAcessibilidade", value)
                    }
                    multiline
                    numberOfLines={4}
                    className="bg-white border border-border rounded-lg px-4 py-3 text-foreground"
                  />
                </View>
              </View>
            )}
          </View>

          {/* Botões */}
          <View className="gap-2 mt-4">
            <TouchableOpacity
              onPress={handleSubmit}
              className="bg-primary rounded-lg py-3 active:opacity-80"
            >
              <Text className="text-white font-semibold text-center text-base">
                Enviar Inscrição
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => router.back()}
              className="bg-surface border border-border rounded-lg py-3 active:opacity-80"
            >
              <Text className="text-foreground font-semibold text-center text-base">
                Cancelar
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </ScreenContainer>
  );
}
