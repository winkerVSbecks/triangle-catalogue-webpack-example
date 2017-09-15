export const dec = state => {
  if (state.index > -1) {
    return { index: state.index - 1 };
  }
  return state;
};

export const inc = state => {
  if (state.index < 8) {
    return { index: state.index + 1 };
  }
  return state;
};

export const toggleXRay = state => ({ xray: !state.xray });

export const handleKeyDown = e => {
  if (document.activeElement.tagName !== 'BODY') return;
  switch (e.key) {
    case 'ArrowLeft':
      return dec;
    case 'ArrowRight':
      return inc;
    default:
      return {};
  }
};
