import React from "react";


const MainList = ({gpus}) => {
    return (
        <div>
            <hr />
            This is a stateless child component with list
            <ul>
                {gpus.map(
                    (gpu) => {
                        return (
                            <li key={gpu.id}>
                                {gpu.get("Name")} | {gpu.get("architecture").get("Name")} | {gpu.get("architecture").get("Release_Date")}
                            </li>
                            // This is where I get the GPU name, architecture, and architecture release date.
                        );
                    }
                )}
            </ul>
         </div>
    );
};


export default MainList;