import { Outlet } from "react-router";
import Navbar from "./navbar";
const ShareLayout:React.FC = () => {
return(
    <>
<Navbar/>
<Outlet/>
    </>
);
};
export default ShareLayout;