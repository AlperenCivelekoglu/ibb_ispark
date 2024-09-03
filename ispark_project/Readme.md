# ISPARK_PROJECT

## Description
ISPARK_PROJECT is a Django-based web application for managing parking spots. It includes features for importing and exporting data, as well as administrative functionalities for managing parking spot information.

## Prerequisites
Before you begin, ensure you have met the following requirements:

1. **Python:** Make sure you have Python installed. You can download it from [python.org](https://www.python.org/).

2. **Pip:** Ensure you have pip installed. Pip is the package installer for Python. You can install pip using the following command:
    ```bash
    python -m ensurepip --upgrade
    ```

3. **Django:** Install Django using pip:
    ```bash
    pip install django
    ```

4. **Django REST framework:** Install Django REST framework using pip:
    ```bash
    pip install djangorestframework
    pip install django_extensions
    ```

5. **Node.js and npm:** Make sure you have Node.js and npm installed. You can download them from [nodejs.org](https://nodejs.org/). Verify the installation with:
    ```bash
    node -v
    npm -v
    ```

## Installation
To get started with ISPARK_PROJECT, follow these steps:

1. **Clone the repository:**
    ```bash
    git clone https://github.com/yourusername/ISPARK_PROJECT.git
    cd ISPARK_PROJECT
    ```

2. **Apply migrations:**
    ```bash
    python manage.py makemigrations
    python manage.py migrate
    ```

3. **Create a superuser:**
    ```bash
    python manage.py createsuperuser
    ```

4. **Run the development server:**
    ```bash
    python manage.py runserver
    ```

## Usage
Once the server is running, you can access the application at `http://127.0.0.1:8000/`. Log in to the admin interface at `http://127.0.0.1:8000/admin/` using the superuser credentials you created.

To run the frontend project, follow these steps:

1. **Navigate to the frontend directory:**
    ```bash
    cd frontend
    ```

2. **Install the frontend dependencies:**
    ```bash
    npm install
    ```

3. **Start the frontend development server:**
    ```bash
    npm start
    ```

Once the frontend server is running, you can access the frontend application at `http://localhost:3000/`.

## Features
- **Admin Interface:** Manage parking spots through the Django admin interface.
- **Import/Export:** Easily import and export parking spot data using the `django-import-export` library.
- **Search and Filter:** Search and filter parking spots by park name, location name, county name, and park type.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.