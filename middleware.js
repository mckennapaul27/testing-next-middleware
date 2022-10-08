import { NextResponse } from 'next/server';

export function middleware(req) {
    console.log('Middleware file');
    console.log(req.nextUrl);
    console.log(req.geo);
    console.log(req.cookies);
    console.log(req.ip);
    if (req.url) {
        console.log(req.url);
    } else {
        console.log('req.url not found');
    }

    // if (request.nextUrl.pathname.startsWith('/about')) {
    //     return NextResponse.rewrite(new URL('/about-2', request.url));
    // }

    // if (request.nextUrl.pathname.startsWith('/dashboard')) {
    //     return NextResponse.rewrite(new URL('/dashboard/user', request.url));
    // }
    return NextResponse.rewrite(req.nextUrl);
}
