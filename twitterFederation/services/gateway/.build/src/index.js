"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_1 = require("apollo-server");
const gateway_1 = require("@apollo/gateway");
const errors_1 = __importDefault(require("./errors"));
const gateway = new gateway_1.ApolloGateway({
    serviceList: [
        {
            name: 'users',
            url: 'http://localhost:8083',
        },
        {
            name: 'comments',
            url: 'http://localhost:8081',
        },
        {
            name: 'tweets',
            url: 'http://localhost:8084',
        },
    ],
});
const server = new apollo_server_1.ApolloServer({
    gateway,
    formatError: errors_1.default,
    debug: false,
});
server.listen({ port: process.env.PORT || 8080 }).then(({ url }) => {
    console.log(`Gateway running at ${url}`);
});
//# sourceMappingURL=index.js.map