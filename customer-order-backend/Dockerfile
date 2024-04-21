FROM php:8.1-apache

# Install system dependencies
RUN apt-get update && apt-get install -y \
    git \
    curl \
    libpng-dev \
    libonig-dev \
    libxml2-dev \
    zip \
    unzip \
    libzip-dev

# Clear cache
RUN apt-get clean && rm -rf /var/lib/apt/lists/*

# Install PHP extensions
RUN docker-php-ext-install pdo_mysql mbstring exif pcntl bcmath gd

# Install Composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# Copy the Laravel project files
COPY . /var/www/html

# Copy the environment file (if necessary)
COPY .env.example /var/www/html/.env

# Install project dependencies
RUN composer install --working-dir=/var/www/html --prefer-dist --no-scripts

# Generate the application key
RUN php /var/www/html/artisan key:generate

# Set the correct file permissions
RUN chown -R www-data:www-data /var/www/html/storage /var/www/html/bootstrap/cache

# Enable Apache rewrite module
RUN a2enmod rewrite

# Expose port 8000 for Laravel development server
EXPOSE 8000

# Start Laravel development server
CMD php /var/www/html/artisan serve --host=0.0.0.0 --port=8000
