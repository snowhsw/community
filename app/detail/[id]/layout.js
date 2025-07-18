import { connectDB } from "@/app/util/database"
import Card from "@/components/PostList"

const DetailLayout = async ({children}) =>{

    return(
        <>
            {children}
            <Card />
        </>
    )
}

export default DetailLayout