import { Outlet } from "react-router-dom";
import AppBar from "../AppBar/Header";

export default function Layout() {
  return (
    <>
      <AppBar />
      <Outlet />
      {/* <Footer /> */}
    </>
  );
}
