//Este projeto é inteiramente para finalidades Acadêmicas

# Cassino Desktop

Este projeto é uma aplicação de cassino para desktop construída com tecnologias web modernas e empacotada com Electron. Ele fornece uma plataforma para usuários se registrarem, fazerem login e participarem de jogos estilo cassino.

## Funcionamento

A aplicação é estruturada em três partes principais:

1.  **Frontend (Lado do Cliente):**
    *   Construído com **React** e **Vite** para uma interface de usuário rápida e interativa.
    *   Utiliza **Tailwind CSS** para estilização.
    *   Gerencia interações do usuário, exibe interfaces de jogo e comunica-se com o backend através de chamadas API.
    *   Lida com o roteamento do lado do cliente usando `react-router-dom`.
    *   Componentes chave incluem registro/login de usuário, visualizações de jogo (ex: jogos de cartas), perfis de usuário e interfaces de transação/depósito.

2.  **Backend (Lado do Servidor):**
    *   Desenvolvido em **PHP**.
    *   Responsável pela lógica de negócios, incluindo:
        *   Autenticação de usuário (registro e login).
        *   Gerenciamento de dados do usuário.
        *   Potencialmente lidando com lógica de jogo e transações financeiras 
    *   Interage com um banco de dados SQL
    *   Expõe endpoints de API que o frontend consome.

3.  **Wrapper da Aplicação Desktop:**
    *   **Electron** é usado para empacotar a aplicação web (interação frontend e backend) em uma aplicação desktop multiplataforma.
    *   O processo principal do Electron (`electron/main/index.ts`) gerencia a janela da aplicação, ciclo de vida, e pode se integrar com recursos nativos do desktop como atualizações automáticas.

## Funcionalidades Chave

*   **Gerenciamento de Contas de Usuário:** Registro e login seguros para usuários.
*   **Jogos de Cassino:** Interfaces de jogo interativas (ex: jogos de cartas).
*   **Gerenciamento de Perfil:** Usuários podem visualizar e potencialmente gerenciar suas informações de perfil.
*   **Depósitos/Transações:** Funcionalidade para usuários gerenciarem seus fundos dentro da aplicação.
*   **Experiência Desktop:** Empacotado como uma aplicação desktop nativa para facilidade de uso.

## Pilha de Tecnologias

*   **Frontend:** React, Vite, TypeScript, Tailwind CSS
*   **Backend:** PHP
*   **Banco de Dados:** SQL 
*   **Framework Desktop:** Electron
*   **Ferramenta de Build / Bundler:** Vite
*   **Gerenciador de Pacotes:** npm

## 🛫 Clonar o projeto

```sh
# clone o projeto
git clone [https://github.com/bruna9165/cassino.git](https://github.com/sntosz/CassinoDesktop.git)

# entre no diretório do projeto
cd cassino

# instale as dependências
npm install

# desenvolva
npm run dev
```
