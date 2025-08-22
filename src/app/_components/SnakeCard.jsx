import Link from 'next/link';
import React from 'react'

export default function SnakeCard({snake}) {
  return (
    <div className="rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800">
      <img
        src={snake?.image}
        alt=""
        className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500"
      />
      <div className="flex flex-col justify-between p-6 space-y-8">
        <div className="space-y-2">
          <h2 className="text-3xl text-secondary font-semibold tracking-wide">
            {snake?.name}
          </h2>
          <p className="dark:text-gray-800 line-clamp-2">{snake?.facts}</p>

          <p className="font-bold text-chart-5">
            Danger level <span>{snake?.dangerLevel}</span>
          </p>
        </div>
        <Link
          href={`snake/${snake?._id}`}
          type="button"
          className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-secondary dark:text-gray-50"
        >
          Read more
        </Link>
      </div>
    </div>
  );
}
