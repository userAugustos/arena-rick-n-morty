export const isDescendantChild = (parent: HTMLElement, child: HTMLElement) => {
    let node = child.parentNode;

    // while has one node (element)
    while (node) {
        // if we find a child
        if (node === parent) {
            return true;
        }
        // if not, we try to search in the child of the current parent
        node = node.parentNode
    }
    // if we really doesn't find that child in the tree of node
    return false
}
