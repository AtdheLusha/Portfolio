import { NextRequest, NextResponse } from "next/server";

interface Message {
  id: string;
  text: string;
  sender: "user" | "company";
  timestamp: string;
  email?: string;
  name?: string;
}

// In un'applicazione reale, questi messaggi verrebbero salvati in un database
// Per ora, li manteniamo in memoria (in produzione usare un database)
const messages: Message[] = [];

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { text, sender, email, name } = body;

    if (!text || !sender) {
      return NextResponse.json(
        { error: "Text and sender are required" },
        { status: 400 }
      );
    }

    const newMessage: Message = {
      id: Date.now().toString(),
      text,
      sender,
      timestamp: new Date().toISOString(),
      email,
      name,
    };

    messages.push(newMessage);

    // In un'applicazione reale, qui salveresti il messaggio nel database
    // e potresti inviare una notifica email all'azienda

    return NextResponse.json({ success: true, message: newMessage });
  } catch (error) {
    console.error("Error handling chat message:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    // In un'applicazione reale, recupereresti i messaggi dal database
    // filtrati per utente/sessione
    return NextResponse.json({ messages });
  } catch (error) {
    console.error("Error fetching chat messages:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

