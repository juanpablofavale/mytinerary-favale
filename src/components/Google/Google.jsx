import axios from 'axios';
import React from 'react'
import { useGoogleLogin } from '@react-oauth/google';
import * as locale from 'locale-codes';
import './google.css'

export default function Google({fn}) {

    const login = useGoogleLogin({
        onSuccess: async tokenResponse => {
            const config = {
                headers:{
                    Authorization: "Bearer " + tokenResponse.access_token
                }
            }
            
            const {data} = await axios.get("https://www.googleapis.com/oauth2/v3/userinfo", config)
            fn({
                email:data.email,
                password: "eC_" + data.sub + "_Ce",
                name:data.given_name,
                lastName:data.family_name,
                image:data.picture,
                country: locale.getByTag(data.locale).location
            })
        },
        
        
    });

    return (
        <div className='googleButton'>
            <img onClick={login} src="/g.png" alt=""/>
        </div>
    )}
