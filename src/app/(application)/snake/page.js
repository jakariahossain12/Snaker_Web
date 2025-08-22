import SnakeCard from '@/app/_components/SnakeCard'
import dbConnect from '@/lib/dbConnect'

export default async function  page() {
  const snakes = await dbConnect('snake').find({}).toArray();

  
 
  return (
    <div className="w-11/12 mx-auto py-11 grid grid-cols-4 gap-3 justify-center items-center">
      

      {snakes.map((snake) => (
        <SnakeCard key={snake._id} snake={snake} />
      ))}

    </div>
  );
}
