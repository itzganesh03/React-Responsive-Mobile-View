import React from 'react'


const contextmenu = () => {

  componentDidMount(){
    document.getElementById('myIframe').addEventListener("click",this.handleClick);
   }
   componentWillUnmount(){
    document.getElementById("myIframe").removeEventListener("click", this.handleClick);
   }


  return (
    <div>
        <div className="PDFs">
          <iframe id="myIframe" src={PDF + "#toolbar=0"} width="100%" height="800px" className="Viewer"/> 
        {/* </div> */}
    </div>
  )
}

export default contextmenu




   
    