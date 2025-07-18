
const POST = async(req) =>{
    
    if(req.method==="POST"){
        const data = await req.json()
        console.log(data)
    }
} 

export default POST