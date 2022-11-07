import { Outlet } from "react-router-dom";
import AppBar from "../AppBar/Header";
import Footer from "../Footer/Footer";
export default function Layout() {
  return (
    <>
      <AppBar />
      <Outlet />
      <Footer />
    </>
  );
}
