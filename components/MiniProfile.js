import { signOut, useSession } from 'next-auth/react';
import Image from 'next/image';

export default function MiniProfile() {
  const { data: session } = useSession();
  console.log(session);
  return (
    <div className="flex items-center justify-between mt-14 ml-10">
      <Image
        className="rounded-full border p-[2px]"
        src={session?.user.image}
        alt="user-image"
        width={50}
        height={50}
      />
      <div className="flex-1 ml-4">
        <h2 className="font-bold">{session?.user.name}</h2>
        <h3 className="text-sm text-gray-400">Bem-vindo ao Instaclone</h3>
      </div>
      <button
        className="font-semibold text-blue-400 text-sm hover:text-blue-600 hover:scale-105 transition-transform duration-200 ease-out"
        onClick={signOut}
      >
        Sair
      </button>
    </div>
  );
}
