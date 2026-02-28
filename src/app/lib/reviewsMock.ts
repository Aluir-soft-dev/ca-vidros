export type ReviewCard = {
  id: string;
  reviewerName: string;
  reviewerMeta?: string; // ex: "Local Guide • 30 avaliações • 13 fotos"
  rating: number; // 1..5
  dateLabel: string; // ex: "Há 4 semanas", "7 de jan. de 2025"
  comment?: string;
  ownerReply?: {
    dateLabel?: string;
    comment: string;
  };
};

export const REVIEWS_MOCK: ReviewCard[] = [
  {
    id: "ademilson-cardozo-ontem",
    reviewerName: "Ademilson Cardozo",
    reviewerMeta: "13 avaliações • 3 fotos",
    rating: 5,
    dateLabel: "Ontem",
  },
  {
    id: "ademir-camargo-4-semanas",
    reviewerName: "Ademir Camargo",
    reviewerMeta: "4 avaliações • 1 foto",
    rating: 5,
    dateLabel: "Há 4 semanas",
    comment: "Serviço top de qualidade super recomendo!",
  },
  {
    id: "silvana-walzburger-12-semanas",
    reviewerName: "silvana walzburger",
    reviewerMeta: "2 avaliações • 0 foto",
    rating: 5,
    dateLabel: "Há 12 semanas",
    comment: "Empresa com atendimento ótimo e entrega rápida ,super atenciosos",
  },
  {
    id: "jussara-pereira-36-semanas",
    reviewerName: "Jussara Pereira",
    reviewerMeta: "Local Guide • 30 avaliações • 13 fotos",
    rating: 5,
    dateLabel: "Há 36 semanas",
    comment:
      "Empresa bem comprometida, são super organizados, ficou demais a minha porta, o pessoal capricho nos detalhes, ficamos muito feliz ☺️. Super recomendo!",
  },
  {
    id: "leandro-machado-2025-01-07",
    reviewerName: "Leandro Machado",
    reviewerMeta: "12 avaliações • 4 fotos",
    rating: 5,
    dateLabel: "7 de jan. de 2025",
    comment: "Serviço excelente, top, super indico, pessoal top.",
  },
  {
    id: "cicero-cagnini-2024-10-21",
    reviewerName: "Cícero Cagnini",
    reviewerMeta: "4 avaliações • 0 foto",
    rating: 5,
    dateLabel: "21 de out. de 2024",
  },
  {
    id: "deisi-sangalli-2024-09-20",
    reviewerName: "deisi sangalli",
    reviewerMeta: "9 avaliações • 2 fotos",
    rating: 5,
    dateLabel: "20 de set. de 2024",
    comment:
      "Excelente trabalho, compromisso e atendimento, ficou ótimo, muito obrigada pelo serviço prestado!!!!",
    ownerReply: {
      dateLabel: "20 de set. de 2024",
      comment:
        "Agradecemos, Deisi, por compartilhar sua experiência com a CA Vidraçaria! Seu feedback é valioso e nos ajuda a continuar evoluindo. Obrigado pela confiança!",
    },
  },
  {
    id: "adriana-menegatti-2024-08-03",
    reviewerName: "ADRIANA REGINA MENEGATTI PERIN",
    reviewerMeta: "Local Guide • 18 avaliações • 0 foto",
    rating: 5,
    dateLabel: "3 de ago. de 2024",
    comment:
      "Profissionais super atenciosos. Atenderam a minha necessidade, personalizando o serviço. Entrega antes do prazo e total cuidado na instalação. Super indico!",
    ownerReply: {
      dateLabel: "3 de ago. de 2024",
      comment:
        "Obrigado por suas palavras e por compartilhar sua experiência positiva com a CA Vidraçaria! Nosso objetivo é sempre...",
    },
  },
  {
    id: "jandira-schreiner-2024-06-14",
    reviewerName: "Jandira Schreiner",
    reviewerMeta: "2 avaliações • 0 foto",
    rating: 5,
    dateLabel: "14 de jun. de 2024",
    comment: "Ótimo competente",
  },
  {
    id: "matheus-schlosser-2024-06-14",
    reviewerName: "Matheus Schlosser",
    reviewerMeta: "1 avaliação • 0 foto",
    rating: 5,
    dateLabel: "14 de jun. de 2024",
  },
  {
    id: "emerson-thiago-2024-06-10",
    reviewerName: "emerson thiago",
    reviewerMeta: "1 avaliação • 0 foto",
    rating: 5,
    dateLabel: "10 de jun. de 2024",
    comment: "Um excelente trabalho parabéns",
  },
  {
    id: "sandra-gouvea-2024-06-10",
    reviewerName: "Sandra Gouvea",
    reviewerMeta: "3 avaliações • 0 foto",
    rating: 5,
    dateLabel: "10 de jun. de 2024",
    comment:
      "Atendimento de excelente, trabalho muito bem feito, entregue antes da data marcada, super indico, sem falar que o valor foi ótimo....Vcs estão de parabéns...",
    ownerReply: {
      dateLabel: "3 de ago. de 2024",
      comment:
        "Muito obrigado pelo seu feedback positivo! Estamos contentes em saber que você ficou satisfeito com o atendimento e a...",
    },
  },
  {
    id: "tiago-costa-2024-05-30",
    reviewerName: "Tiago Costa",
    reviewerMeta: "6 avaliações • 0 foto",
    rating: 5,
    dateLabel: "30 de mai. de 2024",
    comment:
      "Empresa muito profissional e com profissionais eficientes, pontuais em tudo, desde no encaminhamento do projeto/orçamento até a execução e entrega. Preços justo. Indico!!",
    ownerReply: {
      dateLabel: "3 de ago. de 2024",
      comment:
        "Agradecemos imensamente o seu feedback positivo Tiago! Estamos felizes em saber que você apreciou a profissionalidade e...",
    },
  },
  {
    id: "roger-correa-2024-05-28",
    reviewerName: "Roger Correa",
    reviewerMeta: "9 avaliações • 19 fotos",
    rating: 5,
    dateLabel: "28 de mai. de 2024",
    comment:
      "Melhor vidraçaria da grande Florianópolis! Atendimento e trabalho impecáveis!",
    ownerReply: {
      dateLabel: "28 de mai. de 2024",
      comment:
        "CA VIDRAÇARIA agradece, estamos sempre em busca de novidades para melhor atender nossos clientes !",
    },
  },
  {
    id: "luis-wday-2024-03-15",
    reviewerName: "luis wday",
    reviewerMeta: "2 avaliações • 1 foto",
    rating: 5,
    dateLabel: "15 de mar. de 2024",
    comment: "Ótimo trabalho",
  },
  {
    id: "valerio-nascimento-2024-03-13",
    reviewerName: "valerio nascimento",
    reviewerMeta: "7 avaliações • 14 fotos",
    rating: 5,
    dateLabel: "13 de mar. de 2024",
    comment: "Serviço ótimo, recomendo",
  },
  {
    id: "rosangela-buitoni-2024-03-09",
    reviewerName: "Rosangela Buitoni",
    reviewerMeta: "Local Guide • 86 avaliações • 7 fotos",
    rating: 5,
    dateLabel: "9 de mar. de 2024",
    comment: "Excelente atendimento e muito bom trabalho executado.",
  },
  {
    id: "fabio-higa-2023-10-09",
    reviewerName: "Fabio Higa",
    reviewerMeta: "2 avaliações • 0 foto",
    rating: 5,
    dateLabel: "9 de out. de 2023",
  },
  {
    id: "marciano-cardozzo-2023-09-13",
    reviewerName: "Marciano Cardozzo",
    reviewerMeta: "5 avaliações • 5 fotos",
    rating: 5,
    dateLabel: "13 de set. de 2023",
    comment: "Serviço de qualidade 👌✨",
  },
  {
    id: "andrieli-cardozo-2023-09-13",
    reviewerName: "Andrieli Cardozo",
    reviewerMeta: "2 avaliações • 0 foto",
    rating: 5,
    dateLabel: "13 de set. de 2023",
    comment:
      "Excelente atendimento, profissionalismo competência, perfeição no que faz pedido entregue dentro do prazo estão de parabéns pessoal !!!",
  },
  {
    id: "poliana-schmitz-2023-09-12",
    reviewerName: "Poliana Schmitz Fortunato",
    reviewerMeta: "10 avaliações • 0 foto",
    rating: 5,
    dateLabel: "12 de set. de 2023",
    comment:
      "Boa qualidade vale apena o preço , fazem tudo certinho que é pedido 👏",
  },
  {
    id: "iraci-sousa-2023-09-06",
    reviewerName: "Iraci Sousa",
    reviewerMeta: "6 avaliações • 0 foto",
    rating: 5,
    dateLabel: "6 de set. de 2023",
    comment: "Atendimento excelente e o acabamento deles é excepcional.",
  },
  {
    id: "jailson-silva-2023-08-12",
    reviewerName: "Jailson Silva",
    reviewerMeta: "3 avaliações • 0 foto",
    rating: 5,
    dateLabel: "12 de ago. de 2023",
    comment: "Já é o segundo trabalho que solicito… é ótimo trabalho…",
  },
  {
    id: "peter-augusto-2023-08-09",
    reviewerName: "Peter Augusto Dessbesell",
    reviewerMeta: "Local Guide • 5 avaliações • 111 fotos",
    rating: 5,
    dateLabel: "9 de ago. de 2023",
    comment: "Ótimo atendimento!",
  },
  {
    id: "eloilton-ramos-2023-06-28",
    reviewerName: "Eloilton Ramos",
    reviewerMeta: "5 avaliações • 1 foto",
    rating: 5,
    dateLabel: "28 de jun. de 2023",
    comment: "Excelente atendimento e qualidade no serviço! Recomendo!",
  },
  {
    id: "renato-weiller-2023-06-12",
    reviewerName: "Renato Weiller Dallagasperina",
    reviewerMeta: "1 avaliação • 0 foto",
    rating: 5,
    dateLabel: "12 de jun. de 2023",
    comment: "Serviço rápido e com qualidade",
  },
  {
    id: "claudir-rocha-2023-05-26",
    reviewerName: "Claudir rocha Morais",
    reviewerMeta: "0 avaliação • 0 foto",
    rating: 5,
    dateLabel: "26 de mai. de 2023",
  },
  {
    id: "elisa-tonon-2023-04-24",
    reviewerName: "Elisa Tonon",
    reviewerMeta: "8 avaliações • 0 foto",
    rating: 5,
    dateLabel: "24 de abr. de 2023",
    comment: "Ótima experiência, serviço bem feito e bom atendimento",
  },
  {
    id: "naindry-arquitetura-2023-04-24",
    reviewerName: "Naindry Arquitetura",
    reviewerMeta: "5 avaliações • 0 foto",
    rating: 5,
    dateLabel: "24 de abr. de 2023",
    comment: "Atenciosos e prestativos",
  },
  {
    id: "volnei-oliveira-2023-04-24",
    reviewerName: "Volnei De oliveira",
    reviewerMeta: "2 avaliações • 0 foto",
    rating: 5,
    dateLabel: "24 de abr. de 2023",
    comment: "Ótima experiência recomendo",
  },
  {
    id: "maykon-santos-2023-02-15",
    reviewerName: "Maykon Santos",
    reviewerMeta: "Local Guide • 18 avaliações • 0 foto",
    rating: 5,
    dateLabel: "15 de fev. de 2023",
  },
  {
    id: "mayra-wegilla-2023-02-14",
    reviewerName: "Mayra Wegilla",
    reviewerMeta: "2 avaliações • 0 foto",
    rating: 5,
    dateLabel: "14 de fev. de 2023",
    comment: "Profissionais responsáveis e comprometidos, serviço de qualidade",
  },
  {
    id: "guilherme-medeiros-2023-02-07",
    reviewerName: "Guilherme Medeiros",
    reviewerMeta: "6 avaliações • 0 foto",
    rating: 5,
    dateLabel: "7 de fev. de 2023",
    comment: "Ótimo preço e atendimento. Pontual e muito bem detalhista",
  },
  {
    id: "adriana-machado-2023-01-21",
    reviewerName: "Adriana Machado",
    reviewerMeta: "Local Guide • 47 avaliações • 9 fotos",
    rating: 5,
    dateLabel: "21 de jan. de 2023",
    comment: "Gente amei os meninos são profissionais trabalham muito bem gostei muito super recomendo",
  },
  {
    id: "marileia-correa-2023-01-17",
    reviewerName: "Marileia veronica Corrêa",
    reviewerMeta: "2 avaliações • 0 foto",
    rating: 5,
    dateLabel: "17 de jan. de 2023",
    comment:
      "Ótimo serviço, muito caprichosos e entregam antes do prazo. Parabéns pelo profissionalismo! 👏🏻👏🏻",
  },
  {
    id: "luzia-santos-2022-12-10",
    reviewerName: "luzia santos",
    reviewerMeta: "3 avaliações • 0 foto",
    rating: 5,
    dateLabel: "10 de dez. de 2022",
    comment:
      "Serviço muito bem feito, e de qualidade, muito atenciosos e competentes, recomendo nota dez",
  },
  {
    id: "ivan-meinhardt-2022-12-10",
    reviewerName: "Ivan Meinhardt",
    reviewerMeta: "2 avaliações • 0 foto",
    rating: 5,
    dateLabel: "10 de dez. de 2022",
    comment:
      "Serviço muito competente e de qualidade . Profissionais excelente e de responsabilidade... Recomendo👏",
  },
  {
    id: "ivandel-henrique-2022-12-09",
    reviewerName: "ivandel henrique chaves campos",
    reviewerMeta: "2 avaliações • 0 foto",
    rating: 5,
    dateLabel: "9 de dez. de 2022",
  },
  {
    id: "hudny-germano-2022-12-08",
    reviewerName: "Hudny Germano",
    reviewerMeta: "Local Guide • 24 avaliações • 0 foto",
    rating: 5,
    dateLabel: "8 de dez. de 2022",
    comment:
      "Atendimento muito bom, pessoal super atenciosos e comprometidos, serviço ficou ótimo.",
  },
  {
    id: "lori-melo-2022-11-29",
    reviewerName: "Lori Melo",
    reviewerMeta: "5 avaliações • 0 foto",
    rating: 5,
    dateLabel: "29 de nov. de 2022",
    comment: "Ótima perfeita são proficiência muito bom.",
  },
  {
    id: "ander-anderson-2022-11-20",
    reviewerName: "Ander Anderson",
    reviewerMeta: "4 avaliações • 1 foto",
    rating: 5,
    dateLabel: "20 de nov. de 2022",
    comment: "Atendimento e entrega de serviço,de muito profissionalismo.",
  },
  {
    id: "alais-santos-2022-11-16",
    reviewerName: "Alais Santos",
    reviewerMeta: "4 avaliações • 0 foto",
    rating: 5,
    dateLabel: "16 de nov. de 2022",
    comment:
      "Desde ao atendimento até a colocação do vidro e impecável atendimento nota 1000 recomendo..",
  },
  {
    id: "everson-s-2022-11-16",
    reviewerName: "Everson s",
    reviewerMeta: "5 avaliações • 3 fotos",
    rating: 5,
    dateLabel: "16 de nov. de 2022",
    comment:
      "Ótimo atendimento, uma boa opção para que tem Marcenaria ou loja de moveis e deseja terceirizar instalações de vidros e espelhos!",
  },
  {
    id: "dejandir-almeida-2022-11-15",
    reviewerName: "dejandir almeida",
    reviewerMeta: "3 avaliações • 4 fotos",
    rating: 5,
    dateLabel: "15 de nov. de 2022",
    comment: "Boa recomendo um bom amigo e ótimo profissional .",
  },
  {
    id: "silvia-da-rocha-2022-11-15",
    reviewerName: "silvia da rocha",
    reviewerMeta: "Local Guide • 37 avaliações • 114 fotos",
    rating: 5,
    dateLabel: "15 de nov. de 2022",
    comment:
      "Trabalho maravilhoso! Super indico! Pontuais , organizados e um capricho no trabalho. Estão de parabéns!",
  },
  {
    id: "luzia-alves-2022-11-15",
    reviewerName: "luzia Alves de Vargas",
    reviewerMeta: "Local Guide • 36 avaliações • 47 fotos",
    rating: 5,
    dateLabel: "15 de nov. de 2022",
    comment:
      "Trabalho de qualidade, dedicação e antenção com o cliente, preço justo, e entrega no prazo. Que nunca percam a qualidade e a dedicação. Muito obrigada pelos excelente serviços prestado.",
  },
  {
    id: "elizete-prokoski-2022-11-15",
    reviewerName: "Elizete Prokoski",
    reviewerMeta: "Local Guide • 23 avaliações • 77 fotos",
    rating: 5,
    dateLabel: "15 de nov. de 2022",
  },
  {
    id: "joel-dacol-2022-11-15",
    reviewerName: "Joel Dacol",
    reviewerMeta: "1 avaliação • 0 foto",
    rating: 5,
    dateLabel: "15 de nov. de 2022",
    comment: "Bom atendimento.\nMateriais de qualidade.",
  },
  {
    id: "simone-soares-2022-11-15",
    reviewerName: "Simone soares de Souza",
    reviewerMeta: "5 avaliações • 3 fotos",
    rating: 5,
    dateLabel: "15 de nov. de 2022",
    comment: "Excelente trabalho, preço justo . recomendo parabéns!",
  },
  {
    id: "anna-teles-2022-11-14",
    reviewerName: "Anna Teles",
    reviewerMeta: "7 avaliações • 0 foto",
    rating: 5,
    dateLabel: "14 de nov. de 2022",
    comment:
      "Serviço de qualidade, recomendo...Caprichosos e atenciosos...Minha varanda ficou linda ..",
  },
  {
    id: "may-spencer-2022-11-14",
    reviewerName: "May Spencer",
    reviewerMeta: "2 avaliações • 0 foto",
    rating: 5,
    dateLabel: "14 de nov. de 2022",
    comment: "Ótimo, adorei!!\nMaterial de alta qualidade, acabamento...",
    ownerReply: {
      dateLabel: "14 de nov. de 2022",
      comment:
        "Muito obrigado pela confiança ficaremos muito felizes em atendê-la novamente .",
    },
  },
];