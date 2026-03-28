import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import useRooms from "../../hooks/useRooms"; // ✅ HOOK

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] },
  },
};

const RoomsFeed = () => {
  const { rooms, loading, error } = useRooms(); // ✅ DATA FROM SHEET

  // ✅ LOADING
  if (loading) {
    return (
      <section className="py-24 text-center text-[#666]">
        Loading rooms...
      </section>
    );
  }

  // ✅ ERROR
  if (error) {
    return (
      <section className="py-24 text-center text-red-500">
        {error}
      </section>
    );
  }

  return (
    <section className="bg-[#FAF9F6] py-24 md:py-36 selection:bg-[#c49a6c] selection:text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col gap-24 md:gap-40">
        
        {rooms.map((room, index) => {
          const isEven = index % 2 === 0;

          return (
            <React.Fragment key={`${room.slug || room.name}-${index}`}>
              
              <motion.article
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="group"
              >
                <Link
                  to={`/rooms/${room.slug}`}
                  className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 lg:gap-24 items-center"
                >
                  
                  {/* IMAGE */}
                  <div 
                    className={`
                      w-full relative overflow-hidden bg-[#e9e5e0] 
                      order-1 ${isEven ? 'md:order-1' : 'md:order-2'} 
                      md:col-span-7 aspect-[4/3]
                    `}
                  >
                    <img
                      src={room.image || room.gallery?.[0]}
                      alt={room.name}
                      className="w-full h-full object-cover transition-transform duration-[2s] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-700" />
                  </div>

                  {/* TEXT */}
                  <div 
                    className={`
                      flex flex-col items-start
                      order-2 ${isEven ? 'md:order-2' : 'md:order-1'} 
                      md:col-span-5
                    `}
                  >
                    
                    <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif font-light text-[#1a1a1a] mb-5 tracking-tight group-hover:text-[#c49a6c] transition-colors duration-500 leading-tight">
                      {room.name}
                    </h3>

                    <p className="text-[#888] text-[14px] md:text-[15px] font-light leading-[1.8] tracking-wide mb-10 max-w-lg">
                      {room.shortDescription || room.description}
                    </p>

                    {/* META */}
                    <div className="flex flex-wrap items-start justify-between w-full border-t border-b border-[#c49a6c]/20 py-5 mb-10 gap-x-4 gap-y-6">
                      
                      {room.occupancy && (
                        <div className="flex flex-col gap-1">
                          <span className="text-[9px] uppercase tracking-[0.2em] text-[#888]">
                            Capacity
                          </span>
                          <span className="text-[13px] md:text-sm font-medium text-[#1a1a1a]">
                            {room.occupancy} Guests
                          </span>
                        </div>
                      )}

                      {room.size && (
                        <div className="flex flex-col gap-1">
                          <span className="text-[9px] uppercase tracking-[0.2em] text-[#888]">
                            Space
                          </span>
                          <span className="text-[13px] md:text-sm font-medium text-[#1a1a1a]">
                            {room.size} <span className="text-[10px] text-[#888]">sq ft</span>
                          </span>
                        </div>
                      )}

                      {room.highlights?.length > 0 && (
                        <div className="flex flex-col gap-1 md:ml-auto md:text-right w-full md:w-auto">
                          <span className="text-[9px] uppercase tracking-[0.2em] text-[#888]">
                            Signature Features
                          </span>
                          <span className="text-[12px] md:text-[13px] font-medium text-[#c49a6c] leading-snug">
                            {room.highlights.join(" • ")}
                          </span>
                        </div>
                      )}

                    </div>

                    {/* CTA */}
                    <div className="relative inline-flex items-center gap-3 text-[#1a1a1a] text-[10px] md:text-[11px] uppercase tracking-[0.25em] font-medium transition-colors duration-500 group-hover:text-[#c49a6c]">
                      Explore Suite
                      <span className="font-sans text-sm group-hover:translate-x-1 transition-transform duration-300">
                        →
                      </span>
                    </div>

                  </div>

                </Link>
              </motion.article>

              {/* MOBILE DIVIDER */}
              {index !== rooms.length - 1 && (
                <div className="md:hidden flex items-center justify-center gap-4 w-full opacity-60">
                  <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#c49a6c]/50" />
                  <div className="w-1.5 h-1.5 rotate-45 bg-[#c49a6c]/50" />
                  <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#c49a6c]/50" />
                </div>
              )}

            </React.Fragment>
          );
        })}

      </div>
    </section>
  );
};

export default RoomsFeed;