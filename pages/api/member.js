import { prisma } from "@/lib/prisma"

export default async function handler(req, res) {
  // if (req.method === 'GET') {
  //   const members = await prisma.bc_benefit.findMany()
  //   res.status(200).json(members)
  // } else if (req.method === 'POST') {
  //   const { name, email } = req.body
  //   const member = await prisma.member.create({
  //     data: { name, email },
  //   })
  //   res.status(201).json(member)
  // } else {
  //   res.status(405).end()
  // }
}