import { Outlet, useNavigate } from "react-router-dom";
import { useForm } from 'react-hook-form'

export function Home(){
    const navigate = useNavigate()
    const {register, handleSubmit} = useForm()
    const submitForm = (data) => {
        if (data.data.length == 66){ //Tx
            navigate(`tx/${data.data}`)
        } else if (data.data.length == 42){ //Address
            navigate(`balance/${data.data}`)
        } else if (/^\d+$/.test(data.data)){
            navigate(`bloque/${data.data}`)
        } else {
            navigate(`404`)
        }
    }
    return <div className="container">
        <h1>Explorador de la cadena de ethereum</h1>
        <form className="d-flex justify-content gap-2" onSubmit={handleSubmit(submitForm)}>
            <input {...register("data")} size={70}></input>
            <button className="btn btn-primary">GO</button>
        </form>
        <div className="border my-2 p-2">
            <Outlet></Outlet>
        </div>
    </div>
}