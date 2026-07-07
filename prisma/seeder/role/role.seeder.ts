import { PrismaClient } from '../../generated/prisma/client';
import { Roles } from '../../generate/prisma/enums';

const main = async (prisma: PrismaClient, Roles: Roles): Promise<void> => {
    Object.values(Roles).forEach(async (role) => {
        await prisma.role.upsert({
            where: { name: role },
            update: {},
            create: {
                name: role,
            },
        });
    });
}

export default main;