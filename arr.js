// array method

// let arr = [1,2,3,4,5,6,7];

// let obj = [
//     {name: `Khánh`, age: 19},
//     {name: `An`, age: 19},
//     {name: `Kỳ`, age: 21},
// ]

// let obj1 = [
//     [{name: `Bi cưn`, age: 19}],
//     [{name: `Hồ Anh`, age: 19}],
//     [{name: `Tèng`, age: 21}],
// ]

// // filter: tìm từng phần tử xem có thỏa mãn điều kiện không, nếu ko trả về mảng rỗng

// let filter = obj.filter((item, index) => {
//     return item && item.age === 19;
// });

// console.log(filter);


// // find: tìm phần tử đầu tiên thỏa mãn, ko có trả về undefined
// let find = arr.find((element) => {
//     return element > 7
// })

// console.log(find);


// // map: lặp ra 1 mảng mới dựa trên mảng gốc
// let mapArr = arr.map((item, index) => {
//     return item * item;
// })

// console.log(arr);
// console.log(mapArr);


// reduce: trả về 1 giá trị duy nhất là giá trị khởi tạo tương tác các giá trị khác
// let initialValue = 7;
// let reduce = arr.reduce((accumulator, currentValue) =>
//     accumulator + currentValue, initialValue
// );

// console.log(reduce)

// let concat = obj1.reduce((accumulator, currentValue) =>
//     accumulator.concat(currentValue),[{name: `Điển`, age: 20}]
// );

// console.log(concat)

// confirm(`Xác nhận bạn đủ tuổi ?`)
// prompt(`Nhập mật khẩu`) // giống prompt nhưng cho nhập dữ liệu

// chạy 1 hàm sau 1 thời gian, chỉ chạy 1 lần
// setTimeout(function () {
//     alert(`Thông báo`)
// }, 5000)

// chạy 1 hàm sau 1 thời gian nhưng chạy liên tục
// setInterval(function () {
//     console.log(Math.random())
// }, 1000)


// let s = `Khánh`
// //String
// // indexOf
// console.log(s.indexOf('á',5))
// console.log(s.lastIndexOf('á',5))
// // search - giống indexOf nhưng ko truyền được vị trí bắt đầu
// console.log(s.search('á'))

// // slice - cắt chuỗi
// console.log(s.slice(2,4)) // từ trái sang phải
// console.log(s.slice(2))
// console.log(s.slice(-3,-1)) // từ phải sang trái, vị trí bắt đầu là số âm nhỏ hơn

// // replace - thay thế chuỗi này sang chuỗi khác
// console.log(s.replace(`h`,`m`)) // có nhiều thì chỉ thay thế cái đầu tiên
// console.log(s.replace(/h/g,`m`)) // biểu thức chính quy, thay thế tất cả

// // split - cắt chuỗi thành các phần tử trong array dựa theo ký tự bất kỳ
// let language = `C++, Java, Javascript`
// console.log(language.split(`, `))


// //number
// let num = 7 / `abc`
// console.log(isNaN(num)) // kiểm tra NaN

// // toFixed
// let n1 = 3.16
// console.log(n1.toFixed()) // khi ko truyền gì thì trả về số làm tròn, < 0,5 thì làm tròn xuống, >= 0,5 làm tròn lên
// console.log(n1.toFixed(1)) // số lượng làm tròn dựa theo số lượng số sau dấu phẩy

// // array
// let array1 = [
//     `C++`,
//     `Java`,
//     `Javascript`,
// ]
// console.log(array1)
// console.log(Array.isArray(array1)) // kiểm tra kiểu dữ liệu mảng

// // join
// console.log(array1.toString())
// console.log(array1.join(`, `)) // giống toString nhưng chọn được ký tự ngăn cách các phần tử

// // pop - xóa 1 phần tử cuối mảng và trả về phần tử đó, xóa hắn chứ ko phải chỉ lấy
// console.log(array1.pop())
// console.log(array1.toString())

// // push - thêm 1 hoặc nhiều phần tử vào cuối mảng và trả về só lượng mảng mới
// console.log(array1.push(`PHP`, `C#`))
// console.log(array1.toString())

// // shift - ngược lại pop

// // unshift - ngược lại push

