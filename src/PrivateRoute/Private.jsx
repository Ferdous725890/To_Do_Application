import React, { useContext } from 'react';
import { Authcontext } from '../shared Component/Authprovider/Authprovider';

const PrivateRouter = ({children}) => {
    const {user, looding} = useContext(Authcontext)
    
if( looding){
    return <span className="loading loading-bars loading-lg"></span>
}

   if(user){
    return children
   }
   
};

export default PrivateRouter;