'use client';
import { useEffect } from "react";

export default function Error({
    error,
    reset,
}){
    useEffect(() => {
    console.log(error);
    
    }, [error])
    return(
        <div>
            <p>Something went wrong...</p>
            <button onClick={()=> reset()}>Reset error boundary</button>
        </div>
    )
}