export default () => {
  const stage = process.env.APP_STAGE || 'dev'
  return {
    app: {
      stage,
      port: process.env.APP_PORT || 3000
    },
    db: {
      mongo: {
        uri: process.env.MONGODB_URI,
      }
    }
  }
}