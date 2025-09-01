import { ReactNode } from "react";
import { LMSSidebar } from "./LMSSidebar";
import { LMSTopBar } from "./LMSTopBar";

interface LMSLayoutProps {
  children: ReactNode;
}

export function LMSLayout({ children }: LMSLayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      <div className="flex">
        <LMSSidebar />
        <div className="flex-1 flex flex-col">
          <LMSTopBar />
          <main className="flex-1 p-6">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}