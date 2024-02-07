/* For other instituitions than IST */

export interface Course {
  code: string
  name: string
}

export interface Instituition {
  code: string
  name: string
  courses: { [id: string]: Course }
}

type Instituitions = { [id: string]: Instituition }

/* Instituitions */

export const instituitions: Instituitions = {
  '0140': {
    code: '0140',
    name: 'Universidade dos A\u00e7ores - Faculdade de Ci\u00eancias Agr\u00e1rias e do Ambiente',
    courses: {
      '8031': {
        code: '8031',
        name: 'Ci\u00eancias Farmac\u00eauticas (Preparat\u00f3rios)',
      },
      '8086': {
        code: '8086',
        name: 'Medicina Veterin\u00e1ria (Preparat\u00f3rios)',
      },
      '9022': {
        code: '9022',
        name: 'Ci\u00eancias Agr\u00e1rias',
      },
      L121: {
        code: 'L121',
        name: 'Natureza e Patrim\u00f3nio',
      },
    },
  },
  '0150': {
    code: '0150',
    name: 'Universidade dos A\u00e7ores - Faculdade de Ci\u00eancias Sociais e Humanas',
    courses: {
      '9181': {
        code: '9181',
        name: 'Hist\u00f3ria',
      },
      '9219': {
        code: '9219',
        name: 'Psicologia',
      },
      '9238': {
        code: '9238',
        name: 'Servi\u00e7o Social',
      },
      '9240': {
        code: '9240',
        name: 'Sociologia',
      },
      '9798': {
        code: '9798',
        name: 'Rela\u00e7\u00f5es P\u00fablicas e Comunica\u00e7\u00e3o',
      },
      '9853': {
        code: '9853',
        name: 'Educa\u00e7\u00e3o B\u00e1sica',
      },
      L041: {
        code: 'L041',
        name: 'Estudos Portugueses e Ingleses',
      },
      L086: {
        code: 'L086',
        name: 'Estudos Euro-Atl\u00e2nticos',
      },
    },
  },
  '0160': {
    code: '0160',
    name: 'Universidade dos A\u00e7ores - Faculdade de Ci\u00eancias e Tecnologia',
    courses: {
      '8083': {
        code: '8083',
        name: 'Ciclo B\u00e1sico de Medicina',
      },
      '8524': {
        code: '8524',
        name: 'Prote\u00e7\u00e3o Civil e Gest\u00e3o de Riscos',
      },
      '8571': {
        code: '8571',
        name: 'Ci\u00eanc de Engenharia-Eng Mec\u00e2nica; Eng Eletrot\u00e9cnica e de Computadores (Pre)',
      },
      '9011': {
        code: '9011',
        name: 'Biologia',
      },
      '9185': {
        code: '9185',
        name: 'Inform\u00e1tica',
      },
    },
  },
  '0170': {
    code: '0170',
    name: 'Universidade dos A\u00e7ores - Faculdade de Economia e Gest\u00e3o',
    courses: {
      '9081': {
        code: '9081',
        name: 'Economia',
      },
      '9147': {
        code: '9147',
        name: 'Gest\u00e3o',
      },
      '9254': {
        code: '9254',
        name: 'Turismo',
      },
    },
  },
  '0201': {
    code: '0201',
    name: 'Universidade do Algarve - Faculdade de Ci\u00eancias Humanas e Sociais',
    courses: {
      '8509': {
        code: '8509',
        name: 'Patrim\u00f3nio Cultural e Arqueologia',
      },
      '9204': {
        code: '9204',
        name: 'L\u00ednguas, Literaturas e Culturas',
      },
      '9219': {
        code: '9219',
        name: 'Psicologia',
      },
      '9817': {
        code: '9817',
        name: 'Artes Visuais',
      },
      '9821': {
        code: '9821',
        name: 'Ci\u00eancias da Educa\u00e7\u00e3o e da Forma\u00e7\u00e3o',
      },
      '9834': {
        code: '9834',
        name: 'L\u00ednguas e Comunica\u00e7\u00e3o',
      },
    },
  },
  '0203': {
    code: '0203',
    name: 'Universidade do Algarve - Faculdade de Ci\u00eancias e Tecnologia',
    courses: {
      '8258': {
        code: '8258',
        name: 'Arquitetura Paisagista',
      },
      '9003': {
        code: '9003',
        name: 'Agronomia',
      },
      '9011': {
        code: '9011',
        name: 'Biologia',
      },
      '9013': {
        code: '9013',
        name: 'Biologia Marinha',
      },
      '9015': {
        code: '9015',
        name: 'Bioqu\u00edmica',
      },
      '9016': {
        code: '9016',
        name: 'Biotecnologia',
      },
      '9119': {
        code: '9119',
        name: 'Engenharia Inform\u00e1tica',
      },
      '9210': {
        code: '9210',
        name: 'Matem\u00e1tica Aplicada \u00e0 Economia e \u00e0 Gest\u00e3o',
      },
      '9494': {
        code: '9494',
        name: 'Ci\u00eancias Farmac\u00eauticas',
      },
      '9540': {
        code: '9540',
        name: 'Bioengenharia',
      },
      L123: {
        code: 'L123',
        name: 'Gest\u00e3o Marinha e Costeira',
      },
    },
  },
  '0204': {
    code: '0204',
    name: 'Universidade do Algarve - Faculdade de Economia',
    courses: {
      '9081': {
        code: '9081',
        name: 'Economia',
      },
      '9152': {
        code: '9152',
        name: 'Gest\u00e3o de Empresas',
      },
      '9240': {
        code: '9240',
        name: 'Sociologia',
      },
    },
  },
  '0206': {
    code: '0206',
    name: 'Universidade do Algarve - Faculdade de Medicina e Ci\u00eancias Biom\u00e9dicas',
    courses: {
      '9351': {
        code: '9351',
        name: 'Ci\u00eancias Biom\u00e9dicas',
      },
    },
  },
  '0300': {
    code: '0300',
    name: 'Universidade de Aveiro',
    courses: {
      '9002': {
        code: '9002',
        name: 'Administra\u00e7\u00e3o P\u00fablica',
      },
      '9011': {
        code: '9011',
        name: 'Biologia',
      },
      '9012': {
        code: '9012',
        name: 'Biologia e Geologia',
      },
      '9015': {
        code: '9015',
        name: 'Bioqu\u00edmica',
      },
      '9016': {
        code: '9016',
        name: 'Biotecnologia',
      },
      '9041': {
        code: '9041',
        name: 'Ci\u00eancias do Mar',
      },
      '9069': {
        code: '9069',
        name: 'Design',
      },
      '9081': {
        code: '9081',
        name: 'Economia',
      },
      '9089': {
        code: '9089',
        name: 'Engenharia Civil',
      },
      '9096': {
        code: '9096',
        name: 'Engenharia de Materiais',
      },
      '9099': {
        code: '9099',
        name: 'Engenharia do Ambiente',
      },
      '9104': {
        code: '9104',
        name: 'Engenharia e Gest\u00e3o Industrial',
      },
      '9113': {
        code: '9113',
        name: 'Engenharia F\u00edsica',
      },
      '9119': {
        code: '9119',
        name: 'Engenharia Inform\u00e1tica',
      },
      '9123': {
        code: '9123',
        name: 'Engenharia Mec\u00e2nica',
      },
      '9125': {
        code: '9125',
        name: 'Engenharia Qu\u00edmica',
      },
      '9141': {
        code: '9141',
        name: 'F\u00edsica',
      },
      '9146': {
        code: '9146',
        name: 'Geologia',
      },
      '9147': {
        code: '9147',
        name: 'Gest\u00e3o',
      },
      '9194': {
        code: '9194',
        name: 'L\u00ednguas e Estudos Editoriais',
      },
      '9196': {
        code: '9196',
        name: 'L\u00ednguas e Rela\u00e7\u00f5es Empresariais',
      },
      '9204': {
        code: '9204',
        name: 'L\u00ednguas, Literaturas e Culturas',
      },
      '9209': {
        code: '9209',
        name: 'Matem\u00e1tica',
      },
      '9212': {
        code: '9212',
        name: 'Meteorologia, Oceanografia e Geof\u00edsica',
      },
      '9215': {
        code: '9215',
        name: 'Novas Tecnologias da Comunica\u00e7\u00e3o',
      },
      '9219': {
        code: '9219',
        name: 'Psicologia',
      },
      '9223': {
        code: '9223',
        name: 'Qu\u00edmica',
      },
      '9252': {
        code: '9252',
        name: 'Tradu\u00e7\u00e3o',
      },
      '9351': {
        code: '9351',
        name: 'Ci\u00eancias Biom\u00e9dicas',
      },
      '9455': {
        code: '9455',
        name: 'Engenharia Biom\u00e9dica',
      },
      '9853': {
        code: '9853',
        name: 'Educa\u00e7\u00e3o B\u00e1sica',
      },
      L187: {
        code: 'L187',
        name: 'Gest\u00e3o e Planeamento em Turismo',
      },
      L209: {
        code: 'L209',
        name: 'Engenharia Eletrot\u00e9cnica e de Computadores',
      },
      L217: {
        code: 'L217',
        name: 'Engenharia de Computadores e Inform\u00e1tica',
      },
      L221: {
        code: 'L221',
        name: 'Engenharia Aeroespacial',
      },
      L223: {
        code: 'L223',
        name: 'Engenharia Computacional',
      },
    },
  },
  '0400': {
    code: '0400',
    name: 'Universidade da Beira Interior',
    courses: {
      '8184': {
        code: '8184',
        name: 'Optometria e Ci\u00eancias da Vis\u00e3o',
      },
      '9015': {
        code: '9015',
        name: 'Bioqu\u00edmica',
      },
      '9016': {
        code: '9016',
        name: 'Biotecnologia',
      },
      '9020': {
        code: '9020',
        name: 'Ci\u00eancia Pol\u00edtica e Rela\u00e7\u00f5es Internacionais',
      },
      '9023': {
        code: '9023',
        name: 'Ci\u00eancias da Comunica\u00e7\u00e3o',
      },
      '9025': {
        code: '9025',
        name: 'Ci\u00eancias da Cultura',
      },
      '9048': {
        code: '9048',
        name: 'Cinema',
      },
      '9071': {
        code: '9071',
        name: 'Design de Moda',
      },
      '9074': {
        code: '9074',
        name: 'Design Industrial',
      },
      '9075': {
        code: '9075',
        name: 'Design Multim\u00e9dia',
      },
      '9081': {
        code: '9081',
        name: 'Economia',
      },
      '9089': {
        code: '9089',
        name: 'Engenharia Civil',
      },
      '9104': {
        code: '9104',
        name: 'Engenharia e Gest\u00e3o Industrial',
      },
      '9105': {
        code: '9105',
        name: 'Engenharia Eletromec\u00e2nica',
      },
      '9112': {
        code: '9112',
        name: 'Engenharia Eletrot\u00e9cnica e de Computadores',
      },
      '9119': {
        code: '9119',
        name: 'Engenharia Inform\u00e1tica',
      },
      '9147': {
        code: '9147',
        name: 'Gest\u00e3o',
      },
      '9205': {
        code: '9205',
        name: 'Marketing',
      },
      '9219': {
        code: '9219',
        name: 'Psicologia',
      },
      '9225': {
        code: '9225',
        name: 'Qu\u00edmica Industrial',
      },
      '9240': {
        code: '9240',
        name: 'Sociologia',
      },
      '9257': {
        code: '9257',
        name: 'Arquitetura',
      },
      '9351': {
        code: '9351',
        name: 'Ci\u00eancias Biom\u00e9dicas',
      },
      '9494': {
        code: '9494',
        name: 'Ci\u00eancias Farmac\u00eauticas',
      },
      '9707': {
        code: '9707',
        name: 'Ci\u00eancias do Desporto',
      },
      '9740': {
        code: '9740',
        name: 'Engenharia Aeron\u00e1utica',
      },
      '9813': {
        code: '9813',
        name: 'Medicina',
      },
      '9835': {
        code: '9835',
        name: 'Matem\u00e1tica e Aplica\u00e7\u00f5es',
      },
      '9918': {
        code: '9918',
        name: 'Estudos Portugueses e Espanh\u00f3is',
      },
      L042: {
        code: 'L042',
        name: 'Inform\u00e1tica Web',
      },
      L205: {
        code: 'L205',
        name: 'F\u00edsica e Aplica\u00e7\u00f5es',
      },
    },
  },
  '0501': {
    code: '0501',
    name: 'Universidade de Coimbra - Faculdade de Ci\u00eancias e Tecnologia',
    courses: {
      '8408': {
        code: '8408',
        name: 'Qu\u00edmica Medicinal',
      },
      '9011': {
        code: '9011',
        name: 'Biologia',
      },
      '9015': {
        code: '9015',
        name: 'Bioqu\u00edmica',
      },
      '9089': {
        code: '9089',
        name: 'Engenharia Civil',
      },
      '9099': {
        code: '9099',
        name: 'Engenharia do Ambiente',
      },
      '9104': {
        code: '9104',
        name: 'Engenharia e Gest\u00e3o Industrial',
      },
      '9113': {
        code: '9113',
        name: 'Engenharia F\u00edsica',
      },
      '9119': {
        code: '9119',
        name: 'Engenharia Inform\u00e1tica',
      },
      '9123': {
        code: '9123',
        name: 'Engenharia Mec\u00e2nica',
      },
      '9125': {
        code: '9125',
        name: 'Engenharia Qu\u00edmica',
      },
      '9141': {
        code: '9141',
        name: 'F\u00edsica',
      },
      '9146': {
        code: '9146',
        name: 'Geologia',
      },
      '9209': {
        code: '9209',
        name: 'Matem\u00e1tica',
      },
      '9223': {
        code: '9223',
        name: 'Qu\u00edmica',
      },
      '9257': {
        code: '9257',
        name: 'Arquitetura',
      },
      '9448': {
        code: '9448',
        name: 'Antropologia',
      },
      '9455': {
        code: '9455',
        name: 'Engenharia Biom\u00e9dica',
      },
      '9891': {
        code: '9891',
        name: 'Design e Multim\u00e9dia',
      },
      L192: {
        code: 'L192',
        name: 'Engenharia e Ci\u00eancia de Dados',
      },
      L209: {
        code: 'L209',
        name: 'Engenharia Eletrot\u00e9cnica e de Computadores',
      },
    },
  },
  '0502': {
    code: '0502',
    name: 'Universidade de Coimbra - Faculdade de Direito',
    courses: {
      '8067': {
        code: '8067',
        name: 'Administra\u00e7\u00e3o P\u00fablico-Privada',
      },
      '9078': {
        code: '9078',
        name: 'Direito',
      },
    },
  },
  '0503': {
    code: '0503',
    name: 'Universidade de Coimbra - Faculdade de Economia',
    courses: {
      '9081': {
        code: '9081',
        name: 'Economia',
      },
      '9147': {
        code: '9147',
        name: 'Gest\u00e3o',
      },
      '9229': {
        code: '9229',
        name: 'Rela\u00e7\u00f5es Internacionais',
      },
      '9240': {
        code: '9240',
        name: 'Sociologia',
      },
    },
  },
  '0504': {
    code: '0504',
    name: 'Universidade de Coimbra - Faculdade de Farm\u00e1cia',
    courses: {
      '9494': {
        code: '9494',
        name: 'Ci\u00eancias Farmac\u00eauticas',
      },
      '9819': {
        code: '9819',
        name: 'Ci\u00eancias Bioanal\u00edticas',
      },
      '9832': {
        code: '9832',
        name: 'Farm\u00e1cia Biom\u00e9dica',
      },
    },
  },
  '0505': {
    code: '0505',
    name: 'Universidade de Coimbra - Faculdade de Letras',
    courses: {
      '8393': {
        code: '8393',
        name: 'Portugu\u00eas',
      },
      '9006': {
        code: '9006',
        name: 'Arqueologia',
      },
      '9132': {
        code: '9132',
        name: 'Estudos Art\u00edsticos',
      },
      '9133': {
        code: '9133',
        name: 'Estudos Cl\u00e1ssicos',
      },
      '9135': {
        code: '9135',
        name: 'Estudos Europeus',
      },
      '9139': {
        code: '9139',
        name: 'Filosofia',
      },
      '9143': {
        code: '9143',
        name: 'Geografia',
      },
      '9181': {
        code: '9181',
        name: 'Hist\u00f3ria',
      },
      '9182': {
        code: '9182',
        name: 'Hist\u00f3ria da Arte',
      },
      '9694': {
        code: '9694',
        name: 'Ci\u00eancia da Informa\u00e7\u00e3o',
      },
      '9773': {
        code: '9773',
        name: 'Jornalismo e Comunica\u00e7\u00e3o',
      },
      '9779': {
        code: '9779',
        name: 'L\u00ednguas Modernas',
      },
      L109: {
        code: 'L109',
        name: 'Turismo, Territ\u00f3rio e Patrim\u00f3nios',
      },
    },
  },
  '0506': {
    code: '0506',
    name: 'Universidade de Coimbra - Faculdade de Medicina',
    courses: {
      '9548': {
        code: '9548',
        name: 'Medicina Dent\u00e1ria',
      },
      '9813': {
        code: '9813',
        name: 'Medicina',
      },
    },
  },
  '0507': {
    code: '0507',
    name: 'Universidade de Coimbra - Faculdade de Psicologia e de Ci\u00eancias da Educa\u00e7\u00e3o',
    courses: {
      '9026': {
        code: '9026',
        name: 'Ci\u00eancias da Educa\u00e7\u00e3o',
      },
      '9219': {
        code: '9219',
        name: 'Psicologia',
      },
      '9238': {
        code: '9238',
        name: 'Servi\u00e7o Social',
      },
    },
  },
  '0508': {
    code: '0508',
    name: 'Universidade de Coimbra - Faculdade de Ci\u00eancias do Desporto e Educa\u00e7\u00e3o F\u00edsica',
    courses: {
      '9707': {
        code: '9707',
        name: 'Ci\u00eancias do Desporto',
      },
    },
  },
  '0602': {
    code: '0602',
    name: 'Universidade de \u00c9vora - Escola de Ci\u00eancias e Tecnologia',
    courses: {
      '8262': {
        code: '8262',
        name: 'Biologia Humana',
      },
      '9003': {
        code: '9003',
        name: 'Agronomia',
      },
      '9011': {
        code: '9011',
        name: 'Biologia',
      },
      '9015': {
        code: '9015',
        name: 'Bioqu\u00edmica',
      },
      '9016': {
        code: '9016',
        name: 'Biotecnologia',
      },
      '9104': {
        code: '9104',
        name: 'Engenharia e Gest\u00e3o Industrial',
      },
      '9119': {
        code: '9119',
        name: 'Engenharia Inform\u00e1tica',
      },
      '9143': {
        code: '9143',
        name: 'Geografia',
      },
      '9210': {
        code: '9210',
        name: 'Matem\u00e1tica Aplicada \u00e0 Economia e \u00e0 Gest\u00e3o',
      },
      '9707': {
        code: '9707',
        name: 'Ci\u00eancias do Desporto',
      },
      '9751': {
        code: '9751',
        name: 'Engenharia Mecatr\u00f3nica',
      },
      '9752': {
        code: '9752',
        name: 'Enologia',
      },
      '9818': {
        code: '9818',
        name: 'Ci\u00eancia e Tecnologia Animal',
      },
      '9841': {
        code: '9841',
        name: 'Reabilita\u00e7\u00e3o Psicomotora',
      },
      '9847': {
        code: '9847',
        name: 'Medicina Veterin\u00e1ria',
      },
      '9910': {
        code: '9910',
        name: 'Engenharia de Energias Renov\u00e1veis',
      },
      L090: {
        code: 'L090',
        name: 'Ecologia e Ambiente',
      },
    },
  },
  '0603': {
    code: '0603',
    name: 'Universidade de \u00c9vora - Escola de Artes',
    courses: {
      '9069': {
        code: '9069',
        name: 'Design',
      },
      '9243': {
        code: '9243',
        name: 'Teatro',
      },
      '9257': {
        code: '9257',
        name: 'Arquitetura',
      },
      '9347': {
        code: '9347',
        name: 'Artes Pl\u00e1sticas e Multim\u00e9dia',
      },
    },
  },
  '0604': {
    code: '0604',
    name: 'Universidade de \u00c9vora - Escola de Ci\u00eancias Sociais',
    courses: {
      '8251': {
        code: '8251',
        name: 'Hist\u00f3ria e Arqueologia',
      },
      '9026': {
        code: '9026',
        name: 'Ci\u00eancias da Educa\u00e7\u00e3o',
      },
      '9081': {
        code: '9081',
        name: 'Economia',
      },
      '9147': {
        code: '9147',
        name: 'Gest\u00e3o',
      },
      '9219': {
        code: '9219',
        name: 'Psicologia',
      },
      '9229': {
        code: '9229',
        name: 'Rela\u00e7\u00f5es Internacionais',
      },
      '9240': {
        code: '9240',
        name: 'Sociologia',
      },
      '9254': {
        code: '9254',
        name: 'Turismo',
      },
      '9787': {
        code: '9787',
        name: 'Patrim\u00f3nio Cultural',
      },
      '9853': {
        code: '9853',
        name: 'Educa\u00e7\u00e3o B\u00e1sica',
      },
      L047: {
        code: 'L047',
        name: 'L\u00ednguas e Literaturas',
      },
      L173: {
        code: 'L173',
        name: 'Estudos de Filosofia e de Cultura Contempor\u00e2nea',
      },
    },
  },
  '0901': {
    code: '0901',
    name: 'Universidade Nova de Lisboa - Faculdade de Ci\u00eancias M\u00e9dicas',
    courses: {
      '9554': {
        code: '9554',
        name: 'Ci\u00eancias da Nutri\u00e7\u00e3o',
      },
      '9813': {
        code: '9813',
        name: 'Medicina',
      },
    },
  },
  '0902': {
    code: '0902',
    name: 'Universidade Nova de Lisboa - Faculdade de Ci\u00eancias Sociais e Humanas',
    courses: {
      '8109': {
        code: '8109',
        name: 'Sociologia (regime p\u00f3s-laboral)',
      },
      '9006': {
        code: '9006',
        name: 'Arqueologia',
      },
      '9020': {
        code: '9020',
        name: 'Ci\u00eancia Pol\u00edtica e Rela\u00e7\u00f5es Internacionais',
      },
      '9023': {
        code: '9023',
        name: 'Ci\u00eancias da Comunica\u00e7\u00e3o',
      },
      '9040': {
        code: '9040',
        name: 'Ci\u00eancias da Linguagem',
      },
      '9046': {
        code: '9046',
        name: 'Ci\u00eancias Musicais',
      },
      '9139': {
        code: '9139',
        name: 'Filosofia',
      },
      '9145': {
        code: '9145',
        name: 'Geografia e Planeamento Regional',
      },
      '9181': {
        code: '9181',
        name: 'Hist\u00f3ria',
      },
      '9182': {
        code: '9182',
        name: 'Hist\u00f3ria da Arte',
      },
      '9204': {
        code: '9204',
        name: 'L\u00ednguas, Literaturas e Culturas',
      },
      '9240': {
        code: '9240',
        name: 'Sociologia',
      },
      '9252': {
        code: '9252',
        name: 'Tradu\u00e7\u00e3o',
      },
      '9448': {
        code: '9448',
        name: 'Antropologia',
      },
      '9917': {
        code: '9917',
        name: 'Estudos Portugueses',
      },
    },
  },
  '0903': {
    code: '0903',
    name: 'Universidade Nova de Lisboa - Faculdade de Ci\u00eancias e Tecnologia',
    courses: {
      '8036': {
        code: '8036',
        name: 'Conserva\u00e7\u00e3o - Restauro',
      },
      '9015': {
        code: '9015',
        name: 'Bioqu\u00edmica',
      },
      '9089': {
        code: '9089',
        name: 'Engenharia Civil',
      },
      '9096': {
        code: '9096',
        name: 'Engenharia de Materiais',
      },
      '9099': {
        code: '9099',
        name: 'Engenharia do Ambiente',
      },
      '9104': {
        code: '9104',
        name: 'Engenharia e Gest\u00e3o Industrial',
      },
      '9113': {
        code: '9113',
        name: 'Engenharia F\u00edsica',
      },
      '9116': {
        code: '9116',
        name: 'Engenharia Geol\u00f3gica',
      },
      '9119': {
        code: '9119',
        name: 'Engenharia Inform\u00e1tica',
      },
      '9123': {
        code: '9123',
        name: 'Engenharia Mec\u00e2nica',
      },
      '9126': {
        code: '9126',
        name: 'Engenharia Qu\u00edmica e Biol\u00f3gica',
      },
      '9209': {
        code: '9209',
        name: 'Matem\u00e1tica',
      },
      '9224': {
        code: '9224',
        name: 'Qu\u00edmica Aplicada',
      },
      '9348': {
        code: '9348',
        name: 'Biologia Celular e Molecular',
      },
      '9455': {
        code: '9455',
        name: 'Engenharia Biom\u00e9dica',
      },
      L167: {
        code: 'L167',
        name: 'Matem\u00e1tica Aplicada \u00e0 Gest\u00e3o do Risco',
      },
      L209: {
        code: 'L209',
        name: 'Engenharia Eletrot\u00e9cnica e de Computadores',
      },
      L231: {
        code: 'L231',
        name: 'Engenharia de Micro e Nanotecnologias',
      },
    },
  },
  '0904': {
    code: '0904',
    name: 'Universidade Nova de Lisboa - Faculdade de Economia',
    courses: {
      '9081': {
        code: '9081',
        name: 'Economia',
      },
      '9147': {
        code: '9147',
        name: 'Gest\u00e3o',
      },
    },
  },
  '0906': {
    code: '0906',
    name: 'Universidade Nova de Lisboa - Instituto Superior de Estat\u00edstica e Gest\u00e3o de Informa\u00e7\u00e3o',
    courses: {
      '8259': {
        code: '8259',
        name: 'Sistemas e Tecnologias de Informa\u00e7\u00e3o',
      },
      '9155': {
        code: '9155',
        name: 'Gest\u00e3o de Informa\u00e7\u00e3o',
      },
      L188: {
        code: 'L188',
        name: 'Ci\u00eancia de Dados',
      },
    },
  },
  '0911': {
    code: '0911',
    name: 'Universidade Nova de Lisboa - Faculdade de Direito',
    courses: {
      '9078': {
        code: '9078',
        name: 'Direito',
      },
    },
  },
  '1000': {
    code: '1000',
    name: 'Universidade do Minho',
    courses: {
      '8183': {
        code: '8183',
        name: 'Geografia e Planeamento',
      },
      '8184': {
        code: '8184',
        name: 'Optometria e Ci\u00eancias da Vis\u00e3o',
      },
      '8358': {
        code: '8358',
        name: 'Direito (regime p\u00f3s-laboral)',
      },
      '8427': {
        code: '8427',
        name: 'Educa\u00e7\u00e3o (regime p\u00f3s-laboral)',
      },
      '8494': {
        code: '8494',
        name: 'Design de Produto',
      },
      '9002': {
        code: '9002',
        name: 'Administra\u00e7\u00e3o P\u00fablica',
      },
      '9006': {
        code: '9006',
        name: 'Arqueologia',
      },
      '9012': {
        code: '9012',
        name: 'Biologia e Geologia',
      },
      '9015': {
        code: '9015',
        name: 'Bioqu\u00edmica',
      },
      '9019': {
        code: '9019',
        name: 'Ci\u00eancia Pol\u00edtica',
      },
      '9023': {
        code: '9023',
        name: 'Ci\u00eancias da Comunica\u00e7\u00e3o',
      },
      '9056': {
        code: '9056',
        name: 'Contabilidade',
      },
      '9078': {
        code: '9078',
        name: 'Direito',
      },
      '9081': {
        code: '9081',
        name: 'Economia',
      },
      '9089': {
        code: '9089',
        name: 'Engenharia Civil',
      },
      '9096': {
        code: '9096',
        name: 'Engenharia de Materiais',
      },
      '9098': {
        code: '9098',
        name: 'Engenharia de Telecomunica\u00e7\u00f5es e Inform\u00e1tica',
      },
      '9104': {
        code: '9104',
        name: 'Engenharia e Gest\u00e3o Industrial',
      },
      '9113': {
        code: '9113',
        name: 'Engenharia F\u00edsica',
      },
      '9119': {
        code: '9119',
        name: 'Engenharia Inform\u00e1tica',
      },
      '9123': {
        code: '9123',
        name: 'Engenharia Mec\u00e2nica',
      },
      '9126': {
        code: '9126',
        name: 'Engenharia Qu\u00edmica e Biol\u00f3gica',
      },
      '9127': {
        code: '9127',
        name: 'Engenharia T\u00eaxtil',
      },
      '9134': {
        code: '9134',
        name: 'Estudos Culturais',
      },
      '9139': {
        code: '9139',
        name: 'Filosofia',
      },
      '9141': {
        code: '9141',
        name: 'F\u00edsica',
      },
      '9146': {
        code: '9146',
        name: 'Geologia',
      },
      '9147': {
        code: '9147',
        name: 'Gest\u00e3o',
      },
      '9181': {
        code: '9181',
        name: 'Hist\u00f3ria',
      },
      '9192': {
        code: '9192',
        name: 'L\u00ednguas Aplicadas',
      },
      '9195': {
        code: '9195',
        name: 'L\u00ednguas e Literaturas Europeias',
      },
      '9205': {
        code: '9205',
        name: 'Marketing',
      },
      '9209': {
        code: '9209',
        name: 'Matem\u00e1tica',
      },
      '9219': {
        code: '9219',
        name: 'Psicologia',
      },
      '9223': {
        code: '9223',
        name: 'Qu\u00edmica',
      },
      '9229': {
        code: '9229',
        name: 'Rela\u00e7\u00f5es Internacionais',
      },
      '9240': {
        code: '9240',
        name: 'Sociologia',
      },
      '9243': {
        code: '9243',
        name: 'Teatro',
      },
      '9257': {
        code: '9257',
        name: 'Arquitetura',
      },
      '9353': {
        code: '9353',
        name: 'Educa\u00e7\u00e3o',
      },
      '9379': {
        code: '9379',
        name: 'Ci\u00eancias do Ambiente',
      },
      '9381': {
        code: '9381',
        name: 'Estat\u00edstica Aplicada',
      },
      '9397': {
        code: '9397',
        name: 'Ci\u00eancias da Computa\u00e7\u00e3o',
      },
      '9455': {
        code: '9455',
        name: 'Engenharia Biom\u00e9dica',
      },
      '9499': {
        code: '9499',
        name: 'Design e Marketing de Moda',
      },
      '9688': {
        code: '9688',
        name: 'Biologia Aplicada',
      },
      '9785': {
        code: '9785',
        name: 'Neg\u00f3cios Internacionais',
      },
      '9813': {
        code: '9813',
        name: 'Medicina',
      },
      '9817': {
        code: '9817',
        name: 'Artes Visuais',
      },
      '9853': {
        code: '9853',
        name: 'Educa\u00e7\u00e3o B\u00e1sica',
      },
      '9917': {
        code: '9917',
        name: 'Estudos Portugueses',
      },
      L078: {
        code: 'L078',
        name: 'Criminologia e Justi\u00e7a Criminal',
      },
      L112: {
        code: 'L112',
        name: 'Prote\u00e7\u00e3o Civil e Gest\u00e3o do Territ\u00f3rio',
      },
      L147: {
        code: 'L147',
        name: 'Estudos Orientais: Estudos Chineses e Japoneses',
      },
      L215: {
        code: 'L215',
        name: 'Engenharia e Gest\u00e3o de Sistemas de Informa\u00e7\u00e3o',
      },
      L218: {
        code: 'L218',
        name: 'Engenharia Eletr\u00f3nica Industrial e Computadores',
      },
      L229: {
        code: 'L229',
        name: 'Engenharia de Pol\u00edmeros',
      },
    },
  },
  '1101': {
    code: '1101',
    name: 'Universidade do Porto - Faculdade de Ci\u00eancias da Nutri\u00e7\u00e3o e da Alimenta\u00e7\u00e3o',
    courses: {
      '9554': {
        code: '9554',
        name: 'Ci\u00eancias da Nutri\u00e7\u00e3o',
      },
    },
  },
  '1102': {
    code: '1102',
    name: 'Universidade do Porto - Faculdade de Arquitetura',
    courses: {
      '9257': {
        code: '9257',
        name: 'Arquitetura',
      },
    },
  },
  '1103': {
    code: '1103',
    name: 'Universidade do Porto - Faculdade de Ci\u00eancias',
    courses: {
      '8258': {
        code: '8258',
        name: 'Arquitetura Paisagista',
      },
      '9011': {
        code: '9011',
        name: 'Biologia',
      },
      '9015': {
        code: '9015',
        name: 'Bioqu\u00edmica',
      },
      '9113': {
        code: '9113',
        name: 'Engenharia F\u00edsica',
      },
      '9141': {
        code: '9141',
        name: 'F\u00edsica',
      },
      '9146': {
        code: '9146',
        name: 'Geologia',
      },
      '9209': {
        code: '9209',
        name: 'Matem\u00e1tica',
      },
      '9223': {
        code: '9223',
        name: 'Qu\u00edmica',
      },
      '9696': {
        code: '9696',
        name: 'Ci\u00eancia de Computadores',
      },
      '9709': {
        code: '9709',
        name: 'Ci\u00eancias e Tecnologia do Ambiente',
      },
      L096: {
        code: 'L096',
        name: 'Engenharia Geoespacial',
      },
      L227: {
        code: 'L227',
        name: 'Intelig\u00eancia Artificial e Ci\u00eancia de Dados',
      },
    },
  },
  '1104': {
    code: '1104',
    name: 'Universidade do Porto - Faculdade de Economia',
    courses: {
      '9081': {
        code: '9081',
        name: 'Economia',
      },
      '9147': {
        code: '9147',
        name: 'Gest\u00e3o',
      },
    },
  },
  '1105': {
    code: '1105',
    name: 'Universidade do Porto - Faculdade de Engenharia',
    courses: {
      '9089': {
        code: '9089',
        name: 'Engenharia Civil',
      },
      '9096': {
        code: '9096',
        name: 'Engenharia de Materiais',
      },
      '9099': {
        code: '9099',
        name: 'Engenharia do Ambiente',
      },
      '9104': {
        code: '9104',
        name: 'Engenharia e Gest\u00e3o Industrial',
      },
      '9123': {
        code: '9123',
        name: 'Engenharia Mec\u00e2nica',
      },
      '9125': {
        code: '9125',
        name: 'Engenharia Qu\u00edmica',
      },
      '9540': {
        code: '9540',
        name: 'Bioengenharia',
      },
      L209: {
        code: 'L209',
        name: 'Engenharia Eletrot\u00e9cnica e de Computadores',
      },
      L224: {
        code: 'L224',
        name: 'Engenharia Inform\u00e1tica e Computa\u00e7\u00e3o',
      },
      L236: {
        code: 'L236',
        name: 'Engenharia de Minas e Geo-Ambiente',
      },
    },
  },
  '1106': {
    code: '1106',
    name: 'Universidade do Porto - Faculdade de Farm\u00e1cia',
    courses: {
      '9494': {
        code: '9494',
        name: 'Ci\u00eancias Farmac\u00eauticas',
      },
    },
  },
  '1107': {
    code: '1107',
    name: 'Universidade do Porto - Faculdade de Letras',
    courses: {
      '9006': {
        code: '9006',
        name: 'Arqueologia',
      },
      '9040': {
        code: '9040',
        name: 'Ci\u00eancias da Linguagem',
      },
      '9139': {
        code: '9139',
        name: 'Filosofia',
      },
      '9143': {
        code: '9143',
        name: 'Geografia',
      },
      '9181': {
        code: '9181',
        name: 'Hist\u00f3ria',
      },
      '9182': {
        code: '9182',
        name: 'Hist\u00f3ria da Arte',
      },
      '9192': {
        code: '9192',
        name: 'L\u00ednguas Aplicadas',
      },
      '9197': {
        code: '9197',
        name: 'L\u00ednguas e Rela\u00e7\u00f5es Internacionais',
      },
      '9204': {
        code: '9204',
        name: 'L\u00ednguas, Literaturas e Culturas',
      },
      '9240': {
        code: '9240',
        name: 'Sociologia',
      },
      '9694': {
        code: '9694',
        name: 'Ci\u00eancia da Informa\u00e7\u00e3o',
      },
      '9701': {
        code: '9701',
        name: 'Ci\u00eancias da Comunica\u00e7\u00e3o: Jornalismo, Assessoria, Multim\u00e9dia',
      },
      '9917': {
        code: '9917',
        name: 'Estudos Portugueses',
      },
    },
  },
  '1108': {
    code: '1108',
    name: 'Universidade do Porto - Faculdade de Medicina',
    courses: {
      '9813': {
        code: '9813',
        name: 'Medicina',
      },
    },
  },
  '1109': {
    code: '1109',
    name: 'Universidade do Porto - Faculdade de Psicologia e de Ci\u00eancias da Educa\u00e7\u00e3o',
    courses: {
      '9026': {
        code: '9026',
        name: 'Ci\u00eancias da Educa\u00e7\u00e3o',
      },
      '9219': {
        code: '9219',
        name: 'Psicologia',
      },
    },
  },
  '1110': {
    code: '1110',
    name: 'Universidade do Porto - Instituto de Ci\u00eancias Biom\u00e9dicas Abel Salazar',
    courses: {
      '9708': {
        code: '9708',
        name: 'Ci\u00eancias do Meio Aqu\u00e1tico',
      },
      '9813': {
        code: '9813',
        name: 'Medicina',
      },
      '9847': {
        code: '9847',
        name: 'Medicina Veterin\u00e1ria',
      },
    },
  },
  '1111': {
    code: '1111',
    name: 'Universidade do Porto - Faculdade de Desporto',
    courses: {
      '9707': {
        code: '9707',
        name: 'Ci\u00eancias do Desporto',
      },
    },
  },
  '1113': {
    code: '1113',
    name: 'Universidade do Porto - Faculdade de Medicina Dent\u00e1ria',
    courses: {
      '9548': {
        code: '9548',
        name: 'Medicina Dent\u00e1ria',
      },
    },
  },
  '1114': {
    code: '1114',
    name: 'Universidade do Porto - Faculdade de Direito',
    courses: {
      '9066': {
        code: '9066',
        name: 'Criminologia',
      },
      '9078': {
        code: '9078',
        name: 'Direito',
      },
    },
  },
  '1201': {
    code: '1201',
    name: 'Universidade de Tr\u00e1s-os-Montes e Alto Douro - Escola de Ci\u00eancias Agr\u00e1rias e Veterin\u00e1rias',
    courses: {
      '9086': {
        code: '9086',
        name: 'Engenharia Agron\u00f3mica',
      },
      '9129': {
        code: '9129',
        name: 'Engenharia Zoot\u00e9cnica',
      },
      '9752': {
        code: '9752',
        name: 'Enologia',
      },
      '9847': {
        code: '9847',
        name: 'Medicina Veterin\u00e1ria',
      },
      L237: {
        code: 'L237',
        name: 'Engenharia e Biotecnologia Florestal',
      },
    },
  },
  '1202': {
    code: '1202',
    name: 'Universidade de Tr\u00e1s-os-Montes e Alto Douro - Escola de Ci\u00eancias Humanas e Sociais',
    courses: {
      '9005': {
        code: '9005',
        name: 'Anima\u00e7\u00e3o Sociocultural',
      },
      '9023': {
        code: '9023',
        name: 'Ci\u00eancias da Comunica\u00e7\u00e3o',
      },
      '9081': {
        code: '9081',
        name: 'Economia',
      },
      '9147': {
        code: '9147',
        name: 'Gest\u00e3o',
      },
      '9196': {
        code: '9196',
        name: 'L\u00ednguas e Rela\u00e7\u00f5es Empresariais',
      },
      '9204': {
        code: '9204',
        name: 'L\u00ednguas, Literaturas e Culturas',
      },
      '9219': {
        code: '9219',
        name: 'Psicologia',
      },
      '9238': {
        code: '9238',
        name: 'Servi\u00e7o Social',
      },
      '9254': {
        code: '9254',
        name: 'Turismo',
      },
      '9803': {
        code: '9803',
        name: 'Teatro e Artes Performativas',
      },
      '9853': {
        code: '9853',
        name: 'Educa\u00e7\u00e3o B\u00e1sica',
      },
    },
  },
  '1203': {
    code: '1203',
    name: 'Universidade de Tr\u00e1s-os-Montes e Alto Douro - Escola de Ci\u00eancias e Tecnologia',
    courses: {
      '9052': {
        code: '9052',
        name: 'Comunica\u00e7\u00e3o e Multim\u00e9dia',
      },
      '9089': {
        code: '9089',
        name: 'Engenharia Civil',
      },
      '9104': {
        code: '9104',
        name: 'Engenharia e Gest\u00e3o Industrial',
      },
      '9119': {
        code: '9119',
        name: 'Engenharia Inform\u00e1tica',
      },
      '9123': {
        code: '9123',
        name: 'Engenharia Mec\u00e2nica',
      },
      '9455': {
        code: '9455',
        name: 'Engenharia Biom\u00e9dica',
      },
      L193: {
        code: 'L193',
        name: 'Matem\u00e1tica Aplicada e Ci\u00eancia de Dados',
      },
      L209: {
        code: 'L209',
        name: 'Engenharia Eletrot\u00e9cnica e de Computadores',
      },
    },
  },
  '1204': {
    code: '1204',
    name: 'Universidade de Tr\u00e1s-os-Montes e Alto Douro - Escola de Ci\u00eancias da Vida e do Ambiente',
    courses: {
      '9011': {
        code: '9011',
        name: 'Biologia',
      },
      '9012': {
        code: '9012',
        name: 'Biologia e Geologia',
      },
      '9015': {
        code: '9015',
        name: 'Bioqu\u00edmica',
      },
      '9379': {
        code: '9379',
        name: 'Ci\u00eancias do Ambiente',
      },
      '9540': {
        code: '9540',
        name: 'Bioengenharia',
      },
      '9554': {
        code: '9554',
        name: 'Ci\u00eancias da Nutri\u00e7\u00e3o',
      },
      '9707': {
        code: '9707',
        name: 'Ci\u00eancias do Desporto',
      },
      '9761': {
        code: '9761',
        name: 'Gen\u00e9tica e Biotecnologia',
      },
      '9841': {
        code: '9841',
        name: 'Reabilita\u00e7\u00e3o Psicomotora',
      },
    },
  },
  '1306': {
    code: '1306',
    name: 'Universidade da Madeira - Faculdade de Artes e Humanidades',
    courses: {
      '9069': {
        code: '9069',
        name: 'Design',
      },
      '9196': {
        code: '9196',
        name: 'L\u00ednguas e Rela\u00e7\u00f5es Empresariais',
      },
      '9219': {
        code: '9219',
        name: 'Psicologia',
      },
      '9720': {
        code: '9720',
        name: 'Comunica\u00e7\u00e3o, Cultura e Organiza\u00e7\u00f5es',
      },
      '9817': {
        code: '9817',
        name: 'Artes Visuais',
      },
      L150: {
        code: 'L150',
        name: 'Estudos de Cultura',
      },
    },
  },
  '1307': {
    code: '1307',
    name: 'Universidade da Madeira - Faculdade de Ci\u00eancias Exatas e da Engenharia',
    courses: {
      '9015': {
        code: '9015',
        name: 'Bioqu\u00edmica',
      },
      '9089': {
        code: '9089',
        name: 'Engenharia Civil',
      },
      '9107': {
        code: '9107',
        name: 'Engenharia Electr\u00f3nica e Telecomunica\u00e7\u00f5es',
      },
      '9119': {
        code: '9119',
        name: 'Engenharia Inform\u00e1tica',
      },
      '9209': {
        code: '9209',
        name: 'Matem\u00e1tica',
      },
      L208: {
        code: 'L208',
        name: 'Engenharia de Computadores',
      },
    },
  },
  '1308': {
    code: '1308',
    name: 'Universidade da Madeira - Faculdade de Ci\u00eancias Sociais',
    courses: {
      '9026': {
        code: '9026',
        name: 'Ci\u00eancias da Educa\u00e7\u00e3o',
      },
      '9081': {
        code: '9081',
        name: 'Economia',
      },
      '9147': {
        code: '9147',
        name: 'Gest\u00e3o',
      },
      '9736': {
        code: '9736',
        name: 'Educa\u00e7\u00e3o F\u00edsica e Desporto',
      },
      '9853': {
        code: '9853',
        name: 'Educa\u00e7\u00e3o B\u00e1sica',
      },
    },
  },
  '1309': {
    code: '1309',
    name: 'Universidade da Madeira - Faculdade de Ci\u00eancias da Vida',
    courses: {
      '8083': {
        code: '8083',
        name: 'Ciclo B\u00e1sico de Medicina',
      },
      '9011': {
        code: '9011',
        name: 'Biologia',
      },
    },
  },
  '1501': {
    code: '1501',
    name: 'Universidade de Lisboa - Faculdade de Arquitetura',
    courses: {
      '9069': {
        code: '9069',
        name: 'Design',
      },
      '9071': {
        code: '9071',
        name: 'Design de Moda',
      },
      '9257': {
        code: '9257',
        name: 'Arquitetura',
      },
      G008: {
        code: 'G008',
        name: 'Arquitectura, \u00e1rea de especializ. em Interiores e Reabilita\u00e7\u00e3o do Edificado',
      },
    },
  },
  '1502': {
    code: '1502',
    name: 'Universidade de Lisboa - Faculdade de Belas-Artes',
    courses: {
      '8399': {
        code: '8399',
        name: 'Desenho',
      },
      '9070': {
        code: '9070',
        name: 'Design de Comunica\u00e7\u00e3o',
      },
      '9072': {
        code: '9072',
        name: 'Design de Equipamento',
      },
      '9754': {
        code: '9754',
        name: 'Escultura',
      },
      '9790': {
        code: '9790',
        name: 'Pintura',
      },
      '9904': {
        code: '9904',
        name: 'Arte Multim\u00e9dia',
      },
      L010: {
        code: 'L010',
        name: 'Ci\u00eancias da Arte e do Patrim\u00f3nio',
      },
    },
  },
  '1503': {
    code: '1503',
    name: 'Universidade de Lisboa - Faculdade de Ci\u00eancias',
    courses: {
      '9011': {
        code: '9011',
        name: 'Biologia',
      },
      '9015': {
        code: '9015',
        name: 'Bioqu\u00edmica',
      },
      '9113': {
        code: '9113',
        name: 'Engenharia F\u00edsica',
      },
      '9119': {
        code: '9119',
        name: 'Engenharia Inform\u00e1tica',
      },
      '9141': {
        code: '9141',
        name: 'F\u00edsica',
      },
      '9146': {
        code: '9146',
        name: 'Geologia',
      },
      '9209': {
        code: '9209',
        name: 'Matem\u00e1tica',
      },
      '9212': {
        code: '9212',
        name: 'Meteorologia, Oceanografia e Geof\u00edsica',
      },
      '9223': {
        code: '9223',
        name: 'Qu\u00edmica',
      },
      '9226': {
        code: '9226',
        name: 'Qu\u00edmica Tecnol\u00f3gica',
      },
      '9381': {
        code: '9381',
        name: 'Estat\u00edstica Aplicada',
      },
      '9385': {
        code: '9385',
        name: 'Matem\u00e1tica Aplicada',
      },
      L079: {
        code: 'L079',
        name: 'Tecnologias de Informa\u00e7\u00e3o',
      },
      L096: {
        code: 'L096',
        name: 'Engenharia Geoespacial',
      },
      L204: {
        code: 'L204',
        name: 'Engenharia Biom\u00e9dica e Biof\u00edsica',
      },
      L214: {
        code: 'L214',
        name: 'Engenharia da Energia e Ambiente',
      },
    },
  },
  '1504': {
    code: '1504',
    name: 'Universidade de Lisboa - Faculdade de Direito',
    courses: {
      '8358': {
        code: '8358',
        name: 'Direito (regime p\u00f3s-laboral)',
      },
      '9078': {
        code: '9078',
        name: 'Direito',
      },
    },
  },
  '1505': {
    code: '1505',
    name: 'Universidade de Lisboa - Faculdade de Farm\u00e1cia',
    courses: {
      '9494': {
        code: '9494',
        name: 'Ci\u00eancias Farmac\u00eauticas',
      },
    },
  },
  '1506': {
    code: '1506',
    name: 'Universidade de Lisboa - Faculdade de Letras',
    courses: {
      '8104': {
        code: '8104',
        name: 'Estudos Art\u00edsticos, variante de Artes do Espet\u00e1culo',
      },
      '8413': {
        code: '8413',
        name: 'Artes e Humanidades',
      },
      '8458': {
        code: '8458',
        name: 'Estudos Gerais',
      },
      '9006': {
        code: '9006',
        name: 'Arqueologia',
      },
      '9040': {
        code: '9040',
        name: 'Ci\u00eancias da Linguagem',
      },
      '9131': {
        code: '9131',
        name: 'Estudos Africanos',
      },
      '9133': {
        code: '9133',
        name: 'Estudos Cl\u00e1ssicos',
      },
      '9135': {
        code: '9135',
        name: 'Estudos Europeus',
      },
      '9139': {
        code: '9139',
        name: 'Filosofia',
      },
      '9181': {
        code: '9181',
        name: 'Hist\u00f3ria',
      },
      '9182': {
        code: '9182',
        name: 'Hist\u00f3ria da Arte',
      },
      '9204': {
        code: '9204',
        name: 'L\u00ednguas, Literaturas e Culturas',
      },
      '9252': {
        code: '9252',
        name: 'Tradu\u00e7\u00e3o',
      },
      '9914': {
        code: '9914',
        name: 'Estudos Asi\u00e1ticos',
      },
      '9917': {
        code: '9917',
        name: 'Estudos Portugueses',
      },
      L097: {
        code: 'L097',
        name: 'Estudos Comparatistas',
      },
      L145: {
        code: 'L145',
        name: 'Estudos de Cultura e Comunica\u00e7\u00e3o',
      },
    },
  },
  '1507': {
    code: '1507',
    name: 'Universidade de Lisboa - Faculdade de Medicina',
    courses: {
      '9554': {
        code: '9554',
        name: 'Ci\u00eancias da Nutri\u00e7\u00e3o',
      },
      '9813': {
        code: '9813',
        name: 'Medicina',
      },
    },
  },
  '1508': {
    code: '1508',
    name: 'Universidade de Lisboa - Faculdade de Medicina Dent\u00e1ria',
    courses: {
      '9548': {
        code: '9548',
        name: 'Medicina Dent\u00e1ria',
      },
      '9556': {
        code: '9556',
        name: 'Higiene Oral',
      },
      '9791': {
        code: '9791',
        name: 'Pr\u00f3tese Dent\u00e1ria',
      },
    },
  },
  '1509': {
    code: '1509',
    name: 'Universidade de Lisboa - Faculdade de Medicina Veterin\u00e1ria',
    courses: {
      '9847': {
        code: '9847',
        name: 'Medicina Veterin\u00e1ria',
      },
    },
  },
  '1510': {
    code: '1510',
    name: 'Universidade de Lisboa - Faculdade de Motricidade Humana',
    courses: {
      '9068': {
        code: '9068',
        name: 'Dan\u00e7a',
      },
      '9162': {
        code: '9162',
        name: 'Gest\u00e3o do Desporto',
      },
      '9707': {
        code: '9707',
        name: 'Ci\u00eancias do Desporto',
      },
      '9841': {
        code: '9841',
        name: 'Reabilita\u00e7\u00e3o Psicomotora',
      },
    },
  },
  '1511': {
    code: '1511',
    name: 'Universidade de Lisboa - Faculdade de Psicologia',
    courses: {
      '9219': {
        code: '9219',
        name: 'Psicologia',
      },
    },
  },
  '1513': {
    code: '1513',
    name: 'Universidade de Lisboa - Instituto de Educa\u00e7\u00e3o',
    courses: {
      L040: {
        code: 'L040',
        name: 'Educa\u00e7\u00e3o e Forma\u00e7\u00e3o',
      },
    },
  },
  '1514': {
    code: '1514',
    name: 'Universidade de Lisboa - Instituto de Geografia e Ordenamento do Territ\u00f3rio',
    courses: {
      '8411': {
        code: '8411',
        name: 'Planeamento e Gest\u00e3o do Territ\u00f3rio',
      },
      '9143': {
        code: '9143',
        name: 'Geografia',
      },
    },
  },
  '1515': {
    code: '1515',
    name: 'Universidade de Lisboa - Instituto Superior de Agronomia',
    courses: {
      '8258': {
        code: '8258',
        name: 'Arquitetura Paisagista',
      },
      '8377': {
        code: '8377',
        name: 'Engenharia Florestal e dos Recursos Naturais',
      },
      '9011': {
        code: '9011',
        name: 'Biologia',
      },
      '9086': {
        code: '9086',
        name: 'Engenharia Agron\u00f3mica',
      },
      '9087': {
        code: '9087',
        name: 'Engenharia Alimentar',
      },
      '9099': {
        code: '9099',
        name: 'Engenharia do Ambiente',
      },
      '9129': {
        code: '9129',
        name: 'Engenharia Zoot\u00e9cnica',
      },
    },
  },
  '1516': {
    code: '1516',
    name: 'Universidade de Lisboa - Instituto Superior de Ci\u00eancias Sociais e Pol\u00edticas',
    courses: {
      '8014': {
        code: '8014',
        name: 'Servi\u00e7o Social (regime p\u00f3s-laboral)',
      },
      '8102': {
        code: '8102',
        name: 'Administra\u00e7\u00e3o P\u00fablica (regime p\u00f3s-laboral)',
      },
      '8109': {
        code: '8109',
        name: 'Sociologia (regime p\u00f3s-laboral)',
      },
      '8111': {
        code: '8111',
        name: 'Gest\u00e3o de Recursos Humanos (regime p\u00f3s-laboral)',
      },
      '8363': {
        code: '8363',
        name: 'Administra\u00e7\u00e3o P\u00fablica e Pol\u00edticas do Territ\u00f3rio (regime p\u00f3s-laboral)',
      },
      '8364': {
        code: '8364',
        name: 'Rela\u00e7\u00f5es Internacionais (regime p\u00f3s-laboral)',
      },
      '9002': {
        code: '9002',
        name: 'Administra\u00e7\u00e3o P\u00fablica',
      },
      '9019': {
        code: '9019',
        name: 'Ci\u00eancia Pol\u00edtica',
      },
      '9023': {
        code: '9023',
        name: 'Ci\u00eancias da Comunica\u00e7\u00e3o',
      },
      '9157': {
        code: '9157',
        name: 'Gest\u00e3o de Recursos Humanos',
      },
      '9229': {
        code: '9229',
        name: 'Rela\u00e7\u00f5es Internacionais',
      },
      '9238': {
        code: '9238',
        name: 'Servi\u00e7o Social',
      },
      '9240': {
        code: '9240',
        name: 'Sociologia',
      },
      '9448': {
        code: '9448',
        name: 'Antropologia',
      },
    },
  },
  '1517': {
    code: '1517',
    name: 'Universidade de Lisboa - Instituto Superior de Economia e Gest\u00e3o',
    courses: {
      '9081': {
        code: '9081',
        name: 'Economia',
      },
      '9147': {
        code: '9147',
        name: 'Gest\u00e3o',
      },
      '9210': {
        code: '9210',
        name: 'Matem\u00e1tica Aplicada \u00e0 Economia e \u00e0 Gest\u00e3o',
      },
      A001: {
        code: 'A001',
        name: 'Gest\u00e3o (ensino em Ingl\u00eas)',
      },
      A006: {
        code: 'A006',
        name: 'Economia (ensino em Ingl\u00eas)',
      },
      A013: {
        code: 'A013',
        name: 'Finan\u00e7as (ensino em ingl\u00eas)',
      },
    },
  },
  '1518': {
    code: '1518',
    name: 'Universidade de Lisboa - Instituto Superior T\u00e9cnico',
    courses: {
      '9089': {
        code: '9089',
        name: 'Engenharia Civil',
      },
      '9096': {
        code: '9096',
        name: 'Engenharia de Materiais',
      },
      '9099': {
        code: '9099',
        name: 'Engenharia do Ambiente',
      },
      '9121': {
        code: '9121',
        name: 'Engenharia Inform\u00e1tica e de Computadores',
      },
      '9123': {
        code: '9123',
        name: 'Engenharia Mec\u00e2nica',
      },
      '9125': {
        code: '9125',
        name: 'Engenharia Qu\u00edmica',
      },
      '9257': {
        code: '9257',
        name: 'Arquitetura',
      },
      '9345': {
        code: '9345',
        name: 'Matem\u00e1tica Aplicada e Computa\u00e7\u00e3o',
      },
      '9455': {
        code: '9455',
        name: 'Engenharia Biom\u00e9dica',
      },
      '9474': {
        code: '9474',
        name: 'Engenharia Biol\u00f3gica',
      },
      L162: {
        code: 'L162',
        name: 'Engenharia Naval e Oce\u00e2nica',
      },
      L209: {
        code: 'L209',
        name: 'Engenharia Eletrot\u00e9cnica e de Computadores',
      },
      L221: {
        code: 'L221',
        name: 'Engenharia Aeroespacial',
      },
      L233: {
        code: 'L233',
        name: 'Engenharia F\u00edsica Tecnol\u00f3gica',
      },
      L239: {
        code: 'L239',
        name: 'Engenharia de Minas e Recursos Energ\u00e9ticos',
      },
    },
  },
  '1519': {
    code: '1519',
    name: 'Universidade de Lisboa - Instituto Superior T\u00e9cnico (Tagus Park)',
    courses: {
      '9098': {
        code: '9098',
        name: 'Engenharia de Telecomunica\u00e7\u00f5es e Inform\u00e1tica',
      },
      '9104': {
        code: '9104',
        name: 'Engenharia e Gest\u00e3o Industrial',
      },
      '9121': {
        code: '9121',
        name: 'Engenharia Inform\u00e1tica e de Computadores',
      },
      '9912': {
        code: '9912',
        name: 'Engenharia Eletr\u00f3nica',
      },
    },
  },
  '5402': {
    code: '5402',
    name: 'Universidade do Porto - Faculdade de Belas-Artes',
    courses: {
      '9007': {
        code: '9007',
        name: 'Artes Pl\u00e1sticas',
      },
      '9070': {
        code: '9070',
        name: 'Design de Comunica\u00e7\u00e3o',
      },
    },
  },
  '6800': {
    code: '6800',
    name: 'ISCTE - Instituto Universit\u00e1rio de Lisboa',
    courses: {
      '8014': {
        code: '8014',
        name: 'Servi\u00e7o Social (regime p\u00f3s-laboral)',
      },
      '8029': {
        code: '8029',
        name: 'Finan\u00e7as e Contabilidade',
      },
      '8109': {
        code: '8109',
        name: 'Sociologia (regime p\u00f3s-laboral)',
      },
      '8366': {
        code: '8366',
        name: 'Inform\u00e1tica e Gest\u00e3o de Empresas (regime p\u00f3s-laboral)',
      },
      '9019': {
        code: '9019',
        name: 'Ci\u00eancia Pol\u00edtica',
      },
      '9081': {
        code: '9081',
        name: 'Economia',
      },
      '9098': {
        code: '9098',
        name: 'Engenharia de Telecomunica\u00e7\u00f5es e Inform\u00e1tica',
      },
      '9119': {
        code: '9119',
        name: 'Engenharia Inform\u00e1tica',
      },
      '9147': {
        code: '9147',
        name: 'Gest\u00e3o',
      },
      '9156': {
        code: '9156',
        name: 'Gest\u00e3o de Marketing',
      },
      '9157': {
        code: '9157',
        name: 'Gest\u00e3o de Recursos Humanos',
      },
      '9189': {
        code: '9189',
        name: 'Inform\u00e1tica e Gest\u00e3o de Empresas',
      },
      '9219': {
        code: '9219',
        name: 'Psicologia',
      },
      '9240': {
        code: '9240',
        name: 'Sociologia',
      },
      '9257': {
        code: '9257',
        name: 'Arquitetura',
      },
      '9448': {
        code: '9448',
        name: 'Antropologia',
      },
      '9885': {
        code: '9885',
        name: 'Engenharia Inform\u00e1tica (regime p\u00f3s-laboral)',
      },
      '9927': {
        code: '9927',
        name: 'Hist\u00f3ria Moderna e Contempor\u00e2nea',
      },
      L030: {
        code: 'L030',
        name: 'Gest\u00e3o Industrial e Log\u00edstica',
      },
      L188: {
        code: 'L188',
        name: 'Ci\u00eancia de Dados',
      },
      L189: {
        code: 'L189',
        name: 'Ci\u00eancia de Dados (regime p\u00f3s-laboral)',
      },
    },
  },
  '1320': {
    code: '1320',
    name: 'Universidade da Madeira - Escola Superior de Sa\u00fade',
    courses: {
      '9500': {
        code: '9500',
        name: 'Enfermagem',
      },
    },
  },
  '1321': {
    code: '1321',
    name: 'Universidade da Madeira - Escola Superior de Tecnologias e Gest\u00e3o',
    courses: {
      '9076': {
        code: '9076',
        name: 'Dire\u00e7\u00e3o e Gest\u00e3o Hoteleira',
      },
    },
  },
  '3011': {
    code: '3011',
    name: 'Universidade de Aveiro - Instituto Superior de Contabilidade e Administra\u00e7\u00e3o de Aveiro',
    courses: {
      '8005': {
        code: '8005',
        name: 'Marketing (regime p\u00f3s-laboral)',
      },
      '9056': {
        code: '9056',
        name: 'Contabilidade',
      },
      '9140': {
        code: '9140',
        name: 'Finan\u00e7as',
      },
      '9205': {
        code: '9205',
        name: 'Marketing',
      },
      '9869': {
        code: '9869',
        name: 'Contabilidade (regime p\u00f3s-laboral)',
      },
      '9888': {
        code: '9888',
        name: 'Finan\u00e7as (regime p\u00f3s-laboral)',
      },
    },
  },
  '3012': {
    code: '3012',
    name: 'Universidade de Aveiro - Escola Superior de Tecnologia e Gest\u00e3o de \u00c1gueda',
    courses: {
      '8016': {
        code: '8016',
        name: 'Tecnologias da Informa\u00e7\u00e3o',
      },
      '8405': {
        code: '8405',
        name: 'Gest\u00e3o da Qualidade',
      },
      '9235': {
        code: '9235',
        name: 'Secretariado e Comunica\u00e7\u00e3o Empresarial',
      },
      L021: {
        code: 'L021',
        name: 'Gest\u00e3o Comercial',
      },
      L140: {
        code: 'L140',
        name: 'Gest\u00e3o P\u00fablica',
      },
      L194: {
        code: 'L194',
        name: 'Eletr\u00f3nica e Mec\u00e2nica Industrial',
      },
    },
  },
  '3013': {
    code: '3013',
    name: 'Universidade de Aveiro - Escola Superior de Sa\u00fade de Aveiro',
    courses: {
      '9500': {
        code: '9500',
        name: 'Enfermagem',
      },
      '9504': {
        code: '9504',
        name: 'Fisioterapia',
      },
      '9890': {
        code: '9890',
        name: 'Terapia da Fala',
      },
      L066: {
        code: 'L066',
        name: 'Imagem M\u00e9dica e Radioterapia',
      },
    },
  },
  '3014': {
    code: '3014',
    name: 'Universidade de Aveiro - Escola Superior de Design, Gest\u00e3o e Tecnologia da Produ\u00e7\u00e3o de Aveiro-Norte',
    courses: {
      L135: {
        code: 'L135',
        name: 'Tecnologia e Sistemas de Produ\u00e7\u00e3o',
      },
      L138: {
        code: 'L138',
        name: 'Design de Produto e Tecnologia',
      },
    },
  },
  '3021': {
    code: '3021',
    name: 'Instituto Polit\u00e9cnico de Beja - Escola Superior Agr\u00e1ria',
    courses: {
      '9003': {
        code: '9003',
        name: 'Agronomia',
      },
      '9099': {
        code: '9099',
        name: 'Engenharia do Ambiente',
      },
      '9350': {
        code: '9350',
        name: 'Ci\u00eancia e Tecnologia dos Alimentos',
      },
      L157: {
        code: 'L157',
        name: 'Tecnologias Bioanal\u00edticas',
      },
    },
  },
  '3022': {
    code: '3022',
    name: 'Instituto Polit\u00e9cnico de Beja - Escola Superior de Educa\u00e7\u00e3o',
    courses: {
      '9010': {
        code: '9010',
        name: 'Audiovisual e Multim\u00e9dia',
      },
      '9238': {
        code: '9238',
        name: 'Servi\u00e7o Social',
      },
      '9563': {
        code: '9563',
        name: 'Desporto',
      },
      '9853': {
        code: '9853',
        name: 'Educa\u00e7\u00e3o B\u00e1sica',
      },
    },
  },
  '3023': {
    code: '3023',
    name: 'Instituto Polit\u00e9cnico de Beja - Escola Superior de Tecnologia e de Gest\u00e3o',
    courses: {
      '8437': {
        code: '8437',
        name: 'Solicitadoria (regime de ensino a dist\u00e2ncia)',
      },
      '9119': {
        code: '9119',
        name: 'Engenharia Inform\u00e1tica',
      },
      '9152': {
        code: '9152',
        name: 'Gest\u00e3o de Empresas',
      },
      '9242': {
        code: '9242',
        name: 'Solicitadoria',
      },
      '9254': {
        code: '9254',
        name: 'Turismo',
      },
      '9994': {
        code: '9994',
        name: 'Gest\u00e3o de Empresas (regime p\u00f3s-laboral)',
      },
    },
  },
  '3031': {
    code: '3031',
    name: 'Instituto Polit\u00e9cnico do C\u00e1vado e do Ave - Escola Superior de Gest\u00e3o',
    courses: {
      '8015': {
        code: '8015',
        name: 'Solicitadoria (regime p\u00f3s-laboral)',
      },
      '8402': {
        code: '8402',
        name: 'Gest\u00e3o P\u00fablica (regime de ensino a dist\u00e2ncia)',
      },
      '9056': {
        code: '9056',
        name: 'Contabilidade',
      },
      '9140': {
        code: '9140',
        name: 'Finan\u00e7as',
      },
      '9152': {
        code: '9152',
        name: 'Gest\u00e3o de Empresas',
      },
      '9242': {
        code: '9242',
        name: 'Solicitadoria',
      },
      '9759': {
        code: '9759',
        name: 'Fiscalidade',
      },
      '9869': {
        code: '9869',
        name: 'Contabilidade (regime p\u00f3s-laboral)',
      },
      '9990': {
        code: '9990',
        name: 'Fiscalidade (regime p\u00f3s-laboral)',
      },
      '9994': {
        code: '9994',
        name: 'Gest\u00e3o de Empresas (regime p\u00f3s-laboral)',
      },
      L140: {
        code: 'L140',
        name: 'Gest\u00e3o P\u00fablica',
      },
    },
  },
  '3032': {
    code: '3032',
    name: 'Instituto Polit\u00e9cnico do C\u00e1vado e do Ave - Escola Superior de Tecnologia',
    courses: {
      '8311': {
        code: '8311',
        name: 'Engenharia em Desenvolvimento de Jogos Digitais',
      },
      '8409': {
        code: '8409',
        name: 'Engenharia de Sistemas Inform\u00e1ticos',
      },
      '8417': {
        code: '8417',
        name: 'Engenharia de Sistemas Inform\u00e1ticos (regime p\u00f3s-laboral)',
      },
      '9104': {
        code: '9104',
        name: 'Engenharia e Gest\u00e3o Industrial',
      },
      '9112': {
        code: '9112',
        name: 'Engenharia Eletrot\u00e9cnica e de Computadores',
      },
      L181: {
        code: 'L181',
        name: 'Engenharia Inform\u00e1tica M\u00e9dica',
      },
    },
  },
  '3033': {
    code: '3033',
    name: 'Instituto Polit\u00e9cnico do C\u00e1vado e do Ave - Escola Superior de Design',
    courses: {
      '9074': {
        code: '9074',
        name: 'Design Industrial',
      },
      '9470': {
        code: '9470',
        name: 'Design Gr\u00e1fico',
      },
      '9873': {
        code: '9873',
        name: 'Design Gr\u00e1fico (regime p\u00f3s-laboral)',
      },
    },
  },
  '3034': {
    code: '3034',
    name: 'Instituto Polit\u00e9cnico do C\u00e1vado e do Ave - Escola Superior de Hotelaria e Turismo',
    courses: {
      '8156': {
        code: '8156',
        name: 'Gest\u00e3o de Atividades Tur\u00edsticas',
      },
      '8341': {
        code: '8341',
        name: 'Gest\u00e3o de Atividades Tur\u00edsticas (regime p\u00f3s-laboral)',
      },
    },
  },
  '3041': {
    code: '3041',
    name: 'Instituto Polit\u00e9cnico de Bragan\u00e7a - Escola Superior Agr\u00e1ria de Bragan\u00e7a',
    courses: {
      '9085': {
        code: '9085',
        name: 'Enfermagem Veterin\u00e1ria',
      },
      '9086': {
        code: '9086',
        name: 'Engenharia Agron\u00f3mica',
      },
      '9087': {
        code: '9087',
        name: 'Engenharia Alimentar',
      },
      '9099': {
        code: '9099',
        name: 'Engenharia do Ambiente',
      },
      '9129': {
        code: '9129',
        name: 'Engenharia Zoot\u00e9cnica',
      },
      '9752': {
        code: '9752',
        name: 'Enologia',
      },
      L029: {
        code: 'L029',
        name: 'Biologia e Biotecnologia',
      },
    },
  },
  '3042': {
    code: '3042',
    name: 'Instituto Polit\u00e9cnico de Bragan\u00e7a - Escola Superior de Educa\u00e7\u00e3o de Bragan\u00e7a',
    courses: {
      '8323': {
        code: '8323',
        name: 'L\u00ednguas Estrangeiras: Ingl\u00eas e Espanhol',
      },
      '8374': {
        code: '8374',
        name: 'L\u00ednguas para Rela\u00e7\u00f5es Internacionais',
      },
      '9082': {
        code: '9082',
        name: 'Educa\u00e7\u00e3o Ambiental',
      },
      '9084': {
        code: '9084',
        name: 'Educa\u00e7\u00e3o Social',
      },
      '9563': {
        code: '9563',
        name: 'Desporto',
      },
      '9853': {
        code: '9853',
        name: 'Educa\u00e7\u00e3o B\u00e1sica',
      },
      '9898': {
        code: '9898',
        name: 'Arte e Design',
      },
      '9933': {
        code: '9933',
        name: 'Anima\u00e7\u00e3o e Produ\u00e7\u00e3o Art\u00edstica',
      },
      L088: {
        code: 'L088',
        name: 'Rela\u00e7\u00f5es Lus\u00f3fonas e L\u00edngua Portuguesa',
      },
      L175: {
        code: 'L175',
        name: 'M\u00fasica em Contextos Comunit\u00e1rios',
      },
    },
  },
  '3043': {
    code: '3043',
    name: 'Instituto Polit\u00e9cnico de Bragan\u00e7a - Escola Superior de Tecnologia e de Gest\u00e3o de Bragan\u00e7a',
    courses: {
      '9056': {
        code: '9056',
        name: 'Contabilidade',
      },
      '9089': {
        code: '9089',
        name: 'Engenharia Civil',
      },
      '9112': {
        code: '9112',
        name: 'Engenharia Eletrot\u00e9cnica e de Computadores',
      },
      '9119': {
        code: '9119',
        name: 'Engenharia Inform\u00e1tica',
      },
      '9123': {
        code: '9123',
        name: 'Engenharia Mec\u00e2nica',
      },
      '9125': {
        code: '9125',
        name: 'Engenharia Qu\u00edmica',
      },
      '9147': {
        code: '9147',
        name: 'Gest\u00e3o',
      },
      '9186': {
        code: '9186',
        name: 'Inform\u00e1tica de Gest\u00e3o',
      },
      '9910': {
        code: '9910',
        name: 'Engenharia de Energias Renov\u00e1veis',
      },
      A004: {
        code: 'A004',
        name: 'Gest\u00e3o de Neg\u00f3cios Internacionais (Curso Europeu, ensino em Ingl\u00eas)',
      },
      L058: {
        code: 'L058',
        name: 'Tecnologia e Gest\u00e3o Industrial',
      },
      L069: {
        code: 'L069',
        name: 'Tecnologia Biom\u00e9dica',
      },
    },
  },
  '3045': {
    code: '3045',
    name: 'Instituto Polit\u00e9cnico de Bragan\u00e7a - Escola Superior de Comunica\u00e7\u00e3o, Administra\u00e7\u00e3o e Turismo de Mirandela',
    courses: {
      '8309': {
        code: '8309',
        name: 'Design de Jogos Digitais',
      },
      '9165': {
        code: '9165',
        name: 'Gest\u00e3o e Administra\u00e7\u00e3o P\u00fablica',
      },
      '9188': {
        code: '9188',
        name: 'Inform\u00e1tica e Comunica\u00e7\u00f5es',
      },
      '9205': {
        code: '9205',
        name: 'Marketing',
      },
      '9213': {
        code: '9213',
        name: 'Multim\u00e9dia',
      },
      '9242': {
        code: '9242',
        name: 'Solicitadoria',
      },
      '9254': {
        code: '9254',
        name: 'Turismo',
      },
      '9662': {
        code: '9662',
        name: 'Comunica\u00e7\u00e3o e Jornalismo',
      },
    },
  },
  '3051': {
    code: '3051',
    name: 'Instituto Polit\u00e9cnico de Castelo Branco - Escola Superior Agr\u00e1ria de Castelo Branco',
    courses: {
      '8397': {
        code: '8397',
        name: 'Engenharia de Prote\u00e7\u00e3o Civil',
      },
      '9003': {
        code: '9003',
        name: 'Agronomia',
      },
      '9085': {
        code: '9085',
        name: 'Enfermagem Veterin\u00e1ria',
      },
      L093: {
        code: 'L093',
        name: 'Biotecnologia Alimentar',
      },
    },
  },
  '3052': {
    code: '3052',
    name: 'Instituto Polit\u00e9cnico de Castelo Branco - Escola Superior de Educa\u00e7\u00e3o de Castelo Branco',
    courses: {
      '9238': {
        code: '9238',
        name: 'Servi\u00e7o Social',
      },
      '9485': {
        code: '9485',
        name: 'Secretariado',
      },
      '9850': {
        code: '9850',
        name: 'Desporto e Atividade F\u00edsica',
      },
      '9853': {
        code: '9853',
        name: 'Educa\u00e7\u00e3o B\u00e1sica',
      },
    },
  },
  '3053': {
    code: '3053',
    name: 'Instituto Polit\u00e9cnico de Castelo Branco - Escola Superior de Tecnologia de Castelo Branco',
    courses: {
      '8463': {
        code: '8463',
        name: 'Engenharia das Energias Renov\u00e1veis',
      },
      '9089': {
        code: '9089',
        name: 'Engenharia Civil',
      },
      '9111': {
        code: '9111',
        name: 'Engenharia Eletrot\u00e9cnica e das Telecomunica\u00e7\u00f5es',
      },
      '9118': {
        code: '9118',
        name: 'Engenharia Industrial',
      },
      '9119': {
        code: '9119',
        name: 'Engenharia Inform\u00e1tica',
      },
      '9248': {
        code: '9248',
        name: 'Tecnologias da Informa\u00e7\u00e3o e Multim\u00e9dia',
      },
    },
  },
  '3054': {
    code: '3054',
    name: 'Instituto Polit\u00e9cnico de Castelo Branco - Escola Superior de Gest\u00e3o de Idanha-a-Nova',
    courses: {
      '9147': {
        code: '9147',
        name: 'Gest\u00e3o',
      },
      '9242': {
        code: '9242',
        name: 'Solicitadoria',
      },
      '9254': {
        code: '9254',
        name: 'Turismo',
      },
      L021: {
        code: 'L021',
        name: 'Gest\u00e3o Comercial',
      },
    },
  },
  '3055': {
    code: '3055',
    name: 'Instituto Polit\u00e9cnico de Castelo Branco - Escola Superior de Artes Aplicadas',
    courses: {
      '9725': {
        code: '9725',
        name: 'Design de Interiores e Equipamento',
      },
      '9726': {
        code: '9726',
        name: 'Design de Moda e T\u00eaxtil',
      },
      L158: {
        code: 'L158',
        name: 'Design de Comunica\u00e7\u00e3o e Audiovisual',
      },
    },
  },
  '3061': {
    code: '3061',
    name: 'Instituto Polit\u00e9cnico de Coimbra - Escola Superior Agr\u00e1ria de Coimbra',
    courses: {
      '9016': {
        code: '9016',
        name: 'Biotecnologia',
      },
      '9085': {
        code: '9085',
        name: 'Enfermagem Veterin\u00e1ria',
      },
      '9619': {
        code: '9619',
        name: 'Engenharia Agro-Pecu\u00e1ria',
      },
      '9673': {
        code: '9673',
        name: 'Agricultura Biol\u00f3gica',
      },
      L009: {
        code: 'L009',
        name: 'Ci\u00eancias Florestais e Recursos Naturais',
      },
      L015: {
        code: 'L015',
        name: 'Tecnologia Alimentar',
      },
      L024: {
        code: 'L024',
        name: 'Tecnologia e Gest\u00e3o Ambiental',
      },
      L178: {
        code: 'L178',
        name: 'Turismo em Espa\u00e7os Rurais e Naturais',
      },
    },
  },
  '3062': {
    code: '3062',
    name: 'Instituto Polit\u00e9cnico de Coimbra - Escola Superior de Educa\u00e7\u00e3o de Coimbra',
    courses: {
      '8093': {
        code: '8093',
        name: 'Anima\u00e7\u00e3o Socioeducativa (regime p\u00f3s-laboral)',
      },
      '8114': {
        code: '8114',
        name: 'Turismo (regime p\u00f3s-laboral)',
      },
      '8342': {
        code: '8342',
        name: 'Comunica\u00e7\u00e3o Organizacional (regime p\u00f3s-laboral)',
      },
      '9054': {
        code: '9054',
        name: 'Comunica\u00e7\u00e3o Social',
      },
      '9254': {
        code: '9254',
        name: 'Turismo',
      },
      '9668': {
        code: '9668',
        name: 'Gerontologia Social',
      },
      '9675': {
        code: '9675',
        name: 'Anima\u00e7\u00e3o Socioeducativa',
      },
      '9717': {
        code: '9717',
        name: 'Comunica\u00e7\u00e3o Organizacional',
      },
      '9731': {
        code: '9731',
        name: 'Desporto e Lazer',
      },
      '9774': {
        code: '9774',
        name: 'L\u00edngua Gestual Portuguesa',
      },
      '9853': {
        code: '9853',
        name: 'Educa\u00e7\u00e3o B\u00e1sica',
      },
      '9894': {
        code: '9894',
        name: 'Comunica\u00e7\u00e3o e Design Multim\u00e9dia',
      },
      '9898': {
        code: '9898',
        name: 'Arte e Design',
      },
      L095: {
        code: 'L095',
        name: 'Gastronomia',
      },
    },
  },
  '3063': {
    code: '3063',
    name: 'Instituto Polit\u00e9cnico de Coimbra - Instituto Superior de Contabilidade e Administra\u00e7\u00e3o de Coimbra',
    courses: {
      '8029': {
        code: '8029',
        name: 'Finan\u00e7as e Contabilidade',
      },
      '8519': {
        code: '8519',
        name: 'Secretariado de Dire\u00e7\u00e3o e Administra\u00e7\u00e3o',
      },
      '9061': {
        code: '9061',
        name: 'Contabilidade e Auditoria',
      },
      '9152': {
        code: '9152',
        name: 'Gest\u00e3o de Empresas',
      },
      '9186': {
        code: '9186',
        name: 'Inform\u00e1tica de Gest\u00e3o',
      },
      '9722': {
        code: '9722',
        name: 'Contabilidade e Gest\u00e3o P\u00fablica',
      },
      '9801': {
        code: '9801',
        name: 'Solicitadoria e Administra\u00e7\u00e3o',
      },
      L023: {
        code: 'L023',
        name: 'Marketing e Neg\u00f3cios Internacionais',
      },
      L056: {
        code: 'L056',
        name: 'Com\u00e9rcio e Rela\u00e7\u00f5es Econ\u00f3micas Internacionais',
      },
    },
  },
  '3064': {
    code: '3064',
    name: 'Instituto Polit\u00e9cnico de Coimbra - Instituto Superior de Engenharia de Coimbra',
    courses: {
      '9089': {
        code: '9089',
        name: 'Engenharia Civil',
      },
      '9104': {
        code: '9104',
        name: 'Engenharia e Gest\u00e3o Industrial',
      },
      '9105': {
        code: '9105',
        name: 'Engenharia Eletromec\u00e2nica',
      },
      '9109': {
        code: '9109',
        name: 'Engenharia Eletrot\u00e9cnica',
      },
      '9119': {
        code: '9119',
        name: 'Engenharia Inform\u00e1tica',
      },
      '9123': {
        code: '9123',
        name: 'Engenharia Mec\u00e2nica',
      },
      '9540': {
        code: '9540',
        name: 'Bioengenharia',
      },
      '9770': {
        code: '9770',
        name: 'Engenharia Inform\u00e1tica (Curso Europeu)',
      },
      '9884': {
        code: '9884',
        name: 'Engenharia Eletrot\u00e9cnica (regime p\u00f3s-laboral)',
      },
      '9885': {
        code: '9885',
        name: 'Engenharia Inform\u00e1tica (regime p\u00f3s-laboral)',
      },
      L133: {
        code: 'L133',
        name: 'Engenharia Biom\u00e9dica - Bioeletr\u00f3nica',
      },
      L155: {
        code: 'L155',
        name: 'Gest\u00e3o Sustent\u00e1vel das Cidades',
      },
    },
  },
  '3065': {
    code: '3065',
    name: 'Instituto Polit\u00e9cnico de Coimbra - Escola Superior de Tecnologia e Gest\u00e3o de Oliveira do Hospital',
    courses: {
      '8147': {
        code: '8147',
        name: 'Sistemas e Tecnologias da Informa\u00e7\u00e3o',
      },
      '9058': {
        code: '9058',
        name: 'Contabilidade e Administra\u00e7\u00e3o',
      },
      '9119': {
        code: '9119',
        name: 'Engenharia Inform\u00e1tica',
      },
      '9147': {
        code: '9147',
        name: 'Gest\u00e3o',
      },
      '9205': {
        code: '9205',
        name: 'Marketing',
      },
      L018: {
        code: 'L018',
        name: 'Desenvolvimento Regional e Ordenamento do Territ\u00f3rio',
      },
      L146: {
        code: 'L146',
        name: 'Gest\u00e3o de Bioind\u00fastrias',
      },
      L226: {
        code: 'L226',
        name: 'Inform\u00e1tica Industrial',
      },
    },
  },
  '3081': {
    code: '3081',
    name: 'Universidade do Algarve - Escola Superior de Educa\u00e7\u00e3o e Comunica\u00e7\u00e3o',
    courses: {
      '8337': {
        code: '8337',
        name: 'Imagem Animada',
      },
      '9023': {
        code: '9023',
        name: 'Ci\u00eancias da Comunica\u00e7\u00e3o',
      },
      '9070': {
        code: '9070',
        name: 'Design de Comunica\u00e7\u00e3o',
      },
      '9084': {
        code: '9084',
        name: 'Educa\u00e7\u00e3o Social',
      },
      '9563': {
        code: '9563',
        name: 'Desporto',
      },
      '9853': {
        code: '9853',
        name: 'Educa\u00e7\u00e3o B\u00e1sica',
      },
    },
  },
  '3082': {
    code: '3082',
    name: 'Universidade do Algarve - Escola Superior de Gest\u00e3o, Hotelaria e Turismo',
    courses: {
      '9147': {
        code: '9147',
        name: 'Gest\u00e3o',
      },
      '9148': {
        code: '9148',
        name: 'Gest\u00e3o (regime noturno)',
      },
      '9173': {
        code: '9173',
        name: 'Gest\u00e3o Hoteleira',
      },
      '9205': {
        code: '9205',
        name: 'Marketing',
      },
      '9254': {
        code: '9254',
        name: 'Turismo',
      },
    },
  },
  '3083': {
    code: '3083',
    name: 'Universidade do Algarve - Instituto Superior de Engenharia',
    courses: {
      '9087': {
        code: '9087',
        name: 'Engenharia Alimentar',
      },
      '9089': {
        code: '9089',
        name: 'Engenharia Civil',
      },
      '9123': {
        code: '9123',
        name: 'Engenharia Mec\u00e2nica',
      },
      L209: {
        code: 'L209',
        name: 'Engenharia Eletrot\u00e9cnica e de Computadores',
      },
    },
  },
  '3087': {
    code: '3087',
    name: 'Universidade do Algarve - Escola Superior de Gest\u00e3o, Hotelaria e Turismo (Portim\u00e3o)',
    courses: {
      '9147': {
        code: '9147',
        name: 'Gest\u00e3o',
      },
      '9148': {
        code: '9148',
        name: 'Gest\u00e3o (regime noturno)',
      },
      '9254': {
        code: '9254',
        name: 'Turismo',
      },
    },
  },
  '3091': {
    code: '3091',
    name: 'Instituto Polit\u00e9cnico da Guarda - Escola Superior de Educa\u00e7\u00e3o, Comunica\u00e7\u00e3o e Desporto',
    courses: {
      '8339': {
        code: '8339',
        name: 'Comunica\u00e7\u00e3o Multim\u00e9dia',
      },
      '9005': {
        code: '9005',
        name: 'Anima\u00e7\u00e3o Sociocultural',
      },
      '9563': {
        code: '9563',
        name: 'Desporto',
      },
      '9652': {
        code: '9652',
        name: 'Comunica\u00e7\u00e3o e Rela\u00e7\u00f5es P\u00fablicas',
      },
      '9853': {
        code: '9853',
        name: 'Educa\u00e7\u00e3o B\u00e1sica',
      },
      L034: {
        code: 'L034',
        name: 'Desporto, Condi\u00e7\u00e3o F\u00edsica e Sa\u00fade',
      },
    },
  },
  '3092': {
    code: '3092',
    name: 'Instituto Polit\u00e9cnico da Guarda - Escola Superior de Tecnologia e Gest\u00e3o',
    courses: {
      '9056': {
        code: '9056',
        name: 'Contabilidade',
      },
      '9072': {
        code: '9072',
        name: 'Design de Equipamento',
      },
      '9089': {
        code: '9089',
        name: 'Engenharia Civil',
      },
      '9119': {
        code: '9119',
        name: 'Engenharia Inform\u00e1tica',
      },
      '9128': {
        code: '9128',
        name: 'Engenharia Topogr\u00e1fica',
      },
      '9147': {
        code: '9147',
        name: 'Gest\u00e3o',
      },
      '9157': {
        code: '9157',
        name: 'Gest\u00e3o de Recursos Humanos',
      },
      '9205': {
        code: '9205',
        name: 'Marketing',
      },
      '9855': {
        code: '9855',
        name: 'Energia e Ambiente',
      },
      L196: {
        code: 'L196',
        name: 'Mec\u00e2nica e Inform\u00e1tica Industrial',
      },
    },
  },
  '3095': {
    code: '3095',
    name: 'Instituto Polit\u00e9cnico da Guarda - Escola Superior de Turismo e Hotelaria',
    courses: {
      '9173': {
        code: '9173',
        name: 'Gest\u00e3o Hoteleira',
      },
      '9255': {
        code: '9255',
        name: 'Turismo e Lazer',
      },
      '9484': {
        code: '9484',
        name: 'Restaura\u00e7\u00e3o e Catering',
      },
    },
  },
  '3101': {
    code: '3101',
    name: 'Instituto Polit\u00e9cnico de Leiria - Escola Superior de Educa\u00e7\u00e3o e Ci\u00eancias Sociais',
    courses: {
      '8014': {
        code: '8014',
        name: 'Servi\u00e7o Social (regime p\u00f3s-laboral)',
      },
      '8476': {
        code: '8476',
        name: 'Rela\u00e7\u00f5es Humanas e Comunica\u00e7\u00e3o Organizacional (reg. de ensino a dist\u00e2ncia)',
      },
      '9084': {
        code: '9084',
        name: 'Educa\u00e7\u00e3o Social',
      },
      '9238': {
        code: '9238',
        name: 'Servi\u00e7o Social',
      },
      '9492': {
        code: '9492',
        name: 'Tradu\u00e7\u00e3o e Interpreta\u00e7\u00e3o: Portugu\u00eas/Chin\u00eas - Chin\u00eas/Portugu\u00eas',
      },
      '9797': {
        code: '9797',
        name: 'Rela\u00e7\u00f5es Humanas e Comunica\u00e7\u00e3o Organizacional',
      },
      '9851': {
        code: '9851',
        name: 'Desporto e Bem-Estar',
      },
      '9853': {
        code: '9853',
        name: 'Educa\u00e7\u00e3o B\u00e1sica',
      },
      L099: {
        code: 'L099',
        name: 'Comunica\u00e7\u00e3o e Media',
      },
    },
  },
  '3102': {
    code: '3102',
    name: 'Instituto Polit\u00e9cnico de Leiria - Escola Superior de Tecnologia e Gest\u00e3o',
    courses: {
      '8015': {
        code: '8015',
        name: 'Solicitadoria (regime p\u00f3s-laboral)',
      },
      '9002': {
        code: '9002',
        name: 'Administra\u00e7\u00e3o P\u00fablica',
      },
      '9089': {
        code: '9089',
        name: 'Engenharia Civil',
      },
      '9104': {
        code: '9104',
        name: 'Engenharia e Gest\u00e3o Industrial',
      },
      '9112': {
        code: '9112',
        name: 'Engenharia Eletrot\u00e9cnica e de Computadores',
      },
      '9119': {
        code: '9119',
        name: 'Engenharia Inform\u00e1tica',
      },
      '9123': {
        code: '9123',
        name: 'Engenharia Mec\u00e2nica',
      },
      '9147': {
        code: '9147',
        name: 'Gest\u00e3o',
      },
      '9205': {
        code: '9205',
        name: 'Marketing',
      },
      '9242': {
        code: '9242',
        name: 'Solicitadoria',
      },
      '9627': {
        code: '9627',
        name: 'Contabilidade e Finan\u00e7as',
      },
      '9648': {
        code: '9648',
        name: 'Engenharia da Energia e do Ambiente',
      },
      '9690': {
        code: '9690',
        name: 'Biomec\u00e2nica',
      },
      '9741': {
        code: '9741',
        name: 'Engenharia Autom\u00f3vel',
      },
      '9885': {
        code: '9885',
        name: 'Engenharia Inform\u00e1tica (regime p\u00f3s-laboral)',
      },
      '9886': {
        code: '9886',
        name: 'Engenharia Mec\u00e2nica (regime p\u00f3s-laboral)',
      },
      '9991': {
        code: '9991',
        name: 'Gest\u00e3o (regime p\u00f3s-laboral)',
      },
      L055: {
        code: 'L055',
        name: 'Jogos Digitais e Multim\u00e9dia',
      },
      L104: {
        code: 'L104',
        name: 'Engenharia Eletrot\u00e9cnica e de Computadores (regime p\u00f3s-laboral)',
      },
    },
  },
  '3103': {
    code: '3103',
    name: 'Instituto Polit\u00e9cnico de Leiria - Escola Superior de Artes e Design',
    courses: {
      '8126': {
        code: '8126',
        name: 'Design Gr\u00e1fico e Multim\u00e9dia (regime p\u00f3s-laboral)',
      },
      '8525': {
        code: '8525',
        name: 'Design de Produto - Cer\u00e2mica e Vidro',
      },
      '9007': {
        code: '9007',
        name: 'Artes Pl\u00e1sticas',
      },
      '9074': {
        code: '9074',
        name: 'Design Industrial',
      },
      '9243': {
        code: '9243',
        name: 'Teatro',
      },
      '9457': {
        code: '9457',
        name: 'Som e Imagem',
      },
      '9723': {
        code: '9723',
        name: 'Design de Ambientes',
      },
      '9729': {
        code: '9729',
        name: 'Design Gr\u00e1fico e Multim\u00e9dia',
      },
      L127: {
        code: 'L127',
        name: 'Programa\u00e7\u00e3o e Produ\u00e7\u00e3o Cultural',
      },
    },
  },
  '3105': {
    code: '3105',
    name: 'Instituto Polit\u00e9cnico de Leiria - Escola Superior de Turismo e Tecnologia do Mar',
    courses: {
      '8514': {
        code: '8514',
        name: 'Gest\u00e3o de Eventos',
      },
      '9014': {
        code: '9014',
        name: 'Biologia Marinha e Biotecnologia',
      },
      '9016': {
        code: '9016',
        name: 'Biotecnologia',
      },
      '9087': {
        code: '9087',
        name: 'Engenharia Alimentar',
      },
      '9178': {
        code: '9178',
        name: 'Gest\u00e3o Tur\u00edstica e Hoteleira',
      },
      '9207': {
        code: '9207',
        name: 'Marketing Tur\u00edstico',
      },
      '9254': {
        code: '9254',
        name: 'Turismo',
      },
      '9848': {
        code: '9848',
        name: 'Anima\u00e7\u00e3o Tur\u00edstica',
      },
      L131: {
        code: 'L131',
        name: 'Gest\u00e3o da Restaura\u00e7\u00e3o e Catering',
      },
    },
  },
  '3112': {
    code: '3112',
    name: 'Instituto Polit\u00e9cnico de Lisboa - Escola Superior de Educa\u00e7\u00e3o',
    courses: {
      '8307': {
        code: '8307',
        name: 'Artes Visuais e Tecnologias',
      },
      '9005': {
        code: '9005',
        name: 'Anima\u00e7\u00e3o Sociocultural',
      },
      '9853': {
        code: '9853',
        name: 'Educa\u00e7\u00e3o B\u00e1sica',
      },
      '9876': {
        code: '9876',
        name: 'Educa\u00e7\u00e3o B\u00e1sica (regime p\u00f3s-laboral)',
      },
      L134: {
        code: 'L134',
        name: 'Media\u00e7\u00e3o Art\u00edstica e Cultural',
      },
    },
  },
  '3113': {
    code: '3113',
    name: 'Instituto Polit\u00e9cnico de Lisboa - Escola Superior de Comunica\u00e7\u00e3o Social',
    courses: {
      '8438': {
        code: '8438',
        name: 'Rela\u00e7\u00f5es P\u00fablicas e Comunica\u00e7\u00e3o Empresarial (regime p\u00f3s-laboral)',
      },
      '8439': {
        code: '8439',
        name: 'Publicidade e Marketing (regime p\u00f3s-laboral)',
      },
      '9010': {
        code: '9010',
        name: 'Audiovisual e Multim\u00e9dia',
      },
      '9191': {
        code: '9191',
        name: 'Jornalismo',
      },
      '9222': {
        code: '9222',
        name: 'Publicidade e Marketing',
      },
      '9231': {
        code: '9231',
        name: 'Rela\u00e7\u00f5es P\u00fablicas e Comunica\u00e7\u00e3o Empresarial',
      },
    },
  },
  '3117': {
    code: '3117',
    name: 'Instituto Polit\u00e9cnico de Lisboa - Instituto Superior de Contabilidade e Administra\u00e7\u00e3o de Lisboa',
    courses: {
      '8015': {
        code: '8015',
        name: 'Solicitadoria (regime p\u00f3s-laboral)',
      },
      '9058': {
        code: '9058',
        name: 'Contabilidade e Administra\u00e7\u00e3o',
      },
      '9147': {
        code: '9147',
        name: 'Gest\u00e3o',
      },
      '9242': {
        code: '9242',
        name: 'Solicitadoria',
      },
      '9476': {
        code: '9476',
        name: 'Finan\u00e7as Empresariais',
      },
      '9870': {
        code: '9870',
        name: 'Contabilidade e Administra\u00e7\u00e3o (regime p\u00f3s-laboral)',
      },
      '9889': {
        code: '9889',
        name: 'Finan\u00e7as Empresariais (regime p\u00f3s-laboral)',
      },
      '9991': {
        code: '9991',
        name: 'Gest\u00e3o (regime p\u00f3s-laboral)',
      },
      L035: {
        code: 'L035',
        name: 'Com\u00e9rcio e Neg\u00f3cios Internacionais (regime p\u00f3s-laboral)',
      },
    },
  },
  '3118': {
    code: '3118',
    name: 'Instituto Polit\u00e9cnico de Lisboa - Instituto Superior de Engenharia de Lisboa',
    courses: {
      '9089': {
        code: '9089',
        name: 'Engenharia Civil',
      },
      '9108': {
        code: '9108',
        name: 'Engenharia Eletr\u00f3nica e Telecomunica\u00e7\u00f5es e de Computadores',
      },
      '9109': {
        code: '9109',
        name: 'Engenharia Eletrot\u00e9cnica',
      },
      '9121': {
        code: '9121',
        name: 'Engenharia Inform\u00e1tica e de Computadores',
      },
      '9123': {
        code: '9123',
        name: 'Engenharia Mec\u00e2nica',
      },
      '9126': {
        code: '9126',
        name: 'Engenharia Qu\u00edmica e Biol\u00f3gica',
      },
      '9455': {
        code: '9455',
        name: 'Engenharia Biom\u00e9dica',
      },
      L052: {
        code: 'L052',
        name: 'Engenharia Inform\u00e1tica e Multim\u00e9dia',
      },
      L085: {
        code: 'L085',
        name: 'Tecnologias e Gest\u00e3o Municipal',
      },
      L117: {
        code: 'L117',
        name: 'Matem\u00e1tica Aplicada \u00e0 Tecnologia e \u00e0 Empresa',
      },
      L119: {
        code: 'L119',
        name: 'Engenharia Inform\u00e1tica, Redes e Telecomunica\u00e7\u00f5es',
      },
    },
  },
  '3121': {
    code: '3121',
    name: 'Instituto Polit\u00e9cnico de Portalegre - Escola Superior de Educa\u00e7\u00e3o e Ci\u00eancias Sociais',
    courses: {
      '8014': {
        code: '8014',
        name: 'Servi\u00e7o Social (regime p\u00f3s-laboral)',
      },
      '9084': {
        code: '9084',
        name: 'Educa\u00e7\u00e3o Social',
      },
      '9238': {
        code: '9238',
        name: 'Servi\u00e7o Social',
      },
      '9254': {
        code: '9254',
        name: 'Turismo',
      },
      '9773': {
        code: '9773',
        name: 'Jornalismo e Comunica\u00e7\u00e3o',
      },
      '9853': {
        code: '9853',
        name: 'Educa\u00e7\u00e3o B\u00e1sica',
      },
    },
  },
  '3122': {
    code: '3122',
    name: 'Instituto Polit\u00e9cnico de Portalegre - Escola Superior de Tecnologia e Gest\u00e3o',
    courses: {
      '9070': {
        code: '9070',
        name: 'Design de Comunica\u00e7\u00e3o',
      },
      '9119': {
        code: '9119',
        name: 'Engenharia Inform\u00e1tica',
      },
      '9147': {
        code: '9147',
        name: 'Gest\u00e3o',
      },
      '9670': {
        code: '9670',
        name: 'Administra\u00e7\u00e3o de Publicidade e Marketing',
      },
      '9991': {
        code: '9991',
        name: 'Gest\u00e3o (regime p\u00f3s-laboral)',
      },
      L033: {
        code: 'L033',
        name: 'Tecnologias de Produ\u00e7\u00e3o de Biocombust\u00edveis',
      },
      L171: {
        code: 'L171',
        name: 'Design de Anima\u00e7\u00e3o e Multim\u00e9dia',
      },
    },
  },
  '3123': {
    code: '3123',
    name: 'Instituto Polit\u00e9cnico de Portalegre - Escola Superior Agr\u00e1ria de Elvas',
    courses: {
      '9003': {
        code: '9003',
        name: 'Agronomia',
      },
      '9085': {
        code: '9085',
        name: 'Enfermagem Veterin\u00e1ria',
      },
      '9130': {
        code: '9130',
        name: 'Equinicultura',
      },
    },
  },
  '3131': {
    code: '3131',
    name: 'Instituto Polit\u00e9cnico do Porto - Escola Superior de Educa\u00e7\u00e3o',
    courses: {
      '8002': {
        code: '8002',
        name: 'L\u00ednguas e Culturas Estrangeiras',
      },
      '8096': {
        code: '8096',
        name: 'Gest\u00e3o do Patrim\u00f3nio (regime p\u00f3s-laboral)',
      },
      '8264': {
        code: '8264',
        name: 'Artes Visuais e Tecnologias Art\u00edsticas',
      },
      '9084': {
        code: '9084',
        name: 'Educa\u00e7\u00e3o Social',
      },
      '9563': {
        code: '9563',
        name: 'Desporto',
      },
      '9767': {
        code: '9767',
        name: 'Gest\u00e3o do Patrim\u00f3nio',
      },
      '9807': {
        code: '9807',
        name: 'Tradu\u00e7\u00e3o e Interpreta\u00e7\u00e3o em L\u00edngua Gestual Portuguesa',
      },
      '9853': {
        code: '9853',
        name: 'Educa\u00e7\u00e3o B\u00e1sica',
      },
      '9878': {
        code: '9878',
        name: 'Educa\u00e7\u00e3o Musical',
      },
      '9879': {
        code: '9879',
        name: 'Educa\u00e7\u00e3o Social (regime p\u00f3s-laboral)',
      },
    },
  },
  '3134': {
    code: '3134',
    name: 'Instituto Polit\u00e9cnico do Porto - Instituto Superior de Contabilidade e Administra\u00e7\u00e3o do Porto',
    courses: {
      '8005': {
        code: '8005',
        name: 'Marketing (regime p\u00f3s-laboral)',
      },
      '9009': {
        code: '9009',
        name: 'Assessoria e Tradu\u00e7\u00e3o',
      },
      '9043': {
        code: '9043',
        name: 'Ci\u00eancias e Tecnologias da Documenta\u00e7\u00e3o e Informa\u00e7\u00e3o',
      },
      '9053': {
        code: '9053',
        name: 'Comunica\u00e7\u00e3o Empresarial',
      },
      '9058': {
        code: '9058',
        name: 'Contabilidade e Administra\u00e7\u00e3o',
      },
      '9205': {
        code: '9205',
        name: 'Marketing',
      },
      '9227': {
        code: '9227',
        name: 'Recursos Humanos',
      },
      '9716': {
        code: '9716',
        name: 'Com\u00e9rcio Internacional',
      },
      '9829': {
        code: '9829',
        name: 'Assessoria e Tradu\u00e7\u00e3o (regime p\u00f3s-laboral)',
      },
      '9866': {
        code: '9866',
        name: 'Com\u00e9rcio Internacional (regime p\u00f3s-laboral)',
      },
      '9867': {
        code: '9867',
        name: 'Comunica\u00e7\u00e3o Empresarial (regime p\u00f3s-laboral)',
      },
      '9870': {
        code: '9870',
        name: 'Contabilidade e Administra\u00e7\u00e3o (regime p\u00f3s-laboral)',
      },
      L070: {
        code: 'L070',
        name: 'Criatividade e Inova\u00e7\u00e3o Empresarial',
      },
    },
  },
  '3135': {
    code: '3135',
    name: 'Instituto Polit\u00e9cnico do Porto - Instituto Superior de Engenharia do Porto',
    courses: {
      '8316': {
        code: '8316',
        name: 'Engenharia de Sistemas',
      },
      '9089': {
        code: '9089',
        name: 'Engenharia Civil',
      },
      '9098': {
        code: '9098',
        name: 'Engenharia de Telecomunica\u00e7\u00f5es e Inform\u00e1tica',
      },
      '9104': {
        code: '9104',
        name: 'Engenharia e Gest\u00e3o Industrial',
      },
      '9110': {
        code: '9110',
        name: 'Engenharia Eletrot\u00e9cnica - Sistemas El\u00e9tricos de Energia',
      },
      '9112': {
        code: '9112',
        name: 'Engenharia Eletrot\u00e9cnica e de Computadores',
      },
      '9117': {
        code: '9117',
        name: 'Engenharia Geot\u00e9cnica e Geoambiente',
      },
      '9119': {
        code: '9119',
        name: 'Engenharia Inform\u00e1tica',
      },
      '9123': {
        code: '9123',
        name: 'Engenharia Mec\u00e2nica',
      },
      '9125': {
        code: '9125',
        name: 'Engenharia Qu\u00edmica',
      },
      '9455': {
        code: '9455',
        name: 'Engenharia Biom\u00e9dica',
      },
      '9936': {
        code: '9936',
        name: 'Engenharia Mec\u00e2nica Autom\u00f3vel',
      },
      L089: {
        code: 'L089',
        name: 'Biorrecursos',
      },
    },
  },
  '3138': {
    code: '3138',
    name: 'Instituto Polit\u00e9cnico do Porto - Escola Superior de Tecnologia e Gest\u00e3o',
    courses: {
      '8015': {
        code: '8015',
        name: 'Solicitadoria (regime p\u00f3s-laboral)',
      },
      '8097': {
        code: '8097',
        name: 'Ci\u00eancias Empresariais (regime p\u00f3s-laboral)',
      },
      '8288': {
        code: '8288',
        name: 'Sistemas de Informa\u00e7\u00e3o para a Gest\u00e3o',
      },
      '8398': {
        code: '8398',
        name: 'Seguran\u00e7a Inform\u00e1tica em Redes de Computadores',
      },
      '9045': {
        code: '9045',
        name: 'Ci\u00eancias Empresariais',
      },
      '9119': {
        code: '9119',
        name: 'Engenharia Inform\u00e1tica',
      },
      '9242': {
        code: '9242',
        name: 'Solicitadoria',
      },
      L030: {
        code: 'L030',
        name: 'Gest\u00e3o Industrial e Log\u00edstica',
      },
      L091: {
        code: 'L091',
        name: 'Seguran\u00e7a do Trabalho e Ambiente',
      },
    },
  },
  '3139': {
    code: '3139',
    name: 'Instituto Polit\u00e9cnico do Porto - Escola Superior de Hotelaria e Turismo',
    courses: {
      '8442': {
        code: '8442',
        name: 'Gest\u00e3o das Atividades Tur\u00edsticas (regime p\u00f3s-laboral)',
      },
      '9164': {
        code: '9164',
        name: 'Gest\u00e3o e Administra\u00e7\u00e3o Hoteleira',
      },
      '9921': {
        code: '9921',
        name: 'Gest\u00e3o das Atividades Tur\u00edsticas',
      },
      L131: {
        code: 'L131',
        name: 'Gest\u00e3o da Restaura\u00e7\u00e3o e Catering',
      },
    },
  },
  '3141': {
    code: '3141',
    name: 'Instituto Polit\u00e9cnico de Santar\u00e9m - Escola Superior Agr\u00e1ria de Santar\u00e9m',
    courses: {
      '8419': {
        code: '8419',
        name: 'Agronomia (regime p\u00f3s-laboral)',
      },
      '9003': {
        code: '9003',
        name: 'Agronomia',
      },
      L003: {
        code: 'L003',
        name: 'Zootecnia',
      },
      L080: {
        code: 'L080',
        name: 'Qualidade Alimentar e Nutri\u00e7\u00e3o Humana',
      },
      L169: {
        code: 'L169',
        name: 'Tecnologia e Gest\u00e3o Agroindustrial',
      },
    },
  },
  '3142': {
    code: '3142',
    name: 'Instituto Polit\u00e9cnico de Santar\u00e9m - Escola Superior de Educa\u00e7\u00e3o de Santar\u00e9m',
    courses: {
      '9084': {
        code: '9084',
        name: 'Educa\u00e7\u00e3o Social',
      },
      '9853': {
        code: '9853',
        name: 'Educa\u00e7\u00e3o B\u00e1sica',
      },
      L130: {
        code: 'L130',
        name: 'Educa\u00e7\u00e3o Ambiental e Turismo de Natureza',
      },
      L179: {
        code: 'L179',
        name: 'Produ\u00e7\u00e3o Multim\u00e9dia em Educa\u00e7\u00e3o',
      },
    },
  },
  '3143': {
    code: '3143',
    name: 'Instituto Polit\u00e9cnico de Santar\u00e9m - Escola Superior de Gest\u00e3o e Tecnologia de Santar\u00e9m',
    courses: {
      '9152': {
        code: '9152',
        name: 'Gest\u00e3o de Empresas',
      },
      '9156': {
        code: '9156',
        name: 'Gest\u00e3o de Marketing',
      },
      '9185': {
        code: '9185',
        name: 'Inform\u00e1tica',
      },
      '9498': {
        code: '9498',
        name: 'Contabilidade e Fiscalidade',
      },
      '9785': {
        code: '9785',
        name: 'Neg\u00f3cios Internacionais',
      },
      '9994': {
        code: '9994',
        name: 'Gest\u00e3o de Empresas (regime p\u00f3s-laboral)',
      },
    },
  },
  '3145': {
    code: '3145',
    name: 'Instituto Polit\u00e9cnico de Santar\u00e9m - Escola Superior de Desporto de Rio Maior',
    courses: {
      '9730': {
        code: '9730',
        name: 'Desporto de Natureza e Turismo Ativo',
      },
      '9763': {
        code: '9763',
        name: 'Gest\u00e3o das Organiza\u00e7\u00f5es Desportivas',
      },
      '9808': {
        code: '9808',
        name: 'Treino Desportivo',
      },
      L008: {
        code: 'L008',
        name: 'Atividade F\u00edsica e Estilos de Vida Saud\u00e1veis',
      },
      L034: {
        code: 'L034',
        name: 'Desporto, Condi\u00e7\u00e3o F\u00edsica e Sa\u00fade',
      },
    },
  },
  '3151': {
    code: '3151',
    name: 'Instituto Polit\u00e9cnico de Set\u00fabal - Escola Superior de Educa\u00e7\u00e3o',
    courses: {
      '9005': {
        code: '9005',
        name: 'Anima\u00e7\u00e3o Sociocultural',
      },
      '9054': {
        code: '9054',
        name: 'Comunica\u00e7\u00e3o Social',
      },
      '9563': {
        code: '9563',
        name: 'Desporto',
      },
      '9633': {
        code: '9633',
        name: 'Tradu\u00e7\u00e3o e Interpreta\u00e7\u00e3o de L\u00edngua Gestual Portuguesa',
      },
      '9853': {
        code: '9853',
        name: 'Educa\u00e7\u00e3o B\u00e1sica',
      },
    },
  },
  '3152': {
    code: '3152',
    name: 'Instituto Polit\u00e9cnico de Set\u00fabal - Escola Superior de Tecnologia de Set\u00fabal',
    courses: {
      '8515': {
        code: '8515',
        name: 'Tecnologias de Energia',
      },
      '9092': {
        code: '9092',
        name: 'Engenharia de Automa\u00e7\u00e3o, Controlo e Instrumenta\u00e7\u00e3o',
      },
      '9112': {
        code: '9112',
        name: 'Engenharia Eletrot\u00e9cnica e de Computadores',
      },
      '9119': {
        code: '9119',
        name: 'Engenharia Inform\u00e1tica',
      },
      '9123': {
        code: '9123',
        name: 'Engenharia Mec\u00e2nica',
      },
      '9862': {
        code: '9862',
        name: 'Tecnologia e Gest\u00e3o Industrial (regime noturno)',
      },
      L069: {
        code: 'L069',
        name: 'Tecnologia Biom\u00e9dica',
      },
      L124: {
        code: 'L124',
        name: 'Tecnologias do Ambiente e do Mar',
      },
    },
  },
  '3153': {
    code: '3153',
    name: 'Instituto Polit\u00e9cnico de Set\u00fabal - Escola Superior de Ci\u00eancias Empresariais',
    courses: {
      '8111': {
        code: '8111',
        name: 'Gest\u00e3o de Recursos Humanos (regime p\u00f3s-laboral)',
      },
      '9157': {
        code: '9157',
        name: 'Gest\u00e3o de Recursos Humanos',
      },
      '9205': {
        code: '9205',
        name: 'Marketing',
      },
      '9627': {
        code: '9627',
        name: 'Contabilidade e Finan\u00e7as',
      },
      '9628': {
        code: '9628',
        name: 'Contabilidade e Finan\u00e7as (regime noturno)',
      },
      '9629': {
        code: '9629',
        name: 'Gest\u00e3o da Distribui\u00e7\u00e3o e da Log\u00edstica',
      },
      '9630': {
        code: '9630',
        name: 'Gest\u00e3o de Sistemas de Informa\u00e7\u00e3o',
      },
      '9993': {
        code: '9993',
        name: 'Gest\u00e3o da Distribui\u00e7\u00e3o e da Log\u00edstica (regime p\u00f3s-laboral)',
      },
    },
  },
  '3154': {
    code: '3154',
    name: 'Instituto Polit\u00e9cnico de Set\u00fabal - Escola Superior de Tecnologia do Barreiro',
    courses: {
      '9016': {
        code: '9016',
        name: 'Biotecnologia',
      },
      '9089': {
        code: '9089',
        name: 'Engenharia Civil',
      },
      '9090': {
        code: '9090',
        name: 'Engenharia Civil (regime noturno)',
      },
      '9687': {
        code: '9687',
        name: 'Bioinform\u00e1tica',
      },
      L100: {
        code: 'L100',
        name: 'Tecnologias do Petr\u00f3leo',
      },
    },
  },
  '3155': {
    code: '3155',
    name: 'Instituto Polit\u00e9cnico de Set\u00fabal - Escola Superior de Sa\u00fade',
    courses: {
      '9500': {
        code: '9500',
        name: 'Enfermagem',
      },
      '9504': {
        code: '9504',
        name: 'Fisioterapia',
      },
      '9890': {
        code: '9890',
        name: 'Terapia da Fala',
      },
    },
  },
  '3161': {
    code: '3161',
    name: 'Instituto Polit\u00e9cnico de Viana do Castelo - Escola Superior Agr\u00e1ria',
    courses: {
      '9003': {
        code: '9003',
        name: 'Agronomia',
      },
      '9016': {
        code: '9016',
        name: 'Biotecnologia',
      },
      '9085': {
        code: '9085',
        name: 'Enfermagem Veterin\u00e1ria',
      },
      L164: {
        code: 'L164',
        name: 'Engenharia do Ambiente e Geoinform\u00e1tica',
      },
    },
  },
  '3162': {
    code: '3162',
    name: 'Instituto Polit\u00e9cnico de Viana do Castelo - Escola Superior de Educa\u00e7\u00e3o',
    courses: {
      '9473': {
        code: '9473',
        name: 'Educa\u00e7\u00e3o Social Gerontol\u00f3gica',
      },
      '9853': {
        code: '9853',
        name: 'Educa\u00e7\u00e3o B\u00e1sica',
      },
      L122: {
        code: 'L122',
        name: 'Artes Pl\u00e1sticas e Tecnologias Art\u00edsticas',
      },
    },
  },
  '3163': {
    code: '3163',
    name: 'Instituto Polit\u00e9cnico de Viana do Castelo - Escola Superior de Tecnologia e Gest\u00e3o',
    courses: {
      '8114': {
        code: '8114',
        name: 'Turismo (regime p\u00f3s-laboral)',
      },
      '8407': {
        code: '8407',
        name: 'Engenharia da Computa\u00e7\u00e3o Gr\u00e1fica e Multim\u00e9dia',
      },
      '9087': {
        code: '9087',
        name: 'Engenharia Alimentar',
      },
      '9119': {
        code: '9119',
        name: 'Engenharia Inform\u00e1tica',
      },
      '9123': {
        code: '9123',
        name: 'Engenharia Mec\u00e2nica',
      },
      '9147': {
        code: '9147',
        name: 'Gest\u00e3o',
      },
      '9148': {
        code: '9148',
        name: 'Gest\u00e3o (regime noturno)',
      },
      '9254': {
        code: '9254',
        name: 'Turismo',
      },
      '9723': {
        code: '9723',
        name: 'Design de Ambientes',
      },
      '9727': {
        code: '9727',
        name: 'Design do Produto',
      },
      '9743': {
        code: '9743',
        name: 'Engenharia Civil e do Ambiente',
      },
      '9751': {
        code: '9751',
        name: 'Engenharia Mecatr\u00f3nica',
      },
      L153: {
        code: 'L153',
        name: 'Engenharia de Redes e Sistemas de Computadores',
      },
    },
  },
  '3164': {
    code: '3164',
    name: 'Instituto Polit\u00e9cnico de Viana do Castelo - Escola Superior de Ci\u00eancias Empresariais',
    courses: {
      '8464': {
        code: '8464',
        name: 'Gest\u00e3o da Distribui\u00e7\u00e3o e Log\u00edstica',
      },
      '8516': {
        code: '8516',
        name: 'Organiza\u00e7\u00e3o e Gest\u00e3o Empresariais',
      },
      '9498': {
        code: '9498',
        name: 'Contabilidade e Fiscalidade',
      },
      '9664': {
        code: '9664',
        name: 'Marketing e Comunica\u00e7\u00e3o Empresarial',
      },
    },
  },
  '3165': {
    code: '3165',
    name: 'Instituto Polit\u00e9cnico de Viana do Castelo - Escola Superior de Desporto e Lazer',
    courses: {
      '9731': {
        code: '9731',
        name: 'Desporto e Lazer',
      },
    },
  },
  '3181': {
    code: '3181',
    name: 'Instituto Polit\u00e9cnico de Viseu - Escola Superior de Educa\u00e7\u00e3o de Viseu',
    courses: {
      '9054': {
        code: '9054',
        name: 'Comunica\u00e7\u00e3o Social',
      },
      '9084': {
        code: '9084',
        name: 'Educa\u00e7\u00e3o Social',
      },
      '9347': {
        code: '9347',
        name: 'Artes Pl\u00e1sticas e Multim\u00e9dia',
      },
      '9850': {
        code: '9850',
        name: 'Desporto e Atividade F\u00edsica',
      },
      '9853': {
        code: '9853',
        name: 'Educa\u00e7\u00e3o B\u00e1sica',
      },
      '9930': {
        code: '9930',
        name: 'Publicidade e Rela\u00e7\u00f5es P\u00fablicas',
      },
      L154: {
        code: 'L154',
        name: 'Artes da Performance Cultural',
      },
    },
  },
  '3182': {
    code: '3182',
    name: 'Instituto Polit\u00e9cnico de Viseu - Escola Superior de Tecnologia e Gest\u00e3o de Viseu',
    courses: {
      '8296': {
        code: '8296',
        name: 'Gest\u00e3o Industrial',
      },
      '8517': {
        code: '8517',
        name: 'Tecnologia e Design de Mobili\u00e1rio',
      },
      '9056': {
        code: '9056',
        name: 'Contabilidade',
      },
      '9089': {
        code: '9089',
        name: 'Engenharia Civil',
      },
      '9099': {
        code: '9099',
        name: 'Engenharia do Ambiente',
      },
      '9109': {
        code: '9109',
        name: 'Engenharia Eletrot\u00e9cnica',
      },
      '9119': {
        code: '9119',
        name: 'Engenharia Inform\u00e1tica',
      },
      '9123': {
        code: '9123',
        name: 'Engenharia Mec\u00e2nica',
      },
      '9152': {
        code: '9152',
        name: 'Gest\u00e3o de Empresas',
      },
      '9205': {
        code: '9205',
        name: 'Marketing',
      },
      '9254': {
        code: '9254',
        name: 'Turismo',
      },
      '9491': {
        code: '9491',
        name: 'Tecnologias e Design de Multim\u00e9dia',
      },
      '9994': {
        code: '9994',
        name: 'Gest\u00e3o de Empresas (regime p\u00f3s-laboral)',
      },
    },
  },
  '3185': {
    code: '3185',
    name: 'Instituto Polit\u00e9cnico de Viseu - Escola Superior Agr\u00e1ria de Viseu',
    courses: {
      '9085': {
        code: '9085',
        name: 'Enfermagem Veterin\u00e1ria',
      },
      '9086': {
        code: '9086',
        name: 'Engenharia Agron\u00f3mica',
      },
      '9087': {
        code: '9087',
        name: 'Engenharia Alimentar',
      },
      '9129': {
        code: '9129',
        name: 'Engenharia Zoot\u00e9cnica',
      },
    },
  },
  '3186': {
    code: '3186',
    name: 'Instituto Polit\u00e9cnico de Viseu - Escola Superior de Tecnologia e Gest\u00e3o de Lamego',
    courses: {
      '8014': {
        code: '8014',
        name: 'Servi\u00e7o Social (regime p\u00f3s-laboral)',
      },
      '9122': {
        code: '9122',
        name: 'Engenharia Inform\u00e1tica e Telecomunica\u00e7\u00f5es',
      },
      '9168': {
        code: '9168',
        name: 'Gest\u00e3o e Inform\u00e1tica',
      },
      '9179': {
        code: '9179',
        name: 'Gest\u00e3o Tur\u00edstica, Cultural e Patrimonial',
      },
      '9238': {
        code: '9238',
        name: 'Servi\u00e7o Social',
      },
      L116: {
        code: 'L116',
        name: 'Secretariado de Administra\u00e7\u00e3o',
      },
    },
  },
  '3241': {
    code: '3241',
    name: 'Instituto Polit\u00e9cnico de Tomar - Escola Superior de Gest\u00e3o de Tomar',
    courses: {
      '9056': {
        code: '9056',
        name: 'Contabilidade',
      },
      '9152': {
        code: '9152',
        name: 'Gest\u00e3o de Empresas',
      },
      '9640': {
        code: '9640',
        name: 'Gest\u00e3o de Recursos Humanos e Comportamento Organizacional',
      },
      L207: {
        code: 'L207',
        name: 'Turismo e Gest\u00e3o do Patrim\u00f3nio Cultural',
      },
    },
  },
  '3242': {
    code: '3242',
    name: 'Instituto Polit\u00e9cnico de Tomar - Escola Superior de Tecnologia de Tomar',
    courses: {
      '9112': {
        code: '9112',
        name: 'Engenharia Eletrot\u00e9cnica e de Computadores',
      },
      '9119': {
        code: '9119',
        name: 'Engenharia Inform\u00e1tica',
      },
      '9380': {
        code: '9380',
        name: 'Conserva\u00e7\u00e3o e Restauro',
      },
      '9644': {
        code: '9644',
        name: 'Design e Tecnologia das Artes Gr\u00e1ficas',
      },
      '9645': {
        code: '9645',
        name: 'Fotografia',
      },
      L142: {
        code: 'L142',
        name: 'Tecnologia Qu\u00edmica',
      },
      L186: {
        code: 'L186',
        name: 'Gest\u00e3o da Edifica\u00e7\u00e3o e Obras',
      },
    },
  },
  '3243': {
    code: '3243',
    name: 'Instituto Polit\u00e9cnico de Tomar - Escola Superior de Tecnologia de Abrantes',
    courses: {
      '9054': {
        code: '9054',
        name: 'Comunica\u00e7\u00e3o Social',
      },
      '9123': {
        code: '9123',
        name: 'Engenharia Mec\u00e2nica',
      },
      L143: {
        code: 'L143',
        name: 'Inform\u00e1tica e Tecnologias Multim\u00e9dia',
      },
      L177: {
        code: 'L177',
        name: 'Cinema Documental',
      },
    },
  },
  '3331': {
    code: '3331',
    name: 'Instituto Polit\u00e9cnico do Porto - Escola Superior de Media Artes e Design',
    courses: {
      '9069': {
        code: '9069',
        name: 'Design',
      },
      '9213': {
        code: '9213',
        name: 'Multim\u00e9dia',
      },
      '9244': {
        code: '9244',
        name: 'Tecnologia da Comunica\u00e7\u00e3o Audiovisual',
      },
      '9645': {
        code: '9645',
        name: 'Fotografia',
      },
      L071: {
        code: 'L071',
        name: 'Tecnologias e Sistemas de Informa\u00e7\u00e3o para a Web',
      },
    },
  },
  '7001': {
    code: '7001',
    name: 'Escola Superior de Enfermagem de Coimbra',
    courses: {
      '9500': {
        code: '9500',
        name: 'Enfermagem',
      },
    },
  },
  '7002': {
    code: '7002',
    name: 'Escola Superior de Enfermagem de Lisboa',
    courses: {
      '9500': {
        code: '9500',
        name: 'Enfermagem',
      },
    },
  },
  '7003': {
    code: '7003',
    name: 'Escola Superior de Enfermagem do Porto',
    courses: {
      '9500': {
        code: '9500',
        name: 'Enfermagem',
      },
    },
  },
  '7005': {
    code: '7005',
    name: 'Instituto Polit\u00e9cnico de Beja - Escola Superior de Sa\u00fade',
    courses: {
      '8138': {
        code: '8138',
        name: 'Terapia Ocupacional',
      },
      '9500': {
        code: '9500',
        name: 'Enfermagem',
      },
    },
  },
  '7010': {
    code: '7010',
    name: 'Universidade do Minho - Escola Superior de Enfermagem',
    courses: {
      '9500': {
        code: '9500',
        name: 'Enfermagem',
      },
    },
  },
  '7015': {
    code: '7015',
    name: 'Instituto Polit\u00e9cnico de Bragan\u00e7a - Escola Superior de Sa\u00fade de Bragan\u00e7a',
    courses: {
      '8149': {
        code: '8149',
        name: 'Diet\u00e9tica e Nutri\u00e7\u00e3o',
      },
      '9500': {
        code: '9500',
        name: 'Enfermagem',
      },
      '9501': {
        code: '9501',
        name: 'Enfermagem (entrada no 2.\u00ba semestre)',
      },
      '9549': {
        code: '9549',
        name: 'Farm\u00e1cia',
      },
      '9833': {
        code: '9833',
        name: 'Gerontologia',
      },
      L068: {
        code: 'L068',
        name: 'Ci\u00eancias Biom\u00e9dicas Laboratoriais',
      },
    },
  },
  '7020': {
    code: '7020',
    name: 'Instituto Polit\u00e9cnico de Castelo Branco - Escola Superior de Sa\u00fade Dr. Lopes Dias',
    courses: {
      '9500': {
        code: '9500',
        name: 'Enfermagem',
      },
      '9504': {
        code: '9504',
        name: 'Fisioterapia',
      },
      L066: {
        code: 'L066',
        name: 'Imagem M\u00e9dica e Radioterapia',
      },
      L067: {
        code: 'L067',
        name: 'Fisiologia Cl\u00ednica',
      },
      L068: {
        code: 'L068',
        name: 'Ci\u00eancias Biom\u00e9dicas Laboratoriais',
      },
    },
  },
  '7030': {
    code: '7030',
    name: 'Universidade de \u00c9vora - Escola Superior de Enfermagem de S\u00e3o Jo\u00e3o de Deus',
    courses: {
      '9500': {
        code: '9500',
        name: 'Enfermagem',
      },
    },
  },
  '7035': {
    code: '7035',
    name: 'Universidade do Algarve - Escola Superior de Sa\u00fade',
    courses: {
      '8149': {
        code: '8149',
        name: 'Diet\u00e9tica e Nutri\u00e7\u00e3o',
      },
      '9500': {
        code: '9500',
        name: 'Enfermagem',
      },
      '9504': {
        code: '9504',
        name: 'Fisioterapia',
      },
      '9549': {
        code: '9549',
        name: 'Farm\u00e1cia',
      },
      L066: {
        code: 'L066',
        name: 'Imagem M\u00e9dica e Radioterapia',
      },
      L068: {
        code: 'L068',
        name: 'Ci\u00eancias Biom\u00e9dicas Laboratoriais',
      },
    },
  },
  '7040': {
    code: '7040',
    name: 'Instituto Polit\u00e9cnico da Guarda - Escola Superior de Sa\u00fade da Guarda',
    courses: {
      '9500': {
        code: '9500',
        name: 'Enfermagem',
      },
      '9549': {
        code: '9549',
        name: 'Farm\u00e1cia',
      },
      L101: {
        code: 'L101',
        name: 'Biotecnologia Medicinal',
      },
    },
  },
  '7045': {
    code: '7045',
    name: 'Instituto Polit\u00e9cnico de Leiria - Escola Superior de Sa\u00fade',
    courses: {
      '8138': {
        code: '8138',
        name: 'Terapia Ocupacional',
      },
      '8149': {
        code: '8149',
        name: 'Diet\u00e9tica e Nutri\u00e7\u00e3o',
      },
      '9500': {
        code: '9500',
        name: 'Enfermagem',
      },
      '9504': {
        code: '9504',
        name: 'Fisioterapia',
      },
      '9890': {
        code: '9890',
        name: 'Terapia da Fala',
      },
    },
  },
  '7055': {
    code: '7055',
    name: 'Instituto Polit\u00e9cnico de Portalegre - Escola Superior de Sa\u00fade',
    courses: {
      '9500': {
        code: '9500',
        name: 'Enfermagem',
      },
      '9556': {
        code: '9556',
        name: 'Higiene Oral',
      },
    },
  },
  '7065': {
    code: '7065',
    name: 'Instituto Polit\u00e9cnico de Santar\u00e9m - Escola Superior de Sa\u00fade de Santar\u00e9m',
    courses: {
      '9500': {
        code: '9500',
        name: 'Enfermagem',
      },
    },
  },
  '7075': {
    code: '7075',
    name: 'Instituto Polit\u00e9cnico de Viana do Castelo - Escola Superior de Sa\u00fade',
    courses: {
      '9500': {
        code: '9500',
        name: 'Enfermagem',
      },
    },
  },
  '7080': {
    code: '7080',
    name: 'Universidade de Tr\u00e1s-os-Montes e Alto Douro - Escola Superior de Sa\u00fade',
    courses: {
      '9500': {
        code: '9500',
        name: 'Enfermagem',
      },
    },
  },
  '7085': {
    code: '7085',
    name: 'Instituto Polit\u00e9cnico de Viseu - Escola Superior de Sa\u00fade de Viseu',
    courses: {
      '9500': {
        code: '9500',
        name: 'Enfermagem',
      },
    },
  },
  '7092': {
    code: '7092',
    name: 'Universidade dos A\u00e7ores - Escola Superior de Sa\u00fade - Angra do Hero\u00edsmo',
    courses: {
      '9500': {
        code: '9500',
        name: 'Enfermagem',
      },
    },
  },
  '7093': {
    code: '7093',
    name: 'Universidade dos A\u00e7ores - Escola Superior de Sa\u00fade - Ponta Delgada',
    courses: {
      '9500': {
        code: '9500',
        name: 'Enfermagem',
      },
    },
  },
  '7105': {
    code: '7105',
    name: 'Escola Superior N\u00e1utica Infante D. Henrique',
    courses: {
      '9745': {
        code: '9745',
        name: 'Engenharia de M\u00e1quinas Mar\u00edtimas',
      },
      '9789': {
        code: '9789',
        name: 'Pilotagem',
      },
      '9924': {
        code: '9924',
        name: 'Gest\u00e3o de Transportes e Log\u00edstica',
      },
      '9926': {
        code: '9926',
        name: 'Gest\u00e3o Portu\u00e1ria',
      },
      L118: {
        code: 'L118',
        name: 'Engenharia Eletrot\u00e9cnica Mar\u00edtima',
      },
    },
  },
  '7110': {
    code: '7110',
    name: 'Escola Superior de Hotelaria e Turismo do Estoril',
    courses: {
      '8011': {
        code: '8011',
        name: 'Produ\u00e7\u00e3o Alimentar em Restaura\u00e7\u00e3o (regime p\u00f3s-laboral)',
      },
      '9076': {
        code: '9076',
        name: 'Dire\u00e7\u00e3o e Gest\u00e3o Hoteleira',
      },
      '9163': {
        code: '9163',
        name: 'Gest\u00e3o do Lazer e Anima\u00e7\u00e3o Tur\u00edstica',
      },
      '9177': {
        code: '9177',
        name: 'Gest\u00e3o Tur\u00edstica',
      },
      '9183': {
        code: '9183',
        name: 'Informa\u00e7\u00e3o Tur\u00edstica',
      },
      '9217': {
        code: '9217',
        name: 'Produ\u00e7\u00e3o Alimentar em Restaura\u00e7\u00e3o',
      },
      '9875': {
        code: '9875',
        name: 'Dire\u00e7\u00e3o e Gest\u00e3o Hoteleira (regime p\u00f3s-laboral)',
      },
      '9995': {
        code: '9995',
        name: 'Gest\u00e3o do Lazer e Anima\u00e7\u00e3o Tur\u00edstica (regime p\u00f3s-laboral)',
      },
      '9996': {
        code: '9996',
        name: 'Gest\u00e3o Tur\u00edstica (regime p\u00f3s-laboral)',
      },
    },
  },
  '7210': {
    code: '7210',
    name: 'Instituto Polit\u00e9cnico de Coimbra - Escola Superior de Tecnologia da Sa\u00fade de Coimbra',
    courses: {
      '8141': {
        code: '8141',
        name: 'Audiologia',
      },
      '8149': {
        code: '8149',
        name: 'Diet\u00e9tica e Nutri\u00e7\u00e3o',
      },
      '9504': {
        code: '9504',
        name: 'Fisioterapia',
      },
      '9549': {
        code: '9549',
        name: 'Farm\u00e1cia',
      },
      '9861': {
        code: '9861',
        name: 'Sa\u00fade Ambiental',
      },
      L066: {
        code: 'L066',
        name: 'Imagem M\u00e9dica e Radioterapia',
      },
      L067: {
        code: 'L067',
        name: 'Fisiologia Cl\u00ednica',
      },
      L068: {
        code: 'L068',
        name: 'Ci\u00eancias Biom\u00e9dicas Laboratoriais',
      },
    },
  },
  '7220': {
    code: '7220',
    name: 'Instituto Polit\u00e9cnico de Lisboa - Escola Superior de Tecnologia da Sa\u00fade de Lisboa',
    courses: {
      '8149': {
        code: '8149',
        name: 'Diet\u00e9tica e Nutri\u00e7\u00e3o',
      },
      '8152': {
        code: '8152',
        name: 'Ortoprotesia',
      },
      '9504': {
        code: '9504',
        name: 'Fisioterapia',
      },
      '9549': {
        code: '9549',
        name: 'Farm\u00e1cia',
      },
      '9861': {
        code: '9861',
        name: 'Sa\u00fade Ambiental',
      },
      L066: {
        code: 'L066',
        name: 'Imagem M\u00e9dica e Radioterapia',
      },
      L067: {
        code: 'L067',
        name: 'Fisiologia Cl\u00ednica',
      },
      L068: {
        code: 'L068',
        name: 'Ci\u00eancias Biom\u00e9dicas Laboratoriais',
      },
      L161: {
        code: 'L161',
        name: 'Ort\u00f3ptica e Ci\u00eancias da Vis\u00e3o',
      },
    },
  },
  '7230': {
    code: '7230',
    name: 'Instituto Polit\u00e9cnico do Porto - Escola Superior de Sa\u00fade',
    courses: {
      '8138': {
        code: '8138',
        name: 'Terapia Ocupacional',
      },
      '8141': {
        code: '8141',
        name: 'Audiologia',
      },
      '8143': {
        code: '8143',
        name: 'Ort\u00f3ptica',
      },
      '9504': {
        code: '9504',
        name: 'Fisioterapia',
      },
      '9549': {
        code: '9549',
        name: 'Farm\u00e1cia',
      },
      '9861': {
        code: '9861',
        name: 'Sa\u00fade Ambiental',
      },
      '9890': {
        code: '9890',
        name: 'Terapia da Fala',
      },
      L066: {
        code: 'L066',
        name: 'Imagem M\u00e9dica e Radioterapia',
      },
      L067: {
        code: 'L067',
        name: 'Fisiologia Cl\u00ednica',
      },
      L068: {
        code: 'L068',
        name: 'Ci\u00eancias Biom\u00e9dicas Laboratoriais',
      },
      L101: {
        code: 'L101',
        name: 'Biotecnologia Medicinal',
      },
      L136: {
        code: 'L136',
        name: 'Osteopatia',
      },
    },
  },
}
