import React, { useState } from 'react';

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
import DashboardCard11 from '../partials/dashboard/DashboardCard11';

function Dashboard() {

  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen">

      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">

        {/*  Site header */}
        {/* <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} /> */}

        <main>
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">

            <div className="flex flex-col items-end sticky top-0 right-0 xl:z-60 z-20">
              <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
            </div>

            {/* Welcome banner */}
            <WelcomeBanner />

            {/* Dashboard actions */}
            <div className="sm:flex sm:justify-between sm:items-center mb-8">

              {/* Right: Actions */}
              <div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">
                {/* Filter button */}
                <FilterButton />
                {/* Datepicker built with flatpickr */}
                <Datepicker />
                {/* Add view button */}
                {/* <button className="btn bg-indigo-500 hover:bg-indigo-600 text-white">
                    <svg className="w-4 h-4 fill-current opacity-50 shrink-0" viewBox="0 0 16 16">
                        <path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
                    </svg>
                    <span className="hidden xs:block ml-2">Add view</span>
                </button>                 */}
              </div>
            </div>

            {/* Cards */}

            <div className="flex flex-col xl:flex-row gap-4">
              <div className="flex flex-col gap-4 xl:w-2/3">
                <KuliahCard />
                <AgendaGroupCard />
                <KuliahCard />
                <AgendaGroupCard />
                <KuliahCard />
                <AgendaGroupCard />
                <AgendaGroupCard />
              </div>
              <div className="flex flex-col gap-4 xl:w-1/3">
                <div className="flex flex-col bg-indigo-200 dark:bg-indigo-500 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
                  <header className="px-5 py-4 border-b border-slate-100 dark:border-slate-700">
                    <h2 className="font-semibold text-lg text-slate-800 dark:text-slate-100">Agenda Bulan Desember</h2>
                  </header>
                  <Diagram />
                  <Broadcast />
                </div>
                {/* <Diagram />
                <Broadcast /> */}
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