// For guidance on how to add JavaScript see:
// https://prototype-kit.service.gov.uk/docs/adding-css-javascript-and-images

const pageUrl         =   window.location.pathname.split("/");
const domainPathUrl   =   pageUrl[pageUrl.length-2];
const currentUrl      =   pageUrl[pageUrl.length-1];
const pageUrlPath     =   window.location.pathname;

// console.log('domainPathUrl=', domainPathUrl);
console.log('pageUrlPath=', pageUrlPath);
// console.log('currentUrl=', currentUrl);

window.GOVUKPrototypeKit.documentReady(() => {
  // Add JavaScript here
    console.log('application.js is loaded');
})

function superUser() {
  console.log('superUser here');
  localStorage.setItem("userType", 'superUser');
}

function existingNormalUser() {
  console.log('existingNormalUser here');
  localStorage.setItem("userType", 'existingNormalUser');
}

function newNormalUser() {
  console.log('newNormalUser here');
  localStorage.setItem("userType", 'newNormalUser');
}

if (currentUrl === 'upload-a-measure') {
  if (localStorage.getItem('userType') === 'superUser') {
    console.log('superuser');
    document.getElementById('startButton').setAttribute('href', 'user-management/sign-in');
  } else {
    console.log('existingNormalUser or newNormalUser here');
    document.getElementById('startButton').setAttribute('href', 'user-management/sign-in-nu');
  }
}


// // File upload validation
const regexForCSV = new RegExp("(.*?)\.(csv)$");
function triggerValidation(el) {
  if (!(regexForCSV.test(el.value.toLowerCase()))) {
    el.value = '';
    window.location.pathname = "/v01/measures/invalid-file-upload";
  } else {
    window.location.pathname = "/v01/measures/success-file-upload";
  }
}

function triggerValidation21(el) {
  if (!(regexForCSV.test(el.value.toLowerCase()))) {
    el.value = '';
  //   window.location.pathname = "/v02-1/measures/invalid-file-upload";
    window.location.pathname = "/v02-1/measures/success-file-upload-no-core-check-errors";
  } else {
    window.location.pathname = "/v02-1/measures/success-file-upload-no-core-check-errors";
  }
}
let filename = "";
function fileSelection() {
  
  if(document.getElementById("file-upload").value != "") {
    // you have a file
    document.getElementById("uploadBtn").removeAttribute("disabled");
    document.getElementById("uploadBtn").classList.remove('govuk-button--disabled');
    document.getElementById("uploadBtn").setAttribute('aria-disabled', false);
    filename = document.getElementById("file-upload").value;
    console.log('file selected', filename);
  }
}

function triggerValidation22() {
    window.location.pathname = "/v02-2/measures/success-file-upload-core-check-errors";
}

function triggerValidation23(el) {
  if (!(regexForCSV.test(el.value.toLowerCase()))) {
    el.value = '';
    window.location.pathname = "/v02-3/measures/invalid-file-upload";
  } else {
    window.location.pathname = "/v02-3/measures/success-file-upload-core-check-errors";
  }
}

function triggerValidation41() {
    window.location.pathname = "/v04-1/measures/success-file-upload-core-check-errors";
}

function triggerMrnFileValidation() {
  // return console.log('file type', filename.split('.').pop());

  if (filename.split('.').pop() === 'csv') {
    console.log('show valid file upload confirmation');
    document.getElementById('measureReferenceFile').classList.add('govuk-form-group--success');
    document.getElementById('measureReferenceFile').classList.remove('govuk-form-group--error');
    document.getElementById('validFileUploaded').classList.remove('hide');
    document.getElementById('invalidFileUploaded').classList.add('hide');
  } else {
    console.log('show ERROR or invalid file upload confirmation');
    document.getElementById('measureReferenceFile').classList.add('govuk-form-group--error');
    document.getElementById('measureReferenceFile').classList.remove('govuk-form-group--success');
    document.getElementById('invalidFileUploaded').classList.remove('hide');
    document.getElementById('validFileUploaded').classList.add('hide');
  }
}



// ######################################################
// ############## Internal user management ##############
// ######################################################
if (document.getElementById("secondaryNav") && pageUrlPath === '/internal/') {
  console.log('LOADED');
  document.getElementById("secondaryNav").style.display = 'none';
}

const loggedInUsername = "Cainan Able";

if (document.getElementById('headerUsername')) document.getElementById('headerUsername').innerText = loggedInUsername;
if (document.getElementById('welcomeUsernameMessage')) document.getElementById('welcomeUsernameMessage').innerText = loggedInUsername;

