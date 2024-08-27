type EnvVariables =
    | 'PORT'
    | 'MONGODB_CNN'
    | 'SECRETKEY'

export const getEnvVariables = (): Record<EnvVariables, string> => {
    const env = { ...process.env }

    return {
        PORT: env.PORT || '',
        MONGODB_CNN: env.MONGODB_CNN || '',
        SECRETKEY: env.SECRETKEY || '',
    }
}