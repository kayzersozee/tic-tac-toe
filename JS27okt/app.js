/* const header = document.querySelector('h1')
const para = document.querySelector('p')

para.innerText
    .split(' ')
    .forEach(word => {

        if (word.length > 8) {
            string.replace(searchvalue, newvalue)
            word.fontcolor("yellow");
            console.log(word)
        };
    })
 */

const body = document.querySelector('body');
const para = document.createElement('p');
const link = document.createElement('a');

link.href = 'https://www.google.se';
link.innerText = 'link'

para.innerText = 'onur';
body.append(para);
para.append(link);
