import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import Write from "./page";
import styles from "./page.module.css"
const WriteLayout = async () =>{
    const session = await getServerSession(authOptions);
    const loginChk = session? session.user.email : null;
    
    

    return(
        <>
            {
                loginChk?
                <Write session={session} page="write"/>:
                <h1 className={styles.error}>로그인 후 작성 작성가능합니다.</h1>
            }
        </>
    )
}

export default WriteLayout;