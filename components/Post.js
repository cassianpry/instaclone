import Image from 'next/image';
import { useSession } from 'next-auth/react';
import Moment from 'react-moment';
import 'moment-timezone';
import {
  BookmarkIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  EllipsisHorizontalIcon,
  FaceSmileIcon,
  HeartIcon,
} from '@heroicons/react/24/outline';
import { useEffect, useState } from 'react';
import {
  addDoc,
  collection,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
} from 'firebase/firestore';
import { db } from '../firebase';

export default function Post({ id, username, userImg, img, caption }) {
  const { data: session } = useSession();
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);

  const sendComment = async (e) => {
    e.preventDefault();
    const commentToSend = comment;
    setComment('');
    await addDoc(collection(db, 'posts', id, 'comments'), {
      comment: commentToSend,
      username: session.user.name,
      userImage: session.user.image,
      timestamp: serverTimestamp(),
    });
  };

  useEffect(() => {
    const unsubscribe = onSnapshot(
      query(
        collection(db, 'posts', id, 'comments'),
        orderBy('timestamp', 'desc')
      ),
      (snapshot) => {
        setComments(snapshot.docs);
      }
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [db, id]);

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
        className="object-cover w-full rounded-lg p-1"
        src={img}
        alt=""
        width={1000}
        height={1000}
      />

      {/* Post Buttons */}
      {session && (
        <div className="flex justify-between px-4 pt-4">
          <div className=" flex space-x-4">
            <HeartIcon className="btn" />
            <ChatBubbleOvalLeftEllipsisIcon className="btn" />
          </div>
          <BookmarkIcon className="btn" />
        </div>
      )}

      {/* Post Comments */}

      <p className="p-5 truncate">
        <span className="font-bold mr-2">{username}</span>
        {caption}
      </p>
      {comments.length > 0 && (
        <div className="mx-10 max-h-24 overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-300 overflow-y-scroll scrollbar-thumb-rounded-full scrollbar-track-rounded-full">
          {comments.map((comment) => (
            <div className="flex items-center space-x-2 mb-2" key={comment.id}>
              <Image
                className="rounded-full object-cover"
                src={comment.data().userImage}
                alt="user"
                width={30}
                height={30}
              />
              <p className="font-semibold">{comment.data().username}</p>
              <p className="flex-1 truncate">{comment.data().comment}</p>
              <Moment fromNow>{comment.data().timestamp?.toDate()}</Moment>
            </div>
          ))}
        </div>
      )}

      {/* Post Inputbox */}
      {session && (
        <form className="flex items-center p-4">
          <FaceSmileIcon className="btn" />
          <input
            className="border-none flex-1 focus:ring-0"
            type="text"
            placeholder="Comente algo aqui..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <button
            type="submit"
            className="text-blue-400 font-bold disabled:text-blue-200"
            disabled={!comment.trim()}
            onClick={sendComment}
          >
            Enviar
          </button>
        </form>
      )}
    </div>
  );
}
