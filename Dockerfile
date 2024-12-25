# Use Node.js Alpine as the base image
FROM node:alpine AS base

# Install dependencies
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Install pnpm
RUN corepack enable pnpm

# Install dependencies
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

# Build the application
FROM base AS builder
WORKDIR /app

# Add build time environment variables
ARG NEXT_PUBLIC_API_URL
ENV NEXT_PUBLIC_API_URL=${NEXT_PUBLIC_API_URL}

ARG NEXTAUTH_URL
ENV NEXTAUTH_URL=${NEXTAUTH_URL}

ARG NEXT_PUBLIC_TINY_API_KEY
ENV NEXT_PUBLIC_TINY_API_KEY=${NEXT_PUBLIC_TINY_API_KEY}

ARG NEXT_PUBLIC_RETURN_URL
ENV NEXT_PUBLIC_RETURN_URL=${NEXT_PUBLIC_RETURN_URL}

ARG NEXT_PUBLIC_CANCEL_URL
ENV NEXT_PUBLIC_CANCEL_URL=${NEXT_PUBLIC_CANCEL_URL}

ARG NEXT_PUBLIC_PAYPAL_CLIENT_ID
ENV NEXT_PUBLIC_PAYPAL_CLIENT_ID=${NEXT_PUBLIC_PAYPAL_CLIENT_ID}

COPY . .
RUN pnpm run build

# Production image
FROM node:alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3309

# Add runtime environment variables
# Ko cần add NEXT_PUBLIC_ do nó đã được add trong build time

ARG AUTH_SECRET
ENV AUTH_SECRET=${AUTH_SECRET}

ARG AUTH_TRUST_HOST
ENV AUTH_TRUST_HOST=${AUTH_TRUST_HOST}

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copy necessary files
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3309

CMD ["node", "server.js"]