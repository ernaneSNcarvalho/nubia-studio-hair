import React from 'react'
import Link from 'next/link'
import PageTitle from '../components/PageTitle'

const Sobre = () => {
    return (
        <div>
            <PageTitle title='Sobre' />
        
            <div className='m-8 text-center font-bold italic p-5'>
                <p>A Di Carvalho Web Systems desenvolve soluções para sua empresa, <br /> 
                como os sites institucionais e lojas virtuais, que utilizam técnicas avançadas <br /> 
                de SEO para otimizar o ranqueamento no google. 
                </p>
                
                <br /> 
                <p> Fornececemos serviços de gestão do trafego pago, gerindo as campanhas e otimizando o ranqueamento <br />
                nas principais redes sociais (Instagram e Facebook) além claro do próprio google, <br /> 
                tornando sua página as primeiras colocadas nas buscas dos usuários. <br /> 
                </p>
                <br /> 
                <p>
                Além de tudo ainda criamos toda gestão da sua empresa, o famoso ERP - Sistemas para gestão empresarial <br /> 
                para que você possa cuidar do seu negócio com tranquilidade.  
                </p>
                
                
            </div>
            
        </div>
    )
}

export default Sobre