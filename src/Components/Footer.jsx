import "./Footer.css"

function Footer() {

    const datee = new Date()
    const year = datee.getFullYear()


    return (
        <div id="copyright">
            <h2>Copyright © {year}. All right reserved</h2>
        </div>
    )
}

export default Footer;