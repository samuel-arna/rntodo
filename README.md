# Gerenciador de Tarefas - React Native

## Descrição
Aplicativo de gerenciamento de tarefas desenvolvido em React Native, com as seguintes funcionalidades:
- Listar tarefas
- Adicionar nova tarefa
- Marcar/desmarcar tarefa como concluída
- Limpar tarefas concluídas

## Soluções Técnicas

### 1. **Arquitetura e Organização**
- **Pattern de Composição:** Componentes reutilizáveis para Header, Footer, TaskItem, etc.
- **Separação de Lógica:** Controllers para separar lógica de negócio das telas (screens).
- **Arrow Functions:** Todos os componentes e hooks utilizam arrow functions para padronização e modernidade.
- **Pasta por Feature:** Cada tela e componente possui sua própria pasta com arquivos de estilos e lógica.

### 2. **Gerenciamento de Estado**
- **Context API:** O estado global das tarefas é gerenciado via Context API (`contexts/TaskContext.tsx`), permitindo acesso e manipulação das tarefas em qualquer parte do app.

### 3. **Navegação**
- **React Navigation:** Utilização do `@react-navigation/native` e `@react-navigation/native-stack` para navegação entre telas.
- **Centralização das Rotas:** O arquivo `routes/index.tsx` centraliza toda a configuração de navegação.

### 4. **Estilização**
- **Styled-components:** Todos os estilos são feitos com `styled-components`, separados em arquivos próprios (`styles.ts`) para cada componente/tela.

### 5. **Ícones**
- **react-native-vector-icons:** Utilização do pacote `react-native-vector-icons/MaterialIcons` para ícones de ação (adicionar, lixeira, check).
- **Configuração Android:** Linha `apply from: "../../node_modules/react-native-vector-icons/fonts.gradle"` adicionada ao `android/app/build.gradle` para garantir o funcionamento dos ícones.

### 6. **Boas Práticas**
- **Componentização:** Componentes pequenos, reutilizáveis e com responsabilidade única.
- **Controllers:** Hooks customizados para lógica de cada tela, facilitando testes e manutenção.
- **Tipagem:** Uso de TypeScript em todo o projeto para maior segurança e produtividade.

## 7. **Persistência Local**
- **AsyncStorage:** As tarefas são salvas e carregadas automaticamente usando [`@react-native-async-storage/async-storage`](https://github.com/react-native-async-storage/async-storage), garantindo que os dados persistam mesmo após fechar o app.

## Como rodar o projeto

1. Instale as dependências:
   ```sh
   npm install
   ```
2. No Android, garanta a linha no `android/app/build.gradle`:
   ```gradle
   apply from: "../../node_modules/react-native-vector-icons/fonts.gradle"
   ```
3. No iOS, rode:
   ```sh
   cd ios && pod install && cd ..
   ```
4. Rode o app:
   ```sh
   npx react-native run-android # ou npx react-native run-ios
   ```

## Estrutura de Pastas

```
components/
  Header/
  Footer/
  TaskItem/
contexts/
  TaskContext.tsx
screens/
  TaskListScreen/
    controller.ts
    index.tsx
    styles.ts
  AddTaskScreen/
    controller.ts
    index.tsx
    styles.ts
routes/
  index.tsx
```

---

