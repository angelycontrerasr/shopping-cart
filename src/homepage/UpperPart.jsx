import CompanyName from "./CompanyName.jsx";
import CompanySubtitle from "./CompanySubtitle.jsx";
import styles from "./upperpart.module.css"
export default function UpperPart (){
    return(
        <section className={styles.upperpart}>
            <CompanyName />
            <CompanySubtitle />
        </section>
    )
}