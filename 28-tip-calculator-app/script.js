

    const resetButton = document.querySelector(".resetBtn");
    const inputBill = document.getElementById("bill-amount");
    const inputPeople = document.getElementById("people-count");

    const inputCustom = document.querySelector(".custom-percentage");
    const tipAmount = document.querySelector(".tip-amount");
    const totalAmount = document.querySelector(".total-amount");

    const btn_5 = document.querySelector(".btn_5");
    const btn_10 = document.querySelector(".btn_10");
    const btn_15 = document.querySelector(".btn_15");
    const btn_25 = document.querySelector(".btn_25");
    const btn_50 = document.querySelector(".btn_50");

    const errorTxt = document.getElementById("peopleCountErrorText");

    let billAmount = 0;
    let peopleCount = 0;
    let tipPercent = 0;

    resetButton.addEventListener("click", function (e) {
        e.preventDefault();
        reset();
    });

    function reset() {
        inputBill.value = "";
        inputPeople.value = "";
        inputCustom.value = "";
        inputCustom.setAttribute("placeholder", "Custom");
        tipAmount.textContent = "$0.00";
        totalAmount.textContent = "$0.00";
        errorTxt.classList.add("sr-only");
        inputPeople.classList.remove("placeholder-error");
        billAmount = 0;
        peopleCount = 0;
        tipPercent = 0;
    }

    inputPeople.addEventListener("input", function () {
        if (inputPeople.value.trim() === "0") {
            errorTxt.classList.remove("sr-only");
            inputPeople.classList.add("placeholder-error");
        } else {
            errorTxt.classList.add("sr-only");
            inputPeople.classList.remove("placeholder-error");
        }
        peopleCount = parseFloat(inputPeople.value);
        calculateTipAndTotal();
    });

    inputBill.addEventListener("input", function () {
        billAmount = parseFloat(inputBill.value);
        calculateTipAndTotal();
    });

    const percentBtns = [btn_5, btn_10, btn_15, btn_25, btn_50, inputCustom];

    percentBtns.forEach(btn => {
        btn.addEventListener("click", function () {
            if (btn === inputCustom) {
                tipPercent = parseFloat(inputCustom.value);
            } else {
                tipPercent = parseFloat(btn.textContent);
            }
            calculateTipAndTotal();
        });
    });

    function calculateTipAndTotal() {
        const tip = (billAmount * (tipPercent / 100)) / peopleCount || 0;
        const total = (billAmount / peopleCount) + tip || 0;

        tipAmount.textContent = "$" + tip.toFixed(2);
        totalAmount.textContent = "$" + total.toFixed(2);
    }

