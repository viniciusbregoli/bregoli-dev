import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// In-memory store for rate limiting (in production, use Redis or similar)
const rateLimit = new Map<string, { count: number; timestamp: number }>();

// Rate limit configuration
const RATE_LIMIT = {
  maxRequests: 5, // Maximum number of requests
  windowMs: 60 * 60 * 1000, // 1 hour window
};

export function middleware(request: NextRequest) {
  // Only apply rate limiting to the contact API endpoint
  if (request.nextUrl.pathname === '/api/contact') {
    const ip = request.ip ?? 'anonymous';
    const now = Date.now();

    // Clean up old entries
    for (const [key, value] of rateLimit.entries()) {
      if (now - value.timestamp > RATE_LIMIT.windowMs) {
        rateLimit.delete(key);
      }
    }

    // Check rate limit
    const userRateLimit = rateLimit.get(ip);
    if (userRateLimit) {
      if (now - userRateLimit.timestamp > RATE_LIMIT.windowMs) {
        // Reset if window has passed
        rateLimit.set(ip, { count: 1, timestamp: now });
      } else if (userRateLimit.count >= RATE_LIMIT.maxRequests) {
        // Rate limit exceeded
        return NextResponse.json(
          { error: 'Too many requests. Please try again later.' },
          { status: 429 }
        );
      } else {
        // Increment counter
        userRateLimit.count++;
      }
    } else {
      // First request
      rateLimit.set(ip, { count: 1, timestamp: now });
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/api/contact',
}; 