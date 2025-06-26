import {creatLogger,format,transports} from 'winston';  
const {combine,timestamp,json,colourize} = format;

// custom format for console logging with colors
const consoleLogFormat = format.combine(
    format.colourize(),
    format.print(({level, message , timestamp}) => {

     return `${level}: ${message}`;
    })
)

// create a winston logger
const logger = createLogger({
    level: 'info',
    format: combine(
        colourize,
        json()
    ),
    transports: [
        new transports.Console({format: consoleLogFormat})
    ]
})
