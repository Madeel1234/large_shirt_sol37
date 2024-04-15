#! /usr/bin/envc node

// Task # 37
// Large shirt: Modify the make_shirt() function so that shirt are large by default with a message that read I love typescript
// Make a large shirt and a medium shirt with the default message, a shirt of any size with a different message.

function  makeShirt(size: string = 'large', 
                    text: string = 'I love typescript'):void {
    console.log(`You have order a ${size}, shirt that say ${text}`)
}
makeShirt();
makeShirt('medium')