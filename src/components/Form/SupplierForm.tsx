import React from "react";
import type { FormProps } from "antd";
import { Button, Form, Input } from "antd";
import "./styles.css";
// import { StyledLabelForm } from "./styles";
import { Supplier } from "../../Interfaces/Supplier";

type FieldType = Supplier;

const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
  console.log("Success:", values);
};

const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const initialValues: Supplier = {
  nome: '',
  email: '',
  telefone: '',
  cnpj: '',
  endereco: {
    rua: '',
    numero: 0,
    bairro: '',
    cidade: '',
    estado: '',
    cep: '',
  },
};

const renderInterfaceFields = (obj: any, parentKey = ''): JSX.Element[]=> {
  return Object.keys(obj).map((key) => {

    const inputName = parentKey ? `${parentKey}.${key}` : key;
    const displayName = key.charAt(0).toUpperCase() + key.slice(1);

    if(typeof obj[key]==='object' && !Array.isArray(obj[key])){
      return renderInterfaceFields(obj[key], inputName);
    }

    return(
      <Form.Item 
        className="itemForm"
        key={displayName}
        label={displayName}
        name={displayName}
        rules={[{ required: true, message: `Este campo é OBRIGATÓRIO!` }]}
      >
        <Input placeholder={displayName} />
      </Form.Item>
    )
  }).flat();
}


const SupplierForm: React.FC = () => (
  <Form
    className="customForm"
    name="basic"
    labelCol={{ span: 8 }}
    wrapperCol={{ span: 16 }}
    initialValues={{ remember: true }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >

    {renderInterfaceFields(initialValues)}

    <Form.Item  className="submitButtonContainer" >
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
);

export default SupplierForm;
