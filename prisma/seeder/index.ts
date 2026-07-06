import UserSeeder from './user/user.seeder';
import RoleSeeder from './role/role.seeder';
import { prisma } from '../../src/utils/prisma';
import { Roles } from '../../generated/prisma/enums';

const main: () => Promise<void> = async () => {
    await RoleSeeder(prisma, Roles);
    console.log('Role seeding completed.');

    await UserSeeder(prisma, Roles);
    console.log('User seeding completed.');
};

main()
    .catch((err) => {
        console.error(err);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });