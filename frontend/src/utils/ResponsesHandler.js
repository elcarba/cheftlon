function errorHandler(error){
    return error.response && error.response.data.hasOwnProperty("data")
        ? retrieveErrors(error.response.data.data)
        : (
            error.response.data.message !== "" ?
                error.response.data.message : error.message
        );
}

function retrieveErrors(error){
    let str = "";
    for (const [key, value] of Object.entries(error)) {
        str += `${key}: ${value}. `
    }

    return str;
}

export const handler = {
    errorHandler
};