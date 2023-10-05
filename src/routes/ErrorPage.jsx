import { useRouteError } from "react-router-dom"

export default function ErrorPage(){
    let error = useRouteError();
    return(
        <div>
            <h1>Si è verificato un errore</h1>
            <div>
                {
                    error
                }
            </div>
        </div>
    )
}