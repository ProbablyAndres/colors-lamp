# COLORS LAMP Application

## Description

COLORS is a simple web application built using the LAMP stack. Users can log in, add colors to their account, and search through colors they have previously added.

This project was originally created as part of the COP 4331C COLORS Lab and has been organized into a GitHub repository for version control and documentation.

## Technologies Used

- Linux
- Apache
- MySQL
- PHP
- HTML
- CSS
- JavaScript
- AJAX / XMLHttpRequest
- JSON
- Git
- GitHub

## Project Structure

- `api/` contains the PHP API endpoints and database connection logic.
- `public/` contains the frontend HTML, CSS, JavaScript, and image files.
- `.env.example` shows the required database environment variables.
- `.gitignore` prevents sensitive and unnecessary files from being committed.

## Setup Instructions

1. Set up a LAMP environment with Linux, Apache, MySQL, and PHP.
2. Create the MySQL database and the required `Users` and `Colors` tables.
3. Configure the following environment variables:
   - `DB_HOST`
   - `DB_USER`
   - `DB_PASSWORD`
   - `DB_NAME`
4. Place the project files on the web server.
5. Make sure Apache and MySQL are running.

## Running the Application

Open the application through the Apache web server.

The login page is located in:

`public/index.html`

After logging in, users can add colors and search through saved colors.

## API Endpoints

The application uses the following PHP endpoints:

- `Login.php`
- `AddColor.php`
- `SearchColors.php`

The frontend communicates with these endpoints using JSON requests.

## Assumptions and Limitations

- A working LAMP environment is required.
- The MySQL database must already contain the required tables.
- Database credentials are not included in this repository.
- This application was created for educational purposes.