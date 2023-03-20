require('dotenv').config()

module.exports = ({ config }) => {
  return {
    ...config,
    extra: {
      ...config.extra,
      firebaseApiKey: process.env.FIREBASE_API_KEY
    }
  }
}
