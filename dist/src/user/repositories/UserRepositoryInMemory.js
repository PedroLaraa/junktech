"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepositoryInMemory = void 0;
class UserRepositoryInMemory {
    constructor() {
        this.users = [];
    }
    async create(user) {
        this.users.push(user);
    }
    async findByUsername(username) {
        const user = this.users.find(user => user.username === username);
        if (!user)
            return null;
        return user;
    }
}
exports.UserRepositoryInMemory = UserRepositoryInMemory;
//# sourceMappingURL=UserRepositoryInMemory.js.map