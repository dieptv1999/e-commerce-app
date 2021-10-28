import {PrismaClient} from '@prisma/client'

// Prevent multiple instances of Prisma Client in development

let prisma = global.prisma || new PrismaClient()
if (process.env.NODE_ENV === 'development') global.prisma = prisma

export default prisma
