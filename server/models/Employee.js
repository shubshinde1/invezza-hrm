const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
  personalInformation: {
    firstName: String,
    lastName: String,
    employeeId: Number,
    dateOfBirth: String,
    gender: String,
    maritalStatus: String,
  },
  employmentInformation: {
    dateOfJoining: String,
    JobTitle: String,
    department: String,
    reportingTo: String,
    teamLeader: String,
  },
  contactInformation: {
    state: String,
    city: String,
    address: String,
    zipCode: Number,
    email: String,
    phoneNumber: Number,
  },
  emergencyContacts: {
    fullName: String,
    relation: String,
    profession: String,
    address: String,
    email: String,
    phoneNumber: Number,
  },
  workExperience: {
    jobTitle: String,
    companyName: String,
    companyUrl: String,
    companyLocation: String,
    employmentType: String,
    startDate: String,
    endDate: String,
    currentlyWorkHere: String,
    description: String,
  },
  documents: {
    adharcardFileName: String,
    pancardFileName: String,
    addressProofFileName: String,
    electricityBilFileName: String,
    offerLatterFileName: String,
    experienceLatterFileName: String,
    payslip1FileName: String,
    payslip2FileName: String,
    payslip3FileName: String,
  },
});

const employee = mongoose.model("employee", employeeSchema);
module.exports = employee;
