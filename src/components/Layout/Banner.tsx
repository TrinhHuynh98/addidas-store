import { useState } from "react";
import { data } from "../../utils";
import { GrPrevious, GrNext } from "react-icons/gr";
import { BsDot } from "react-icons/bs";

export const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    const isLastSlide = currentIndex === data.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(isLastSlide);
  };

  const handlePrevious = () => {
    const isFirstSlide =
      currentIndex === 0 ? data.length - 1 : currentIndex - 1;
    setCurrentIndex(isFirstSlide);
  };
  return (
    <>
      <div className="w-full py-3 items-center justify-center px-5 group">
        <div
          style={{
            backgroundImage: `url("${data[currentIndex].url}")`,
            maxWidth: "1800px",
            height: "700px",
          }}
          className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
        ></div>
        {/* previous button  */}
        <div className="ml-5 hidden group-hover:block  absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 p-2 rounded-full bg-black/20 cursor-pointer hover:bg-black/50">
          <GrPrevious color="white" size={30} onClick={handlePrevious} />
        </div>

        {/* next button  */}
        <div className="mr-5 hidden group-hover:block text-white absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 p-2 rounded-full bg-black/20  cursor-pointer hover:bg-black/50">
          <GrNext size={30} onClick={handleNext} />
        </div>
        <div className="flex mt-4 justify-center py-2">
          {data.map((item, index) => (
            <div key={index} onClick={() => setCurrentIndex(index)}>
              <BsDot className="curson-pointer text-3xl shodow-lg" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

// export default Banner;
