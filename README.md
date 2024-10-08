# CookBook - Food Recipe Website

## Project Overview

**CookBook** is a responsive food recipe website where users can search for various recipes using a search bar. The site fetches recipes from the Edamam API and displays them in a visually appealing manner, along with recipe images and a link to view detailed instructions.

### Key Features:
- Recipe search functionality using the Edamam API
- Responsive and modern user interface
- Recipe display with images and direct links to full instructions
- Search suggestions based on user input

## Tech Stack
- **HTML**: Structuring the website layout
- **CSS**: Styling the website, making it responsive and visually appealing
- **JavaScript**: Implementing API requests and handling search functionality
- **Edamam API**: For fetching recipe data

## Project Structure

- `index.html`: Main HTML page that contains the structure of the website, search bar, and header section.
- `style.css`: CSS file for styling the webpage, ensuring a modern, responsive design.
- `script.js`: JavaScript file for handling user interactions, fetching data from the API, and dynamically displaying recipe results.

## How to Use

1. Clone the repository:

    ```bash
    git clone https://github.com/YourGitHubUsername/CookBook.git
    ```

2. Navigate to the project directory:

    ```bash
    cd CookBook
    ```

3. Open `index.html` in your browser to view the website.

4. Type a recipe name (e.g., "Pizza", "Pasta", "Burger") into the search bar and hit "Search". The results will display below the search bar.

## API Setup

The project uses the [Edamam API](https://developer.edamam.com/) to fetch recipes. To set up the API, you need your own API key:

1. Sign up at [Edamam Developer](https://developer.edamam.com/).
2. Replace the `APP_ID` and `APP_KEY` in the `script.js` file with your own:

    ```javascript
    const APP_ID = 'your_app_id';
    const APP_KEY = 'your_app_key';
    ```

## Screenshots

| Search Bar | Recipe Results |
|------------|----------------|
| ![Search Bar](screenshots/search-bar.png) | ![Recipe Results](screenshots/recipe-results.png) |

## Future Improvements
- Add user authentication and registration.
- Implement a "favorite recipes" feature.
- Improve error handling for API requests.

## Author

- Lokeshwar Yemulwar

## License
This project is licensed under the MIT License.
