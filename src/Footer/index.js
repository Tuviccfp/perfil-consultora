import styled from "styled-components"

const ContainerFooter = styled.footer`
    background-color: whitesmoke;
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
`

export default function Footer() {
    return (
        <ContainerFooter>
            <p>Criador por: <a href="https://github.com/Tuviccfp"><i>Victor Cordeiro &copy;</i></a></p>
        </ContainerFooter>
    )
}