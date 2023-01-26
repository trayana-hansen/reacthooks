import { Route, Routes } from "react-router-dom";
import { GoalList } from "../UseEffectExamples/goalApiCall";
import Form from "../Form/form";
import CounterTimeOut from "../CounterTimeOut/counterTimeOut";
import NotFound from "../../Partials/notfound";

const AppRouter = () => {
  return (
    <Routes>
      <Route index element={<CounterTimeOut />} />
      <Route path="/goals" element={<GoalList />} />
      <Route path="/form" element={<Form />} />
    </Routes>
  );
};
export default AppRouter;
