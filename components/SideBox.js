import Link from "next/link"
import styles from "./SideBox.module.css"
import { useSelector } from "react-redux";
import RecentPostBox from "./RecentPostBox";
import TopPostBox  from "./TopPostBox";

const SideBox = () =>{


    return(
        <div className={styles.stickyBoxOuter}>
            <div className={styles.stickyBox}>
                <RecentPostBox />
                <TopPostBox/>
            </div>
        </div>
    )
}

export default SideBox;

