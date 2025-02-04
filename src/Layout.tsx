import NavBar from "./components/Navbar.tsx";
import { Outlet } from "react-router-dom";

export default function Layout() {

    return (
    <div>
      <NavBar/>
      <main>
        <Outlet/>
      </main>
    </div>
  )
}