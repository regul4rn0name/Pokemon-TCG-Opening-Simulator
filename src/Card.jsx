import { forwardRef } from "react";
import Clicked from "./Clicked";
import { ref } from "process";

const Card = forwardRef(()=>{
    return(
        <div className='flip-container perspective-[1000px] flex items-center justify-center' >
        <div className='flipper absolute w-[63.5mm] h-[88mm] transform-3d duration-600 ease-in-out' ref={ref} onClick={Clicked}>
        <div className="front bg-[url('./assets/back.png')] bg-cover flex w-full h-full absolute backface-hidden justify-center items-center rounded-2xl">
        </div>

          <div className='back bg-black flex w-full h-full absolute backface-hidden justify-center items-center bg-[100% 100%] rounded-2xl' style={{"transform":"rotateY(180deg)"}}>

          </div>

        </div>

      </div>
    );
});

export default Card;