import React from "react";
import Main from "./Main";

const MainList = ({gpus, archs}) => {

    return (
        <div>
            <hr />
            This is a stateless child component with list
            <ul>
                {gpus.map(
                    (gpu) =>
                    <li key={gpu.id}>
                        {gpu.get("Name")} |
                    </li>
                )}
            </ul>
         </div>
    );
};

export default MainList;