// External User #######
// #####################
const externalUsers = [
  {
    "username": "danielbloggs",
    "title": "Mr",
    "firstName": "Daniel",
    "middleName": "Craig",
    "lastName": "Bloggs",
    "emailAddress": "daniel.bloggs@orgmail.com",
    "telephoneNumber": "07899674534",
    "supplierName": "BGT",
    "userType": "AdditionalUserRole",
    "jobTitle": "Deputy manager",
    "userStatus": "Active"
  }, {
    "username": "ellyfranklin",
    "title": "Miss",
    "firstName": "Elly",
    "middleName": "Mary",
    "lastName": "Franklin",
    "emailAddress": "elly.franklin@orgmail.com",
    "telephoneNumber": "07187654333",
    "supplierName": "OVO",
    "userType": "AdditionalUserRole",
    "jobTitle": "Supervisor",
    "userStatus": "Active"
  }, {
    "username": "lorainekelly",
    "title": "Ms",
    "firstName": "Loraine",
    "middleName": "Jane",
    "lastName": "Kelly",
    "emailAddress": "loraine.kelly@orgmail.com",
    "telephoneNumber": "07111222333",
    "supplierName": "SHL",
    "userType": "AuthorisedSignatoryRole",
    "jobTitle": "Quality Assurance",
    "userStatus": "Inactive"
  }, {
    "username": "cristalgallagher",
    "title": "Ms",
    "firstName": "Cristal",
    "middleName": "Jane",
    "lastName": "Gallagher",
    "emailAddress": "cristal.gallagher@orgmail.com",
    "telephoneNumber": "07111222333",
    "supplierName": "EDF",
    "userType": "AuthorisedSignatoryRole",
    "jobTitle": "Quality Assurance",
    "userStatus": "Active"
  }, {
    "username": "pierceroberts",
    "title": "Mr",
    "firstName": "Pierce",
    "middleName": "Peter",
    "lastName": "Roberts",
    "emailAddress": "pierce.roberts@orgmail.com",
    "telephoneNumber": "07111222333",
    "supplierName": "SPW",
    "userType": "AuthorisedSignatoryRole",
    "jobTitle": "Quality Assurance",
    "userStatus": "Active"
  }, {
    "username": "makenablanchard",
    "title": "Miss",
    "firstName": "Makena",
    "middleName": "",
    "lastName": "Blanchard",
    "emailAddress": "makena.blanchard@orgmail.com",
    "telephoneNumber": "07111222333",
    "supplierName": "SSE",
    "userType": "AuthorisedSignatoryRole",
    "jobTitle": "Quality Assurance",
    "userStatus": "Active"
  }, {
    "username": "brayanmcgee",
    "title": "Miss",
    "firstName": "Brayan",
    "middleName": "",
    "lastName": "Mcgee",
    "emailAddress": "brayan.mcgee@orgmail.com",
    "telephoneNumber": "07111222333",
    "supplierName": "BGT",
    "userType": "AuthorisedSignatoryRole",
    "jobTitle": "Quality Assurance",
    "userStatus": "Active"
  }, {
    "username": "lilliannaestrada",
    "title": "Miss",
    "firstName": "Lillianna ",
    "middleName": "Jane",
    "lastName": "Estrada",
    "emailAddress": "lillianna.estrada@orgmail.com",
    "telephoneNumber": "07111222333",
    "supplierName": "NPW",
    "userType": "AuthorisedSignatoryRole",
    "jobTitle": "Quality Assurance",
    "userStatus": "Inactive"
  }, {
    "username": "shelbyfreeman",
    "title": "Miss",
    "firstName": "Shelby",
    "middleName": "",
    "lastName": "Freeman",
    "emailAddress": "shelby.freeman@orgmail.com",
    "telephoneNumber": "07111222333",
    "supplierName": "FUL",
    "userType": "AuthorisedSignatoryRole",
    "jobTitle": "Quality Assurance",
    "userStatus": "Inactive"
  }, {
    "username": "beatricehart",
    "title": "Miss",
    "firstName": "Beatrice",
    "middleName": "Pat",
    "lastName": "Hart",
    "emailAddress": "beatrice.hart@orgmail.com",
    "telephoneNumber": "07111222333",
    "supplierName": "UTW",
    "userType": "AuthorisedSignatoryRole",
    "jobTitle": "Quality Assurance",
    "userStatus": "Active"
  }, {
    "username": "kistinamurillo",
    "title": "Ms",
    "firstName": "Kristina",
    "middleName": "",
    "lastName": "Murillo",
    "emailAddress": "kristina.murillo@orgmail.com",
    "telephoneNumber": "07111222333",
    "supplierName": "OVO",
    "userType": "AuthorisedSignatoryRole",
    "jobTitle": "Quality Assurance",
    "userStatus": "Active"
  }, {
    "username": "grantscott",
    "title": "Mr",
    "firstName": "Grant",
    "middleName": "",
    "lastName": "Scott",
    "emailAddress": "grant.scott@orgmail.com",
    "telephoneNumber": "07111222333",
    "supplierName": "COP",
    "userType": "AuthorisedSignatoryRole",
    "jobTitle": "Quality Assurance",
    "userStatus": "Active"
  }, {
    "username": "bernardhawkins",
    "title": "Mr",
    "firstName": "Bernard",
    "middleName": "Terry",
    "lastName": "Hawkins",
    "emailAddress": "bernard.hawkins@orgmail.com",
    "telephoneNumber": "07111222333",
    "supplierName": "UTA",
    "userType": "AuthorisedSignatoryRole",
    "jobTitle": "Quality Assurance",
    "userStatus": "Active"
  }, {
    "username": "saracox",
    "title": "Miss",
    "firstName": "Sara",
    "middleName": "",
    "lastName": "Cox",
    "emailAddress": "sara.cox@orgmail.com",
    "telephoneNumber": "07111222333",
    "supplierName": "XEN",
    "userType": "AuthorisedSignatoryRole",
    "jobTitle": "Quality Assurance",
    "userStatus": "Active"
  }, {
    "username": "aliviaward",
    "title": "Ms",
    "firstName": "Alivia",
    "middleName": "",
    "lastName": "Ward",
    "emailAddress": "alivi.award@orgmail.com",
    "telephoneNumber": "07111222333",
    "supplierName": "SPK",
    "userType": "AuthorisedSignatoryRole",
    "jobTitle": "Quality Assurance",
    "userStatus": "Inactive"
  }, {
    "username": "jasminschwartz",
    "title": "Miss",
    "firstName": "Jasmin",
    "middleName": "Mari",
    "lastName": "Schwartz",
    "emailAddress": "jasmin.schwartz@orgmail.com",
    "telephoneNumber": "07111222333",
    "supplierName": "EEN",
    "userType": "AuthorisedSignatoryRole",
    "jobTitle": "Quality Assurance",
    "userStatus": "Active"
  }, {
    "username": "adrielparks",
    "title": "Mr",
    "firstName": "Adriel",
    "middleName": "Anton",
    "lastName": "Parks",
    "emailAddress": "adriel.parks@orgmail.com",
    "telephoneNumber": "07111222333",
    "supplierName": "FLO",
    "userType": "AuthorisedSignatoryRole",
    "jobTitle": "Quality Assurance",
    "userStatus": "Active"
  }, {
    "username": "dereonpennington",
    "title": "Mr",
    "firstName": "Dereon",
    "middleName": "",
    "lastName": "Pennington",
    "emailAddress": "dereon.pennington@orgmail.com",
    "telephoneNumber": "07111222333",
    "supplierName": "HUD",
    "userType": "AuthorisedSignatoryRole",
    "jobTitle": "Quality Assurance",
    "userStatus": "Active"
  }, {
    "username": "masonholt",
    "title": "Mr",
    "firstName": "Mason",
    "middleName": "",
    "lastName": "Holt",
    "emailAddress": "mason.holt@orgmail.com",
    "telephoneNumber": "07111222333",
    "supplierName": "BLB",
    "userType": "AuthorisedSignatoryRole",
    "jobTitle": "Quality Assurance",
    "userStatus": "Active"
  }, {
    "username": "libbyellis",
    "title": "Miss",
    "firstName": "Libby",
    "middleName": "",
    "lastName": "Ellis",
    "emailAddress": "libby.ellis@orgmail.com",
    "telephoneNumber": "07111222333",
    "supplierName": "OCT",
    "userType": "AuthorisedSignatoryRole",
    "jobTitle": "Quality Assurance",
    "userStatus": "Active"
  }, {
    "username": "azulchan",
    "title": "Ms",
    "firstName": "Azul",
    "middleName": "",
    "lastName": "Chan",
    "emailAddress": "azul.chan@orgmail.com",
    "telephoneNumber": "07111222333",
    "supplierName": "GNE",
    "userType": "AdditionalUserRole",
    "jobTitle": "Compliance Officer",
    "userStatus": "Active"
  }, {
    "username": "lorainekelly",
    "title": "Ms",
    "firstName": "Loraine",
    "middleName": "Jane",
    "lastName": "Kelly",
    "emailAddress": "loraine.kelly@orgmail.com",
    "telephoneNumber": "07111222333",
    "supplierName": "EGE",
    "userType": "AdditionalUserRole",
    "jobTitle": "Quality Assurance",
    "userStatus": "Active"
  }, {
    "username": "lorainekelly",
    "title": "Ms",
    "firstName": "Loraine",
    "middleName": "Jane",
    "lastName": "Kelly",
    "emailAddress": "loraine.kelly@orgmail.com",
    "telephoneNumber": "07111222333",
    "supplierName": "AVR",
    "userType": "AdditionalUserRole",
    "jobTitle": "Compliance Officer",
    "userStatus": "Active"
  }, {
    "username": "lorainekelly",
    "title": "Ms",
    "firstName": "Loraine",
    "middleName": "Jane",
    "lastName": "Kelly",
    "emailAddress": "loraine.kelly@orgmail.com",
    "telephoneNumber": "07111222333",
    "supplierName": "SHL",
    "userType": "AdditionalUserRole",
    "jobTitle": "Compliance Officer",
    "userStatus": "Inactive"
  }, {
    "username": "lorainekelly",
    "title": "Ms",
    "firstName": "Loraine",
    "middleName": "Jane",
    "lastName": "Kelly",
    "emailAddress": "loraine.kelly@orgmail.com",
    "telephoneNumber": "07111222333",
    "supplierName": "SOE",
    "userType": "AdditionalUserRole",
    "jobTitle": "Quality Assurance",
    "userStatus": "Active"
  }, {
    "username": "lorainekelly",
    "title": "Ms",
    "firstName": "Loraine",
    "middleName": "Jane",
    "lastName": "Kelly",
    "emailAddress": "loraine.kelly@orgmail.com",
    "telephoneNumber": "07111222333",
    "supplierName": "RHE",
    "userType": "AdditionalUserRole",
    "jobTitle": "Compliance Officer",
    "userStatus": "Active"
  }, {
    "username": "lorainekelly",
    "title": "Ms",
    "firstName": "Loraine",
    "middleName": "Jane",
    "lastName": "Kelly",
    "emailAddress": "loraine.kelly@orgmail.com",
    "telephoneNumber": "07111222333",
    "supplierName": "TNK",
    "userType": "AdditionalUserRole",
    "jobTitle": "Compliance Officer",
    "userStatus": "Active"
  }, {
    "username": "lorainekelly",
    "title": "Ms",
    "firstName": "Loraine",
    "middleName": "Jane",
    "lastName": "Kelly",
    "emailAddress": "loraine.kelly@orgmail.com",
    "telephoneNumber": "07111222333",
    "supplierName": "PLA",
    "userType": "AdditionalUserRole",
    "jobTitle": "Compliance Officer",
    "userStatus": "Inactive"
  }, {
    "username": "lorainekelly",
    "title": "Ms",
    "firstName": "Loraine",
    "middleName": "Jane",
    "lastName": "Kelly",
    "emailAddress": "loraine.kelly@orgmail.com",
    "telephoneNumber": "07111222333",
    "supplierName": "ISP",
    "userType": "AdditionalUserRole",
    "jobTitle": "Quality Assurance",
    "userStatus": "Active"
  }, {
    "username": "lorainekelly",
    "title": "Ms",
    "firstName": "Loraine",
    "middleName": "Jane",
    "lastName": "Kelly",
    "emailAddress": "loraine.kelly@orgmail.com",
    "telephoneNumber": "07111222333",
    "supplierName": "UPL",
    "userType": "AdditionalUserRole",
    "jobTitle": "Compliance Officer",
    "userStatus": "Active"
  }, {
    "username": "lorainekelly",
    "title": "Ms",
    "firstName": "Loraine",
    "middleName": "Jane",
    "lastName": "Kelly",
    "emailAddress": "loraine.kelly@orgmail.com",
    "telephoneNumber": "07111222333",
    "supplierName": "ECY",
    "userType": "AdditionalUserRole",
    "jobTitle": "Compliance Officer",
    "userStatus": "Active"
  }, {
    "username": "lorainekelly",
    "title": "Ms",
    "firstName": "Loraine",
    "middleName": "Jane",
    "lastName": "Kelly",
    "emailAddress": "loraine.kelly@orgmail.com",
    "telephoneNumber": "07111222333",
    "supplierName": "BRI",
    "userType": "AdditionalUserRole",
    "jobTitle": "Compliance Officer",
    "userStatus": "Active"
  }, {
    "username": "lorainekelly",
    "title": "Ms",
    "firstName": "Loraine",
    "middleName": "Jane",
    "lastName": "Kelly",
    "emailAddress": "loraine.kelly@orgmail.com",
    "telephoneNumber": "07111222333",
    "supplierName": "ESB",
    "userType": "AdditionalUserRole",
    "jobTitle": "Quality Assurance",
    "userStatus": "Active"
  }, {
    "username": "lorainekelly",
    "title": "Ms",
    "firstName": "Loraine",
    "middleName": "Jane",
    "lastName": "Kelly",
    "emailAddress": "loraine.kelly@orgmail.com",
    "telephoneNumber": "07111222333",
    "supplierName": "IGL",
    "userType": "AuthorisedSignatoryRole",
    "jobTitle": "Quality Assurance",
    "userStatus": "Active"
  }, {
    "username": "lorainekelly",
    "title": "Ms",
    "firstName": "Loraine",
    "middleName": "Jane",
    "lastName": "Kelly",
    "emailAddress": "loraine.kelly@orgmail.com",
    "telephoneNumber": "07111222333",
    "supplierName": "TOE",
    "userType": "AuthorisedSignatoryRole",
    "jobTitle": "Compliance Officer",
    "userStatus": "Active"
  }, {
    "username": "lorainekelly",
    "title": "Ms",
    "firstName": "Loraine",
    "middleName": "Jane",
    "lastName": "Kelly",
    "emailAddress": "loraine.kelly@orgmail.com",
    "telephoneNumber": "07111222333",
    "supplierName": "FOX",
    "userType": "AuthorisedSignatoryRole",
    "jobTitle": "Quality Assurance",
    "userStatus": "Active"
  }, {
    "username": "lorainekelly",
    "title": "Ms",
    "firstName": "Loraine",
    "middleName": "Jane",
    "lastName": "Kelly",
    "emailAddress": "loraine.kelly@orgmail.com",
    "telephoneNumber": "07111222333",
    "supplierName": "PES",
    "userType": "AdditionalUserRole",
    "jobTitle": "Compliance Officer",
    "userStatus": "Active"
  }, {
    "username": "lorainekelly",
    "title": "Ms",
    "firstName": "Loraine",
    "middleName": "Jane",
    "lastName": "Kelly",
    "emailAddress": "loraine.kelly@orgmail.com",
    "telephoneNumber": "07111222333",
    "supplierName": "IGL",
    "userType": "AdditionalUserRole",
    "jobTitle": "Quality Assurance",
    "userStatus": "Active"
  }, {
    "username": "lorainekelly",
    "title": "Ms",
    "firstName": "Loraine",
    "middleName": "Jane",
    "lastName": "Kelly",
    "emailAddress": "loraine.kelly@orgmail.com",
    "telephoneNumber": "07111222333",
    "supplierName": "FUL",
    "userType": "AdditionalUserRole",
    "jobTitle": "Compliance Officer",
    "userStatus": "Active"
  }, {
    "username": "lorainekelly",
    "title": "Ms",
    "firstName": "Loraine",
    "middleName": "Jane",
    "lastName": "Kelly",
    "emailAddress": "loraine.kelly@orgmail.com",
    "telephoneNumber": "07111222333",
    "supplierName": "OVO",
    "userType": "AdditionalUserRole",
    "jobTitle": "Compliance Officer",
    "userStatus": "Active"
  }, {
    "username": "lorainekelly",
    "title": "Ms",
    "firstName": "Loraine",
    "middleName": "Jane",
    "lastName": "Kelly",
    "emailAddress": "loraine.kelly@orgmail.com",
    "telephoneNumber": "07111222333",
    "supplierName": "SPK",
    "userType": "AdditionalUserRole",
    "jobTitle": "Quality Assurance",
    "userStatus": "Active"
  }, {
    "username": "lorainekelly",
    "title": "Ms",
    "firstName": "Loraine",
    "middleName": "Jane",
    "lastName": "Kelly",
    "emailAddress": "loraine.kelly@orgmail.com",
    "telephoneNumber": "07111222333",
    "supplierName": "BRI",
    "userType": "AdditionalUserRole",
    "jobTitle": "Compliance Officer",
    "userStatus": "Active"
  }
];

