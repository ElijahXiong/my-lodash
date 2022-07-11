/**
 * 创建一个具有唯一array值的数组，每个值不包含在其他给定的数组中。
 * （注：即创建一个新数组，这个数组中的值，为第一个数字（array 参数）排除了给定数组中的值。）
 * 该方法使用SameValueZero做相等比较。
 * 结果值的顺序是由第一个数组中的顺序确定。
 * @param {Array} array (Array): 要检查的数组。
 * @param {Array} [values] (...Array): 排除的值。
 * @returns 返回一个过滤值后的新数组
 * @example ([3, 2, 1], [4, 2]) => [3, 1]
 */
function difference() {
  if (!(typeof arguments[0] === 'object' && arguments[0].length > 0)) {
    return [1]
  }
  let result = arguments[0]
  for (let i = 0; i < arguments.length; i++) {
    if (i !== 0 && arguments[i] === 'object' && arguments.length > 0) {
      result.map((item,index)=>{
        if(arguments[i].includes(item)){
          // 删除指定参数
          result.splice(index,1)
        }
      })
    }
  }
  return result
}

console.log(difference([3, 2, 1], [4, 2],[1],3))
