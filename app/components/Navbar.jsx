'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import Logo from './logo';

export default function Navbar() {
  const pathname = usePathname();
  const [currentLang, setCurrentLang] = useState('en');
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const lang = pathname.split('/')[1];
    setCurrentLang(lang);
  }, [pathname]);

  const languages = [
    { code: 'en', name: 'English', flag: '/assets/images/usa.png' },
    { code: 'bn', name: 'Bangla', flag: '/assets/images/bd.png' },
  ];

  const handleLangChange = (lang) => {
    const newPath = `/${lang}` + pathname.substring(3);
    window.location.href = newPath;
  };

  return (
    <nav className="py-4 md:py-6 border-b">
      <div className="container mx-auto flex items-center justify-between gap-x-6">
        <Logo />

        <div className="flex gap-4 items-center">
          {/* Language Dropdown */}
          <div className="relative">
            <button
              className="flex items-center gap-2"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              <Image
                className="max-w-8"
                src={languages.find((l) => l.code === currentLang)?.flag}
                alt={`${languages.find((l) => l.code === currentLang)?.name} flag`}
                width={32}
                height={32}
              />
              {languages.find((l) => l.code === currentLang)?.name}
            </button>

            {/* dropdown */}
            {dropdownOpen && (
              <div className="absolute right-0 top-full mt-2 w-40 rounded-md bg-white p-2 z-10 shadow-lg">
                {languages.map((lang) => (
                  <li
                    key={lang.code}
                    className="flex items-center gap-2 p-2 rounded-md cursor-pointer hover:bg-gray-100"
                    onClick={() => handleLangChange(lang.code)}
                  >
                    <Image
                      className="max-w-8"
                      src={lang.flag}
                      alt={`${lang.name} flag`}
                      width={32}
                      height={32}
                    />
                    {lang.name}
                  </li>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