// // splice - xóa phần tử trong mảng, tham số 1: vị trí bắt đầu, tham số 2: số lượng phần tử xóa
// console.log(array1.splice(1, 1))
// console.log(array1.splice(1, 0, `Dart`)) // có thể chèn bằng cách thêm tham số 3 và tham số 2 bằng 0
// console.log(array1.toString())

// concat - ghép 2 mảng


// function showDialog() {
//     let myString = ''
//     for (let param of arguments) {
//         myString += `${param} - `
//     }
//     console.log(myString)
// }

// showDialog(`C++`,`Java`,`Javascript`)

// let isComfirm = confirm(`Message?`)
// console.log(isComfirm)

// khi 2 function cùng tên, function định nghĩa sau cùng sẽ ghi đè tất cả

// declaration()
// // declaration function
// function declaration() {
//     console.group(`declaration`)
// }
// declaration()

// // hosting: giúp declaration function được gọi trước khi được định nghĩa

// // expression function
// let expression = function() {

// }

// setTimeout(function () {

// })

// let obj = {
//     expression: function() {

//     }
// }

// includes - tìm kiếm 1 ký tự hay 1 chuỗi con trong 1 chuỗi hoặc 1 phần tử trên 1 mảng -> trả về true false, có thể thêm tham số thứ 2 là chỉ mục
// nếu index là số âm bé hơn lenght thì tìm ngược lại, nếu lớn hơn length thì tìm kiếm cả chuỗi

// Polyfill - tự định nghĩa ra function ko được trình duyệt cũ hỗ trợ
// console.log(`Javascript`.includes(`Java`,0))

// let infor = {
//     name: `Khánh`,
//     age: 19,
//     getName: function () {
//         return this.name
//     }
// }

// infor.email = `khanh@gmail.com` // thêm key mới vào obj
// infor[`my-address`] = `Yen Bai` // cách đặt tên đặc biệt

// console.log(infor)
// console.log(infor.name)
// console.log(infor[`age`])

// delete infor.email // cách xóa key obj
// delete infor[`my-address`]
// console.log(infor)
// console.log(infor.getName())


// // Object contructor
// function User (name, age, avatar) {
//     this.name = name,
//     this.age = age,
//     this.avatar = avatar
// }

// let user1 = new User(`Khanh`,19,`ava1`)
// let user2 = new User(`An`,19,`ava2`)

// user1.title = `Giảng viên tại f7`  // thêm được thuộc tính riêng ngoài contructor
// user2.comment = `Hay quá anh ơi`

// console.log(user1)
// console.log(user2)


// // Object prototype
// User.prototype.className = `f7`
// User.prototype.getName = function () {
//     return this.name;
// }
// console.log(user1.className)
// console.log(user2.getName())


// Date
// let date = new Date()
// console.log(date.getMonth() + 1) // cộng thêm 1 cho đúng


// // for in - duyệt lấy ra tất cả thuộc tính của 1 obj
// let infor = {
//     name: `Khánh`,
//     age: 19
// }

// let language = [
//     `C++`,
//     `Java`,
//     `Javascript`
// ]

// for (const key in language) {
//     console.log(`${key}: ${language[key]}`)
// }


// // for of - duyệt lấy ra tất cả giá trị của 1 obj, ko duyệt được đối tượng ko lặp được
// let infor = {
//     name: `Khánh`,
//     age: 19
// }

// let language = [
//     `C++`,
//     `Java`,
//     `Javascript`
// ]

// for (const value of Object.keys(infor)) {
//     console.log(infor[value])
// }


// forEach
// let list = [
//     {
//         name: `Khánh`,
//         age: 19,
//         address: `Yen Bai`,
//         salary: 10000000
//     },
//     {
//         name: `An`,
//         age: 19,
//         address: `Yen Bai`,
//         salary: 8000000
//     },
//     {
//         name: `Kỳ`,
//         age: 19,
//         address: `Yen Bai`,
//         salary: 7000000
//     }
// ]

// list.forEach(function (o, index) {
//     console.log(index, o)
// })

// // every - check all có thỏa mãn điều kiện
// let every = list.every(function (o) {
//     return o.age === 19
// })
// console.log(every)


