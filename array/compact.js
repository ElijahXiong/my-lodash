/**
 * 创建一个新数组，包含原数组中所有的非假值元素。
 * 例如false, null,0, "", undefined, 和 NaN 都是被认为是“假值”。
 *
 * @param {Array<any>} array 待处理的数组
 * @returns 返回过滤掉假值的新数组。
 * @example ([0, 1, false, 2, '', 3]) => [1,2,3]
 */
function compact(array) {
  if (!(typeof array === "object" && array.length && array.length !== 0)) {
    return [];
  }
  let result = [];
  for (const item of array) {
    if (item) {
      result.push(item);
    }
  }
  return result;
}

console.log(compact([null, undefined, NaN, 0, "", false, 1]));
