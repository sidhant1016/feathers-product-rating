"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authorizeAdminOnly = void 0;
const authorizeAdminOnly = (context) => {
    const { user } = context.params;
    if (!user || user.role !== 'admin') {
        throw new Error('Only admin users are authorized to create and manage products.');
    }
};
exports.authorizeAdminOnly = authorizeAdminOnly;
//# sourceMappingURL=checkAdmin.hook.js.map