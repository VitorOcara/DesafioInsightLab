import { Layout, Menu } from "antd";

import "./App.css";
import SupplierForm from "./components/Form/SupplierForm";
import { useState } from "react";
import Home from "./Pages/Home/Home";
import SupplierList from "./components/List/SupplierList";

function App() {
  const { Header, Content, Footer } = Layout;

  const items = [
    { key: 0, label: "Home" },
    { key: 1, label: "Cadastrar" },
    { key: 2, label: "Listar" },
  ];

  const [itemSelected, setItemSelected] = useState("0");

  return (
    <>
      <Layout className="CustomLayout">
        <Header className="CustomHeader">
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
      <Footer />
    </>
  );
}

export default App;
