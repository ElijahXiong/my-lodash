/**
 * 将数组 array 拆分成多个 size 长度的区块，并将这些区块组成一个新数组。
 * 如果 array 无法被分割成全部等长的区块，那么最后剩余的元素将组成一个区块。
 *
 * @param {Array<any>} array 需要处理的数组
 * @param {number} size 每个数组区块的长度,默认为 1
 * @returns 返回一个包含拆分区块的新数组（注：相当于一个二维数组）
 * @example (['a', 'b', 'c', 'd'], 2) => [['a', 'b'], ['c', 'd']]; (['a', 'b', 'c', 'd'], 3) => [['a', 'b', 'c'], ['d']]
 */
function chunk(array, size = 1) {
  size = Math.max(Math.floor(size), 0);
  const len = array?.length && array.length > 0 ? array.length : 0;
  // 判断传入数据的问题
  if (!len || size < 1) {
    return [];
  }
  // 每次取 size 个，取出来存入 result 数组中
  let result = [];
  let index = 0;
  do {
    const params = array.slice(index, (index += size));
    result.push(params);
  } while (len > index);
  return result;
}

console.log(chunk([[42342], [4234], [423423], [222]], 2));
