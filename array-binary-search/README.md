# Binary Search Algorithm in JavaScript

## Whiteboard Process

![Alt text](<Binary search.jpg>)

## Approach & Efficiency

The binary search algorithm follows a divide-and-conquer approach to efficiently find the target element in a sorted array. It repeatedly divides the search space in half until the target element is found or the search space is exhausted. This approach ensures logarithmic time complexity, making binary search an efficient algorithm for large arrays.

## Algorithm

The `binarySearch` function takes in two parameters: a sorted array and the search key. It performs the binary search algorithm to find the index of the element that matches the search key, or returns -1 if the element is not found. The algorithm follows these steps:

1. Initialize `start` as the index of the first element in the array and `end` as the index of the last element.
2. Repeat the following steps until `start` becomes greater than `end`:
    - Calculate the middle index as `mid = Math.floor((start + end) / 2)`.
    - Compare the element at the middle index with the search key.
        - If they are equal, return the middle index.
        - If the element is greater than the search key, update `end` to `mid - 1` to search the left half.
        - If the element is less than the search key, update `start` to `mid + 1` to search the right half.
3. If the search space is exhausted and the target element is not found, return -1.

## Usage

To use the binary search algorithm, call the `binarySearch` function with a sorted array and a search key.

