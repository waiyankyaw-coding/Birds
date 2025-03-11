import { useEffect,useState } from "react";
import { useParams } from "react-router";
import { useNavigate } from "react-router";
import {motion} from 'framer-motion';
interface InfoType {
    id:number;
    BirdMyanmarName:string;
    BirdEnglishName:string;
    Description:string;
    ImagePath:string;
    Id:number;
};
const BirdsDes:React.FC = () => {
    const Navigate = useNavigate();
    const [info,setinfo] = useState<InfoType|null>(null);
    const [error,setError] = useState(null);
    const [loading,setLoading] = useState(true);
const {id}= useParams();
console.log(id)
useEffect(()=>{
        fetch(`http://localhost:3000/Tbl_Bird/${id}`).then((res)=>{
            if(!res.ok){
                throw new Error (`${res.statusText} ${res.status}`)
            }
            return res.json()
        }).then((des)=>{setinfo(des)}).catch((err)=>{setError(err.message)}).finally(()=>{setLoading(false)})
},[id])
    return(

        <motion.div 
        initial={{ opacity: 0, scale:0 ,y:1000}}
        animate={{ opacity: 1, scale:1,y:0}}
        transition={{ duration: 0.6}}
        className="
        min-[2240px]:mt-[300px]
        min-[2304px]:mt-[300px]
        min-[2560px]:mt-[300px] 
        min-[3200px]:mt-[400px]  
        "
        >
        <div>
        {loading && <div className="flex justify-center items-center gap-[10px]  pt-[30px]" >
            <h1 className="text-[white] text-[1.2vw]">Flying......</h1>
            <motion.img 

        animate={{ rotate:360}}
        transition={{ duration: 4,repeat:Infinity,ease:"linear"}}
            src="src/assets/kisspng-quotation-feather-wall-decal-saying-painting-5cdcee9c09f646.2834597015579828760408.png" className="w-[90px]"/>
            </div>}
            </div>
            {error && <div className="mt-[300px]
          
            ">
             <div className="flex justify-center items-center gap-[30px]">
                <h1 className="text-[1.2vw] text-[#EE4B47]">{error}</h1>
                <img src="src/assets/transparent-love-symbol-red-feather-symbol-of-love-passion-luck654f7c11b7dfd8.6927837616997079217532.png" alt='bird feather photo ' className="w-[40px]"/>
                </div>
                <h2 onClick={()=> Navigate('/') } className="cursor-pointer text-[1.1vw] text-yellow-200 flex justify-center hover:text-yellow-300 transition duration-[0.5s] ease-in-out">Go To Home</h2>
                </div>
                }
    
        { !error &&< div className="bird-des ">
            <div className="flex flex-col gap-[30px] justify-center items-center mt-[100px]">
            <div className="
            min-[360px]:w-[300px] min-[360px]:h-[250px]
            min-[393px]:w-[300px] min-[393px]:h-[250px]
            min-[768px]:w-[300px] min-[768px]:h-[250px]
            min-[1024px]:w-[300px] min-[1024px]:h-[250px]
            min-[1280px]:w-[300px] min-[1280px]:h-[250px]
            min-[1366px]:w-[300px] min-[1366px]:h-[250px]
            min-[1440px]:w-[300px] min-[1440px]:h-[250px]
            min-[2240px]:w-[500px]: min-[2240px]:h-[300px]
            min-[2304px]:w-[400px] min-[2304px]:h-[300px] bg-[white] 
            min-[3840px]:w-[600px] h-[500px]
            ">
                         <img src={`/src/${info?.ImagePath}`} className="w-[100%] h-[100%] border-[1px] border-[white] rounded-[10px]"/>
            </div>
            <div className="
            min-[360px]:text-[3.5vw]
            min-[393px]:text-[3.5vw]
            min-[768px]:text-[2vw]
            min-[1024px]:text-[2vw]
            text-[1.2vw] text-[white]">
                <h1>{info?.BirdMyanmarName}</h1>
                <h1 className="pt-[10px]">{info?.BirdEnglishName}</h1>
            </div>
            <div className="
            min-[360px]:w-[50%]
            min-[393px]:w-[50%]
            min-[768px]:w-[50%]
            min-[1024px]:w-[50%]
            min-[1280px]:w-[50%]
            min-[1366px]:w-[50%]
            min-[1440px]:w-[40%]
            min-[2240px]:w-[50%]
            min-[2304px]:w-[50%]
            min-[2560px]:w-[1400px]
            min-[3200px]:w-[60%]
            min-[3840px]:w-[70%]
            ">
                <p className=" text-[white]
                min-[360px]:text-[2.5vw] min-[360px]:leading-[30px]
                min-[393px]:text-[2.5vw] min-[393px]:leading-[30px]
                min-[768px]:text-[1.5vw]
                min-[2240px]:text-[white]
                min-[2304px]:text-[white] min-[2304px]:text-[1vw] min-[2304px]:leading-[50px]
                min-[2560px]: text-[0.9vw] leading-[45px]
                min-[3200px]:leading-[55px]
                min-[3840px]:leading-[60px]
                ">{info?.Description}</p>
            </div>

        <div onClick={()=> Navigate('/observe')} className="
        min-[360px]:text-[2.5vw]
        min-[393px]:text-[2.5vw]
        min-[768px]:text-[1.5vw]
        min-[1024px]:text-[1.2vw]
        cursor-pointer text-[0.9vw] text-yellow-200 flex justify-center hover:text-yellow-300 transition duration-[0.5s] ease-in-out">To See  The Others Birds</div>
            </div>
        </div>}
        </motion.div>
    );
};
export default BirdsDes;