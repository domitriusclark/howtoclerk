import { createRouteMatcher, clerkMiddleware } from "@clerk/nextjs/server";

const isProtectedDash = createRouteMatcher("/dashboard(.*)");

export default clerkMiddleware((auth, req) => {
  if (isProtectedDash(req)) auth().protect();
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/"],
};
