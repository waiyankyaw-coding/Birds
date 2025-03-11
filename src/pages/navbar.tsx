import { NavLink } from "react-router";
const Navbar:React.FC = () => {
    const Navlinks = ["HOME","OBSERVE THE BIRDS"];
    const paths = ["/", "/observe"]; 
    return(
        <div className="Navbar flex sticky top-[0px]   p-[20px] justify-between  bg-[#181d24] w-[100%] 

        min-[2304px]:h-[120px] min-[2304px]:items-center
        
        ">
            <div className=" w-[50px]
            min-[360px]:ml-[10px] min-[360px]:w-[30px]
            min-[393px]:ml-[10px] min-[393px]:w-[30px]
            min-[768px]:w-[40px] min-[768px]:ml-[50px]
            min-[1024px]:w-[50px]
            min-[1280px]:w-[50px]
            min-[1366px]:w-[50px]
            min-[1440px]:w-[50px]
            min-[2240px]:w-[60px]
            min-[2304px]:w-[60px]
            min-[2560px]:w-[50px] ml-[100px]
     
            
            "><img src="src/assets/b561f2a883c71ffc70e4e6eb0ad78a.png" alt="bird feather photo"  className=""
            /></div>
            <ul className="
            flex
                    min-[360px]:gap-[30px] min-[360px]:mr-[30px]
        min-[393px]:gap-[30px] min-[393px]:mr-[30px]
         min-[2240px]:flex
            min-[2560px]:flex   items-center  gap-[100px] mr-[100px]
        
            ">
                      {Navlinks.map((links,index)=>{return(<NavLink  to={paths[index]} key={index}  className={({ isActive }) =>
    `               
                      min-[360px]:text-[2.3vw]
                      min-[393px]:text-[2.3vw] 
                      min-[768px]:text-[1.5vw]
                      text-white text-[1vw] select-none ${isActive ? "text-yellow-300" : ""} 
                      min-[2304px]:pr-[200px]
                      `
  } >{links}</NavLink>)})}
         </ul>
                 
        </div>
        
    );
};
export default Navbar;