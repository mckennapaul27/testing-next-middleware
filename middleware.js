import { NextResponse } from 'next/server';

export function middleware(req) {
    console.log('Middleware file', req);
    // if (request.nextUrl.pathname.startsWith('/about')) {
    //     return NextResponse.rewrite(new URL('/about-2', request.url));
    // }

    // if (request.nextUrl.pathname.startsWith('/dashboard')) {
    //     return NextResponse.rewrite(new URL('/dashboard/user', request.url));
    // }
    return NextResponse.rewrite(req.nextUrl);
}
