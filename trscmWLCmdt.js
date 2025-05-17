const names = ["John", "Muhammad", "Wei Jie", "Aisyah", "Dinesh", "Sarah", "Danish", "Leo"];
const ranks = ["SC/CPL", "SC/SGT", "SC/SGT2"];
const mdtIDs = ["M2239", "M8871", "M4590"];
const pbIDs = ["WLPB032", "WLPB145", "WLPB067"];
const cashAmounts = [10, 20, 30, 40];
const stations = ["Yishun", "Canberra", "Boon Lay", "Chinese Garden", "Tuas Link", "Bukit Panjang", "Toa Payoh", "Bishan", "Jurong East", "Chua Chu Kang", "Stevens"];
const banks = ["UOB", "POSB", "DBS"];

let currentAnswer = "";
let currentSubject = "";
let currentDropdown = "";
let currentTime = "";

function randomFromArray(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function generateRandomDigits(length) {
  return Array.from({ length }, () => Math.floor(Math.random() * 10)).join("");
}

const questionList = ["cashDeclare",
                      "DrawMO",
                      "report",
                      "sparkTest",
                      "DrawArmoury",
                      "proceeding",
                      "arrived",
                      "break",
                      "resumePatrol",
                      "correction",
                      "VLP",
                      "sCheck",
                      "rCheck",
                      "cashWithdrawal",
                      "ATC",
                      "SPS",
                      "K9ERT",
                      "Fallout",
                     "Stand down",
                     "Return",
                     "Report",
                     "Extra"];
let questionIdx = 0;

function generateQuestion() {
  
  document.getElementById("feedback").innerText = "";
  document.getElementById("subjectInput").value = "";
  document.getElementById("answerInput").value = "";
  document.getElementById("timeSelect").value = "";
  document.getElementById("manualTimeInput").value = "";
  document.getElementById("answerInput").style.display = "block";

  const questionBox = document.getElementById("question");
  const subjectRow = document.getElementById("subjectRow");
  const timeSelect = document.getElementById("timeSelect");
  const manualTimeInput = document.getElementById("manualTimeInput");
  
  if (questionIdx >= questionList.length) {
    questionIdx = 0;
  }
  
  subjectRow.style.display = "flex";
  timeSelect.style.display = "none";
  manualTimeInput.style.display = "none";

  if (questionIdx === 0) {
    // 🔹 Cash Declaration
    const aglName = randomFromArray(names);
    const crewName = randomFromArray(names.filter(n => n !== aglName));
    const aglCash = randomFromArray(cashAmounts);
    const crewCash = randomFromArray(cashAmounts);
    const aglRank = randomFromArray(ranks);
    const crewRank = randomFromArray(ranks);

    questionBox.innerText = `Type out the cash declaration MDT format for AGL ${aglRank} ${aglName} with $${aglCash}, and ${crewRank} ${crewName} who is a crew member with $${crewCash}.`;

    currentSubject = "Declare Cash";
    currentAnswer =
      `AGL: ${aglRank} ${aglName}\n` +
      `Cash Declaration: $${aglCash}/-SGD\n` +
      `Crew: ${crewRank} ${crewName}\n` +
      `Cash Declaration: $${crewCash}/-SGD`;
    currentDropdown = "";
    currentTime = "";

  } else if (questionIdx === 2) {
    // 🔹 Drawing Equipment from Maintenance
    const mdt = randomFromArray(mdtIDs);
    const pb = randomFromArray(pbIDs);
    const time = generateRandomDigits(4);
    manualTimeInput.style.display = "inline-block";
    
    questionBox.innerText = `Type out the occurence for Drawing equipment from the maintenance office, the MDT ID is ${mdt} and the powerbank ID is ${pb}, no long clips. Time written in TETRA book is ${time}`;

    currentSubject = "Draw";
    currentAnswer =
      'The following equipments from the maintenance office:\n\n' +
      `1) MDT: ${mdt}\n` +
      `2) Powerbank: ${pb}\n` +
      `3) X02 BWC\n` +
      `4) X02 Spare Batteries\n` +
      `5) X02 Shoulder Mounts`;
    currentDropdown = "";
    currentTime = time;

  } else if (questionIdx === 1) {
    // 🔹 Report Timing with Dropdown
    const shifts = [
      { name: "1A", time: "0500" },
      { name: "1B", time: "0600" },
      { name: "2A", time: "1200" },
      { name: "2B", time: "1400" },
    ];
    const shift = randomFromArray(shifts);

    timeSelect.style.display = "inline-block";

    questionBox.innerText = `Write occurence for Reporting for shift ${shift.name}.`;

    currentSubject = "Report";
    currentDropdown = shift.time;
    currentAnswer = `For shift ${shift.name} duties.`;
    currentTime = "";

  } else if (questionIdx === 4) {
    // 🔹 Spark Type
    const time = generateRandomDigits(4);
    manualTimeInput.style.display = "inline-block";

    questionBox.innerText = `Write occurence for spark test conducted at ${time} HRS.`;

    currentSubject = `State`;
    currentAnswer = `Spark test concluded, all in order.`;
    currentDropdown = "";
    currentTime = time;

  } else if (questionIdx === 3) {
  // 🔹 Armoury Draw (New Specific Draw Type)
    const time = generateRandomDigits(4);
    manualTimeInput.style.display = "inline-block";

  questionBox.innerText = `Write occurence for drawing arms as a GL. Time where arms were drawn from armoury is ${time}`;

  currentSubject = "Draw";
  currentAnswer =
    `The following arms from the armoury:\n\n` +
    `1) Revolver\n` +
    `2) X10 Live Rounds\n` +
    `3) SEB\n` +
    `4) Handcuffs and Key\n` +
    `5) Taser X26P\n` +
    `6) X02 Air Cartridges\n` +
    `7) Taser Holster`;
  currentDropdown = "";
  currentTime = time;
    
  } else if (questionIdx === 5) {
    // 🔹 Fallout Type
    const time = generateRandomDigits(4);
    const callsign = `Y2F${Math.floor(Math.random() * 10)}C`;

    const GLname = "John";
    const AGLname = "Danish";
    const crewName = "Leo";

    const GLrank = "SC/SGT";
    const AGLrank = "SC/SGT";
    const crewRank = "SC/CPL";

    const GLtetra = "222" + generateRandomDigits(3);
    const AGLtetra = "222" + generateRandomDigits(3);
    const crewTetra = "222" + generateRandomDigits(3);

    const GLhp = "8888 2222";

    manualTimeInput.style.display = "inline-block";

    questionBox.innerText = `Write fall out occurence for falling out at ${time} for callsign ${callsign} consisting of ${GLrank} ${GLname} as the GL with tetra number ${GLtetra} and HP number of ${GLhp}, AGL ${AGLrank} ${AGLname} with tetra number ${AGLtetra}, Crew member ${crewRank} ${crewName} with tetra number ${crewTetra}.`;

    currentSubject = `Fall out`;
    currentAnswer =
      `To perform ${callsign} duties with the following officers:\n\n` +
      `GL: ${GLrank} ${GLname}\n` +
      `Tetra: ${GLtetra}\n` +
      `HP: ${GLhp}\n` +
      `AGL: ${AGLrank} ${AGLname}\n` +
      `Tetra: ${AGLtetra}\n` +
      `Crew: ${crewRank} ${crewName}\n` +
      `Tetra: ${crewTetra}`;
    currentDropdown = "";
    currentTime = time;
  
  } else if (questionIdx === 6) {
  // 🔹 Proceeding Type
  subjectRow.style.display = "flex";
  document.getElementById("timeSelect").style.display = "none";
  document.getElementById("manualTimeInput").style.display = "inline-block";

  const stations = ["Yishun", "Canberra", "Boon Lay", "Chinese Garden", "Tuas Link", "Bukit Panjang"];
  const station = randomFromArray(stations);
  const time = String(Math.floor(Math.random() * 2400)).padStart(4, "0");

  questionBox.innerText = `Write occurence for 10-2 at ${time}HRS to ${station} station.`;
  currentSubject = `Proceeding`;
  currentAnswer = `To ${station} Station.`;
  currentTime = time;
  currentStation = station;
    
  } else if (questionIdx === 7) {
  // 🔹 Arrived Type
  subjectRow.style.display = "flex";
  document.getElementById("timeSelect").style.display = "none";
  document.getElementById("manualTimeInput").style.display = "inline-block";
    const time = String(Math.floor(Math.random()*2400)).padStart(4,"0");

  const station = randomFromArray(["Yishun", "Canberra", "Boon Lay", "Chinese Garden", "Tuas Link", "Bukit Panjang"]);

  questionBox.innerText = `Write occurence for arriving at ${station} station at ${time}`;
  currentSubject = `Arrived`;
  currentAnswer = `At ${station} Station.`;
  currentTime = time;
  
  } else if (questionIdx === 8) {
  // 🔹 Break Type
  subjectRow.style.display = "flex";
  document.getElementById("timeSelect").style.display = "none";
  document.getElementById("manualTimeInput").style.display = "inline-block";

  const breakType = Math.random() < 0.5 ? "Short Break" : "Official Ease";
  const time = String(Math.floor(Math.random() * 2400)).padStart(4, "0");
  const station = randomFromArray(["Yishun", "Canberra", "Boon Lay", "Chinese Garden", "Tuas Link", "Bukit Panjang"]);

  questionBox.innerText = `Write occurence for ${breakType === "Short Break" ? "SB" : "OE"} at ${time} at ${station} station.`;
  currentSubject = `${breakType}`;
  currentAnswer = `At ${station} Station.`;
  currentTime = time;

  } else if (questionIdx === 9) {
  // 🔹 Resume Type
  subjectRow.style.display = "flex";
  document.getElementById("timeSelect").style.display = "none";
  document.getElementById("manualTimeInput").style.display = "inline-block";

  const time = String(Math.floor(Math.random() * 2400)).padStart(4, "0");

  questionBox.innerText = `Write occurence for 10-3 at ${time}`;
  currentSubject = `Resume Patrol`;
  currentAnswer = `ABCS conducted, all in order.`;
  currentTime = time;
  
  } else if (questionIdx === 10) {
  // 🔹 Mistake/Correction Type (no answer box)
  subjectRow.style.display = "flex";
  document.getElementById("timeSelect").style.display = "none";
  document.getElementById("manualTimeInput").style.display = "inline-block";
  document.getElementById("answerInput").style.display = "none";
  document.getElementById("feedback").innerText = "Details vary according to what you are trying to correct.";
    const time = String(Math.floor(Math.random() * 2400)).padStart(4, "0");
    

  const sn = Math.floor(Math.random() * 90 + 10); // two-digit S/N
  questionBox.innerText = `Write the subject for when you want to make a correction to S/N ${sn} at timing ${time}`;
  currentSubject = `Correction to S/N ${sn}`;
  currentAnswer = ""; // no answer checking
  currentTime = time;
    
  } else if (questionIdx === 11) {
    // 🔹 VLP Type
    subjectRow.style.display = "flex";

    const station = randomFromArray(["Yishun", "Toa Payoh", "Bishan"]);
    const arrivalTime = String(Math.floor(Math.random() * 2400)).padStart(4, "0");
    const completionTime = String(Math.floor(Math.random() * 2400)).padStart(4, "0");

    questionBox.innerText = `Write occurence for visiting VLP points at ${station} Station. You arrived at the station at ${arrivalTime} hrs and have finished checking every VLP point at ${completionTime} hours.`;

    currentSubject = `State`;
    currentAnswer = `Visited 100% of all VLP points at ${station} Station from ${arrivalTime}hrs to ${completionTime}hrs. All in order.`;
  
  } else if (questionIdx === 12) {
    // 🔹 SCheck Type
    subjectRow.style.display = "flex";
    manualTimeInput.style.display = "inline-block";
    timeSelect.style.display = "none";

    const ordinalList = ["1st", "2nd", "3rd", "4th", "5th"];
    const ordinal = randomFromArray(ordinalList);
    const serialNumber = String(ordinalList.indexOf(ordinal) + 1).padStart(2, "0");
    const checkTime = String(Math.floor(Math.random() * 2400)).padStart(4, "0");

    let callsign1, callsign2;
    do {
      callsign1 = `Y2F${Math.floor(Math.random() * 10)}C`;
      callsign2 = `Y2F${Math.floor(Math.random() * 10)}C`;
    } while (callsign1 === callsign2);

    const station = randomFromArray(["Yishun", "Toa Payoh", "Bishan"]);
    const activity = randomFromArray(["conducting foot patrol", "having OE", "having SB"]);

    questionBox.innerText = `Write occurence for your ${ordinal} normal supervisory check at ${checkTime} hrs by ${callsign1}. Your call sign is ${callsign2}. You are currently at ${station} station. You are currently ${activity}.`;

    currentSubject = `S/Check ${serialNumber}`;
    currentAnswer = `By ${callsign1} on ${callsign2} at ${station} Station.\nResource was at point ${activity}. All in order.`;
    currentTime = checkTime;
  
  } else if (questionIdx === 13) {
    // 🔹 RCheck Type
    subjectRow.style.display = "flex";
    manualTimeInput.style.display = "inline-block";
    timeSelect.style.display = "none";

    const ordinalList = ["1st", "2nd", "3rd", "4th", "5th"];
    const ordinal = randomFromArray(ordinalList);
    const serialNumber = String(ordinalList.indexOf(ordinal) + 1).padStart(2, "0");
    const checkTime = String(Math.floor(Math.random() * 2400)).padStart(4, "0");

    let callsign1, callsign2;
    do {
      callsign1 = `Y2F${Math.floor(Math.random() * 10)}C`;
      callsign2 = `Y2F${Math.floor(Math.random() * 10)}C`;
    } while (callsign1 === callsign2);

    const station = randomFromArray(["Yishun", "Toa Payoh", "Bishan"]);
    const activity = randomFromArray(["point conducting foot patrol", "having OE", "having SB"]);

    questionBox.innerText = `You are having your ${ordinal} check on ${callsign2} at ${station} station. Your call sign is ${callsign1}. The resource that you are checking on claims that you checked on them at ${checkTime} hrs. At that timing they are ${activity}.`;

    currentSubject = `S/Check ${serialNumber}`;
    currentAnswer = `By ${callsign1} on ${callsign2} at ${station} Station. Resource was at point ${activity}. Wellbeing was checked and no complaints from officers. All in order.`;
    currentTime = checkTime;
  
  } else if (questionIdx === 14) {
    //cashWithdrawal
  const name = randomFromArray(names);
  const rank = randomFromArray(ranks);
  const cash = randomFromArray(cashAmounts);
  const bank = randomFromArray(banks);
  const station = randomFromArray(["Jurong East", "Boon Lay", "Chua Chu Kang", "Stevens"]);
  const checkTime = String(Math.floor(Math.random() * 2400)).padStart(4, "0");

  document.getElementById("feedback").innerText = "";
  document.getElementById("subjectInput").value = "";
  document.getElementById("answerInput").value = "";
  document.getElementById("manualTimeInput").value = "";

  const questionBox = document.getElementById("question");
  const subjectRow = document.getElementById("subjectRow");
  const dropdown = document.getElementById("timeSelect");
  const manualTime = document.getElementById("manualTimeInput");

  subjectRow.style.display = "flex";
  dropdown.style.display = "none";
  manualTime.style.display = "inline-block";

  questionBox.innerText = `Write occurence for cash withdrawal at ${checkTime}hrs. ${rank} ${name} withdrew $${cash}/-SGD from ${bank} ATM at ${station} Station.`;

  currentSubject = "State";
  currentDropdown = "";
  currentTime = checkTime;
  currentAnswer = `${rank} ${name} withdrew $${cash}/-SGD from ${bank} ATM near to Cheers at ${station} Station.`;

  
  } else if (questionIdx === 15) {
    // ATC
  const callSign1 = "Y2F" + Math.floor(Math.random() * 10) + "C";
  let callSign2 = "Y2F" + Math.floor(Math.random() * 10) + "C";
  while (callSign2 === callSign1) {
    callSign2 = "Y2F" + Math.floor(Math.random() * 10) + "C";
  }

  const stations = ["Yishun", "Canberra", "Boon Lay", "Chinese Garden", "Tuas Link", "Bukit Panjang"];
  let fromStation = randomFromArray(stations);
  let toStation = randomFromArray(stations);
  while (toStation === fromStation) {
    toStation = randomFromArray(stations);
  }

  const startTime = generateRandomDigits(4);
  const endTime = generateRandomDigits(4);
  const hasTwoCallSigns = Math.random() < 0.5;
  const jjj = hasTwoCallSigns ? `${callSign1} and ${callSign2}` : callSign1;

  questionBox.innerText = `Write occurence for TTC conducted by ${jjj} From ${fromStation} station to ${toStation} station from ${startTime} hrs to ${endTime} hrs.`;
  currentSubject = "State";
  currentAnswer = `TCC conducted by ${jjj} from ${fromStation} station to ${toStation} station from ${startTime}hrs to ${endTime}hrs.`;
  currentDropdown = "";
  currentTime = "";

  } else if (questionIdx === 16) {
    //SPS
  const station = randomFromArray(["Yishun", "Canberra", "Boon Lay", "Chinese Garden", "Tuas Link", "Bukit Panjang"]);
  const callSign1 = "Y2F" + Math.floor(Math.random() * 10) + "C";
  let callSign2 = "Y2F" + Math.floor(Math.random() * 10) + "C";
  while (callSign2 === callSign1) {
    callSign2 = "Y2F" + Math.floor(Math.random() * 10) + "C";
  }

  const startTime = generateRandomDigits(4);
  const endTime = generateRandomDigits(4);

  questionBox.innerText = `Occurence for station platform sweep patrol for ${callSign1} and ${callSign2}. Start Time: ${startTime}hrs and ${endTime}hrs at ${station}. `;
  currentSubject = "State";
  currentAnswer =
    `Type of Patrol:\nSPS\n\nCallsign:\n${callSign1} and ${callSign2}\n\nStart Time: ${startTime}hrs\n\nEnd Time: ${endTime}hrs\n\nStation:\n${station}`;
  currentDropdown = "";
  currentTime = "";

  } else if (questionIdx === 17) {
    //K9 ERT
  manualTimeInput.style.display = "inline-block";

  const rank = randomFromArray(ranks);
  const name = randomFromArray(names);
  const callSign = "Y2F" + Math.floor(Math.random() * 10) + "C";
  const contact = "8888 2222";
  const startTime = generateRandomDigits(4);
  const endTime = generateRandomDigits(4);
  const station = randomFromArray(["Yishun", "Canberra", "Boon Lay", "Chinese Garden", "Tuas Link", "Bukit Panjang"]);
  const isERT = Math.random() < 0.5;
  const patrolType = isERT ? "ERT joint patrol" : "K9 patrol";
  const ServiceID = generateRandomDigits(5);
  const ServiceIDQuestion = isERT ? '' : `Service ID is ${ServiceID}`;
  const k9ertCallSign = "EDD" + generateRandomDigits(2);
  const PLNE = isERT ? 'Contact No.':'Duty Phone';
  const time = String(Math.floor(Math.random() * 2400)).padStart(4, "0");
  const JLNE = isERT ? '':'Service ID: ' + `${ServiceID}`;

  questionBox.innerText = `${callSign} is your call sign. Occurence for ${patrolType} with a regular, ${rank} ${name}, whose callsign is ${k9ertCallSign}, ${PLNE} is ${contact}. ${patrolType} started at ${startTime} hrs and ended at ${endTime} hrs. The time of this occurence is ${time}. Patrol was done at ${station}. ${ServiceIDQuestion}`;

  currentSubject = `State`;
  currentAnswer =
    `${callSign} performed ${patrolType} at ${station} MRT station and Bus Interchange with the following officer:\n\nIn charge: ${rank} ${name}\nCallsign: ${k9ertCallSign}\n${PLNE}: ${contact}\n${JLNE}\n\nStart Time: ${startTime}hrs\nEnd Time: ${endTime}hrs`;
  currentDropdown = "";
  currentTime = "";  // validated using manualTimeInput

  } else if (questionIdx === 18) {
    //standdown
    const time = generateRandomDigits(4);
    manualTimeInput.style.display = "inline-block";

    questionBox.innerText = `Write occurence for standing down at ${time} HRS.`;

    currentSubject = `Stand down`;
    currentAnswer = `At base.`;
    currentDropdown = "";
    currentTime = time;
    
  } else if (questionIdx === 19) { 
// 🔹 Cash Declaration
    const aglName = randomFromArray(names);
    const crewName = randomFromArray(names.filter(n => n !== aglName));
    const aglCash = randomFromArray(cashAmounts);
    const crewCash = randomFromArray(cashAmounts);
    const aglRank = randomFromArray(ranks);
    const crewRank = randomFromArray(ranks);

    questionBox.innerText = `Type out the cash declaration MDT format for AGL ${aglRank} ${aglName} with $${aglCash}, and ${crewRank} ${crewName} who is a crew member with $${crewCash}. Remember that the live timing is to be after the stand down timing.`;

    currentSubject = "Declare Cash";
    currentAnswer =
      `AGL: ${aglRank} ${aglName}\n` +
      `Cash Declaration: $${aglCash}/-SGD\n` +
      `Crew: ${crewRank} ${crewName}\n` +
      `Cash Declaration: $${crewCash}/-SGD`;
    currentDropdown = "";
    currentTime = "";
  } else if (questionIdx === 20) {
    //Return
    questionBox.innerText = `Write occurence for returning equipment to armoury and maintenance office. The live timing is to be after the stand down timing`;

    currentSubject = `Return`;
    currentAnswer = `All arms and equipment to the armoury and maintenance office.`;
    currentDropdown = "";
    
  }   else {
    //endOfShift
        const shifts = [
      { name: "1A", time: "0500" },
      { name: "1B", time: "0600" },
      { name: "2A", time: "1200" },
      { name: "2B", time: "1400" },
    ];
    const shift = randomFromArray(shifts);
    questionBox.innerText = `write occurence for end of shift ${shift.name}`;

    currentSubject = `Report`;
    currentAnswer = `Off from shift ${shift.name} duties.`;
    currentDropdown = "";
    
  } 
  questionIdx += 1;
}

function checkAnswer() {
  const subjectInput = document.getElementById("subjectInput").value.trim();
  const userInput = document.getElementById("answerInput").value.trim();
  const dropdownInput = document.getElementById("timeSelect").value;
  const manualTimeInput = document.getElementById("manualTimeInput").value.trim();
  const feedback = document.getElementById("feedback");

  let subjectCorrect = subjectInput === currentSubject;
  let answerCorrect = userInput === currentAnswer;
  let dropdownCorrect = currentDropdown ? dropdownInput === currentDropdown : true;
  let timeCorrect = currentTime ? manualTimeInput === currentTime : true;

  if (subjectCorrect && answerCorrect && dropdownCorrect && timeCorrect) {
    feedback.innerText = "✅ Correct!";
    feedback.style.color = "green";
  } else {
    let message = "❌ Incorrect.";
    if (!subjectCorrect) message += " Subject is wrong.";
    if (!dropdownCorrect && currentDropdown) message += " Time selection is wrong.";
    if (!timeCorrect && currentTime) message += " Time input is wrong.";
    if (!answerCorrect) message += " Main answer is wrong.";
    feedback.innerText = message;
    feedback.style.color = "red";
  }
  
}

window.onload = generateQuestion;

function showAnswer() {
  const feedback = document.getElementById("feedback");
  feedback.innerText = currentAnswer;
  feedback.style.colour = "blue";
}
