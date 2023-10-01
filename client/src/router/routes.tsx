import { Routes, Route } from "react-router-dom";
import MainLayout from "../components/main_layout";
import Home from "../components/home";
import Confession from "../components/сonfession";
import Misdemeanours from "../components/misdemeanours";
import NotFound from "../components/not_found";
import Misdemeanour from "../components/misdemeanours";
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