// // some - giống every nhưng chỉ cần 1 phần tử đúng


// // find - trả về phần tử đầu tiên thỏa mãn điều kiện


// // filter - giống find nhưng trả về tất cả phần tử thỏa mãn


// // map - lặp ra 1 mảng mới bằng phần tử với mảng gốc nhưng khác dựa theo điều kiện truyền vào
// let map = list.map((o, index, originArray) => {
//     return {
//         index: index,
//         name: `name: ${o.name}`,
//         age: `age: ${o.age}`,
//         address: `address: ${o.address}`,
//         originArray: originArray // mảng gốc
//     }
// })
// console.log(map)


// // reduce: trả về 1 giá trị duy nhất là giá trị khởi tạo tương tác các giá trị khác
// // 2 tham số, 1 là function, 2 là giá trị khởi tạo // giá trị khởi tạo là kiểu dữ liệu nào thì đầu ra là kiểu dữ liệu đó

// // 4 tham số trong function
// // accumulator: biến lưu trữ
// // currentValue: giá trị hiện tại
// // currentIndex: chỉ mục hiện tại
// // originArray: mảng gốc
// // kết thúc hàm bằng return
// let i = 0
// let totalSalary = list.reduce((accumulator, currentValue, currentIndex, originArray) => {
//     if (currentValue.salary === 10000000 || currentValue.salary === 8000000) {
//         accumulator += currentValue.salary
//         console.log(i++)
//     }
//     return accumulator
// }, 0)
// console.log(totalSalary)

// // có thể làm phẳng mảng bằng cách khởi tạo mảng rỗng và sử dụng concat
// let a = [1,2,[3, 4], 5, [6, 7], 8]
// let flat = a.reduce((output, items) => {
//     return output.concat(items)
// }, [])
// console.log(flat)


// callback

// là hàm được truyền qua đối số
// khi gọi hàm khác
// được gọi lại trong hàm nhận đối số

// callBackList = [
//     `C++`,
//     `Java`,
//     `JavaScript`
// ]

// function check(param) {
//     if (typeof param === `function`)
//         param(`khánh`)
// }

// function myCallBack(value) {
//     console.log(`Value: `, value)
// }

// check(myCallBack)

// định nghĩa thêm được 1 array của riêng bản thân
// Array.prototype.map2 = function(callBack) {
//     let arr = []
//     for (let i = 0; i < this.length; i++) {
//         let res = callBack(this[i], i)
//         arr.push(res)
//     }
//     return arr
// }

// let res = callBackList.map2(function(o, index) {
//     return `${index} - ${o}`
// })
// let res2 = callBackList.map(function(o, index) {
//     return `${index} - ${o}`
// })

// console.log(res.join('\n'))
// console.log(res2.join('\n'))


// mảng có thể thay đổi giá trị length, nếu gắn giá trị to hơn số lượng thật thì những phần tử mới sẽ là phần tử trống
// nếu giá trị mới nhỏ hơn thì mảng sẽ cắt bớt phần tử
// let a = [1, 2, 3]
// console.log(a.length)
// console.log(a)
// a.length = 7
// console.log(a.length)
// console.log(a)


// spread operator - giải cấu trúc và lấy các phần tử ra
// let arr = [1, 2, 3, 1, 2, 3, 4]
// console.log([...(new Set(arr))])


// DOM là quy chuẩn cho các tài liệu do w3c cung cấp
// HTML DOM - mã html của website được trình duyệt path ra và hệ thống hóa thành mô hình, quy chuẩn của w3c
// có 3 thành phần
/**
 * 1. Element: id, class, tag, css selector, html collection
 * 2. Attribute: thuộc tính trong thẻ tags
 * 3. Text: các văn bản
 */

// ---------------------------

// js cung cấp bộ cung cụ có thể truy cập vào HTML DOM và thay đổi các thành phần

// browser: HTML -> DOM -> WEB API

// Document - là nơi chứa cả website, là đại diện cho toàn bộ website


// get element methods

// // id - trả về trực tiếp element
// let headerID = document.getElementById(`headerID`)
// console.log(headerID)

// // class
// // trả về html collection, giống kiểu mảng
// let headerClass = document.getElementsByClassName(`headerClass`)
// console.log(headerClass)

