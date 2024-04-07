import { GetLoggingLevel } from "../ConfigLoader/ConfigLoader";
import { LoadConfig } from "../main";
export class Logging {
    static LogLevel = GetLoggingLevel() ?? 'PROD';
    static Debug(message) {
        if(this.LogLevel === 'DEBUG'){
            console.log(message);
        }
        
    }
    static Info(message){
        if(this.LogLevel ==='INFO' || this.LogLevel === 'DEBUG'){
            console.info(message);
        }
    }
    static Warn(message) {
        if(this.LogLevel ==='WARN' || this.LogLevel ==='DEBUG'){
            console.warn(message);
        }

    }
    static Error(message) {
        console.error(message);
    }
}