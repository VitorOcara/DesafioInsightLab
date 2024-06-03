import { Layout, Menu } from "antd";

import "./App.css";
import SupplierForm from "./components/Form/SupplierForm";
import { useState } from "react";
import Home from "./Pages/Home/Home";
import SupplierList from "./components/List/SupplierList";
import { RocketFilled } from "@ant-design/icons";

function App() {
  const { Header, Content, Footer } = Layout;

  const items = [
    { key: 0, label: "Home", title: "Seja bem Vindo" },
    { key: 1, label: "Cadastrar", title: "Cadastre um novo fornecedor" },
    { key: 2, label: "Listar", title: "Veja os Fornecedores Cadastrados" },
  ];

  const [itemSelected, setItemSelected] = useState("0");

  return (
    <>
      <Layout className="CustomLayout">
        <Header className="CustomHeader">
          <div className="CustomHeaderDiv">
            <RocketFilled className="IconHome" />
            <h1>Fornecedores.Insight</h1>
          </div>
          <Menu
            className="CustomMenu"
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["0"]}
            items={items}
            onClick={(item) => {
              setItemSelected(item.key);
            }}
          />
        </Header>

        <Content className="CustomContent">
          {itemSelected === "0" ? (
            <Home />
          ) : itemSelected === "1" ? (
            <SupplierForm />
          ) : (
            <SupplierList />
          )}
        </Content>
      </Layout>
      <Footer className="CustomFooter" />
    </>
  );
}

export default App;
