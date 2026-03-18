import { useEffect, useState } from 'react';

export default function Preloader() {
  const [loading, setLoading] = useState(() => {
    if (typeof window === 'undefined') return true;
    const alreadySeen = window.sessionStorage.getItem('btronic_preloader_seen');
    return !alreadySeen;
  });

  useEffect(() => {
    if (!loading) return;

    const timer = setTimeout(() => {
      window.sessionStorage.setItem('btronic_preloader_seen', '1');
      setLoading(false);
    }, 450);

    return () => clearTimeout(timer);
  }, [loading]);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900">
      <div className="text-center px-6">
        <div className="mb-7 flex justify-center">
          <div className="relative h-16 w-16">
            <div className="absolute inset-0 rounded-full border-4 border-gray-700" />
            <div className="absolute inset-0 rounded-full border-4 border-red-600 border-t-transparent animate-spin" />
            <div className="absolute inset-3 rounded-full bg-gray-800 shadow-inner" />
          </div>
        </div>

        <div className="mx-auto max-w-sm">
          <p className="text-white text-lg font-semibold tracking-wide">Chargement…</p>
          <p className="text-gray-400 text-sm mt-2">
            Service rapide • Qualité • Transparence
          </p>

          <div className="mt-5 h-1.5 w-64 max-w-full mx-auto rounded-full bg-gray-800 overflow-hidden">
            <div className="h-full w-1/2 bg-red-600 rounded-full animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  );
}
