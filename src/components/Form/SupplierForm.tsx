import React from "react";
import type { FormProps } from "antd";
import { Button, Form, Input } from "antd";
import "./styles.css";
// import { StyledLabelForm } from "./styles";
import { Fornecedor } from "../../Interfaces/Supplier";
import { useDispatch } from "react-redux";
import { addFornecedor } from "../../redux/fornecedoresSlice";

const SupplierForm: React.FC = () => {
  const dispatch = useDispatch();

  const onFinish: FormProps<Fornecedor>["onFinish"] = (values) => {
    try {
      dispatch(addFornecedor(values));
      console.log("Success:", values);
    } catch (error) {
      console.log(error);
    }
  };

  const onFinishFailed: FormProps<Fornecedor>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      className="customForm"
      name="basic"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <h1 className="h1Form">Cadastre aqui um novo fornecedor</h1>
      <Form.Item
        rules={[{ required: true, message: `Este campo é OBRIGATÓRIO!` }]}
        className="itemForm"
        label="Nome"
        name="nome"
      >
        <Input />
      </Form.Item>
      <Form.Item
        rules={[{ required: true, message: `Este campo é OBRIGATÓRIO!` }]}
        className="itemForm"
        label="Email"
        name="email"
      >
        <Input />
      </Form.Item>
      <Form.Item
        rules={[{ required: true, message: `Este campo é OBRIGATÓRIO!` }]}
        className="itemForm"
        label="Telefone"
        name="telefone"
      >
        <Input />
      </Form.Item>
      <Form.Item
        rules={[{ required: true, message: `Este campo é OBRIGATÓRIO!` }]}
        className="itemForm"
        label="CNPJ"
        name="cnpj"
      >
        <Input />
      </Form.Item>
      <Form.Item
        rules={[{ required: true, message: `Este campo é OBRIGATÓRIO!` }]}
        className="itemForm"
        label="Rua"
        name={["endereco", "rua"]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        rules={[{ required: true, message: `Este campo é OBRIGATÓRIO!` }]}
        className="itemForm"
        label="Número"
        name={["endereco", "numero"]}
      >
        <Input type="number" />
      </Form.Item>
      <Form.Item
        rules={[{ required: true, message: `Este campo é OBRIGATÓRIO!` }]}
        className="itemForm"
        label="Bairro"
        name={["endereco", "bairro"]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        rules={[{ required: true, message: `Este campo é OBRIGATÓRIO!` }]}
        className="itemForm"
        label="Cidade"
        name={["endereco", "cidade"]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        rules={[{ required: true, message: `Este campo é OBRIGATÓRIO!` }]}
        className="itemForm"
        label="Estado"
        name={["endereco", "estado"]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        rules={[{ required: true, message: `Este campo é OBRIGATÓRIO!` }]}
        className="itemForm"
        label="CEP"
        name={["endereco", "cep"]}
      >
        <Input />
      </Form.Item>

      <Form.Item className="submitButtonContainer">
        <Button type="primary" htmlType="submit">
          Cadastrar
        </Button>
      </Form.Item>
    </Form>
  );
};

export default SupplierForm;
