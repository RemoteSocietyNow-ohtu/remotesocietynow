import mailConfig from '../../config/mailConfig'

export const english = {
  name: 'English',
  headers: {
    mainHeader: 'Remote Work - Save Money by Saving the Planet',//'The most enjoyable way to save the planet.',
    calculateChoiceHeader: 'I am calculating benefits for...',
    companies: 'Calculator',
    people: 'Calculator',
    calculator: 'calculator',
    aboutTheMath: 'About the math',
    privacyPolicy: 'Privacy Policy',
    gdprCompliance: 'GDPR (your data protection rights)',
    deletionConfirmation: 'Confirm',
    workDoneRemotelyPercent: 'of work done remotely',
    workDoneRemotelyDays: 'Days of work done remotely',
    loginHeader: 'Login',
    signUpHeader: 'Sign Up',
    commentFieldHeader: 'Is this question relevant to you? Share your ideas! How can we make it better?',
    subscribeToOurNewsletter: 'Subscribe to Our Newsletter',
    emailAddress: 'Email Address:',
    newsletterThanksForSubscribing: 'Thank you for subscribing to our newsletter!',
    connectWithUs: 'Connect with us:',
    adminHeader: 'Admin Panel', 
    finishedWithQuestions: 'Great! We are finished with the questions.',
    downloadFiles: 'Download .csv',
    yourResults: 'Your Results',
    yourAnswers: 'Your Answers',
    about: 'About Us'
  },
  content: {
    main: 'The Most Enjoyable Way to Save the Planet! While making more money and saving time.',
    lead: 'Remote work and remote life can become new key efforts in limiting CO2 emissions. For every employee switching to remote work, a lot of harmful air pollution is reduced, while you and your company actually earn real money and save time.',
    gdprCompliance: {
      rightToKnow: 'You’re entitled to know exactly how your data is collected and used.',
      rightToAsk: 'You can ask what information has been collected about you.',
      rightToCorrect: 'If there are mistakes in your data, you can request to have them corrected.',
      rightToDelete: 'You can have your data deleted from records.',
      rightToRefuse: 'You’re allowed to refuse data processing, for example, marketing efforts.'
    },
    goBack: 'Go Back',
    contactInfo: 'Any inquiries can be directed to ' + mailConfig.CONTACT_MAIL,
    authenticationLabelEmail: 'Email',
    authenticationLabelPassword: 'Password',
    authenticationLabelConfirmPassword: 'Confirm Password',
    authenticationLoginCreateAccountText: 'Do not have an account? Sign up here',
    privacyPolicy: 'Before we start. By proceeding you acknowledge that your personal data is processed in accordance with our ',
    cookiePolicy: 'This site uses cookies to work properly for users who have logged in. If you agree to our use of cookies, please check this.',
    deletionConfirmation: 'Are you sure you want to delete your account and all data related to it? This action cannot be reversed.',
    newsletter: 'Remotework is now more topical than ever. Don\'t miss a thing! Sign up for our newsletter on latest things related to remote work.',
    newsletterThanksForSubscribing: 'You will soon recieve a welcome email.',
    weAreCommitted: 'We at RemoteSocietyNow are committed to work for better environment and to help you save money! Contact us and we can find out together how we can help make your remote work impact better.',
    answersWillBeSaved: 'You are logged in and your answers will be saved. You will be able to get back to them later.',
    ifYouwouldLikeToSavePartOne: 'If you would like to save your answers and results in order to get back to them later, please take a step to ',
    or: ' or ',
    ifYouwouldLikeToSavePartTwo: ' before calculating your results. You can also continue without logging in.',
    thisPdfWasGenerated: 'This PDF was generated from the answers given at ' + window.location.hostname + '- A web aplication to help you save money and environment by working remote.',
    testReductions: 'Test your reductions now!',
    aboutUs: 'About us',
    clickhere: 'the math used?',
    mathinfo: 'Want to learn more about ',
  },
  buttons: {
    calculate: 'View Results',
    main: 'Calculate benefits',
    data: 'Your Data',
    downloadUserDataPerson: 'Download My Data (Personal)',
    downloadUserDataCompany: 'Download My Data (Company)',
    deleteUserData: 'Delete My Account & Data',
    leaveComment: 'Help us make this calculator better',
    calculateChoiceMyself: 'Myself',
    calculateChoiceCompanies: 'My company',
    accept: 'Accept',
    subscribe: 'Subscribe',
    signUp: 'Sign Up',
    login: 'Login',
    tryAgain: 'Please try again',
    contactUs: 'Contact us',
    getBackToQuestions: 'Back to questions',
    downloadCompanies: 'Company Data',
    downloadPersons: 'Person Data',
    downloadCompanyFeedback: 'Feedback (Company)',
    downloadPersonsFeedback: 'Feedback (Person)',
    admin: 'Admin',
    downloadResultsasPdf: 'Download Results as a PDF-file!',
    generatingPdf: 'generating PDF...',
    yes: 'Yes',
    no: 'No',
  },
  navigation: {
    gdprCompliance: 'GDPR',
    aboutUs: 'About Us',
    forPeople: 'For people',
    forCompany: 'For company'
  },
  errors: {
    errorSendingAnswers: 'An Error occured while sending answers',
    errorFetchingQuestions: 'An Error occured while fetching questions',
    errorSendingEmailAddress: 'An Error occured while subscribing',
    invalidCredentials: 'Invalid credentials.',
    usernameNotUnique: 'An account with that email is already registered.',
  },
  success: {
    loggedIn: 'Logged in.',
    accountCreated: 'Account created. You can log in now.',
  },
  actions: {
    sending: 'Sending...'
  },
  projectInfo: [
    'The Most Enjoyable Way to Save the Planet! While making more money and saving time.',
    'How does this save the planet?',
    'Remote-work and remote-life can become new key efforts in limiting CO2 emissions.',
    'For every employee switching to remote work, an average of X tons of harmful air pollution is reduced. This is the same as planting Y number of trees.',
    'Over time less office space needs to be used and built, which is like the effect of a forest. Imagine the environmental effect if 100,000 companies start doing this...',
    'Isn’t that costly? NO. You and your company actually earn real money and save time, plus productivity increases.',
    'Let us show you how! Leave your contact info and we’ll call back.',
    'For each legitimate business talk with a new client we will plant a real tree – for real.'
  ],
  mathInfo: 'We factor in the following variables: more text to be added ',

  privacyPolicy: {
    infoTexts: {
      privacyPolicyHeadingMain: 'Privacy Policy',
      applicationHeading:'1. Application',
      application: 'We take the privacy of your personal data seriously. Because of that, we have created this Privacy Policy.\
      Please read this Privacy Policy. It includes important information regarding your Personal Data and other\
      information. If you choose to use our website, including filling in RemoteSocietyNow’s surveys,then you\
      agree to the collection and use of information as specified in this policy. The Personal Information that we\
      collect is used for providing and improving our services. We will not use or share your information with\
      anyone except as described in this Privacy Policy.',
      personalDataHeading: '2. Personal data',
      dataCollectionHeadingSmall: '2.1 What personal data does RemoteSocietyNow collect from you?',
      dataCollection: 'When User answers to a survey, we collect company name, (and email address if logged in) from users, and response choices. \
      Please do not reveal highly confidential company information in your answers. \
    We use this information to provide the User an analysis of the responses, and occasionally to contact Users with surveying insights, opportunities, information, offers and other material. \
    Users can unsubscribe any time from being contacted while still retaining their survey information.',
      dataViewingHeadingSmall: '2.2 Who can view your personal data',
      dataViewing: 'The survey answers are not accessible publicly. \
    Survey answers and the name of User are visible to the User and RemoteSocietyNow. \
    With permission from User, they may be shared with other companies.  \
    RemoteSocietyNow uses User’s survey answers for improving the survey content and its analysis.\
    RemoteSocietyNow may disclose anonymized survey answers.',
      dataStorageHeadingSmall: '2.3 How RemoteSocietyNow stores your data?',
      dataStorage: 'We take what we believe to be reasonable steps to protect the Personal Data collected via the Services from loss, misuse, unauthorized use, access, inadvertent disclosure, alteration and destruction. \
    However, please remember that no method of transmission over the internet, or method of electronic storage is 100% secure and reliable, and we cannot guarantee its absolute security.',
      dataAccessHeadingSmall: '2.4 Accessing, updating, correcting or deleting your data',
      dataAccess: 'In the case of RemoteSocietyNow surveys, the personal information collected (name and email address) are stored.\
    Respondents can request access to their personal data being stored by us. \
    Please contact us at ' + mailConfig.CONTACT_MAIL + ' if you want to access, update, correct or delete your personal data.',
      cookiesHeading: '3. Cookies',
      cookies: 'Cookies are files with small amount of data that are commonly used as an anonymous unique identifier. \
    These are sent to your browser from the website that you visit and are stored on your computer’s hard drive. \
    Our website uses these “cookies” only to implement login funtionality. \
    If you choose to refuse our cookies, you may not be able to use some portions of our website.',
      contactHeading: '4. Contact us',
      contact: 'If you have any questions about this Privacy Policy, please contact us under ' + mailConfig.CONTACT_MAIL
    }
  }
}