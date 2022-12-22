import pino from "pino"

export const logger = pino({
    level: process.env.LOG_LEVEL || process.env.NEXT_PUBLIC_LOG_LEVEL,
    browser: {
        asObject: true
    }
})
