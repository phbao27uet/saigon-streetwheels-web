# Use specific Node.js version for better version control
FROM node:20-alpine AS base

# Install dependencies only when needed
FROM base AS deps
# Add libc6-compat for Alpine compatibility
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Enable corepack for better package manager handling
RUN corepack enable

# Copy package files
COPY package.json pnpm-lock.yaml ./
# Install dependencies with frozen lockfile for consistency
RUN pnpm install --frozen-lockfile

# Build stage
FROM base AS builder
WORKDIR /app

# Copy dependencies from deps stage
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Optional: Disable Next.js telemetry during build
# ENV NEXT_TELEMETRY_DISABLED 1

# Build the application
RUN corepack enable && pnpm run build

# Production stage
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production
ENV PORT 3309
# Optional: Disable Next.js telemetry during runtime
# ENV NEXT_TELEMETRY_DISABLED 1

# Create non-root user for security
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copy public files and built application
COPY --from=builder /app/public ./public

# Create .next directory with proper permissions
RUN mkdir .next
RUN chown nextjs:nodejs .next

# Copy built application with proper permissions
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# Switch to non-root user
USER nextjs

# Set hostname for container
ENV HOSTNAME "0.0.0.0"

EXPOSE 3309

CMD ["node", "server.js"]