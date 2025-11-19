import Image from "next/image"

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
                  Competitive sports breed common ground. Athletes, coaches and the people who support them come
                  together for the love of a sport or the thrill of a game. Not everyone wins.
                </p>
                <p className="text-base leading-relaxed">
                  Through Special Olympics New York, though, everyone is included. Athletes with intellectual
                  disabilities have the opportunity to challenge themselves in fair and even competition. Win or lose,
                  they develop their own character, make friends and find unknown wells of determination within
                  themselves.
                </p>
                <p className="text-base leading-relaxed">
                  If you're a fan of unity, acceptance, empowerment, dignity, pride and fun, you're a fan of Special
                  Olympics New York.
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

      <div className="bg-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-4">
            <div className="h-0.5 w-16 bg-primary" />
            <h3 className="text-xl font-bold text-black uppercase tracking-wider">MISSION</h3>
            <div className="h-0.5 w-16 bg-primary" />
          </div>
        </div>
      </div>

      <div className="relative bg-primary py-20 overflow-hidden">
        {/* Diagonal accent lines */}
        <div
          className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white/10 to-transparent"
          style={{ transform: "skewX(-15deg)", transformOrigin: "top left" }}
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white/10 to-transparent"
          style={{ transform: "skewX(15deg)", transformOrigin: "top right" }}
        />

        {/* Background logo watermark */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-20 w-[600px] h-[600px]">
          <div className="text-[400px] font-bold text-white/20 leading-none">SO</div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Mission</h3>
            <p className="text-white text-lg leading-relaxed">
              To provide year-round sports training and athletic competition in a variety of Olympic-style sports for
              children and adults with intellectual disabilities, giving them continuing opportunities to develop
              physical fitness, demonstrate courage, experience joy and participate in a sharing of gifts, skills and
              friendship with their families, other Special Olympics athletes and the community.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="relative">
            {/* Large 1970 watermark */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-5 pointer-events-none">
              <span className="text-[280px] font-bold text-gray-300 leading-none">1970</span>
            </div>

            <div className="relative z-10 max-w-4xl">
              <h3 className="text-4xl md:text-5xl font-bold text-black mb-8">
                History of Special
                <br />
                Olympics in New York
              </h3>
              <p className="text-gray-800 text-lg leading-relaxed">
                Eunice Kennedy Shriver founded Special Olympics in 1968. Just one year later, Dorothy Buehring Phillips
                inaugurated the program in New York—and the state sent its first delegation of athletes and coaches to
                the Northeast Regional Special Olympics competition in Boston, Mass. Special Olympics New York was
                incorporated in 1970 with Phillips as its first State Director. In June 1970, Rochester hosted the first
                State Summer Games. Today, Special Olympics New York is the largest program in the United States and one
                of the largest in the world.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
