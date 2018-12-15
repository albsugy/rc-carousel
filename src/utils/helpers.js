export function _MoveToIndex(type, index, array){
  if(type === 'prev'){
    return index === 0 ? array.length-1 : index - 1
  } else if (type === 'next') {
    return index === array.length - 1 ? 0 : index + 1
  } else {
    return
  }
}

export function handleWindowResize() {
  return window.innerWidth < 480;
}