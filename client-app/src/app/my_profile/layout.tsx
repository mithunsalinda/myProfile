'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Header from '@/components/layout/Header';
import Sidebar from '@/components/layout/Sidebar';
import { sidebarItemsData } from '@/const/sidebarItemsData';
import { useGetMeQuery } from '@/store/api/authApi';

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const router = useRouter();

  const {
    data: user,
    isLoading,
    isError,
  } = useGetMeQuery(undefined, { refetchOnMountOrArgChange: true });
  useEffect(() => {
    if (!isLoading && isError) {
      router.push('/login');
    }
  }, [isLoading, isError, router]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen text-xl">
        Checking authentication...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[url('/bg-blur.jpg')] bg-cover bg-center text-black font-sans">
      <Header isOpen={isSidebarOpen} onToggle={() => setIsSidebarOpen((prev) => !prev)} />

      <div className="flex flex-col sm:flex-row">
        {isSidebarOpen && (
          <div className="sm:hidden absolute top-16 left-0 w-full bg-white z-50 shadow-md">
            <Sidebar items={sidebarItemsData} />
          </div>
        )}
        <Sidebar items={sidebarItemsData} />
        <main className="flex-1 p-6">
          <div className="flex flex-col md:flex-row items-start gap-10 w-full">{children}</div>
        </main>
      </div>
    </div>
  );
};

export default AppLayout;
