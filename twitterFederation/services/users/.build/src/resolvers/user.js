"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    __resolveReference: ({ id }, context) => {
        return context.usersLoader.load(id);
    },
};
//# sourceMappingURL=user.js.map