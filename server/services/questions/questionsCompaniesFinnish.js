const questionsCompaniesFinnish = [
  {
    identifyingString:'companyName',
    // eslint-disable-next-line quotes
    name: "Mikä on yrityksesi nimi?",
    type: 'text',
    dataType: String
  },
  {
    identifyingString:'numberOfEmployees',
    name: 'Kuinka monta työntekijää yrityksessäsi on?',
    type: 'number',
    minValue: 0,
    unit: 'työntekijää',
    dataType: Number
  },
  {
    identifyingString:'officeRentExpenses',
    name: 'Minkä suuruiset ovat toimistonne kuukausittaiset vuokrakustannukset (€)? ',
    type: 'number',
    minValue: 0,
    unit: 'euroa',
    dataType: Number
  },
  {
    identifyingString:'topCosts',
    name: 'Mitkä ovat yrityksesi 5 suurinta kustannusta (suurin ensin)?',
    type: 'textArea',
    placeholder: '1. kustannus\n2. kustannus\n3. kustannus\n4. kustannus\n5. kustannus',
    dataType: String
  },
  {
    identifyingString:'topEnergyActivities',
    name: 'Mitkä ovat yrityksesi 5 suurinta energian käyttökohdetta (suurin ensin)?',
    placeholder: '1. kustannus\n2. kustannus\n3. kustannus\n4. kustannus\n5. kustannus',
    type: 'textArea',
    dataType: String
  },
  {
    identifyingString:'energyCost',
    name: 'Kuinka suuret ovat toimistonne kuukausittaiset energiakustannukset (€, sis. sähkön, lämmityksen ja jäähdytyksen yms.)?',
    type: 'number',
    minValue: 0,
    unit: 'euroa',
    dataType: Number
  },
  {
    identifyingString:'energySource',
    name: 'Mikä on toimistonne käyttämän sähkön pääasiallinen energianlähde?',
    type: 'multipleChoice',
    options: [
      {string: 'Aurinkoenergia', value: 'solar'},
      {string: 'Tuulivoima', value: 'wind'},
      {string: 'Vesivoima', value: 'hydro'},
      {string: 'Biomassa', value: 'biomass'},
      {string: 'Monta lähdettä', value: 'mixed'},
      {string: 'Maakaasu', value: 'natgas'},
      {string: 'Hiili', value: 'coal'},
      {string: 'Ydinvoima', value: 'nuclear'}
    ],
    dataType: String
  },
  /*{
    identifyingString:'heatingCost',
    name: 'Kuinka paljon yrityksesi maksaa toimiston lämmityksestä ja/tai jäähdytyksestä kuussa (€)?',
    type: 'number',
    minValue: 0,
    unit: 'euroa',
    dataType: Number
  },
  {
    identifyingString:'heatingSource',
    name: 'Mikä on toimistonne lämmityksen ja jäähdytyksen energianlähde?',
    type: 'multipleChoice',
    options: [
      {string: 'Sähkö', value: 'electricity'},
      {string: 'Kaukolämpö ja -jäähdytys', value: 'district'},
      {string: 'Lämpöpumppu', value: 'pumps'},
      {string: 'Polttoöljy', value: 'oil'},
      {string: 'Aurinkolämpö', value: 'solar'}
    ],
    dataType: String
  },
  */
  {
    identifyingString:'otherUpkeepExpenses',
    name: 'Kuinka korkeat ovat yrityksenne muut toimistoon liittyvät kuukausittaiset kustannukset (€)?',
    type: 'number',
    minValue: 0,
    unit: 'euroa',
    dataType: Number
  },
  {
    identifyingString:'totalCommutingSubsidies',
    name: 'Millaiset kuukausittaiset kustannukset aiheutuu työntekijöille maksettavista kilometrikorvauksista (€)?',
    type: 'number',
    minValue: 0,
    unit: 'euroa',
    dataType: Number
  },
  {
    identifyingString:'averageFlightHours',
    name: 'Kuinka monta tuntia keskimääräinen työntekijä lentää työmatkoilla kuukaudessa?',
    type: 'number',
    minValue: 0,
    unit: 'euroa',
    dataType: Number
  },
  {
    identifyingString:'averageCarHours',
    name: 'Kuinka monta tuntia keskimääräinen työntekijä ajaa autoa työmatkoilla kuukaudessa?',
    type: 'number',
    minValue: 0,
    unit: 'euroa',
    dataType: Number
  },
  {
    identifyingString:'shareOfRemoteWork',
    name: 'Kuinka suuri osa yrityksenne työtunneista tehdään tällä hetkellä etänä?',
    type: 'slider',
    defaultValue:'0',
    minValue:'0',
    maxValue:'100',
    unit: '%',
    dataType: Number
  },
  {
    identifyingString:'remoteWorkEase',
    name: 'Kuinka helppoa yrityksellesi olisi siirtyä kokopäiväiseen etätyöhön?',
    type: 'multipleChoice',
    options: [
      {string: 'Erittäin vaikeaa', value: 'veryDifficult'},
      {string: 'Vaikeaa', value: 'difficult'},
      {string: 'Jonkin verran vaikeaa', value: 'someEffort'},
      {string: 'Do not know', value: 'doNotKnow'},
      {string: 'Melko helppoa', value: 'significantEffort'},
      {string: 'Helppoa', value: 'easy'},
      {string: 'Erittäin helppoa', value: 'veryEasy'}
    ],
    dataType: String
  },
  {
    identifyingString: 'remoteWorkArrangement',
    name: 'Kuinka etätyö on yrityksessäsi järjestetty?',
    type: 'textArea',
    placeholder: 'Kuvaile, kuinka etätyötä toteutetaan yrityksessäsi.',
    dataType: String
  },
  {
    identifyingString:'remoteWorkBenefits',
    name: 'Mitkä ovat olleet etätyön suurimmat hyödyt yrityksellesi?',
    type: 'textArea',
    dataType: String
  },
  {
    identifyingString:'remoteWorkDisadvantages',
    name: 'Mitkä ovat olleet etätyön suurimmat haitat yrityksellesi?',
    type: 'textArea',
    dataType: String
  },
  {
    identifyingString:'howWouldYouChangeWorkArrangements',
    name: 'Jos sinulla olisi supervoimia, mitä muuttaisit yrityksesi työskentelyjärjestelyissä?',
    type: 'textArea',
    dataType: String
  }
]

module.exports = questionsCompaniesFinnish