const sortRandomly = () => 0.5 - Math.random();

const sortByComments = (arrayA, arrayB) => arrayB.comments.length - arrayA.comments.length;

export { sortRandomly, sortByComments };
