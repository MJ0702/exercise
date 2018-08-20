//手机号码规则验证
export function isvalidPhone(str) {
    const reg = /^1[3|4|5|6|7|8][0-9]\d{8}$/
    return reg.test(str)
}
//验证身份证号码
export function isIDCard(str){
   const reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/
   return reg.test(str)
}