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
  {
    nome: "Fornecedor 2",
    email: "fornecedor2@email.com",
    telefone: "0987654321",
    cnpj: "98765432000100",
    endereco: {
      rua: "Rua 2",
      numero: 200,
      bairro: "ABC",
      cidade: "DEF",
      estado: "GHIJ",
      cep: "23456000",
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