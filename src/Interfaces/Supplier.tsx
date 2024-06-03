
export interface Supplier {

  nome: string;
  email: string;
  telefone: string;
  cnpj: string;
  endereco: {
    rua: string;
    numero: number;
    bairro: string;
    cidade: string;
    estado: string;
    cep: string;
  };

}
