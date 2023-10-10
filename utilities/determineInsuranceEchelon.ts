enum InsuranceEchelon {
  EXPENSIVE = "expensive",
  AVERAGE = "average",
  CHEAP = "cheap",
}

export const determineInsuranceEchelon = (
  age: number,
  yearsOfDrivingExperience: number
) => {
  switch (true) {
    case (age >= 16 && age <= 30) || age > 59:
      return InsuranceEchelon.EXPENSIVE;
    case age >= 31 && age <= 59 && yearsOfDrivingExperience > 10:
      return InsuranceEchelon.CHEAP;
    default:
      return InsuranceEchelon.AVERAGE;
  }
};
