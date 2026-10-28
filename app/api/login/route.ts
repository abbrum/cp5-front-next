import { NextRequest, NextResponse } from 'next/server'

interface LoginBody {
  user: string
  password: string
}

type LoginResponse = {
  token?: string
  message?: string
}

export async function POST(request: NextRequest): Promise<NextResponse<LoginResponse>> {
  try {
    if (!process.env.APP_PASSWORD) {
      return NextResponse.json(
        { message: 'APP_PASSWORD não configurada no .env.local (reinicie o npm run dev).' },
        { status: 500 }
      )
    }

    const { user, password }: LoginBody = await request.json()

    if (!user || !password) {
      return NextResponse.json({ message: 'Usuário e senha são obrigatórios.' }, { status: 400 })
    }

    if (password === process.env.APP_PASSWORD) {
      return NextResponse.json({ token: user })
    }

    return NextResponse.json({ message: 'Senha inválida.' }, { status: 401 })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ message: 'Erro interno no servidor.' }, { status: 500 })
  }
}
