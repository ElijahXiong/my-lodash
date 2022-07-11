/**
 * 创建一个新数组，将array与任何数组 或 值连接在一起。
 * array (Array): 被连接的数组。
 * [values] (...*): 连接的值。
 * @returns 返回连接后的新数组。
 * @example var array = [1];
 * var other = _.concat(array, 2, [3], [[4]]);
 * console.log(other); => [1, 2, 3, [4]]
 * console.log(array); => [1]
 */
function concat() {
  let result = []
  for (const item of arguments) {
    if (typeof item === 'object' && item.length>=0) {
      result.push(...item)
    } else { 
      result.push(item)
    }
  }
  return result;
}

console.log(concat([1],2,[3],[[4]],{a:1}))