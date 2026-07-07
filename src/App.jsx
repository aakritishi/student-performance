import { ToastContainer } from "react-toastify";
import AppRoute from "./router/AppRoute";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <>
      <AppRoute />
      <ToastContainer position="top-right" autoClose={5000} />
    </>
  );
}

export default App;
