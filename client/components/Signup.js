import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Container, Paper, TextField, Typography } from "@mui/material";
import { BASE_URL } from './helper';

const Signup = () => {
    useEffect(()=>{
        document.title = 'CloudNotes - SignUp';
    },[]);
    const [cred, setCred] = useState({ name: "", email: "", password: "" });
    let navigate = useNavigate();

    const handleSignup = async (e) => {
        e.preventDefault();
        const response = await fetch(`${BASE_URL}/api/auth/createuser`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({ name: cred.name, email: cred.email, password: cred.password })
        })
        const json = await response.json();
        console.log(json);

        if (json.success) {
            localStorage.setItem('token', json.authToken);
            navigate("/notes");
        }
        else {
            alert("User already exists");
        }
    }
    const onChange = (e) => {
        setCred({ ...cred, [e.target.name]: e.target.value });
    }
    const handleLogin = (e) => {
        navigate("/login");
    }
    return (        
        <div className='container'>
            <Container component={"main"} maxWidth="xs"
                sx={{
                    height: "78vh",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <Paper elevation={3}
                    sx={
                        {
                            padding: 4,
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                        }
                    }>

                    <Typography variant='h5'>Sign Up</Typography>
                    <form action=""
                        style={{
                            width: "100%",
                            marginTop: "1rem",
                        }}
                        onSubmit={handleSignup}
                    >

                        <TextField required
                            fullWidth
                            label="Name"
                            margin='normal'
                            variant='outlined'
                            name="name"
                            id="name"
                            onChange={onChange}
                        />


                        <TextField required
                            fullWidth
                            label="Email"
                            type='email'
                            margin='normal'
                            variant='outlined'
                            name="email"
                            id="email"
                            onChange={onChange}
                        />
                        <TextField required
                            fullWidth
                            label="Password"
                            type='password'
                            margin='normal'
                            variant='outlined'
                            name="password"
                            id="password"
                            onChange={onChange}
                        />
                        <Button
                            sx={{
                                marginTop: "1rem",
                            }}
                            fullWidth
                            variant='contained'
                            color='primary'
                            type='submit'
                        >Sign Up</Button>

                        <Typography textAlign={"center"} m={"1rem"}>OR</Typography>
                        <Button
                            fullWidth
                            variant='contained'
                            color='primary'
                            onClick={handleLogin}
                        >Already a user? Login</Button>
                    </form>
                </Paper>
            </Container>
        </div>
    )
}

export default Signup
