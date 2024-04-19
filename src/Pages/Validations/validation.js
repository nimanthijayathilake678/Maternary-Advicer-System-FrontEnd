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
    .min(0, "Mother's age must be greater than  13")
    .max(150, "Mother's age must be less than or equal to 150"),
});

export const userRegistrationSchema = Yup.object({
  regNum: Yup.string().required("Register Number is required"),
  fullName: Yup.string().required("Full Name is required"),
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  nicNo: Yup.string()
    .matches(/^(?:\d{9}[xXvV]|\d{12})$/, "Nic must be valid Type")
    .required("NIC No. is required"),
  birthday: Yup.string().required("Birthday is required"),
  contactNo: Yup.string()
    .matches(/^\d{10}$/, "Contact No. must be 10 digits")
    .required("Contact No. is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  occupation: Yup.string().required("Occupation is required"),
  area: Yup.string().required("Area is required"),
  username: Yup.string()
    .min(8, "Username must be at least 8 characters")
    .required("Username is required"),
  password: Yup.string()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
      "Password must contain at least one uppercase letter, one lowercase letter, and one number. Minimum 8 characters."
    )
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords not match")
    .required("Confirm Password is required"),
});

export const hospitalCareSchema = Yup.object({
  pregnancyRegNo: Yup.string().required(
    "Pregnancy Registration Number is required"
  ),
  eligibilityRegNo: Yup.string().required(
    "Eligibility Registration Number is required"
  ),
  nextVisitDate: Yup.string().required("Date is required"),
  doctorId: Yup.string().required("Doctor ID is required"),
  designation: Yup.string().required("Designation is required"),
});

export const babyRegistrationSchema2 = Yup.object({
  birthGivenHospital: Yup.string().required("Birth given hospital is required"),
  weightAtBirth: Yup.string().required("Birth weight is required"),
  wayOfBirth: Yup.string().required("Birth way is required"),
  headSizeAtBirth: Yup.string().required("Birth head size is required"),
  lengthAtBirth: Yup.string().required("Birth length is required"),
});

export const addRefferalSchema = Yup.object({
  pregnancyRegNo: Yup.string().required(
    "Pregnancy Registration Number is required"
  ),
  eligibilityRegNo: Yup.string().required(
    "Eligibility Registration Number is required"
  ),
  referredId: Yup.string().required("Referer Id is required"),
  referredRole: Yup.string().required("Referer Role is required"),
  reason: Yup.string().required("Description is required"),
});

export const babyImmunizationSchema = Yup.object({
  babyNum: Yup.string().required("Baby Number is required"),
  vaccineName: Yup.string().required("Vaccine Name is required"),
  ageForVaccine: Yup.number()
    .required("Age of Baby is required")
    .min(0, "Baby's age must be greater than 0")
    .max(18, "baby's age must be less than or equal to 18"),
  vaccineDate: Yup.date().required("Date of Vaccination is required"),
  batchNo: Yup.string().required("Vaccicine BatchNo is required"),
  adverseEffects: Yup.string().required(
    "Notes for any Condition of Adverse or if not any comment of it is required"
  ),
});

export const babyNutrientsSchema = Yup.object({
  babynum: Yup.string().required("Baby Number is required"),
  nutrientName: Yup.string().required("Nutrient Name is required"),
  ageForNutrientDate: Yup.number()
    .required("Age of Baby is required")
    .min(0, "Baby's age must be greater than 0")
    .max(18, "baby's age must be less than or equal to 18"),
  nutrientDate: Yup.date().required("Date of Nutrients given is required"),
  nutrientBatchNo: Yup.string().required("Nutrient BatchNo is required"),
});

export const babyNewBornSchema = Yup.object({
  babyNum: Yup.string().required("Baby Number is required"),
  skinColor: Yup.string().required("Skin color is required"),
  temperature: Yup.number()
    .required("Temperature of Baby is required")
    .min(0, "Baby's temperature must be greater than 32C")
    .max(150, "baby's age must be less than or equal to 42C"),
  naturePecan: Yup.string().required("Baby Pecan Nature is required"),
  breastFeeding: Yup.string().required(
    "Baby breastfeeding  Nature is required"
  ),
  fecesColor: Yup.string().required("Baby feces color Nature is required"),
  examineDate: Yup.date().required("Date of examin date given is required"),
});

export const babyReferelsSchema = Yup.object({
  babyNum: Yup.string().required("Baby Number is required"),
  b_Immunization_Name: Yup.string().required("Immmune Name is required"),

  b_Referel_Reason: Yup.string().required("Referel Reason is required"),
  b_Referel_Place: Yup.string().required("Referel Place is required"),
});

export const specialMsgSchema = Yup.object({
  babyNum: Yup.string().required("Registration Number is required"),
  msg_Date: Yup.date().required("Date of Note is required"),
  msg_Priority: Yup.string().required("Note Prority is required"),

  msg_Topic: Yup.string().required("Note Topic is required"),
  msg_Content: Yup.string().required("Note Content is required"),
});

export const babyWeightSchema = Yup.object({
  babynum: Yup.string().required("Registration Number is required"),
  b_Weight_Date: Yup.date().required("Date of Weght measured is required"),
  b_Weight: Yup.number().required("Noted weight is required"),

  b_Age_For_Weight_Date: Yup.number()
    .required("Age for Weight measured date is required")
    .min(0, "Baby's age must be greater than 0")
    .max(216, "baby's age must be less than or equal to 18Yrs"),
});
