import Image from 'next/image';
import {
  MagnifyingGlassIcon,
  PlusCircleIcon,
  HomeIcon,
} from '@heroicons/react/24/outline';

export default function Header() {
  return (
    <div className="shadow-sm border-b sticky top-0 bg-white z-30">
      <div className="flex items-center justify-between max-w-6xl mx-4 xl:mx-auto ">
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
        <div className="flex space-x-4 items-center">
          <HomeIcon className="hidden md:inline-flex h-6 text-black hover:scale-125 transition-transform duration-200 ease-out" />

          <PlusCircleIcon className="h-6 text-black hover:scale-125 transition-transform duration-200 ease-out" />

          <Image
            className="hover:scale-105 transition-transform duration-200"
            src="/images/profile.svg"
            alt="user-image"
            width={40}
            height={40}
          />
        </div>
      </div>
    </div>
  );
}
