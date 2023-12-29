import React, { useState, useEffect, useCallback, useRef } from 'react';

import Sidebar from '../partials/Sidebar';
import Header from '../partials/Header';
import WelcomeBanner from '../partials/dashboard/WelcomeBanner';
import FilterButton from '../components/DropdownFilter';
import Datepicker from '../components/Datepicker';
import Diagram from '../partials/dashboard/Diagram';
import Broadcast from '../partials/dashboard/Broadcast';
import KuliahCard from '../partials/dashboard/KuliahCard';
import AgendaGroupCard from '../partials/dashboard/AgendaGroupCard';
import Banner from '../partials/Banner';

function Dashboard() {

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [scrollY, setScrollY] = useState(false);
  const ref=useRef(null)

  const handleScroll = useCallback((event) => {
    if (event.currentTarget.scrollTop > 800) {
      setScrollY(true);
    } else {
      setScrollY(false);
    }
  }, [])

  return (
    <div className="flex h-screen">

      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden" ref={ref} onScroll={handleScroll}>

        <main>
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">

            <div className="flex flex-col items-end sticky top-0 right-0 xl:z-60 z-20">
              <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} refer={ref} isScroll={scrollY} />
            </div>
            <WelcomeBanner />
            <div className="sm:flex sm:justify-between sm:items-center mb-8">
              <div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">
                <FilterButton />
                <Datepicker />
              </div>
            </div>
            <div className="flex flex-col xl:flex-row gap-4">
              <div className="flex flex-col gap-4 xl:w-2/3">
                <KuliahCard />
                <AgendaGroupCard />
                <KuliahCard />
                <AgendaGroupCard />
                <KuliahCard />
                <AgendaGroupCard />
                <AgendaGroupCard />
                <div className="h-10 bg-green-600">scrolling refer to</div>
              </div>
              <div className="flex flex-col gap-4 xl:w-1/3">
                <div className="flex flex-col bg-indigo-200 dark:bg-indigo-500 shadow-lg rounded-lg border border-slate-200 dark:border-slate-700">
                  <header className="px-5 py-4 border-b border-slate-100 dark:border-slate-700">
                    <h2 className="font-semibold text-lg text-slate-800 dark:text-slate-100">Agenda Bulan Desember</h2>
                  </header>
                  <Diagram />
                  <Broadcast />
                </div>
              </div>
            </div>
          </div>
        </main>
        <Banner />
      </div>
    </div>
  );
}

export default Dashboard;