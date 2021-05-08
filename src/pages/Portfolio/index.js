import Styles from './portfolio.module.css'

import Sidebar from '../../components/SideBar'

export default function Portfolio() {
    

    return (
        <div className={Styles.portfolioContainer}>
            <Sidebar />
            <div className={Styles.wrapper}>
                <header className={Styles.header}>
                    <img src="/logo.svg" alt="logo" className={Styles.logo}/>
                    <h2 className={Styles.title}>Portfólio</h2>
                </header> 
                <div className={Styles.site}>

                </div>
            </div>
        </div>
    )
}