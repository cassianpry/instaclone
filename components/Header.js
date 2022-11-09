import Image from 'next/image';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

export default function Header() {
  return (
    <div className="flex items-center justify-between max-w-7xl ">
      {/* Left */}
      <div className="h-24 w-24 relative hidden lg:inline-grid">
        <Image
          className="object-contain"
          src="/images/instaclone-logo.png"
          alt="logo"
          fill
        />
      </div>
      <div className="h-24 w-10 relative lg:hidden">
        <Image
          className="object-contain"
          src="/images/instagram-transparent.png"
          alt="logo"
          fill
        />
      </div>
      {/* Middle */}
      <div className="relative mt-1">
        <div className="absolute top-2 left-2">
          <MagnifyingGlassIcon className="h-5 text-gray-500" />
        </div>
        <input
          className="bg-gray-50 pl-10 border-gray-500 text-sm rounded-md focus:ring-black focus:border-black"
          type="text"
          placeholder="Buscar..."
        />
      </div>

      {/* Right */}
      <h1>Right side</h1>
    </div>
  );
}
