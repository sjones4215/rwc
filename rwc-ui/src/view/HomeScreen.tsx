import '../styles/HomePage.scss'
import {NavBar} from "./HomePage_utillity_components/NavBar";
import Media from "react-media";
import {SmallNavBar} from "./HomePage_utillity_components/SmallNavBar";


const HomePage = () => {

    return (
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

export default HomePage;