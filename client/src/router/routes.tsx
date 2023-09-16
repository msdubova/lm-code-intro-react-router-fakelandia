import { Routes, Route } from "react-router-dom";
import MainLayout from "../components/MainLayout";
import Home from "../components/Home";
import Confession from "../components/Confession";
import Misdemeanour from "../components/Misdemeanour";
import NotFound from "../components/NotFound";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />}></Route>;
        <Route path="/confession" element={<Confession />}></Route>
        <Route path="/misdemeanour" element={<Misdemeanour />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Route>
    </Routes>
  );
};
