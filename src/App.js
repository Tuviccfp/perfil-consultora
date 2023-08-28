import 'semantic-ui-css/semantic.min.css'
import Perfil from './Perfil';
import styled from 'styled-components';
import Nav from './Nav';
import Franquias from './Franquia';
import Contats from './Contats';
import Footer from './Footer';

const Container = styled.main`
  background-color: #fad1dd;
  height: 100vh;
`
function App() {
  const franquiaData = {
    item1: 'Natura',
    item1_1: 'Natura Revista Digital',
    item2: 'Eudora',
    item3: 'oui',
    item4: 'Quem disse Berenice',
    item5: 'Boticario',
    detailsItem:' (Loja + Revista)',
  }
  const link_urlData = {
    link1: 'https://www.natura.com.br/consultoria/marcia_cordeiro',
    link1_1: 'https://br.natura.digital-catalogue.com/br/2023/15/revista/15-brasil/view/index.html?id_consultora=151840024&utm_term=web&info=eyJ1c2VyIjp7InBob25lIjoiNTUgMjEgOTY0NDIwODY2IiwiZW1haWwiOiJtbWZyYWd1YUBnbWFpbC5jb20iLCJuYW1lIjoiTUFSQ0lBIE1BUklBIENPUkRFSVJPIEZSQUdVQVMiLCJjeWNsZSI6IjIwMjMxNSIsInNlc3Npb25JZCI6IjY4OTUxOTllLTM3ZTMtNDY4NS04MGVjLTFlNmRjOTM3MmRkMiIsInNob3BJZCI6Im1hcmNpYV9jb3JkZWlybyJ9LCJtYWdhemluZSI6eyJ5ZWFyIjoiMjAyMyIsImN5Y2xlIjoiMjAyMzE1IiwiaWQiOiI2OTcifX0=',
    link2: 'https://minhaloja.eudora.com.br/loja-marciamariacordeirofraguas-8685358',
    link3: 'https://minhaloja.ouiparis.com/loja-marciamariacordeirofraguas-6149370',
    link4: 'https://minhaloja.quemdisseberenice.com.br/loja-marciamariacordeirofraguas-6149370',
    link5: 'https://minhaloja.boticario.com.br/loja-marciamariacordeirofraguas-6149370/pronta-entrega',
  }

  const nameSelectData = {
    name1: 'Espaço Natura',
    name2: 'Espaço Eudora',
    name3: 'Espaço OUI',
    name4: 'Espaço Quem disse Berenice',
    name5: 'Espaço Boticario',
  }

  return (
    <Container>
      <center>
        <Perfil />
        <Nav franquia={franquiaData} link_url={link_urlData} name_select={nameSelectData}/>
        <Franquias franquia={franquiaData}/>
        <Contats />
        <Footer />
      </center>    
    </Container>
  );
}

export default App;
