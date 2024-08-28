import { authMiddleware } from '@clerk/nextjs/server';

export default authMiddleware({
  publicRoutes: ['/', '/privacy', '/terms', '/api/webhooks/clerk', '/api/webhooks/stripe', '/api/webhooks/nodemailer'],
  apiRoutes: ['/api/(.*)'],
});


export const config = {
  matcher: [
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/(api|trpc)(.*)', // This ensures that /api and /trpc routes are matched
  ],
}; 