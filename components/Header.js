import Image from 'next/image';
import { signIn, signOut, useSession } from 'next-auth/react';
import { useRecoilState } from 'recoil';
import { modalState } from '../atom/modalAtom';
import {
  MagnifyingGlassIcon,
  PlusCircleIcon,
  HomeIcon,
} from '@heroicons/react/24/outline';
import { useRouter } from 'next/router';

export default function Header() {
  const { data: session } = useSession();
  const [open, setOpen] = useRecoilState(modalState);
  const router = useRouter();

  return (
    <div className="shadow-sm border-b sticky top-0 bg-white z-30">
      <div className="flex items-center justify-between max-w-6xl mx-4 xl:mx-auto ">
        {/* Left */}

        <div className="h-25 w-25 hidden items-center lg:inline-grid p-7">
          <Image
            className="object-contain cursor-pointer"
            src="/images/instaclone-logo.png"
            alt="logo"
            width={150}
            height={150}
            onClick={() => router.push('/')}
          />
        </div>
        <div className="h-24 w-10 relative lg:hidden">
          <Image
            className="object-contain cursor-pointer"
            src="/images/instagram-transparent.png"
            alt="logo"
            fill
            sizes="(max-width: 96px) 100vw,33vw"
            onClick={() => router.push('/')}
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
          <HomeIcon
            className="cursor-pointer hidden md:inline-flex h-6 text-black hover:scale-125 transition-transform duration-200 ease-out"
            onClick={() => router.push('/')}
          />
          {session ? (
            <>
              <PlusCircleIcon
                className="h-6 cursor-pointer text-black hover:scale-125 transition-transform duration-200 ease-out"
                onClick={() => setOpen(true)}
              />

              <Image
                className="rounded-full cursor-pointer hover:scale-105 transition-transform duration-200"
                src={session.user.image}
                alt="user-image"
                width={40}
                height={40}
                onClick={signOut}
              />
            </>
          ) : (
            <button onClick={signIn}>Entrar</button>
          )}
        </div>
      </div>
    </div>
  );
}
