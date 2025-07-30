import UpperPart from "./UpperPart.jsx";
import MainPart from "./MainPart.jsx";
import styles from "./homepage.module.css"
export default function Homepage () {
    return (
        <section className={styles.homepage}>
            <UpperPart />
            <MainPart />
        </section>
    )
}