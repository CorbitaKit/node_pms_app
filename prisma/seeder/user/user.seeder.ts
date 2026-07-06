import bcrypt from 'bcrypt';

const main: () => Promise<void> = async (prisma: PrismaClient, Roles: Roles): Promise<void> => {
    await prisma.user.upsert({
        where: { email: 'kit.corbita@gmail.com' },
        create: {
            email: 'kit.corbita@gmail.com',
            password: await bcrypt.hash('Kit D. Great', 10),
            role: {
                connect: {
                    name: Roles.ADMIN,
                },
            },
        },
        update: {},
    });
}

export default main;