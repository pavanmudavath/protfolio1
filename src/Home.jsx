
import { Button, Card, Typography } from '@mui/material';
import NavBar from './NavBar';
import {styled} from "@mui/system";
import githublogo from '../public/images/Bokehlicia-Captiva-Web-github.256.png';
import linkedinlogo from "../public/images/Graphics-Vibe-Purple-Glossy-Social-Linkedin.256.png";

const StyledButton = styled(Button)({
    color: "#ffffff",
    border: "2px solid white",
    width: "120px",
    height: "30px",
    borderRadius: "10px",
    transition: "border-color 0.3s, color 0.3s",
    "&&:hover": {
      borderColor: "#7faad9",
      color: "#b8f3cd",
    },
});

const Home = () => {
  return (
    <div style={{background:"#000000",width:"100vw",height:"100vh"}}>
        <NavBar/>
        <div style={{color:"red",display:"flex",justifyContent:"center"}}>
            <Typography variant='h3' style={{animation:"changeColor 5s infinite",fontWeight:"bold"}}><a style={{color:"#8feeca"}}>Hi,I'm</a> <a style={{color:"#65348e"}}>Pavan</a></Typography>
        </div>
        <div>
            <Typography style={{color:"#99a0ac",display:"flex",justifyContent:"center",alignItems:"center",marginTop:"10px"}}>
            " Developing in <Card style={{backgroundColor:"#4c1d95",color:"#9598ad",marginRight:"7px",marginLeft:"7px",width:"100px",height:"30px",borderRadius:"10px",display:"flex",justifyContent:"center"}}>JavaScript</Card> 
                         <Card style={{backgroundColor:"#87edc6",color:"#060a08",marginRight:"0px",marginLeft:"0px",width:"100px",height:"30px",borderRadius:"10px",display:"flex",justifyContent:"center"}}>TypeScript</Card> 
                         <Card style={{backgroundColor:"#4c1d95",color:"#9598ad",marginRight:"5px",marginLeft:"5px",width:"100px",height:"30px",borderRadius:"10px",display:"flex",justifyContent:"center"}}>Python</Card> 
                           and 
            </Typography>
            <Typography style={{color:"#99a0ac",display:"flex",justifyContent:"center",alignItems:"center",marginTop:"10px"}}> ready for whatever comes my way."</Typography>
        </div>
          
        <div style={{display:"flex",justifyContent:"center",alignItems:"center",marginTop:"40px"}}>
       <StyledButton>Text Me</StyledButton>
       <img  style={{cursor:"pointer",width:"35px",marginLeft:"15px"}} src={githublogo}/>
       <img  style={{cursor:"pointer",width:"35px",marginLeft:"15px"}} src={linkedinlogo}/>
        </div>
        <div style={{ display: "flex", justifyContent: "center" ,marginTop:"25px"}}>
        <div className="animated-circle"></div>
</div>


    </div>
  )
}

export default Home