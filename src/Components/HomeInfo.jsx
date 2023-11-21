import { Link } from "react-router-dom"
import {arrow} from '../assets/icons'

const InfoBox = ({text,link,btnText}) => (
    <div className="info-box">
        <p className="font-medium sm:text-xl text-center">{text}</p>
        <Link to={link} className="neo-brutalism-white neo-btn">
            {btnText}
        <img src={arrow} className="w-4 h-4 object-contain"/>
        </Link>
    </div>
)


const renderContent = {
    1:(
        <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">Olá, eu sou o <span className="font-semibold">Adriel 👋</span> 
        
        <br/>
        Desenvolvedor de Software de Recife
        </h1>
       

        ),
    2:(
        <InfoBox
        link = "/sobre"
         btnText="Ver mais"
        text="Desenvolvedor de Software com 2 anos de experiência em Desenvolvimento Web"/>
    ),
    3:(
        <InfoBox
        link = "/projetos"
         btnText="Visite meu Portfólio"
        text="Trabalhei em diversos projetos e coletei bastante experiência ao longo do tempo"/>
    ),
    4:(
        <InfoBox
        link = "/contato"
         btnText="Contate-me"
        text="Precisando me contatar para falar sobre algum desafio ou oportunidade? "/>
    )
}


const HomeInfo = ({currentStage}) => {
  return renderContent[currentStage] || null
}

export default HomeInfo