# Customer Order Management Application

This is a full-stack web application that allows users to perform CRUD operations (Create, Read, Update, Delete) for customer orders. The backend is built using Laravel, and the frontend uses React.js with Tailwind CSS for styling.

## Prerequisites

- Docker and Docker Compose installed on your system.

## Getting Started

1. Clone the repository:
    ```bash
   git clone https://github.com/mostafa20001379/customer-order-app.git
    ```

2. Build and start the Docker containers:
     ```bash
     docker compose up -d
     ```
   This will start the following containers:
   - `backend`: The Laravel application container.
   - `frontend`: The React.js frontend container.
   - `database`: The MySQL database container.
3. Migrate the database tables and seed the database:
    ```bash
    docker compose exec backend php artisan migrate --seed
    ```

4. Visit the application in your browser:
   http://localhost:3000

## License

This project is open-source and available under the [MIT License](LICENSE).