// // tag
// let headerTag = document.getElementsByTagName(`h1`)
// console.log(headerTag)

// // css selector
// let headerCSS_Selector = document.querySelector(`.box .h2`) // chỉ trả về phần tử đầu tiên - trả về trực tiếp element
// let headerCSS_SelectorAll = document.querySelectorAll(`.box .h2`)  // trả về NodeList gồm tất cả các phần tử
// console.log(headerCSS_SelectorAll[1])

// // html collection
// console.log(document.forms)
// console.log(document.forms[1])
// console.log(document.forms[`form-1`])
// console.log(document.forms.form2)

// // trả về thẻ a có thuộc tính name
// console.log(document.anchors)

// // links: trả về tất cả thẻ link  

// console.log(document.images)
// // ....

// document.write(`Alo`) // được thực hiện ngay khi file js đc gọi
// // nếu viết sau khi dom được tải lên thì nó sẽ ghi đè body


// DOM attribute
// let heading = document.querySelector(`h1`)

// console.log(heading)
// // heading.className = `red`  // thêm class dùng từ className

// heading.setAttribute(`href`,`abc`) // set được thuộc tính ko có trong thẻ tag bằng cách này
// console.log(heading.getAttribute(`href`))  // get thuộc tính thẻ tag, get được cả attribute do bản thân tùy biến
// console.log(heading.id)  // lấy bằng cách chấm chỉ áp dụng cho các thuộc tính hợp lệ
// console.log(heading.href)  // thuộc tính ko hợp lệ thì ko thể . để lấy

// function red_function() {
//     heading.className = `red_color`
// }


// innerText, textContent

// let headElement = document.querySelector(`.textElement`)

// đều là thuộc tính của element node nên có thể . để lấy
// innerText chỉ là thuộc tính của element node
// textContent là thuộc tính của cả element node và textNode
// console.log(headElement.innerText)  // lấy được nội dung hiện giống trên trình duyệt  
// console.log(headElement.textContent)
// // lấy được nội dung giống trong code, kể cả bị none, hiện cả khoảng trắng giữa các dòng nếu có, ko hiện thẻ tag, tất cả trong thẻ tag đều là nội dung, kể cả là style css, kể cả mã script

// headElement.innerText = `<i>Php Basic</i>`  // set text, được tạo ra khi mã js được thực thi
//                                      // tuy nhiên cả hai đều ko thẻ thêm thẻ tag khi thay đổi, nếu thêm vào thì trình duyệt sẽ tự hiểu và đổi thành text
// console.log(headElement.innerText)

// headElement.innerText = `

//                                                 abc



// `
// khi thay đổi nội dung mà dùng backtick để xuống dòng => với innerText do hiện thị giống trình duyệt nên sẽ hiểu là thêm các thẻ br
// => với textContent thì hiển thị giống trong code nên ko hiểu được khoảng cách
// tuy nhiên cả 2 thẻ đều ko hiểu khi cách theo chiều ngang

// innerHTML: thay đổi html của node element
// headElement.innerHTML = `<h2 style="color: red">def</h2>`  // thêm text vào dưới dạng element node, ko khi thêm thẻ tag thì chỉ là textNode
// console.log(headElement.innerHTML)  // lấy ra nội dung html bên trong

// // outerHTML: thay đổi html của node element
// console.log(headElement.outerHTML)  // Lấy cả bên ngoài cụ thể là class textElement
// // headElement.outerHTML = `<span>ghi</span>`  // khi set cũng ghi đè cả thẻ cha luôn, sau khi thay đổi thì vẫn bị tương tác với dữ liệu cũ
// console.log(headElement)  // khi in ra vẫn còn vì nó lưu vào bộ nhớ, chứ trong dom thật thì ko còn


// // in ra các thuộc tính của element bằng cách biến nó thành mảng
// console.log([headElement])
// console.log(headElement.firstElementChild)
// console.log(headElement.localName)


// DOM CSS
// style - element node
// let domCss = document.querySelector(`.box`)
// console.log(domCss.style)
// // domCss.style.width = `100px`
// // domCss.style.height = `200px`
// // domCss.style.backgroundColor = `red`

