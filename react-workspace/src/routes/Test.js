import React from "react";
import axios from 'axios';


class Test extends React.Component{
    state = {
        testData: [],
    }
    getTestdata = async () =>{
        const tData = await axios.get('http://localhost:9999/test');
        this.setState({testData:tData.data});
        console.log(tData);
    }
    componentDidMount(){
        this.getTestdata();
        
    }



    render(){
        return(
            <div className="test">
            {this.state.testData.map((item, index) => {
                console.log(this.state.testData);
                return (
                    <div key={index}>
                    <div>
                        <h2 className="test__name">{item.id}</h2>     
                        <h2 className="test__name">{item.content}</h2>     
                        <h2 className="test__name">{item.articleno}</h2>     
                    </div>
                    
                    </div>
                    )
            }
            )}
        </div>
                
        )
    }
}


export default Test;