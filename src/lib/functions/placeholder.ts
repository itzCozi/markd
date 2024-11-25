function getOrdinalSuffix(day: number) {
  if (day > 3 && day < 21) return "th";
  switch (day % 10) {
    case 1:
      return "st";
    case 2:
      return "nd";
    case 3:
      return "rd";
    default:
      return "th";
  }
}

const date = new Date();
const day = date.getDate();
let extraMessage = "";
switch (date.getMonth()) {
  case 0:
    if (day === 1) {
      extraMessage = "Happy New Year! 🍾";
    }
    break;
  case 1:
    if (day === 14) {
      extraMessage = "Happy Valentine's Day! ❤️";
    }
    break;
  case 2:
    if (day === 17) {
      extraMessage = "Happy St. Patrick's Day! 🍀";
    }
    break;
  case 3:
    if (day === 1) {
      extraMessage = "April Fools! 😛";
    }
    break;
  case 6:
    if (day === 4) {
      extraMessage = "Happy Independence Day! 🎉";
    }
    break;
  case 9:
    if (day === 31) {
      extraMessage = "Happy Halloween! 🎃";
    }
    break;
  case 10:
    if (day < 25) {
      extraMessage = "Happy Thanksgiving! 🦃";
    }
    break;
  case 11:
    if (day < 25) {
      extraMessage = "Happy Holidays! 🥳";
    } else if (day === 25) {
      extraMessage = "Merry Christmas! 🎄";
    }
    break;
}
export const formattedDate = `${date.toLocaleString("en-US", { month: "long" })} ${day}${getOrdinalSuffix(day)}, ${date.getFullYear()}`;
const hyphens = "-".repeat(Math.max(formattedDate.length, extraMessage.length));

export const placeholder =
  extraMessage ? `${formattedDate}\n${extraMessage}\n${hyphens}` : `${formattedDate}\n${hyphens}`;
