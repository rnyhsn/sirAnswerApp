import { NextResponse } from "next/server";
import { auth } from "./utils/auth";
import { PUBLIC_ROUTES } from "./utils/actions/route";


export default auth((req) => {

    // console.log(req);
    // console.log("Middleware is hit");
    const user = req.auth?.user;
    const isAuthenticated = !!user;
    console.log("Is authenticated:", isAuthenticated);

    // const isPublicRoute = !!PUBLIC_ROUTES.find((route) => req.nextUrl.pathname.startsWith(route));
    // console.log("Public Route: ", isPublicRoute);

    // if(!isAuthenticated && !isPublicRoute) {
    //     return NextResponse.redirect(new URL("/login", req.nextUrl));
    // }

    if(isAuthenticated) {
        if(user?.role !== 'ADMIN' && req.nextUrl.pathname.startsWith("/dashboard")) {
            return NextResponse.redirect(new URL("/", req.url));
        }
    } else {
        if(user?.role !== 'ADMIN' && req.nextUrl.pathname.startsWith("/dashboard")) {
            return NextResponse.redirect(new URL("/login", req.url));
        }
    }

    // if((req.auth?.user && req.auth.user.role !== "ADMIN" && req.nextUrl.pathname.startsWith("/dashboard"))) {
    //     return  NextResponse.redirect(new URL("/", req.url));
    // }
})

export const config = {
    matcher: [
        "/((?!api|_next/static|_next/image|favicon.ico).*)",
        "/dashboard/:path*"
    ],
  }