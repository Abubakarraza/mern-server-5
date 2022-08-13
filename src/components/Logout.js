import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
const Logout = () => {
    const navigate = useNavigate();
    const onLogoutHandler = async () => {
        try {
            const res = await fetch("/logout", {
                method:"GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",

                },
                credentials: "include"
            });
            // const data = await res.json();
            console.log(res)
            if (res.status !== 200) {
                const error = new Error("Something went wrong")
                throw error;
            }
            if (res.status === 200) {
                window.alert("user is Successfully Logout");
                navigate("/login")

            }
        } catch (error) {
            window.alert("Something Went Wrong Please Try Again");
            navigate("/")
        }

    };
    useEffect(() => {
        onLogoutHandler();
    },[])

    return (
        <></>
    )
}

export default Logout
