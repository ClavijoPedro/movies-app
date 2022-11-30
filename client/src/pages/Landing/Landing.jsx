import { Link } from 'react-router-dom'
import styles from './landing.module.scss'

export const Landing = () => {

  return (
    <div className={styles.landingContainer}>
    <h1>
        Películas y series <br /> ilimitadas y mucho más
    </h1>
    <span>Disfruta donde quieras. Cancela cuando quieras.</span>
    <Link to={'/login'} className='button'>
        Iniciar sesión
    </Link>
</div>
  )
}