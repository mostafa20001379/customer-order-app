FROM php:fpm-alpine

WORKDIR .

# Install dependencies
RUN apk --no-cache add \
    curl \
    libpng \
    libpng-dev \
    libjpeg-turbo-dev \
    libwebp-dev \
    zlib-dev \
    libzip-dev \
    composer \
    php-xml

# Install PHP extensions
RUN docker-php-ext-configure gd --with-jpeg --with-webp \
    && docker-php-ext-install gd pdo pdo_mysql zip

# Set recommended PHP configuration
RUN mv "$PHP_INI_DIR/php.ini-production" "$PHP_INI_DIR/php.ini"

# Copy application files
COPY . .

# Set file permissions
RUN chown -R www-data:www-data /var/www/html/storage /var/www/html/bootstrap/cache \
    && chmod -R 775 /var/www/html/storage /var/www/html/bootstrap/cache

# Install Composer dependencies and update
RUN composer install --ignore-platform-reqs --no-scripts \
    && composer update --ignore-platform-reqs --no-scripts

# Copy the appropriate .env file
COPY .env.example .env

# Laravel key generation
RUN php artisan key:generate

# Expose port 9000 for PHP-FPM
EXPOSE 9000

# Start PHP-FPM
CMD ["php-fpm"]
