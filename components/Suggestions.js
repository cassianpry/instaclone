import minifaker from 'minifaker';
import 'minifaker/locales/en';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Suggestions() {
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const suggestions = minifaker.array(5, (i) => ({
      id: i,
      username: minifaker.username({ locale: 'en' }),
      jobTitle: minifaker.jobTitle(),
    }));
    setSuggestions(suggestions);
  }, []);
  return (
    <div className="mt-4 ml-10">
      <div className="flex justify-between mb-5 text-sm">
        <h3 className="font-bold text-gray-400">Sugestões</h3>
        <button className="text-gray-600 font-semibold">Ver todos</button>
      </div>
      {suggestions?.map((suggestion) => (
        <div
          className="flex items-center justify-between mt-3"
          key={suggestion.id}
        >
          <Image
            className="rounded-full border p-[1.5px] border-red-500 hover:scale-110 transition-transform duration-200 ease-out"
            src={`https://i.pravatar.cc/150?img=${Math.ceil(
              Math.random() * 70
            )}`}
            alt={suggestion.username}
            width={50}
            height={50}
          />
          <div className="flex-1 ml-4">
            <h2 className="font-semibold text-sm">{suggestion.username}</h2>
            <h3 className="text-sm text-gray-400 truncate w-[190px]">
              {suggestion.jobTitle}
            </h3>
          </div>
          <button className="text-blue-400 font-semibold">Seguir</button>
        </div>
      ))}
    </div>
  );
}
