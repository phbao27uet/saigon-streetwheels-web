export const calculatePrice = (
  adult: number,
  children: number,
  family: number,
) => {
  return adult * 30 + children * 30 + family * 30
}
