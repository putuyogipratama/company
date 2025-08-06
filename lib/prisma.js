import { PrismaClient } from '@prisma/client'

let prisma

if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient()
} else {
  // Gunakan globalThis agar tidak membuat banyak instance saat dev
  if (!global.prisma) {
    global.prisma = new PrismaClient({
      log: ['query'],
    })
  }
  prisma = global.prisma
}

export { prisma }
