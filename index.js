'use strict'
/**
 * 判断是否为中文
 */
function isChinese(val) {
    const reg = new RegExp('[\\u4E00-\\u9FFF]+', 'g');
    return reg.test(val);
}
/**
 * 获取名字第一个文字，转换成16进制颜色值
 */
function tranColor(firstName) {
    let str = '';
    for (let i = 0; i < firstName.length; i++) {
        str += parseInt(firstName[i].charCodeAt(0), 10).toString(16);
    }
    return '#' + str.slice(1, 4);
}
/**
 * 截取用户姓名
 */
function interceptionName(name) {
    // 如果用户输入的姓名少于等于2个字符,不截取
    if (nameLength <= 2) {
        // this.firstName = name.charAt(nameLength - 1);
        return name;
    } else {
        // 如果用户的姓名大于等于3个字符，截取后面两位
        const first = name.substring(0, 1);
        if (isChinese(first)) {
            // 截取倒数两位汉字
            return name.substring(nameLength - 2);
        } else {
            // 截取前面的两个英文字母
            return name.substring(0, 2).toUpperCase();
        }
    }
}
export { tranColor,interceptionName}

    
