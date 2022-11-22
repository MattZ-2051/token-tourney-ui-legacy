// function that grabs html element by id and replaces the node with a new copy of itself
// this is for resetting any active animations on the component
export const animationReset = (id: string): void => {
  const node = document.getElementById(id);
  if (node?.parentNode) {
    const newNode = node.cloneNode(true);
    node.parentNode.replaceChild(newNode, node);
  }
};
