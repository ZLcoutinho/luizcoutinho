import Styles from './portfolio.module.css'

import Sidebar from '../../components/SideBar'

import { getProjects } from "../../../utils/users"
import { useEffect } from "react"
import { useState } from "react"
import Link from 'next/link'

export default function Portfolio() {
    
    
    /*useEffect(async () => {
        const sites = await getProjects()
        const HTMLsites = sites.map((site) => `<div clas="div2"><p>${site.title}</p></div>`)
        document.querySelector('header').nextSibling.innerHTML = HTMLsites
    }, [])*/
    
    return (
        <div className={Styles.portfolioContainer}>
            <Sidebar />
            <div className={Styles.wrapper}>
                <header className={Styles.header}>
                    <img src="/logo.svg" alt="logo" className={Styles.logo}/>
                    <h2 className={Styles.title}>Portfólio</h2>
                </header> 
                <div className={Styles.siteContainer}>
                    <div className={Styles.site}>
                        <div className={Styles.sinopse}>
                            <div className={Styles.sinopseWrapper}>
                                <p className={Styles.date}>
                                    Ago/2019
                                </p>
                                <h2 className={Styles.titleSinopse}>
                                    Site Pokédex
                                </h2>
                                <p className={Styles.descriptionSinopse}>
                                gasgajhjhçajoiwjhijasijaijhiajhajshoahoiashiohaiohiaohoaiha ioasgio ahsghasoih ashgiahsi haiog ahs ioao s oiasi a
                                </p>
                                <Link href="#">
                                    <a className={Styles.goProject}>
                                        Ver projeto
                                    </a>
                                </Link>
                            </div>
                        </div>
                        <div className={Styles.imgSinopse}>
                            <img src="/pokef.png"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}