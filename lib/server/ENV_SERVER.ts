
/* DO NOT EDIT! THIS IS AUTO-GENERATED FILE */
import ENV_PUBLIC from "./../ENV_PUBLIC"
export default class ENV_SERVER extends ENV_PUBLIC {
  
  ////////////////////////////////////////////////////////////////////////
  // Common Area
  
	static SERVER_URL = 
						(process.env.SERVER_URL_OVERRIDE ??
						process.env.SERVER_URL) as string;
		
	static API_PREFIX = 
						(process.env.API_PREFIX_OVERRIDE ??
						process.env.API_PREFIX) as string;
  ////////////////////////////////////////////////////////////////////////
  // Forked Area
  
  ////////////////////////////////////////////////////////////////////////
  // Init Area
  static is_ENV_SERVER_init = false;
  static init_ENV_SERVER = () => {
    ENV_SERVER.init_ENV_PUBLIC();
    
      if (ENV_SERVER.is_ENV_SERVER_init) {
        return;
      }
      if (!(ENV_SERVER.IS_DEV || ENV_SERVER.IS_PROD || ENV_SERVER.IS_QA)) {
        throw new Error("Invalid NODE_ENV: " + ENV_SERVER.DST_ENV);
      }
    
      const variables = {
        IS_DEV: ENV_SERVER.IS_DEV,
        IS_PROD: ENV_SERVER.IS_PROD,
        IS_QA: ENV_SERVER.IS_QA,
        IS_DEV_OR_QA: ENV_SERVER.IS_DEV_OR_QA,
        SERVER_URL : ENV_SERVER.SERVER_URL,
				API_PREFIX : ENV_SERVER.API_PREFIX
      };
      const isNullish = (val: string) =>
        val === undefined ||
        val === null ||
        val?.length === 0;
    
      const missing = Object.keys(variables).filter((key) => isNullish(variables[key])).filter((key) => !key.toLowerCase().startsWith("nullable_"));
    
      if (missing.length > 0) {
        throw new Error(".env.local에 환경변수를 추가해주세요 : " + missing.join(", "));
      }
      ENV_SERVER.is_ENV_SERVER_init = true;
  
  }

  ////////////////////////////////////////////////////////////////////////
  // toObject Area
  static toObject(): { [key: string]: any } {
    const obj: { [key: string]: any } = ENV_PUBLIC.toObject();
    
    Object.getOwnPropertyNames(this).forEach((key) => {
      const value = this[key as keyof typeof ENV_SERVER];
      if (typeof value === "string") {
        obj[key] = value;
      }
    });
    
    return obj;
  }
}
ENV_SERVER.init_ENV_SERVER();
