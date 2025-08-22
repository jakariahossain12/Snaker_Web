

import dbConnect from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import Image from "next/image";

export default async function SnakeDetails({params}) {

  const { snakeId } = await params;
  

  const snake = await dbConnect('snake').findOne({ _id: new ObjectId(snakeId) });


  

  return (
    <div className="min-h-screen bg-base-200 py-10 px-4 md:px-20 z-0 ">
      <div className="max-w-4xl mx-auto bg-base-100 shadow-lg rounded-2xl overflow-hidden">
        {/* Image Section */}
        <div className="relative h-72 md:h-96">
          <img
            src={snake.image}
            alt={snake.name}
            fill
            className="object-cover w-full"
          />
          <div className="absolute bottom-0 left-0 bg-black/50 text-white px-4 py-2 text-2xl font-bold">
            {snake.name}
          </div>
        </div>

        {/* Details Section */}
        <div className="p-6 space-y-4">
          <h2 className="text-2xl md:mt-30 font-bold text-secondary  ">
            {snake.species}
          </h2>
          <p className="text-base text-white">{snake.facts}</p>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-primary/10 p-4 rounded-lg">
              <h3 className="font-semibold text-secondary">Habitat</h3>
              <p>{snake.habitat}</p>
            </div>
            <div className="bg-primary/10 p-4 rounded-lg">
              <h3 className="font-semibold text-secondary">Diet</h3>
              <p>{snake.diet}</p>
            </div>
            <div className="bg-primary/10 p-4 rounded-lg">
              <h3 className="font-semibold text-chart-5">Danger Level</h3>
              <p className={`${snake.dangerLevel === "Venomous"?'text-red-600':''}`}>
                {snake.dangerLevel}
              </p>
            </div>
          </div>

          {/* Back Button */}
          {/* <div className="pt-4">
            <button
              onClick={() => window.history.back()}
              className="btn bg-primary border-none text-white"
            >
              ← Back
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
}
