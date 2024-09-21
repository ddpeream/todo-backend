"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    type: 'postgres',
    url: 'postgresql://postgres:YmzpGStspcELADLfszRaHkEICZfzjUqa@autorack.proxy.rlwy.net:52268/railway',
    entities: [__dirname + '/src/**/*.entity{.ts,.js}'],
    migrations: [__dirname + '/src/database/migrations/*{.ts,.js}'],
    synchronize: false,
    logging: true,
};
//# sourceMappingURL=ormconfig.js.map