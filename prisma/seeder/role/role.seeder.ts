import { PrismaClient } from '../../../generated/prisma/client';
import { Roles } from '../../../generated/prisma/enums';

const main = async (prisma: PrismaClient): Promise<void> => {
    await Promise.all(
        Object.values(Roles).map((role) =>
            prisma.role.upsert({
                where: {
                    name: role,
                },
                update: {},
                create: {
                    name: role,
                },
            })
        )
    );
};

export default main;