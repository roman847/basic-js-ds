const { NotImplementedError } = require("../extensions/index.js");

// const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class Node {
  constructor(number) {
    this.data = number;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.node = null;
  }

  root() {
    return this.node;
  }

  add(number) {
    this.node = addNode(this.node, number);

    function addNode(node, value) {
      if (!node) {
        return new Node(value);
      }
      if (node.data === value) {
        return node;
      }
      if (node.data < value) {
        node.right = addNode(node.right, value);
      }
      if (node.data > value) {
        node.left = addNode(node.left, value);
      }
      return node;
    }
  }

  has(number) {
    return hasNode(this.node, number);

    function hasNode(node, value) {
      if (!node) {
        return false;
      }
      if (node.data === value) {
        return true;
      }
      if (node.data < value) {
        return hasNode(node.right, value);
      }
      if (node.data > value) {
        return hasNode(node.left, value);
      }
    }
  }

  find(number) {
    return findNode(this.node, number);

    function findNode(node, value) {
      if (!node) {
        return null;
      }
      if (node.data === value) {
        return node;
      }
      if (node.data < value) {
        return findNode(node.right, value);
      }
      if (node.data > value) {
        return findNode(node.left, value);
      }
    }
  }

  remove(number) {
    this.node = removeNode(this.node, number);

    function findMinValue(node) {
      if (!node.left) {
        return node;
      } else {
        return findMinValue(node.left);
      }
    }

    function removeNode(node, value) {
      if (!node) {
        return node;
      }
      if (node.data < value) {
        node.right = removeNode(node.right, value);
      }
      if (node.data > value) {
        node.left = removeNode(node.left, value);
      }
      if (node.data === value) {
        if (!node.left && !node.right) {
          return null;
        }
        if (!node.left) {
          return node.right;
        }
        if (!node.right) {
          return node.left;
        } else {
          let minMode = findMinValue(node.right);
          node.data = minMode.data;
          node.right = removeNode(node.right, minMode.data);
        }
      }
      return node;
    }
  }

  min() {
    return findMinValue(this.node);

    function findMinValue(node) {
      if (!node) {
        return null;
      }
      if (!node.left) {
        return node.data;
      }
      return findMinValue(node.left);
    }
  }

  max() {
    return findMaxValue(this.node);

    function findMaxValue(node) {
      if (!node) {
        return null;
      }
      if (!node.right) {
        return node.data;
      }
      return findMaxValue(node.right);
    }
  }
}

module.exports = {
  BinarySearchTree,
};
