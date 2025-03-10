import {faker} from '@faker-js/faker'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main(){
    
  for (let i = 0; i < 50; i++) {
    await prisma.koncert.createMany({
        data: {
          fellepo: faker.music.artist(),
          kezdesiIdo: faker.date.anytime(),
          elmaradE: faker.datatype.boolean()
        }
    });
  };  
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
  })