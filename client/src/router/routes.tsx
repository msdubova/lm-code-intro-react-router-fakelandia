import { Routes, Route } from "react-router-dom";
import MainLayout from "../components/MainLayout";
import Home from "../components/Home";
import Confession from "../components/Confession";
import Misdemeanours from "../components/Misdemeanours";
import NotFound from "../components/NotFound";
import Misdemeanour from "../components/Misdemeanours";
export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />}></Route>;
        <Route path="/confession" element={<Confession />}></Route>
        <Route path="/Misdemeanours" element={<Misdemeanours />}></Route>
        <Route path="/Misdemeanour:id" element={<Misdemeanour />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Route>
    </Routes>
  );
};
