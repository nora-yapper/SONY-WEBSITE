import Image from "next/image";

export function AboutWhoWeAreSection() {
  return (
    <section className="relative">
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            {/* Left column - Text */}
            <div className="flex-1">
              <h2 className="text-5xl md:text-6xl font-bold text-black mb-8 leading-tight">
                This Is Who
                <br />
                We Are
              </h2>
              <div className="space-y-6 text-gray-800">
                <p className="text-base leading-relaxed">
                  Competitive sports breed common ground. Athletes, coaches and
                  the people who support them come together for the love of a
                  sport or the thrill of a game. Not everyone wins.
                </p>
                <p className="text-base leading-relaxed">
                  Through Special Olympics New York, though, everyone is
                  included. Athletes with intellectual disabilities have the
                  opportunity to challenge themselves in fair and even
                  competition. Win or lose, they develop their own character,
                  make friends and find unknown wells of determination within
                  themselves.
                </p>
                <p className="text-base leading-relaxed">
                  If you're a fan of unity, acceptance, empowerment, dignity,
                  pride and fun, you're a fan of Special Olympics New York.
                  <br />
                  You're one of us.
                </p>
              </div>
            </div>

            {/* Right column - Image */}
            <div className="flex-1">
              <div className="relative w-full h-[400px] lg:h-[500px]">
                <Image
                  src="/placeholder.svg?height=500&width=700"
                  alt="Special Olympics volunteers and athletes in orange jackets"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-stretch gap-8">
            {/* Our Mission (left) */}
            <div className="flex-1 bg-primary text-white p-8 rounded-lg relative">
              <div className="max-w-3xl">
                <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Our Mission
                </h3>
                <p className="text-white text-lg leading-relaxed">
                  To provide year-round sports training and athletic competition
                  in a variety of Olympic-style sports for children and adults
                  with intellectual disabilities, giving them continuing
                  opportunities to develop physical fitness, demonstrate
                  courage, experience joy and participate in a sharing of gifts,
                  skills and friendship with their families, other Special
                  Olympics athletes and the community.
                </p>
              </div>
            </div>

            {/* Vertical separator (visible on large screens) */}
            <div className="hidden lg:flex items-center">
              <div className="h-full w-px bg-gray-200" />
            </div>

            {/* History (right) */}
            <div className="flex-1 bg-white p-8 rounded-lg relative">
              <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-5 pointer-events-none hidden md:block">
                <span className="text-[220px] font-bold text-gray-300 leading-none">
                  1970
                </span>
              </div>

              <div className="relative z-10 max-w-4xl">
                <h3 className="text-4xl md:text-5xl font-bold text-black mb-6">
                  History of Special
                  <br />
                  Olympics in New York
                </h3>
                <p className="text-gray-800 text-lg leading-relaxed">
                  Eunice Kennedy Shriver founded Special Olympics in 1968. Just
                  one year later, Dorothy Buehring Phillips inaugurated the
                  program in New York—and the state sent its first delegation of
                  athletes and coaches to the Northeast Regional Special
                  Olympics competition in Boston, Mass. Special Olympics New
                  York was incorporated in 1970 with Phillips as its first State
                  Director. In June 1970, Rochester hosted the first State
                  Summer Games. Today, Special Olympics New York is the largest
                  program in the United States and one of the largest in the
                  world.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
