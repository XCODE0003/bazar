import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import MainPage from "./pages/MainPage";
import MarketPage from "./pages/Market";
import ExchangePage from "./pages/Exchange";
import UserPage from "./pages/User";
import ProfilePage from "./pages/Profile";
import DealPage from "./pages/Deal";
import InventoryPage from "./pages/Inventory";
import AdminPage from "./pages/Admin/Admin";
import DealsPage from "./pages/Admin/Deal";
import UsersPage from "./pages/Admin/Users";
import AdminLayout from "./layout/AdminLayout";
import RequestPage from "./pages/Admin/Request";
import "./App.css";
import { MenuProvider } from './context/MenuContext';

function App() {
  return (
    <MenuProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<MainPage />} />
            <Route path="/market" element={<MarketPage />} />
            <Route path="/exchange" element={<ExchangePage />} />
            <Route path="/user/:id" element={<UserPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/deal/:id" element={<DealPage />} />
            <Route path="/inventory" element={<InventoryPage />} />

            {/* <Route path="about" element={<AboutPage />} /> */}
          </Route>
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<AdminPage />} />
            <Route path="deals" element={<DealsPage />} />
            <Route path="users" element={<UsersPage />} />
            <Route path="requests" element={<RequestPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </MenuProvider>
  );
}

export default App;
