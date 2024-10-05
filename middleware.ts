import { clerkMiddleware,createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const isPublicRoutes =  createRouteMatcher(['/api/webhooks/clerk'])


export default clerkMiddleware((_,req) => {
  if(isPublicRoutes(req)){
    return NextResponse.next()
  }
});


export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};


// import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// const isPublicRoutes = createRouteMatcher(['/api/webhooks/clerk']);

// export default clerkMiddleware((auth, req) => {
//   if (isPublicRoutes(req)) {
//     return NextResponse.next(); // Uncomment this line if NextResponse is available
//   }
// });
