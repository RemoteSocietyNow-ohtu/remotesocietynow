const parseFeedBacksFromBody = (body) => {

  const feedbacks = {}

  for (const key in body) {
    if (key.includes('OpenField')) {
      feedbacks[key] = body[key]
    }
  }
  return feedbacks
}


const parseSavedDataFromBody = (body) => {

  const savedData = {}
 

  for (const key in body) {
    if (!key.includes('OpenField')) {
      savedData[key] = body[key]
    }
  }
  return savedData
}

module.exports = {
    parseFeedBacksFromBody,
    parseSavedDataFromBody
}