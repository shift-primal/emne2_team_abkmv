export function PortionCalculator(currentPortion) {
    return /* html */ `
        <div class="portion-container">
            <div onclick="decreasePortion()" class="decrease-portion-btn">-</div>
            <div class="portion-size">${currentPortion}</div>
            <div onclick="increasePortion()" class="increase-portion-btn">+</div>
        </div>
    `;
}
