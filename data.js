const pages = {
  index: {
    title: "Bem-vinda ao Mulheres Conectadas",
    intro: "Aqui, você aprende o que precisa pra fazer seu negócio crescer.\nTudo de um jeito simples, com vídeos e passos fáceis de seguir.\nDescubra como usar ferramentas gratuitas para divulgar seu trabalho, atrair clientes e se organizar melhor.\nVocê não precisa saber tudo. Só dar o primeiro passo.\n\nVamos juntas?"

    , video: "https://www.youtube.com/embed/Zq3ho2SZNus",
    next: [
      { text: "Marketing Digital", target: "marketing" },
      { text: "Planilhas e Organização", target: "planilhas" }
    ]
  },

  // -------------------------------------------------------
  // 1. MARKETING
  // -------------------------------------------------------
  marketing: {
    title: "Marketing Digital",
    intro: `Vender bem começa com saber se divulgar.
O marketing digital é o que ajuda seu negócio a ser visto, lembrado e escolhido.
Aqui, você vai aprender como usar as redes sociais a seu favor, pra mostrar seu trabalho, conquistar novos clientes e transformar seguidores em compradores.
Com as ferramentas certas, você chega mais longe.`,
    video: null,
    next: [
      { text: "Fotos para Divulgação", target: "fotos" },
      { text: "WhatsApp Business", target: "wpp" },
      { text: "Facebook Marketplace", target: "face" },
      { text: "Instagram para Negócios", target: "insta" },
      { text: "Voltar à Capa", target: "index", klass: "back" }
    ]
  },
  fotos: {
    title: "Fotos que Vendem",
    intro: `Uma boa foto faz seu produto brilhar.
Aqui, você aprende truques simples para tirar fotos lindas com o celular usando a luz a seu favor e mostrando o que seu produto tem de melhor.
Porque quem vê qualidade, confia e compra.`,

    video: "https://www.youtube.com/embed/rcZ1H4pve1I",
    next: [
      { text: "Voltar ao Marketing", target: "marketing", klass: "back" }
    ]
  },
  wpp: {
    title: "WhatsApp Business",
    intro: `Transforme seu WhatsApp em uma vitrine.
Com o WhatsApp Business, você organiza pedidos, cria catálogos e atende com mais profissionalismo, e sem misturar com a vida pessoal.
Mais controle, mais vendas, menos confusão.`
    , video: "https://www.youtube.com/embed/auJRQ5aPFCs",
    next: [
      { text: "Voltar ao Marketing", target: "marketing", klass: "back" }
    ]
  },

  face: {
    title: "Facebook Marketplace",
    intro: `Venda onde as pessoas estão.
No Marketplace, você mostra seus produtos pra quem mora perto, sem gastar nada. É fácil, rápido e pode aumentar muito suas vendas.
Mais gente vendo, mais chance de vender.`
    , video: "https://www.youtube.com/embed/g9WfmEOWq4Q",
    next: [
      { text: "Voltar ao Marketing", target: "marketing", klass: "back" }
    ]
  },
  insta: {
    title: "Instagram para Negócios",
    intro: `O Instagram pode ser o seu melhor vendedor.
Aprenda a deixar seu perfil profissional, postar fotos que chamam atenção e usar as ferramentas certas pra alcançar quem realmente quer comprar.
Mostre seu trabalho e faça ele ser visto.`

    , video: "https://www.youtube.com/embed/rw8L15mlvUs",
    next: [
      { text: "Voltar ao Marketing", target: "marketing", klass: "back" }
    ]
  },

  // -------------------------------------------------------
  // 2. PLANILHAS
  // -------------------------------------------------------
  planilhas: {
    title: "Planilhas e Organização",
    intro: `Controlar seu negócio começa por entender seus números.
Com as planilhas, você vê o que entra, o que sai e onde dá pra melhorar. Não precisa ser expert. Vamos começar.
Organização é o primeiro passo para crescer.`
    , video: "https://www.youtube.com/embed/7VW6SIEDhac",
    next: [
      { text: "Planilhas e aplicativos", target: "planilha2" },
      { text: "Google Sheets", target: "google" },
      { text: "Voltar à Capa", target: "index", klass: "back" }
    ]
  },

  google: {
    title: "Google Planilhas",
    intro: `Com o Google Planilhas, você controla tudo direto do celular.
É gratuito, fácil de usar e dá pra acessar de qualquer lugar. Aprenda a montar tabelas simples e acompanhar seus gastos sem dor de cabeça.
Entenda seus números e tome decisões com segurança.`

    , video: "https://www.youtube.com/embed/VIDEO_ID",
    next: [
      { text: "Voltar às Planilhas", target: "planilhas", klass: "back" }
    ]
  },

  planilha2: {
    title: "Planilhas e aplicativos",
    intro: `Chega de adivinhar pra onde vai o seu dinheiro.
Aqui, você aprende a usar planilhas e aplicativos simples pra controlar o que entra e o que sai e ver o lucro de verdade.
Quando você se organiza, o negócio cresce.`
    , video: "https://www.youtube.com/embed/VIDEO_ID",
    next: [
      { text: "Voltar às Planilhas", target: "planilhas", klass: "back" }
    ]
  }
};