// Build external user list
if (pageUrlPath === '/internal/v01-1/external-users/'){
  console.log('externalUsers.length', externalUsers.length);
  for (let i = 0; i < externalUsers.length; i++) {
    if (document.getElementById('extUsers')) {
      document.getElementById('extUsers').innerHTML += `
        <tr class="govuk-table__row">
          <td class="govuk-table__cell">` + externalUsers[i].supplierName + `</td>
          <td class="govuk-table__cell">` + externalUsers[i].firstName + `</td>
          <td class="govuk-table__cell">` + externalUsers[i].lastName + `</td>
          <td scope="row" class="govuk-table__header">` + externalUsers[i].emailAddress + `</td>
          <!-- <td class="govuk-table__cell">` + externalUsers[i].userType + `</td> -->
          <td class="govuk-table__cell">` + externalUsers[i].userStatus + `</td>
          <td class="govuk-table__cell">
            <a  class="govuk-link" 
                href="view-external-details" 
                onclick="viewExternalUserDetails(
                  '` + externalUsers[i].username + `',
                  '` + externalUsers[i].title + `',
                  '` + externalUsers[i].firstName + `',
                  '` + externalUsers[i].middleName + `',
                  '` + externalUsers[i].lastName + `',
                  '` + externalUsers[i].emailAddress + `',
                  '` + externalUsers[i].telephoneNumber + `',
                  '` + externalUsers[i].supplierName + `',
                  '` + externalUsers[i].userStatus + `',
                  '` + externalUsers[i].userType + `',
                  '` + externalUsers[i].jobTitle + `'
                )">View
            </a>
          </td>
        </tr>
      `;
    }
  }
}

