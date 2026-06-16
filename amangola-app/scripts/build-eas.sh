#!/bin/bash

# Script para gerar APK e IPA com EAS Build
# Uso: ./scripts/build-eas.sh [android|ios|all]

set -e

PLATFORM=${1:-all}
PROFILE=${2:-preview}

echo "🚀 AMANGOLA Build Script"
echo "========================"
echo "Plataforma: $PLATFORM"
echo "Perfil: $PROFILE"
echo ""

# Verificar se EAS CLI está instalado
if ! command -v eas &> /dev/null; then
    echo "❌ EAS CLI não encontrado. Instalando..."
    npm install -g eas-cli
fi

# Verificar se está autenticado
echo "🔐 Verificando autenticação..."
if ! eas whoami &> /dev/null; then
    echo "⚠️  Você não está autenticado. Execute 'eas login' primeiro."
    exit 1
fi

echo "✅ Autenticado com sucesso!"
echo ""

# Executar build
echo "📦 Iniciando build para $PLATFORM..."
echo ""

if [ "$PLATFORM" = "android" ] || [ "$PLATFORM" = "all" ]; then
    echo "📱 Gerando APK (Android)..."
    eas build --platform android --profile "$PROFILE" --wait
    echo "✅ APK gerado com sucesso!"
    echo ""
fi

if [ "$PLATFORM" = "ios" ] || [ "$PLATFORM" = "all" ]; then
    echo "🍎 Gerando IPA (iOS)..."
    eas build --platform ios --profile "$PROFILE" --wait
    echo "✅ IPA gerado com sucesso!"
    echo ""
fi

echo "🎉 Build concluído!"
echo ""
echo "📥 Acesse https://expo.dev/projects para baixar os arquivos"
