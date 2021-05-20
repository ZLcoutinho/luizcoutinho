import Styles from './welcome.module.css'

export default function Welcome () {
    return (
        <div className={Styles.messageContainer}>
            <p className={Styles.firstMessage}>
            oi, meu nome é Luiz Gustavo<br />
                e amo trabalhar com 
            </p>
            <p className={Styles.pwebWrapper}>
                <span className={Styles.chave}>{'{'}</span>
                <span className={Styles.pWeb}>programação para web</span>
                <span className={Styles.chave}>{'}'}</span>
            </p>
        </div>
    )
}