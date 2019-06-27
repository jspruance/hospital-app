/**
 * Hospital app
 */

// Initialize an array of 50 trauma and 50 heart patients
const patients = Array(100).fill().map((_, i) => {
  if (i % 2 === 0) {
      return { type: 'trauma' }
  }
  return { type: 'heart' }
})

// initialize a hospital object containing information for the various units
const hospital = {
  trauma: {
    beds: [],
    bedQty: 50
  },
  heart: {
    beds: [],
    bedQty: 50
  }
}

// helper functions
const getRemainingBeds = (unit) => {
  return unit.bedQty - unit.beds.length
}

const printHospitalReport = (hospital) => {
  const isTramaUnitFull = hospital.trauma.beds.length === hospital.trauma.bedQty ? 'full' : 'not full'
  const isHeartUnitFull = hospital.heart.beds.length === hospital.heart.bedQty ? 'full' : 'not full'
  console.log(`The trauma unit is ${isTramaUnitFull} - ${hospital.trauma.beds.length} beds occupied.`)
  console.log(`The heart unit is ${isHeartUnitFull} - ${hospital.heart.beds.length} beds occupied.`)
}

// assign each patient to an appropriate unit and bed
patients.map(patient => {
  if(patient.type === 'trauma') {
    hospital.trauma.beds.push(patient)
    console.log(`There are ${getRemainingBeds(hospital.trauma)} ${patient.type} beds left.`)
  } else {
    hospital.heart.beds.push(patient)
    console.log(`There are ${getRemainingBeds(hospital.heart)} ${patient.type} beds left.`)
  }
})

// output final hospital report
printHospitalReport(hospital)