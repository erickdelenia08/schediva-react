import React from 'react';
function KuliahCard() {


  return (
    <div className="flex flex-col bg-white dark:bg-slate-800 shadow-lg rounded-lg border border-slate-200 dark:border-slate-700">
      <header className="px-5 py-4 border-b border-slate-100 dark:border-slate-700">
        <h2 className="font-semibold text-slate-800 dark:text-slate-100">Agenda Perkuliahan</h2>
      </header>
      <div className='px-5 py-4 flex h-60'>
        <span className='text-base'>Kuliah Struktur Data</span>
      </div>
    </div>
  );
}

export default KuliahCard;
