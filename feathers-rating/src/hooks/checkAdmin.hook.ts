/* eslint-disable @typescript-eslint/no-unused-vars */
import { HookContext } from "@feathersjs/feathers"

export const authorizeAdminOnly = (context: HookContext) => {
    const { user } = context.params
    if (!user || user.role !== 'admin') {
      throw new Error('Only admin users are authorized to create and manage products.')
    }
  }
 