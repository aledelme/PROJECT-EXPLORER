export async function getBlock(params){
    const reponse = await fetch(`http://localhost:3000/bloque/${params.queryKey[1]}`)
    const data = await reponse.json()
    return data
}

export async function getBalance(params){
    const reponse = await fetch(`http://localhost:3000/balance/${params.queryKey[1]}`)
    const data = await reponse.json()
    return data
}

export async function getTx(params){
    const reponse = await fetch(`http://localhost:3000/tx/${params.queryKey[1]}`)
    const data = await reponse.json()
    return data
}