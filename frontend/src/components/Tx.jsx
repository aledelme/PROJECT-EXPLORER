import { useQuery } from "react-query"
import { useParams } from "react-router-dom"
import { getTx } from "../api"
import { Link } from "react-router-dom"

export function Tx(){
    const params = useParams()
    const {isLoading, isError, data, error} = useQuery(["tx", params.tx], getTx)

    if (isLoading)
        return <h2>Cargando...</h2>
    if (isError){
        return <h1>{error.toString()}</h1>
    }

    return <div>
        <table className="table">
            <thead>
                <tr>
                    <th>From</th>
                    <td><Link to={`/balance/${data.from}`}>{data.from}</Link></td>
                </tr>
                <tr>
                    <th>To</th>
                    <td><Link to={`/balance/${data.to}`}>{data.to}</Link></td>
                </tr>
                <tr>
                    <th>Value</th>
                    <td>{data.value}</td>
                </tr>
                <tr>
                    <th>Bloque</th>
                    <td><Link to={`/bloque/${data.blockNumber}`}>{data.blockNumber}</Link></td>
                </tr>
            </thead>
        </table>
        Transacción {params.tx}
        <pre>
        {JSON.stringify(data, null, 4)}
        </pre>
    </div>

}