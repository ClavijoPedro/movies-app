import styles from './noMatch.module.scss'

export const NoMatch = () => {
    return(
        <>
            <div className={styles.container}>
                <p>Error 404: Page not Found</p>
            </div>
        </>
    )
}