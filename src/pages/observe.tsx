import { useEffect ,useState} from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router";
const url = 'http://localhost:3000/Tbl_Bird';
interface Datatype {
    id:number;
    BirdMyanmarName:string;
    BirdEnglishName:string;
    Description:string;
    ImagePath:string;
    Id:number;
};
const Observe:React.FC = () => {
    const InfoNavigate = useNavigate();
    const Navigate = useNavigate()
    const [data,setData] = useState<Datatype[]| null >(null);
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState (null);
    useEffect(()=>{
        fetch(url).then((response)=>{
            if(!response.ok){
                throw new Error (` ${response.status} ${response.statusText}`)
            }
             return response.json()}).then((d)=>{setData(d)}).catch((err)=>{setError(err.message)}).finally(()=>{setLoading(false)})
       },[]);
    return (
        <>

<div>
        {loading && <div className="flex justify-center items-center gap-[10px]  pt-[30px]" >
            <h1 className="text-[white] text-[1.2vw]">Flying......</h1>
            <motion.img 

        animate={{ rotate:360}}
        transition={{ duration: 4,repeat:Infinity,ease:"linear"}}
            src="src/assets/kisspng-quotation-feather-wall-decal-saying-painting-5cdcee9c09f646.2834597015579828760408.png" className="w-[90px]"/>
            </div>}
            </div>

            {error && <div className="mt-[300px]">
             <div className="flex justify-center items-center gap-[30px]">
                <h1 className="text-[1.2vw] text-[#EE4B47]">{error}</h1>
                <img src="src/assets/transparent-love-symbol-red-feather-symbol-of-love-passion-luck654f7c11b7dfd8.6927837616997079217532.png" alt='bird feather photo ' className="w-[40px]"/>
                </div>
                <h2 onClick={()=> Navigate('/') } className="cursor-pointer text-[1.1vw] text-yellow-200 flex justify-center hover:text-yellow-300 transition duration-[0.5s] ease-in-out">Go To Home</h2>
                </div>
                }
        
        <div 
        className="Observe-parent flex justify-center items-center bg-[#2A2C27] overflow-hidden">
            
        <motion.div 
           initial={{ opacity: 0, scale:0 ,y:1000}}
           animate={{ opacity: 1, scale:1,y:0}}
           transition={{ duration: 0.6}}
        className="observe-con grid grid-cols-5  grid-rows-4 gap-[20px] p-[50px]  overflow-hidden
        min-[360px]:grid min-[360px]:grid-cols-1 min-[360px]:grid-rows-7 
        min-[393px]:grid min-[393px]:grid-cols-1 min-[393px]:grid-rows-7 
        min-[768px]:grid min-[768px]:grid-cols-2 min-[768px]:grid-rows-7 
        min-[1024px]:grid min-[1024px]:grid-cols-2 min-[1024px]:grid-rows-7
        min-[1280px]:grid min-[1280px]:grid-cols-3 min-[1280px]:grid-rows-7
        min-[1366px]:grid min-[1366px]:grid-cols-3 min-[1366px]:grid-rows-7
        min-[1440px]:grid min-[1440px]:grid-cols-3 min-[1440px]:grid-rows-7
        min-[2304px]:mt-[50px]:grid min-[2304px]:grid-cols-5 min-[2304px]:grid-rows-4
        min-[2560px]:mt-[60px]
        min-[3200px]:mt-[100px]
        min-[3840px]:mt-[250px]
        ">
                 {data && data.map((d)=>{return (
                    <div
                    onClick={()=> InfoNavigate(`/observe/${d.id}`)}
                     key={d.Id} className="
                           min-[360px]:w-[250px] min-[360px]:h-[280px]
                           min-[393px]:w-[250px] min-[393px]:h-[280px]
                           min-[768px]:w-[250px] min-[768px]:h-[280px]
                     Observe-card-container w-[350px] h-[320px] bg-[#cac6c6] rounded-[7px] overflow-hidden cursor-pointer
               
                     ">
                                     <div className="
                                     min-[360px]:w-[250px] min-[360px]:h-[200px]
                                     min-[393px]:w-[250px] min-[393px]:h-[200px]
                                     min-[768px]:w-[250px] min-[768px]:h-[200px]
                                     img-con w-[350px] h-[250px] overflow-hidden ">
                                        <img src={`/src/${d.ImagePath}`} className=" w-[350px] h-[250px]  hover:scale-[1.3] transition duration-[0.3s] ease-in-out p-[5px]" />
                                     </div>
                                     <div className="img-parent flex justify-center items-center pt-[20px] overflow-hidden">
                                     <div className="
                                     min-[393px]:w-[80%] 
                                     Bird-name-con bg-[#2A2C27] text-[white] pl-[10px] pr-[10px] pt-[5px] pb-[5px] rounded-[7px]">
                                        <div className="flex justify-center items-center text-center gap-[10px]  whitespace-nowrap overflow-hidden">
                                            <h1>{d.BirdMyanmarName}</h1>
                                            <h1>{d.BirdEnglishName}</h1>
                                        </div>
                                        </div>
                                     </div>
                   </div>
                 ) })}
        </motion.div>
        </div>
        </>
    );
};
export default Observe;