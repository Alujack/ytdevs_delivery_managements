import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  // // Get the token from cookies (or however you're storing auth tokens)
  // const token = req.cookies.get('token')?.value;

  // // Define the path to the sign-in page
  // const signInPage = '/auth/login';

  // // Check if the user is authenticated and if the path requires authentication
  // if (!token && req.nextUrl.pathname !== signInPage) {
  //   // Redirect to sign-in page if not authenticated
  //   return NextResponse.redirect(new URL(signInPage, req.url));
  // }

  // Allow the request if authenticated or if on the sign-in page
  return NextResponse.next();
}

// Define the paths you want the middleware to run on
export const config = {
  matcher: '/((?!_next|api|static|favicon.ico).*)',
};
