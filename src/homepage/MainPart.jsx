import CompanyDescription from "./CompanyDescription.jsx";
import GoShoppingButton from "./GoShoppingButton.jsx";
import styles from "./mainpart.module.css"
export default function MainPart (){
    return (
        <section className={styles.mainpart}>
            <CompanyDescription />
            <GoShoppingButton />
        </section>
    )
}