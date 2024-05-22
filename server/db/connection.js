const mongoose = require("mongoose");
const { Schema } = mongoose;

mongoose.connect("mongodb://localhost:27017/invezzahrms");

const personalInformationSchema = new Schema(
  {
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    employeeId: {
      type: String,
    },
    dateOfBirth: {
      type: String,
    },
    gender: {
      type: String,
      enum: ["Male", "Female", "Other"],
    },
    maritalStatus: {
      type: String,
      enum: ["Single", "Married", "Divorced", "Widowed"],
    },
  },
  { _id: false }
);

const employmentInformationSchema = new Schema(
  {
    dateOfJoining: {
      type: String,
    },
    jobTitle: {
      type: String,
    },
    department: {
      type: String,
    },
    reportingTo: {
      type: String,
    },
    teamLeader: {
      type: String,
    },
  },
  { _id: false }
);

const contactInformationSchema = new Schema(
  {
    state: {
      type: String,
    },
    city: {
      type: String,
    },
    address: {
      type: String,
    },
    zipCode: {
      type: String,
    },
    email: {
      type: String,
    },
    phoneNumber: {
      type: String,
    },
  },
  { _id: false }
);

const emergencyContactsSchema = new Schema(
  {
    fullName: {
      type: String,
    },
    relation: {
      type: String,
    },
    profession: {
      type: String,
    },
    address: {
      type: String,
    },
    email: {
      type: String,
    },
    phoneNumber: {
      type: String,
    },
  },
  { _id: false }
);

const workExperienceSchema = new Schema(
  {
    jobTitle: {
      type: String,
    },
    companyName: {
      type: String,
    },
    companyUrl: {
      type: String,
    },
    companyLocation: {
      type: String,
    },
    employmentType: {
      type: String,
    },
    startDate: {
      type: String,
    },
    endDate: {
      type: String,
    },
    currentlyWorkHere: {
      type: Boolean,
    },
    description: {
      type: String,
    },
  },
  { _id: false }
);

const documentsSchema = new Schema(
  {
    adharcardFileName: {
      type: String,
    },
    pancardFileName: {
      type: String,
    },
    addressProofFileName: {
      type: String,
    },
    electricityBilFileName: {
      type: String,
    },
    offerLatterFileName: {
      type: String,
    },
    experienceLatterFileName: {
      type: String,
    },
    payslip1FileName: {
      type: String,
    },
    payslip2FileName: {
      type: String,
    },
    payslip3FileName: {
      type: String,
    },
  },
  { _id: false }
);

const employeeSchema = new Schema({
  personalInformation: personalInformationSchema,
  employmentInformation: employmentInformationSchema,
  contactInformation: contactInformationSchema,
  emergencyContacts: emergencyContactsSchema,
  workExperience: workExperienceSchema,
  documents: documentsSchema,
});

const Employee = mongoose.model("Employee", employeeSchema);

module.exports = Employee;
