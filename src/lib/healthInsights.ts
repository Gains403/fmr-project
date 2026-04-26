export function getInsights(type: string) {
  if (type === "private") {
    return {
      cost: "High",
      waitTime: "Short",
      crowd: "Not crowded",
    }
  }

  return {
    cost: "Low",
    waitTime: "Long",
    crowd: "Busy",
  }
}