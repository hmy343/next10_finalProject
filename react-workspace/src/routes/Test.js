import React from "react";
import axios from 'axios';
import data from "./Data";


class Test extends React.Component{
    state = {
        isLoading: true,
        testdata: [],
    };
    getTestdata = async () =>{
        const { data :{testData},
        } = await axios.get('http://localhost:3000/test');
        console.log(testdata)
        this.setState({testdata,isLoading:false});
        console.log(testdata)
};
componentDidMount(){
    this.getTestdata();
    
}

render(){
    const{isLoading,testdata}=this.state;
    return(
        <section className="container">
            {isLoading ?<div> Loading... </div>:(
            {testdata}
            )
            };
         </section>
    )
}
}


export default Test;