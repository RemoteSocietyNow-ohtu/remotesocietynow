
const questions = require('../services/questions/questionsCompanies')
const companyAnswers = {
}

const correctAnswerType = (q) => {
  if (q.type === 'text') {
    return 'company'
  } else if (q.type === 'number') {
    return 2
  } else if (q.type === 'multipleChoice') {
    return q.options[0].value
  } else if (q.type === 'textArea') {
    return '1 2 3 4 5'
  }
}

questions.map(q => {
  companyAnswers[q.identifyingString] = correctAnswerType(q),
  companyAnswers[q.identifyingString + 'OpenField'] = 'open'
})

const companyAnswersAllCommentFieldsEmpty = {
}

questions.map(q => {
  companyAnswersAllCommentFieldsEmpty[q.identifyingString] = correctAnswerType(q),
  companyAnswersAllCommentFieldsEmpty[q.identifyingString + 'OpenField'] = ''
})



module.exports = { companyAnswers, companyAnswersAllCommentFieldsEmpty}