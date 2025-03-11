

import React from "react";
import { useTypewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import DetailsBirds from "./detailsBird";
const Lobby:React.FC = () => {
    const [text] = useTypewriter({
        words: ['Bird','ငှက်'],
        loop: 0,
        typeSpeed:400,
        delaySpeed:500,
      })
    return(
        <div className="Lobby bg-[#2A2C27]  h-[100vh]

      
        ">
          <div className="">
      
            <div className=" flex
            min-[360px]:flex min-[360px]:items-center min-[360px]:pt-[50px] min-[360px]:justify-center
            min-[393px]:flex min-[393px]:items-center min-[393px]:pt-[50px] min-[393px]:justify-center
            min-[768px]:pt-[100px]
            min-[1280px]:pt-[200px]
            min-[1440px]:pt-[200px]
            min-[2240px]:flex
            min-[2304px]:flex min-[2304px]:justify-center min-[2304px]:items-center
             min-[2560px]:flex  justify-center gap-[50px]  items-center pt-[300px]
             min-[3840px]:pt-[500px]
              ">
                <img src="src/assets/photo_2025-03-03_22-22-01.jpg" alt="bird photo" className="
                min-[360px]:w-[30%]
                min-[393px]:w-[30%]
                w-[11%] h-[5%] rounded-[12px] border-[1px] border-[black]"/ >
                <h2 className="
                min-[360px]:text-[5vw]
                min-[393px]:text-[5vw]
                text-[2.3vw] text-[white] font-semibold w-[100px] h-[50px]">{text}</h2>
            </div>
                 <div className="
              
                 def-of-bird flex  flex-col justify-center items-center">
                    <motion.div 
                          initial={{ opacity: 0, x:-500,scale:0 }}
                           animate={{ opacity: 1, x:0 ,scale:1}}
                           transition={{ duration: 1}}
                    className=" 
                    min-[360px]:text-[2.6vw]
                    min-[393px]:text-[2.5vw]
                    min-[768px]:text-[1.5vw]
                    min-[1024px]:text-[1.2vw]
                    qu text-[white] text-[1vw] pt-[50px]" >ငှက်ဆိုသည်မှာအမွှေးအတောင်နှင့်နှုတ်သီးပါရှိသောကျောရိုးရှိသွေးနွေးသတ္တဝါဖြစ်၏။</motion.div>
                    <motion.div
                           initial={{ opacity: 0, x:500,scale:0 }}
                           animate={{ opacity: 1, x:0 ,scale:1}}
                            transition={{ duration: 0.5}}
                    className="
                     min-[360px]:text-[2.6vw] min-[360px]:w-[80%]
                     min-[393px]:text-[2.5vw] min-[393px]:w-[80%]
                    min-[768px]:text-[1.5vw]
                    min-[1024px]:text-[1.2vw]
                    text-[white] text-[1vw] pt-[20px]">Birds are an animals with wings,feathers,and two legs.Most birds can fly.They are also warm-blooded and female birds lay eggs.</motion.div>
                 </div>

                 <DetailsBirds/>
         
         </div> 
        </div>
    );
}; 
export default Lobby;