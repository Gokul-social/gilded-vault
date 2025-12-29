import { Outlet } from "react-router-dom";
import { BottomNav } from "./BottomNav";

export const AppLayout = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <main className="flex-1 max-w-md mx-auto w-full pb-20">
        <Outlet />
      </main>
      <BottomNav />
    </div>
  );
};
