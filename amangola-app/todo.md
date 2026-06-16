# AMANGOLA - Project TODO

## Branding & Setup
- [x] Gerar logo customizado do aplicativo
- [x] Atualizar app.config.ts com nome e branding
- [x] Configurar cores do tema em theme.config.js

## Navegação & Layout Base
- [x] Configurar tab bar com 4 abas (Home, Inscrições, Eventos, Perfil)
- [x] Criar ScreenContainer para todas as telas
- [x] Implementar Header com logo AMANGOLA
- [x] Configurar tema de cores (laranja #C84C1A como primária)

## Tela Home (Dashboard)
- [x] Criar layout da tela home
- [x] Exibir bem-vindo ao usuário
- [x] Botão "Nova Inscrição"
- [x] Botão "Minhas Inscrições"
- [x] Botão "Eventos"
- [x] Resumo de inscrições ativas
- [x] Seção de notícias/atualizações

## Tela de Inscrição (Ficha Digital)
- [x] Criar formulário com validação
- [x] Campo Nome Completo
- [x] Campo Nacionalidade (dropdown)
- [x] Campo WhatsApp com máscara
- [x] Campo Instituição/Organização
- [x] Campo Cargo/Função
- [x] Campo CEP com máscara
- [x] Campo Cidade/Estado (auto-preenchimento)
- [x] Campo Escola/Departamento (dropdown)
- [x] Campo Tamanho de Camiseta (P, M, G, GG, XG)
- [x] Campo Pré-filiação (Sim/Não)
- [x] Campo Sambeiro (Sim/Não)
- [x] Botão Enviar com validação
- [x] Mensagem de sucesso/erro

## Tela Minhas Inscrições
- [x] Criar lista de inscrições do usuário
- [x] Exibir status de cada inscrição
- [x] Botão Editar inscrição
- [x] Botão Visualizar detalhes
- [x] Botão Excluir inscrição
- [x] Pull-to-refresh para atualizar
- [x] Mensagem quando sem inscrições

## Tela de Eventos
- [x] Criar lista de eventos disponíveis
- [x] Exibir informações de cada evento
- [x] Botão "Inscrever-se"
- [ ] Filtros por data/categoria
- [ ] Detalhes do evento em modal/tela

## Tela de Perfil
- [x] Exibir informações do usuário
- [ ] Configurações de privacidade
- [ ] Preferências de notificações
- [x] Botão Logout
- [ ] Editar perfil

## Build e Deploy
- [x] Configurar eas.json para EAS Build
- [x] Criar guia de build (GUIA_BUILD_EAS.md)
- [x] Criar script automatizado de build
- [ ] Gerar APK via EAS Build
- [ ] Gerar IPA via EAS Build

## Painel Administrativo
- [ ] Criar tela de login administrativo
- [ ] Gerenciamento de eventos
- [ ] Controle de inscrições (tabela)
- [ ] Estatísticas e relatórios
- [ ] Configurações do sistema

## Análise SWOT
- [ ] Criar tela de análise SWOT
- [ ] Seção Forças (Strengths)
- [ ] Seção Fraquezas (Weaknesses)
- [ ] Seção Oportunidades (Opportunities)
- [ ] Seção Ameaças (Threats)
- [ ] Descrições detalhadas para cada seção

## Autenticação
- [ ] Criar tela de login
- [ ] Implementar autenticação com email/senha
- [ ] Opção "Lembrar-me"
- [ ] Recuperação de senha
- [ ] Biometria (Face ID/Fingerprint) - opcional

## Persistência de Dados
- [ ] Configurar AsyncStorage para dados locais
- [ ] Implementar sincronização com backend
- [ ] Cache de eventos
- [ ] Persistência de inscrições

## Backend/API
- [ ] Criar endpoints para inscrições
- [ ] Criar endpoints para eventos
- [ ] Criar endpoints para usuários
- [ ] Criar endpoints administrativos
- [ ] Validação de dados no servidor

## Testes
- [ ] Testes unitários de componentes
- [ ] Testes de fluxos de inscrição
- [ ] Testes de validação de formulário
- [ ] Testes de autenticação

## Polish & Refinements
- [ ] Animações suaves de transição
- [ ] Feedback háptico em ações
- [ ] Indicadores de carregamento
- [ ] Tratamento de erros
- [ ] Mensagens de feedback ao usuário
- [ ] Otimização de performance
- [ ] Testes em dispositivos reais

## Deploy
- [ ] Preparar para build de produção
- [ ] Configurar variáveis de ambiente
- [ ] Gerar APK/IPA
- [ ] Publicar na Play Store/App Store

## Atualização de Branding (Nova Logo e Cores)
- [x] Gerar nova logo baseada na logo oficial AMANGOLA (coração vermelho com mapa de Angola)
- [x] Atualizar paleta de cores: Vermelho (#FF0000), Preto (#000000), Branco (#FFFFFF)
- [x] Atualizar theme.config.js com cores oficiais
- [x] Atualizar app.config.ts com novo logo
- [x] Revisar todas as telas com novas cores

## Secao de Acessibilidade e Inclusao (PcD)
- [x] Checkbox: "Voce precisa de algum recurso de acessibilidade?"
- [x] Se SIM, exibir painel com 3 perguntas
- [x] Pergunta 1: Tipo de deficiencia (cadeira de rodas / outra deficiencia / nenhuma)
- [x] Pergunta 2: Necessidade de acompanhante (Sim / Nao)
- [x] Pergunta 3: Campo aberto para detalhar outros recursos de acessibilidade
- [x] Se NAO, pular para proximo passo
- [x] Validar e salvar respostas
