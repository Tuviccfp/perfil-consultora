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
    item1: 'Natura/Avon',
    item1_1: 'Natura Revista Digital',
    item1_2: 'Avon Cosméticos Revista ',
    item1_3: 'Avon Casa e Estilo Revista ',
    item2: 'Eudora',
    item3: 'oui',
    item4: 'Quem disse Berenice',
    item5: 'Boticario',
    detailsItem:' (Loja + Revista)',
  }
  const link_urlData = {
    link1: 'https://www.natura.com.br/consultoria/marcia_cordeiro',
    link1_1: 'https://natura.com.vc/19_gv_jequitiba-q5lhx',
    link1_2: 'https://avon.com.vc/br2023-6hp7g',
    link1_3: 'https://avon.com.vc/19_casa_-4bq7i',
    link2: 'https://minhaloja.eudora.com.br/loja-marciamariacordeirofraguas-8685358',
    link3: 'https://minhaloja.ouiparis.com/loja-marciamariacordeirofraguas-6149370?utm_source=Revendedor_O_Boticário&utm_medium=Banner_App&utm_campaign=C202317',
    link4: 'https://minhaloja.quemdisseberenice.com.br/loja-marciamariacordeirofraguas-6149370?utm_source=Revendedor_O_Boticário&utm_medium=Banner_App&utm_campaign=C202317',
    link5: 'https://minhaloja.boticario.com.br/loja-marciamariacordeirofraguas-6149370?utm_source=Revendedor_O_Boticário&utm_medium=Banner_App&utm_campaign=C202317-Catálogo_Digital_COSE',
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
