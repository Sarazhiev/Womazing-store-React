import React, {useContext} from 'react';
import {CustomContext} from "../../Context";
    import New from '../Home/New/New'
import Collection from "./Collection/Collection";
import Important from "./Important/Important";
import Team from "./Team/Team";


const Home = () => {
    const {count, user} = useContext(CustomContext);
    return (
            <main>
                <New/>
                <Collection/>
                <Important/>
                <Team/>
            </main>
    );
};

export default Home;