import React from 'react'
import { Skeleton } from '@mui/material';



const WithLoader = <T extends {isLoading: boolean, key?: any}>(Component: (_: T) => JSX.Element) => (props: T) => {
    
    return (props.isLoading ? 
        <Skeleton style={{marginBottom: 10}} variant="rectangular" width={370} height={280} /> : 
        <Component {...props}></Component>)
}

export default WithLoader;