const dictionnary = {
  companyName: "DEDALE CONSULTING",
  home: "Accueil",
  aboutUs: "À propos de nous",
  productsAndServices: "Nos produits & Services",
  joinUs: "Rejoingez-nous",
  contactUs: "Contactez-nous",
  consulting: "Consulting",
  biBigData: "BI & Big Data",
  software: "Logiciel",
  mobile: "Mobile",
  erp: "ERP",
  aboutDescriptionP1: `Nous sommes une équipe de personnes passionnées qui vous aident au
  quotidien au moyen de produits innovants. Nous vous permettont ainsi de 
  régler vos problèmes de gestion de d'optimiser vos processus.`,
  aboutDescriptionP2: `Nos produits sont conçus pour les PME voulant optimiser leur performance`,
  /* ==================== Consulting ================== */
  consultingTitle: "Consulting / Personnel d’appoint",
  consultingSubTitle:
    "Utilisez notre expertise pour atteindre vos objectifs IT",
  consultingP1: `Chez DEDALE CONSULTING, nous sommes fiers de notre réseau étendu
  et de nos méthodes de filtrage strictes pour trouver les profils
  les mieux adaptés à vos besoins IT. Notre engagement envers votre
  succès nous permet de nous démarquer de la concurrence.`,
  consultingP2: `Un processus de recrutement robuste nous permet de localiser les
  meilleures ressources pour presque toutes les compétences.`,
  consultingP3: `Nous investissons dans la formation continue pour améliorer les
  compétences de nos collaborateurs afin de répondre aux besoins
  d'un milieu de travail en constante évolution.`,
  /* ==================== Big data ================== */
  biBigDataTitle: "BI & Big data",
  biBigDataSubTitle: "Exploitez la puissance de vos données",
  biBigDataP1: `Dédale consulting aide les clients à découvrir des opportunités stratégiques à partir
   des tas de données internes et / ou externes. Nos solutions évaluent, améliorent et intègrent
    les données pour les transformer en informations exploitables. `,
  biBigDataP2: "Notre expertise comprend:",
  biBigDataList: [
    `Capacités de bout en bout depuis l'analyse de processus,
 l'identification des indicateurs de performance clés jusqu'au développement`,
    `Expérience dans une gamme complète d’outils / produits comprenant: la suite SAP,
 Cognos, Oracle, Qlikview,IBM Datastage, TALEND  et Microsoft`,
    `Solide connaissance de l'application de dataWarehousing et de la modélisation de données
 pour résoudre des problèmes de données complexes`,
    `Équipe dédiée de consultants séniors 10ans minimum en BI`,
    `Expérience dans l’expertise en modélisation analytique et prédictive avec 
l’utilisation d’outils tels que la programmation SAS et R.`
  ],
  /* ==================== Software ================== */
  softwareTitle: "Développement et intégration du système",
  softwareSubTitle:
    "Construisez des applications immersives qui ravissent vos clients",
  softwareP1: `
  Construisez des applications immersives qui ravissent vos clients
  Dédale Consulting combine les meilleurs outils de développement et de consolidation de logiciels pour fournir des solutions sur mesure qui prennent une approche holistique pour résoudre les défis commerciaux du client et offrent un avantage concurrentiel. Notre vaste expérience comprend:
  `,
  softwareList: [
    `Construire des applications de base en .NET, JAVA,PHP et diverses technologies Open Source`,
    `Création de systèmes de gestion de contenu et de documents pour capturer, stocker et diffuser des informations`
  ],
  /* ==================== Mobile ================== */
  mobileTitle: "Développement d'applications mobile",
  mobileSubTitle:
    "Augmentez la disponibilité de manière transparente sur vos appareils",
  mobileP1: `
  Dédale consulting aide les clients à aligner leur stratégie commerciale sur la technologie mobile 
  en fournissant un contenu ciblé, adapté au contexte, de contenu vers des appareils mobiles.
   Notre expertise couvre l'ensemble des principales plates-formes mobiles, notamment iOS, Android et HTML5. 
   Nos services à valeur ajoutée comprennent:
  `,
  mobileList: [
    `Développement d'applications (natif / Web)`,
    `Développement de produits personnalisés`,
    `Collaboration`,
    `Automatisation des services`,
    `Solutions basées sur la localisation`
  ],
  /* ==================== ERP ================== */
  erpTitle: "ERP : Enterprise resource planning",
  erpSubTitle:
    "Rationalisez les processus pour augmenter votre retour sur investissement",
  erpP1: `
  Dédale consulting aide à intégrer les meilleures pratiques de processus métier aux exigences spécifiques du client.
   Nous fournissons des solutions ERP rentables qui permettent à nos clients d'automatiser leurs processus 
   et d'accroître leur visibilité au sein de leurs organisations. Nos services à valeur ajoutée comprennent:
  `,
  erpList: [
    `Services de mise en œuvre`,
    `Support / opérations en cours`,
    `BI et gestion de la performance`,
    `Intégration d'applications`,
    `Optimisation des processus métier`
  ],
  erpP2: `Notre expertise couvre l'ensemble des outils standard du secteur, notamment ODOO,SAP, Oracle et Microsoft Dynamics.`
};

const t = path => {
  return dictionnary[path] || path;
};
export default t;
