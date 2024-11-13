"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const user_module_1 = require("./infra/http/modules/user.module");
const database_module_1 = require("./infra/database/database.module");
const pickupPoint_module_1 = require("./infra/http/modules/pickup_point/pickupPoint.module");
const auth_module_1 = require("./infra/http/modules/auth/auth.module");
const core_1 = require("@nestjs/core");
const jwtAuth_Guard_1 = require("./infra/http/modules/auth/guards/jwtAuth.Guard");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [user_module_1.UserModule, database_module_1.DatabaseModule, pickupPoint_module_1.PickupPointModule, auth_module_1.AuthModule],
        controllers: [],
        providers: [
            {
                provide: core_1.APP_GUARD,
                useClass: jwtAuth_Guard_1.JwtAuthGuard
            },
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map