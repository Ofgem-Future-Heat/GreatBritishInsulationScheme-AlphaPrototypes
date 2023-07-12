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

function fileSelection() {
  
  if(document.getElementById("file-upload").value != "") {
    // you have a file
    document.getElementById("uploadBtn").removeAttribute("disabled");
    document.getElementById("uploadBtn").classList.remove('govuk-button--disabled');
    document.getElementById("uploadBtn").setAttribute('aria-disabled', false);
    console.log('file selected');
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
    "jobTitle": "Deputy manager"
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
    "jobTitle": "Supervisor"
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
    "jobTitle": "Quality Assurance"
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
    "jobTitle": "Quality Assurance"
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
    "jobTitle": "Quality Assurance"
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
    "jobTitle": "Quality Assurance"
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
    "jobTitle": "Quality Assurance"
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
    "jobTitle": "Quality Assurance"
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
    "jobTitle": "Quality Assurance"
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
    "jobTitle": "Quality Assurance"
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
    "jobTitle": "Quality Assurance"
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
    "jobTitle": "Quality Assurance"
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
    "jobTitle": "Quality Assurance"
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
    "jobTitle": "Quality Assurance"
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
    "jobTitle": "Quality Assurance"
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
    "jobTitle": "Quality Assurance"
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
    "jobTitle": "Quality Assurance"
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
    "jobTitle": "Quality Assurance"
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
    "jobTitle": "Quality Assurance"
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
    "jobTitle": "Quality Assurance"
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
    "jobTitle": "Compliance Officer"
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
    "jobTitle": "Quality Assurance"
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
    "jobTitle": "Compliance Officer"
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
    "jobTitle": "Compliance Officer"
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
    "jobTitle": "Quality Assurance"
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
    "jobTitle": "Compliance Officer"
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
    "jobTitle": "Compliance Officer"
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
    "jobTitle": "Compliance Officer"
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
    "jobTitle": "Quality Assurance"
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
    "jobTitle": "Compliance Officer"
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
    "jobTitle": "Compliance Officer"
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
    "jobTitle": "Compliance Officer"
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
    "jobTitle": "Quality Assurance"
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
    "jobTitle": "Quality Assurance"
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
    "jobTitle": "Compliance Officer"
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
    "jobTitle": "Quality Assurance"
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
    "jobTitle": "Compliance Officer"
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
    "jobTitle": "Quality Assurance"
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
    "jobTitle": "Compliance Officer"
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
    "jobTitle": "Compliance Officer"
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
    "jobTitle": "Quality Assurance"
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
    "jobTitle": "Compliance Officer"
  }
];

