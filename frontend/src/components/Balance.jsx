import { useQuery } from "react-query"
import { useParams } from "react-router-dom"
import { getBalance } from "../api"

export function Balance(){
    const params = useParams()
    const {isLoading, isError, data, error} = useQuery(["balance", params.balance], getBalance)

    if (isLoading)
        return <h2>Cargando...</h2>
    if (isError){
        return <h1>{error.toString()}</h1>
    }

    return <div>
        Balance {params.balance}
        <pre>
            {JSON.stringify(data, null, 4)}
        </pre>
    </div>
}