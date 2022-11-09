import Image from 'next/image';

export default function Header() {
  return (
    <div>
      {/* Left */}
      <div className="flex items-center justify-between max-w-7xl ">
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
        <h1>Right side</h1>
      </div>
      {/* Middle */}
      {/* Right */}
    </div>
  );
}
