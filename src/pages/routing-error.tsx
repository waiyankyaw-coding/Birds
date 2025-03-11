import { useNavigate } from "react-router";

const ErrorRoute:React.FC = ()=>{
    const Navigate = useNavigate();
    return(
         <>
        <div className="flex justify-center items-center mt-[200px]">
            <div className="text-[1.2vw] text-[#EE4B47]">404 Not Found (: </div>
        </div>
        <div >
        <div onClick={()=> Navigate('/')} className="cursor-pointer text-[1.1vw] text-yellow-200 flex justify-center hover:text-yellow-300 transition duration-[0.5s] ease-in-out">Go To Home</div>
        </div>
        </>
     
    );
};
export default ErrorRoute;