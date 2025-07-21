import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import Write from "./page";
const WriteLayout = async () =>{
    const session = await getServerSession(authOptions);
    const loginChk = session.user.email || null;
    

    return(
        <>
            {
                loginChk?
                <Write writerInfo={session}/>:
                <h1>잘못된 접근입니다.</h1>
            }
        </>
    )
}

export default WriteLayout;