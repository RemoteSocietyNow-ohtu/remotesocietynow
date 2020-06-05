const feedBacksAreNotEmpty = (feedbacks) =>{

    for(const key in feedbacks){
        if(typeof feedbacks[key] !== 'string'){
            return false
        }

        if(feedbacks[key] === ''){
            return false
        }
    }

    return true
}

module.exports = {
    feedBacksAreNotEmpty
}

