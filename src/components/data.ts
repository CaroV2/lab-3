export const getDigimon = async () => {
  try {
    const digimons = await fetch(
      "https://digimon-api.vercel.app/api/digimon"
    ).then((res) => res.json());
    return digimons;
  } catch (error) {
    console.error(error);
  }
};
