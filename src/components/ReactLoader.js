// Loader component
import Loader from "react-loader-spinner";

export const ReactLoader = ( ) =>{
  return(
    <div style={{display:'flex',justifyContent:'center',marginTop:'10px'}}>
      <Loader
        type="Puff"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={10000} //3 secs
      />
    </div>
  )
}