// // style là 1 object
// // có thể dùng assign để gán
// // thường nhận 2 đối số, đối số 1 là đối tượng bị gán, đối số 2 là đối tượng gán
// // chỉ dùng để set css inline
// Object.assign(domCss.style, {
//     width: `200px`,
//     height: `100px`,
//     backgroundColor: `green`
// });

// // lấy ra giá trị của thuộc tính css inline
// console.log(domCss.style.backgroundColor)



// classList - element node
// add
// contain
// remove
// toggle => nếu có class thì xóa bỏ, nếu ko có class thì thêm vào

// let cl = document.querySelector(`.box`)

// console.log(cl.classList)
// cl.classList.add(`red_color`)  // thêm nhiều class sẽ cách nhau bằng dấu phẩy
// console.log(cl.classList.contains(`red_color`))
// // cl.classList.remove(`red_color`)
// // console.log(cl.classList.contains(`red_color`))

// setInterval(() => {
//     cl.classList.toggle(`red_color`)
// }, 2000)



// DOM EVENT
// let a = document.querySelector(`h1`)

// // a.onclick = (e) => {
// //     console.log(e)  // ỉn ra mouse event
// // }

// // this ở mouse event => trả về chính element node, nếu click vào con thì vẫn trả về cha
// a.onclick = function(e) {
//     console.log(e.target)  // e / mouseEvent .target: trả lại chính event đang lắng nghe, nếu là thẻ con chỉ trả riêng thẻ con
// }

// let b = document.querySelectorAll(`h1`)
// b.forEach(element => {
//     element.onclick = function(e) {
//         console.log(e.target)
//     }
// });


// example event
// let inputEvent = document.querySelector(`input[type="text"]`)

// // onchange: nhận giá trị khi bỏ focus
// // oninput: nhận giá trị ngay khi nhập
// // inputEvent.onchange = function(e) {
// //     console.log(e.target.value)
// // }

// // onkeyup: lấy giá trị sau khi nhấc phím lên - onkeydown: ngược lại 
// // which: trả về mã số của phím vừa nhấn
// inputEvent.onkeyup = function(e) {
//     console.log(e.which)
// }



// preventDefault: ngăn chặn hành vi mặc định của sự kiện
// let ulElement = document.querySelector(`ul`)

// ulElement.onmousedown = function(e) {
//     e.preventDefault()
// }

// ulElement.onclick = function(e) {
//     console.log(e.target)
// }


// stopPropagation: ngăn chặn nổi bọt khi bấm vào thẻ con
// let div = document.querySelector(`div`)
// div.onclick = function(e) {
//     console.log(this)
// }

// let input = document.querySelector(`input[type="submit"]`)
// input.onclick = function(e) {
//     e.stopPropagation()
//     console.log(this)
// }



// DOM event: dùng cho việc đơn giản và ko có nhu cầu gỡ bỏ thì dùng cho nhanh, có nhiều sự kiện thì cái sau sẽ ghi đè cái trước
// event listener: khi 1 sự kiện diễn ra nhưng lại cần hủy bỏ lắng nghe thì nên sử dụng, và đặc biệt hữu hiệu khi có nhiều listener thì có thể cụ thể loại bỏ 
// function work1() {
//     console.log(`work1`)
// }

// function work2() {
//     console.log(`work2`)
// }

// let input = document.querySelector(`input[type="submit"]`)
// // add event, sự kiện được xử lý theo thứ tự được add
// input.addEventListener(`click`, work1)
// input.addEventListener(`click`, work2)


// // remove event
// setTimeout(function() {
//     input.removeEventListener(`click`, work2)
// }, 5000)


// JSON

// JSON.parse: chuyển từ json về các kiểu dữ liệu
// a string
// a number
// an object
// an array
// a boolean
// null

// let jn = `["abc", "def"]`
// console.log(JSON.parse(jn))

// // JSON.stringify: chuyển từ dữ liệu sang json
// console.log(JSON.stringify([
//     "abc",
//     "def" 
// ]))


// -------------------------------------------------------------------------------------------------------------------


// // promise: ra mắt trong bản js es6 để giải quyết vấn đề callback hell
// // promise sẽ nhận vào trong contructor 1 function

