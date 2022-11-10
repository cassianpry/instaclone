import { getProviders, signIn } from 'next-auth/react';
import Image from 'next/image';
import Header from '../../components/Header';

export default function signin({ providers }) {
  return (
    <>
      <Header />
      <div className="flex justify-center space-x-7 mt-20">
        <Image
          className="hidden object-cover md:inline-flex md-w48"
          src="/images/Content-Management-1024x696.png"
          alt="content"
          width={500}
          height={300}
        />
        <div className="">
          {Object.values(providers).map((provider) => (
            <div className="flex flex-col items-center" key={provider.name}>
              <Image
                className="w-32 object-cover"
                src="/images/instagram-transparent.png"
                alt="instagram icon"
                width={200}
                height={200}
              />
              <Image
                className="w-32 object-cover my-4"
                src="/images/instaclone-logo.png"
                alt="instagram name"
                width={200}
                height={200}
              />
              <p className="text-sm italic mb-10 text-center">
                Este site foi criado para fins de aprendizado.
              </p>
              <button
                className="bg-red-400 rounded-lg p-4 text-white hover:bg-red-500"
                onClick={() => signIn(provider.id, { callbackUrl: '/' })}
              >
                Entrar com sua conta do {provider.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}
