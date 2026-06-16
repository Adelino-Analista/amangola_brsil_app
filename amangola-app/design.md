# Design do Aplicativo AMANGOLA

## Visão Geral

O aplicativo AMANGOLA é uma plataforma mobile para gerenciar credenciamento e inscrições do projeto "COMUNICAÇÃO: TODOS CONSTRUÍMOS ANGOLA". O aplicativo permite que participantes se cadastrem, gerenciem suas inscrições e administradores gerenciem eventos e credenciamentos.

## Telas Principais

### 1. **Tela de Onboarding**
- Apresentação do projeto AMANGOLA
- Botão "Começar" para acessar o aplicativo
- Branding com logo e cores do projeto

### 2. **Tela Home (Dashboard)**
- Bem-vindo ao usuário
- Resumo de inscrições ativas
- Botões de ação rápida:
  - "Nova Inscrição"
  - "Minhas Inscrições"
  - "Eventos"
- Notícias/atualizações do projeto

### 3. **Tela de Inscrição (Ficha Digital de Credenciamento)**
Formulário com os seguintes campos:
- **Nome Completo** (obrigatório)
- **Nacionalidade** (dropdown)
- **WhatsApp** (com máscara de telefone)
- **Instituição/Organização** (texto)
- **Cargo/Função** (texto)
- **CEP** (com máscara)
- **Cidade/Estado** (auto-preenchimento via CEP)
- **Escola/Departamento** (dropdown)
- **Tamanho de Camiseta** (P, M, G, GG, XG)
- **Pré-filiação** (Sim/Não)
- **Sambeiro** (Sim/Não)

Botão de envio com validação em tempo real.

### 4. **Tela Minhas Inscrições**
- Lista de inscrições do usuário
- Cada item mostra:
  - Nome do evento
  - Data da inscrição
  - Status (Pendente, Aprovado, Rejeitado)
  - Botões: Editar, Visualizar, Excluir

### 5. **Tela de Eventos**
- Lista de eventos disponíveis
- Cada evento mostra:
  - Nome do evento
  - Data e local
  - Número de inscritos
  - Botão "Inscrever-se"

### 6. **Tela de Painel Administrativo** (protegida por autenticação)
- Gerenciamento de eventos
- Controle de inscrições
- Estatísticas e relatórios
- Configurações do sistema

### 7. **Tela de Análise SWOT**
- Visualização de Forças (Strengths)
- Fraquezas (Weaknesses)
- Oportunidades (Opportunities)
- Ameaças (Threats)
- Cada seção com descrição detalhada

### 8. **Tela de Perfil do Usuário**
- Informações do usuário
- Configurações de privacidade
- Preferências de notificações
- Opção de logout

## Fluxos Principais

### Fluxo 1: Cadastro de Novo Participante
1. Usuário acessa "Nova Inscrição" na Home
2. Preenche formulário de credenciamento
3. Valida informações
4. Envia inscrição
5. Recebe confirmação

### Fluxo 2: Visualizar Inscrições
1. Usuário acessa "Minhas Inscrições"
2. Visualiza lista de inscrições
3. Pode editar ou excluir inscrição
4. Volta para Home

### Fluxo 3: Gerenciamento Administrativo
1. Admin faz login
2. Acessa "Painel Administrativo"
3. Gerencia eventos, inscrições e configurações
4. Visualiza relatórios

## Paleta de Cores

- **Cor Primária**: #C84C1A (Laranja - cor do projeto AMANGOLA)
- **Cor Secundária**: #D32F2F (Vermelho)
- **Cor de Fundo**: #FFFFFF (Branco)
- **Cor de Texto Principal**: #1A1A1A (Cinza escuro)
- **Cor de Texto Secundário**: #666666 (Cinza médio)
- **Cor de Sucesso**: #4CAF50 (Verde)
- **Cor de Aviso**: #FFC107 (Amarelo)
- **Cor de Erro**: #F44336 (Vermelho)
- **Cor de Borda**: #E0E0E0 (Cinza claro)

## Tipografia

- **Títulos**: Font Size 24-32px, Bold
- **Subtítulos**: Font Size 18-20px, SemiBold
- **Corpo**: Font Size 14-16px, Regular
- **Labels**: Font Size 12-14px, Medium

## Componentes Reutilizáveis

1. **Button** - Botões primários, secundários e terciários
2. **Card** - Cartões para exibir informações
3. **FormInput** - Campos de entrada com validação
4. **FormSelect** - Dropdowns para seleção
5. **List** - Listas de inscrições e eventos
6. **Modal** - Diálogos para confirmações
7. **Header** - Cabeçalho com logo e navegação
8. **TabBar** - Navegação inferior com abas

## Considerações de UX

- **Orientação**: Portrait (9:16)
- **Uso com Uma Mão**: Todos os elementos principais acessíveis na metade inferior da tela
- **Responsividade**: Adaptável para diferentes tamanhos de tela
- **Acessibilidade**: Contraste adequado, tamanhos de toque mínimos de 44x44px
- **Performance**: Carregamento rápido de listas com virtualization
- **Feedback Visual**: Indicadores de carregamento, animações suaves

## Navegação

- **Tab Bar Inferior**: Home, Inscrições, Eventos, Perfil
- **Navegação em Stack**: Dentro de cada aba para telas detalhadas
- **Drawer Menu** (opcional): Para acesso rápido a funcionalidades administrativas

## Padrões de Interação

- **Pull-to-Refresh**: Para atualizar listas
- **Swipe**: Para deletar itens de listas
- **Tap**: Para abrir detalhes
- **Long Press**: Para ações adicionais
- **Haptic Feedback**: Em ações importantes

## Autenticação

- Login com email/senha
- Opção de "Lembrar-me"
- Recuperação de senha
- Biometria (Face ID/Fingerprint) - opcional

## Persistência de Dados

- AsyncStorage para dados locais
- Backend para sincronização de inscrições
- Cache de eventos e configurações
