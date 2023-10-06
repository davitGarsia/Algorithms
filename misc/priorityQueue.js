class PriorityQueue {
	constructor() {
		this.collection = [];
	}

	printCollection() {
		console.log(this.collection);
	}

	enqueue(element) {
		if (this.isEmpty()) {
			this.collection.push(element);
		} else {
			let added = false;
			for (let i = 0; i < this.collection.length; i++) {
				if (element[1] < this.collection[i][1]) {
					// checking priorities
					this.collection.splice(i, 0, element);
					added = true;
					break;
				}
			}
			if (!added) {
				this.collection.push(element);
			}
		}
	}

	dequeue() {
		const value = this.collection.shift();
		return value[0];
	}

	front() {
		return this.collection[0];
	}

	size() {
		return this.collection.length;
	}

	isEmpty() {
		return this.collection.length === 0;
	}
}

// var pq = new PriorityQueue();
// pq.enqueue(['Beau Carnes', 2]);
// pq.enqueue(['Quincy Larson', 3]);
// pq.enqueue(['Ewa Mitulska-Wójcik', 1]);
// pq.enqueue(['Briana Swift', 2]);
// pq.printCollection();
// pq.dequeue();
// console.log(pq.front());
// pq.printCollection();



////////////// With HEAP ////////////////////
class MaxHeap {
    constructor() {
        this.heap = [];
    }

    push(val) {
        this.heap.push(val);
        this.bubbleUp();
    }

    pop() {
        if (this.isEmpty()) {
            return undefined;
        }
        if (this.heap.length === 1) {
            return this.heap.pop();
        }
        const root = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.bubbleDown();
        return root;
    }

    peek() {
        return this.isEmpty() ? undefined : this.heap[0];
    }

    size() {
        return this.heap.length;
    }

    isEmpty() {
        return this.heap.length === 0;
    }

    bubbleUp() {
        let index = this.heap.length - 1;
        const element = this.heap[index];
        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);
            const parent = this.heap[parentIndex];
            if (element <= parent) break;
            this.heap[index] = parent;
            index = parentIndex;
        }
        this.heap[index] = element;
    }

    bubbleDown() {
        let index = 0;
        const length = this.heap.length;
        const element = this.heap[0];

        while (true) {
            const leftChildIndex = 2 * index + 1;
            const rightChildIndex = 2 * index + 2;
            let leftChild, rightChild;
            let swap = null;

            if (leftChildIndex < length) {
                leftChild = this.heap[leftChildIndex];
                if (leftChild > element) {
                    swap = leftChildIndex;
                }
            }
            if (rightChildIndex < length) {
                rightChild = this.heap[rightChildIndex];
                if (
                    (swap === null && rightChild > element) ||
                    (swap !== null && rightChild > leftChild)
                ) {
                    swap = rightChildIndex;
                }
            }

            if (swap === null) break;
            this.heap[index] = this.heap[swap];
            this.heap[swap] = element;
            index = swap;
        }
    }
}

// Example usage:
const maxHeap = new MaxHeap();
maxHeap.push(3);
maxHeap.push(1);
maxHeap.push(4);
maxHeap.push(1);
console.log(maxHeap.pop()); // Output: 4
console.log(maxHeap.pop()); // Output: 3
console.log(maxHeap.pop()); // Output: 1
console.log(maxHeap.pop()); // Output: 1
