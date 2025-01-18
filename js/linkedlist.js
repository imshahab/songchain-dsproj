// Node class
export class Node {
	constructor(song) {
		this.song = song
		this.prev = null
		this.next = null
	}
}

// Doubly linked list class
export class DoublyLinkedList {
	constructor() {
		this.head = null
		this.tail = null
	}

	// Add a new song
	addNode(song) {
		const newNode = new Node(song)
		// If the list is empty
		if (!this.head) {
			// Point both head and tail to the new node
			this.head = newNode
			this.tail = newNode
			// If the list is not empty
		} else {
			this.tail.next = newNode // Point the tail (the end of the list) to the new node
			newNode.prev = this.tail // Point the new node's back to the tail node
			this.tail = newNode // Update the tail to the new node
		}
	}

	// Remove a specific song
	removeNode(songName, artistName) {
		// Start from the beginning of the list
		let current = this.head

		// Iterate through the list
		while (current) {
			// If the song is found
			if (
				current.song.name === songName &&
				current.song.artist === artistName
			) {
				if (current.prev) current.prev.next = current.next
				if (current.next) current.next.prev = current.prev

				// If the song is the head or tail
				if (current === this.head) this.head = current.next
				if (current === this.tail) this.tail = current.prev

				return true // Song removed
			}
			current = current.next // Move to the next node
		}

		return false // Song not found
	}

	// Check if a song is a duplicate
	isDuplicateNode(songName, artistName) {
		// Start from the beginning of the list
		let current = this.head

		// Iterate through the list
		while (current) {
			// If the song is found
			if (
				current.song.name === songName &&
				current.song.artist === artistName
			) {
				return true
			}
			current = current.next // Move to the next node
		}

		return false // Song not found
	}

	// Sort the songs using a bubble-sortish algorithm:)
	sortNodes(key) {
		let swapped
		do {
			swapped = false
			// Start from the beginning of the list
			let current = this.head

			while (current.next) {
				// Compare the current song with the next song based on the key
				if (current.song[key] > current.next.song[key]) {
					// Swap nodes
					this.swapNodes(current, current.next)
					// Set swapped to true, meaning another sorting iteration is needed
					swapped = true

					// We don't need to move to the next node since the nodes have been swapped
				} else {
					// We need to move to the next node if no swapping is done
					current = current.next
				}
			}
		} while (swapped)
	}

	// Search for a song based on a query and a key
	searchNodes(query, key) {
		// Lowercase the query
		query = query.toLowerCase()
		// Initiate an array
		const songs = []
		// Start from the beginning of the list
		let current = this.head

		// Iterate through the list
		while (current) {
			// If the song matches the query
			if (current.song[key].toLowerCase().includes(query)) {
				songs.push(current.song) // Add the song to the array
			}

			current = current.next // Move to the next node
		}

		return songs // Return the songs
	}

	// Find songs based on exact match of a key and delete them
	findAndRemoveNodes(query, key) {
		// Lowercase the query
		query = query.toLowerCase()
		// Initiate an array
		const songs = []
		// Start from the beginning of the list
		let current = this.head

		// Iterate through the list
		while (current) {
			// If the song matches the query
			if (current.song[key].toLowerCase() === query) {
				this.removeNode(current.song.name, current.song.artist) // Remove the song
				songs.push(current.song) // Add the song to the array
			}

			current = current.next // Move to the next node
		}

		return songs // Return the songs
	}

	// Swap two nodes
	swapNodes(node1, node2) {
		// If the nodes are the same
		if (node1 === node2) return

		// Swapping head or tail
		if (node1 == this.head) this.head = node2
		else if (node2 == this.head) this.head = node1
		if (node1 == this.tail) this.tail = node2
		else if (node2 == this.tail) this.tail = node1

		// Swapping node1's and node2's next nodes
		let temp = null
		temp = node1.next
		node1.next = node2.next
		node2.next = temp

		// Readjust the previous pointer of the new next nodes (if they exist)
		if (node1.next != null) node1.next.prev = node1
		if (node2.next != null) node2.next.prev = node2

		// Swapping node1's and node2's previous nodes
		temp = node1.prev
		node1.prev = node2.prev
		node2.prev = temp

		// Readjust the next pointer of the new previous nodes (if they exist)
		if (node1.prev != null) node1.prev.next = node1
		if (node2.prev != null) node2.prev.next = node2
	}

	//Swap two nodes using their index
	swapNodesByIndex(index1, index2) {
		// Get the nodes at the specified indexes
		let node1 = this.getNodeByIndex(index1)
		let node2 = this.getNodeByIndex(index2)

		// If either node is not found
		if (!node1 || !node2) {
			return false
		}

		// Swap the nodes
		this.swapNodes(node1, node2)

		// Return true if the nodes were swapped successfully
		return true
	}

	// Shuffle the nodes using the Fisher-Yates algorithm
	shuffleNodes() {
		// Get the total number of nodes
		const totalNodes = this.getTotalNodes()

		// Iterate through the nodes from the last node to the first node
		for (let i = totalNodes - 1; i > 0; i--) {
			// Generate a random index
			const randomIndex = Math.floor(Math.random() * (i + 1))
			// Get the nodes at the specified indexes
			let node1 = this.getNodeByIndex(i)
			let node2 = this.getNodeByIndex(randomIndex)
			// Swap the nodes
			this.swapNodes(node1, node2)
		}
	}

	// Get a node by index
	getNodeByIndex(index) {
		// Start from the beginning of the list
		let current = this.head
		let count = 0

		// Iterate through the list
		while (current) {
			// If the index matches the count
			if (count === index) {
				return current // Return the node
			}

			count++ // Increment the count
			current = current.next // Move to the next node
		}

		return null // Node not found
	}

	// Get the total number of nodes
	getTotalNodes() {
		// Start from the beginning of the list
		let current = this.head
		let count = 0

		// Iterate through the list
		while (current) {
			count++ // Increment the count
			current = current.next // Move to the next node
		}

		return count // Return the total number of nodes
	}

	// Clear the list
	clear() {
		this.head = null
		this.tail = null
	}

	// Return all songs
	getAllNodes() {
		// Initiate an array
		const songs = []
		// Start from the beginning of the list
		let current = this.head

		// Iterate through the list
		while (current) {
			songs.push(current.song) // Add the song to the array
			current = current.next // Move to the next node
		}

		return songs // Return all songs
	}
}
