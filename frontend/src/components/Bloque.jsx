import { Link, useParams } from "react-router-dom"
import { useQuery } from 'react-query'
import { getBlock } from "../api"

export function Bloque(){
    const params = useParams()
    const {isLoading, isError, data, error} = useQuery(["bloque", params.bloque], getBlock)

    if (isLoading)
        return <h2>Cargando...</h2>
    if (isError){
        return <h1>{error.toString()}</h1>
    }

    return <div>
        Bloque {params.bloque}
        <table className="table">
            <thead><tr><th>Transacciones</th></tr></thead>
            <tbody>
                {data.transactions.map((tx, index) =>
                    <tr key={index}>
                        <td><Link to={`/tx/${tx}`}>{tx}</Link></td>
                    </tr>
                )}
            </tbody>
        </table>
        <pre>
            {JSON.stringify(data, null, 4)}
        </pre>
    </div>
}