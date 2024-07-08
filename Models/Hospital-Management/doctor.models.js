import mongoose, { mongo } from 'mongoose'

const doctorWorkingInHospitalSchema = new mongoose.Schema({
  hospital: {
    type: mongoose.Schema.Types.ObjectId,
    ref = "Hospital"
  },
  hoursWorked: {
    type: Number,
    required: true
  }
})

const doctorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  salary: {
    type: String,
    required: true
  },
  qualification: {
    type: String,
    require: true
  },
  workInHospital: [doctorWorkingInHospitalSchema]
}, {timestamps: true})

export const Doctor = mongoose.model("Doctor", doctorSchema)