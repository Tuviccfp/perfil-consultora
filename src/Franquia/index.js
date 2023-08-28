import logo1 from './img/logo-natura-512.png'
import logo2 from './img/logo-boticario-512.png'
import logo3 from './img/logo-eudora-512.png'
import logo4 from './img/logo-quem-disse-berenice-512.png'

export default function Franquias({ franquia }) {
    let configImg = {
        width: '70px',
        height: '70px'
    }

    return (
        <div style={{ marginTop: '20px'}}>
            <img style={{ width: configImg.width, height: configImg.height, marginRight: '5px' }} src={logo1} alt={`logo da marca ${franquia.item1}`}/>
            <img style={{ width: configImg.width, height: configImg.height, marginRight: '5px' }} src={logo2} alt={`logo da marca ${franquia.item2}`}/>
            <img style={{ width: configImg.width, height: configImg.height, marginRight: '5px' }} src={logo3} alt={`logo da marca ${franquia.item3}`}/>
            <img style={{ width: configImg.width, height: configImg.height, marginRight: '5px' }} src={logo4} alt={`logo da marca ${franquia.item4}`}/>
            {/* <img style={{ width: configImg.width, height: configImg.height }} src={logo5} alt={`logo da marca ${franquia.item5}`}/> */}
        </div>
    )
}