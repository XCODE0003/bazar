import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import AsideAdmin from "../components/AsideAdmin";
import "../admin.css";
export default function AdminLayout() {
  return (
    <div className="flex admin_main flex-col gap-4 min-h-screen">
      <Header />
      <div className="flex  container mx-auto h-full gap-3 ">
        <AsideAdmin />

        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
}
