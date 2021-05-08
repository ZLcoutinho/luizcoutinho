import Sidebar from '../../components/SideBar'
import Styles from './contact.module.css'
 
export default function Contact () {
    return (
        <div className={Styles.container}>
            <Sidebar />
            <header className={Styles.header}>
                <img src="/logo.svg" alt="logo" className={Styles.logo}/>
                <h2>Contato</h2>
            </header>
            <section className={Styles.sectionPrincipal}>
                <div className={Styles.emailForContactContainer}>
                    <div className={Styles.emailWrapper}>
                        <p className={Styles.emailContact}>
                                envie um email para:<br />
                            <a href="mailto:contatoluizcoutinho@gmail.com" className={Styles.emailLink}>contatoluizcoutinho@gmail.com</a>
                        </p>
                    </div>
                </div>
                <div className={Styles.formContainer}>
                    <form name="contact" method="POST" data-netlify="true" className={Styles.form}>
                        <input type="hidden" name="form-name" value="contact" />
                        <label className={Styles.label}>Nome completo</label>
                        <input type="text" className={Styles.input} id="nome" name="nome"/><br />
                        <label  className={Styles.label}>Email</label>
                        <input type="email" className={Styles.input} id="email" name="email"/><br />
                        <label  className={Styles.label}>Telefone (WhatsApp)</label>
                        <input type="text" className={Styles.input} id="telefone" name="telefone"/><br />
                        <label  className={Styles.label}>Sua mensagem</label>
                        <textarea className={Styles.textarea}></textarea><br />
                        <div className={Styles.line}></div>
                        <button type="submit" className={Styles.submit}>Enviar</button>
                        <div className={Styles.clear}></div>
                    </form>    
                </div>
            </section>
        </div>
    )
}