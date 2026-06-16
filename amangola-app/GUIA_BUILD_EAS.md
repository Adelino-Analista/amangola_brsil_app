# 📱 Guia Completo: Gerar APK e IPA com EAS Build

Este guia mostra como gerar os executáveis do aplicativo AMANGOLA usando o serviço gratuito EAS Build do Expo.

## ✅ Pré-requisitos

1. **Conta Expo** (gratuita)
   - Acesse: https://expo.dev
   - Clique em "Sign Up" e crie uma conta

2. **Node.js e npm** instalados no seu computador
   - Baixe em: https://nodejs.org

3. **EAS CLI instalado**
   ```bash
   npm install -g eas-cli
   ```

## 🚀 Passo a Passo

### Passo 1: Fazer Login no Expo

```bash
eas login
```

Você será redirecionado para o navegador para fazer login. Confirme o login.

### Passo 2: Inicializar o Projeto (se necessário)

```bash
eas build:configure
```

Este comando configurará o projeto para usar EAS Build.

### Passo 3: Gerar APK (Android)

Para gerar um APK de teste para Android:

```bash
eas build --platform android --profile preview
```

**Opções disponíveis:**
- `--profile preview` - Build de teste (recomendado para desenvolvimento)
- `--profile production` - Build para produção (Play Store)
- `--wait` - Aguardar conclusão do build
- `--output ./` - Baixar arquivo automaticamente

**Exemplo completo:**
```bash
eas build --platform android --profile preview --wait --output ./
```

### Passo 4: Gerar IPA (iOS)

Para gerar um IPA de teste para iOS:

```bash
eas build --platform ios --profile preview
```

**Nota:** Para iOS, você pode precisar de uma conta Apple Developer (paga) para distribuição em dispositivos reais. Para testes, pode usar TestFlight (gratuito).

### Passo 5: Gerar Ambos (APK + IPA)

Para gerar os dois arquivos simultaneamente:

```bash
eas build --platform all --profile preview --wait
```

## 📥 Baixar os Arquivos

Após o build ser concluído, você receberá um link para download dos arquivos. Você pode:

1. **Baixar do navegador** - Clique no link fornecido
2. **Usar CLI** - O arquivo será salvo localmente se usar `--output ./`
3. **Acessar no Dashboard** - https://expo.dev/projects

## 📦 Arquivos Gerados

- **APK** - Arquivo executável para Android (extensão `.apk`)
- **IPA** - Arquivo executável para iOS (extensão `.ipa`)

## 📱 Instalar nos Dispositivos

### Android (APK)

1. Copie o arquivo `.apk` para seu dispositivo Android
2. Abra o gerenciador de arquivos
3. Toque no arquivo APK
4. Confirme a instalação

**Ou use ADB (Android Debug Bridge):**
```bash
adb install caminho/para/arquivo.apk
```

### iOS (IPA)

1. Use **Xcode** no Mac:
   ```bash
   xcode-select --install
   xcrun xcodebuild -importArchive -archivePath arquivo.ipa -importOptionsPlist options.plist
   ```

2. Ou use **Apple Configurator** (Mac App Store)

3. Ou use **TestFlight** para distribuição via link

## 🔧 Configurações Avançadas

### Perfis de Build (eas.json)

O arquivo `eas.json` já está configurado com os seguintes perfis:

- **development** - Para desenvolvimento com Expo Go
- **preview** - Para testes (recomendado)
- **production** - Para produção (Play Store/App Store)

### Personalizar Perfis

Edite `eas.json` para adicionar configurações customizadas:

```json
{
  "build": {
    "custom": {
      "node": "20.x",
      "npm": "10.x"
    }
  }
}
```

## 🐛 Solução de Problemas

### "Erro: Projeto não autenticado"
```bash
eas login
```

### "Erro: Arquivo não encontrado"
Certifique-se de estar no diretório correto:
```bash
cd /caminho/para/amangola-app
```

### "Build falhou"
Verifique os logs:
```bash
eas build:view <build-id>
```

## 📚 Recursos Adicionais

- **Documentação EAS Build:** https://docs.expo.dev/build/introduction/
- **Expo Dashboard:** https://expo.dev/projects
- **Comunidade Expo:** https://forums.expo.dev

## 💡 Dicas

1. **Teste localmente primeiro** - Use `expo start` para testar no Expo Go
2. **Use preview para testes** - Mais rápido que production
3. **Monitore os builds** - Acesse https://expo.dev/projects para acompanhar
4. **Compartilhe links** - Você pode compartilhar links de download dos builds

## ✨ Próximas Etapas

Após gerar os arquivos:

1. **Teste em dispositivos reais** - Instale e teste a funcionalidade
2. **Reporte bugs** - Documente qualquer problema encontrado
3. **Publique na loja** - Quando pronto, publique na Play Store/App Store

---

**Dúvidas?** Consulte a documentação oficial: https://docs.expo.dev
