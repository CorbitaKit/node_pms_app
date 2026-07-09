#!/bin/sh
set -e

echo "Generating Prisma Client..."
npx prisma generate

echo "Running Prisma migrations..."
npx prisma migrate dev

echo "Starting Express..."

exec "$@"