export default () => ({
  app: {
    stage: process.env.APP_STAGE || 'dev',
    port: parseInt(process.env.APP_PORT, 10) || 3000,
  },
});
