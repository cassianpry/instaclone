import Image from 'next/image';
import {
  BookmarkIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  EllipsisHorizontalIcon,
  FaceSmileIcon,
  HeartIcon,
} from '@heroicons/react/24/outline';

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
        width={1000}
        height={1000}
      />

      {/* Post Buttons */}

      <div className="flex justify-between px-4 pt-4">
        <div className=" flex space-x-4">
          <HeartIcon className="btn" />
          <ChatBubbleOvalLeftEllipsisIcon className="btn" />
        </div>
        <BookmarkIcon className="btn" />
      </div>

      {/* Post Comments */}

      <p className="p-5 truncate">
        <span className="font-bold mr-2">{username}</span>
        {caption}
      </p>

      {/* Post Inputbox */}

      <form className="flex items-center p-4">
        <FaceSmileIcon className="btn" />
        <input
          className="border-none flex-1 focus:ring-0"
          type="text"
          placeholder="Comente algo aqui..."
        />
        <button className="text-blue-400 font-bold">Enviar</button>
      </form>
    </div>
  );
}