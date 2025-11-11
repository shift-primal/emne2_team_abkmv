export function PortionCalculator(currentPortion) {
    return /* html */ `
        <div class="portion-container">
            <div data-action="decrease-portion" class="decrease-portion-btn">-</div>
            <div class="portion-size">${currentPortion}</div>
            <div data-action="increase-portion" class="increase-portion-btn">+</div>
        </div>
    `;
}
