import dbConnect from "@/lib/dbConnect";
import SnakeCard from "./SnakeCard";


export default async function  HighlightSnake() {
  const snakes = await dbConnect('snake').find({}).limit(8).toArray();
 
  return (
    <div className="w-11/12 mx-auto py-11 grid grid-cols-4 gap-3 justify-center items-center">
      

      {snakes.map((snake) => (
        <SnakeCard key={snake._id} snake={snake} />
      ))}

    </div>
  );
}
