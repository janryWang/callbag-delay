export default (duration) => (source) => {
  return (type, sink) => {
    if (type !== 0) return;
    source(0, (t, d) => {
      let id = setTimeout(() => {
        clearTimeout(id);
        sink(t, d);
      }, duration);
    });
  };
};
