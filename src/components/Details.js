import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Unstable_Grid2';
import './Details.css'
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import { useState,useEffect } from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faUser} from '@fortawesome/free-solid-svg-icons'
import PersonPinIcon from '@mui/icons-material/PersonPin';
import Container from '@mui/material/Container';
import Alert from '@mui/material/Alert';
export default function Details()
{
  const [showForm, setShowForm] = useState(false);

// Add this to your component
useEffect(() => {
  setShowForm(true);
}, []);
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }));
      const obj={marginLeft:"-29%",marginBottom:"10px"}
      const [password,setPassword]=useState(null);
      const [pass1,setPass1]=useState(null);
      const [shake1,setShake1]=useState(false);
      const [shake2,setShake2]=useState(false);
      const [error,setError]=useState(null);
      const handleClick=()=>{
        setError(false)
        if(password.length<8)
        {
setShake1(true);
setError("Password length must be greater than 8");
setTimeout(() => {
  setShake1(false);
}, 500);
        }
        else if(password!==pass1)
        {
          setShake2(true);
          setError("Password and ConfirmPassword must be same")
          setTimeout(() => {
            setShake2(false);
          }, 500);
        }
      }
    {/*width:"640px",height:"550px"*/}
    return(
      <>
      {error&&<Alert variant="filled" severity="error" sx={{width:"650px"}} className='alert-message'>
        {error}
      </Alert>}
      <Paper elevation={24}  sx={{width:{ lg:"690px", sm:"200px"},height:"600px",backgroundColor:" #00ABE4",borderRadius:"20px"}}>
      <Paper elevation={20} sx={{width:"650px",height:"560px",backgroundColor:"#E9F1FA",borderRadius:"20px",boxShadow:"none"}}>
        <form className={`form1 ${showForm ? 'show' : ''}`}>
        <PersonPinIcon sx={{width:"60px",height:"60px"}}/>
                   <Grid container spacing={3} columns={2}>
  <Grid item xs={12} sm={6} md={4} lg={3}>
  <InputLabel htmlFor="name" style={{marginLeft:"-31%",marginBottom:"10px"}}>Name : </InputLabel>
<TextField id="outlined-basic" label="Name" variant="outlined" style={{ width: '400px' }}/> 
  </Grid>
  <Grid item xs={12} sm={6} md={4} lg={3}>
  <InputLabel htmlFor="email" style={{marginLeft:"-31%",marginBottom:"10px"}}>Email : </InputLabel>
  <TextField id="outlined-basic" type="email"  label="Email" variant="outlined"  style={{ width: '400px' }}/> 
  </Grid>
  <Grid item xs={12} sm={6} md={4} lg={3}>
  <InputLabel htmlFor="password" style={{marginLeft:"-29%",marginBottom:"10px"}}>Password : </InputLabel>
  <TextField className={shake1?"shake":""} type="password"  id="outlined-basic" sx={{color:"error"}}  onChange={(event)=>{setPassword(event.target.value)}} value={password} label="Password"   variant="outlined" style={{ width: '400px' }}/> 
  </Grid>
  <Grid item xs={12} sm={6} md={4} lg={3}>
  <InputLabel htmlFor="password" style={{marginLeft:"-23%",marginBottom:"10px"}}>Confirm Password : </InputLabel>
  {/*add separate animation for confirm password with new state*/}
  <TextField className={shake2?"shake":""}    id="outlined-basic" onChange={(event)=>{setPass1(event.target.value)}} value={pass1} label="Confirm Password" type="password"  variant="outlined" style={{ width: '400px' }}/> 
  </Grid>
  <Grid item xs={12} sm={6} md={4} lg={3}>
  <Button variant="contained" onClick={handleClick}>Register</Button>
  </Grid>
</Grid>
        </form>
        </Paper>
        </Paper>
    </>
    )
}