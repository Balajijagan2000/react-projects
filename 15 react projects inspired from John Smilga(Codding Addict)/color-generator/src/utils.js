const componentToHex = (c) => {
    const hexVal = c.toString(16);

    return hexVal.length == 1 ? '0'+hexVal : hexVal
}
const rgbToHex = (r,g,b) => {
    return '#'+componentToHex(r)+componentToHex(g)+componentToHex(b);
}
export default rgbToHex