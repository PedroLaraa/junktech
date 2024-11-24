"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserViewModule = void 0;
class UserViewModule {
    static toHttp({ username, email, id, user_type, name, cnpj_cpf, phone, createdAt }) {
        return {
            id,
            username,
            email,
            user_type,
            phone,
            name,
            cnpj_cpf,
            createdAt
        };
    }
}
exports.UserViewModule = UserViewModule;
//# sourceMappingURL=userViewModule.js.map