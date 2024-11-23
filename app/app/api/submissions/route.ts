import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function POST(request: Request) {
  try {
    const body = await request.json()
    
    // Validate the input
    if (!body.name || !body.email || !body.phone) {
      return NextResponse.json(
        { success: false, message: '모든 필드를 입력해주세요.' },
        { status: 400 }
      )
    }

    // Save to database
    const contact = await prisma.contact.create({
      data: {
        name: body.name,
        email: body.email,
        phone: body.phone,
      },
    })

    console.log('Saved form submission:', contact)

    return NextResponse.json({ 
      success: true, 
      message: '문의가 성공적으로 제출되었습니다.',
      data: contact
    })

  } catch (error) {
    console.error('Form submission error:', error)
    
    // Check if the error is a Prisma error
    if (error instanceof Error) {
      // Log the specific error message for debugging
      console.error('Prisma error:', error.message)
    }
    
    return NextResponse.json(
      { 
        success: false, 
        message: '문의 제출 중 오류가 발생했습니다. 다시 시도해 주세요.' 
      },
      { status: 500 }
    )
  } finally {
    await prisma.$disconnect()
  }
}
