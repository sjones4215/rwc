import {NavBar} from "./HomePage_utillity_components/NavBar";
import Media from "react-media";
import {SmallNavBar} from "./HomePage_utillity_components/SmallNavBar";



export const NavBarContainer = () => {
    return(
        <div>
        <Media query={{ minWidth: 600 }}>
            <NavBar />
        </Media>
        <Media query={{ maxWidth: 600 }}>
            <SmallNavBar/>
        </Media>
        </div>
    );
}