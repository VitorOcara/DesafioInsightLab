# React + TypeScript + Vite

Este template fornece uma configuração mínima para fazer o React funcionar no Vite com HMR e algumas regras do ESLint.

Atualmente, dois plugins oficiais estão disponíveis:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Uso do Redux no projeto

instalação:
- npm install @reduxjs/toolkit react-redux

arquivo store.ts
```js
import { configureStore } from "@reduxjs/toolkit";
import fornecedoresSlice from "./fornecedoresSlice";

const store = configureStore({
  reducer: {
    fornecedores: fornecedoresSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
```
arquivo Slice.ts

```ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Fornecedor } from "../Interfaces/Supplier";

const initialState: Fornecedor[] = [
  {
    nome: "Fornecedor 1",
    email: "fornecedor1@email.com",
    telefone: "1234567890",
    cnpj: "12345678000100",
    endereco: {
      rua: "Rua 1",
      numero: 100,
      bairro: "ABC",
      cidade: "DEF",
      estado: "GHIJ",
      cep: "12345000",
    },
  },
];

const fornecedoresSlice = createSlice({
  name: "fornecedores",
  initialState,
  reducers: {
    addFornecedor: (state, action: PayloadAction<Fornecedor>) => {
      state.push(action.payload);
    },
    updateFornecedor: (state, action: PayloadAction<Fornecedor>) => {
      const index = state.findIndex((f) => f.cnpj === action.payload.cnpj);
      if (index >= 0) {
        state[index] = action.payload;
      }
    },
    deleteFornecedor: (state, action: PayloadAction<string>) => {
       return state.filter( f=> f.cnpj != action.payload);
      },
  },
});

export const { addFornecedor, updateFornecedor, deleteFornecedor } = fornecedoresSlice.actions;

export default fornecedoresSlice.reducer;
```
