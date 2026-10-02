const billInput = document.getElementById("bill");
let bill = 0;
const controlBtns = document.querySelector(".controls");
let tipPercent = 0;
const customInput = document.getElementById("tip-percent");
const NumberOfPeopleDiv = document.getElementById("number-of-people");
let numberOfPeople = 0;
const tipAmountSpan = document.querySelector(
    ".tip-amount-container .tip-amount",
);
const totalSpan = document.querySelector(".total-container .tip-amount");
const resetBtn = document.querySelector('button[type="reset"]');
resetBtn.setAttribute("disabled", "");

billInput.addEventListener("input", (e) => {
    bill = Number(e.target.value);
    revalidate();
});
controlBtns.addEventListener("click", (e) => {
    const button = e.target.closest("button");
    if (!button) return;
    tipPercent = button.value;
    removeActiveBtn();
    button.classList.add("active-btn");
    revalidate();
});
customInput.addEventListener("input", (e) => {
    removeActiveBtn();
    tipPercent = e.target.value;
    revalidate();
});
NumberOfPeopleDiv.addEventListener("input", (e) => {
    numberOfPeople = e.target.value;
    revalidate();
});
resetBtn.addEventListener("click", () => {
    clearResults();
});

const revalidate = () => {
    if (!bill || !tipPercent || !numberOfPeople)
        resetBtn.setAttribute("disabled", "");
    else {
        resetBtn.removeAttribute("disabled");
        const resultTip = Number(
            ((bill * tipPercent) / (100 * numberOfPeople)).toFixed(2),
        );
        tipAmountSpan.textContent = resultTip;
        totalSpan.textContent = bill + resultTip;
    }
};
const removeActiveBtn = () => {
    const activeBtn = document.querySelector(".active-btn");
    if (activeBtn) activeBtn.classList.remove("active-btn");
};
const clearResults = () => {
    tipAmountSpan.textContent = "0.00";
    totalSpan.textContent = "0.00";
    bill = tipPercent = numberOfPeople = 0;
    billInput.value = NumberOfPeopleDiv.value = customInput.value = "";
    removeActiveBtn();
    revalidate();
};
