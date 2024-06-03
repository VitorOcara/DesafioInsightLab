import React, { useState } from "react";
import { Table, Modal, Button, Form, Space, Popconfirm, Input } from "antd";
import {
  DeleteOutlined,
  EditOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { Fornecedor } from "../../Interfaces/Supplier";
import "./styles.css";

const SupplierList: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [selectedSupplier, setSelectedSupplier] = useState<Fornecedor | null>(
    null
  );
  const [form] = Form.useForm();

  const initialfornecedores: Fornecedor[] = [
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
    // Adicione mais fornecedores conforme necessário
  ];
  const [fornecedores, setFornecedores] =
    useState<Fornecedor[]>(initialfornecedores);

  const handleEdit = (supplier: Fornecedor) => {
    setSelectedSupplier(supplier);
    setEditMode(true);
    setVisible(true);
    form.setFieldsValue(supplier);
  };

  const handleViewDetails = (supplier: Fornecedor) => {
    setSelectedSupplier(supplier);
    setVisible(true);
  };

  const handleDelete = (cnpj: string) => {
    setFornecedores(fornecedores.filter((supplier) => supplier.cnpj !== cnpj));
  };

  const atualizar = () => {
    form.validateFields().then((values) => {
      if (editMode) {
        setFornecedores((prevState) =>
          prevState.map((supplier) =>
            supplier.cnpj === selectedSupplier?.cnpj
              ? { ...values, cnpj: supplier.cnpj }
              : supplier
          )
        );
      }
      setVisible(false);
    });
  };

  const columns = [
    {
      title: "Nome",
      dataIndex: "nome",
      key: "nome",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Telefone",
      dataIndex: "telefone",
      key: "telefone",
    },
    {
      title: "CNPJ",
      dataIndex: "cnpj",
      key: "cnpj",
    },
    {
      title: "Ações",
      key: "actions",
      render: (text: string, record: Fornecedor) => (
        <Space>
          <Button
            icon={<SearchOutlined />}
            onClick={() => handleViewDetails(record)}
          >
            Ver detalhes
          </Button>

          <Popconfirm
            title="Tem certeza que deseja excluir este fornecedor?"
            onConfirm={() => handleDelete(record.cnpj)}
            okText="Sim"
            cancelText="Não"
          >
            <Button icon={<DeleteOutlined />} danger>
              Excluir
            </Button>
          </Popconfirm>
        </Space>
      ),
    },
  ];

  return (
    <div>
      <Table className="CustomTable" columns={columns} dataSource={fornecedores} rowKey="cnpj" />
      <Modal
        className="CustomModal"
        title={"Detalhes do Fornecedor"}
        open={visible}
        onCancel={() => setVisible(false)}
        onOk={atualizar}
        okText={editMode ? "Salvar" : "Ok"}
        cancelText="Cancelar"
      >
        {selectedSupplier && (
          <Form form={form} layout="vertical" initialValues={selectedSupplier}>
            <Form.Item label="Nome" name="nome">
              <Input />
            </Form.Item>
            <Form.Item label="Email" name="email">
              <Input />
            </Form.Item>
            <Form.Item label="Telefone" name="telefone">
              <Input />
            </Form.Item>
            <Form.Item label="CNPJ" name="cnpj">
              <Input disabled />
            </Form.Item>
            <Form.Item label="Rua" name={["endereco", "rua"]}>
              <Input />
            </Form.Item>
            <Form.Item label="Número" name={["endereco", "numero"]}>
              <Input type="number" />
            </Form.Item>
            <Form.Item label="Bairro" name={["endereco", "bairro"]}>
              <Input />
            </Form.Item>
            <Form.Item label="Cidade" name={["endereco", "cidade"]}>
              <Input />
            </Form.Item>
            <Form.Item label="Estado" name={["endereco", "estado"]}>
              <Input />
            </Form.Item>
            <Form.Item label="CEP" name={["endereco", "cep"]}>
              <Input />
            </Form.Item>
          </Form>
        )}
      </Modal>
    </div>
  );
};

export default SupplierList;
