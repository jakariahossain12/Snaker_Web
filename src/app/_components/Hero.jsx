import Link from "next/link";



export default function Hero() {

  
  return (
    <div className="p-10">
      {/* Hero Section */}
      <section
        className="relative md:h-[500px] flex flex-col items-center justify-center text-center rounded-2xl overflow-hidden"
        style={{
          backgroundImage:
            "url('https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/504bee92-1dd5-41b1-8c2b-19629cc9cd75.png')", // Replace with a nice snake background
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Gradient overlay for readability */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Text content */}
        <div className="relative z-10 px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg">
            Discover the World of Snakes
          </h1>
          <p className="mt-4 text-lg md:text-2xl text-gray-200">
            Learn, Explore, Protect
          </p>

          {/* Call to action button */}
          <div className="mt-6">
            <Link
              href="/snake"
              className="px-6 py-3 bg-[#5E936C] text-white font-semibold rounded-lg shadow-lg hover:bg-[#4c7a59] transition"
            >
              Explore Snakes
            </Link>
          </div>
        </div>
      </section>

      {/* Highlights */}
      
    </div>
  );
}
