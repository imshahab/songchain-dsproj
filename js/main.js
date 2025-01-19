import { Library } from './library.js'
import { Playlist } from './playlist.js'

// Instances of Library and Playlist classes
const library = new Library()
const playlist = new Playlist()

// DOM elements
// Inputs
const songNameInput = document.getElementById('songName')
const artistNameInput = document.getElementById('artistName')
const genreInput = document.getElementById('genre')
const searchInput = document.getElementById('searchInput')
const searchKey = document.getElementById('searchKey')
const findAndRemoveInput = document.getElementById('findAndRemoveInput')
const findAndRemoveKey = document.getElementById('findAndRemoveKey')
const swapInput1 = document.getElementById('swapInput1')
const swapInput2 = document.getElementById('swapInput2')
const sortKey = document.getElementById('sortKey')

// Sections
const libraryDiv = document.getElementById('library')
const playlistDiv = document.getElementById('playlist')
const searchResultsDiv = document.getElementById('searchResults')

// Buttons
const addSongBtn = document.getElementById('addSongBtn')
const shuffleBtn = document.getElementById('shuffleBtn')
const sortBtn = document.getElementById('sortBtn')
const searchBtn = document.getElementById('searchBtn')
const findAndRemoveBtn = document.getElementById('findAndRemoveBtn')
const swapBtn = document.getElementById('swapBtn')
const addSampleSongsBtn = document.getElementById('addSampleSongsBtn')

// Add song handler
addSongBtn.addEventListener('click', () => {
	// Get the song details from the input fields and create a song object
	const song = {
		name: songNameInput.value.trim(),
		artist: artistNameInput.value.trim(),
		genre: genreInput.value.trim(),
	}

	// Check if any field is empty
	if (!song.name || !song.artist || !song.genre) {
		alert('Please fill out all fields!')
		return
	}

	// Add the song to the library
	if (!library.addSong(song)) {
		// If the song is a duplicate
		alert('This song already exists in the library!')
		return
	}

	// Render the library to the DOM
	renderLibrary()
	// Clear the input fields
	clearInputs()
})

// Render the library
function renderLibrary() {
	// Get all songs from the library
	const songs = library.getSongs()
	// Check if the library is empty
	if (!songs.length) {
		libraryDiv.innerHTML = `
        	<p id="emptyLibrary" class="text-center text-gray-400">Nothing here</p>
        `
		return
	}
	// Display the songs in the library section
	libraryDiv.innerHTML = songs
		.map(
			(song) => `
<div class="bg-gray-800 text-white p-4 rounded-lg shadow-md flex items-center justify-between">
  <span>
    <span class="text-sm text-gray-500 pr-2">#${songs.indexOf(song)}</span>
    <strong class="text-lg font-semibold">${song.name}</strong> by 
    <span class="text-gray-400">${song.artist}</span> 
    <span class="text-sm text-gray-500">(${song.genre})</span>
  </span>
  <button 
    onclick="deleteSong('${song.name}', '${song.artist}')"
    class="bg-red-600 hover:bg-red-700 text-white font-medium py-1 px-3 rounded-lg transition duration-300 ease-in-out"
  >
    Delete
  </button>
</div>

    `
		)
		.join('')
}

// Clear input fields
function clearInputs() {
	songNameInput.value = ''
	artistNameInput.value = ''
	genreInput.value = ''
}

// Shuffle songs handler
shuffleBtn.addEventListener('click', () => {
	// Add all songs from the library to the playlist
	playlist.setSongs(library.getSongs())
	// Shuffle the songs in the playlist
	playlist.shuffleSongs()
	// Render the playlist to the DOM
	renderPlaylist()
})

// Render playlist
function renderPlaylist() {
	// Get all songs from the playlist
	const songs = playlist.getPlaylist()
	// Check if the playlist is empty
	if (!songs.length) {
		playlistDiv.innerHTML = `
            	<p id="emptyLibrary" class="text-center text-gray-400">Nothing here</p>
			`
		return
	}

	// Display the songs in the playlist section
	playlistDiv.innerHTML = songs
		.map(
			(song) => `
<div class="bg-gray-800 text-white p-4 rounded-lg shadow-md">
  <strong class="text-lg font-semibold">${song.name}</strong> by 
  <span class="text-gray-400">${song.artist}</span>
</div>

    `
		)
		.join('')
}

// Delete song handler
// Used window here to make the function globally accessible
window.deleteSong = (songName, artistName) => {
	// Remove the song from the library
	library.removeSong(songName, artistName)
	// Set the updated songs to the playlist
	playlist.setSongs(library.getSongs())
	// Render the library and playlist
	renderLibrary()
	renderPlaylist()
}

// Sort handler
sortBtn.addEventListener('click', () => {
	// Call the sortSongs method
	library.sortSongs(sortKey.value)
	// Render the library
	renderLibrary()
})

// Search handler
searchBtn.addEventListener('click', () => {
	const query = searchInput.value.trim() // Get the search query
	const key = searchKey.value // Get the selected key (name, artist, genre)

	// Check if the search query is empty
	if (!query) {
		alert('Please enter a search query!')
		return
	}

	// Call the searchSongs method
	const results = library.searchSongs(query, key)

	// Render the search results
	renderSearchResults(results)
})

// Render search results
function renderSearchResults(results) {
	// Check if no results were found
	if (results.length === 0) {
		searchResultsDiv.innerHTML = '<p>No results found!</p>'
		return
	}

	// Display the search results
	searchResultsDiv.innerHTML = results
		.map(
			(song) => `
<div class="bg-gray-800 text-white p-4 rounded-lg shadow-md">
  <strong class="text-lg font-semibold">${song.name}</strong> by 
  <span class="text-gray-400">${song.artist}</span> 
  <span class="text-sm text-gray-500">(${song.genre})</span>
</div>

        `
		)
		.join('')
}

// Find and remove handler
findAndRemoveBtn.addEventListener('click', () => {
	const query = findAndRemoveInput.value.trim() // Get the search query
	const key = findAndRemoveKey.value // Get the selected key (name, artist, genre)

	// Check if the search query is empty
	if (!query) {
		alert('Please enter a search query!')
		return
	}

	// Call the findAndRemoveSongs method
	const results = library.findAndRemoveSongs(query, key)

	if (results.length === 0) {
		alert('No songs found!')
		return
	}
	// Render the library
	renderLibrary()
	// Display the removed songs
	alert(`Removed ${results.length} songs!`)
	// Clear the input field
	findAndRemoveInput.value = ''
})

// Swap handler
swapBtn.addEventListener('click', () => {
	// Check if the input fields are empty
	if (!swapInput1.value || !swapInput2.value) {
		alert('Please enter both indices!')
		return
	}

	// Parse the indices
	const index1 = parseInt(swapInput1.value)
	const index2 = parseInt(swapInput2.value)

	// Validate indices
	if (isNaN(index1) || isNaN(index2)) {
		alert('Indices must be numbers!')
		return
	}

	// Swap the songs
	if (library.swapSongsByIndex(index1, index2)) {
		// If the songs were swapped successfully
		alert('Songs swapped!')
	} else {
		// If the songs couldn't be swapped
		alert('Failed to swap songs!')
	}

	// Render the library
	renderLibrary()
})

// Add sample songs handler
addSampleSongsBtn.addEventListener('click', () => {
	// Add sample songs to the library
	library.addSampleSongs()
	// Render the library
	renderLibrary()
})
