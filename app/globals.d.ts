declare namespace NodeJS {
  interface ProcessEnv {
    readonly COGNITO_CLIENT_ID: string
    readonly COGNITO_CLIENT_SECRET: string
    readonly COGNITO_ISSURE: string
  }
}