// let promise = new Promise (
//     // Executor: fuction sẽ được thực thi khi gọi tới promise
//     // nhận vào 2 tham số là 2 function
//     // có thể nhận nguyên resolve
//     // resolve: thành công
//     // reject: thất bại
//     function (resolve, reject) {
//         // logic
//         // Thành công: resolve()
//         // Thất bại: reject()
//         // luôn phải gọi 1 trong 2, ko gọi sẽ bị treo, rò rỉ bộ nhớ
//         resolve()
//         reject(`Error!!!`)
//     }
// )

// // trạng thái của promise
// // 1. pending: ko resolve cũng ko reject
// // 2. fulfill: resolve
// // 3. reject: reject

// // 3 phương thức thương xuyên sử dụng
// // 3 phương thức đều nhận function

// promise
//     // if resolve được gọi, then sẽ được gọi
//     // trả về được nhiều then, thực hiện theo thứ tự
//     // then trước return then sau sẽ nhận được
//     // then trước ko return then sau sẽ nhận được undefined
//     // then sau sẽ chạy ngay lập tức nếu then trước trả ra một giá trị ko phải promise kể cả có setTimeout
//     .then(function () {
//         return new Promise(function (resolve) {
//             setTimeout(resolve([1, 2, 3]), 5000)
//         })
//     })
//     .then(function (data) {
//         console.log(data)
//     })

//     // if reject được gọi, catch sẽ được gọi
//     .catch(function (error) {
//         console.log(error)
//     })

//     // if 1 trong 2 được gọi thì finally đều được gọi
//     .finally(function () {
//         console.log(`Finally`)
//     })


// // if muốn trả thẳng ra 1 promise resolve hoặc reject
// let promise = Promise.reject(`Notification!!!`)

// promise
//     .then((mess) => {
//         console.log(`Success: ` +mess)
//     })
//     .catch((error) => {
//         console.log(`Error: ` +error)
//     })


// promise all: tham số nhận vào là 1 mảng gồm các promise cần làm việc với nhau
// let p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve([1, 2, 3])
//     }, 3000)
// })

// let p2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve([3, 4, 5])
//     }, 6000)
// })

// let all = Promise.all([p1, p2])

// all
//     .then((res) => {
//         let a1 = res[0]
//         let a2 = res[1]

//         console.log(a1.concat(a2))
//     })
//     .catch((err) => {
//         console.log(err)
//     })


// // mỗi s in ra 1 số liền kề bằng promise
// function sleep(ms) {
//     return new Promise((resolve) => {
//         setTimeout(resolve, ms)
//     })
// }

// sleep(1000)
//     .then(() => {
//         console.log(1)
//         return sleep(1000)
//     })
//     .then(() => {
//         console.log(2)
//         return sleep(1000)
//     })
//     .then(() => {
//         console.log(3)
//         return new Promise((resolve, reject) => {
//             reject(`error`)
//         })
//     })
//     // 1 promise đứt gánh giữa đường sẽ lọt ngay vào catch và bỏ qua các then bên dưới
//     .then(() => {
//         console.log(4)
//         return sleep(1000)
//     })
//     .catch((error) => {
//         console.log(error)
//     })






// -------------------------------------------------------------------------------------------------------------------

// Enhanced object literals: viết được cú pháp như bên dưới
// let name = `Javascript`
// let price = 1000

// let course = {
//     name,
//     price,
//     getName() {
//         return name
//     }
// }

// let fieldName = `name`
// let fieldPrice = `price`

// let course = {
//     [fieldName]: `Khanh`,
//     [fieldPrice]: 1000,
// }
// console.log(course)



// Default parameter values: tạo giá trị mặc định cho tham số
// function logger (log, type= `log`) {
//     console[type](log)
// }
// logger(`Message...`, `warn`)



// Destructuring: phân rã, sử dụng với object và array

// với array
// let arr = [`Java`, `Javascipt`, `C#`, `PHP`, `Python`]

// // let a = arr[0]
// // let b = arr[1]
// // let c = arr[2]
// // console.log(a, b, c)
// // => 
// let [a, , c, , ...rest] = arr 
// // [a, b, c] ko phải 1 arr mà là 3 biến a, b, c lấy lần lượt các phần tử của arr
// // ko muốn lấy phẩn tử nào thì bỏ trống, ko đặt biến
// console.log(a, c)
// console.log(rest)


