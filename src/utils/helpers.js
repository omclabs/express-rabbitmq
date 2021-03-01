require("dotenv/config");
const appDebug = process.env.APP_DEBUG || true;

exports.formatReturn = (status, code, data, message) => {
    if(appDebug && code != 201) {
        message = "Oops something wrong";
    }

    let jsonResponse = {
        "status" : status,
        "code" : code,
        "data" : data,
        "message" : message
    }
    
    return jsonResponse;
};
