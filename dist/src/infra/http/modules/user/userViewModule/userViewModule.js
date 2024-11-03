"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserViewModule = void 0;
class UserViewModule {
    static toHttp({ username, email, id, user_type, createdAt }) {
        return {
            id,
            username,
            email,
            user_type,
            createdAt
        };
    }
}
exports.UserViewModule = UserViewModule;
//# sourceMappingURL=userViewModule.js.map