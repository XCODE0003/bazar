import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
export default function MainLayout() {
  return (
    <div className="flex flex-col gap-4 min-h-screen">
      <Header />
      <main><Outlet /></main>
    </div>
  );
}

