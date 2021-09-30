import React  from "react";
import AddBlog from "../components/addblog";
import AddProject from "../components/addProject";

export default function Upload(){
    return (
        <div className='main'>
            <AddBlog/>
            <AddProject/>
        </div>
    )
}