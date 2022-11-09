import Image from 'next/image';

export default function Story({ img, username }) {
  return (
    <div className="text-center">
      <Image
        className="rounded-full p-[1.5px] border-2 border-red-500 hover:scale-110 transition-transform duration-200 ease-out"
        src={img}
        alt={username}
        width={100}
        height={100}
      />
      <p className="text-xs w-14 truncate ">{username}</p>
    </div>
  );
}
