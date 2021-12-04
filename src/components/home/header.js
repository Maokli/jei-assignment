import styles from "./header.module.css"

const Header = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Welcome to Stalker.io</h1>
            <p>The perfect app to get the personal data of your neighbor's wife or husband</p>
            <p className={styles.note}>Note: Wadhah made me do this</p>
        </div>
    )
}

export default Header
