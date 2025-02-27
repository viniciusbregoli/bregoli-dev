'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const navigation = [
  { name: 'Home', href: '/' },
  {
    name: 'About me',
    href: '/about',
  },
  {
    name: 'Projects',
    href: '/projects',
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function Header() {
  const router = usePathname();
  return (
    <div>
      <nav className="flex flex-row items-center h-20 bg-gray-800">
        {/* Navigation  */}
        <div className="flex w-full ml-24">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              aria-current={router === item.href ? 'page' : undefined}
              className={classNames(
                router === item.href
                  ? 'bg-gray-900 text-white'
                  : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                'rounded-md px-3 py-2 text-xl font-medium',
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>
        {/* Socials */}
        <div className="flex justify-end w-full mr-16">
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/viniciusbregoli"
            className="text-gray-300 hover:bg-gray-700 hover:text-white
                        rounded-md px-3 py-2 text-xl font-medium"
          >
            <FaGithub size={30} />
          </a>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/viniciusbregoli/"
            className="text-gray-300 hover:bg-gray-700 hover:text-white
                        rounded-md px-3 py-2 text-xl font-medium"
          >
            <FaLinkedin size={30} />
          </a>
        </div>
      </nav>
    </div>
  );
}
