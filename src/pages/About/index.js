import Styles from './about.module.css'

import Sidebar from '../../components/SideBar'

export default function About () {

    return (
        <div className={Styles.aboutContainer}>
            <div className={Styles.wrapper}>
                <Sidebar />
                <div className={Styles.aboutmeTitle}>
                    <p>SOBRE MIM</p>
                    <h2>Um programador que ama o que faz</h2>
                </div>
                <div className={Styles.aboutmeIntroduction}>
                    <p><span>Oi!, prazer em conhece-lo</span>
                    <br />meu nome completo é Luiz Gustavo da Silva coutinho, tenho 16 anos e moro no ES.</p>
                </div>
                <div className={Styles.aboutmeFinal}>
                    <p><span>Como comecei?</span>
                    <br />Eu comecei a estudar programação em abril de 2020, comecei com CSS, HTML e javaScript, quando eu percebi que eu já estava dominando esses três, eu resolvi aprender algo novo, atualmente estou estudando react js, e futuramente penso em estudar alguma linguagem back-end.</p>
                </div>
                <div className={Styles.aboutmeSkill}>
                    <p>Minhas habilidades</p>
                    <a href="https://developer.mozilla.org/pt-BR/docs/Web/Guide/HTML/HTML5" target="_blank"><img src='/html5.svg' alt="html5"/></a>
                    <a href="https://www.w3schools.com/css/" target="_blank"><img src='/css3.svg' alt="css3"/></a>
                    <a href="https://www.javascript.com/" target="_blank"><img src='/js.svg' alt="js"/></a>
                    <a href="https://reactjs.org/" target="_blank"><img src='/reactjs.svg' alt="reactjs"/></a>
                    <a href="https://firebase.google.com/" target="_blank"><img src='/firebase.svg' alt="firebase"/></a>
                </div> 
                <img className={Styles.logo} src="/logo.svg"/>
            </div>
        </div>
    )
}