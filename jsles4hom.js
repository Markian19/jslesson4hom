// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function triangle(a,b){
    let area = a*b
    return area
}


// - створити функцію яка обчислює та повертає площу кола з радіусом r
function rCircle (p,r){
   return math.pow((p*r),2) // return Math.Pi * Math.Pow(r,2)
}

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function cylinder (p,h,r){
    return 2*p*r*(h+r)
}

// - створити функцію яка приймає масив та виводить кожен його елемент
function musiv(arg) {
    for (const argElement of arg) {
        console.log(arg)
    }
}

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
function paragraf(text) {
    document.write(`<p>$(text)</p>`)
}

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function ulMaker(text) {
    document.write(`<ul>`)
       document.write(`<li>$(text)</li>`)
       document.write(`<li>$(text)</li>`)
       document.write(`<li>$(text)</li>`)
    document.write(`</ul>`)
}

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

function ulMaker1(text,leight) {
    document.write(`<ul>`)
    for (let i = 0; i < leight; i++) {
        document.write(`<li>$(text)</li>`)
        document.write(`</ul>`)
    }
    }

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
function list(arr) {
    document.write(`<ul>`)
    for (const arrElement of arr) {
        document.write(`<li>$(arrElement)</li>`)
    }
        document.write(`</ul>`)
}

//
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.
function object(array) {
    for (const arrayElement of array) {
        document.write(`<div>${arrayElement.id} - ${ arrayElement.name} - ${ arrayElement.age}</div>`)
    }
}