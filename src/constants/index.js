import { jsmx } from "../assets/images";
import {
    car,

    css,

    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mui,
    nextjs,
    nodejs,

    react,

    tailwindcss,

    typescript,
    django,
    python,
    go,
    linux,
    docker,
    kubernetes,
    postgresql,
    mysql,
    rabbitmq,
    portfolio2023,
    bitcoincandles,
    gowhite,
    chess,
    expresswhite,
    hulu,
    food,
    deliveroo,
    netflix,
    school,
    djangowhite,
    reactwhite

} from "../assets/icons";

export const skills = [
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    },
    {
        imageUrl:python,
        name:'Python',
        type:'Backend'
    },
    {
        imageUrl:go,
        name:'Golang',
        type:'Backend'
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl:rabbitmq,
        name:'RabbitMQ',
        type:'Backend'
    },
    {
        imageUrl:django,
        name:'Django',
        type:'Backend'
    },
    
        
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
        
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl:linux,
        name:'Linux',
        type:'DevOPS'
    },
    {
        imageUrl:docker,
        name:'Docker',
        type:'DevOPS'
    },
    {
        imageUrl:kubernetes,
        name:'Kubernetes',
        type:'DevOPS'
    },
    {
        imageUrl:postgresql,
        name:'PostgreeSQL',
        type:'DB'
    },
    {
        imageUrl:mysql,
        name:'MySQL',
        type:'DB'
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },


    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    }

    

];

export const experiences = [
    {
        title: "Desenvolvedor Fullstack Jr",
        company_name: "JSMX",
        icon: jsmx,
        iconBg: "#accbe1",
        date: "Abril 2023 - Até o momento",
        points: [
            "Desenvolvendo e mantendo aplicações web usando Next, Express e Nest",
            "Colaborando com outros braços da empresa, incluindo designers, gerentes de projeto e outros desenvolvedores para entregar produtos de qualidade",
            "Implementando design responsivo e assegurando compatibilidade cross-browser",
            "Participando de Code Reviews e provendo feedbacks produtivos a outros desenvolvedores dos squads",
        ],
    }
];

export const socialLinks = [
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/adrielldev',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/adrieldev',
    }
];

