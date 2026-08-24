import { NextRequest, NextResponse } from 'next/server';
import { google } from 'googleapis';
import bcrypt from 'bcryptjs';

function isValidEmail(email: string) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req: NextRequest) {
    try {
        const { email, password } = await req.json();

        if (!email || !isValidEmail(email)) {
            return NextResponse.json(
                { error: 'Enter a valid email address.' },
                { status: 400 }
            );
        }
        if (!password || password.length < 8) {
            return NextResponse.json(
                { error: 'Password must be at least 8 characters.' },
                { status: 400 }
            );
        }

        const passwordHash = await bcrypt.hash(password, 10);

        const auth = new google.auth.JWT({
            email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
            key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
            scopes: ['https://www.googleapis.com/auth/spreadsheets'],
        });

        const sheets = google.sheets({ version: 'v4', auth });

        await sheets.spreadsheets.values.append({
            spreadsheetId: process.env.GOOGLE_SHEET_ID,
            range: 'Sheet1!A:C',
            valueInputOption: 'USER_ENTERED',
            requestBody: {
                values: [[new Date().toISOString(), email, passwordHash]],
            },
        });

        return NextResponse.json({ success: true });
    } catch (err) {
        console.error('Waitlist submit failed:', err);
        return NextResponse.json(
            { error: 'Something went wrong. Try again.' },
            { status: 500 }
        );
    }
}