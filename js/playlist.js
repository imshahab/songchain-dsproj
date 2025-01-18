import { DoublyLinkedList } from './linkedlist.js'

export class Playlist {
	constructor() {
		this.songs = []
		this.playlist = new DoublyLinkedList()
	}

	setSongs(songs) {
		// Clear the playlist
		this.playlist.clear()
		// Copy the input songs array into the playlist
		this.songs = [...songs]

		// Add the songs to the playlist
		this.songs.forEach((song) => {
			this.playlist.addNode(song)
		})
	}

	// Shuffle songs
	shuffleSongs() {
		this.playlist.shuffleNodes()
	}

	// Get the playlist
	getPlaylist() {
		return this.playlist.getAllNodes()
	}
}
