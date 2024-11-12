// seed.ts
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  const hashedPassword = await bcrypt.hash('yourPassword123', 10);

  await prisma.user.create({
    data: {
      email: 'test@example.com',
      hashpassword: hashedPassword,
      name: 'Test User',
    },
  });

  console.log('Test user created!');
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
