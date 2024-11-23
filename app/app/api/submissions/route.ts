import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    
    // Here you would implement actual data storage logic
    // For now, we'll just log the received data
    console.log('Received form submission:', body)

    // Return a success response
    return NextResponse.json({ 
      success: true, 
      message: '문의가 성공적으로 제출되었습니다.' 
    })

  } catch (error) {
    console.error('Form submission error:', error)
    
    // Return an error response
    return NextResponse.json(
      { 
        success: false, 
        message: '문의 제출 중 오류가 발생했습니다. 다시 시도해 주세요.' 
      },
      { status: 500 }
    )
  }
}
