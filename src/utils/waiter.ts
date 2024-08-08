export const waitInMinutes = async (minutes: number): Promise<void> => {
  await new Promise((resolve) => setTimeout(resolve, 1000 * 60 * minutes));
  console.log("Await step");
};
