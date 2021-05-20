import Styles from './portfolio.module.css'

import Sidebar from '../../components/SideBar'

import { getProjects } from "../../../utils/users"
import { useEffect } from "react"
import { useState } from "react"
import Link from 'next/link'

export default function Portfolio() {
    
    
    useEffect(async () => {
        const sites = await getProjects()
        const HTMLsites = sites.map((site, index) => {
            console.log(index)
            return(`
                    <div class=${index % 2 === 0 ? "portfolio_site__4L3mZ" : "portfolio_siteReverse__2to5W"}>
                        <a href ="#" class="portfolio_sinopse__2fgH-">
                            <div class="portfolio_sinopseWrapper__2ljqU">
                                <p class="portfolio_date__1Ke71">
                                    Ago/2019
                                </p>
                                <h2 class="portfolio_titleSinopse__3aZy0">
                                    ${site.title}
                                </h2>
                                <p class="portfolio_descriptionSinopse__J4a8v">
                                Eu tive a ideia de criar esse site quando eu estava vendo um video no youtube, nesse video eles falavam sobre vários personagens, enquanto eles falavam ia aparecendo várias cartas
                                </p>
    
                                    <p class="portfolio_goProject__2LhG4">
                                        Ver projeto
                                    </p>
                            </div>
                        </a>
                        <a href ="#" class="portfolio_imgSinopse__AppLY">
                            <div style="background-image: url(${site.imgf})" class="portfolio_imgfBackground__3eSIr">
                                
                            </div>
                            <div style="background-image: url(${site.imgf})" class=${index % 2 === 0 ? "portfolio_img__2ee9X" : "portfolio_imgReverse__2aUlM"}>
                                
                            </div>
                        </a>
                    </div>
        `)})
        console.log(sites)
        document.querySelector('header').nextSibling.innerHTML = HTMLsites
    }, [])
    
    return (
        <div className={Styles.portfolioContainer}>
            <Sidebar />
            <div className={Styles.wrapper}>
                <header className={Styles.header}>
                    <img src="/logo.svg" alt="logo" className={Styles.logo}/>
                    <h2 className={Styles.title}>Portfólio</h2>
                </header> 
                <div className={Styles.siteContainer}>
                </div>
            </div>
        </div>
    )
}