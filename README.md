## Setup Instructions

### Prerequisites

- Docker and Docker Compose
- Git
- Node.js and npm

### Running the Application

1. **Clone the repository:**

    ```sh
    git clonehttps://github.com/Okiitr/Qantaco-project.git
    cd Qantaco-project
    ```

2. **Build and Run the Docker Containers:**

    ```sh
    docker-compose up --build
    ```

4. **Apply Migrations:**

    ```sh
    docker-compose exec backend python manage.py migrate
    ```

5. **Create a Superuser:**

    ```sh
    docker-compose exec backend python manage.py createsuperuser
    ```

6. **Access the Application:**

    - Backend: `http://localhost:8000`
    - Frontend: `http://localhost:3000`

## Design Patterns

### Backend

- **Django REST Framework**: Used for creating APIs.
- **Function-Based Views**: Used for simplicity and clarity in API endpoints.
- **Validators**: Custom validators are used to ensure data integrity for fields like `first_name`, `last_name`, `date_of_birth`, and `phone_number`.

### Frontend

- **React Components**: Functional components are used for the frontend.
- **Axios**: Used for making HTTP requests to the backend API.
- **State Management**: `useState` and `useEffect` hooks are used for managing state and side effects.

## Architecture Diagram


## Assumptions and Decisions

- **Authentication**: Token-based authentication is used for securing API endpoints.
- **Error Handling**: Errors during customer data saving are handled with alerts on the frontend.
- **Database**: PostgreSQL is used as the database for its robustness and compatibility with Docker.
- **Containerization**: Docker is used to containerize the application, ensuring consistent environments and easier deployment.
