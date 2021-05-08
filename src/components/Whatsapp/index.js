const wppUrl = "https://api.whatsapp.com/send/?phone=5527988018851"

import Styles from './wpp.module.css'

import { useRouter } from 'next/router'

export default function Whatsapp () {
    const router = useRouter().pathname
    const rout = useRouter().pathname === '/' ? '/' : '/Principal'
    let routerwppMoblie = ''

    if (router === '/Contact') {
        routerwppMoblie = Styles.wppMobileC
    } else if (router === rout) {
        routerwppMoblie = Styles.wppMobileP
    } else {
        routerwppMoblie = Styles.wppMobile
    }

    return (
        <div>
            <a className={rout === router ? Styles.wppContainerp : Styles.wppContainer} target="_Blank" href={wppUrl}>
                <div className={Styles.textWrapperBalloon}>Oi, já chegou até aqui, por que não me envi uma mensagem?</div>
                <img className={Styles.wppicon} src="/whatsapp.svg" alt="whatsapp link"/>
            </a>
            <a className={routerwppMoblie} target="_Blank" href={wppUrl}>
                <p>Me envie uma mensagem</p>
                <img src="/whatsapp.svg" />
            </a>
        </div>
    )
}