// Get External user details
function viewExternalUserDetails(
    username, 
    title, 
    firstName, 
    middleName, 
    lastName, 
    emailAddress, 
    telephoneNumber, 
    supplierName,
    userStatus,
    userType, 
    jobTitle) {
  localStorage.setItem('ext_username', username);
  localStorage.setItem('ext_title', title);
  localStorage.setItem('ext_firstName', firstName);
  localStorage.setItem('ext_middleName', middleName);
  localStorage.setItem('ext_lastName', lastName);
  localStorage.setItem('ext_emailAddress', emailAddress);
  localStorage.setItem('ext_telephoneNumber', telephoneNumber);
  localStorage.setItem('ext_supplierName', supplierName);
  localStorage.setItem('ext_userStatus', userStatus);
  localStorage.setItem('ext_userType', userType);
  localStorage.setItem('ext_jobTitle', jobTitle);
}

// Set External user details
if (pageUrlPath === '/internal/v01-1/external-users/view-external-details') {
  // document.getElementById('username').innerText = localStorage.getItem('ext_username');
  // document.getElementById('title').innerText = localStorage.getItem('ext_title');
  document.getElementById('firstName').innerText = localStorage.getItem('ext_firstName');
  // document.getElementById('middleName').innerText = localStorage.getItem('ext_middleName');
  document.getElementById('lastName').innerText = localStorage.getItem('ext_lastName');
  document.getElementById('emailAddress').innerText = localStorage.getItem('ext_emailAddress');
  // document.getElementById('telephoneNumber').innerText = localStorage.getItem('ext_telephoneNumber');
  document.getElementById('supplierName').innerText = localStorage.getItem('ext_supplierName');
  document.getElementById('userType').innerText = localStorage.getItem('ext_userStatus');
  document.getElementById('userType').innerText = localStorage.getItem('ext_userType');
  // document.getElementById('jobTitle').innerText = localStorage.getItem('ext_jobTitle');
}

// Switch changePasswordAtNextLogon
function changePasswordAtNextLogon() {
  const x = document.getElementById("changePasswordAtNextLogon");
  if (x.innerHTML === "No") {
    x.innerHTML = "Yes";
  } else {
    x.innerHTML = "No";
  }
}

// Internal User #######
// #####################
const internalUsers = [
  {
    "username": "danielbloggs",
    "title": "Mr",
    "firstName": "Daniel",
    "middleName": "Craig",
    "lastName": "Bloggs",
    "jobTitle": "Deputy manager",
    "emailAddress": "daniel.bloggs@orgmail.com",
    "telephoneNumber": "07899674534",
    "userType": "Basic role",
    "userStatus": "Active"
  }, {
    "username": "manuelturizo",
    "title": "Mr",
    "firstName": "Manuel",
    "middleName": "Sosa",
    "lastName": "Turizo",
    "jobTitle": "Systems Analyst",
    "emailAddress": "manuel.turizo@orgmail.com",
    "telephoneNumber": "07118352353",
    "userType": "Internal admin",
    "userStatus": "Active"
  }, {
    "username": "russeltaylor",
    "title": "Mr",
    "firstName": "Russel",
    "middleName": "",
    "lastName": "Taylor",
    "jobTitle": "Supervisor",
    "userStatus": "Active",
    "emailAddress": "russel.taylor@orgmail.com",
    "telephoneNumber": "07187774333",
    "userType": "Standard role",
    "userStatus": "Active"
  }, {
    "username": "bruceleroy",
    "title": "Mr",
    "firstName": "Bruce",
    "middleName": "Dragon",
    "lastName": "Lreoy",
    "jobTitle": "Systems Analyst",
    "emailAddress": "bruce.reloy@orgmail.com",
    "telephoneNumber": "07118352353",
    "userType": "Internal admin",
    "userStatus": "Active"
  }, {
    "username": "rauwalejandro",
    "title": "Mr",
    "firstName": "Rauw",
    "middleName": "Jose",
    "lastName": "Alejandro",
    "jobTitle": "Systems Analyst",
    "emailAddress": "rauw.alejandro@orgmail.com",
    "telephoneNumber": "07118352353",
    "userType": "Internal admin",
    "userStatus": "Active"
  }, {
    "username": "leonidascarpenter",
    "title": "Mr",
    "firstName": "Leonidas",
    "middleName": "Ian",
    "lastName": "Carpenter",
    "jobTitle": "Systems Analyst",
    "emailAddress": "leonidas.carpenter@orgmail.com",
    "telephoneNumber": "07118352353",
    "userType": "Internal admin",
    "userStatus": "Inactive"
  }, {
    "username": "Loukang",
    "title": "Mr",
    "firstName": "Lou",
    "middleName": "",
    "lastName": "Kang",
    "jobTitle": "Systems Analyst",
    "emailAddress": "Lou.kang@orgmail.com",
    "telephoneNumber": "07118352353",
    "userType": "Internal admin",
    "userStatus": "Active"
  }, {
    "username": "lorainejanekelly",
    "title": "Ms",
    "firstName": "Loraine",
    "middleName": "Jane",
    "lastName": "Kelly",
    "jobTitle": "Quality Assurance",
    "userStatus": "Active",
    "emailAddress": "loraine.kelly@orgmail.com",
    "telephoneNumber": "07111222333",
    "userType": "Advanced role"
  }, {
    "username": "andrewjohnstone",
    "title": "Mr",
    "firstName": "Andrew",
    "middleName": "Jonathan",
    "lastName": "Johnstone",
    "jobTitle": "Marketing Manager",
    "emailAddress": "andrew.johnstone@orgmail.com",
    "telephoneNumber": "07105523433",
    "userType": "Internal admin",
    "userStatus": "Active"
  }, {
    "username": "jaliyahjames",
    "title": "Ms",
    "firstName": "Jaliyah ",
    "middleName": "",
    "lastName": "James",
    "jobTitle": "Mechanical Engineer",
    "emailAddress": "jaliyah.james@orgmail.com",
    "telephoneNumber": "07990352333",
    "userType": "Internal admin",
    "userStatus": "Active"
  }, {
    "username": "wilsonday",
    "title": "Mr",
    "firstName": "Wilson",
    "middleName": "Eric",
    "lastName": "Day",
    "jobTitle": "IT Manager",
    "emailAddress": "wilson.day@orgmail.com",
    "telephoneNumber": "07222352333",
    "userType": "Internal admin",
    "userStatus": "Active"
  }, {
    "username": "zionmcmillan",
    "title": "Mr",
    "firstName": "Zion",
    "middleName": "Joshua",
    "lastName": "Mcmillan",
    "jobTitle": "Systems Analyst",
    "emailAddress": "zion.mcmillan@orgmail.com",
    "telephoneNumber": "07166352333",
    "userType": "Internal admin",
    "userStatus": "Active"
  }, {
    "username": "titusanthony",
    "title": "Mr",
    "firstName": "Titus",
    "middleName": "",
    "lastName": "Anthony",
    "jobTitle": "Systems Analyst",
    "emailAddress": "titus.anthony@orgmail.com",
    "telephoneNumber": "07234352333",
    "userType": "Internal admin",
    "userStatus": "Active"
  }, {
    "username": "zachariahbarr",
    "title": "Mr",
    "firstName": "Zachariah",
    "middleName": "",
    "lastName": "Barr",
    "jobTitle": "Systems Analyst",
    "emailAddress": "zachariah.barr@orgmail.com",
    "telephoneNumber": "07118352353",
    "userType": "Internal admin",
    "userStatus": "Inactive"
  }, {
    "username": "antwangaines",
    "title": "Mr",
    "firstName": "Antwan",
    "middleName": "",
    "lastName": "Gaines",
    "jobTitle": "Systems Analyst",
    "emailAddress": "antwan.gaines@orgmail.com",
    "telephoneNumber": "07118352353",
    "userType": "Internal admin",
    "userStatus": "Active"
  }, {
    "username": "trinitymelton",
    "title": "Mr",
    "firstName": "Trinity",
    "middleName": "",
    "lastName": "Melton",
    "jobTitle": "Systems Analyst",
    "emailAddress": "trinity.melton@orgmail.com",
    "telephoneNumber": "07118352353",
    "userType": "Internal admin",
    "userStatus": "Active"
  }, {
    "username": "henrynovak",
    "title": "Mr",
    "firstName": "Henry",
    "middleName": "",
    "lastName": "Novak",
    "jobTitle": "Systems Analyst",
    "emailAddress": "henry.novak@orgmail.com",
    "telephoneNumber": "07118352353",
    "userType": "Internal admin",
    "userStatus": "Active"
  }
];

