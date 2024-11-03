"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(props, id) {
        this.props = {
            ...props,
            createdAt: props.createdAt || new Date(),
        };
        this._id = id || crypto.randomUUID();
    }
    get id() {
        return this._id;
    }
    get email() {
        return this.props.email;
    }
    set email(email) {
        this.props.email = email;
    }
    get password() {
        return this.props.password;
    }
    set password(password) {
        this.props.password = password;
    }
    get username() {
        return this.props.username;
    }
    set username(username) {
        this.props.username = username;
    }
    get user_type() {
        return this.props.user_type;
    }
    set user_type(user_type) {
        this.props.user_type = user_type;
    }
    get pickup_points() {
        return this.pickup_points;
    }
    set pickup_points(pickup_points) {
        this.props.pickup_points = pickup_points;
    }
    get createdAt() {
        return this.props.createdAt;
    }
}
exports.User = User;
//# sourceMappingURL=user.entity.js.map