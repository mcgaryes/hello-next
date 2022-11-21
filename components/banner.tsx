import styles from "../styles/banner.module.css";
import {PrimaryButton} from "./buttons/primary";

interface BannerProps {

}

export default function Banner(props: BannerProps) {
    return (
        <div className={styles.container}>

            <h1 className={styles.title}>
                <span>Locabeers</span>🍺
            </h1>

            <p className={styles.caption}>Fancy some frosty favorites with friends?</p>

            <PrimaryButton cta={"FIND BREWERIES NEARBY"}
                           handleCta={() => alert("find nearby")}/>

        </div>
    )
}
