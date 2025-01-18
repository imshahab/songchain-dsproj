import { DoublyLinkedList } from './linkedlist.js'
import { sampleSongs } from './sampleSongs.js'

export class Library {
	constructor() {
		this.library = new DoublyLinkedList()
	}

	// Add a new song
	addSong(song) {
		// Check if the song is a duplicate
		if (this.library.isDuplicateNode(song.name, song.artist)) {
			return false // Song not added
		}
		this.library.addNode(song) // Add the song to the library
		return true // Song added
	}

	// Remove a specific song
	removeSong(songName, artistName) {
		return this.library.removeNode(songName, artistName)
	}

	// Find and remove songs based on a query
	findAndRemoveSongs(query, key) {
		return this.library.findAndRemoveNodes(query, key)
	}

	// Swap two songs
	swapSongsByIndex(index1, index2) {
		return this.library.swapNodesByIndex(index1, index2)
	}

	// Sort the songs
	sortSongs(key) {
		this.library.sortNodes(key)
	}

	// Search for songs based on a query
	searchSongs(query, key) {
		return this.library.searchNodes(query, key)
	}

	// Shuffle the songs and create a playlist
	shuffleSongs() {
		this.library.shuffleNodes()
	}

	// Get the songs
	getSongs() {
		return this.library.getAllNodes()
	}

	// Add sample songs to the library for testing
	addSampleSongs() {
		// Add the sample songs to the library
		sampleSongs.forEach((song) => {
			this.addSong(song)
		})
	}
}