export const projects = [
    {
        iconUrl: portfolio2023,
        theme: 'btn-back-red',
        name: 'Portfólio',
        description: 'Repositório do meu portfólio, usadas as principais técnicas do React Moderno com animações usando a biblioteca Three.js',
        link: 'https://github.com/adrielldev/portfolio-2023-react-js',
    },
    {
        iconUrl: bitcoincandles,
        theme: 'btn-back-green',
        name: 'Bitcoin Candles Tracker',
        description: 'Uma aplicação de tracking do preço do bitcoin com criação de velas, tudo isso sendo transmitido para um banco e uma api através de Mensageria',
        link: 'https://github.com/adrielldev/bitcoin-candles-express-ts',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Auto Service Baterias',
        description: 'Landing page responsiva e de alta conversão para uma oficina de baterias',
        link: 'https://autoservicebaterias.com/',
    },
    {
        iconUrl: gowhite,
        theme: 'btn-back-pink',
        name: 'Gerenciador de Alunos',
        description: 'Uma Api usando arquitetura REST para gerenciamento de alunos, usado Go e seu framework Gin',
        link: 'https://github.com/adrielldev/api-alunos-gin-go',
    },
    {
        iconUrl: gowhite,
        theme: 'btn-back-pink',
        name: 'Personalidades Históricas',
        description: 'Uma Api usando arquitetura REST para gerenciamento de personalidades históricas, usado Go e seu framework Gin',
        link: 'https://github.com/adrielldev/api-personalidades-go',
    },
    {
        iconUrl: gowhite,
        theme: 'btn-back-yellow',
        name: 'Go E-commerce',
        description: 'Aplicação de uma E-Commerce em Golang usando a arquitetura MVC',
        link: 'https://github.com/adrielldev/ecommerce-go',
    },
    {
        iconUrl: gowhite,
        theme: 'btn-back-red',
        name: 'Bank Go',
        description: 'Aplicação em Golang simulando todas as operações e serviços de um banco via terminal',
        link: 'https://github.com/adrielldev/bank-go',
    },
    {
        iconUrl: gowhite,
        theme: 'btn-back-green',
        name: 'Status Tracker ',
        description: 'Serviço desenvolvido em Go para monitoramento de status de websites e registro de logs em datas e horários',
        link: 'https://github.com/adrielldev/monitor-status-go',
    },
    {
        iconUrl: chess,
        theme: 'btn-back-blue',
        name: 'Street Chess Recife',
        description: 'Sistema de Ranqueamento de Jogadores e classificação, desenvolvido para grupo de xadrez que faço parte',
        link: 'https://github.com/adrielldev/streetchessrecife-nest-ts',
    },
    {
        iconUrl: expresswhite,
        theme: 'btn-back-pink',
        name: 'Gerenciador de Projetos ',
        description: 'Construí um sistema de gerenciamento de projetos e habilidades para servir de fonte para portfólios de desenvolvedores',
        link: 'https://github.com/adrielldev/api-portfolio-express-ts',
    },
    {
        iconUrl: hulu,
        theme: 'btn-back-black',
        name: 'Hulu Clone',
        description: 'Desenvolvi um Clone do Hulu, aplicativo de streaming famoso nos EUA',
        link: 'https://hulu-clone-delta-three.vercel.app',
    },
    {
        iconUrl: car,
        theme: 'btn-back-yellow',
        name: 'Sistema de Compra/Venda de Veículos',
        description: 'Aplicação voltada para compras,vendas e leilão de veículos entre usuários online',
        link: 'https://github.com/adrielldev/api-carshop-express-ts',
    },
    {
        iconUrl: food,
        theme: 'btn-back-red',
        name: 'Restaurants Search',
        description: 'Desenvolvi um aplicativo que facilita a busca de restaurantes próximos baseados nos gostos pessoais dos clientes usando a Api do Yelp',
        link: 'https://github.com/adrielldev/restaurants-search-react-native-js',
    },
    {
        iconUrl: deliveroo,
        theme: 'btn-back-green',
        name: 'Deliveroo Clone',
        description: 'Clone do famoso aplicativo norte-americano Deliveroo, um serviço de entrega de mercado/comida similar ao iFood',
        link: 'https://github.com/adrielldev/deliveroo-clone-react-native-js',
    },
    {
        iconUrl: netflix,
        theme: 'btn-back-blue',
        name: 'Netflix Clone',
        description: 'Clone da famosa página inicial do Netflix, usando NextJS e um serviço bastante robusto de autenticação o NextAuth',
        link: 'https://github.com/adrielldev/netflix-clone-next-js',
    },
    {
        iconUrl: expresswhite,
        theme: 'btn-back-pink',
        name: 'Sistema de Gerenciamento de Imóveis',
        description: 'Construí um sistema robusto e escalável para satisfazer a aluguel/busca/visitação entre outras funcionalidades no ramo de aluguel de imóveis',
        link: 'https://github.com/adrielldev/api-kimoveis-express-ts',
    },
    {
        iconUrl: expresswhite,
        theme: 'btn-back-black',
        name: 'Sistema de Gerenciamento de Usuários',
        description: 'Feito um serviço de gerenciamento de usuários com as principais funcionalidades de qualquer sistema facilmente transportado para outras aplicações',
        link: 'https://github.com/adrielldev/api-user-express-ts',
    },
    {
        iconUrl: school,
        theme: 'btn-back-yellow',
        name: 'Webschool',
        description: 'Um sistema com interfaces interativas e que visa facilitar a comunicação entre as entidades presentes na escola como pais,alunos, professores e gerência',
        link: 'https://github.com/adrielldev/webschool-react-js',
    },
    {
        iconUrl: djangowhite,
        theme: 'btn-back-red',
        name: 'Komercio',
        description: 'Aplicação de comércio online, usuários podem se cadastrar, postar seus produtos e entrar em contato com compradores que são outros usuários',
        link: 'https://github.com/adrielldev/api-komercio-django-py',
    },
    {
        iconUrl: djangowhite,
        theme: 'btn-back-green',
        name: 'KMDB',
        description: 'Sistema de avaliação de filmes por críticos onde usuários e interagem com as avaliações e críticas',
        link: 'https://github.com/adrielldev/api-kmdb-django-py',
    },
    {
        iconUrl: djangowhite,
        theme: 'btn-back-blue',
        name: 'Kenzie Pet',
        description: 'Construí um sistema para gerenciamento de um Petshop',
        link: 'https://github.com/adrielldev/api-kenziepet-django-py',
    },
    {
        iconUrl: djangowhite,
        theme: 'btn-back-pink',
        name: 'Futcamp',
        description: 'Sistema feito com objetivo de fãs de futebol estarem mais conectados com seus jogadores, clubes e campeonatos favoritos.',
        link: 'https://github.com/adrielldev/api-futcamp-django-py',
    },
    {
        iconUrl: reactwhite,
        theme: 'btn-back-black',
        name: 'Calculadora de Juros',
        description: 'Interface feita para calcular os Juros/Impostos providos pelo usuário',
        link: 'https://github.com/adrielldev/calculadora-juros-react-ts',
    },
    {
        iconUrl: djangowhite,
        theme: 'btn-back-yellow',
        name: 'Importador de CNAB',
        description: 'Serviço desenvolvido para importação de documento CNAB, tratamento de dados e armazenamento',
        link: 'https://github.com/adrielldev/api-upload-cnab-django-py',
    },
    {
        iconUrl: expresswhite,
        theme: 'btn-back-red',
        name: 'Gerenciamento de Clientes',
        description: 'Sistema desenvolvido para gerenciamento de Clientes de um comércio, registro de contatos e acompanhamento dos clientes',
        link: 'https://github.com/adrielldev/api-client-management-express-ts',
    },
    {
        iconUrl: expresswhite,
        theme: 'btn-back-green',
        name: 'Webschool Service',
        description: 'Serviço responsável pelo backend do Webschool, projeto voltado para integração maior entre entidades de núcleo escolar',
        link: 'https://github.com/adrielldev/api-webschool-express-ts',
    },
    {
        iconUrl: portfolio2023,
        theme: 'btn-back-blue',
        name: 'Portfólio 2022',
        description: 'Meu portfólio no ano de 2022, com principais projetos até o momento bem como habilidades',
        link: 'https://portfolio-dusky-theta-15.vercel.app',
    },
    {
        iconUrl: reactwhite,
        theme: 'btn-back-pink',
        name: 'Kenzie Hub',
        description: 'Desenvolvi uma rede social para desenvolvedores interagirem entre si, terem contato com os principais projetos de outros desenvolvedores, suas habilidades e interagirem entre si',
        link: 'https://kenziehub-five-kappa.vercel.app/',
    },
    {
        iconUrl: reactwhite,
        theme: 'btn-back-yellow',
        name: 'Do It',
        description: 'Aplicação que facilita a vida do usuário gerenciando suas principais atividades,provendo funcionalidades como adicionar, editar e excluir programações/rotinas',
        link: 'https://doit-nine.vercel.app/',
    },
    {
        iconUrl: reactwhite,
        theme: 'btn-back-yellow',
        name: 'Nu Kenzie',
        description: 'Interface de um sistema de banco baseado no UI do Nubank, um carinho especial pois foi meu primeiro projeto em React, feito há uns anos atrás',
        link: 'https://nukenzie-flame.vercel.app/',
    }
];