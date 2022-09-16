import Header from "./components/Header/Header";
import Modal from "./components/Modal/Modal";
import AppLayout from "./layout/AppLayout";
import AppRoutes from "./routes/AppRoutes";

const App = () => {

  return (
    <AppLayout>
      <Header />
      <AppRoutes />
      <Modal />
    </AppLayout>
  )
}

export default App;