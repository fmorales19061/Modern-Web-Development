import React, {useEffect, useState} from "react";

import MainList from "./MainList";
import getAllgpus from "../../Services/GraphicsCards";
import getAllarchs from "../../Services/GraphicsCards";
import Navigation from "../Navigation/Navigation";
function Main() {
    const [archs, setarchs] = useState([]);
    const [gpus, setgpus] = useState([]);
    useEffect(() => {
        getAllgpus().then((gpus) => {
            setgpus(gpus);
            console.log(gpus);
            setarchs(gpus.map((gpu) => gpu.get("architecture")));
            console.log(archs);
        });
    }, []);
    // This is where I get my gpu object array, and where I call the architecture pointer
    // as well.
    
    // useEffect(() => {
    //     Promise.all(gpus.map(gpu => getAllarchs(gpu)))
    //         .then(archs => setarchs(archs));
    // }, [gpus]);
    // console.log(archs);

    
    return (
        <div>
            <Navigation></Navigation>
            {/* This is my navigation bar with the black background and green accent */}
            <h1>The NVIDIA RTX 4090</h1>
            Ever wanted to sell your soul to 
            our corporate overlords? Fear no more as you 
            can do just that in order to get the latest 
            and fastest GPU!
            <MainList gpus={gpus} />
            {/* MainList is where the parse database is handled */}
        </div>
    );
}

export default Main;