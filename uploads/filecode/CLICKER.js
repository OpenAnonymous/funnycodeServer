const clicker = document.querySelectorAll('input[value="Hài lòng"]');
const submit = document.querySelector('input[value="Lưu"]');

let promise = new Promise((resolve, reject) => {
    resolve(Array.from(clicker));
});

async function clickButtons() {
    try {
        for (let i = 0; i < clicker.length; i++) {
            await new Promise((resolve) => {
                clicker[i].click();
                setTimeout(resolve, 500); 
            });
        }
        submit.click(); 
        alert('a completed successfully');
    } catch (error) {
        console.error('Error:', error);
    }
}

clickButtons();
