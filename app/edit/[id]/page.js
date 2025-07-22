import Write from "@/app/write/page";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { connectDB } from "@/app/util/database";
import { ObjectId } from "mongodb";
import styles from "./page.module.css"
const EditPage = async({params}) => {

    const { id } = await params
    
    const session = await getServerSession(authOptions);

    const db = ( await connectDB ).db("community");
    const editPost = await db.collection("post").findOne({_id: new ObjectId(id)});

    const userEmail = session?session.user.email:null;
    const postInfo = {...editPost, _id: editPost._id.toString()}
    
    console.log(postInfo)

    return (
        <>
            {
                postInfo.userKey === userEmail?
                <Write session={session} page="edit" postInfo={postInfo} />:
                <h1 className={styles.error}>잘못된 접근 입니다.</h1>
            }
        </>
    )
}

export default EditPage;