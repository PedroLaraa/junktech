"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PickupPointController = void 0;
const common_1 = require("@nestjs/common");
const createPickupPointUseCase_1 = require("../../../../pickup_point/useCases/createPickupPointUseCase/createPickupPointUseCase");
const createPickupPointBody_1 = require("./dtos/createPickupPointBody");
const pickupPointViewModule_1 = require("./pickupPointViewModule/pickupPointViewModule");
let PickupPointController = class PickupPointController {
    constructor(createPickupPointUseCase) {
        this.createPickupPointUseCase = createPickupPointUseCase;
    }
    ;
    async createPickupPoint(body) {
        const { geolocation, owner_id } = body;
        const pickupPoint = await this.createPickupPointUseCase.execute({
            geolocation,
            owner_id
        });
        return pickupPointViewModule_1.PickupPointViewModule.toHttp(pickupPoint);
    }
    ;
};
exports.PickupPointController = PickupPointController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [createPickupPointBody_1.CreatePickupPointBody]),
    __metadata("design:returntype", Promise)
], PickupPointController.prototype, "createPickupPoint", null);
exports.PickupPointController = PickupPointController = __decorate([
    (0, common_1.Controller)('pickup-point'),
    __metadata("design:paramtypes", [createPickupPointUseCase_1.CreatePickupPointUseCase])
], PickupPointController);
;
//# sourceMappingURL=pickupPoint.controller.js.map