const questionsPeopleFinnish = [
  {
    identifyingString:'dailyCommuteKm',
    name: 'Kuinka pitkä työmatkasi on kilometreinä? Ilmoita matka yhteen suuntaan.',
    type: 'field',
    defaultValue:'0',
    minValue: 0,
    unit: 'km'
  },
  {
    identifyingString:'typicalVehicle',
    name: 'Millä kulkuvälineellä useimmiten kuljet töihin?',
    type: 'multipleChoice',
    options: [
      {string: 'kävellen/pyörällä', value: 'walking'},
      {string: 'bussilla', value: 'bus'},
      {string: 'junalla', value: 'train'},
      {string: 'henkilöautolla', value: 'car'},
      {string: 'moottoripyörällä', value: 'motorcycle'},
    ],
  },
  {
    identifyingString:'noOfDaysOfUsage',
    name: 'Kuinka monena päivänä viikossa kuljet tällä kulkuvälineellä töihin?',
    type: 'slider',
    defaultValue:'0',
    minValue:'0',
    maxValue:'7',
    unit: 'päivänä'
  },
  {
    identifyingString:'secondVehicle',
    name: 'Kuljetko jollain muulla kulkuvälineellä töihin? Millä?',
    type: 'multipleChoice',
    defaultValue: 'walking',
    options: [
      {string: 'kävellen/pyörällä', value: 'walking'},
      {string: 'bussilla', value: 'bus'},
      {string: 'junalla', value: 'train'},
      {string: 'henkilöautolla', value: 'car'},
      {string: 'moottoripyörällä', value: 'motorcycle'},
    ],
  },
  {
    identifyingString:'noOfDaysOfUsageSecond',
    name: 'Kuinka monena päivänä viikossa kuljet tällä kulkuvälineellä töihin?',
    type: 'slider',
    defaultValue:'0',
    minValue:'0',
    maxValue:'7',
    unit: 'päivänä'
  },
  {
    identifyingString:'numberOfRemoteworkDays',
    name: 'Kuinka monena päivänä viikossa keskimäärin teet etätöitä?',
    type: 'slider',
    defaultValue:'0',
    minValue:'0',
    maxValue:'7',
    unit: 'päivänä'
  },
  {
    identifyingString:'opinionRemote',
    name: 'Miten suhtaudut etätyöskentelyyn?',
    type: 'multipleChoice',
    options: [
      { string: 'erittäin kielteisesti', value: 'very negative' },
      { string: 'kielteisesti', value: 'negative' },
      { string: 'ei mielipidettä', value: 'neutral' },
      { string: 'positiivisesti', value: 'positive' },
      { string: 'erittäin positiivisesti', value: 'very positive' },
    ]
  },
  // new questions
  {
    identifyingString:'dailyCommuteMinutes',
    name: 'Kuinka monta minuuttia päivittäinen työmatkasi kestää yhteen suuntaan?',
    type: 'field',
    defaultValue:'0',
    minValue: 0,
    unit: 'minuuttia'
  },
  {
    identifyingString:'annualCommuteExpenses',
    name: 'Kuinka paljon matkasi töihin maksavat vuodessa?',
    type: 'field',
    defaultValue:'0',
    minValue: 0,
    unit: 'euroa'
  },
  {
    identifyingString:'numberOfBusinessTrips',
    name: 'Kuinka monta työmatkaa (meno-paluu) teet vuodessa lentäen?',
    type: 'field',
    defaultValue:'0',
    minValue: 0,
    unit: 'matkaa'
  },
  {
    identifyingString:'numberOfHoursOnPlane',
    name: 'Kuinka monta tuntia vuodessa vietät työmatkoillasi lentokoneessa?',
    type: 'field',
    defaultValue:'0',
    minValue: 0,
    unit: 'tuntia'
  }
]

module.exports = questionsPeopleFinnish