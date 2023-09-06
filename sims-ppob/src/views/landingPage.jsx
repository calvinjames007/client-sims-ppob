import Navbar from '../components/navbar.jsx'
import "../styles/landingPage.css"

function landingPage() {
    return(
        <>
            <Navbar />
            <section className='main-container'>
                <div className='first-container'>
                    <img src='https://api.multiavatar.com/Binx Bond.svg'></img>
                    <p className='firstLine'>Selamat Datang,</p>
                    <p className='secondLine'>Kristanto Wibowo</p>
                </div>

                <div className='second-container'>
                    <p className='thirdLine'>Saldo anda</p>
                    <p className='fourthLine'>Rp 300.000</p>
                </div>
            </section>
        </>
    )
}

export default landingPage;