// // với object
// var object = {
//     name: `Khanhs`,
//     age: 20,
//     children: {
//         name: `Khanhs con`
//     }
// }
// // với object thì tên biến phải lấy giống với key, ko sẽ trả ra undifined
// var {name: parent /*đặt tên khác cho name cha*/, children: {name} /*lấy thuộc tính của object con*/, description = `handsome`} = object // lấy như này name của children sẽ đè name parent
// console.log(parent)
// console.log(name)
// console.log(description) // tên biến ko có trong object sẽ trả về undifined, có thể sử dụng Default parameter values để gán giá trị mặc định


// rest parameter
// ...tên tự đặt, đặt ở cuối Destructuring, lấy ra 1 mảng tất cả các phần tử còn lại tính từ phần tử được lấy cuối cùng
// ... là toán tử rest khi nó kết hợp với Destructuring
// khi sử dụng với tham số của hàm là toán tử rest
// còn các trường hợp còn lại là spread

// function logger (a, b, ...param) {
//     console.log(param)  // tạo ra 1 mảng lấy các phần còn lại chưa có tham số nhận giá trị
// }
// logger(1,2,3,4,5,6,7)



// Tagged template literals
// let band = `F8`
// let course = `Javascript`

// // khi truyền vào 1 tham số là 1 Destructuring nó sẽ in ra 1 mảng gồm phần tử đầu tiên là 1 mảng chứa các phần tử là các đoạn bị cách nhau bởi các 
// // biến ${} và các phần tử từ index 1 sẽ là các biến ${}
// function highlight([first, ...strings], ...values) {
//     return values.reduce((acc, curr) =>
//         [...acc, `<span>${curr}</span>`, strings.shift()], [first]).join(``)
// }

// const res = highlight`Học lập trình ${course} tại ${band}!`
// console.log(res)



// Modules: Import / Export
// muốn sử dụng file Modules thì file arr.js phải import file Modules.js
// muốn import thì file js đó phải được nhúng vào html với type="module"
// mà file arr.js muốn import thì file modules.js phải export ra
// nếu thấy import ra thẳng 1 tên thì nghĩa là import default
// import logger from './Modules.js'
// // import {
// //     type_log,
// //     type_warn,
// //     type_error,
// // } from './constainst.js'
// // nếu ko thích kiểu Destructuring có thể dùng
// import * as constainst from './constainst.js'
// // trả về 1 Module gồm các export nhỏ, cung cấp các phương thức get set để thay đổi các thuộc tính
// logger(`Message`, constainst.type_error)



// Optional chaining
// dùng cho thuộc tính của đối tượng
// Nghi ngờ 1 trường nào ko tồn tại hoặc ko chắc chắn thì thêm ? vào ngay trước dấu chấm của obj đến thuộc tính sẽ ko bị lỗi nữa, 
// nếu gọi thuộc tính theo kiểu obj[name] thì thêm ?.
// let obj = {
//     name: 'Khánh',
//     dog1: {
//         name: 'dog1',
//         dog2: {
//             name: 'dog2',
//             getName() {
//                 console.log(this.name);
//             },
//             dog3: {
//                 name: 'dog3',
//             }
//         }
//     }
// }

// // với hàm thì viết như vậy
// obj.dog1.dog2.getName?.();



// createElement
// tạo ra phần tử nhưng mới chỉ lưu trong bộ nhớ chứ chưa lưu vào DOM
// const h1 = document.createElement('h1')
// h1.innerText = 'Hello World'

// console.log(h1)

// // appendChild: thêm con vào phần tử
// document.body.appendChild(h1)


// -------------------------------------------------------------------------------------------------------------------


// FETCH
// dùng để gọi api do phía backend viết

// api là 1 đường link dữ liệu
var API = 'https://jsonplaceholder.typicode.com/todos';

// fetch sử dụng promise
// fetch trả lại cho 1 cái stream
fetch (API)
    // response là 1 promise
    // response là 1 đối tượng có phương thức là json
    .then (function (response) {
        return response.json();
    })
    .then (function (posts) {
        console.log(posts);
    })
