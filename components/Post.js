import Image from 'next/image';
import { EllipsisHorizontalIcon } from '@heroicons/react/24/outline';

export default function Post({ id, username, userImg, img, caption }) {
  return (
    <div className="bg-white my-7 border rounded-md">
      {/* Post Header */}

      <div className="flex items-center p-5">
        <Image
          className="rounded-full object-cover border p-1 mr-3 hover:scale-110 transition-transform duration-200 ease-out"
          src={userImg}
          alt={username}
          width={50}
          height={50}
        />
        <p className="font-bold flex-1 ">{username}</p>
        <EllipsisHorizontalIcon className="h-5" />
      </div>

      {/* Post Image */}

      <Image
        className="object-cover w-full rounded-md"
        src={img}
        alt=""
        width={1024}
        height={1024}
      />
    </div>
  );
}
