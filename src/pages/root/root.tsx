import { Provider } from "react-redux";
import Layout from "../../ui/layout/layout";
import { Outlet } from "react-router-dom";
import store from "../../store";

const Root = () => {
  return (
    <Provider store={store}>
      <Layout>
        <Outlet />
      </Layout>
    </Provider>
  );
};

export default Root;
