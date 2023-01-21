import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
async function main() {
  await prisma.habit.deleteMany(); // Remove other existing habits.
  await prisma.habit.create({
    data: {
      title: "Meditate",
      created_at: new Date("2023-01-01T00:00:00.000Z"),
    },
  });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
