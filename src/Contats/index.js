import styled from "styled-components"
import logo_instagram from './img/logo-instagram.png'
import logo_whatsapp from './img/logo-whatsapp-preto-branco-512.png'

const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-top: 15px;
    margin-bottom: 30px;
`

export default function Contats() {
    let configImg = {
        width: '35px',
        height: '35px'
    }

    return (
        <Container>
            <a style={{ width: configImg.width, height: configImg.height, marginRight: '10px'}} href="https://wa.me/+5521964420866">
                <img style={{ width: configImg.width, height: configImg.height, marginRight: '10px' }} src={logo_whatsapp} alt="logo whatsapp"/>
            </a>
            <a style={{ width: configImg.width, height: configImg.height }} href="https://www.instagram.com/marciafraguas/">
                <img style={{ width: configImg.width, height: configImg.height }} src={logo_instagram} alt="logo instagram"/>
            </a>
        </Container>
    )
}