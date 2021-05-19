import styles from './principal.module.css'

import Welcome from '../../components/Welcome'
import Sidebar from '../../components/SideBar'

export default function Principal () {


    return (
        <div className={styles.container}>
            <img className={styles.logo} src="/logo.svg" alt="Logo"/>
            <Welcome />
            <Sidebar />
        </div>
    )
}