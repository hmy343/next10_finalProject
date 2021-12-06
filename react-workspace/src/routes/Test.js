import React from "react";
import axios from 'axios';


class Test extends React.Component{
    state = {
        testData: [],
    }
    
    getTestdata = async () =>{
        const tData = await axios.get('http://localhost:9797/cost')
        .then((response) =>{
            const { data } = response;
            // console.log(data)
            this.setState({
                
                testData : data
            })
            // console.log(this.testDat0a)
        })
        // console.log(this.state.testData);
        // this.setState({testData:tData.data});
        
    }
    componentDidMount(){
        this.getTestdata();
        
    }



    render(){
        let tmp = null
        // if(this.state.testData){
        //     tmp = this.state.testData.map((data)=>
        //     <div>{data.expn_biz}</div>)
        //     console.log("ddddddd")
        // }
        return(
           
            <div className="test">
            {console.log("www")}
            {console.log(this.state.testData)}
            {/* {this.state.testData.expn_biz.map((data,index)=>{
                return (<div key={index}>{data.expn_biz_nm}</div>)
            })} */}
             {this.state.testData.expn_biz&&this.state.testData.expn_biz.map((data,index)=>{
                return (<div key={index}>{data.expn_biz_nm}</div>)
            })}
            </div>
                
        )
    }
}


export default Test;