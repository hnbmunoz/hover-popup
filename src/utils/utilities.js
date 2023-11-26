function ancestorExistsByID(element, idName) {
  if (!element) return false;
  if (!element.parentElement) return false;

  if (element.parentElement.id === idName) return true;

  if (element.id === idName) return true;

  if (element.parentElement.id !== idName) {
      return ancestorExistsByID(element.parentElement, idName);
  }

  return true;
}

export {
  ancestorExistsByID
}