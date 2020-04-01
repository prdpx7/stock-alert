const header = "\n\nOh btw..."
const eggs = {
  "1/1": "Happy New Year 🎉",
  "14/2": "Happy Valentine's Day ♥",
  "1/4": "Happy April Fools' Day!",
  "25/12": "Merry Xmas folks...!"
}
const footer = "untill next time.."
function easterEggs() {
  let today = new Date();
  let key = `${today.getDate()}/${today.getMonth() + 1}`
  let msg = null
  if (eggs[key]) {
    msg = header + "\n" + eggs[key] + "\n" + footer + "\n\n"
    console.log(msg)
  }

  return msg;
}

module.exports = easterEggs