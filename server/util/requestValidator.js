const feedBacksAreNotEmpty = (feedbacks) =>{
  let valid = false
  for(const key in feedbacks){
    if(feedbacks[key] !== ''){
      valid = true
    }
  }
  return valid
}

module.exports = {
  feedBacksAreNotEmpty
}

