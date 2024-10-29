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
const formattedDate = `${date.toLocaleString("en-US", { month: "long" })} ${day}${getOrdinalSuffix(day)}, ${date.getFullYear()}`;
const hyphens = "-".repeat(formattedDate.length);

export const placeholder = `${formattedDate}\n${hyphens}`;
export const dateModule = `${formattedDate}`;