// Build internal user list
if (pageUrlPath === '/internal/v01-1/internal-users/'){
  for (let i = 0; i < internalUsers.length; i++) {
    if (document.getElementById('intUsers')) {
      document.getElementById('intUsers').innerHTML += `
        <tr class="govuk-table__row">
          <td scope="row" class="govuk-table__header">` + internalUsers[i].emailAddress + `</td>
          <td class="govuk-table__cell">` + internalUsers[i].username + `</td>
          <td class="govuk-table__cell">` + internalUsers[i].firstName + `</td>
          <td class="govuk-table__cell">` + internalUsers[i].lastName + `</td>
          <!-- <td class="govuk-table__cell">` + internalUsers[i].userType + `</td> -->
          <td class="govuk-table__cell">` + internalUsers[i].userStatus + `</td>
          <td class="govuk-table__cell">
            <a  class="govuk-link" 
                href="view-internal-details" 
                onclick="viewInternalUserDetails(
                  '` + internalUsers[i].username + `',
                  '` + internalUsers[i].title + `',
                  '` + internalUsers[i].firstName + `',
                  '` + internalUsers[i].middleName + `',
                  '` + internalUsers[i].lastName + `',
                  '` + internalUsers[i].emailAddress + `',
                  '` + internalUsers[i].telephoneNumber + `',
                  '` + internalUsers[i].userType + `',
                  '` + internalUsers[i].userStatus + `',
                  '` + internalUsers[i].jobTitle + `'
                )">View
            </a>
          </td>
        </tr>
      `;
    }
  }
}

// Get Internal user details
function viewInternalUserDetails(
    username, 
    title, 
    firstName, 
    middleName, 
    lastName, 
    emailAddress, 
    telephoneNumber,
    userType, 
    jobTitle) {
  localStorage.setItem('int_username', username);
  localStorage.setItem('int_title', title);
  localStorage.setItem('int_firstName', firstName);
  localStorage.setItem('int_middleName', middleName);
  localStorage.setItem('int_lastName', lastName);
  localStorage.setItem('int_emailAddress', emailAddress);
  localStorage.setItem('int_telephoneNumber', telephoneNumber);
  localStorage.setItem('int_userType', userType);
  localStorage.setItem('int_jobTitle', jobTitle);
}

// Set Internal user details
if (pageUrlPath === '/internal/v01-1/internal-users/view-internal-details') {
  document.getElementById('username').innerText = localStorage.getItem('int_username');
  document.getElementById('title').innerText = localStorage.getItem('int_title');
  document.getElementById('firstName').innerText = localStorage.getItem('int_firstName');
  document.getElementById('middleName').innerText = localStorage.getItem('int_middleName');
  document.getElementById('lastName').innerText = localStorage.getItem('int_lastName');
  document.getElementById('emailAddress').innerText = localStorage.getItem('int_emailAddress');
  document.getElementById('telephoneNumber').innerText = localStorage.getItem('int_telephoneNumber');
  document.getElementById('jobTitle').innerText = localStorage.getItem('int_jobTitle');
  document.getElementById('userType').innerText = localStorage.getItem('int_userType');
}

function findUser() {
  document.getElementById('foundUsers').style.display = 'block';
}

function addUser1() {
  window.location.pathname = "/internal/v01-1/internal-users/added-new-internal-user1";
}

function addUser2() {
  window.location.pathname = "/internal/v01-1/internal-users/added-new-internal-user2";
}


