import { Outlet } from "react-router-dom";
import Header from "./header/header";
const MainLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};
export default MainLayout;
