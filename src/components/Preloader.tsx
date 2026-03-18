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
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900">
      <div className="text-center">
        <div className="mb-8 flex justify-center">
          <div className="relative h-32 w-56 bg-black rounded-lg flex items-center justify-center shadow-2xl">
            <img
              src="/btronic-logo.png"
              alt="B-TRONIC AUTO"
              className="h-24 w-auto object-contain"
            />
          </div>
        </div>
        <p className="text-white text-lg font-semibold tracking-wider">Chargement...</p>
        <p className="text-gray-400 text-sm mt-2">B-TRONIC AUTO</p>
      </div>
    </div>
  );
}
