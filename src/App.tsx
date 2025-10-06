import React from "react";
import AppRoutes from "./routes/AppRoutes";
import { Navbar } from "./components/common/Navbar";

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <AppRoutes />
    </>
  );
};

export default App;
