import * as React from 'react'
import img_perfil from './img/perfil.jpeg'
import './style.css'
import bgFlower from './img/modal.png'

export default function Perfil() {
    let configImg = {
        width: '200px',
        height: '200px',
        radius: '100px'
    }

    return (
        <div className='container'>
            <div className='img-background' >
                <img src={bgFlower} style={{ width: '300px', height: '300px', position: 'absolute', right: 55, top: -55, }} />
                <div className='img-perfil'>
                    <img style={{ width: configImg.width, height: configImg.height, borderRadius: configImg.radius, position: 'relative' }} src={img_perfil} alt='foto de perfil' />
                </div>
            </div>
            <div className='text-perfil'>
                <h4 className='name-perfil'>Márcia Maria Cordeiro Fraguas</h4>
                <p className='description-perfil'>Consultora de cosméticos.</p>
            </div>
        </div>
    )
    }
    // <Card className='card'>
    //     <div style={{  borderRadius: '60px' }}>
    //         <Image src={img_perfil} alt='imagem de perfil' style={{ width: '200px', height: '200px'}} />
    //     </div>
    //     <Card.Content>
    //         <Card.Header className='name_header'>
    //            <Name>Márcia Maria Cordeiro Fraguas</Name>
    //         </Card.Header>
    //         <Card.Description className='work_description'>
    //             Consultora de cosméticos.
    //         </Card.Description>
    //     </Card.Content>
    // </Card>