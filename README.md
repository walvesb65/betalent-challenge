# 📋 Projeto Técnico - BeTalent

**Desenvolvedor:** [Willian Almeida Alves](https://www.linkedin.com/in/willianalmeidaalves/)  
**Contato:** [WhatsApp](https://wa.me/5575991475382)  
**Tipo:** Teste Técnico Front-end

## 🚀 Visão Geral

Este projeto foi desenvolvido como parte do processo seletivo para a vaga de Front-end na BeTalent. Consiste em uma aplicação React que exibe uma tabela de funcionários com recursos de busca e visualização responsiva.

## ✨ Funcionalidades Implementadas

### ✅ Requisitos Obrigatórios

- Tabela responsiva com dados de funcionários
- Filtro por nome, cargo e telefone
- Formatação de datas e telefones
- Integração com API mockada via json-server
- Layout responsivo para mobile e desktop

### 🎁 Funcionalidades Adicionais

1. **Sistema de Tema Avançado**

   - Arquitetura de temas escalável
   - Suporte a dark mode (pronto para implementação)
   - Variáveis de estilo centralizadas

2. **Arquitetura de Código**

   - Componentização atômica
   - Hooks customizados reutilizáveis
   - Tipagem TypeScript rigorosa
   - Path aliases (@/) para imports limpos

3. **Experiência do Usuário**

   - Loading states elegantes
   - Tratamento de erros amigável
   - Transições suaves
   - Microinterações em hover/focus

4. **Performance**

   - Virtualização de lista para grandes datasets
   - Memoização de componentes
   - Code splitting pronto para implementação

5. **Testes**
   - Suíte de testes unitários e de integração
   - Cobertura de componentes críticos
   - Mocks de API configurados

## 🛠 Tecnologias Utilizadas

- **Front-end**

  - React 18
  - TypeScript
  - Styled Components
  - Axios
  - date-fns (formatação de datas)
  - React Icons

- **Ferramentas**
  - Vite (build tool)
  - Vitest (test runner)
  - Testing Library
  - json-server (API mock)
  - ESLint + Prettier

## 🏗 Estrutura do Projeto

```
src/
├── assets/               # Imagens e ícones
├── components/           # Componentes reutilizáveis
│   ├── Table/            # Tabela inteligente
│   ├── Header/           # Cabeçalho responsivo
│   └── Search/           # Componente de busca
├── hooks/                # Hooks customizados
│   └── useFetchUsers.ts  # Fetch de dados
├── pages/                # Páginas/views
│   └── Home.tsx          # Página principal
├── services/             # Integrações com API
│   └── api.ts            # Client HTTP
├── styles/               # Estilos globais
│   ├── theme.ts          # Sistema de temas
│   └── global.ts         # Estilos globais
├── utils/                # Utilitários
│   ├── formatters.ts     # Formatação de dados
│   └── types.ts          # Tipos globais
└── test-utils.tsx        # Configuração de testes
```

## 🚀 Como Executar o Projeto

### Pré-requisitos

- Node.js (v18+)
- Yarn ou npm

### Instalação

```bash
git clone git@github.com:walvesb65/betalent-challenge.git
cd betalent-challenge
yarn install
```

### Ambiente de Desenvolvimento

```bash
# Iniciar API mock (em outro terminal)
yarn mock

# Iniciar aplicação
yarn dev
```

### Testes

```bash
# Executar todos os testes
yarn test

# Executar com watcher
yarn test:watch

# Gerar relatório de cobertura
yarn test:coverage
```

### Build para Produção

```bash
yarn build
```

## 🌟 Destaques Técnicos

1. **Design System Interno**

   - Criação de componentes estilizados com herança de tema
   - Documentação de props via TypeScript

2. **Padrões de Código**

   - Clean Code aplicado
   - Princípios SOLID
   - Atomic Design

3. **Boas Práticas**
   - Error boundaries
   - Acessibilidade (WAI-ARIA)
   - SEO básico
   - Tratamento de erros de API

## 📈 Próximos Passos (Roadmap)

1. [ ] Implementar dark mode
2. [ ] Adicionar ordenação por colunas
3. [ ] Criar sistema de paginação
4. [ ] Adicionar internacionalização (i18n)
5. [ ] Implementar testes E2E com Cypress

## 🤝 Contato do Desenvolvedor

**Willian Almeida Alves**  
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/willianalmeidaalves/)  
[![WhatsApp](https://img.shields.io/badge/WhatsApp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white)](https://wa.me/5575991475382)

---

Este projeto foi desenvolvido com ❤️ por [Willian Almeida Alves](https://www.linkedin.com/in/willianalmeidaalves/) como parte do processo seletivo para a vaga de Front-end na BeTalent. Todas as funcionalidades obrigatórias foram implementadas e diversas melhorias adicionais foram incluídas para demonstrar habilidades técnicas e atenção à qualidade de código.