// Accounts ############
// #####################
const accounts = [
  {
    "supplierName": "ECO",
    "supplierLicenceNumbers":  [
      {"num": "2032730917"}, 
      {"num": "4532255801"}
    ]
  },{
    "supplierName": "EON",
    "supplierLicenceNumbers":  [{"num": "8040802094"}]
  },{
    "supplierName":           "EDF",
    "supplierLicenceNumbers":  [{"num": "7613419896"}]
  },{
    "supplierName":           "SPW",
    "supplierLicenceNumbers":  [{"num": "3965106337"}]
  },{
    "supplierName":           "SSE",
    "supplierLicenceNumbers":  [{"num": "5398614341"}]
  },{
    "supplierName":           "BGT",
    "supplierLicenceNumbers":  [{"num": "7295747130"}]
  },{
    "supplierName":           "NPW",
    "supplierLicenceNumbers":  [{"num": "6260109504"}]
  },{
    "supplierName":           "FUL",
    "supplierLicenceNumbers":  [{"num": "2536532454"}]
  },{
    "supplierName":           "UTW",
    "supplierLicenceNumbers":  [
      {"num": "9164061349"}, 
      {"num": "8831585682"}, 
      {"num": "3226666958"}
    ]
  },{
    "supplierName":           "OVO",
    "supplierLicenceNumbers":  [{"num": "8236422027"}]
  },{
    "supplierName":           "COP",
    "supplierLicenceNumbers":  [{"num": "3229798609"}]
  },{
    "supplierName":           "UTA",
    "supplierLicenceNumbers":  [{"num": "3021678478"}]
  },{
    "supplierName":           "XEN",
    "supplierLicenceNumbers":  [{"num": "9420110476"}]
  },{
    "supplierName":           "SPK",
    "supplierLicenceNumbers":  [{"num": "7742538649"}]
  },{
    "supplierName":           "EEN",
    "supplierLicenceNumbers":  [
      {"num": "1702525369"}, 
      {"num": "1191480679"}
  ]
  },{
    "supplierName":           "FLO",
    "supplierLicenceNumbers":  [
      {"num": "1239741187"}, 
      {"num": "4563855235"}, 
      {"num": "8495358982"}
    ]
  },{
    "supplierName":           "HUD",
    "supplierLicenceNumbers":  [{"num": "8836403907"}]
  },{
    "supplierName":           "BLB",
    "supplierLicenceNumbers":  [{"num": "5889934374"}]
  },{
    "supplierName":           "OCT",
    "supplierLicenceNumbers":  [{"num": "9101359309"}]
  },{
    "supplierName":           "GNE",
    "supplierLicenceNumbers":  [{"num": "4931433166"}]
  },{
    "supplierName":           "EGE",
    "supplierLicenceNumbers":  [{"num": "8103350106"}]
  },{
    "supplierName":           "AVR",
    "supplierLicenceNumbers":  [{"num": "3447741998"}]
  },{
    "supplierName":           "SHL",
    "supplierLicenceNumbers":  [
      {"num": "3524346584"},
      {"num": "9417697483"}
    ]
  },{
    "supplierName":           "SOE",
    "supplierLicenceNumbers":  [{"num": "4387301283"}]
  },{
    "supplierName":           "SOE",
    "supplierLicenceNumbers":  [{"num": "8506168000"}]
  },{
    "supplierName":           "RHE",
    "supplierLicenceNumbers":  [{"num": "4360397807"}]
  },{
    "supplierName":           "TNK",
    "supplierLicenceNumbers":  [{"num": "2590743361"}]
  },{
    "supplierName":           "PLA",
    "supplierLicenceNumbers":  [{"num": "9310737247"}]
  },{
    "supplierName":           "ISP",
    "supplierLicenceNumbers":  [{"num": "7278568162"}]
  },{
    "supplierName":           "UPL",
    "supplierLicenceNumbers":  [{"num": "4552853449"}]
  },{
    "supplierName":           "ECY",
    "supplierLicenceNumbers":  [{"num": "2133451612"}]
  },{
    "supplierName":           "BRI",
    "supplierLicenceNumbers":  [{"num": "6457047720"}]
  },{
    "supplierName":           "ESB",
    "supplierLicenceNumbers":  [{"num": "4272907057"}]
  },{
    "supplierName":           "IGL",
    "supplierLicenceNumbers":  [{"num": "8348357459"}]
  },{
    "supplierName":           "TOE",
    "supplierLicenceNumbers":  [
      {"num": "1520654638"}, 
      {"num": "8052658944"}, 
      {"num": "1080608811"}
    ]
  },{
    "supplierName":           "FOX",
    "supplierLicenceNumbers":  [{"num": "1333459999"}]
  },{
    "supplierName":           "PES",
    "supplierLicenceNumbers":  [{"num": "9640874558"}]
  }
];

const htmlAccountsList = '';
// Build accounts list
if (pageUrlPath === '/internal/v01-1/accounts/'){
  let accountItem = '';
  for (let i = 0; i < accounts.length; i++) {
    accountItem +=
    `<tr class="govuk-table__row">
      <td class="govuk-table__cell">` + accounts[i].supplierName + `</td>
      <td class="govuk-table__cell">`;

    for (let j = 0; j < accounts[i].supplierLicenceNumbers.length; j++) {
      accountItem += `<div class='supplier-num'>` + accounts[i].supplierLicenceNumbers[j].num + `</div>`;
    }
    accountItem += `
        <td class="govuk-table__cell">
          <a class="govuk-link" 
              href="view-account-details" 
              onclick='viewAccountDetails(` + JSON.stringify(accounts[i].supplierName) + `, ` + JSON.stringify(accounts[i].supplierLicenceNumbers) + `)'>
            View
          </a>
        </td>
      </tr>`;
  }

  document.getElementById('accountsList').innerHTML = accountItem;

}

// Get account details
function viewAccountDetails(supplierName, supplierLicenceNumber) {
  localStorage.setItem('supplierName', JSON.stringify(supplierName));
  localStorage.setItem('supplierLicenceNumber', JSON.stringify(supplierLicenceNumber));
}

// Set account details
if (pageUrlPath === '/internal/v01-1/accounts/view-account-details') {
  if (localStorage.getItem('supplierName')) document.getElementById('supplierName').innerHTML = JSON.parse(localStorage.getItem('supplierName'));
  
  let sNumbers = '';
  let supplierNumbers = JSON.parse(localStorage.getItem('supplierLicenceNumber'));
  
  if (localStorage.getItem('supplierLicenceNumber')) {
    for (i = 0; i < supplierNumbers.length; i++) {
      console.log('num', supplierNumbers[i].num);
      sNumbers += `<div class='supplier-num'>` + supplierNumbers[i].num + `</div>`;
    }
  }

  document.getElementById('supplierLicenceNumber').innerHTML += sNumbers;
}

let num = 0;
// add another supplier licence
function addAnotherSupplierLicence() {
  if (document.getElementById('additionalLicenceNumbers')) {
    document.getElementById('additionalLicenceNumbers').innerHTML += `
    <div class="licence-number-container" id="licenceNumber${num+1}">
      <hr class="govuk-section-break govuk-section-break--m govuk-section-break--visible" />
      <div class="govuk-grid-row">
        <div class="govuk-grid-column-one-half">
          <label class="govuk-label" for="supplierLicenceNumber${num+1}">
            Supplier licence number
          </label>
          <input class="govuk-input govuk-!-width-full" id="supplierLicenceNumber${num+1}" name="supplierLicenceNumber${num+1}" type="text" autocomplete="supplierLicenceNumber${num+1}">
        </div>
        <div class="govuk-grid-column-one-half">
          <label class="govuk-label" for="licence-id">
            Associated supplier licence ID
          </label>
          <select class="govuk-select govuk-!-width-one-full remove-button-supplement" id="licence-id" name="licence-id">
            <option value="" selected disabled hidden>Select a licence ID</option>
            <option value="LMNOPQ67890">LMNOPQ67890</option>
            <option value="QWERTY08642">QWERTY08642</option>
          </select>
          <button class="govuk-button govuk-button--secondary remove-button" id="${num+1}" data-module="govuk-button" onclick="removeSupplierLicenceNumber(${num+1})">X</button>
        </div>
      </div>
    </div>
    `;
  }
  num++;
}

function removeSupplierLicenceNumber(id) {
  const element = document.getElementById("licenceNumber"+id);
  element.remove();
}