// Build external user list
if (pageUrlPath === '/internal/v01-1/external-users/'){
  console.log('externalUsers.length', externalUsers.length);
  for (let i = 0; i < externalUsers.length; i++) {
    if (document.getElementById('extUsers')) {
      document.getElementById('extUsers').innerHTML += `
        <tr class="govuk-table__row">
          <td scope="row" class="govuk-table__header">` + externalUsers[i].supplierName + `</td>
          <td class="govuk-table__cell">` + externalUsers[i].firstName + `</td>
          <td class="govuk-table__cell">` + externalUsers[i].lastName + `</td>
          <td class="govuk-table__cell">` + externalUsers[i].emailAddress + `</td>
          <td class="govuk-table__cell">` + externalUsers[i].userType + `</td>
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
  localStorage.setItem('ext_userType', userType);
  localStorage.setItem('ext_jobTitle', jobTitle);
}

// Set External user details
if (pageUrlPath === '/internal/v01-1/external-users/view-external-details') {
  document.getElementById('username').innerText = localStorage.getItem('ext_username');
  document.getElementById('title').innerText = localStorage.getItem('ext_title');
  document.getElementById('firstName').innerText = localStorage.getItem('ext_firstName');
  document.getElementById('middleName').innerText = localStorage.getItem('ext_middleName');
  document.getElementById('lastName').innerText = localStorage.getItem('ext_lastName');
  document.getElementById('emailAddress').innerText = localStorage.getItem('ext_emailAddress');
  document.getElementById('telephoneNumber').innerText = localStorage.getItem('ext_telephoneNumber');
  document.getElementById('supplierName').innerText = localStorage.getItem('ext_supplierName');
  document.getElementById('userType').innerText = localStorage.getItem('ext_userType');
  document.getElementById('jobTitle').innerText = localStorage.getItem('ext_jobTitle');
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
    "userType": "Basic role"
  }, {
    "username": "manuelturizo",
    "title": "Mr",
    "firstName": "Manuel",
    "middleName": "Sosa",
    "lastName": "Turizo",
    "jobTitle": "Systems Analyst",
    "emailAddress": "manuel.turizo@orgmail.com",
    "telephoneNumber": "07118352353",
    "userType": "Internal admin"
  }, {
    "username": "russeltaylor",
    "title": "Mr",
    "firstName": "Russel",
    "middleName": "",
    "lastName": "Taylor",
    "jobTitle": "Supervisor",
    "emailAddress": "russel.taylor@orgmail.com",
    "telephoneNumber": "07187774333",
    "userType": "Standard role"
  }, {
    "username": "bruceleroy",
    "title": "Mr",
    "firstName": "Bruce",
    "middleName": "Dragon",
    "lastName": "Lreoy",
    "jobTitle": "Systems Analyst",
    "emailAddress": "bruce.reloy@orgmail.com",
    "telephoneNumber": "07118352353",
    "userType": "Internal admin"
  }, {
    "username": "rauwalejandro",
    "title": "Mr",
    "firstName": "Rauw",
    "middleName": "Jose",
    "lastName": "Alejandro",
    "jobTitle": "Systems Analyst",
    "emailAddress": "rauw.alejandro@orgmail.com",
    "telephoneNumber": "07118352353",
    "userType": "Internal admin"
  }, {
    "username": "leonidascarpenter",
    "title": "Mr",
    "firstName": "Leonidas",
    "middleName": "Ian",
    "lastName": "Carpenter",
    "jobTitle": "Systems Analyst",
    "emailAddress": "leonidas.carpenter@orgmail.com",
    "telephoneNumber": "07118352353",
    "userType": "Internal admin"
  }, {
    "username": "Loukang",
    "title": "Mr",
    "firstName": "Lou",
    "middleName": "",
    "lastName": "Kang",
    "jobTitle": "Systems Analyst",
    "emailAddress": "Lou.kang@orgmail.com",
    "telephoneNumber": "07118352353",
    "userType": "Internal admin"
  }, {
    "username": "lorainejanekelly",
    "title": "Ms",
    "firstName": "Loraine",
    "middleName": "Jane",
    "lastName": "Kelly",
    "jobTitle": "Quality Assurance",
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
    "userType": "Internal admin"
  }, {
    "username": "jaliyahjames",
    "title": "Ms",
    "firstName": "Jaliyah ",
    "middleName": "",
    "lastName": "James",
    "jobTitle": "Mechanical Engineer",
    "emailAddress": "jaliyah.james@orgmail.com",
    "telephoneNumber": "07990352333",
    "userType": "Internal admin"
  }, {
    "username": "wilsonday",
    "title": "Mr",
    "firstName": "Wilson",
    "middleName": "Eric",
    "lastName": "Day",
    "jobTitle": "IT Manager",
    "emailAddress": "wilson.day@orgmail.com",
    "telephoneNumber": "07222352333",
    "userType": "Internal admin"
  }, {
    "username": "zionmcmillan",
    "title": "Mr",
    "firstName": "Zion",
    "middleName": "Joshua",
    "lastName": "Mcmillan",
    "jobTitle": "Systems Analyst",
    "emailAddress": "zion.mcmillan@orgmail.com",
    "telephoneNumber": "07166352333",
    "userType": "Internal admin"
  }, {
    "username": "titusanthony",
    "title": "Mr",
    "firstName": "Titus",
    "middleName": "",
    "lastName": "Anthony",
    "jobTitle": "Systems Analyst",
    "emailAddress": "titus.anthony@orgmail.com",
    "telephoneNumber": "07234352333",
    "userType": "Internal admin"
  }, {
    "username": "zachariahbarr",
    "title": "Mr",
    "firstName": "Zachariah",
    "middleName": "",
    "lastName": "Barr",
    "jobTitle": "Systems Analyst",
    "emailAddress": "zachariah.barr@orgmail.com",
    "telephoneNumber": "07118352353",
    "userType": "Internal admin"
  }, {
    "username": "antwangaines",
    "title": "Mr",
    "firstName": "Antwan",
    "middleName": "",
    "lastName": "Gaines",
    "jobTitle": "Systems Analyst",
    "emailAddress": "antwan.gaines@orgmail.com",
    "telephoneNumber": "07118352353",
    "userType": "Internal admin"
  }, {
    "username": "trinitymelton",
    "title": "Mr",
    "firstName": "Trinity",
    "middleName": "",
    "lastName": "Melton",
    "jobTitle": "Systems Analyst",
    "emailAddress": "trinity.melton@orgmail.com",
    "telephoneNumber": "07118352353",
    "userType": "Internal admin"
  }, {
    "username": "henrynovak",
    "title": "Mr",
    "firstName": "Henry",
    "middleName": "",
    "lastName": "Novak",
    "jobTitle": "Systems Analyst",
    "emailAddress": "henry.novak@orgmail.com",
    "telephoneNumber": "07118352353",
    "userType": "Internal admin"
  }
];

// Build internal user list
if (pageUrlPath === '/internal/v01-1/internal-users/'){
  for (let i = 0; i < internalUsers.length; i++) {
    if (document.getElementById('intUsers')) {
      document.getElementById('intUsers').innerHTML += `
        <tr class="govuk-table__row">
          <td scope="row" class="govuk-table__header">` + internalUsers[i].username + `</td>
          <td class="govuk-table__cell">` + internalUsers[i].firstName + `</td>
          <td class="govuk-table__cell">` + internalUsers[i].lastName + `</td>
          <td class="govuk-table__cell">` + internalUsers[i].emailAddress + `</td>
          <td class="govuk-table__cell">` + internalUsers[i].userType + `</td>
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