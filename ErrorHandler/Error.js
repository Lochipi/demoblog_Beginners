class ApiError {
    constructor(status,message) {
        this.status = status;
        this.message = message;
    }

    static InternalServerError(message) {
        return new ApiError(500,message);
    };
    static BadRequest(message) {
        return new ApiError(400,message);
    }
    static UnAuthorized(message) {
        return new ApiError(402,message);
    }
}

module.exports = ApiError;