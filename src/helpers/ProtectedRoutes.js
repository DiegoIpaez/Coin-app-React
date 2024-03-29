import React from 'react'
import { Redirect, Route } from 'react-router-dom'//'Route es para hacer match y redirect, es para redireccionar lo deseado'

export default function ProtectedRoutes({component: Components, ...rest}) {
    const IsAuthenticated = localStorage.getItem('crypto_app_user') || null
    return (
        <div> 
        <Route 
        // Trae todos los props que hay y se pueden mandar en PotecterRoute y se los pasa al hijo
        {...rest} 
        
        // Me permite pasar un componente en una funcion en vez de crearlo por separado evitando crear el componente cada vez que se actualiza
        render={(props)=>{
            if(IsAuthenticated){
             return <Components {...props} />
            }else{
             return <Redirect to='/login' />
            }
        }} />    
        </div>
    )
}
