# SongChain

SongChain is a project developed for my data structures course at university. It demonstrates the implementation of a doubly linked list to manage a collection of songs. The project includes functionalities to add, remove, search, sort, shuffle, and swap songs in a playlist.

## Features

-   **Add Song**: Add a new song to the library.
-   **Remove Song**: Remove a specific song from the library.
-   **Search Songs**: Search for songs based on a query and a key (name, artist, genre).
-   **Sort Songs**: Sort the songs based on a selected key (name, artist, genre).
-   **Shuffle Songs**: Shuffle the songs in the playlist using the Fisher-Yates algorithm.
-   **Swap Songs**: Swap two songs in the playlist by their indices.
-   **Add Sample Songs**: Add a predefined list of sample songs to the library.

## Project Structure

-   **index.html**: The main HTML file that contains the structure of the web application.
-   **js/linkedlist.js**: Contains the implementation of the `Node` and `DoublyLinkedList` classes.
-   **js/library.js**: Contains the implementation of the `Library` class that manages the song library.
-   **js/playlist.js**: Contains the implementation of the `Playlist` class that manages the playlist.
-   **js/sampleSongs.js**: Contains a list of sample songs.
-   **js/main.js**: Contains the main JavaScript code to handle user interactions and DOM manipulation.

## Getting Started

To get started with the project, follow these steps:

1. **Clone the repository**:

    ```sh
    git clone <repository-url>
    ```

2. **Navigate to the project directory**:

    ```sh
    cd ds
    ```

3. **Open `index.html` in your web browser**.

## Usage

1. **Add a Song**:

    - Fill in the song details (name, artist, genre) in the input fields.
    - Click the "Add Song" button to add the song to the library.

2. **Remove a Song**:

    - Click the "Delete" button next to the song you want to remove from the library.

3. **Search for Songs**:

    - Enter a search query in the search input field.
    - Select the key (name, artist, genre) to search by.
    - Click the "Search" button to display the search results.

4. **Sort Songs**:

    - Select the key (name, artist, genre) to sort by.
    - Click the "Sort" button to sort the songs in the library.

5. **Shuffle Songs**:

    - Click the "Shuffle" button to shuffle the songs in the playlist.

6. **Swap Songs**:

    - Enter the indices of the two songs you want to swap.
    - Click the "Swap" button to swap the songs in the playlist.

7. **Add Sample Songs**:
    - Click the "Add Sample Songs" button to add a predefined list of sample songs to the library.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements

-   This project was developed as part of a data structures course at university.
-   Special thanks to the course instructors and teaching assistants for their guidance and support.
