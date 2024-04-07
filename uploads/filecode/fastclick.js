const buttons = document.querySelectorAll('.xod5an3');

let promise = new Promise((resolve, reject) => {
    resolve(Array.from(buttons));
});

let clicker = async () => {
    try {
        for(let i = 0; i < buttons.length; i++) {
            await new Promise((resolve) => {
                buttons[i].click();
                setTimeout(resolve,10);
            });
        }
        alert("clicked all successfully");
    } catch (error) {
        console.log(error);
    }
}

clicker();