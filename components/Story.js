import Image from 'next/image';

export default function Story({ img, username }) {
  return (
    <div>
      <Image src={img} alt={username} width={100} height={100} />
      <p>{username}</p>
    </div>
  );
}
