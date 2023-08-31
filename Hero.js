import React, { useState } from "react";
const Hero = () => {
    const [del,setDel] = useState(false)
      const handeDel = () => {
        setDel(!del);
      };
  return (
    <>
      <div className="w-full h-screen">
        <img
          src="https://media.nomadicmatt.com/2023/tropicalislandsfeature.jpg"
          className="top-0 left-0 w-full h-screen object-cover"
        />
        <div className="bg-black/30 absolute top-0 left-0 w-full h-screen">
          <div className="md:left-[10%] max-w-[1100px] m-auto absolute p-4 mt-11 text-white">
            <h1>hello</h1>
            <h1 className="font-bold  text-sxl md:text-5xl drop-shadow-2xl text-white">
              Dalain ergiin aylal
            </h1>
            <p className="max-w-[600px] drop-shadow-2xl py-2 text-rl text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
              voluptatum harum voluptatem, consectetur alias quidem minus nam et
              quo eum, nostrum perferendis reiciendis possimus cumque tempora ad
              inventore.
            </p>
              <button className="bg-white text-black" onClick={handeDel}>
                delgerengui
              </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
