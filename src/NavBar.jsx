import { Typography } from "@mui/material"


const NavBar = () => {
  return (
    <div style={{width:"100%",height:"55px",display:"flex",justifyContent:"space-evenly",alignItems:"center"}}>
        <div >
        <Typography variant="h5" style={{fontWeight:"bold",color:"#8c918c",cursor:"pointer"}}> pavan</Typography>
        </div>
        <div style={{display:"flex",cursor:"pointer"}}>
            <Typography style={{fontWeight:"bold",color:"#ffffff"}}>blog</Typography>
            <Typography style={{marginLeft:"10px",fontWeight:"bold",color:"#ffffff"}}>projects</Typography>
        </div>
    </div>
  )
}

export default NavBar