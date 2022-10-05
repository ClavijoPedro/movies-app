import styles from './noMatch.module.scss'

export const NoMatch = () => {
    return(
        <>
            <div className={styles.container}>
                <h1>Error 404: Page not Found</h1>
            </div>
        </>
    )
}