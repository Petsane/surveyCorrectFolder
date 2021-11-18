import React from "react";
import { useHistory } from 'react-router-dom';


export default function Home() {
    const history = useHistory();

    const nav2results = () =>{
        history.push('/results')
    }

    const nav2form = () =>{
        history.push('/form')
    }
    
    return (
        <div className="container">
            <div>
            <button onClick={nav2form}>
                Fill out survey
            </button>
            </div>
            <div>
            <button onClick={nav2results}>
                View survey results
            </button>
            </div>
        </div>
    )
}