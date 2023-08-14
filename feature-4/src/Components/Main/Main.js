import React, {useEffect, useState} from "react";
// import { getAllUsers} from "./../../Services/Users";
import MainList from "./MainList";
import getAllgpus from "../../Services/GraphicsCards";
import getAllarchs from "../../Services/GraphicsCards";
function Main() {
    const [gpus, setgpus] = useState([]);
    useEffect(() => {
        getAllgpus().then((gpus) => {
            setgpus(gpus);
    
        });
    }, []);
    const [archs, setarchs] = useState([]);
    useEffect(() => {
        getAllarchs().then((archs) => {
            setarchs(archs);
    
        });
    }, []);

    return (
        <div>

            <h1>The NVIDIA RTX 4090</h1>
            Ever wanted to sell your soul to 
            our corporate overlords? Fear no more as you 
            can do just that in order to get the latest 
            and fastest GPU!
            <MainList gpus={gpus} archs={archs} />
        </div>
    );
}

export default Main;