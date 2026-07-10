import { Roles } from "../../generated/prisma/enums";

export const PERMISSIONS = {
    CREATE_USER: [Roles.ADMIN, Roles.MANAGER],
    DELETE_USER: [Roles.ADMIN],
} as const;

