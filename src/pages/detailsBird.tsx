import { NavLink } from "react-router";
const DetailsBirds:React.FC = () => {
    return(
        <div className="Details">
            <div className=" 
             min-[360px]:flex-col min-[360px]:w-[70%] min-[360px]:gap-[30px] min-[360px]:ml-[50px] min-[360px]:mt-[40px]
            min-[393px]:flex-col min-[393px]:w-[70%] min-[393px]:gap-[30px] min-[393px]:ml-[50px] min-[393px]:mt-[40px]
            min-[768px]:gap-[10px] w-[80%] min-[768px]:justify-center min-[768px]:flex min-[768px]:ml-[70px]
            min-[1024px]:gap-[20px]
            flex text-[white] justify-center gap-[100px] mt-[70px]
            ">
                <div className="bg-[#242121] p-[25px] rounded-[12px] border-[1px] border-[#02620A]">ငှက်အမျိုးပေါင်း(မျိုးစိတ်ပေါင်း) ၈၆၀၀ကျော်</div>
                <div className="bg-[#242121] p-[25px] rounded-[12px] border-[1px] border-[#02620A]">မျိုးစု ၁၆၀၀-ခု</div>
                <div className="bg-[#242121] p-[25px] rounded-[12px] border-[1px] border-[#02620A]">မျိုးရင်း ၁၅၅-ခု</div>
                <div className="bg-[#242121] p-[25px] rounded-[12px] border-[1px] border-[#02620A]">မျိုးစဉ် ၂၇-ခု</div>
            </div>

              <div className="
              min-[360px]:mt-[30px]
              min-[393px]:mt-[30px]
              flex justify-center gap-[70px] mt-[80px]">
                <div><NavLink to={'https://my.m.wikipedia.org/wiki/%E1%80%84%E1%80%BE%E1%80%80%E1%80%BA' } target="_blank" className="
                 min-[360px]:text-[2.3vw]
                min-[393px]:text-[2.3vw]
                min-[768px]:text-[1.5vw]
                min-[1024px]:text-[1.2vw]
                text-[#7AB818] text-[1vw]  p-[10px] hover:text-[yellow] transition-all duration-300 underline underline-offset-8 decoration-1">
                Wikipedia</NavLink></div>
                
                <div className=" "><NavLink to={'/observe'} className='
                        min-[360px]:text-[2.3vw]
                        min-[393px]:text-[2.3vw]
                       min-[768px]:text-[1.5vw]
                       min-[1024px]:text-[1.2vw]
                text-[#7AB818] text-[1vw]  p-[10px]  hover:text-[yellow] transition-all duration-300 underline underline-offset-8  decoration-1'>let's Observe The Birds</NavLink></div>

              </div>
        </div>
    );
};
export default DetailsBirds;