import React, { useState, useEffect, useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import SidebarLinkGroup from './SidebarLinkGroup';
import logo from '../../src/images/schediva_logo.png'

function Sidebar({ sidebarOpen, setSidebarOpen }) {
  const location = useLocation();
  const { pathname } = location;

  const trigger = useRef(null);
  const sidebar = useRef(null);

  const storedSidebarExpanded = localStorage.getItem('sidebar-expanded');
  const [sidebarExpanded, setSidebarExpanded] = useState(storedSidebarExpanded === null ? false : storedSidebarExpanded === 'true');

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!sidebar.current || !trigger.current) return;
      if (!sidebarOpen || sidebar.current.contains(target) || trigger.current.contains(target)) return;
      setSidebarOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });
  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!sidebarOpen || keyCode !== 27) return;
      setSidebarOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  useEffect(() => {
    localStorage.setItem('sidebar-expanded', sidebarExpanded);
    if (sidebarExpanded) {
      document.querySelector('body').classList.add('sidebar-expanded');
    } else {
      document.querySelector('body').classList.remove('sidebar-expanded');
    }
  }, [sidebarExpanded]);

  return (
    <div>
      {/* Sidebar backdrop (mobile only) */}
      <div
        className={`fixed inset-0 bg-slate-900 bg-opacity-30 z-40 lg:hidden lg:z-auto transition-opacity duration-200 ${sidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        aria-hidden="true"
      ></div>

      {/* Sidebar */}
      <div className="lg:pl-10 lg:py-10 h-screen">
        <div
          id="sidebar"
          ref={sidebar}
          className={`rounded-md h-full flex flex-col absolute z-40 lg:static lg:left-auto lg:top-auto lg:translate-x-0 no-scrollbar w-64 lg:w-20 lg:sidebar-expanded:!w-64 shrink-0 bg-slate-800 p-4 transition-all duration-200 ease-in-out ${sidebarOpen ? 'translate-x-0' : '-translate-x-64'
            }`}
          onMouseEnter={() => setSidebarExpanded(true)} onMouseLeave={() => setSidebarExpanded(false)}
        >
          <button className={`origin-center duration-100 z-60 absolute right-[-15px] top-8 ${!sidebarOpen && 'rotate-180 hidden'}`} onClick={() => setSidebarOpen(!sidebarOpen)}>
            <svg width="35px" viewBox="0 0 24 24" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM14.79 12.53L11.26 16.06C11.11 16.21 10.92 16.28 10.73 16.28C10.54 16.28 10.35 16.21 10.2 16.06C9.91 15.77 9.91 15.29 10.2 15L13.2 12L10.2 9C9.91 8.71 9.91 8.23 10.2 7.94C10.49 7.65 10.97 7.65 11.26 7.94L14.79 11.47C15.09 11.76 15.09 12.24 14.79 12.53Z" fill="#ffffff" />
            </svg>
          </button>
          {/* Sidebar header */}
          <div className="flex flex-col justify-between items-center mb-10 pr-3 sm:px-2 ">
            {/* Logo */}
            <NavLink end to="/" className="block">
              <img src={logo} alt="" width='40px' className='' />
            </NavLink>
            <span className={`pt-3 text-xl uppercase font-bold text-slate-300 pointer-events-none origin-center sidebar-expanded:scale-100 duration-300 scale-0`}>
              Schediva
            </span>
          </div>

          {/* Links */}
          <div className="space-y-8">
            {/* Pages group */}
            <div>
              <h3 className="text-xs uppercase text-slate-500 font-semibold pl-3">
                <span className="hidden lg:block lg:sidebar-expanded:hidden text-center w-6" aria-hidden="true">
                  •••
                </span>
                <span className="lg:hidden lg:sidebar-expanded:block">Pages</span>
              </h3>
              <ul className="mt-3">
                {/* Dashboard */}
                <li className={`hover:bg-gray-600 px-3 py-2 rounded-md mb-0.5 last:mb-0 ${pathname.includes('dashboard') && 'bg-slate-900'}`}>
                  <NavLink
                    end
                    to="/"
                    className={`block text-slate-200 truncate transition duration-150 ${pathname.includes('dashboard') ? 'hover:text-slate-200' : 'hover:text-white'
                      }`}
                  >
                    <div className="flex items-center">
                      <svg className="shrink-0 h-6 w-6" viewBox="0 0 24 24">
                        <path
                          className={`fill-current ${pathname === '/' || pathname.includes('dashboard') ? 'text-indigo-500' : 'text-slate-400'
                            }`}
                          d="M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12S18.617 0 12 0z"
                        />
                        <path
                          className={`fill-current ${pathname === '/' || pathname.includes('dashboard') ? 'text-indigo-600' : 'text-slate-600'
                            }`}
                          d="M12 3c-4.963 0-9 4.037-9 9s4.037 9 9 9 9-4.037 9-9-4.037-9-9-9z"
                        />
                        <path
                          className={`fill-current ${pathname === '/' || pathname.includes('dashboard') ? 'text-indigo-200' : 'text-slate-400'
                            }`}
                          d="M12 15c-1.654 0-3-1.346-3-3 0-.462.113-.894.3-1.285L6 6l4.714 3.301A2.973 2.973 0 0112 9c1.654 0 3 1.346 3 3s-1.346 3-3 3z"
                        />
                      </svg>
                      <span className="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 duration-200">
                        Dashboard
                      </span>
                    </div>
                  </NavLink>
                </li>
                {/* Organisasi */}

                {/* Campaigns */}
                <li className={`hover:bg-gray-600 px-3 py-2 rounded-md mb-0.5 last:mb-0 ${pathname.includes('perkuliahan') && 'bg-slate-900'}`}>
                  <NavLink
                    end
                    to="/perkuliahan"
                    className={`block text-slate-200 truncate transition duration-150 ${pathname.includes('perkuliahan') ? 'hover:text-slate-200' : 'hover:text-white'
                      }`}
                  >
                    <div className="flex items-center">
                      <svg className="shrink-0 h-6 w-6" viewBox="0 0 24 24">
                        <path
                          className={`fill-current ${pathname.includes('perkuliahan') ? 'text-indigo-500' : 'text-slate-600'}`}
                          d="M20 7a.75.75 0 01-.75-.75 1.5 1.5 0 00-1.5-1.5.75.75 0 110-1.5 1.5 1.5 0 001.5-1.5.75.75 0 111.5 0 1.5 1.5 0 001.5 1.5.75.75 0 110 1.5 1.5 1.5 0 00-1.5 1.5A.75.75 0 0120 7zM4 23a.75.75 0 01-.75-.75 1.5 1.5 0 00-1.5-1.5.75.75 0 110-1.5 1.5 1.5 0 001.5-1.5.75.75 0 111.5 0 1.5 1.5 0 001.5 1.5.75.75 0 110 1.5 1.5 1.5 0 00-1.5 1.5A.75.75 0 014 23z"
                        />
                        <path
                          className={`fill-current ${pathname.includes('perkuliahan') ? 'text-indigo-300' : 'text-slate-400'}`}
                          d="M17 23a1 1 0 01-1-1 4 4 0 00-4-4 1 1 0 010-2 4 4 0 004-4 1 1 0 012 0 4 4 0 004 4 1 1 0 010 2 4 4 0 00-4 4 1 1 0 01-1 1zM7 13a1 1 0 01-1-1 4 4 0 00-4-4 1 1 0 110-2 4 4 0 004-4 1 1 0 112 0 4 4 0 004 4 1 1 0 010 2 4 4 0 00-4 4 1 1 0 01-1 1z"
                        />
                      </svg>
                      <span className="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 duration-200">
                        Perkuliahan
                      </span>
                    </div>
                  </NavLink>
                </li>
              </ul>
            </div>

            {/* More group */}
            <div>
              <h3 className="text-xs uppercase text-slate-500 font-semibold pl-3">
                <span className="hidden lg:block lg:sidebar-expanded:hidden text-center w-6" aria-hidden="true">
                  •••
                </span>
                <span className="lg:hidden lg:sidebar-expanded:block">More</span>
              </h3>
              <ul className="mt-3">
                {/* Authentication */}
                <li className={`hover:bg-gray-600 px-3 py-2 rounded-md mb-0.5 last:mb-0 ${pathname.includes('campaigns') && 'bg-slate-900'}`}>
                  <NavLink
                    end
                    to="/campaigns"
                    className={`block text-slate-200 truncate transition duration-150 ${pathname.includes('campaigns') ? 'hover:text-slate-200' : 'hover:text-white'
                      }`}
                  >
                    <div className="flex items-center">
                      <svg width="27px" height="27px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          className={`fill-current ${pathname.includes('campaigns') ? 'text-indigo-300' : 'text-slate-400'}`}
                          d="M18.9401 5.42141L13.7701 2.43141C12.7801 1.86141 11.2301 1.86141 10.2401 2.43141L5.02008 5.44141C2.95008 6.84141 2.83008 7.05141 2.83008 9.28141V14.7114C2.83008 16.9414 2.95008 17.1614 5.06008 18.5814L10.2301 21.5714C10.7301 21.8614 11.3701 22.0014 12.0001 22.0014C12.6301 22.0014 13.2701 21.8614 13.7601 21.5714L18.9801 18.5614C21.0501 17.1614 21.1701 16.9514 21.1701 14.7214V9.28141C21.1701 7.05141 21.0501 6.84141 18.9401 5.42141ZM12.0001 15.2514C10.2101 15.2514 8.75008 13.7914 8.75008 12.0014C8.75008 10.2114 10.2101 8.75141 12.0001 8.75141C13.7901 8.75141 15.2501 10.2114 15.2501 12.0014C15.2501 13.7914 13.7901 15.2514 12.0001 15.2514Z"
                          fill="#292D32" />
                      </svg>
                      <span className="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 duration-200">
                        Users Management
                      </span>
                    </div>
                  </NavLink>
                </li>

              </ul>
            </div>
          </div>

          {/* Expand / collapse button
          <div className="pt-3 hidden lg:inline-flex justify-end mt-auto">
            <div className="px-3 py-2">
              <button onClick={() => setSidebarExpanded(!sidebarExpanded)}>
                <span className="sr-only">Expand / collapse sidebar</span>
                <svg className="w-6 h-6 fill-current sidebar-expanded:rotate-180" viewBox="0 0 24 24">
                  <path className="text-slate-400" d="M19.586 11l-5-5L16 4.586 23.414 12 16 19.414 14.586 18l5-5H7v-2z" />
                  <path className="text-slate-600" d="M3 23H1V1h2z" />
                </svg>
              </button>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