// if (pageUrlPath === "/v05-1/measures/search-measures") {
  let options = [];
  let select = '';
  let checkboxOptions = [];
  let statusSelect = document.getElementById("measure-status");
  let typeSelect = document.getElementById("measure-type");
  let measureStatusOptions = document.getElementById("cboxesMeasureStatus");
  let measureTypeOptions = document.getElementById("cboxesMeasureType");
  let notificationOptions = document.getElementById("cboxesNotificationPeriod");
  let actionSelect = document.getElementById("action");
  
  if (measureStatusOptions) {
    // select = statusSelect;
    cbDiv = measureStatusOptions;
    checkboxOptions = [
      "Failed Notification",
      "Notified Incomplete",
      "Measure Awaiting Verification",
      "Notified Pending ",
      "On Hold",
      "Being Assessed",
      "With Supplier",
      "Internal Query",
      "Approved",
      "Rejected"
    ];
    // buildSelectOptions(options, select);
    buildCheckboxes(checkboxOptions, cbDiv);
  }
  
  if (measureTypeOptions) {
    // select = typeSelect;
    cbDiv = measureTypeOptions;
    checkboxOptions = [
      "CWI_0.027",
      "CWI_0.033",
      "CWI_0.040",
      "CWI_partial_fill",
      "PWI_Cavity",
      "EWI_cavity_0.45_0.21",
      "EWI_cavity_0.6_0.24",
      "EWI_cavity_0.6_0.3",
      "EWI_cavity_1.0_0.3",
      "EWI_cavity_1.0_0.45",
      "EWI_cavity_1.0_0.6",
      "EWI_cavity_1.7_0.23",
      "EWI_cavity_1.7_0.3",
      "EWI_cavity_1.7_0.55",
      "EWI_cavity_1.7_0.6",
      "EWI_cavity_2.0_0.25",
      "EWI_cavity_2.0_0.3",
      "EWI_cavity_2.0_0.35",
      "EWI_cavity_2.0_0.6",
      "EWI_solid_0.45_0.21",
      "EWI_solid_0.6_0.24",
      "EWI_solid_0.6_0.3",
      "EWI_solid_1.0_0.3",
      "EWI_solid_1.0_0.45",
      "EWI_solid_1.0_0.6",
      "EWI_solid_1.7_0.23",
      "EWI_solid_1.7_0.3",
      "EWI_solid_1.7_0.55",
      "EWI_solid_1.7_0.6",
      "EWI_solid_2.0_0.25",
      "EWI_solid_2.0_0.3",
      "EWI_solid_2.0_0.35",
      "EWI_solid_2.0_0.6",
      "HWI_cavity_0.45_0.21",
      "HWI_cavity_0.6_0.24",
      "HWI_cavity_0.6_0.3",
      "HWI_cavity_1.0_0.3",
      "HWI_cavity_1.0_0.45",
      "HWI_cavity_1.0_0.6",
      "HWI_cavity_1.7_0.23",
      "HWI_cavity_1.7_0.3",
      "HWI_cavity_1.7_0.55",
      "HWI_cavity_1.7_0.6",
      "HWI_cavity_2.0_0.25",
      "HWI_cavity_2.0_0.3",
      "HWI_cavity_2.0_0.35",
      "HWI_cavity_2.0_0.6",
      "HWI_solid_0.45_0.21",
      "HWI_solid_0.6_0.24",
      "HWI_solid_0.6_0.3",
      "HWI_solid_1.0_0.3",
      "HWI_solid_1.0_0.45",
      "HWI_solid_1.0_0.6",
      "HWI_solid_1.7_0.23",
      "HWI_solid_1.7_0.3",
      "HWI_solid_1.7_0.55",
      "HWI_solid_1.7_0.6",
      "HWI_solid_2.0_0.25",
      "HWI_solid_2.0_0.3",
      "HWI_solid_2.0_0.35",
      "HWI_solid_2.0_0.6",
      "IWI_cavity_0.45_0.21",
      "IWI_cavity_0.6_0.24",
      "IWI_cavity_0.6_0.3",
      "IWI_cavity_1.0_0.3",
      "IWI_cavity_1.0_0.45",
      "IWI_cavity_1.0_0.6",
      "IWI_cavity_1.7_0.23",
      "IWI_cavity_1.7_0.3",
      "IWI_cavity_1.7_0.55",
      "IWI_cavity_1.7_0.6",
      "IWI_cavity_2.0_0.25",
      "IWI_cavity_2.0_0.3",
      "IWI_cavity_2.0_0.35",
      "IWI_cavity_2.0_0.6",
      "IWI_solid_0.45_0.21",
      "IWI_solid_0.6_0.24",
      "IWI_solid_0.6_0.3",
      "IWI_solid_1.0_0.3",
      "IWI_solid_1.0_0.45",
      "IWI_solid_1.0_0.6",
      "IWI_solid_1.7_0.23",
      "IWI_solid_1.7_0.3",
      "IWI_solid_1.7_0.55",
      "IWI_solid_1.7_0.6",
      "IWI_solid_2.0_0.25",
      "IWI_solid_2.0_0.3",
      "IWI_solid_2.0_0.35",
      "IWI_solid_2.0_0.6",
      "LI_greater100",
      "LI_lessequal100",
      "FRI",
      "PHI",
      "PRI",
      "RIRI_res_in",
      "RIRI_res_unin",
      "SFI",
      "UFI"
    ];
    // buildSelectOptions(options, select);
    buildCheckboxes(checkboxOptions, cbDiv);
  }
  
  if (actionSelect) {
    select = actionSelect;
    options = [
      "Approved",
      "Being Assessed",
      "Internal Query",
      "On Hold",
      "Rejected",
      "With Supplier",
      "Notified Incomplete",
      "Notified Pending Project",
      "Measure Awaiting Verification",
      "Notified Pending",
      "Rejected - Admin",
      "Rejected - In Practice",
      "Choose Remediation Date",
      "Installation Extension Awarded - Yes",
      "Installation Extension Awarded - No",
      "No Recommendation",
      "Recommended Approval",
      "Recommended Being Assessed",
      "Recommended Internal Query",
      "Recommended On Hold",
      "Recommended Reject",
      "Recommended With Supplier",
      "Own",
      "Disown",
      "No Category ",
      "Audit ",
      "Duplicate ",
      "Investigation - Fraud",
      "Late Measure",
      "Measure Change",
      "Monitoring - Escalation",
      "Monitoring Fail",
      "Notification Error",
      "Process Later",
      "Rejection",
      "Validating"
    ];
    buildSelectOptions(options, select);
  }

  if (notificationOptions) {
    cbDiv = notificationOptions;
    checkboxOptions = [
      "April 2022",
      "May 2022",
      "June 2022",
      "July 2022",
      "August 2022",
      "September 2022",
      "October 2022",
      "November 2022",
      "December 2022",
      "January 2023",
      "February 2023",
      "March 2023",
      "April 2023",
      "May 2023",
      "June 2023",
      "July 2023",
      "August 2023",
      "September 2023",
      "October 2023",
      "November 2023",
      "December 2023",
      "January 2024",
      "February 2024",
      "March 2024",
      "April 2024",
      "May 2024",
      "June 2024",
      "July 2024",
      "August 2024",
      "September 2024",
      "October 2024",
      "November 2024",
      "December 2024",
      "January 2025",
      "February 2025",
      "March 2025",
      "April 2025",
      "May 2025",
      "June 2025",
      "July 2025",
      "August 2025",
      "September 2025",
      "October 2025",
      "November 2025",
      "December 2025",
      "January 2026",
      "February 2026",
      "March 2026"
    ];
    buildCheckboxes(checkboxOptions, cbDiv);
  }
// }

// Select with options
function buildSelectOptions(options, select) {
  for (let i = 0; i < options.length; i++) {
      var opt = options[i];
      var el = document.createElement("option");
      el.textContent = opt;
      el.value = opt;
      select.appendChild(el);
  }
}

// Checkboxes
function buildCheckboxes(checkboxOptions, cbDiv) {
  let cb = '';
  let checkBox = '';
  // console.log('checkboxOptions', checkboxOptions);
  for (var i = 0; i < checkboxOptions.length; i++) {
    checkBox = checkboxOptions[i];
    cb +=
    `<div class="govuk-checkboxes__item">
        <input class="govuk-checkboxes__input" id="` + checkBox + `" name="cboxes" type="checkbox" value="` + checkBox + `">
        <label class="govuk-label govuk-checkboxes__label" for="` + checkBox + `">` + checkBox + `</label>
    </div>`;
  }
  cbDiv.innerHTML += cb;
}

