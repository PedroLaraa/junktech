"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseModule = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("./prisma/prisma.service");
const UserRepository_1 = require("../../user/repositories/UserRepository");
const PrismaUserRepository_1 = require("./prisma/repositories/PrismaUserRepository");
const PickupPointRepository_1 = require("../../pickup_point/repositories/PickupPointRepository");
const PrismaPickupPointRespository_1 = require("./prisma/repositories/PrismaPickupPointRespository");
let DatabaseModule = class DatabaseModule {
};
exports.DatabaseModule = DatabaseModule;
exports.DatabaseModule = DatabaseModule = __decorate([
    (0, common_1.Module)({
        providers: [prisma_service_1.PrismaService,
            {
                provide: UserRepository_1.userRepository,
                useClass: PrismaUserRepository_1.PrismaUserRepository,
            },
            {
                provide: PickupPointRepository_1.pickupPointRepository,
                useClass: PrismaPickupPointRespository_1.PrismaPickupPointRepository
            },
        ],
        exports: [UserRepository_1.userRepository, PickupPointRepository_1.pickupPointRepository],
    })
], DatabaseModule);
//# sourceMappingURL=database.module.js.map