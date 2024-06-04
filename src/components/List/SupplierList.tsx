import React, { useState } from "react";
import { Table, Modal, Button, Form, Space, Popconfirm, Input } from "antd";
import { DeleteOutlined, SearchOutlined } from "@ant-design/icons";
import { Fornecedor } from "../../Interfaces/Supplier";
import "./styles.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import {
  deleteFornecedor,
  updateFornecedor,
} from "../../redux/fornecedoresSlice";

const SupplierList: React.FC = () => {
  const dispatch = useDispatch();
  const fornecedores = useSelector((state: RootState) => state.fornecedores);
  const [visible, setVisible] = useState(false);
  const [selectedSupplier, setSelectedSupplier] = useState<Fornecedor | null>(
    null
  );
  const [form] = Form.useForm();

  const handleViewDetails = (supplier: Fornecedor) => {
    setSelectedSupplier(supplier);
    setVisible(true);
  };

  const handleDelete = (cnpj: string) => {
    dispatch(deleteFornecedor(cnpj));
  };

  const atualizar = () => {
    form.validateFields().then((values) => {
      dispatch(updateFornecedor({ ...selectedSupplier, ...values }));

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
      render: (record: Fornecedor) => (
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
      <Table
        pagination={false}
        className="CustomTable"
        columns={columns}
        dataSource={fornecedores}
        rowKey="cnpj"
      />
      <Modal
        className="CustomModal"
        title={"Detalhes do Fornecedor"}
        open={visible}
        onCancel={() => setVisible(false)}
        onOk={atualizar}
        okText={"Concluir"}
        cancelText="Cancelar"
      >
        {selectedSupplier && (
          <Form
            className="CustomListForm"
            form={form}
            layout="vertical"
            initialValues={selectedSupplier}
          >
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
