import Image from 'next/image';
import React from 'react'

interface AtomData {
  data: string
}

const fecthingData = async () => {
  const data = await fetch(
    "https://api.nasa.gov/planetary/apod?api_key=LHaM9u7qJHfPVtHq8oKxDyBIbPiBujMgzB0b2m39"
  );

  return data.json()
}

const HomeAtom =  async () => {
  function reverseString(str: string) {
    return str.split("-").reverse().join("/");
  }

  const atom = await fecthingData()
  return (
    <div className="container mx-auto">
      <h1 className="text-rose-500 text-4xl p-1 mt-4 mb-7 font-semibold text-center">
        Astronomy Picture of the Day
      </h1>
      <div className="flex flex-col items-center">
        <h2 className="text-cyan-600 text-2xl mb-4">{atom.title}</h2>
        <div className="flex flex-col xl:flex-row">
          <div className="flex flex-col">
            <Image
              className="rounded-xl w-full p-1"
              src={atom.url}
              alt={atom.title}
              width={500}
              height={500}
            />
            <p className="text-sm text-center xl:text-right">{reverseString(atom.date)}</p>
          </div>
          <div className='flex flex-col'>
            <p className="flex items-center p-8 xl:w-[800px] text-lg">
              {atom.explanation}
            </p>
            <p
              className="text-xl text-center xl:text-left p-8 text-yellow-600 font-semibold
          mt-3"
            >
              Open full size image:{" "}
              <a
                target="_blank"
                className="text-red-600 hover:bg-gray-900 pt-1 pb-1 pl-4 pr-4 font-semibold border-4 border-red-600 rounded-md ml-2"
                href={atom.hdurl}
              >
                Link
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeAtom