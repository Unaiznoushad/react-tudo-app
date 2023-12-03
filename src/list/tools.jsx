import React from "react";
class Tool extends React.Component{
    render(){
        const{
            children 
        }=this.props
        // return children
            return (
        <div>
                <div className=" selection">

                    <select name="sel" >
                        <option value="all">all</option>
                        <option value="ins">active</option>
                        <option value="ss">non active</option>
                    </select>
               

                </div>
                {children}
                <div className="foot">footer</div>
            </div>
        )
    }

}
export default Tool