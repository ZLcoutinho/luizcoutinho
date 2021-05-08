import Styles from './sidebar.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router'

const ObjNavStyle = {
    '': Styles.navP,
    '/': Styles.navP,
    '/Principal': Styles.navP,
    '/About': Styles.navA,
    '/Portfolio': Styles.navA,
    '/Contact': Styles.navC,
}

const ObjlinkStyle = {
    '': Styles.linkP,
    '/': Styles.linkP,
    '/Principal': Styles.linkP,
    '/About': Styles.linkA,
    '/Portfolio': Styles.linkC,
    '/Contact': Styles.linkC,
}

export default function Sidebar () {
    const router = useRouter().pathname
    const rout = useRouter().pathname === '/' ? '/' : '/Principal'
    
    const openSideBar = () => {
        document.querySelector('#linksContainer').classList.toggle('sidebar_linksContainer__2qzPI')
        document.querySelector('#linksContainer').classList.toggle('sidebar_linksContainerNone__35Tdn')
    }

    return(
        <div className={rout ? Styles.sidebar : Styles.sidebarD}>
            <nav className={ObjNavStyle[router]}>
                <ul className={Styles.ul}>
                    <li className={router === rout
                                ? Styles.linkSpecial
                                : Styles.li}>
                        <Link href="/Principal">
                            <a className={ObjlinkStyle[router]}>Home</a>
                        </Link>
                    </li>
                    <li className={router === '/About' 
                                ? Styles.linkSpecial 
                                : Styles.li}>
                        <Link href="/About">
                            <a className={ObjlinkStyle[router]}>Sobre</a>
                        </Link>
                    </li>
                    <li className={router === '/Portfolio' 
                                ? Styles.linkSpecial 
                                : Styles.li}>
                        <Link href="/Portfolio">
                            <a className={ObjlinkStyle[router]}>Portfólio</a>
                        </Link>
                    </li>
                    <li className={router === '/Contact' 
                                ? Styles.linkSpecial 
                                : Styles.li}>
                        <Link href="/Contact">
                            <a className={ObjlinkStyle[router]}>Contato</a>
                        </Link>
                    </li>
                </ul>
                <div className={Styles.clear}></div>
            </nav>
            <div className={rout === router ? Styles.sidebarMobilep : Styles.sidebarMobile}>
                <button onClick={openSideBar}>
                    <img src="/sidebar.svg"/>
                </button>
                <nav id="linksContainer" className={Styles.linksContainerNone}>
                    <ul className={Styles.ul}>
                        <li className={Styles.liMobile}>
                            <Link href="/Principal">
                                <a className={Styles.linkMobile}>Home</a>
                            </Link>
                        </li>
                        <li className={Styles.liMobile}>
                            <Link href="/About">
                                <a className={Styles.linkMobile}>Sobre</a>
                            </Link>
                        </li>
                        <li className={Styles.liMobile}>
                            <Link href="/Portfolio">
                                <a className={Styles.linkMobile}>Portfólio</a>
                            </Link>
                        </li>
                        <li className={Styles.liMobile}>
                            <Link href="/Contact">
                                <a className={Styles.linkMobileC}>Contato</a>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}