const parseFeedBackSchema = (questions) => {

  const model = {}

  for (const field of questions) {
    if(field.identifyingString === 'companyName'){
      model[field.identifyingString] = String
      model[field.identifyingString + 'OpenField'] = String
      continue
    }
    model[field.identifyingString + 'OpenField'] = String
  }

  return model

}

const parseSavedDataSchema = (questions) => {
  const model = {}

  for (const field of questions) {
    model[field.identifyingString] = field.dataType
  }

  return model
}

module.exports = {
  parseFeedBackSchema,
  parseSavedDataSchema
}

