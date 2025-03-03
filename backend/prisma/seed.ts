import { PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker'

const prisma = new PrismaClient();
async function seed() {
  prisma.$connect();
  for (let i = 0; i < 5; ++i) {
    await prisma.koncert.create({
      data: {
        fellepo: faker.person.fullName(),
        kezdes: faker.date.future().toISOString(),
        idotartam: faker.number.int({min: 60, max: 1000}),
        elmarad: Math.random() < 0.8
    }
    });
  }
}

seed().then(() => prisma.$disconnect());
