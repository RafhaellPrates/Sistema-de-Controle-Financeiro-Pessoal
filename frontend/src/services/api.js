
const url = import.meta.env.VITE_API_URL

export function api(){
    return fetch(`${url}/me`,{
        credentials: 'include',
        headers: {'Content-type':'application/json'}

    }).then((res)=>{

        if(!res.ok){
            throw new Error('falhou: '+ res.status)
        }

        return res.json()
    })
}

 