declare namespace NodeJS {
  interface ProcessEnv {
    readonly COGNITO_CLIENT_ID: string
    readonly COGNITO_CLIENT_SECRET: string
    readonly COGNITO_ISSURE: string
    readonly DYNAMO_REGION: string
    readonly DYNAMO_ACCESS_KEY_ID: string
    readonly DYNAMO_SECRET_ACCESS_KEY: string
    readonly DYNAMO_ENDPOINT: string
    readonly APP_URL: string
  }
}