function checkAllCboxes(source) {
  // console.log('source', source);
  let checkboxes = document.getElementsByName('cboxes');
  for(let i = 0, n = checkboxes.length; i < n; i++) {
    checkboxes[i].checked = source.checked;
  }
}

// function checkAllSTATUSCboxes(source) {
//   let checkboxes = document.getElementsByName('cboxes');

//   console.log('this', this.className);
//   console.log('source', source);
//   // if (source === checkboxes.parentElement.id) {
//     for(let i = 0, n = checkboxes.length; i < n; i++) {
//       console.log(checkboxes[i].className);
//       checkboxes[i].checked = source.checked;
//     }
//   // }
// }

function deleteUser() {
  console.log('delete this user');
}

// #########################
// REUSLT ITEMS
// #########################

let resultItems = document.getElementById("resultItems");
let resultsList = document.getElementById("resultsList");
let resultsLength = document.getElementById("resultsLength");
let singularPlural = document.getElementById("singularPlural");
const searchResults = [
  {
    "measureReferenceNumber": "BGT7801767",
    "measureType": "Solar_PV",
    "measureStatus": "Notified Incomplete",
    "submissionDate": "05/09/2022",
    "notificationPeriod": "July 2022",
    "purposeOfNotification": "New Notification",
    "supplierReference": "BGT05070887G",
    "addressFields": {
      "buildingNumber": "123",
      "buildingName": "Mansion House",
      "flatNameOrNumber": "Flat 3",
      "streetName": "Any Street",
      "town": "Thattown",
      "postCode": "P05 TCD"
    }
  },
  {
    "measureReferenceNumber": "BGT1234567",
    "measureType": "Solar_PV",
    "measureStatus": "Notified Incomplete",
    "submissionDate": "05/10/2022",
    "notificationPeriod": "August 2022",
    "purposeOfNotification": "New Notification",
    "supplierReference": "BGT05070887E",
    "addressFields": {
      "buildingNumber": "198",
      "buildingName": "Blake House",
      "flatNameOrNumber": "Flat 19",
      "streetName": "Blake Mews",
      "town": "Blakeland",
      "postCode": "B1 4KE"
    }
  },
  {
    "measureReferenceNumber": "BGT1234567",
    "measureType": "Solar_PV",
    "measureStatus": "Notified Incomplete",
    "submissionDate": "05/09/2022",
    "notificationPeriod": "July 2022",
    "purposeOfNotification": "New Notification",
    "supplierReference": "BGT05070887E",
    "addressFields": {
      "buildingNumber": "198",
      "buildingName": "Canterbury Buildings",
      "flatNameOrNumber": "91",
      "streetName": "Hill Mews",
      "town": "Hilltown",
      "postCode": "H1 4TE"
    }
  }
];
// Result items array
if (resultItems) {
  resultItemsFunct(searchResults, resultItems);
  resultsLength.innerHTML = searchResults.length;
  if (singularPlural) searchResults.length > 1 ? singularPlural.innerHTML = "s" : singularPlural.innerHTML = "";
}

// resultItems lists
function resultItemsFunct(searchResults) {
  let result = '';
  let searchResult = '';
  // console.log('searchResults', searchResults);
  for (var i = 0; i < searchResults.length; i++) {
    searchResult = searchResults[i];
    result +=
    `
    <div class="result-item">
      <dl class="govuk-summary-list govuk-summary-list--no-border">
          <div class="govuk-summary-list__row">
              <dt class="govuk-summary-list__key">
                  Measure Reference Number
              </dt>
              <dd class="govuk-summary-list__value">
                  <a href="">`+ searchResults[i].measureReferenceNumber +`</a>
              </dd>
          </div>
          <div class="govuk-summary-list__row">
              <dt class="govuk-summary-list__key">
                  Measure Type
              </dt>
              <dd class="govuk-summary-list__value">
              `+ searchResults[i].measureType +`
              </dd>
          </div>
          <div class="govuk-summary-list__row">
              <dt class="govuk-summary-list__key">
                  Status
              </dt>
              <dd class="govuk-summary-list__value">
              `+ searchResults[i].measureStatus +`
              </dd>
          </div>
          <div class="govuk-summary-list__row">
              <dt class="govuk-summary-list__key">
                  Submission date
              </dt>
              <dd class="govuk-summary-list__value">
                  <p class="govuk-body">`+ searchResults[i].submissionDate +`</p>
              </dd>
          </div>
          <div class="govuk-summary-list__row">
              <dt class="govuk-summary-list__key">
                  Notification Period
              </dt>
              <dd class="govuk-summary-list__value">
                  <p class="govuk-body">`+ searchResults[i].notificationPeriod +`</p>
              </dd>
          </div>
          <div class="govuk-summary-list__row">
              <dt class="govuk-summary-list__key">
                  Purpose of notification
              </dt>
              <dd class="govuk-summary-list__value">
                  <p class="govuk-body">`+ searchResults[i].purposeOfNotification +`</p>
              </dd>
          </div>
          <div class="govuk-summary-list__row">
              <dt class="govuk-summary-list__key">
                  Supplier reference
              </dt>
              <dd class="govuk-summary-list__value">
                  <p class="govuk-body">`+ searchResults[i].supplierReference +`</p>
              </dd>
          </div>
          <div class="govuk-summary-list__row">
              <dt class="govuk-summary-list__key">
                  Address
              </dt>
              <dd class="govuk-summary-list__value">
                  <p class="govuk-body">`+ searchResults[i].addressFields.buildingNumber +`</p>
                  <p class="govuk-body">`+ searchResults[i].addressFields.buildingName +`</p>
                  <p class="govuk-body">`+ searchResults[i].addressFields.flatNameOrNumber +`</p>
                  <p class="govuk-body">`+ searchResults[i].addressFields.streetName +`</p>
                  <p class="govuk-body">`+ searchResults[i].addressFields.town +`</p>
                  <p class="govuk-body">`+ searchResults[i].addressFields.postCode +`</p>
              </dd>
          </div>
      </dl>
    </div>
    `;
  }
  resultItems.innerHTML += result;
}

if (resultsList) {
  resultsListFunct(searchResults, resultsList);
  resultsLength.innerHTML = searchResults.length;
  if (singularPlural) searchResults.length > 1 ? singularPlural.innerHTML = "s" : singularPlural.innerHTML = "";
}
// resultsList lists
function resultsListFunct(searchResults) {
  let result = '';
  let searchResult = '';
  for (var i = 0; i < searchResults.length; i++) {
    searchResult = searchResults[i];
    result +=
    `
    <tr>
      <td>
        <div class="govuk-checkboxes" data-module="govuk-checkboxes">                                
          <div class="govuk-checkboxes__item">
            <input  name="search-results"
                    type="checkbox" 
                    id="Id_SelectAll_InternalMeasuresGrid" 
                    data-test-id="" 
                    class="govuk-checkboxes__input">
            <label for="" class="govuk-label govuk-checkboxes__label"></label>
          </div>
        </div>
      </td>                    
      <td><p class="govuk-body">` + searchResults[i].measureReferenceNumber + `</p></td>
      <td><p class="govuk-body">` + searchResults[i].measureType + `</p></td>
      <td><p class="govuk-body">` + searchResults[i].measureStatus + `</p></td>
      <td><p class="govuk-body">` + searchResults[i].submissionDate + `</p></td>
      <td><p class="govuk-body"><a href="#">View details</a></p></td>
    </tr>
    `;
  }
  resultsList.innerHTML += result;
}