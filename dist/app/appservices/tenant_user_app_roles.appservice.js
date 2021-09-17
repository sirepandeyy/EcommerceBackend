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
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const tenant_user_app_rolesDto_1 = require("../../submodules/Portfolio-Platform-Dtos/tenant_user_app_rolesDto");
const tenant_user_app_rolesEntity_1 = require("../../submodules/Portfolio-Platform-Entities/tenant_user_app_rolesEntity");
const AppServiceBase_1 = require("../../submodules/Portfolio-Platform-Service/AppServiceBase");
const typeorm_2 = require("typeorm");
let dto = require('../../submodules/Portfolio-Platform-Mappings/tenant_user_app_roles.mapper');
let Tenant_User_App_RolesAppService = class Tenant_User_App_RolesAppService extends AppServiceBase_1.default {
    constructor(tenant_user_app_rolesRepository, http) {
        super(http, tenant_user_app_rolesRepository, tenant_user_app_rolesEntity_1.Tenant_User_App_RolesEntity, tenant_user_app_rolesEntity_1.Tenant_User_App_RolesEntity, tenant_user_app_rolesDto_1.Tenant_User_App_RolesDto, dto.tenant_user_app_rolesentityJson, dto.tenant_user_app_rolesdtoJson, dto.tenant_user_app_rolesentityToDtoJson, dto.tenant_user_app_rolesdtoToEntityJson);
        this.tenant_user_app_rolesRepository = tenant_user_app_rolesRepository;
        this.http = http;
    }
};
Tenant_User_App_RolesAppService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(tenant_user_app_rolesEntity_1.Tenant_User_App_RolesEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository, common_1.HttpService])
], Tenant_User_App_RolesAppService);
exports.default = Tenant_User_App_RolesAppService;
//# sourceMappingURL=tenant_user_app_roles.appservice.js.map