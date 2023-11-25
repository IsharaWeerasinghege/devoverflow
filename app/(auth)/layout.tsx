import React from "react";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-100">
      {children}
    </main>
  );
}

export default Layout;
