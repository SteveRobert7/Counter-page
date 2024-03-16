
document.addEventListener('DOMContentLoaded', function () {
    
    const currentValue = document.getElementById('current-value');
    const incrementBtn = document.getElementById('increment');
    const decrementBtn = document.getElementById('decrement');
    const clearBtn = document.getElementById('clear');
    const errorMessage = document.getElementById('error-message');

    let count = 0;

    function updateCounter() {
        
        currentValue.innerText = count;
        if (count === 0) {
            clearBtn.style.display = 'none';
            decrementBtn.disabled = true;
            errorMessage.style.display = 'block';
        } else {
            clearBtn.style.display = 'block';
            decrementBtn.disabled = false;
            errorMessage.style.display = 'none';
        }
    }

    incrementBtn.addEventListener('click', function () {
        count++;
        updateCounter();
    });

    decrementBtn.addEventListener('click', function () {
        if (count > 0) {
            count--;
            updateCounter();
        }
    });

    clearBtn.addEventListener('click', function () {
        count = 0;
        updateCounter();
    });
});
