import { Netflix_logo } from "../utils/constant";

const Header=()=>{
    return (
        <div className=" absolute  px-16 py-4 bg-gradient-to-b from-black z-10"> 
            <img alt="logo" src={Netflix_logo} className="w-44" />
        </div>
    );
};
export default Header;