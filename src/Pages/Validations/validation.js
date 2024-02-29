import * as Yup from "yup";

export const babyRegistrationSchema = Yup.object({
  couple_id: Yup.string().required("Couple ID is required"),
  pregnancy_id: Yup.string().required("Pregnancy ID is required"),
  b_Name: Yup.string().required("Name of the Baby is required"),
  b_Reg_Num: Yup.string().required("Baby Registration Number is required"),
  b_Reg_Date: Yup.date().required("Date of Registration is required"),
  b_MOH_Division: Yup.string().required(
    "Division of Health Medical Officer is required"
  ),
  b_FSHO_Division: Yup.string().required(
    "Division of Family Health Service Officer is required"
  ),
  b_Mother_Age: Yup.number()
    .required("Age of Mother is required")
    .min(0, "Mother's age must be greater than or equal to 0")
    .max(150, "Mother's age must be less than or equal to 150"),
});
export const babyRegistrationSchema2 = Yup.object({
  birthGivenHospital: Yup.string().required("Birth given hospital required"),
  weightAtBirth: Yup.string().required("Birth weight required"),
  wayOfBirth: Yup.string().required("Birth way is required"),
  headSizeAtBirth: Yup.string().required("Birth head size required"),
  lengthAtBirth: Yup.string().required("Birth length required"),
});
