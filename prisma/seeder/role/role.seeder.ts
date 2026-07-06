const main: () => Promise<void> = async (prisma: PrismaClient, Roles: Roles): Promise<void> => {
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