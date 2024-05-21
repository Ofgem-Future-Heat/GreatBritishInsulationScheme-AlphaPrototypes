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

function triggerValidation42() {
    window.location.pathname = "/v04-2/measures/success-file-upload-core-check-errors";
}

function triggerValidation70() {
    window.location.pathname = "/v07/measures/success-file-upload-core-check-errors";
}

function triggerValidation80() {
    window.location.pathname = "/v08/measures/success-file-upload-core-check-errors";
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
    "username": "jeangray",
    "title": "Ms",
    "firstName": "Jean",
    "middleName": "Francine",
    "lastName": "Gray",
    "emailAddress": "jean.gray@britishgas",
    "telephoneNumber": "07111222333",
    "supplierName": "BGT",
    "userType": "AdditionalUserRole",
    "jobTitle": "Compliance Officer",
    "userStatus": "Active"
  }, {
    "username": "jaukhan",
    "title": "Mr",
    "firstName": "Jau",
    "middleName": "",
    "lastName": "Khan",
    "emailAddress": "jau.khan@britishgas.com",
    "telephoneNumber": "07111222333",
    "supplierName": "SHL",
    "userType": "AdditionalUserRole",
    "jobTitle": "Compliance Officer",
    "userStatus": "Active"
  }
  //, {
  //   "username": "lorainekelly",
  //   "title": "Ms",
  //   "firstName": "Loraine",
  //   "middleName": "Jane",
  //   "lastName": "Kelly",
  //   "emailAddress": "loraine.kelly@orgmail.com",
  //   "telephoneNumber": "07111222333",
  //   "supplierName": "SOE",
  //   "userType": "AdditionalUserRole",
  //   "jobTitle": "Quality Assurance",
  //   "userStatus": "Active"
  // }, {
  //   "username": "lorainekelly",
  //   "title": "Ms",
  //   "firstName": "Loraine",
  //   "middleName": "Jane",
  //   "lastName": "Kelly",
  //   "emailAddress": "loraine.kelly@orgmail.com",
  //   "telephoneNumber": "07111222333",
  //   "supplierName": "RHE",
  //   "userType": "AdditionalUserRole",
  //   "jobTitle": "Compliance Officer",
  //   "userStatus": "Active"
  // }, {
  //   "username": "lorainekelly",
  //   "title": "Ms",
  //   "firstName": "Loraine",
  //   "middleName": "Jane",
  //   "lastName": "Kelly",
  //   "emailAddress": "loraine.kelly@orgmail.com",
  //   "telephoneNumber": "07111222333",
  //   "supplierName": "TNK",
  //   "userType": "AdditionalUserRole",
  //   "jobTitle": "Compliance Officer",
  //   "userStatus": "Active"
  // }, {
  //   "username": "lorainekelly",
  //   "title": "Ms",
  //   "firstName": "Loraine",
  //   "middleName": "Jane",
  //   "lastName": "Kelly",
  //   "emailAddress": "loraine.kelly@orgmail.com",
  //   "telephoneNumber": "07111222333",
  //   "supplierName": "PLA",
  //   "userType": "AdditionalUserRole",
  //   "jobTitle": "Compliance Officer",
  //   "userStatus": "Inactive"
  // }, {
  //   "username": "lorainekelly",
  //   "title": "Ms",
  //   "firstName": "Loraine",
  //   "middleName": "Jane",
  //   "lastName": "Kelly",
  //   "emailAddress": "loraine.kelly@orgmail.com",
  //   "telephoneNumber": "07111222333",
  //   "supplierName": "ISP",
  //   "userType": "AdditionalUserRole",
  //   "jobTitle": "Quality Assurance",
  //   "userStatus": "Active"
  // }, {
  //   "username": "lorainekelly",
  //   "title": "Ms",
  //   "firstName": "Loraine",
  //   "middleName": "Jane",
  //   "lastName": "Kelly",
  //   "emailAddress": "loraine.kelly@orgmail.com",
  //   "telephoneNumber": "07111222333",
  //   "supplierName": "UPL",
  //   "userType": "AdditionalUserRole",
  //   "jobTitle": "Compliance Officer",
  //   "userStatus": "Active"
  // }, {
  //   "username": "lorainekelly",
  //   "title": "Ms",
  //   "firstName": "Loraine",
  //   "middleName": "Jane",
  //   "lastName": "Kelly",
  //   "emailAddress": "loraine.kelly@orgmail.com",
  //   "telephoneNumber": "07111222333",
  //   "supplierName": "ECY",
  //   "userType": "AdditionalUserRole",
  //   "jobTitle": "Compliance Officer",
  //   "userStatus": "Active"
  // }, {
  //   "username": "lorainekelly",
  //   "title": "Ms",
  //   "firstName": "Loraine",
  //   "middleName": "Jane",
  //   "lastName": "Kelly",
  //   "emailAddress": "loraine.kelly@orgmail.com",
  //   "telephoneNumber": "07111222333",
  //   "supplierName": "BRI",
  //   "userType": "AdditionalUserRole",
  //   "jobTitle": "Compliance Officer",
  //   "userStatus": "Active"
  // }, {
  //   "username": "lorainekelly",
  //   "title": "Ms",
  //   "firstName": "Loraine",
  //   "middleName": "Jane",
  //   "lastName": "Kelly",
  //   "emailAddress": "loraine.kelly@orgmail.com",
  //   "telephoneNumber": "07111222333",
  //   "supplierName": "ESB",
  //   "userType": "AdditionalUserRole",
  //   "jobTitle": "Quality Assurance",
  //   "userStatus": "Active"
  // }, {
  //   "username": "lorainekelly",
  //   "title": "Ms",
  //   "firstName": "Loraine",
  //   "middleName": "Jane",
  //   "lastName": "Kelly",
  //   "emailAddress": "loraine.kelly@orgmail.com",
  //   "telephoneNumber": "07111222333",
  //   "supplierName": "IGL",
  //   "userType": "AuthorisedSignatoryRole",
  //   "jobTitle": "Quality Assurance",
  //   "userStatus": "Active"
  // }, {
  //   "username": "lorainekelly",
  //   "title": "Ms",
  //   "firstName": "Loraine",
  //   "middleName": "Jane",
  //   "lastName": "Kelly",
  //   "emailAddress": "loraine.kelly@orgmail.com",
  //   "telephoneNumber": "07111222333",
  //   "supplierName": "TOE",
  //   "userType": "AuthorisedSignatoryRole",
  //   "jobTitle": "Compliance Officer",
  //   "userStatus": "Active"
  // }, {
  //   "username": "lorainekelly",
  //   "title": "Ms",
  //   "firstName": "Loraine",
  //   "middleName": "Jane",
  //   "lastName": "Kelly",
  //   "emailAddress": "loraine.kelly@orgmail.com",
  //   "telephoneNumber": "07111222333",
  //   "supplierName": "FOX",
  //   "userType": "AuthorisedSignatoryRole",
  //   "jobTitle": "Quality Assurance",
  //   "userStatus": "Active"
  // }, {
  //   "username": "lorainekelly",
  //   "title": "Ms",
  //   "firstName": "Loraine",
  //   "middleName": "Jane",
  //   "lastName": "Kelly",
  //   "emailAddress": "loraine.kelly@orgmail.com",
  //   "telephoneNumber": "07111222333",
  //   "supplierName": "PES",
  //   "userType": "AdditionalUserRole",
  //   "jobTitle": "Compliance Officer",
  //   "userStatus": "Active"
  // }, {
  //   "username": "lorainekelly",
  //   "title": "Ms",
  //   "firstName": "Loraine",
  //   "middleName": "Jane",
  //   "lastName": "Kelly",
  //   "emailAddress": "loraine.kelly@orgmail.com",
  //   "telephoneNumber": "07111222333",
  //   "supplierName": "IGL",
  //   "userType": "AdditionalUserRole",
  //   "jobTitle": "Quality Assurance",
  //   "userStatus": "Active"
  // }, {
  //   "username": "lorainekelly",
  //   "title": "Ms",
  //   "firstName": "Loraine",
  //   "middleName": "Jane",
  //   "lastName": "Kelly",
  //   "emailAddress": "loraine.kelly@orgmail.com",
  //   "telephoneNumber": "07111222333",
  //   "supplierName": "FUL",
  //   "userType": "AdditionalUserRole",
  //   "jobTitle": "Compliance Officer",
  //   "userStatus": "Active"
  // }, {
  //   "username": "lorainekelly",
  //   "title": "Ms",
  //   "firstName": "Loraine",
  //   "middleName": "Jane",
  //   "lastName": "Kelly",
  //   "emailAddress": "loraine.kelly@orgmail.com",
  //   "telephoneNumber": "07111222333",
  //   "supplierName": "OVO",
  //   "userType": "AdditionalUserRole",
  //   "jobTitle": "Compliance Officer",
  //   "userStatus": "Active"
  // }, {
  //   "username": "lorainekelly",
  //   "title": "Ms",
  //   "firstName": "Loraine",
  //   "middleName": "Jane",
  //   "lastName": "Kelly",
  //   "emailAddress": "loraine.kelly@orgmail.com",
  //   "telephoneNumber": "07111222333",
  //   "supplierName": "SPK",
  //   "userType": "AdditionalUserRole",
  //   "jobTitle": "Quality Assurance",
  //   "userStatus": "Active"
  // }, {
  //   "username": "lorainekelly",
  //   "title": "Ms",
  //   "firstName": "Loraine",
  //   "middleName": "Jane",
  //   "lastName": "Kelly",
  //   "emailAddress": "loraine.kelly@orgmail.com",
  //   "telephoneNumber": "07111222333",
  //   "supplierName": "BRI",
  //   "userType": "AdditionalUserRole",
  //   "jobTitle": "Compliance Officer",
  //   "userStatus": "Active"
  // }
];

// Build external user list
if (pageUrlPath === '/internal/v01-1/external-users/' || pageUrlPath === '/internal/v02-0/external-users/'){
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
if ((pageUrlPath === '/internal/v01-1/external-users/view-external-details') || (pageUrlPath === '/internal/v02-0/external-users/view-external-details')) {
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
  let statusRadio = document.getElementById("measure-status-radio");
  let statusSelectNone = document.getElementById("measure-status-none");
  let statusSelectAll = document.getElementById("measure-status-all");

  let typeSelect = document.getElementById("measure-type");
  // let typeSelectNone = document.getElementById("measure-type-none");
  // let typeSelectAll = document.getElementById("measure-type-all");
  
  let typeCategorySelect = document.getElementById("measure-type-category");
  let typeCategorySelectNone = document.getElementById("measure-type-category-none");
  let typeCategorySelectAll = document.getElementById("measure-type-category-all");
  
  let notificationSelect = document.getElementById("notification-period");
  let notificationSelectNone = document.getElementById("notification-period-none");
  let notificationSelectAll = document.getElementById("notification-period-all");
  
  let measureStatusOptions = document.getElementById("cboxesMeasureStatus");
  let measureTypeOptions = document.getElementById("cboxesMeasureType");
  let measureTypeOptionsCategory = document.getElementById("cboxesMeasureTypeCategory");
  let notificationOptions = document.getElementById("cboxesNotificationPeriod");
  let actionSelect = document.getElementById("action");
  
  // StatusOptionsList
  const measureStatusOptionsList = [
    //"Failed Notification",
    "Notified Incomplete",
    "Notified Incomplete - TrustMark",
    "Measure Awaiting Verification",
    "Notified Pending",
    "Notified Pending - TrustMark",
    "On Hold",
    "Being Assessed",
    "With Supplier",
    "Internal Query",
    "Approved",
    "Rejected"
  ];

  if (measureStatusOptions) {
    cbDiv = measureStatusOptions;
    checkboxOptions = measureStatusOptionsList;
    buildCheckboxes(checkboxOptions, cbDiv);
  }
  
  if (statusSelect) {
    select = statusSelect;
    options = measureStatusOptionsList;
    buildSelectOptions(options, select);
  }
  
  if (statusRadio) {
    radio = statusRadio;
    options = measureStatusOptionsList;
    buildRadioOptions(options);
  }


  let toggleSelectStatus = false;
  function toggleSelectStatusFn() {
    let spanText = document.getElementById('allOrNoneStatus');
    toggleSelectStatus = !toggleSelectStatus;
    if (toggleSelectStatus){
      spanText.innerHTML = "none";
      document.getElementById('measure-status-all').classList.remove('hide');
      document.getElementById('measure-status-none').classList.add('hide');
    } else {
      spanText.innerHTML = "all";
      document.getElementById('measure-status-all').classList.add('hide');
      document.getElementById('measure-status-none').classList.remove('hide');
    }
  }
  if (statusSelectNone) {
    select = statusSelectNone;
    options = measureStatusOptionsList;
    buildSelectOptionsNone(options, select, toggleSelectStatus);
  }
  
  if (statusSelectAll) {
    select = statusSelectAll;
    options = measureStatusOptionsList;
    buildSelectOptionsAll(options, select, toggleSelectStatus);
  }



  // TypeOptionsList
  const measureTypeOptionsList = [
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

  if (measureTypeOptions) {
    cbDiv = measureTypeOptions;
    checkboxOptions = measureTypeOptionsList;
    buildCheckboxes(checkboxOptions, cbDiv);
  }
  
  if (typeSelect) {
    select = typeSelect;
    options = measureTypeOptionsList;
    buildSelectOptions(options, select);
  }

  const measureTypeCategoryList = [
    "Cavity wall insulation",
    "External/Internal Wall Insulation",
    "Loft Insulation",
    "Other Insulation",
    "Other heating"
  ]

  if (measureTypeOptionsCategory) {
    cbDiv = measureTypeOptionsCategory;
    checkboxOptions = measureTypeCategoryList;
    buildCheckboxes(checkboxOptions, cbDiv);
  }
  
  if (typeCategorySelect) {
    select = typeCategorySelect;
    options = measureTypeCategoryList;
    buildSelectOptions(options, select);
  }
  
  
  let toggleSelectCategoryType = false;
  function toggleSelectCategoryTypeFn() {
    let spanText = document.getElementById('allOrNoneCategory');
    toggleSelectCategoryType = !toggleSelectCategoryType;
    if (toggleSelectCategoryType){
      spanText.innerHTML = "none";
      document.getElementById('measure-type-category-all').classList.remove('hide');
      document.getElementById('measure-type-category-none').classList.add('hide');
    } else {
      spanText.innerHTML = "all";
      document.getElementById('measure-type-category-all').classList.add('hide');
      document.getElementById('measure-type-category-none').classList.remove('hide');
    }
  }
  if (typeCategorySelectNone) {
    select = typeCategorySelectNone;
    options = measureTypeCategoryList;
    buildSelectOptionsNone(options, select, toggleSelectCategoryType);
  }
  
  if (typeCategorySelectAll) {
    select = typeCategorySelectAll;
    options = measureTypeCategoryList;
    buildSelectOptionsAll(options, select, toggleSelectCategoryType);
  }


  // NotificationPeriod
  const notificationPerionOptionsList = [
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
  
  if (notificationOptions) {
    cbDiv = notificationOptions;
    checkboxOptions = notificationPerionOptionsList;
    buildCheckboxes(checkboxOptions, cbDiv);
  }
  


  let toggleSelectNotificationPeriod = false;
  function toggleSelectNotificationPeriodFn() {
    let spanText = document.getElementById('allOrNoneNotification');
    toggleSelectNotificationPeriod = !toggleSelectNotificationPeriod;
    if (toggleSelectNotificationPeriod){
      spanText.innerHTML = "none";
      document.getElementById('notification-period-all').classList.remove('hide');
      document.getElementById('notification-period-none').classList.add('hide');
    } else {
      spanText.innerHTML = "all";
      document.getElementById('notification-period-all').classList.add('hide');
      document.getElementById('notification-period-none').classList.remove('hide');
    }
  }

  if (notificationSelectNone) {
    select = notificationSelectNone;
    options = notificationPerionOptionsList;
    buildSelectOptionsNone(options, select, toggleSelectNotificationPeriod);
  }
  if (notificationSelectAll) {
    select = notificationSelectAll;
    options = notificationPerionOptionsList;
    buildSelectOptionsAll(options, select, toggleSelectNotificationPeriod);
  }
  
  if (notificationSelect) {
    select = notificationSelect;
    options = notificationPerionOptionsList;
    buildSelectOptions(options, select);
  }

  // Actions
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
      "Notified Incomplete - TrustMark",
      "Notified Pending Project",
      "Measure Awaiting Verification",
      "Notified Pending",
      "Notified Pending - TrustMark",
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
    // buildSelectOptions(options, select);
  }
// }

// Select with options
// function buildSelectOptions(options, select) {
function buildSelectOptions(options, select) {
  for (let i = 0; i < options.length; i++) {
      var opt = options[i];
      var el = document.createElement("option");
      el.textContent = opt;
      el.value = opt;
      select.appendChild(el);
  }
}


function buildSelectOptionsNone(options, select, toggleSelect) {
  // console.log('toggleSelect ==>', toggleSelect);
  for (let i = 0; i < options.length; i++) {
      var opt = options[i];
      var el = document.createElement("option");
      el.textContent = opt;
      el.value = opt;
      el.removeAttribute('selected');
      select.appendChild(el);
  }
}

function buildSelectOptionsAll(options, select, toggleSelect) {
  // console.log('toggleSelect ==>', toggleSelect);
  for (let i = 0; i < options.length; i++) {
      var opt = options[i];
      var el = document.createElement("option");
      el.textContent = opt;
      el.value = opt;
      el.setAttribute('selected', 'selected');
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

// Radio buttons
function buildRadioOptions(options) {
  let i = 0;
  options.forEach((e)=> {
    let radioOptions = `
    <div class="govuk-radios__item">
      <input class="govuk-radios__input" id="radio-${e}" name="status-options" type="radio" value="${e}">
      <label class="govuk-label govuk-radios__label" for="radio-${e}">
        ${e}
      </label>
    </div>
    `;
    statusRadio.innerHTML += radioOptions;
  });
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
// RESULTS ITEMS
// #########################

let resultItems = document.getElementById("resultItems");
let resultsList = document.getElementById("resultsList");
let resultsListInt = document.getElementById("resultsListInt");
let resultsLength = document.getElementById("resultsLength");
let singularPlural = document.getElementById("singularPlural");
const searchResults = [
  {
    "supplierName": "OVO",
    "measureReferenceNumber": "OVO7801767",
    "measureType": "Solar_PV",
    "measureStatus": "Notified Incomplete",
    "submissionDate": "05/09/2022",
    "notificationPeriod": "July 2022",
    "purposeOfNotification": "New Notification",
    "supplierReference": "BGT05070887G",
    "dateOfCompletedInstallation": "12/04/2023",
    "addressFields": {
      "buildingNumber": "123",
      "buildingName": "Mansion House",
      "flatNameOrNumber": "Flat 3",
      "streetName": "Any Street",
      "town": "Thattown",
      "postCode": "P05 TCD"
    },
    "UniquePropertyReferenceNumber": "133568892345",
    "startingSAPRating": "1234567890",
    "floorArea": "2345",
    "rural": "No",
    "offGas": "Yes",
    "privateDomesticPremises": "Yes",
    "tenureType": "Owner Occupied",
    "property": "Flat",
    "eligibilityType": "LI - Social Housing",
    "verificationMethod": "ECO Eligible Referral",
    "dwpReferenceNumber": "ABC_AB123456",
    "councilTaxBand": "C",

    "prsSAPBandException": "Yes",
    "associatedInsulationMRNforHeatingMeasures": "ABC1234",
    "associatedInfillMeasure1": "ABC1234567",
    "associatedInfillMeasure2": "ABC1234567",
    "associatedInfillMeasure3": "ABC1234567",
    "flexReferralRoute": "Route 2 Council Tax Reduction",
    "laDeclarationReferenceNumber": "A12345678-12345",
    "dateOfHouseholderEligibility": "23/09/22",
    "percentageOfPropertyTreated": "50%",
    "heatingSource": "N/A",
    "installerName": "Max character length of 150 characters",
    "innovationMeasureNumber": "123",

    "trustmarkBusinessLicenceNumber": "123456789012",
    "trustmarkUniqueMeasureReference": "ABC123DEF456GHIJ7890",
    "trustmarkLodgedCertificateID": "A1234567-1",
    "trustmarkProjectReferenceNumber": "T12345",
    "trustMarkCompletedProjectCertID": "A1234567-A"
  },
  {
    "supplierName": "OVO",
    "measureReferenceNumber": "OVO1234567",
    "measureType": "Solar_PV",
    "measureStatus": "Notified Incomplete",
    "submissionDate": "05/10/2022",
    "notificationPeriod": "August 2022",
    "purposeOfNotification": "New Notification",
    "supplierReference": "BGT05070887E",
    "dateOfCompletedInstallation": "04/02/2023",
    "addressFields": {
      "buildingNumber": "198",
      "buildingName": "Blake House",
      "flatNameOrNumber": "Flat 19",
      "streetName": "Blake Mews",
      "town": "Blakeland",
      "postCode": "B1 4KE"
    },
    "UniquePropertyReferenceNumber": "123456789012",
    "startingSAPRating": "1234567890",
    "floorArea": "2345",
    "rural": "No",
    "offGas": "Yes",
    "privateDomesticPremises": "Yes",
    "tenureType": "Owner Occupied",
    "property": "Flat",
    "eligibilityType": "LI - Social Housing",
    "verificationMethod": "ECO Eligible Referral",
    "dwpReferenceNumber": "ABC_AB123456",
    "councilTaxBand": "C",

    "prsSAPBandException": "Yes",
    "associatedInsulationMRNforHeatingMeasures": "ABC1234",
    "associatedInfillMeasure1": "ABC1234567",
    "associatedInfillMeasure2": "ABC1234567",
    "associatedInfillMeasure3": "ABC1234567",
    "flexReferralRoute": "Route 2 Council Tax Reduction",
    "laDeclarationReferenceNumber": "A12345678-12345",
    "dateOfHouseholderEligibility": "23/09/22",
    "percentageOfPropertyTreated": "67+",
    "heatingSource": "N/A",
    "installerName": "Max character length of 150 characters",
    "innovationMeasureNumber": "123",

    "trustmarkBusinessLicenceNumber": "123456789012",
    "trustmarkUniqueMeasureReference": "ABC123DEF456GHIJ7890",
    "trustmarkLodgedCertificateID": "A1234567-1",
    "trustmarkProjectReferenceNumber": "T12345",
    "trustMarkCompletedProjectCertID": "A1234567-A"
  },
  {
    "supplierName": "OVO",
    "measureReferenceNumber": "OVO1234564",
    "measureType": "Solar_PV",
    "measureStatus": "Notified Incomplete",
    "submissionDate": "05/09/2022",
    "notificationPeriod": "July 2022",
    "purposeOfNotification": "New Notification",
    "supplierReference": "OVO05458887E",
    "dateOfCompletedInstallation": "12/12/2022",

    "addressFields": {
      "buildingNumber": "198",
      "buildingName": "Canterbury Buildings",
      "flatNameOrNumber": "91",
      "streetName": "Hill Mews",
      "town": "Hilltown",
      "postCode": "H1 4TE"
    },

    "UniquePropertyReferenceNumber": "210987654321",
    "startingSAPRating": "1234567890",
    "floorArea": "2345",
    "rural": "No",
    "offGas": "Yes",
    "privateDomesticPremises": "Yes",
    "tenureType": "Owner Occupied",
    "property": "Flat",
    "eligibilityType": "LI - Social Housing",
    "verificationMethod": "ECO Eligible Referral",
    "dwpReferenceNumber": "ABC_AB123456",
    "councilTaxBand": "C",

    "prsSAPBandException": "Yes",
    "associatedInsulationMRNforHeatingMeasures": "ABC1234",
    "associatedInfillMeasure1": "ABC1234567",
    "associatedInfillMeasure2": "ABC1234567",
    "associatedInfillMeasure3": "ABC1234567",
    "flexReferralRoute": "Route 2 Council Tax Reduction",
    "laDeclarationReferenceNumber": "A12345678-12345",
    "dateOfHouseholderEligibility": "23/09/22",
    "percentageOfPropertyTreated": "67+",
    "heatingSource": "N/A",
    "installerName": "Max character length of 150 characters",
    "innovationMeasureNumber": "123",

    "trustmarkBusinessLicenceNumber": "123456789012",
    "trustmarkUniqueMeasureReference": "ABC123DEF456GHIJ7890",
    "trustmarkLodgedCertificateID": "A1234567-1",
    "trustmarkProjectReferenceNumber": "T12345",
    "trustMarkCompletedProjectCertID": "A1234567-A"
  },
  {
    "supplierName": "OVO",
"measureReferenceNumber": "OVO7890121",
    "measureType": "Solar_PV",
    "measureStatus": "Notified Incomplete",
    "submissionDate": "08/10/2022",
    "notificationPeriod": "April 2022",
    "purposeOfNotification": "New Notification",
    "supplierReference": "OVO05458887E",
    "dateOfCompletedInstallation": "07/11/2022",

    "addressFields": {
      "buildingNumber": "154",
      "buildingName": "Canterbury Buildings",
      "flatNameOrNumber": "2",
      "streetName": "Locust Hill",
      "town": "Hilltown",
      "postCode": "H2 9RE"
    },

    "UniquePropertyReferenceNumber": "560987554321",
    "startingSAPRating": "1234567890",
    "floorArea": "2345",
    "rural": "No",
    "offGas": "Yes",
    "privateDomesticPremises": "Yes",
    "tenureType": "Owner Occupied",
    "property": "Flat",
    "eligibilityType": "LI - Social Housing",
    "verificationMethod": "ECO Eligible Referral",
    "dwpReferenceNumber": "ABC_AB123456",
    "councilTaxBand": "C",

    "prsSAPBandException": "No",
    "associatedInsulationMRNforHeatingMeasures": "ABC1234",
    "associatedInfillMeasure1": "ABC1234567",
    "associatedInfillMeasure2": "ABC1234567",
    "associatedInfillMeasure3": "ABC1234567",
    "flexReferralRoute": "Route 2 Council Tax Reduction",
    "laDeclarationReferenceNumber": "A12345678-12345",
    "dateOfHouseholderEligibility": "23/09/22",
    "percentageOfPropertyTreated": "43%",
    "heatingSource": "N/A",
    "installerName": "Max character length of 150 characters",
    "innovationMeasureNumber": "123",

    "trustmarkBusinessLicenceNumber": "123456789012",
    "trustmarkUniqueMeasureReference": "ABC123DEF456GHIJ7890",
    "trustmarkLodgedCertificateID": "A1234567-1",
    "trustmarkProjectReferenceNumber": "T12345",
    "trustMarkCompletedProjectCertID": "A1234567-A"
  },
  {
    "supplierName": "OVO",
"measureReferenceNumber": "OVO0970129",
    "measureType": "Solar_PV",
    "measureStatus": "Notified Incomplete",
    "submissionDate": "08/08/2022",
    "notificationPeriod": "April 2022",
    "purposeOfNotification": "New Notification",
    "supplierReference": "OVO05458267E",
    "dateOfCompletedInstallation": "05/10/2022",

    "addressFields": {
      "buildingNumber": "154",
      "buildingName": "Canterbury Buildings",
      "flatNameOrNumber": "2",
      "streetName": "Locust Hill",
      "town": "Hilltown",
      "postCode": "H2 9RE"
    },

    "UniquePropertyReferenceNumber": "560982454321",
    "startingSAPRating": "1234567890",
    "floorArea": "2345",
    "rural": "No",
    "offGas": "Yes",
    "privateDomesticPremises": "Yes",
    "tenureType": "Owner Occupied",
    "property": "Flat",
    "eligibilityType": "LI - Social Housing",
    "verificationMethod": "ECO Eligible Referral",
    "dwpReferenceNumber": "ABC_AB123456",
    "councilTaxBand": "C",

    "prsSAPBandException": "No",
    "associatedInsulationMRNforHeatingMeasures": "ABC1234",
    "associatedInfillMeasure1": "ABC1234567",
    "associatedInfillMeasure2": "ABC1234567",
    "associatedInfillMeasure3": "ABC1234567",
    "flexReferralRoute": "Route 2 Council Tax Reduction",
    "laDeclarationReferenceNumber": "A12345678-12345",
    "dateOfHouseholderEligibility": "23/09/22",
    "percentageOfPropertyTreated": "43%",
    "heatingSource": "N/A",
    "installerName": "Max character length of 150 characters",
    "innovationMeasureNumber": "123",

    "trustmarkBusinessLicenceNumber": "123456789012",
    "trustmarkUniqueMeasureReference": "ABC123DEF456GHIJ7890",
    "trustmarkLodgedCertificateID": "A1234567-1",
    "trustmarkProjectReferenceNumber": "T12345",
    "trustMarkCompletedProjectCertID": "A1234567-A"
  },
  {
    "supplierName": "OVO",
"measureReferenceNumber": "OVO0910129",
    "measureType": "Solar_PV",
    "measureStatus": "Notified Incomplete",
    "submissionDate": "08/08/2022",
    "notificationPeriod": "April 2022",
    "purposeOfNotification": "New Notification",
    "supplierReference": "OVO05458267E",
    "dateOfCompletedInstallation": "05/10/2022",

    "addressFields": {
      "buildingNumber": "154",
      "buildingName": "Canterbury Buildings",
      "flatNameOrNumber": "2",
      "streetName": "Locust Hill",
      "town": "Hilltown",
      "postCode": "H2 9RE"
    },

    "UniquePropertyReferenceNumber": "560982454321",
    "startingSAPRating": "1234567890",
    "floorArea": "2345",
    "rural": "No",
    "offGas": "Yes",
    "privateDomesticPremises": "Yes",
    "tenureType": "Owner Occupied",
    "property": "Flat",
    "eligibilityType": "LI - Social Housing",
    "verificationMethod": "ECO Eligible Referral",
    "dwpReferenceNumber": "ABC_AB123456",
    "councilTaxBand": "C",

    "prsSAPBandException": "No",
    "associatedInsulationMRNforHeatingMeasures": "ABC1234",
    "associatedInfillMeasure1": "ABC1234567",
    "associatedInfillMeasure2": "ABC1234567",
    "associatedInfillMeasure3": "ABC1234567",
    "flexReferralRoute": "Route 2 Council Tax Reduction",
    "laDeclarationReferenceNumber": "A12345678-12345",
    "dateOfHouseholderEligibility": "23/09/22",
    "percentageOfPropertyTreated": "43%",
    "heatingSource": "N/A",
    "installerName": "Max character length of 150 characters",
    "innovationMeasureNumber": "123",

    "trustmarkBusinessLicenceNumber": "123456789012",
    "trustmarkUniqueMeasureReference": "ABC123DEF456GHIJ7890",
    "trustmarkLodgedCertificateID": "A1234567-1",
    "trustmarkProjectReferenceNumber": "T12345",
    "trustMarkCompletedProjectCertID": "A1234567-A"
  },
  {
    "supplierName": "OVO",
"measureReferenceNumber": "OVO0920129",
    "measureType": "Solar_PV",
    "measureStatus": "Notified Incomplete",
    "submissionDate": "08/08/2022",
    "notificationPeriod": "April 2022",
    "purposeOfNotification": "New Notification",
    "supplierReference": "OVO05458267E",
    "dateOfCompletedInstallation": "05/10/2022",

    "addressFields": {
      "buildingNumber": "154",
      "buildingName": "Canterbury Buildings",
      "flatNameOrNumber": "2",
      "streetName": "Locust Hill",
      "town": "Hilltown",
      "postCode": "H2 9RE"
    },

    "UniquePropertyReferenceNumber": "560982454321",
    "startingSAPRating": "1234567890",
    "floorArea": "2345",
    "rural": "No",
    "offGas": "Yes",
    "privateDomesticPremises": "Yes",
    "tenureType": "Owner Occupied",
    "property": "Flat",
    "eligibilityType": "LI - Social Housing",
    "verificationMethod": "ECO Eligible Referral",
    "dwpReferenceNumber": "ABC_AB123456",
    "councilTaxBand": "C",

    "prsSAPBandException": "No",
    "associatedInsulationMRNforHeatingMeasures": "ABC1234",
    "associatedInfillMeasure1": "ABC1234567",
    "associatedInfillMeasure2": "ABC1234567",
    "associatedInfillMeasure3": "ABC1234567",
    "flexReferralRoute": "Route 2 Council Tax Reduction",
    "laDeclarationReferenceNumber": "A12345678-12345",
    "dateOfHouseholderEligibility": "23/09/22",
    "percentageOfPropertyTreated": "43%",
    "heatingSource": "N/A",
    "installerName": "Max character length of 150 characters",
    "innovationMeasureNumber": "123",

    "trustmarkBusinessLicenceNumber": "123456789012",
    "trustmarkUniqueMeasureReference": "ABC123DEF456GHIJ7890",
    "trustmarkLodgedCertificateID": "A1234567-1",
    "trustmarkProjectReferenceNumber": "T12345",
    "trustMarkCompletedProjectCertID": "A1234567-A"
  },
  {
    "supplierName": "OVO",
"measureReferenceNumber": "OVO0950129",
    "measureType": "Solar_PV",
    "measureStatus": "Notified Incomplete",
    "submissionDate": "08/08/2022",
    "notificationPeriod": "April 2022",
    "purposeOfNotification": "New Notification",
    "supplierReference": "OVO05458267E",
    "dateOfCompletedInstallation": "05/10/2022",

    "addressFields": {
      "buildingNumber": "154",
      "buildingName": "Canterbury Buildings",
      "flatNameOrNumber": "2",
      "streetName": "Locust Hill",
      "town": "Hilltown",
      "postCode": "H2 9RE"
    },

    "UniquePropertyReferenceNumber": "560982454321",
    "startingSAPRating": "1234567890",
    "floorArea": "2345",
    "rural": "No",
    "offGas": "Yes",
    "privateDomesticPremises": "Yes",
    "tenureType": "Owner Occupied",
    "property": "Flat",
    "eligibilityType": "LI - Social Housing",
    "verificationMethod": "ECO Eligible Referral",
    "dwpReferenceNumber": "ABC_AB123456",
    "councilTaxBand": "C",

    "prsSAPBandException": "No",
    "associatedInsulationMRNforHeatingMeasures": "ABC1234",
    "associatedInfillMeasure1": "ABC1234567",
    "associatedInfillMeasure2": "ABC1234567",
    "associatedInfillMeasure3": "ABC1234567",
    "flexReferralRoute": "Route 2 Council Tax Reduction",
    "laDeclarationReferenceNumber": "A12345678-12345",
    "dateOfHouseholderEligibility": "23/09/22",
    "percentageOfPropertyTreated": "43%",
    "heatingSource": "N/A",
    "installerName": "Max character length of 150 characters",
    "innovationMeasureNumber": "123",

    "trustmarkBusinessLicenceNumber": "123456789012",
    "trustmarkUniqueMeasureReference": "ABC123DEF456GHIJ7890",
    "trustmarkLodgedCertificateID": "A1234567-1",
    "trustmarkProjectReferenceNumber": "T12345",
    "trustMarkCompletedProjectCertID": "A1234567-A"
  },
  {
    "supplierName": "OVO",
"measureReferenceNumber": "OVO0100129",
    "measureType": "Solar_PV",
    "measureStatus": "Notified Incomplete",
    "submissionDate": "08/08/2022",
    "notificationPeriod": "April 2022",
    "purposeOfNotification": "New Notification",
    "supplierReference": "OVO05458267E",
    "dateOfCompletedInstallation": "05/10/2022",

    "addressFields": {
      "buildingNumber": "154",
      "buildingName": "Canterbury Buildings",
      "flatNameOrNumber": "2",
      "streetName": "Locust Hill",
      "town": "Hilltown",
      "postCode": "H2 9RE"
    },

    "UniquePropertyReferenceNumber": "560982454321",
    "startingSAPRating": "1234567890",
    "floorArea": "2345",
    "rural": "No",
    "offGas": "Yes",
    "privateDomesticPremises": "Yes",
    "tenureType": "Owner Occupied",
    "property": "Flat",
    "eligibilityType": "LI - Social Housing",
    "verificationMethod": "ECO Eligible Referral",
    "dwpReferenceNumber": "ABC_AB123456",
    "councilTaxBand": "C",

    "prsSAPBandException": "No",
    "associatedInsulationMRNforHeatingMeasures": "ABC1234",
    "associatedInfillMeasure1": "ABC1234567",
    "associatedInfillMeasure2": "ABC1234567",
    "associatedInfillMeasure3": "ABC1234567",
    "flexReferralRoute": "Route 2 Council Tax Reduction",
    "laDeclarationReferenceNumber": "A12345678-12345",
    "dateOfHouseholderEligibility": "23/09/22",
    "percentageOfPropertyTreated": "43%",
    "heatingSource": "N/A",
    "installerName": "Max character length of 150 characters",
    "innovationMeasureNumber": "123",

    "trustmarkBusinessLicenceNumber": "123456789012",
    "trustmarkUniqueMeasureReference": "ABC123DEF456GHIJ7890",
    "trustmarkLodgedCertificateID": "A1234567-1",
    "trustmarkProjectReferenceNumber": "T12345",
    "trustMarkCompletedProjectCertID": "A1234567-A"
  },
  {
    "supplierName": "OVO",
"measureReferenceNumber": "OVO0210129",
    "measureType": "Solar_PV",
    "measureStatus": "Notified Incomplete",
    "submissionDate": "08/08/2022",
    "notificationPeriod": "April 2022",
    "purposeOfNotification": "New Notification",
    "supplierReference": "OVO05458267E",
    "dateOfCompletedInstallation": "05/10/2022",

    "addressFields": {
      "buildingNumber": "154",
      "buildingName": "Canterbury Buildings",
      "flatNameOrNumber": "2",
      "streetName": "Locust Hill",
      "town": "Hilltown",
      "postCode": "H2 9RE"
    },

    "UniquePropertyReferenceNumber": "560982454321",
    "startingSAPRating": "1234567890",
    "floorArea": "2345",
    "rural": "No",
    "offGas": "Yes",
    "privateDomesticPremises": "Yes",
    "tenureType": "Owner Occupied",
    "property": "Flat",
    "eligibilityType": "LI - Social Housing",
    "verificationMethod": "ECO Eligible Referral",
    "dwpReferenceNumber": "ABC_AB123456",
    "councilTaxBand": "C",

    "prsSAPBandException": "No",
    "associatedInsulationMRNforHeatingMeasures": "ABC1234",
    "associatedInfillMeasure1": "ABC1234567",
    "associatedInfillMeasure2": "ABC1234567",
    "associatedInfillMeasure3": "ABC1234567",
    "flexReferralRoute": "Route 2 Council Tax Reduction",
    "laDeclarationReferenceNumber": "A12345678-12345",
    "dateOfHouseholderEligibility": "23/09/22",
    "percentageOfPropertyTreated": "43%",
    "heatingSource": "N/A",
    "installerName": "Max character length of 150 characters",
    "innovationMeasureNumber": "123",

    "trustmarkBusinessLicenceNumber": "123456789012",
    "trustmarkUniqueMeasureReference": "ABC123DEF456GHIJ7890",
    "trustmarkLodgedCertificateID": "A1234567-1",
    "trustmarkProjectReferenceNumber": "T12345",
    "trustMarkCompletedProjectCertID": "A1234567-A"
  },
  {
    "supplierName": "OVO",
"measureReferenceNumber": "OVO0580129",
    "measureType": "Solar_PV",
    "measureStatus": "Notified Incomplete",
    "submissionDate": "08/08/2022",
    "notificationPeriod": "April 2022",
    "purposeOfNotification": "New Notification",
    "supplierReference": "OVO05458267E",
    "dateOfCompletedInstallation": "05/10/2022",

    "addressFields": {
      "buildingNumber": "154",
      "buildingName": "Canterbury Buildings",
      "flatNameOrNumber": "2",
      "streetName": "Locust Hill",
      "town": "Hilltown",
      "postCode": "H2 9RE"
    },

    "UniquePropertyReferenceNumber": "560982454321",
    "startingSAPRating": "1234567890",
    "floorArea": "2345",
    "rural": "No",
    "offGas": "Yes",
    "privateDomesticPremises": "Yes",
    "tenureType": "Owner Occupied",
    "property": "Flat",
    "eligibilityType": "LI - Social Housing",
    "verificationMethod": "ECO Eligible Referral",
    "dwpReferenceNumber": "ABC_AB123456",
    "councilTaxBand": "C",

    "prsSAPBandException": "No",
    "associatedInsulationMRNforHeatingMeasures": "ABC1234",
    "associatedInfillMeasure1": "ABC1234567",
    "associatedInfillMeasure2": "ABC1234567",
    "associatedInfillMeasure3": "ABC1234567",
    "flexReferralRoute": "Route 2 Council Tax Reduction",
    "laDeclarationReferenceNumber": "A12345678-12345",
    "dateOfHouseholderEligibility": "23/09/22",
    "percentageOfPropertyTreated": "43%",
    "heatingSource": "N/A",
    "installerName": "Max character length of 150 characters",
    "innovationMeasureNumber": "123",

    "trustmarkBusinessLicenceNumber": "123456789012",
    "trustmarkUniqueMeasureReference": "ABC123DEF456GHIJ7890",
    "trustmarkLodgedCertificateID": "A1234567-1",
    "trustmarkProjectReferenceNumber": "T12345",
    "trustMarkCompletedProjectCertID": "A1234567-A"
  },
  {
    "supplierName": "OVO",
"measureReferenceNumber": "OVO0200129",
    "measureType": "Solar_PV",
    "measureStatus": "Notified Incomplete",
    "submissionDate": "08/08/2022",
    "notificationPeriod": "April 2022",
    "purposeOfNotification": "New Notification",
    "supplierReference": "OVO05458267E",
    "dateOfCompletedInstallation": "05/10/2022",

    "addressFields": {
      "buildingNumber": "154",
      "buildingName": "Canterbury Buildings",
      "flatNameOrNumber": "2",
      "streetName": "Locust Hill",
      "town": "Hilltown",
      "postCode": "H2 9RE"
    },

    "UniquePropertyReferenceNumber": "560982454321",
    "startingSAPRating": "1234567890",
    "floorArea": "2345",
    "rural": "No",
    "offGas": "Yes",
    "privateDomesticPremises": "Yes",
    "tenureType": "Owner Occupied",
    "property": "Flat",
    "eligibilityType": "LI - Social Housing",
    "verificationMethod": "ECO Eligible Referral",
    "dwpReferenceNumber": "ABC_AB123456",
    "councilTaxBand": "C",

    "prsSAPBandException": "No",
    "associatedInsulationMRNforHeatingMeasures": "ABC1234",
    "associatedInfillMeasure1": "ABC1234567",
    "associatedInfillMeasure2": "ABC1234567",
    "associatedInfillMeasure3": "ABC1234567",
    "flexReferralRoute": "Route 2 Council Tax Reduction",
    "laDeclarationReferenceNumber": "A12345678-12345",
    "dateOfHouseholderEligibility": "23/09/22",
    "percentageOfPropertyTreated": "43%",
    "heatingSource": "N/A",
    "installerName": "Max character length of 150 characters",
    "innovationMeasureNumber": "123",

    "trustmarkBusinessLicenceNumber": "123456789012",
    "trustmarkUniqueMeasureReference": "ABC123DEF456GHIJ7890",
    "trustmarkLodgedCertificateID": "A1234567-1",
    "trustmarkProjectReferenceNumber": "T12345",
    "trustMarkCompletedProjectCertID": "A1234567-A"
  },
  {
    "supplierName": "OVO",
"measureReferenceNumber": "OVO0300129",
    "measureType": "Solar_PV",
    "measureStatus": "Notified Incomplete",
    "submissionDate": "08/08/2022",
    "notificationPeriod": "April 2022",
    "purposeOfNotification": "New Notification",
    "supplierReference": "OVO05458267E",
    "dateOfCompletedInstallation": "05/10/2022",

    "addressFields": {
      "buildingNumber": "154",
      "buildingName": "Canterbury Buildings",
      "flatNameOrNumber": "2",
      "streetName": "Locust Hill",
      "town": "Hilltown",
      "postCode": "H2 9RE"
    },

    "UniquePropertyReferenceNumber": "560982454321",
    "startingSAPRating": "1234567890",
    "floorArea": "2345",
    "rural": "No",
    "offGas": "Yes",
    "privateDomesticPremises": "Yes",
    "tenureType": "Owner Occupied",
    "property": "Flat",
    "eligibilityType": "LI - Social Housing",
    "verificationMethod": "ECO Eligible Referral",
    "dwpReferenceNumber": "ABC_AB123456",
    "councilTaxBand": "C",

    "prsSAPBandException": "No",
    "associatedInsulationMRNforHeatingMeasures": "ABC1234",
    "associatedInfillMeasure1": "ABC1234567",
    "associatedInfillMeasure2": "ABC1234567",
    "associatedInfillMeasure3": "ABC1234567",
    "flexReferralRoute": "Route 2 Council Tax Reduction",
    "laDeclarationReferenceNumber": "A12345678-12345",
    "dateOfHouseholderEligibility": "23/09/22",
    "percentageOfPropertyTreated": "43%",
    "heatingSource": "N/A",
    "installerName": "Max character length of 150 characters",
    "innovationMeasureNumber": "123",

    "trustmarkBusinessLicenceNumber": "123456789012",
    "trustmarkUniqueMeasureReference": "ABC123DEF456GHIJ7890",
    "trustmarkLodgedCertificateID": "A1234567-1",
    "trustmarkProjectReferenceNumber": "T12345",
    "trustMarkCompletedProjectCertID": "A1234567-A"
  },
  {
    "supplierName": "OVO",
"measureReferenceNumber": "OVO0400129",
    "measureType": "Solar_PV",
    "measureStatus": "Notified Incomplete",
    "submissionDate": "08/08/2022",
    "notificationPeriod": "April 2022",
    "purposeOfNotification": "New Notification",
    "supplierReference": "OVO05458267E",
    "dateOfCompletedInstallation": "05/10/2022",

    "addressFields": {
      "buildingNumber": "154",
      "buildingName": "Canterbury Buildings",
      "flatNameOrNumber": "2",
      "streetName": "Locust Hill",
      "town": "Hilltown",
      "postCode": "H2 9RE"
    },

    "UniquePropertyReferenceNumber": "560982454321",
    "startingSAPRating": "1234567890",
    "floorArea": "2345",
    "rural": "No",
    "offGas": "Yes",
    "privateDomesticPremises": "Yes",
    "tenureType": "Owner Occupied",
    "property": "Flat",
    "eligibilityType": "LI - Social Housing",
    "verificationMethod": "ECO Eligible Referral",
    "dwpReferenceNumber": "ABC_AB123456",
    "councilTaxBand": "C",

    "prsSAPBandException": "No",
    "associatedInsulationMRNforHeatingMeasures": "ABC1234",
    "associatedInfillMeasure1": "ABC1234567",
    "associatedInfillMeasure2": "ABC1234567",
    "associatedInfillMeasure3": "ABC1234567",
    "flexReferralRoute": "Route 2 Council Tax Reduction",
    "laDeclarationReferenceNumber": "A12345678-12345",
    "dateOfHouseholderEligibility": "23/09/22",
    "percentageOfPropertyTreated": "43%",
    "heatingSource": "N/A",
    "installerName": "Max character length of 150 characters",
    "innovationMeasureNumber": "123",

    "trustmarkBusinessLicenceNumber": "123456789012",
    "trustmarkUniqueMeasureReference": "ABC123DEF456GHIJ7890",
    "trustmarkLodgedCertificateID": "A1234567-1",
    "trustmarkProjectReferenceNumber": "T12345",
    "trustMarkCompletedProjectCertID": "A1234567-A"
  },
  {
    "supplierName": "OVO",
"measureReferenceNumber": "OVO0500129",
    "measureType": "Solar_PV",
    "measureStatus": "Notified Incomplete",
    "submissionDate": "08/08/2022",
    "notificationPeriod": "April 2022",
    "purposeOfNotification": "New Notification",
    "supplierReference": "OVO05458267E",
    "dateOfCompletedInstallation": "05/10/2022",

    "addressFields": {
      "buildingNumber": "154",
      "buildingName": "Canterbury Buildings",
      "flatNameOrNumber": "2",
      "streetName": "Locust Hill",
      "town": "Hilltown",
      "postCode": "H2 9RE"
    },

    "UniquePropertyReferenceNumber": "560982454321",
    "startingSAPRating": "1234567890",
    "floorArea": "2345",
    "rural": "No",
    "offGas": "Yes",
    "privateDomesticPremises": "Yes",
    "tenureType": "Owner Occupied",
    "property": "Flat",
    "eligibilityType": "LI - Social Housing",
    "verificationMethod": "ECO Eligible Referral",
    "dwpReferenceNumber": "ABC_AB123456",
    "councilTaxBand": "C",

    "prsSAPBandException": "No",
    "associatedInsulationMRNforHeatingMeasures": "ABC1234",
    "associatedInfillMeasure1": "ABC1234567",
    "associatedInfillMeasure2": "ABC1234567",
    "associatedInfillMeasure3": "ABC1234567",
    "flexReferralRoute": "Route 2 Council Tax Reduction",
    "laDeclarationReferenceNumber": "A12345678-12345",
    "dateOfHouseholderEligibility": "23/09/22",
    "percentageOfPropertyTreated": "43%",
    "heatingSource": "N/A",
    "installerName": "Max character length of 150 characters",
    "innovationMeasureNumber": "123",

    "trustmarkBusinessLicenceNumber": "123456789012",
    "trustmarkUniqueMeasureReference": "ABC123DEF456GHIJ7890",
    "trustmarkLodgedCertificateID": "A1234567-1",
    "trustmarkProjectReferenceNumber": "T12345",
    "trustMarkCompletedProjectCertID": "A1234567-A"
  },
  {
    "supplierName": "OVO",
"measureReferenceNumber": "OVO0600129",
    "measureType": "Solar_PV",
    "measureStatus": "Notified Incomplete",
    "submissionDate": "05/02/2022",
    "notificationPeriod": "August 2022",
    "purposeOfNotification": "New Notification",
    "supplierReference": "OVO05458267E",
    "dateOfCompletedInstallation": "05/10/2022",

    "addressFields": {
      "buildingNumber": "154",
      "buildingName": "Canterbury Buildings",
      "flatNameOrNumber": "2",
      "streetName": "Locust Hill",
      "town": "Hilltown",
      "postCode": "H2 9RE"
    },

    "UniquePropertyReferenceNumber": "560982454321",
    "startingSAPRating": "1234567890",
    "floorArea": "2345",
    "rural": "No",
    "offGas": "Yes",
    "privateDomesticPremises": "Yes",
    "tenureType": "Owner Occupied",
    "property": "Flat",
    "eligibilityType": "LI - Social Housing",
    "verificationMethod": "ECO Eligible Referral",
    "dwpReferenceNumber": "ABC_AB123456",
    "councilTaxBand": "C",

    "prsSAPBandException": "No",
    "associatedInsulationMRNforHeatingMeasures": "ABC1234",
    "associatedInfillMeasure1": "ABC1234567",
    "associatedInfillMeasure2": "ABC1234567",
    "associatedInfillMeasure3": "ABC1234567",
    "flexReferralRoute": "Route 2 Council Tax Reduction",
    "laDeclarationReferenceNumber": "A12345678-12345",
    "dateOfHouseholderEligibility": "23/09/22",
    "percentageOfPropertyTreated": "43%",
    "heatingSource": "N/A",
    "installerName": "Max character length of 150 characters",
    "innovationMeasureNumber": "123",

    "trustmarkBusinessLicenceNumber": "123456789012",
    "trustmarkUniqueMeasureReference": "ABC123DEF456GHIJ7890",
    "trustmarkLodgedCertificateID": "A1234567-1",
    "trustmarkProjectReferenceNumber": "T12345",
    "trustMarkCompletedProjectCertID": "A1234567-A"
  },
  {
    "supplierName": "OVO",
"measureReferenceNumber": "OVO1234561",
    "measureType": "Solar_PV",
    "measureStatus": "Notified Incomplete",
    "submissionDate": "05/09/2022",
    "notificationPeriod": "July 2022",
    "purposeOfNotification": "New Notification",
    "supplierReference": "OVO05458887E",
    "dateOfCompletedInstallation": "12/12/2022",

    "addressFields": {
      "buildingNumber": "198",
      "buildingName": "Canterbury Buildings",
      "flatNameOrNumber": "91",
      "streetName": "Hill Mews",
      "town": "Hilltown",
      "postCode": "H1 4TE"
    },

    "UniquePropertyReferenceNumber": "210987654321",
    "startingSAPRating": "1234567890",
    "floorArea": "2345",
    "rural": "No",
    "offGas": "Yes",
    "privateDomesticPremises": "Yes",
    "tenureType": "Owner Occupied",
    "property": "Flat",
    "eligibilityType": "LI - Social Housing",
    "verificationMethod": "ECO Eligible Referral",
    "dwpReferenceNumber": "ABC_AB123456",
    "councilTaxBand": "C",

    "prsSAPBandException": "Yes",
    "associatedInsulationMRNforHeatingMeasures": "ABC1234",
    "associatedInfillMeasure1": "ABC1234567",
    "associatedInfillMeasure2": "ABC1234567",
    "associatedInfillMeasure3": "ABC1234567",
    "flexReferralRoute": "Route 2 Council Tax Reduction",
    "laDeclarationReferenceNumber": "A12345678-12345",
    "dateOfHouseholderEligibility": "23/09/22",
    "percentageOfPropertyTreated": "67+",
    "heatingSource": "N/A",
    "installerName": "Max character length of 150 characters",
    "innovationMeasureNumber": "123",

    "trustmarkBusinessLicenceNumber": "123456789012",
    "trustmarkUniqueMeasureReference": "ABC123DEF456GHIJ7890",
    "trustmarkLodgedCertificateID": "A1234567-1",
    "trustmarkProjectReferenceNumber": "T12345",
    "trustMarkCompletedProjectCertID": "A1234567-A"
  },
  {
    "supplierName": "OVO",
"measureReferenceNumber": "OVO7890122",
    "measureType": "Solar_PV",
    "measureStatus": "Notified Incomplete",
    "submissionDate": "08/10/2022",
    "notificationPeriod": "April 2022",
    "purposeOfNotification": "New Notification",
    "supplierReference": "OVO05458887E",
    "dateOfCompletedInstallation": "07/11/2022",

    "addressFields": {
      "buildingNumber": "154",
      "buildingName": "Canterbury Buildings",
      "flatNameOrNumber": "2",
      "streetName": "Locust Hill",
      "town": "Hilltown",
      "postCode": "H2 9RE"
    },

    "UniquePropertyReferenceNumber": "560987554321",
    "startingSAPRating": "1234567890",
    "floorArea": "2345",
    "rural": "No",
    "offGas": "Yes",
    "privateDomesticPremises": "Yes",
    "tenureType": "Owner Occupied",
    "property": "Flat",
    "eligibilityType": "LI - Social Housing",
    "verificationMethod": "ECO Eligible Referral",
    "dwpReferenceNumber": "ABC_AB123456",
    "councilTaxBand": "C",

    "prsSAPBandException": "No",
    "associatedInsulationMRNforHeatingMeasures": "ABC1234",
    "associatedInfillMeasure1": "ABC1234567",
    "associatedInfillMeasure2": "ABC1234567",
    "associatedInfillMeasure3": "ABC1234567",
    "flexReferralRoute": "Route 2 Council Tax Reduction",
    "laDeclarationReferenceNumber": "A12345678-12345",
    "dateOfHouseholderEligibility": "23/09/22",
    "percentageOfPropertyTreated": "43%",
    "heatingSource": "N/A",
    "installerName": "Max character length of 150 characters",
    "innovationMeasureNumber": "123",

    "trustmarkBusinessLicenceNumber": "123456789012",
    "trustmarkUniqueMeasureReference": "ABC123DEF456GHIJ7890",
    "trustmarkLodgedCertificateID": "A1234567-1",
    "trustmarkProjectReferenceNumber": "T12345",
    "trustMarkCompletedProjectCertID": "A1234567-A"
  },
  {
    "supplierName": "OVO",
"measureReferenceNumber": "OVO0700129",
    "measureType": "Solar_PV",
    "measureStatus": "Notified Incomplete",
    "submissionDate": "08/08/2022",
    "notificationPeriod": "April 2022",
    "purposeOfNotification": "New Notification",
    "supplierReference": "OVO05458267E",
    "dateOfCompletedInstallation": "05/10/2022",

    "addressFields": {
      "buildingNumber": "154",
      "buildingName": "Canterbury Buildings",
      "flatNameOrNumber": "2",
      "streetName": "Locust Hill",
      "town": "Hilltown",
      "postCode": "H2 9RE"
    },

    "UniquePropertyReferenceNumber": "560982454321",
    "startingSAPRating": "1234567890",
    "floorArea": "2345",
    "rural": "No",
    "offGas": "Yes",
    "privateDomesticPremises": "Yes",
    "tenureType": "Owner Occupied",
    "property": "Flat",
    "eligibilityType": "LI - Social Housing",
    "verificationMethod": "ECO Eligible Referral",
    "dwpReferenceNumber": "ABC_AB123456",
    "councilTaxBand": "C",

    "prsSAPBandException": "No",
    "associatedInsulationMRNforHeatingMeasures": "ABC1234",
    "associatedInfillMeasure1": "ABC1234567",
    "associatedInfillMeasure2": "ABC1234567",
    "associatedInfillMeasure3": "ABC1234567",
    "flexReferralRoute": "Route 2 Council Tax Reduction",
    "laDeclarationReferenceNumber": "A12345678-12345",
    "dateOfHouseholderEligibility": "23/09/22",
    "percentageOfPropertyTreated": "43%",
    "heatingSource": "N/A",
    "installerName": "Max character length of 150 characters",
    "innovationMeasureNumber": "123",

    "trustmarkBusinessLicenceNumber": "123456789012",
    "trustmarkUniqueMeasureReference": "ABC123DEF456GHIJ7890",
    "trustmarkLodgedCertificateID": "A1234567-1",
    "trustmarkProjectReferenceNumber": "T12345",
    "trustMarkCompletedProjectCertID": "A1234567-A"
  },
  {
    "supplierName": "OVO",
"measureReferenceNumber": "OVO0800129",
    "measureType": "Solar_PV",
    "measureStatus": "Notified Incomplete",
    "submissionDate": "08/08/2022",
    "notificationPeriod": "April 2022",
    "purposeOfNotification": "New Notification",
    "supplierReference": "OVO05458267E",
    "dateOfCompletedInstallation": "05/10/2022",

    "addressFields": {
      "buildingNumber": "154",
      "buildingName": "Canterbury Buildings",
      "flatNameOrNumber": "2",
      "streetName": "Locust Hill",
      "town": "Hilltown",
      "postCode": "H2 9RE"
    },

    "UniquePropertyReferenceNumber": "560982454321",
    "startingSAPRating": "1234567890",
    "floorArea": "2345",
    "rural": "No",
    "offGas": "Yes",
    "privateDomesticPremises": "Yes",
    "tenureType": "Owner Occupied",
    "property": "Flat",
    "eligibilityType": "LI - Social Housing",
    "verificationMethod": "ECO Eligible Referral",
    "dwpReferenceNumber": "ABC_AB123456",
    "councilTaxBand": "C",

    "prsSAPBandException": "No",
    "associatedInsulationMRNforHeatingMeasures": "ABC1234",
    "associatedInfillMeasure1": "ABC1234567",
    "associatedInfillMeasure2": "ABC1234567",
    "associatedInfillMeasure3": "ABC1234567",
    "flexReferralRoute": "Route 2 Council Tax Reduction",
    "laDeclarationReferenceNumber": "A12345678-12345",
    "dateOfHouseholderEligibility": "23/09/22",
    "percentageOfPropertyTreated": "43%",
    "heatingSource": "N/A",
    "installerName": "Max character length of 150 characters",
    "innovationMeasureNumber": "123",

    "trustmarkBusinessLicenceNumber": "123456789012",
    "trustmarkUniqueMeasureReference": "ABC123DEF456GHIJ7890",
    "trustmarkLodgedCertificateID": "A1234567-1",
    "trustmarkProjectReferenceNumber": "T12345",
    "trustMarkCompletedProjectCertID": "A1234567-A"
  },
  {
    "supplierName": "OVO",
"measureReferenceNumber": "OVO0890129",
    "measureType": "Solar_PV",
    "measureStatus": "Notified Incomplete",
    "submissionDate": "08/08/2022",
    "notificationPeriod": "April 2022",
    "purposeOfNotification": "New Notification",
    "supplierReference": "OVO05458267E",
    "dateOfCompletedInstallation": "05/10/2022",

    "addressFields": {
      "buildingNumber": "154",
      "buildingName": "Canterbury Buildings",
      "flatNameOrNumber": "2",
      "streetName": "Locust Hill",
      "town": "Hilltown",
      "postCode": "H2 9RE"
    },

    "UniquePropertyReferenceNumber": "560982454321",
    "startingSAPRating": "1234567890",
    "floorArea": "2345",
    "rural": "No",
    "offGas": "Yes",
    "privateDomesticPremises": "Yes",
    "tenureType": "Owner Occupied",
    "property": "Flat",
    "eligibilityType": "LI - Social Housing",
    "verificationMethod": "ECO Eligible Referral",
    "dwpReferenceNumber": "ABC_AB123456",
    "councilTaxBand": "C",

    "prsSAPBandException": "No",
    "associatedInsulationMRNforHeatingMeasures": "ABC1234",
    "associatedInfillMeasure1": "ABC1234567",
    "associatedInfillMeasure2": "ABC1234567",
    "associatedInfillMeasure3": "ABC1234567",
    "flexReferralRoute": "Route 2 Council Tax Reduction",
    "laDeclarationReferenceNumber": "A12345678-12345",
    "dateOfHouseholderEligibility": "23/09/22",
    "percentageOfPropertyTreated": "43%",
    "heatingSource": "N/A",
    "installerName": "Max character length of 150 characters",
    "innovationMeasureNumber": "123",

    "trustmarkBusinessLicenceNumber": "123456789012",
    "trustmarkUniqueMeasureReference": "ABC123DEF456GHIJ7890",
    "trustmarkLodgedCertificateID": "A1234567-1",
    "trustmarkProjectReferenceNumber": "T12345",
    "trustMarkCompletedProjectCertID": "A1234567-A"
  },
  {
    "supplierName": "OVO",
"measureReferenceNumber": "OVO0890139",
    "measureType": "Solar_PV",
    "measureStatus": "Notified Incomplete",
    "submissionDate": "08/08/2022",
    "notificationPeriod": "April 2022",
    "purposeOfNotification": "New Notification",
    "supplierReference": "OVO05458267E",
    "dateOfCompletedInstallation": "05/10/2022",

    "addressFields": {
      "buildingNumber": "154",
      "buildingName": "Canterbury Buildings",
      "flatNameOrNumber": "2",
      "streetName": "Locust Hill",
      "town": "Hilltown",
      "postCode": "H2 9RE"
    },

    "UniquePropertyReferenceNumber": "560982454321",
    "startingSAPRating": "1234567890",
    "floorArea": "2345",
    "rural": "No",
    "offGas": "Yes",
    "privateDomesticPremises": "Yes",
    "tenureType": "Owner Occupied",
    "property": "Flat",
    "eligibilityType": "LI - Social Housing",
    "verificationMethod": "ECO Eligible Referral",
    "dwpReferenceNumber": "ABC_AB123456",
    "councilTaxBand": "C",

    "prsSAPBandException": "No",
    "associatedInsulationMRNforHeatingMeasures": "ABC1234",
    "associatedInfillMeasure1": "ABC1234567",
    "associatedInfillMeasure2": "ABC1234567",
    "associatedInfillMeasure3": "ABC1234567",
    "flexReferralRoute": "Route 2 Council Tax Reduction",
    "laDeclarationReferenceNumber": "A12345678-12345",
    "dateOfHouseholderEligibility": "23/09/22",
    "percentageOfPropertyTreated": "43%",
    "heatingSource": "N/A",
    "installerName": "Max character length of 150 characters",
    "innovationMeasureNumber": "123",

    "trustmarkBusinessLicenceNumber": "123456789012",
    "trustmarkUniqueMeasureReference": "ABC123DEF456GHIJ7890",
    "trustmarkLodgedCertificateID": "A1234567-1",
    "trustmarkProjectReferenceNumber": "T12345",
    "trustMarkCompletedProjectCertID": "A1234567-A"
  },
  {
    "supplierName": "OVO",
"measureReferenceNumber": "OVO0890149",
    "measureType": "Solar_PV",
    "measureStatus": "Notified Incomplete",
    "submissionDate": "08/08/2022",
    "notificationPeriod": "April 2022",
    "purposeOfNotification": "New Notification",
    "supplierReference": "OVO05458267E",
    "dateOfCompletedInstallation": "05/10/2022",

    "addressFields": {
      "buildingNumber": "154",
      "buildingName": "Canterbury Buildings",
      "flatNameOrNumber": "2",
      "streetName": "Locust Hill",
      "town": "Hilltown",
      "postCode": "H2 9RE"
    },

    "UniquePropertyReferenceNumber": "560982454321",
    "startingSAPRating": "1234567890",
    "floorArea": "2345",
    "rural": "No",
    "offGas": "Yes",
    "privateDomesticPremises": "Yes",
    "tenureType": "Owner Occupied",
    "property": "Flat",
    "eligibilityType": "LI - Social Housing",
    "verificationMethod": "ECO Eligible Referral",
    "dwpReferenceNumber": "ABC_AB123456",
    "councilTaxBand": "C",

    "prsSAPBandException": "No",
    "associatedInsulationMRNforHeatingMeasures": "ABC1234",
    "associatedInfillMeasure1": "ABC1234567",
    "associatedInfillMeasure2": "ABC1234567",
    "associatedInfillMeasure3": "ABC1234567",
    "flexReferralRoute": "Route 2 Council Tax Reduction",
    "laDeclarationReferenceNumber": "A12345678-12345",
    "dateOfHouseholderEligibility": "23/09/22",
    "percentageOfPropertyTreated": "43%",
    "heatingSource": "N/A",
    "installerName": "Max character length of 150 characters",
    "innovationMeasureNumber": "123",

    "trustmarkBusinessLicenceNumber": "123456789012",
    "trustmarkUniqueMeasureReference": "ABC123DEF456GHIJ7890",
    "trustmarkLodgedCertificateID": "A1234567-1",
    "trustmarkProjectReferenceNumber": "T12345",
    "trustMarkCompletedProjectCertID": "A1234567-A"
  },
  {
    "supplierName": "OVO",
"measureReferenceNumber": "OVO0890159",
    "measureType": "Solar_PV",
    "measureStatus": "Notified Incomplete",
    "submissionDate": "08/08/2022",
    "notificationPeriod": "April 2022",
    "purposeOfNotification": "New Notification",
    "supplierReference": "OVO05458267E",
    "dateOfCompletedInstallation": "05/10/2022",

    "addressFields": {
      "buildingNumber": "154",
      "buildingName": "Canterbury Buildings",
      "flatNameOrNumber": "2",
      "streetName": "Locust Hill",
      "town": "Hilltown",
      "postCode": "H2 9RE"
    },

    "UniquePropertyReferenceNumber": "560982454321",
    "startingSAPRating": "1234567890",
    "floorArea": "2345",
    "rural": "No",
    "offGas": "Yes",
    "privateDomesticPremises": "Yes",
    "tenureType": "Owner Occupied",
    "property": "Flat",
    "eligibilityType": "LI - Social Housing",
    "verificationMethod": "ECO Eligible Referral",
    "dwpReferenceNumber": "ABC_AB123456",
    "councilTaxBand": "C",

    "prsSAPBandException": "No",
    "associatedInsulationMRNforHeatingMeasures": "ABC1234",
    "associatedInfillMeasure1": "ABC1234567",
    "associatedInfillMeasure2": "ABC1234567",
    "associatedInfillMeasure3": "ABC1234567",
    "flexReferralRoute": "Route 2 Council Tax Reduction",
    "laDeclarationReferenceNumber": "A12345678-12345",
    "dateOfHouseholderEligibility": "23/09/22",
    "percentageOfPropertyTreated": "43%",
    "heatingSource": "N/A",
    "installerName": "Max character length of 150 characters",
    "innovationMeasureNumber": "123",

    "trustmarkBusinessLicenceNumber": "123456789012",
    "trustmarkUniqueMeasureReference": "ABC123DEF456GHIJ7890",
    "trustmarkLodgedCertificateID": "A1234567-1",
    "trustmarkProjectReferenceNumber": "T12345",
    "trustMarkCompletedProjectCertID": "A1234567-A"
  },
  {
    "supplierName": "OVO",
"measureReferenceNumber": "OVO0890169",
    "measureType": "Solar_PV",
    "measureStatus": "Notified Incomplete",
    "submissionDate": "08/08/2022",
    "notificationPeriod": "April 2022",
    "purposeOfNotification": "New Notification",
    "supplierReference": "OVO05458267E",
    "dateOfCompletedInstallation": "05/10/2022",

    "addressFields": {
      "buildingNumber": "154",
      "buildingName": "Canterbury Buildings",
      "flatNameOrNumber": "2",
      "streetName": "Locust Hill",
      "town": "Hilltown",
      "postCode": "H2 9RE"
    },

    "UniquePropertyReferenceNumber": "560982454321",
    "startingSAPRating": "1234567890",
    "floorArea": "2345",
    "rural": "No",
    "offGas": "Yes",
    "privateDomesticPremises": "Yes",
    "tenureType": "Owner Occupied",
    "property": "Flat",
    "eligibilityType": "LI - Social Housing",
    "verificationMethod": "ECO Eligible Referral",
    "dwpReferenceNumber": "ABC_AB123456",
    "councilTaxBand": "C",

    "prsSAPBandException": "No",
    "associatedInsulationMRNforHeatingMeasures": "ABC1234",
    "associatedInfillMeasure1": "ABC1234567",
    "associatedInfillMeasure2": "ABC1234567",
    "associatedInfillMeasure3": "ABC1234567",
    "flexReferralRoute": "Route 2 Council Tax Reduction",
    "laDeclarationReferenceNumber": "A12345678-12345",
    "dateOfHouseholderEligibility": "23/09/22",
    "percentageOfPropertyTreated": "43%",
    "heatingSource": "N/A",
    "installerName": "Max character length of 150 characters",
    "innovationMeasureNumber": "123",

    "trustmarkBusinessLicenceNumber": "123456789012",
    "trustmarkUniqueMeasureReference": "ABC123DEF456GHIJ7890",
    "trustmarkLodgedCertificateID": "A1234567-1",
    "trustmarkProjectReferenceNumber": "T12345",
    "trustMarkCompletedProjectCertID": "A1234567-A"
  },
  {
    "supplierName": "OVO",
"measureReferenceNumber": "OVO0890179",
    "measureType": "Solar_PV",
    "measureStatus": "Notified Incomplete",
    "submissionDate": "08/08/2022",
    "notificationPeriod": "April 2022",
    "purposeOfNotification": "New Notification",
    "supplierReference": "OVO05458267E",
    "dateOfCompletedInstallation": "05/10/2022",

    "addressFields": {
      "buildingNumber": "154",
      "buildingName": "Canterbury Buildings",
      "flatNameOrNumber": "2",
      "streetName": "Locust Hill",
      "town": "Hilltown",
      "postCode": "H2 9RE"
    },

    "UniquePropertyReferenceNumber": "560982454321",
    "startingSAPRating": "1234567890",
    "floorArea": "2345",
    "rural": "No",
    "offGas": "Yes",
    "privateDomesticPremises": "Yes",
    "tenureType": "Owner Occupied",
    "property": "Flat",
    "eligibilityType": "LI - Social Housing",
    "verificationMethod": "ECO Eligible Referral",
    "dwpReferenceNumber": "ABC_AB123456",
    "councilTaxBand": "C",

    "prsSAPBandException": "No",
    "associatedInsulationMRNforHeatingMeasures": "ABC1234",
    "associatedInfillMeasure1": "ABC1234567",
    "associatedInfillMeasure2": "ABC1234567",
    "associatedInfillMeasure3": "ABC1234567",
    "flexReferralRoute": "Route 2 Council Tax Reduction",
    "laDeclarationReferenceNumber": "A12345678-12345",
    "dateOfHouseholderEligibility": "23/09/22",
    "percentageOfPropertyTreated": "43%",
    "heatingSource": "N/A",
    "installerName": "Max character length of 150 characters",
    "innovationMeasureNumber": "123",

    "trustmarkBusinessLicenceNumber": "123456789012",
    "trustmarkUniqueMeasureReference": "ABC123DEF456GHIJ7890",
    "trustmarkLodgedCertificateID": "A1234567-1",
    "trustmarkProjectReferenceNumber": "T12345",
    "trustMarkCompletedProjectCertID": "A1234567-A"
  },
  {
    "supplierName": "OVO",
"measureReferenceNumber": "OVO1890189",
    "measureType": "Solar_PV",
    "measureStatus": "Notified Incomplete",
    "submissionDate": "08/08/2022",
    "notificationPeriod": "April 2022",
    "purposeOfNotification": "New Notification",
    "supplierReference": "OVO05458267E",
    "dateOfCompletedInstallation": "05/10/2022",

    "addressFields": {
      "buildingNumber": "154",
      "buildingName": "Canterbury Buildings",
      "flatNameOrNumber": "2",
      "streetName": "Locust Hill",
      "town": "Hilltown",
      "postCode": "H2 9RE"
    },

    "UniquePropertyReferenceNumber": "560982454321",
    "startingSAPRating": "1234567890",
    "floorArea": "2345",
    "rural": "No",
    "offGas": "Yes",
    "privateDomesticPremises": "Yes",
    "tenureType": "Owner Occupied",
    "property": "Flat",
    "eligibilityType": "LI - Social Housing",
    "verificationMethod": "ECO Eligible Referral",
    "dwpReferenceNumber": "ABC_AB123456",
    "councilTaxBand": "C",

    "prsSAPBandException": "No",
    "associatedInsulationMRNforHeatingMeasures": "ABC1234",
    "associatedInfillMeasure1": "ABC1234567",
    "associatedInfillMeasure2": "ABC1234567",
    "associatedInfillMeasure3": "ABC1234567",
    "flexReferralRoute": "Route 2 Council Tax Reduction",
    "laDeclarationReferenceNumber": "A12345678-12345",
    "dateOfHouseholderEligibility": "23/09/22",
    "percentageOfPropertyTreated": "43%",
    "heatingSource": "N/A",
    "installerName": "Max character length of 150 characters",
    "innovationMeasureNumber": "123",

    "trustmarkBusinessLicenceNumber": "123456789012",
    "trustmarkUniqueMeasureReference": "ABC123DEF456GHIJ7890",
    "trustmarkLodgedCertificateID": "A1234567-1",
    "trustmarkProjectReferenceNumber": "T12345",
    "trustMarkCompletedProjectCertID": "A1234567-A"
  },
  {
    "supplierName": "OVO",
"measureReferenceNumber": "OVO2890189",
    "measureType": "Solar_PV",
    "measureStatus": "Notified Incomplete",
    "submissionDate": "08/08/2022",
    "notificationPeriod": "April 2022",
    "purposeOfNotification": "New Notification",
    "supplierReference": "OVO05458267E",
    "dateOfCompletedInstallation": "05/10/2022",

    "addressFields": {
      "buildingNumber": "154",
      "buildingName": "Canterbury Buildings",
      "flatNameOrNumber": "2",
      "streetName": "Locust Hill",
      "town": "Hilltown",
      "postCode": "H2 9RE"
    },

    "UniquePropertyReferenceNumber": "560982454321",
    "startingSAPRating": "1234567890",
    "floorArea": "2345",
    "rural": "No",
    "offGas": "Yes",
    "privateDomesticPremises": "Yes",
    "tenureType": "Owner Occupied",
    "property": "Flat",
    "eligibilityType": "LI - Social Housing",
    "verificationMethod": "ECO Eligible Referral",
    "dwpReferenceNumber": "ABC_AB123456",
    "councilTaxBand": "C",

    "prsSAPBandException": "No",
    "associatedInsulationMRNforHeatingMeasures": "ABC1234",
    "associatedInfillMeasure1": "ABC1234567",
    "associatedInfillMeasure2": "ABC1234567",
    "associatedInfillMeasure3": "ABC1234567",
    "flexReferralRoute": "Route 2 Council Tax Reduction",
    "laDeclarationReferenceNumber": "A12345678-12345",
    "dateOfHouseholderEligibility": "23/09/22",
    "percentageOfPropertyTreated": "43%",
    "heatingSource": "N/A",
    "installerName": "Max character length of 150 characters",
    "innovationMeasureNumber": "123",

    "trustmarkBusinessLicenceNumber": "123456789012",
    "trustmarkUniqueMeasureReference": "ABC123DEF456GHIJ7890",
    "trustmarkLodgedCertificateID": "A1234567-1",
    "trustmarkProjectReferenceNumber": "T12345",
    "trustMarkCompletedProjectCertID": "A1234567-A"
  },
  {
    "supplierName": "OVO",
"measureReferenceNumber": "OVO3890189",
    "measureType": "Solar_PV",
    "measureStatus": "Notified Incomplete",
    "submissionDate": "08/08/2022",
    "notificationPeriod": "April 2022",
    "purposeOfNotification": "New Notification",
    "supplierReference": "OVO05458267E",
    "dateOfCompletedInstallation": "05/10/2022",

    "addressFields": {
      "buildingNumber": "154",
      "buildingName": "Canterbury Buildings",
      "flatNameOrNumber": "2",
      "streetName": "Locust Hill",
      "town": "Hilltown",
      "postCode": "H2 9RE"
    },

    "UniquePropertyReferenceNumber": "560982454321",
    "startingSAPRating": "1234567890",
    "floorArea": "2345",
    "rural": "No",
    "offGas": "Yes",
    "privateDomesticPremises": "Yes",
    "tenureType": "Owner Occupied",
    "property": "Flat",
    "eligibilityType": "LI - Social Housing",
    "verificationMethod": "ECO Eligible Referral",
    "dwpReferenceNumber": "ABC_AB123456",
    "councilTaxBand": "C",

    "prsSAPBandException": "No",
    "associatedInsulationMRNforHeatingMeasures": "ABC1234",
    "associatedInfillMeasure1": "ABC1234567",
    "associatedInfillMeasure2": "ABC1234567",
    "associatedInfillMeasure3": "ABC1234567",
    "flexReferralRoute": "Route 2 Council Tax Reduction",
    "laDeclarationReferenceNumber": "A12345678-12345",
    "dateOfHouseholderEligibility": "23/09/22",
    "percentageOfPropertyTreated": "43%",
    "heatingSource": "N/A",
    "installerName": "Max character length of 150 characters",
    "innovationMeasureNumber": "123",

    "trustmarkBusinessLicenceNumber": "123456789012",
    "trustmarkUniqueMeasureReference": "ABC123DEF456GHIJ7890",
    "trustmarkLodgedCertificateID": "A1234567-1",
    "trustmarkProjectReferenceNumber": "T12345",
    "trustMarkCompletedProjectCertID": "A1234567-A"
  },
  {
    "supplierName": "OVO",
"measureReferenceNumber": "OVO4890189",
    "measureType": "Solar_PV",
    "measureStatus": "Notified Incomplete",
    "submissionDate": "05/02/2022",
    "notificationPeriod": "August 2022",
    "purposeOfNotification": "New Notification",
    "supplierReference": "OVO05458267E",
    "dateOfCompletedInstallation": "05/10/2022",

    "addressFields": {
      "buildingNumber": "154",
      "buildingName": "Canterbury Buildings",
      "flatNameOrNumber": "2",
      "streetName": "Locust Hill",
      "town": "Hilltown",
      "postCode": "H2 9RE"
    },

    "UniquePropertyReferenceNumber": "560982454321",
    "startingSAPRating": "1234567890",
    "floorArea": "2345",
    "rural": "No",
    "offGas": "Yes",
    "privateDomesticPremises": "Yes",
    "tenureType": "Owner Occupied",
    "property": "Flat",
    "eligibilityType": "LI - Social Housing",
    "verificationMethod": "ECO Eligible Referral",
    "dwpReferenceNumber": "ABC_AB123456",
    "councilTaxBand": "C",

    "prsSAPBandException": "No",
    "associatedInsulationMRNforHeatingMeasures": "ABC1234",
    "associatedInfillMeasure1": "ABC1234567",
    "associatedInfillMeasure2": "ABC1234567",
    "associatedInfillMeasure3": "ABC1234567",
    "flexReferralRoute": "Route 2 Council Tax Reduction",
    "laDeclarationReferenceNumber": "A12345678-12345",
    "dateOfHouseholderEligibility": "23/09/22",
    "percentageOfPropertyTreated": "43%",
    "heatingSource": "N/A",
    "installerName": "Max character length of 150 characters",
    "innovationMeasureNumber": "123",

    "trustmarkBusinessLicenceNumber": "123456789012",
    "trustmarkUniqueMeasureReference": "ABC123DEF456GHIJ7890",
    "trustmarkLodgedCertificateID": "A1234567-1",
    "trustmarkProjectReferenceNumber": "T12345",
    "trustMarkCompletedProjectCertID": "A1234567-A"
  },
  {
    "supplierName": "OVO",
"measureReferenceNumber": "OVO1234562",
    "measureType": "Solar_PV",
    "measureStatus": "Notified Incomplete",
    "submissionDate": "05/09/2022",
    "notificationPeriod": "July 2022",
    "purposeOfNotification": "New Notification",
    "supplierReference": "OVO05458887E",
    "dateOfCompletedInstallation": "12/12/2022",

    "addressFields": {
      "buildingNumber": "198",
      "buildingName": "Canterbury Buildings",
      "flatNameOrNumber": "91",
      "streetName": "Hill Mews",
      "town": "Hilltown",
      "postCode": "H1 4TE"
    },

    "UniquePropertyReferenceNumber": "210987654321",
    "startingSAPRating": "1234567890",
    "floorArea": "2345",
    "rural": "No",
    "offGas": "Yes",
    "privateDomesticPremises": "Yes",
    "tenureType": "Owner Occupied",
    "property": "Flat",
    "eligibilityType": "LI - Social Housing",
    "verificationMethod": "ECO Eligible Referral",
    "dwpReferenceNumber": "ABC_AB123456",
    "councilTaxBand": "C",

    "prsSAPBandException": "Yes",
    "associatedInsulationMRNforHeatingMeasures": "ABC1234",
    "associatedInfillMeasure1": "ABC1234567",
    "associatedInfillMeasure2": "ABC1234567",
    "associatedInfillMeasure3": "ABC1234567",
    "flexReferralRoute": "Route 2 Council Tax Reduction",
    "laDeclarationReferenceNumber": "A12345678-12345",
    "dateOfHouseholderEligibility": "23/09/22",
    "percentageOfPropertyTreated": "67+",
    "heatingSource": "N/A",
    "installerName": "Max character length of 150 characters",
    "innovationMeasureNumber": "123",

    "trustmarkBusinessLicenceNumber": "123456789012",
    "trustmarkUniqueMeasureReference": "ABC123DEF456GHIJ7890",
    "trustmarkLodgedCertificateID": "A1234567-1",
    "trustmarkProjectReferenceNumber": "T12345",
    "trustMarkCompletedProjectCertID": "A1234567-A"
  },
  {
    "supplierName": "OVO",
"measureReferenceNumber": "OVO7890125",
    "measureType": "Solar_PV",
    "measureStatus": "Notified Incomplete",
    "submissionDate": "08/10/2022",
    "notificationPeriod": "April 2022",
    "purposeOfNotification": "New Notification",
    "supplierReference": "OVO05458887E",
    "dateOfCompletedInstallation": "07/11/2022",

    "addressFields": {
      "buildingNumber": "154",
      "buildingName": "Canterbury Buildings",
      "flatNameOrNumber": "2",
      "streetName": "Locust Hill",
      "town": "Hilltown",
      "postCode": "H2 9RE"
    },

    "UniquePropertyReferenceNumber": "560987554321",
    "startingSAPRating": "1234567890",
    "floorArea": "2345",
    "rural": "No",
    "offGas": "Yes",
    "privateDomesticPremises": "Yes",
    "tenureType": "Owner Occupied",
    "property": "Flat",
    "eligibilityType": "LI - Social Housing",
    "verificationMethod": "ECO Eligible Referral",
    "dwpReferenceNumber": "ABC_AB123456",
    "councilTaxBand": "C",

    "prsSAPBandException": "No",
    "associatedInsulationMRNforHeatingMeasures": "ABC1234",
    "associatedInfillMeasure1": "ABC1234567",
    "associatedInfillMeasure2": "ABC1234567",
    "associatedInfillMeasure3": "ABC1234567",
    "flexReferralRoute": "Route 2 Council Tax Reduction",
    "laDeclarationReferenceNumber": "A12345678-12345",
    "dateOfHouseholderEligibility": "23/09/22",
    "percentageOfPropertyTreated": "43%",
    "heatingSource": "N/A",
    "installerName": "Max character length of 150 characters",
    "innovationMeasureNumber": "123",

    "trustmarkBusinessLicenceNumber": "123456789012",
    "trustmarkUniqueMeasureReference": "ABC123DEF456GHIJ7890",
    "trustmarkLodgedCertificateID": "A1234567-1",
    "trustmarkProjectReferenceNumber": "T12345",
    "trustMarkCompletedProjectCertID": "A1234567-A"
  },
  {
    "supplierName": "OVO",
"measureReferenceNumber": "OVO7370121",
    "measureType": "Solar_PV",
    "measureStatus": "Notified Incomplete",
    "submissionDate": "08/08/2022",
    "notificationPeriod": "April 2022",
    "purposeOfNotification": "New Notification",
    "supplierReference": "OVO05458267E",
    "dateOfCompletedInstallation": "05/10/2022",

    "addressFields": {
      "buildingNumber": "154",
      "buildingName": "Canterbury Buildings",
      "flatNameOrNumber": "2",
      "streetName": "Locust Hill",
      "town": "Hilltown",
      "postCode": "H2 9RE"
    },

    "UniquePropertyReferenceNumber": "560982454321",
    "startingSAPRating": "1234567890",
    "floorArea": "2345",
    "rural": "No",
    "offGas": "Yes",
    "privateDomesticPremises": "Yes",
    "tenureType": "Owner Occupied",
    "property": "Flat",
    "eligibilityType": "LI - Social Housing",
    "verificationMethod": "ECO Eligible Referral",
    "dwpReferenceNumber": "ABC_AB123456",
    "councilTaxBand": "C",

    "prsSAPBandException": "No",
    "associatedInsulationMRNforHeatingMeasures": "ABC1234",
    "associatedInfillMeasure1": "ABC1234567",
    "associatedInfillMeasure2": "ABC1234567",
    "associatedInfillMeasure3": "ABC1234567",
    "flexReferralRoute": "Route 2 Council Tax Reduction",
    "laDeclarationReferenceNumber": "A12345678-12345",
    "dateOfHouseholderEligibility": "23/09/22",
    "percentageOfPropertyTreated": "43%",
    "heatingSource": "N/A",
    "installerName": "Max character length of 150 characters",
    "innovationMeasureNumber": "123",

    "trustmarkBusinessLicenceNumber": "123456789012",
    "trustmarkUniqueMeasureReference": "ABC123DEF456GHIJ7890",
    "trustmarkLodgedCertificateID": "A1234567-1",
    "trustmarkProjectReferenceNumber": "T12345",
    "trustMarkCompletedProjectCertID": "A1234567-A"
  },
  {
    "supplierName": "OVO",
"measureReferenceNumber": "OVO7370122",
    "measureType": "Solar_PV",
    "measureStatus": "Notified Incomplete",
    "submissionDate": "08/08/2022",
    "notificationPeriod": "April 2022",
    "purposeOfNotification": "New Notification",
    "supplierReference": "OVO05458267E",
    "dateOfCompletedInstallation": "05/10/2022",

    "addressFields": {
      "buildingNumber": "154",
      "buildingName": "Canterbury Buildings",
      "flatNameOrNumber": "2",
      "streetName": "Locust Hill",
      "town": "Hilltown",
      "postCode": "H2 9RE"
    },

    "UniquePropertyReferenceNumber": "560982454321",
    "startingSAPRating": "1234567890",
    "floorArea": "2345",
    "rural": "No",
    "offGas": "Yes",
    "privateDomesticPremises": "Yes",
    "tenureType": "Owner Occupied",
    "property": "Flat",
    "eligibilityType": "LI - Social Housing",
    "verificationMethod": "ECO Eligible Referral",
    "dwpReferenceNumber": "ABC_AB123456",
    "councilTaxBand": "C",

    "prsSAPBandException": "No",
    "associatedInsulationMRNforHeatingMeasures": "ABC1234",
    "associatedInfillMeasure1": "ABC1234567",
    "associatedInfillMeasure2": "ABC1234567",
    "associatedInfillMeasure3": "ABC1234567",
    "flexReferralRoute": "Route 2 Council Tax Reduction",
    "laDeclarationReferenceNumber": "A12345678-12345",
    "dateOfHouseholderEligibility": "23/09/22",
    "percentageOfPropertyTreated": "43%",
    "heatingSource": "N/A",
    "installerName": "Max character length of 150 characters",
    "innovationMeasureNumber": "123",

    "trustmarkBusinessLicenceNumber": "123456789012",
    "trustmarkUniqueMeasureReference": "ABC123DEF456GHIJ7890",
    "trustmarkLodgedCertificateID": "A1234567-1",
    "trustmarkProjectReferenceNumber": "T12345",
    "trustMarkCompletedProjectCertID": "A1234567-A"
  },
  {
    "supplierName": "OVO",
"measureReferenceNumber": "OVO5890189",
    "measureType": "Solar_PV",
    "measureStatus": "Notified Incomplete",
    "submissionDate": "08/08/2022",
    "notificationPeriod": "April 2022",
    "purposeOfNotification": "New Notification",
    "supplierReference": "OVO05458267E",
    "dateOfCompletedInstallation": "05/10/2022",

    "addressFields": {
      "buildingNumber": "154",
      "buildingName": "Canterbury Buildings",
      "flatNameOrNumber": "2",
      "streetName": "Locust Hill",
      "town": "Hilltown",
      "postCode": "H2 9RE"
    },

    "UniquePropertyReferenceNumber": "560982454321",
    "startingSAPRating": "1234567890",
    "floorArea": "2345",
    "rural": "No",
    "offGas": "Yes",
    "privateDomesticPremises": "Yes",
    "tenureType": "Owner Occupied",
    "property": "Flat",
    "eligibilityType": "LI - Social Housing",
    "verificationMethod": "ECO Eligible Referral",
    "dwpReferenceNumber": "ABC_AB123456",
    "councilTaxBand": "C",

    "prsSAPBandException": "No",
    "associatedInsulationMRNforHeatingMeasures": "ABC1234",
    "associatedInfillMeasure1": "ABC1234567",
    "associatedInfillMeasure2": "ABC1234567",
    "associatedInfillMeasure3": "ABC1234567",
    "flexReferralRoute": "Route 2 Council Tax Reduction",
    "laDeclarationReferenceNumber": "A12345678-12345",
    "dateOfHouseholderEligibility": "23/09/22",
    "percentageOfPropertyTreated": "43%",
    "heatingSource": "N/A",
    "installerName": "Max character length of 150 characters",
    "innovationMeasureNumber": "123",

    "trustmarkBusinessLicenceNumber": "123456789012",
    "trustmarkUniqueMeasureReference": "ABC123DEF456GHIJ7890",
    "trustmarkLodgedCertificateID": "A1234567-1",
    "trustmarkProjectReferenceNumber": "T12345",
    "trustMarkCompletedProjectCertID": "A1234567-A"
  },
  {
    "supplierName": "OVO",
"measureReferenceNumber": "OVO7370124",
    "measureType": "Solar_PV",
    "measureStatus": "Notified Incomplete",
    "submissionDate": "08/08/2022",
    "notificationPeriod": "April 2022",
    "purposeOfNotification": "New Notification",
    "supplierReference": "OVO05458267E",
    "dateOfCompletedInstallation": "05/10/2022",

    "addressFields": {
      "buildingNumber": "154",
      "buildingName": "Canterbury Buildings",
      "flatNameOrNumber": "2",
      "streetName": "Locust Hill",
      "town": "Hilltown",
      "postCode": "H2 9RE"
    },

    "UniquePropertyReferenceNumber": "560982454321",
    "startingSAPRating": "1234567890",
    "floorArea": "2345",
    "rural": "No",
    "offGas": "Yes",
    "privateDomesticPremises": "Yes",
    "tenureType": "Owner Occupied",
    "property": "Flat",
    "eligibilityType": "LI - Social Housing",
    "verificationMethod": "ECO Eligible Referral",
    "dwpReferenceNumber": "ABC_AB123456",
    "councilTaxBand": "C",

    "prsSAPBandException": "No",
    "associatedInsulationMRNforHeatingMeasures": "ABC1234",
    "associatedInfillMeasure1": "ABC1234567",
    "associatedInfillMeasure2": "ABC1234567",
    "associatedInfillMeasure3": "ABC1234567",
    "flexReferralRoute": "Route 2 Council Tax Reduction",
    "laDeclarationReferenceNumber": "A12345678-12345",
    "dateOfHouseholderEligibility": "23/09/22",
    "percentageOfPropertyTreated": "43%",
    "heatingSource": "N/A",
    "installerName": "Max character length of 150 characters",
    "innovationMeasureNumber": "123",

    "trustmarkBusinessLicenceNumber": "123456789012",
    "trustmarkUniqueMeasureReference": "ABC123DEF456GHIJ7890",
    "trustmarkLodgedCertificateID": "A1234567-1",
    "trustmarkProjectReferenceNumber": "T12345",
    "trustMarkCompletedProjectCertID": "A1234567-A"
  },
  {
    "supplierName": "OVO",
"measureReferenceNumber": "OVO7370125",
    "measureType": "Solar_PV",
    "measureStatus": "Notified Incomplete",
    "submissionDate": "08/08/2022",
    "notificationPeriod": "April 2022",
    "purposeOfNotification": "New Notification",
    "supplierReference": "OVO05458267E",
    "dateOfCompletedInstallation": "05/10/2022",

    "addressFields": {
      "buildingNumber": "154",
      "buildingName": "Canterbury Buildings",
      "flatNameOrNumber": "2",
      "streetName": "Locust Hill",
      "town": "Hilltown",
      "postCode": "H2 9RE"
    },

    "UniquePropertyReferenceNumber": "560982454321",
    "startingSAPRating": "1234567890",
    "floorArea": "2345",
    "rural": "No",
    "offGas": "Yes",
    "privateDomesticPremises": "Yes",
    "tenureType": "Owner Occupied",
    "property": "Flat",
    "eligibilityType": "LI - Social Housing",
    "verificationMethod": "ECO Eligible Referral",
    "dwpReferenceNumber": "ABC_AB123456",
    "councilTaxBand": "C",

    "prsSAPBandException": "No",
    "associatedInsulationMRNforHeatingMeasures": "ABC1234",
    "associatedInfillMeasure1": "ABC1234567",
    "associatedInfillMeasure2": "ABC1234567",
    "associatedInfillMeasure3": "ABC1234567",
    "flexReferralRoute": "Route 2 Council Tax Reduction",
    "laDeclarationReferenceNumber": "A12345678-12345",
    "dateOfHouseholderEligibility": "23/09/22",
    "percentageOfPropertyTreated": "43%",
    "heatingSource": "N/A",
    "installerName": "Max character length of 150 characters",
    "innovationMeasureNumber": "123",

    "trustmarkBusinessLicenceNumber": "123456789012",
    "trustmarkUniqueMeasureReference": "ABC123DEF456GHIJ7890",
    "trustmarkLodgedCertificateID": "A1234567-1",
    "trustmarkProjectReferenceNumber": "T12345",
    "trustMarkCompletedProjectCertID": "A1234567-A"
  },
  {
    "supplierName": "OVO",
"measureReferenceNumber": "OVO7370126",
    "measureType": "Solar_PV",
    "measureStatus": "Notified Incomplete",
    "submissionDate": "08/08/2022",
    "notificationPeriod": "April 2022",
    "purposeOfNotification": "New Notification",
    "supplierReference": "OVO05458267E",
    "dateOfCompletedInstallation": "05/10/2022",

    "addressFields": {
      "buildingNumber": "154",
      "buildingName": "Canterbury Buildings",
      "flatNameOrNumber": "2",
      "streetName": "Locust Hill",
      "town": "Hilltown",
      "postCode": "H2 9RE"
    },

    "UniquePropertyReferenceNumber": "560982454321",
    "startingSAPRating": "1234567890",
    "floorArea": "2345",
    "rural": "No",
    "offGas": "Yes",
    "privateDomesticPremises": "Yes",
    "tenureType": "Owner Occupied",
    "property": "Flat",
    "eligibilityType": "LI - Social Housing",
    "verificationMethod": "ECO Eligible Referral",
    "dwpReferenceNumber": "ABC_AB123456",
    "councilTaxBand": "C",

    "prsSAPBandException": "No",
    "associatedInsulationMRNforHeatingMeasures": "ABC1234",
    "associatedInfillMeasure1": "ABC1234567",
    "associatedInfillMeasure2": "ABC1234567",
    "associatedInfillMeasure3": "ABC1234567",
    "flexReferralRoute": "Route 2 Council Tax Reduction",
    "laDeclarationReferenceNumber": "A12345678-12345",
    "dateOfHouseholderEligibility": "23/09/22",
    "percentageOfPropertyTreated": "43%",
    "heatingSource": "N/A",
    "installerName": "Max character length of 150 characters",
    "innovationMeasureNumber": "123",

    "trustmarkBusinessLicenceNumber": "123456789012",
    "trustmarkUniqueMeasureReference": "ABC123DEF456GHIJ7890",
    "trustmarkLodgedCertificateID": "A1234567-1",
    "trustmarkProjectReferenceNumber": "T12345",
    "trustMarkCompletedProjectCertID": "A1234567-A"
  },
  {
    "supplierName": "OVO",
"measureReferenceNumber": "OVO7370127",
    "measureType": "Solar_PV",
    "measureStatus": "Notified Incomplete",
    "submissionDate": "08/08/2022",
    "notificationPeriod": "April 2022",
    "purposeOfNotification": "New Notification",
    "supplierReference": "OVO05458267E",
    "dateOfCompletedInstallation": "05/10/2022",

    "addressFields": {
      "buildingNumber": "154",
      "buildingName": "Canterbury Buildings",
      "flatNameOrNumber": "2",
      "streetName": "Locust Hill",
      "town": "Hilltown",
      "postCode": "H2 9RE"
    },

    "UniquePropertyReferenceNumber": "560982454321",
    "startingSAPRating": "1234567890",
    "floorArea": "2345",
    "rural": "No",
    "offGas": "Yes",
    "privateDomesticPremises": "Yes",
    "tenureType": "Owner Occupied",
    "property": "Flat",
    "eligibilityType": "LI - Social Housing",
    "verificationMethod": "ECO Eligible Referral",
    "dwpReferenceNumber": "ABC_AB123456",
    "councilTaxBand": "C",

    "prsSAPBandException": "No",
    "associatedInsulationMRNforHeatingMeasures": "ABC1234",
    "associatedInfillMeasure1": "ABC1234567",
    "associatedInfillMeasure2": "ABC1234567",
    "associatedInfillMeasure3": "ABC1234567",
    "flexReferralRoute": "Route 2 Council Tax Reduction",
    "laDeclarationReferenceNumber": "A12345678-12345",
    "dateOfHouseholderEligibility": "23/09/22",
    "percentageOfPropertyTreated": "43%",
    "heatingSource": "N/A",
    "installerName": "Max character length of 150 characters",
    "innovationMeasureNumber": "123",

    "trustmarkBusinessLicenceNumber": "123456789012",
    "trustmarkUniqueMeasureReference": "ABC123DEF456GHIJ7890",
    "trustmarkLodgedCertificateID": "A1234567-1",
    "trustmarkProjectReferenceNumber": "T12345",
    "trustMarkCompletedProjectCertID": "A1234567-A"
  },
  {
    "supplierName": "OVO",
"measureReferenceNumber": "OVO7370128",
    "measureType": "Solar_PV",
    "measureStatus": "Notified Incomplete",
    "submissionDate": "08/08/2022",
    "notificationPeriod": "April 2022",
    "purposeOfNotification": "New Notification",
    "supplierReference": "OVO05458267E",
    "dateOfCompletedInstallation": "05/10/2022",

    "addressFields": {
      "buildingNumber": "154",
      "buildingName": "Canterbury Buildings",
      "flatNameOrNumber": "2",
      "streetName": "Locust Hill",
      "town": "Hilltown",
      "postCode": "H2 9RE"
    },

    "UniquePropertyReferenceNumber": "560982454321",
    "startingSAPRating": "1234567890",
    "floorArea": "2345",
    "rural": "No",
    "offGas": "Yes",
    "privateDomesticPremises": "Yes",
    "tenureType": "Owner Occupied",
    "property": "Flat",
    "eligibilityType": "LI - Social Housing",
    "verificationMethod": "ECO Eligible Referral",
    "dwpReferenceNumber": "ABC_AB123456",
    "councilTaxBand": "C",

    "prsSAPBandException": "No",
    "associatedInsulationMRNforHeatingMeasures": "ABC1234",
    "associatedInfillMeasure1": "ABC1234567",
    "associatedInfillMeasure2": "ABC1234567",
    "associatedInfillMeasure3": "ABC1234567",
    "flexReferralRoute": "Route 2 Council Tax Reduction",
    "laDeclarationReferenceNumber": "A12345678-12345",
    "dateOfHouseholderEligibility": "23/09/22",
    "percentageOfPropertyTreated": "43%",
    "heatingSource": "N/A",
    "installerName": "Max character length of 150 characters",
    "innovationMeasureNumber": "123",

    "trustmarkBusinessLicenceNumber": "123456789012",
    "trustmarkUniqueMeasureReference": "ABC123DEF456GHIJ7890",
    "trustmarkLodgedCertificateID": "A1234567-1",
    "trustmarkProjectReferenceNumber": "T12345",
    "trustMarkCompletedProjectCertID": "A1234567-A"
  },
  {
    "supplierName": "OVO",
"measureReferenceNumber": "OVO1370129",
    "measureType": "Solar_PV",
    "measureStatus": "Notified Incomplete",
    "submissionDate": "08/08/2022",
    "notificationPeriod": "April 2022",
    "purposeOfNotification": "New Notification",
    "supplierReference": "OVO05458267E",
    "dateOfCompletedInstallation": "05/10/2022",

    "addressFields": {
      "buildingNumber": "154",
      "buildingName": "Canterbury Buildings",
      "flatNameOrNumber": "2",
      "streetName": "Locust Hill",
      "town": "Hilltown",
      "postCode": "H2 9RE"
    },

    "UniquePropertyReferenceNumber": "560982454321",
    "startingSAPRating": "1234567890",
    "floorArea": "2345",
    "rural": "No",
    "offGas": "Yes",
    "privateDomesticPremises": "Yes",
    "tenureType": "Owner Occupied",
    "property": "Flat",
    "eligibilityType": "LI - Social Housing",
    "verificationMethod": "ECO Eligible Referral",
    "dwpReferenceNumber": "ABC_AB123456",
    "councilTaxBand": "C",

    "prsSAPBandException": "No",
    "associatedInsulationMRNforHeatingMeasures": "ABC1234",
    "associatedInfillMeasure1": "ABC1234567",
    "associatedInfillMeasure2": "ABC1234567",
    "associatedInfillMeasure3": "ABC1234567",
    "flexReferralRoute": "Route 2 Council Tax Reduction",
    "laDeclarationReferenceNumber": "A12345678-12345",
    "dateOfHouseholderEligibility": "23/09/22",
    "percentageOfPropertyTreated": "43%",
    "heatingSource": "N/A",
    "installerName": "Max character length of 150 characters",
    "innovationMeasureNumber": "123",

    "trustmarkBusinessLicenceNumber": "123456789012",
    "trustmarkUniqueMeasureReference": "ABC123DEF456GHIJ7890",
    "trustmarkLodgedCertificateID": "A1234567-1",
    "trustmarkProjectReferenceNumber": "T12345",
    "trustMarkCompletedProjectCertID": "A1234567-A"
  },
  {
    "supplierName": "OVO",
"measureReferenceNumber": "OVO2370129",
    "measureType": "Solar_PV",
    "measureStatus": "Notified Incomplete",
    "submissionDate": "08/08/2022",
    "notificationPeriod": "April 2022",
    "purposeOfNotification": "New Notification",
    "supplierReference": "OVO05458267E",
    "dateOfCompletedInstallation": "05/10/2022",

    "addressFields": {
      "buildingNumber": "154",
      "buildingName": "Canterbury Buildings",
      "flatNameOrNumber": "2",
      "streetName": "Locust Hill",
      "town": "Hilltown",
      "postCode": "H2 9RE"
    },

    "UniquePropertyReferenceNumber": "560982454321",
    "startingSAPRating": "1234567890",
    "floorArea": "2345",
    "rural": "No",
    "offGas": "Yes",
    "privateDomesticPremises": "Yes",
    "tenureType": "Owner Occupied",
    "property": "Flat",
    "eligibilityType": "LI - Social Housing",
    "verificationMethod": "ECO Eligible Referral",
    "dwpReferenceNumber": "ABC_AB123456",
    "councilTaxBand": "C",

    "prsSAPBandException": "No",
    "associatedInsulationMRNforHeatingMeasures": "ABC1234",
    "associatedInfillMeasure1": "ABC1234567",
    "associatedInfillMeasure2": "ABC1234567",
    "associatedInfillMeasure3": "ABC1234567",
    "flexReferralRoute": "Route 2 Council Tax Reduction",
    "laDeclarationReferenceNumber": "A12345678-12345",
    "dateOfHouseholderEligibility": "23/09/22",
    "percentageOfPropertyTreated": "43%",
    "heatingSource": "N/A",
    "installerName": "Max character length of 150 characters",
    "innovationMeasureNumber": "123",

    "trustmarkBusinessLicenceNumber": "123456789012",
    "trustmarkUniqueMeasureReference": "ABC123DEF456GHIJ7890",
    "trustmarkLodgedCertificateID": "A1234567-1",
    "trustmarkProjectReferenceNumber": "T12345",
    "trustMarkCompletedProjectCertID": "A1234567-A"
  },
  {
    "supplierName": "OVO",
"measureReferenceNumber": "OVO3370129",
    "measureType": "Solar_PV",
    "measureStatus": "Notified Incomplete",
    "submissionDate": "08/08/2022",
    "notificationPeriod": "April 2022",
    "purposeOfNotification": "New Notification",
    "supplierReference": "OVO05458267E",
    "dateOfCompletedInstallation": "05/10/2022",

    "addressFields": {
      "buildingNumber": "154",
      "buildingName": "Canterbury Buildings",
      "flatNameOrNumber": "2",
      "streetName": "Locust Hill",
      "town": "Hilltown",
      "postCode": "H2 9RE"
    },

    "UniquePropertyReferenceNumber": "560982454321",
    "startingSAPRating": "1234567890",
    "floorArea": "2345",
    "rural": "No",
    "offGas": "Yes",
    "privateDomesticPremises": "Yes",
    "tenureType": "Owner Occupied",
    "property": "Flat",
    "eligibilityType": "LI - Social Housing",
    "verificationMethod": "ECO Eligible Referral",
    "dwpReferenceNumber": "ABC_AB123456",
    "councilTaxBand": "C",

    "prsSAPBandException": "No",
    "associatedInsulationMRNforHeatingMeasures": "ABC1234",
    "associatedInfillMeasure1": "ABC1234567",
    "associatedInfillMeasure2": "ABC1234567",
    "associatedInfillMeasure3": "ABC1234567",
    "flexReferralRoute": "Route 2 Council Tax Reduction",
    "laDeclarationReferenceNumber": "A12345678-12345",
    "dateOfHouseholderEligibility": "23/09/22",
    "percentageOfPropertyTreated": "43%",
    "heatingSource": "N/A",
    "installerName": "Max character length of 150 characters",
    "innovationMeasureNumber": "123",

    "trustmarkBusinessLicenceNumber": "123456789012",
    "trustmarkUniqueMeasureReference": "ABC123DEF456GHIJ7890",
    "trustmarkLodgedCertificateID": "A1234567-1",
    "trustmarkProjectReferenceNumber": "T12345",
    "trustMarkCompletedProjectCertID": "A1234567-A"
  },
  {
    "supplierName": "OVO",
"measureReferenceNumber": "OVO4370129",
    "measureType": "Solar_PV",
    "measureStatus": "Notified Incomplete",
    "submissionDate": "05/02/2022",
    "notificationPeriod": "August 2022",
    "purposeOfNotification": "New Notification",
    "supplierReference": "OVO05458267E",
    "dateOfCompletedInstallation": "05/10/2022",

    "addressFields": {
      "buildingNumber": "154",
      "buildingName": "Canterbury Buildings",
      "flatNameOrNumber": "2",
      "streetName": "Locust Hill",
      "town": "Hilltown",
      "postCode": "H2 9RE"
    },

    "UniquePropertyReferenceNumber": "560982454321",
    "startingSAPRating": "1234567890",
    "floorArea": "2345",
    "rural": "No",
    "offGas": "Yes",
    "privateDomesticPremises": "Yes",
    "tenureType": "Owner Occupied",
    "property": "Flat",
    "eligibilityType": "LI - Social Housing",
    "verificationMethod": "ECO Eligible Referral",
    "dwpReferenceNumber": "ABC_AB123456",
    "councilTaxBand": "C",

    "prsSAPBandException": "No",
    "associatedInsulationMRNforHeatingMeasures": "ABC1234",
    "associatedInfillMeasure1": "ABC1234567",
    "associatedInfillMeasure2": "ABC1234567",
    "associatedInfillMeasure3": "ABC1234567",
    "flexReferralRoute": "Route 2 Council Tax Reduction",
    "laDeclarationReferenceNumber": "A12345678-12345",
    "dateOfHouseholderEligibility": "23/09/22",
    "percentageOfPropertyTreated": "43%",
    "heatingSource": "N/A",
    "installerName": "Max character length of 150 characters",
    "innovationMeasureNumber": "123",

    "trustmarkBusinessLicenceNumber": "123456789012",
    "trustmarkUniqueMeasureReference": "ABC123DEF456GHIJ7890",
    "trustmarkLodgedCertificateID": "A1234567-1",
    "trustmarkProjectReferenceNumber": "T12345",
    "trustMarkCompletedProjectCertID": "A1234567-A"
  },
  {
    "supplierName": "OVO",
"measureReferenceNumber": "OVO1234563",
    "measureType": "Solar_PV",
    "measureStatus": "Notified Incomplete",
    "submissionDate": "05/09/2022",
    "notificationPeriod": "July 2022",
    "purposeOfNotification": "New Notification",
    "supplierReference": "OVO05458887E",
    "dateOfCompletedInstallation": "12/12/2022",

    "addressFields": {
      "buildingNumber": "198",
      "buildingName": "Canterbury Buildings",
      "flatNameOrNumber": "91",
      "streetName": "Hill Mews",
      "town": "Hilltown",
      "postCode": "H1 4TE"
    },

    "UniquePropertyReferenceNumber": "210987654321",
    "startingSAPRating": "1234567890",
    "floorArea": "2345",
    "rural": "No",
    "offGas": "Yes",
    "privateDomesticPremises": "Yes",
    "tenureType": "Owner Occupied",
    "property": "Flat",
    "eligibilityType": "LI - Social Housing",
    "verificationMethod": "ECO Eligible Referral",
    "dwpReferenceNumber": "ABC_AB123456",
    "councilTaxBand": "C",

    "prsSAPBandException": "Yes",
    "associatedInsulationMRNforHeatingMeasures": "ABC1234",
    "associatedInfillMeasure1": "ABC1234567",
    "associatedInfillMeasure2": "ABC1234567",
    "associatedInfillMeasure3": "ABC1234567",
    "flexReferralRoute": "Route 2 Council Tax Reduction",
    "laDeclarationReferenceNumber": "A12345678-12345",
    "dateOfHouseholderEligibility": "23/09/22",
    "percentageOfPropertyTreated": "67+",
    "heatingSource": "N/A",
    "installerName": "Max character length of 150 characters",
    "innovationMeasureNumber": "123",

    "trustmarkBusinessLicenceNumber": "123456789012",
    "trustmarkUniqueMeasureReference": "ABC123DEF456GHIJ7890",
    "trustmarkLodgedCertificateID": "A1234567-1",
    "trustmarkProjectReferenceNumber": "T12345",
    "trustMarkCompletedProjectCertID": "A1234567-A"
  },
  {
    "supplierName": "OVO",
"measureReferenceNumber": "OVO7890124",
    "measureType": "Solar_PV",
    "measureStatus": "Notified Incomplete",
    "submissionDate": "08/10/2022",
    "notificationPeriod": "April 2022",
    "purposeOfNotification": "New Notification",
    "supplierReference": "OVO05458887E",
    "dateOfCompletedInstallation": "07/11/2022",

    "addressFields": {
      "buildingNumber": "154",
      "buildingName": "Canterbury Buildings",
      "flatNameOrNumber": "2",
      "streetName": "Locust Hill",
      "town": "Hilltown",
      "postCode": "H2 9RE"
    },

    "UniquePropertyReferenceNumber": "560987554321",
    "startingSAPRating": "1234567890",
    "floorArea": "2345",
    "rural": "No",
    "offGas": "Yes",
    "privateDomesticPremises": "Yes",
    "tenureType": "Owner Occupied",
    "property": "Flat",
    "eligibilityType": "LI - Social Housing",
    "verificationMethod": "ECO Eligible Referral",
    "dwpReferenceNumber": "ABC_AB123456",
    "councilTaxBand": "C",

    "prsSAPBandException": "No",
    "associatedInsulationMRNforHeatingMeasures": "ABC1234",
    "associatedInfillMeasure1": "ABC1234567",
    "associatedInfillMeasure2": "ABC1234567",
    "associatedInfillMeasure3": "ABC1234567",
    "flexReferralRoute": "Route 2 Council Tax Reduction",
    "laDeclarationReferenceNumber": "A12345678-12345",
    "dateOfHouseholderEligibility": "23/09/22",
    "percentageOfPropertyTreated": "43%",
    "heatingSource": "N/A",
    "installerName": "Max character length of 150 characters",
    "innovationMeasureNumber": "123",

    "trustmarkBusinessLicenceNumber": "123456789012",
    "trustmarkUniqueMeasureReference": "ABC123DEF456GHIJ7890",
    "trustmarkLodgedCertificateID": "A1234567-1",
    "trustmarkProjectReferenceNumber": "T12345",
    "trustMarkCompletedProjectCertID": "A1234567-A"
  },
  {
    "supplierName": "OVO",
"measureReferenceNumber": "OVO5370129",
    "measureType": "Solar_PV",
    "measureStatus": "Notified Incomplete",
    "submissionDate": "08/08/2022",
    "notificationPeriod": "April 2022",
    "purposeOfNotification": "New Notification",
    "supplierReference": "OVO05458267E",
    "dateOfCompletedInstallation": "05/10/2022",

    "addressFields": {
      "buildingNumber": "154",
      "buildingName": "Canterbury Buildings",
      "flatNameOrNumber": "2",
      "streetName": "Locust Hill",
      "town": "Hilltown",
      "postCode": "H2 9RE"
    },

    "UniquePropertyReferenceNumber": "560982454321",
    "startingSAPRating": "1234567890",
    "floorArea": "2345",
    "rural": "No",
    "offGas": "Yes",
    "privateDomesticPremises": "Yes",
    "tenureType": "Owner Occupied",
    "property": "Flat",
    "eligibilityType": "LI - Social Housing",
    "verificationMethod": "ECO Eligible Referral",
    "dwpReferenceNumber": "ABC_AB123456",
    "councilTaxBand": "C",

    "prsSAPBandException": "No",
    "associatedInsulationMRNforHeatingMeasures": "ABC1234",
    "associatedInfillMeasure1": "ABC1234567",
    "associatedInfillMeasure2": "ABC1234567",
    "associatedInfillMeasure3": "ABC1234567",
    "flexReferralRoute": "Route 2 Council Tax Reduction",
    "laDeclarationReferenceNumber": "A12345678-12345",
    "dateOfHouseholderEligibility": "23/09/22",
    "percentageOfPropertyTreated": "43%",
    "heatingSource": "N/A",
    "installerName": "Max character length of 150 characters",
    "innovationMeasureNumber": "123",

    "trustmarkBusinessLicenceNumber": "123456789012",
    "trustmarkUniqueMeasureReference": "ABC123DEF456GHIJ7890",
    "trustmarkLodgedCertificateID": "A1234567-1",
    "trustmarkProjectReferenceNumber": "T12345",
    "trustMarkCompletedProjectCertID": "A1234567-A"
  },
  {
    "supplierName": "OVO",
"measureReferenceNumber": "OVO6370129",
    "measureType": "Solar_PV",
    "measureStatus": "Notified Incomplete",
    "submissionDate": "08/08/2022",
    "notificationPeriod": "April 2022",
    "purposeOfNotification": "New Notification",
    "supplierReference": "OVO05458267E",
    "dateOfCompletedInstallation": "05/10/2022",

    "addressFields": {
      "buildingNumber": "154",
      "buildingName": "Canterbury Buildings",
      "flatNameOrNumber": "2",
      "streetName": "Locust Hill",
      "town": "Hilltown",
      "postCode": "H2 9RE"
    },

    "UniquePropertyReferenceNumber": "560982454321",
    "startingSAPRating": "1234567890",
    "floorArea": "2345",
    "rural": "No",
    "offGas": "Yes",
    "privateDomesticPremises": "Yes",
    "tenureType": "Owner Occupied",
    "property": "Flat",
    "eligibilityType": "LI - Social Housing",
    "verificationMethod": "ECO Eligible Referral",
    "dwpReferenceNumber": "ABC_AB123456",
    "councilTaxBand": "C",

    "prsSAPBandException": "No",
    "associatedInsulationMRNforHeatingMeasures": "ABC1234",
    "associatedInfillMeasure1": "ABC1234567",
    "associatedInfillMeasure2": "ABC1234567",
    "associatedInfillMeasure3": "ABC1234567",
    "flexReferralRoute": "Route 2 Council Tax Reduction",
    "laDeclarationReferenceNumber": "A12345678-12345",
    "dateOfHouseholderEligibility": "23/09/22",
    "percentageOfPropertyTreated": "43%",
    "heatingSource": "N/A",
    "installerName": "Max character length of 150 characters",
    "innovationMeasureNumber": "123",

    "trustmarkBusinessLicenceNumber": "123456789012",
    "trustmarkUniqueMeasureReference": "ABC123DEF456GHIJ7890",
    "trustmarkLodgedCertificateID": "A1234567-1",
    "trustmarkProjectReferenceNumber": "T12345",
    "trustMarkCompletedProjectCertID": "A1234567-A"
  },
  {
    "supplierName": "OVO",
"measureReferenceNumber": "OVO7470129",
    "measureType": "Solar_PV",
    "measureStatus": "Notified Incomplete",
    "submissionDate": "08/08/2022",
    "notificationPeriod": "April 2022",
    "purposeOfNotification": "New Notification",
    "supplierReference": "OVO05458267E",
    "dateOfCompletedInstallation": "05/10/2022",

    "addressFields": {
      "buildingNumber": "154",
      "buildingName": "Canterbury Buildings",
      "flatNameOrNumber": "2",
      "streetName": "Locust Hill",
      "town": "Hilltown",
      "postCode": "H2 9RE"
    },

    "UniquePropertyReferenceNumber": "560982454321",
    "startingSAPRating": "1234567890",
    "floorArea": "2345",
    "rural": "No",
    "offGas": "Yes",
    "privateDomesticPremises": "Yes",
    "tenureType": "Owner Occupied",
    "property": "Flat",
    "eligibilityType": "LI - Social Housing",
    "verificationMethod": "ECO Eligible Referral",
    "dwpReferenceNumber": "ABC_AB123456",
    "councilTaxBand": "C",

    "prsSAPBandException": "No",
    "associatedInsulationMRNforHeatingMeasures": "ABC1234",
    "associatedInfillMeasure1": "ABC1234567",
    "associatedInfillMeasure2": "ABC1234567",
    "associatedInfillMeasure3": "ABC1234567",
    "flexReferralRoute": "Route 2 Council Tax Reduction",
    "laDeclarationReferenceNumber": "A12345678-12345",
    "dateOfHouseholderEligibility": "23/09/22",
    "percentageOfPropertyTreated": "43%",
    "heatingSource": "N/A",
    "installerName": "Max character length of 150 characters",
    "innovationMeasureNumber": "123",

    "trustmarkBusinessLicenceNumber": "123456789012",
    "trustmarkUniqueMeasureReference": "ABC123DEF456GHIJ7890",
    "trustmarkLodgedCertificateID": "A1234567-1",
    "trustmarkProjectReferenceNumber": "T12345",
    "trustMarkCompletedProjectCertID": "A1234567-A"
  },
  {
    "supplierName": "OVO",
"measureReferenceNumber": "OVO7370129",
    "measureType": "Solar_PV",
    "measureStatus": "Notified Incomplete",
    "submissionDate": "08/08/2022",
    "notificationPeriod": "April 2022",
    "purposeOfNotification": "New Notification",
    "supplierReference": "OVO05458267E",
    "dateOfCompletedInstallation": "05/10/2022",

    "addressFields": {
      "buildingNumber": "154",
      "buildingName": "Canterbury Buildings",
      "flatNameOrNumber": "2",
      "streetName": "Locust Hill",
      "town": "Hilltown",
      "postCode": "H2 9RE"
    },

    "UniquePropertyReferenceNumber": "560982454321",
    "startingSAPRating": "1234567890",
    "floorArea": "2345",
    "rural": "No",
    "offGas": "Yes",
    "privateDomesticPremises": "Yes",
    "tenureType": "Owner Occupied",
    "property": "Flat",
    "eligibilityType": "LI - Social Housing",
    "verificationMethod": "ECO Eligible Referral",
    "dwpReferenceNumber": "ABC_AB123456",
    "councilTaxBand": "C",

    "prsSAPBandException": "No",
    "associatedInsulationMRNforHeatingMeasures": "ABC1234",
    "associatedInfillMeasure1": "ABC1234567",
    "associatedInfillMeasure2": "ABC1234567",
    "associatedInfillMeasure3": "ABC1234567",
    "flexReferralRoute": "Route 2 Council Tax Reduction",
    "laDeclarationReferenceNumber": "A12345678-12345",
    "dateOfHouseholderEligibility": "23/09/22",
    "percentageOfPropertyTreated": "43%",
    "heatingSource": "N/A",
    "installerName": "Max character length of 150 characters",
    "innovationMeasureNumber": "123",

    "trustmarkBusinessLicenceNumber": "123456789012",
    "trustmarkUniqueMeasureReference": "ABC123DEF456GHIJ7890",
    "trustmarkLodgedCertificateID": "A1234567-1",
    "trustmarkProjectReferenceNumber": "T12345",
    "trustMarkCompletedProjectCertID": "A1234567-A"
  },
  {
    "supplierName": "OVO",
"measureReferenceNumber": "OVO0170129",
    "measureType": "Solar_PV",
    "measureStatus": "Notified Incomplete",
    "submissionDate": "08/08/2022",
    "notificationPeriod": "April 2022",
    "purposeOfNotification": "New Notification",
    "supplierReference": "OVO05458267E",
    "dateOfCompletedInstallation": "05/10/2022",

    "addressFields": {
      "buildingNumber": "154",
      "buildingName": "Canterbury Buildings",
      "flatNameOrNumber": "2",
      "streetName": "Locust Hill",
      "town": "Hilltown",
      "postCode": "H2 9RE"
    },

    "UniquePropertyReferenceNumber": "560982454321",
    "startingSAPRating": "1234567890",
    "floorArea": "2345",
    "rural": "No",
    "offGas": "Yes",
    "privateDomesticPremises": "Yes",
    "tenureType": "Owner Occupied",
    "property": "Flat",
    "eligibilityType": "LI - Social Housing",
    "verificationMethod": "ECO Eligible Referral",
    "dwpReferenceNumber": "ABC_AB123456",
    "councilTaxBand": "C",

    "prsSAPBandException": "No",
    "associatedInsulationMRNforHeatingMeasures": "ABC1234",
    "associatedInfillMeasure1": "ABC1234567",
    "associatedInfillMeasure2": "ABC1234567",
    "associatedInfillMeasure3": "ABC1234567",
    "flexReferralRoute": "Route 2 Council Tax Reduction",
    "laDeclarationReferenceNumber": "A12345678-12345",
    "dateOfHouseholderEligibility": "23/09/22",
    "percentageOfPropertyTreated": "43%",
    "heatingSource": "N/A",
    "installerName": "Max character length of 150 characters",
    "innovationMeasureNumber": "123",

    "trustmarkBusinessLicenceNumber": "123456789012",
    "trustmarkUniqueMeasureReference": "ABC123DEF456GHIJ7890",
    "trustmarkLodgedCertificateID": "A1234567-1",
    "trustmarkProjectReferenceNumber": "T12345",
    "trustMarkCompletedProjectCertID": "A1234567-A"
  },
  {
    "supplierName": "OVO",
"measureReferenceNumber": "OVO0370129",
    "measureType": "Solar_PV",
    "measureStatus": "Notified Incomplete",
    "submissionDate": "08/08/2022",
    "notificationPeriod": "April 2022",
    "purposeOfNotification": "New Notification",
    "supplierReference": "OVO05458267E",
    "dateOfCompletedInstallation": "05/10/2022",

    "addressFields": {
      "buildingNumber": "154",
      "buildingName": "Canterbury Buildings",
      "flatNameOrNumber": "2",
      "streetName": "Locust Hill",
      "town": "Hilltown",
      "postCode": "H2 9RE"
    },

    "UniquePropertyReferenceNumber": "560982454321",
    "startingSAPRating": "1234567890",
    "floorArea": "2345",
    "rural": "No",
    "offGas": "Yes",
    "privateDomesticPremises": "Yes",
    "tenureType": "Owner Occupied",
    "property": "Flat",
    "eligibilityType": "LI - Social Housing",
    "verificationMethod": "ECO Eligible Referral",
    "dwpReferenceNumber": "ABC_AB123456",
    "councilTaxBand": "C",

    "prsSAPBandException": "No",
    "associatedInsulationMRNforHeatingMeasures": "ABC1234",
    "associatedInfillMeasure1": "ABC1234567",
    "associatedInfillMeasure2": "ABC1234567",
    "associatedInfillMeasure3": "ABC1234567",
    "flexReferralRoute": "Route 2 Council Tax Reduction",
    "laDeclarationReferenceNumber": "A12345678-12345",
    "dateOfHouseholderEligibility": "23/09/22",
    "percentageOfPropertyTreated": "43%",
    "heatingSource": "N/A",
    "installerName": "Max character length of 150 characters",
    "innovationMeasureNumber": "123",

    "trustmarkBusinessLicenceNumber": "123456789012",
    "trustmarkUniqueMeasureReference": "ABC123DEF456GHIJ7890",
    "trustmarkLodgedCertificateID": "A1234567-1",
    "trustmarkProjectReferenceNumber": "T12345",
    "trustMarkCompletedProjectCertID": "A1234567-A"
  },
  {
    "supplierName": "OVO",
"measureReferenceNumber": "OVO0270129",
    "measureType": "Solar_PV",
    "measureStatus": "Notified Incomplete",
    "submissionDate": "08/08/2022",
    "notificationPeriod": "April 2022",
    "purposeOfNotification": "New Notification",
    "supplierReference": "OVO05458267E",
    "dateOfCompletedInstallation": "05/10/2022",

    "addressFields": {
      "buildingNumber": "154",
      "buildingName": "Canterbury Buildings",
      "flatNameOrNumber": "2",
      "streetName": "Locust Hill",
      "town": "Hilltown",
      "postCode": "H2 9RE"
    },

    "UniquePropertyReferenceNumber": "560982454321",
    "startingSAPRating": "1234567890",
    "floorArea": "2345",
    "rural": "No",
    "offGas": "Yes",
    "privateDomesticPremises": "Yes",
    "tenureType": "Owner Occupied",
    "property": "Flat",
    "eligibilityType": "LI - Social Housing",
    "verificationMethod": "ECO Eligible Referral",
    "dwpReferenceNumber": "ABC_AB123456",
    "councilTaxBand": "C",

    "prsSAPBandException": "No",
    "associatedInsulationMRNforHeatingMeasures": "ABC1234",
    "associatedInfillMeasure1": "ABC1234567",
    "associatedInfillMeasure2": "ABC1234567",
    "associatedInfillMeasure3": "ABC1234567",
    "flexReferralRoute": "Route 2 Council Tax Reduction",
    "laDeclarationReferenceNumber": "A12345678-12345",
    "dateOfHouseholderEligibility": "23/09/22",
    "percentageOfPropertyTreated": "43%",
    "heatingSource": "N/A",
    "installerName": "Max character length of 150 characters",
    "innovationMeasureNumber": "123",

    "trustmarkBusinessLicenceNumber": "123456789012",
    "trustmarkUniqueMeasureReference": "ABC123DEF456GHIJ7890",
    "trustmarkLodgedCertificateID": "A1234567-1",
    "trustmarkProjectReferenceNumber": "T12345",
    "trustMarkCompletedProjectCertID": "A1234567-A"
  },
  {
    "supplierName": "OVO",
"measureReferenceNumber": "OVO0470129",
    "measureType": "Solar_PV",
    "measureStatus": "Notified Incomplete",
    "submissionDate": "08/08/2022",
    "notificationPeriod": "April 2022",
    "purposeOfNotification": "New Notification",
    "supplierReference": "OVO05458267E",
    "dateOfCompletedInstallation": "05/10/2022",

    "addressFields": {
      "buildingNumber": "154",
      "buildingName": "Canterbury Buildings",
      "flatNameOrNumber": "2",
      "streetName": "Locust Hill",
      "town": "Hilltown",
      "postCode": "H2 9RE"
    },

    "UniquePropertyReferenceNumber": "560982454321",
    "startingSAPRating": "1234567890",
    "floorArea": "2345",
    "rural": "No",
    "offGas": "Yes",
    "privateDomesticPremises": "Yes",
    "tenureType": "Owner Occupied",
    "property": "Flat",
    "eligibilityType": "LI - Social Housing",
    "verificationMethod": "ECO Eligible Referral",
    "dwpReferenceNumber": "ABC_AB123456",
    "councilTaxBand": "C",

    "prsSAPBandException": "No",
    "associatedInsulationMRNforHeatingMeasures": "ABC1234",
    "associatedInfillMeasure1": "ABC1234567",
    "associatedInfillMeasure2": "ABC1234567",
    "associatedInfillMeasure3": "ABC1234567",
    "flexReferralRoute": "Route 2 Council Tax Reduction",
    "laDeclarationReferenceNumber": "A12345678-12345",
    "dateOfHouseholderEligibility": "23/09/22",
    "percentageOfPropertyTreated": "43%",
    "heatingSource": "N/A",
    "installerName": "Max character length of 150 characters",
    "innovationMeasureNumber": "123",

    "trustmarkBusinessLicenceNumber": "123456789012",
    "trustmarkUniqueMeasureReference": "ABC123DEF456GHIJ7890",
    "trustmarkLodgedCertificateID": "A1234567-1",
    "trustmarkProjectReferenceNumber": "T12345",
    "trustMarkCompletedProjectCertID": "A1234567-A"
  },
  {
    "supplierName": "OVO",
"measureReferenceNumber": "OVO0570129",
    "measureType": "Solar_PV",
    "measureStatus": "Notified Incomplete",
    "submissionDate": "08/08/2022",
    "notificationPeriod": "April 2022",
    "purposeOfNotification": "New Notification",
    "supplierReference": "OVO05458267E",
    "dateOfCompletedInstallation": "05/10/2022",

    "addressFields": {
      "buildingNumber": "154",
      "buildingName": "Canterbury Buildings",
      "flatNameOrNumber": "2",
      "streetName": "Locust Hill",
      "town": "Hilltown",
      "postCode": "H2 9RE"
    },

    "UniquePropertyReferenceNumber": "560982454321",
    "startingSAPRating": "1234567890",
    "floorArea": "2345",
    "rural": "No",
    "offGas": "Yes",
    "privateDomesticPremises": "Yes",
    "tenureType": "Owner Occupied",
    "property": "Flat",
    "eligibilityType": "LI - Social Housing",
    "verificationMethod": "ECO Eligible Referral",
    "dwpReferenceNumber": "ABC_AB123456",
    "councilTaxBand": "C",

    "prsSAPBandException": "No",
    "associatedInsulationMRNforHeatingMeasures": "ABC1234",
    "associatedInfillMeasure1": "ABC1234567",
    "associatedInfillMeasure2": "ABC1234567",
    "associatedInfillMeasure3": "ABC1234567",
    "flexReferralRoute": "Route 2 Council Tax Reduction",
    "laDeclarationReferenceNumber": "A12345678-12345",
    "dateOfHouseholderEligibility": "23/09/22",
    "percentageOfPropertyTreated": "43%",
    "heatingSource": "N/A",
    "installerName": "Max character length of 150 characters",
    "innovationMeasureNumber": "123",

    "trustmarkBusinessLicenceNumber": "123456789012",
    "trustmarkUniqueMeasureReference": "ABC123DEF456GHIJ7890",
    "trustmarkLodgedCertificateID": "A1234567-1",
    "trustmarkProjectReferenceNumber": "T12345",
    "trustMarkCompletedProjectCertID": "A1234567-A"
  },
  {
    "supplierName": "OVO",
"measureReferenceNumber": "OVO0670129",
    "measureType": "Solar_PV",
    "measureStatus": "Notified Incomplete",
    "submissionDate": "08/08/2022",
    "notificationPeriod": "April 2022",
    "purposeOfNotification": "New Notification",
    "supplierReference": "OVO05458267E",
    "dateOfCompletedInstallation": "05/10/2022",

    "addressFields": {
      "buildingNumber": "154",
      "buildingName": "Canterbury Buildings",
      "flatNameOrNumber": "2",
      "streetName": "Locust Hill",
      "town": "Hilltown",
      "postCode": "H2 9RE"
    },

    "UniquePropertyReferenceNumber": "560982454321",
    "startingSAPRating": "1234567890",
    "floorArea": "2345",
    "rural": "No",
    "offGas": "Yes",
    "privateDomesticPremises": "Yes",
    "tenureType": "Owner Occupied",
    "property": "Flat",
    "eligibilityType": "LI - Social Housing",
    "verificationMethod": "ECO Eligible Referral",
    "dwpReferenceNumber": "ABC_AB123456",
    "councilTaxBand": "C",

    "prsSAPBandException": "No",
    "associatedInsulationMRNforHeatingMeasures": "ABC1234",
    "associatedInfillMeasure1": "ABC1234567",
    "associatedInfillMeasure2": "ABC1234567",
    "associatedInfillMeasure3": "ABC1234567",
    "flexReferralRoute": "Route 2 Council Tax Reduction",
    "laDeclarationReferenceNumber": "A12345678-12345",
    "dateOfHouseholderEligibility": "23/09/22",
    "percentageOfPropertyTreated": "43%",
    "heatingSource": "N/A",
    "installerName": "Max character length of 150 characters",
    "innovationMeasureNumber": "123",

    "trustmarkBusinessLicenceNumber": "123456789012",
    "trustmarkUniqueMeasureReference": "ABC123DEF456GHIJ7890",
    "trustmarkLodgedCertificateID": "A1234567-1",
    "trustmarkProjectReferenceNumber": "T12345",
    "trustMarkCompletedProjectCertID": "A1234567-A"
  },
  {
    "supplierName": "OVO",
"measureReferenceNumber": "OVO0770129",
    "measureType": "Solar_PV",
    "measureStatus": "Notified Incomplete",
    "submissionDate": "08/08/2022",
    "notificationPeriod": "April 2022",
    "purposeOfNotification": "New Notification",
    "supplierReference": "OVO05458267E",
    "dateOfCompletedInstallation": "05/10/2022",

    "addressFields": {
      "buildingNumber": "154",
      "buildingName": "Canterbury Buildings",
      "flatNameOrNumber": "2",
      "streetName": "Locust Hill",
      "town": "Hilltown",
      "postCode": "H2 9RE"
    },

    "UniquePropertyReferenceNumber": "560982454321",
    "startingSAPRating": "1234567890",
    "floorArea": "2345",
    "rural": "No",
    "offGas": "Yes",
    "privateDomesticPremises": "Yes",
    "tenureType": "Owner Occupied",
    "property": "Flat",
    "eligibilityType": "LI - Social Housing",
    "verificationMethod": "ECO Eligible Referral",
    "dwpReferenceNumber": "ABC_AB123456",
    "councilTaxBand": "C",

    "prsSAPBandException": "No",
    "associatedInsulationMRNforHeatingMeasures": "ABC1234",
    "associatedInfillMeasure1": "ABC1234567",
    "associatedInfillMeasure2": "ABC1234567",
    "associatedInfillMeasure3": "ABC1234567",
    "flexReferralRoute": "Route 2 Council Tax Reduction",
    "laDeclarationReferenceNumber": "A12345678-12345",
    "dateOfHouseholderEligibility": "23/09/22",
    "percentageOfPropertyTreated": "43%",
    "heatingSource": "N/A",
    "installerName": "Max character length of 150 characters",
    "innovationMeasureNumber": "123",

    "trustmarkBusinessLicenceNumber": "123456789012",
    "trustmarkUniqueMeasureReference": "ABC123DEF456GHIJ7890",
    "trustmarkLodgedCertificateID": "A1234567-1",
    "trustmarkProjectReferenceNumber": "T12345",
    "trustMarkCompletedProjectCertID": "A1234567-A"
  },
  {
    "supplierName": "OVO",
"measureReferenceNumber": "OVO0870129",
    "measureType": "Solar_PV",
    "measureStatus": "Notified Incomplete",
    "submissionDate": "05/02/2022",
    "notificationPeriod": "August 2022",
    "purposeOfNotification": "New Notification",
    "supplierReference": "OVO05458267E",
    "dateOfCompletedInstallation": "05/10/2022",

    "addressFields": {
      "buildingNumber": "154",
      "buildingName": "Canterbury Buildings",
      "flatNameOrNumber": "2",
      "streetName": "Locust Hill",
      "town": "Hilltown",
      "postCode": "H2 9RE"
    },

    "UniquePropertyReferenceNumber": "560982454321",
    "startingSAPRating": "1234567890",
    "floorArea": "2345",
    "rural": "No",
    "offGas": "Yes",
    "privateDomesticPremises": "Yes",
    "tenureType": "Owner Occupied",
    "property": "Flat",
    "eligibilityType": "LI - Social Housing",
    "verificationMethod": "ECO Eligible Referral",
    "dwpReferenceNumber": "ABC_AB123456",
    "councilTaxBand": "C",

    "prsSAPBandException": "No",
    "associatedInsulationMRNforHeatingMeasures": "ABC1234",
    "associatedInfillMeasure1": "ABC1234567",
    "associatedInfillMeasure2": "ABC1234567",
    "associatedInfillMeasure3": "ABC1234567",
    "flexReferralRoute": "Route 2 Council Tax Reduction",
    "laDeclarationReferenceNumber": "A12345678-12345",
    "dateOfHouseholderEligibility": "23/09/22",
    "percentageOfPropertyTreated": "43%",
    "heatingSource": "N/A",
    "installerName": "Max character length of 150 characters",
    "innovationMeasureNumber": "123",

    "trustmarkBusinessLicenceNumber": "123456789012",
    "trustmarkUniqueMeasureReference": "ABC123DEF456GHIJ7890",
    "trustmarkLodgedCertificateID": "A1234567-1",
    "trustmarkProjectReferenceNumber": "T12345",
    "trustMarkCompletedProjectCertID": "A1234567-A"
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
  resultsLength.innerHTML = searchResults.length*3;
  if (singularPlural) searchResults.length > 1 ? singularPlural.innerHTML = "s" : singularPlural.innerHTML = "";
}
if (resultsListInt) {
  resultsListIntFunct(searchResults, resultsListInt);
  resultsLength.innerHTML = searchResults.length*3;
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
    <!--  
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
      </td> -->                   
      <td><p class="govuk-body">` + searchResults[i].measureReferenceNumber + `</p></td>
      <td><p class="govuk-body">` + searchResults[i].measureType + `</p></td>
      <td><p class="govuk-body">` + searchResults[i].measureStatus + `</p></td>
      <td><p class="govuk-body">` + searchResults[i].submissionDate + `</p></td>


      <!-- <td><p class="govuk-body"><a href="#" class="govuk-link" onclick="measureDetails('`+searchResults[i].measureReferenceNumber+`')">View details</a></p></td> -->

      
    </tr>
    `;
  }
  resultsList.innerHTML += result;
}
// resultsListInt lists
function resultsListIntFunct(searchResults) {
  let result = '';
  let searchResult = '';
  for (let i = 0; i < searchResults.length; i++) {
    searchResult = searchResults[i];
    result +=
    `
    <tr>
      <td class="checkbox-col">
        <div class="govuk-checkboxes smaller" data-module="govuk-checkboxes">                                
          <div class="govuk-checkboxes__item">
            <input  name="search-results"
                    type="checkbox" 
                    id="cb` + i + `" 
                    data-test-id="" 
                    class="govuk-checkboxes__input results-checkboxes">
            <label for="" class="govuk-label govuk-checkboxes__label"></label>
          </div>
        </div>
      </td>
      <td><p class="govuk-body small">` + searchResults[i].measureReferenceNumber + `</p></td>
      <td><p class="govuk-body small">` + searchResults[i].supplierName + `</p></td>
      <td><p class="govuk-body small">` + searchResults[i].measureType + `</p></td>
      <td><p class="govuk-body small">` + searchResults[i].notificationPeriod + `</p></td>
      <td><p class="govuk-body small">` + searchResults[i].measureStatus + `</p></td>
      <td class="address-col">
        <p class="govuk-body small">
          ` + searchResults[i].addressFields.buildingNumber + ` <br>
          ` + searchResults[i].addressFields.buildingName + ` <br>
          ` + searchResults[i].addressFields.flatNameOrNumber + ` <br>
          ` + searchResults[i].addressFields.postCode + `
        </p>
      </td>

      <!-- <td><p class="govuk-body"><a href="#" class="govuk-link" onclick="measureDetails('`+searchResults[i].measureReferenceNumber+`')">View details</a></p></td> -->
    </tr>
    `;
  }
  resultsListInt.innerHTML += result;
}

function measureDetails(measureRef) {
  // window.location.pathname = "/v06-1/measure-details";
  if (pageUrlPath === "/v05-4/measures/search-measures/search-results" || pageUrlPath === "/v05-4/measures/search-measures/search-results-2" || pageUrlPath === "/v05-4/measures/search-measures/search-results-3") {
    window.location.pathname = "/v05-4/measures/search-measures/measure-details";
  } else if (pageUrlPath === "/v05-5/measures/search-measures/search-results" || pageUrlPath === "/v05-5/measures/search-measures/search-results-2" || pageUrlPath === "/v05-5/measures/search-measures/search-results-3") {
    window.location.pathname = "/v05-5/measures/search-measures/measure-details";
  } else if (pageUrlPath === "/v07/measures/search-measures/search-results" || pageUrlPath === "/v07/measures/search-measures/search-results-2" || pageUrlPath === "/v07/measures/search-measures/search-results-3") {
    window.location.pathname = "/v07/measures/search-measures/measure-details";
  } else if (pageUrlPath === "/v08/measures/search-measures/search-results" || pageUrlPath === "/v08/measures/search-measures/search-results-2" || pageUrlPath === "/v08/measures/search-measures/search-results-3") {
    window.location.pathname = "/v08/measures/search-measures/measure-details";
  } else {
    window.location.pathname = "/v06-1/measure-details";
  }

  localStorage.setItem("measureRefNumber", measureRef);
}

// function measureDetailsNew(measureRef) {
//   window.location.pathname = "/v05-4/measures/search-measures/measure-details";
//   localStorage.setItem("measureRefNumber", measureRef);
// }

if ( pageUrlPath === "/v06-1/measure-details"
  || pageUrlPath === "/v05-4/measures/search-measures/measure-details" 
  // || pageUrlPath === "/v05-4/measures/search-measures/measure-details#" 

  || pageUrlPath === "/v05-5/measures/search-measures/measure-details"
  // || pageUrlPath === "/v05-5/measures/search-measures/measure-details#" 

  || pageUrlPath === "/v07/measures/search-measures/measure-details"

  || pageUrlPath === "/v08/measures/search-measures/measure-details"
) {
  let measureRefNumber = localStorage.getItem("measureRefNumber");
  let measureDetailsDiv = document.getElementById('measureDetails');
  let detail = '';

  if (measureRefNumber) {
    console.log('measureRefNumber >>> ', measureRefNumber);
    for (let i = 0; i < searchResults.length; i++) {
      let searchResult = searchResults[i];

      console.log('searchResult', searchResult);

      if (measureRefNumber === searchResult.measureReferenceNumber) {
        detail +=
          `
          <!-- Left half -->
          <div class="govuk-grid-row">
            <div class="govuk-grid-column-one-half">
              <dl class="govuk-summary-list">
                <div class="govuk-summary-list__row list-row">
                  <dt class="govuk-summary-list__key list-key">Measure reference number</dt>
                  <dd class="govuk-summary-list__value list-value">`+searchResult.measureReferenceNumber+`</dd>
                </div>

                <div class="govuk-summary-list__row list-row">
                  <dt class="govuk-summary-list__key list-key">Measure type</dt>
                  <dd class="govuk-summary-list__value list-value">`+searchResult.measureType+`</dd>
                </div>
              </dl>
            </div>

            <!-- Right half -->
            <div class="govuk-grid-column-one-half">
              <dl class="govuk-summary-list">
                <div class="govuk-summary-list__row list-row">
                  <dt class="govuk-summary-list__key list-key">Status</dt>
                  <dd class="govuk-summary-list__value list-value">`+searchResult.measureStatus+`</dd>
                </div>
                
                <div class="govuk-summary-list__row list-row">
                  <dt class="govuk-summary-list__key list-key">Submission date</dt>
                  <dd class="govuk-summary-list__value list-value">`+searchResult.submissionDate+`</dd>
                </div>
              </dl>
            </div>
          </div>
          
          <!-- General measure details card -->
          <div class="govuk-summary-card">
            <div class="govuk-summary-card__title-wrapper">
              <h2 class="govuk-summary-card__title">General measure details</h2>
            </div>
            <div class="govuk-summary-card__content">
              <dl class="govuk-summary-list">
                <div class="govuk-summary-list__row">
                  <dt class="govuk-summary-list__key">Supplier reference</dt>
                  <dd class="govuk-summary-list__value">`+searchResult.supplierReference+`</dd>
                </div>
                
                <div class="govuk-summary-list__row">
                  <dt class="govuk-summary-list__key">Notification period</dt>
                  <dd class="govuk-summary-list__value">`+searchResult.notificationPeriod+`</dd>
                </div>
                
                <div class="govuk-summary-list__row">
                  <dt class="govuk-summary-list__key">Purpose of notification</dt>
                  <dd class="govuk-summary-list__value">`+searchResult.purposeOfNotification+`</dd>
                </div>
                
                <div class="govuk-summary-list__row">
                  <dt class="govuk-summary-list__key">Date of completed installation</dt>
                  <dd class="govuk-summary-list__value">`+searchResult.dateOfCompletedInstallation+`</dd>
                </div>
              </dl>
            </div>
          </div>
          
          <!-- Property ddress card -->
          <div class="govuk-summary-card">
            <div class="govuk-summary-card__title-wrapper">
              <h2 class="govuk-summary-card__title">Property address</h2>
            </div>
            <div class="govuk-summary-card__content">
              <dl class="govuk-summary-list">
                <div class="govuk-summary-list__row">
                  <dt class="govuk-summary-list__key">Building name</dt>
                  <dd class="govuk-summary-list__value">`+searchResult.addressFields.buildingName+`</dd>
                </div>
                
                <div class="govuk-summary-list__row">
                  <dt class="govuk-summary-list__key">Building number</dt>
                  <dd class="govuk-summary-list__value">`+searchResult.addressFields.buildingNumber+`</dd>
                </div>
                
                <div class="govuk-summary-list__row">
                  <dt class="govuk-summary-list__key">flat name or number</dt>
                  <dd class="govuk-summary-list__value">`+searchResult.addressFields.flatNameOrNumber+`</dd>
                </div>
                
                <div class="govuk-summary-list__row">
                  <dt class="govuk-summary-list__key">Street name</dt>
                  <dd class="govuk-summary-list__value">`+searchResult.addressFields.streetName+`</dd>
                </div>
                
                <div class="govuk-summary-list__row">
                  <dt class="govuk-summary-list__key">Town</dt>
                  <dd class="govuk-summary-list__value">`+searchResult.addressFields.town+`</dd>
                </div>
                
                <div class="govuk-summary-list__row">
                  <dt class="govuk-summary-list__key">Postcode</dt>
                  <dd class="govuk-summary-list__value">`+searchResult.addressFields.postCode+`</dd>
                </div>
              </dl>
            </div>
          </div>
          
          <!-- Property details card -->
          <div class="govuk-summary-card">
            <div class="govuk-summary-card__title-wrapper">
              <h2 class="govuk-summary-card__title">Property details</h2>
            </div>
            <div class="govuk-summary-card__content">
              <dl class="govuk-summary-list">
                <div class="govuk-summary-list__row">
                  <dt class="govuk-summary-list__key">Unique property reference number (UPRN)</dt>
                  <dd class="govuk-summary-list__value">`+searchResult.UniquePropertyReferenceNumber+`</dd>
                </div>
                
                <div class="govuk-summary-list__row">
                  <dt class="govuk-summary-list__key">Starting SAP rating</dt>
                  <dd class="govuk-summary-list__value">`+searchResult.startingSAPRating+`</dd>
                </div>
                
                <div class="govuk-summary-list__row">
                  <dt class="govuk-summary-list__key">Floor area</dt>
                  <dd class="govuk-summary-list__value">`+searchResult.floorArea+`</dd>
                </div>
                
                <div class="govuk-summary-list__row">
                  <dt class="govuk-summary-list__key">Rural</dt>
                  <dd class="govuk-summary-list__value">`+searchResult.rural+`</dd>
                </div>
                
                <div class="govuk-summary-list__row">
                  <dt class="govuk-summary-list__key">Off gas</dt>
                  <dd class="govuk-summary-list__value">`+searchResult.offGas+`</dd>
                </div>
                
                <div class="govuk-summary-list__row">
                  <dt class="govuk-summary-list__key">Private domestic premises</dt>
                  <dd class="govuk-summary-list__value">`+searchResult.privateDomesticPremises+`</dd>
                </div>
                
                <div class="govuk-summary-list__row">
                  <dt class="govuk-summary-list__key">Tenure type</dt>
                  <dd class="govuk-summary-list__value">`+searchResult.tenureType+`</dd>
                </div>
                
                <div class="govuk-summary-list__row">
                  <dt class="govuk-summary-list__key">Property</dt>
                  <dd class="govuk-summary-list__value">`+searchResult.property+`</dd>
                </div>
                
                <div class="govuk-summary-list__row">
                  <dt class="govuk-summary-list__key">Eligibility type</dt>
                  <dd class="govuk-summary-list__value">`+searchResult.eligibilityType+`</dd>
                </div>
                
                <div class="govuk-summary-list__row">
                  <dt class="govuk-summary-list__key">Verification method</dt>
                  <dd class="govuk-summary-list__value">`+searchResult.verificationMethod+`</dd>
                </div>
                
                <div class="govuk-summary-list__row">
                  <dt class="govuk-summary-list__key">DWP reference number</dt>
                  <dd class="govuk-summary-list__value">`+searchResult.dwpReferenceNumber+`</dd>
                </div>
                
                <div class="govuk-summary-list__row">
                  <dt class="govuk-summary-list__key">Council Tax band</dt>
                  <dd class="govuk-summary-list__value">`+searchResult.councilTaxBand+`</dd>
                </div>
                
                <div class="govuk-summary-list__row">
                  <dt class="govuk-summary-list__key">PRS SAP band exception</dt>
                  <dd class="govuk-summary-list__value">`+searchResult.prsSAPBandException+`</dd>
                </div>
                
                <div class="govuk-summary-list__row">
                  <dt class="govuk-summary-list__key">Associated insulation MRN for heating measures</dt>
                  <dd class="govuk-summary-list__value">`+searchResult.associatedInsulationMRNforHeatingMeasures+`</dd>
                </div>
                
                <div class="govuk-summary-list__row">
                  <dt class="govuk-summary-list__key">Associated in-fill measure 1</dt>
                  <dd class="govuk-summary-list__value">`+searchResult.associatedInfillMeasure1+`</dd>
                </div>
                
                <div class="govuk-summary-list__row">
                  <dt class="govuk-summary-list__key">Associated in-fill measure 2</dt>
                  <dd class="govuk-summary-list__value">`+searchResult.associatedInfillMeasure2+`</dd>
                </div>
                
                <div class="govuk-summary-list__row">
                  <dt class="govuk-summary-list__key">Associated in-fill measure 3</dt>
                  <dd class="govuk-summary-list__value">`+searchResult.associatedInfillMeasure3+`</dd>
                </div>
                
                <div class="govuk-summary-list__row">
                  <dt class="govuk-summary-list__key">Flex referral route</dt>
                  <dd class="govuk-summary-list__value">`+searchResult.flexReferralRoute+`</dd>
                </div>
                
                <div class="govuk-summary-list__row">
                  <dt class="govuk-summary-list__key">LA declaration reference number</dt>
                  <dd class="govuk-summary-list__value">`+searchResult.laDeclarationReferenceNumber+`</dd>
                </div>
                
                <div class="govuk-summary-list__row">
                  <dt class="govuk-summary-list__key">Date of householder eligibility</dt>
                  <dd class="govuk-summary-list__value">`+searchResult.dateOfHouseholderEligibility+`</dd>
                </div>
                
                <div class="govuk-summary-list__row">
                  <dt class="govuk-summary-list__key">Percentage of property treated</dt>
                  <dd class="govuk-summary-list__value">`+searchResult.percentageOfPropertyTreated+`</dd>
                </div>
                
                <div class="govuk-summary-list__row">
                  <dt class="govuk-summary-list__key">Heating source</dt>
                  <dd class="govuk-summary-list__value">`+searchResult.heatingSource+`</dd>
                </div>
                
                <div class="govuk-summary-list__row">
                  <dt class="govuk-summary-list__key">Installer name</dt>
                  <dd class="govuk-summary-list__value">`+searchResult.installerName+`</dd>
                </div>
                
                <div class="govuk-summary-list__row">
                  <dt class="govuk-summary-list__key">Innovation measure number</dt>
                  <dd class="govuk-summary-list__value">`+searchResult.innovationMeasureNumber+`</dd>
                </div>
              </dl>
            </div>
          </div>

          <!-- TrustMark card -->
          <div class="govuk-summary-card">
            <div class="govuk-summary-card__title-wrapper">
              <h2 class="govuk-summary-card__title">TrustMark details</h2>
            </div>
            <div class="govuk-summary-card__content">
              <dl class="govuk-summary-list">
                <div class="govuk-summary-list__row">
                  <dt class="govuk-summary-list__key">Trustmark business licence number</dt>
                  <dd class="govuk-summary-list__value">`+searchResult.trustmarkBusinessLicenceNumber+`</dd>
                </div>

                <div class="govuk-summary-list__row">
                  <dt class="govuk-summary-list__key">Trustmark unique measure reference</dt>
                  <dd class="govuk-summary-list__value">`+searchResult.trustmarkUniqueMeasureReference+`</dd>
                </div>

                <div class="govuk-summary-list__row">
                  <dt class="govuk-summary-list__key">Trustmark lodged certificate ID</dt>
                  <dd class="govuk-summary-list__value">`+searchResult.trustmarkLodgedCertificateID+`</dd>
                </div>

                <div class="govuk-summary-list__row">
                  <dt class="govuk-summary-list__key">Trustmark project reference number</dt>
                  <dd class="govuk-summary-list__value">`+searchResult.trustmarkProjectReferenceNumber+`</dd>
                </div>

                <div class="govuk-summary-list__row">
                  <dt class="govuk-summary-list__key">TrustMark completed project cert ID</dt>
                  <dd class="govuk-summary-list__value">`+searchResult.trustMarkCompletedProjectCertID+`</dd>
                </div>
              </dl>
            </div>
          </div>
          `
        ;
      }
    }
    measureDetailsDiv.innerHTML += detail;
  }
}

// Hide the Start page
function hideStartPage() {
  // localStorage.setItem("hideStartPage", true);
  const hideStartPageCb = document.getElementById("hide-start-page");
  if (hideStartPageCb.checked) {
    // alert("checked");
    localStorage.setItem("hideStartPage", true);
  } else {
    // alert("You didn't check it! Let me check it for you.");
    localStorage.removeItem("hideStartPage");
  }
}

if (pageUrlPath === "/v05-4/measures/") {
  const hrefRedirect = document.getElementById('setPathOfV05Point4');
  if (localStorage.getItem("hideStartPage")) {
    hrefRedirect.href = "/v05-4/measures/search-measures/search-filters";
  } else {
    hrefRedirect.href = "/v05-4/measures/search-measures/";
  }
}

if (pageUrlPath === '/v03-5/signed-out-view'){
  document.getElementById('signInLi').classList.remove('hide');
}
if (pageUrlPath === '/v03-5/signed-in-no-ofgem-view'){
  document.getElementById('signOutLi').classList.remove('hide');

  const headUsername = document.getElementById('headerUsername');
  const parentOfUsername = headUsername.parentElement;
  parentOfUsername.classList.add('padding-top-zero');
}

// Check if status is selected
// function checkIfStatusIsSelected() {
//   return (
//     // document.getElementById('measure-status-none').onclick = function() {
//       var checked = document.querySelectorAll('#measure-status-none :checked');
//       var selected = [...checked].map(option => option.value);
//       alert(selected);
//     // }
//   )
// }

// Check MRN
function checkMRN() {
  const performSearch = document.getElementById('performSearch');
  const errorMRNSummary = document.getElementById('error-MRN-summary');
  const errorWithMRN = document.getElementById('errorWithMRN');
  const errorWithNothingSelected = document.getElementById('errorWithNothingSelected');
  const mrnErrorSection = document.getElementById('mrnErrorSection');
  const statusErrorSection = document.getElementById('statusErrorSection');
  const mrnFieldError = document.getElementById('mrn-field-error');
  const mrnFileFieldError = document.getElementById('mrn-file-field-error');
  const measureReferenceNumberInputField = document.getElementById('measure-reference-number');
  const emptyStatusFieldError = document.getElementById('empty-status-field-error');
  // const statusSelect = document.getElementById('measure-status-none');
  const statusSelect = document.getElementById('cboxesMeasureStatus');
  // const options = document.getElementById('measure-status-none').options;

  const optionsContainer = document.getElementById('cboxesMeasureStatus');
  const options = optionsContainer.getElementsByClassName('govuk-checkboxes__item');
  let count = 0;
  let selectedOptions = null;
  console.log('options.length', options.length);
  
  for (let i = 0; i < options.length; i++) {
    let option = options[i].querySelectorAll('input[type="checkbox"]:checked');
    if (option.length) {
      console.log('checked option', option);
      count++;
      console.log('count', count);
    }
    count > 0 ? selectedOptions = true : selectedOptions = false;
  }

  console.log('selectedOptions', selectedOptions);

  if ((document.getElementById("measure-reference-number").value.length > 1) && (document.getElementById("file-upload").value != "")) {
    window.scrollTo(0, 0);
    errorMRNSummary.classList.remove('hide');
    errorWithMRN.classList.remove('hide');
    mrnFieldError.classList.remove('hide');
    mrnFileFieldError.classList.remove('hide');
    mrnErrorSection.classList.add('govuk-form-group--error');
    measureReferenceNumberInputField.classList.add('govuk-input--error');

  } else if ((document.getElementById("measure-reference-number").value.length === 0) && (document.getElementById("file-upload").value === "") && (!selectedOptions)) {
    window.scrollTo(0, 0);
    document.getElementById("chck1").checked = true;
    document.getElementById("chck2").checked = true;
    errorMRNSummary.classList.remove('hide');
    errorWithNothingSelected.classList.remove('hide');
    mrnErrorSection.classList.add('govuk-form-group--error');
    errorWithNothingSelected.classList.remove('hide');
    statusErrorSection.classList.add('govuk-form-group--error');
    measureReferenceNumberInputField.classList.add('govuk-input--error');
    mrnFieldError.classList.remove('hide');
    mrnFileFieldError.classList.remove('hide');
    emptyStatusFieldError.classList.remove('hide');
    statusSelect.classList.add('select-error');

  } else {
    performSearch.href = "/v08/measures/search-measures/search-results";
  }
}
function checkMRN_12_2() {
  const performSearch = document.getElementById('performSearch');
  const errorMRNSummary = document.getElementById('error-MRN-summary');
  const errorWithMRN = document.getElementById('errorWithMRN');
  const errorWithNothingSelected = document.getElementById('errorWithNothingSelected');
  const mrnErrorSection = document.getElementById('mrnErrorSection');
  const statusErrorSection = document.getElementById('statusErrorSection');
  const mrnFieldError = document.getElementById('mrn-field-error');
  const mrnFileFieldError = document.getElementById('mrn-file-field-error');
  const measureReferenceNumberInputField = document.getElementById('measure-reference-number');
  const emptyStatusFieldError = document.getElementById('empty-status-field-error');
  // const statusSelect = document.getElementById('measure-status-none');
  const statusSelect = document.getElementById('cboxesMeasureStatus');
  // const options = document.getElementById('measure-status-none').options;

  const optionsContainer = document.getElementById('cboxesMeasureStatus');
  const options = optionsContainer.getElementsByClassName('govuk-checkboxes__item');
  let count = 0;
  let selectedOptions = null;
  console.log('options.length', options.length);
  
  for (let i = 0; i < options.length; i++) {
    let option = options[i].querySelectorAll('input[type="checkbox"]:checked');
    if (option.length) {
      console.log('checked option', option);
      count++;
      console.log('count', count);
    }
    count > 0 ? selectedOptions = true : selectedOptions = false;
  }

  console.log('selectedOptions', selectedOptions);

  if ((document.getElementById("measure-reference-number").value.length > 1) && (document.getElementById("file-upload").value != "")) {
    window.scrollTo(0, 0);
    errorMRNSummary.classList.remove('hide');
    errorWithMRN.classList.remove('hide');
    mrnFieldError.classList.remove('hide');
    mrnFileFieldError.classList.remove('hide');
    mrnErrorSection.classList.add('govuk-form-group--error');
    measureReferenceNumberInputField.classList.add('govuk-input--error');

  } else if ((document.getElementById("measure-reference-number").value.length === 0) && (document.getElementById("file-upload").value === "") && (!selectedOptions)) {
    window.scrollTo(0, 0);
    document.getElementById("chck1").checked = true;
    document.getElementById("chck2").checked = true;
    errorMRNSummary.classList.remove('hide');
    errorWithNothingSelected.classList.remove('hide');
    mrnErrorSection.classList.add('govuk-form-group--error');
    errorWithNothingSelected.classList.remove('hide');
    statusErrorSection.classList.add('govuk-form-group--error');
    measureReferenceNumberInputField.classList.add('govuk-input--error');
    mrnFieldError.classList.remove('hide');
    mrnFileFieldError.classList.remove('hide');
    emptyStatusFieldError.classList.remove('hide');
    statusSelect.classList.add('select-error');

  } else {
    performSearch.href = "/v12-2/measures/search-measures/search-results";
  }
}

// Cookies banner simulation
function acceptCookiesBanner() {
  const cookiesBanner = document.getElementById('cookiesBanner');
  cookiesBanner.style.display = 'none';
  localStorage.setItem('acceptCookie', true);
}
function rejectCookiesBanner() {
  const cookiesBanner = document.getElementById('cookiesBanner');
  cookiesBanner.style.display = 'none';
  localStorage.setItem('acceptCookie', false);
}
if ((pageUrlPath === '/v08/mandatory-feature-documentation/cookies-policy') || (pageUrlPath === '/v10/mandatory-feature-documentation/cookies-policy') || (pageUrlPath === '/v11/mandatory-feature-documentation/cookies-policy') || (pageUrlPath === '/v12-2/mandatory-feature-documentation/cookies-policy')) {
  if (localStorage.getItem('aaceptCookie') === true) {
    document.getElementById('analyticsCookieYes').checked = true;
  } else if (localStorage.getItem('aaceptCookie') === false) {
    document.getElementById('analyticsCookieNo').checked = true;
  } else {
    document.getElementById('analyticsCookieYes').checked = false;
    document.getElementById('analyticsCookieNo').checked = false;
  }
}

// Internal Search

// Check MRN
function intCheckMRN() {
  const performSearch = document.getElementById('performSearch');
  const errorMRNSummary = document.getElementById('error-MRN-summary');
  const errorWithMRN = document.getElementById('errorWithMRN');
  const errorWithNothingSelected = document.getElementById('errorWithNothingSelected');
  const supplierErrorSection = document.getElementById('supplierErrorSection');
  const mrnErrorSection = document.getElementById('mrnErrorSection');
  const statusErrorSection = document.getElementById('statusErrorSection');
  const notificationPeriodErrorSection = document.getElementById('notificationPeriodErrorSection');
  const postcodeErrorSection = document.getElementById('postcodeErrorSection');
  const supplierFieldError = document.getElementById('supplier-field-error');
  const mrnFieldError = document.getElementById('mrn-field-error');
  const mrnFileFieldError = document.getElementById('mrn-file-field-error');
  const measureReferenceNumberInputField = document.getElementById('measure-reference-number');
  const emptyStatusFieldError = document.getElementById('empty-status-field-error');
  const notificationPeriodFieldError = document.getElementById('notification-period-field-error');
  const postcodeFieldError = document.getElementById('postcode-field-error');

  // const statusSelect = document.getElementById('measure-status-none');
  // const statusSelect = document.getElementById('cboxesMeasureStatus');
  // const options = document.getElementById('measure-status-none').options;

  // const optionsContainer = document.getElementById('cboxesMeasureStatus');
  // const options = optionsContainer.getElementsByClassName('govuk-checkboxes__item');
  // let count = 0;
  // let selectedOptions = null;
  // console.log('options.length', options.length);
  
  // for (let i = 0; i < options.length; i++) {
  //   let option = options[i].querySelectorAll('input[type="checkbox"]:checked');
  //   if (option.length) {
  //     console.log('checked option', option);
  //     count++;
  //     console.log('count', count);
  //   }
  //   count > 0 ? selectedOptions = true : selectedOptions = false;
  // }


  // console.log('selectedOptions', selectedOptions);

  if((document.getElementById("measure-reference-number").value.length > 1) && (document.getElementById("file-upload").value != "")) {
    window.scrollTo(0, 0);
    errorMRNSummary.classList.remove('hide');
    errorWithMRN.classList.remove('hide');

    supplierFieldError.classList.remove('hide');
    mrnFieldError.classList.remove('hide');
    mrnFileFieldError.classList.remove('hide');
    mrnErrorSection.classList.add('govuk-form-group--error');
    measureReferenceNumberInputField.classList.add('govuk-input--error');
  } else if ((document.getElementById("measure-reference-number").value.length === 0) && (document.getElementById("file-upload").value === "") 
            // && (!selectedOptions)
            ) {
    window.scrollTo(0, 0);
    document.getElementById("chck1").checked = true;
    document.getElementById("chck2").checked = true;
    errorMRNSummary.classList.remove('hide');
    errorWithNothingSelected.classList.remove('hide');

    supplierErrorSection.classList.add('govuk-form-group--error');
    mrnErrorSection.classList.add('govuk-form-group--error');
    errorWithNothingSelected.classList.remove('hide');
    statusErrorSection.classList.add('govuk-form-group--error');
    notificationPeriodErrorSection.classList.add('govuk-form-group--error');
    postcodeErrorSection.classList.add('govuk-form-group--error');
    measureReferenceNumberInputField.classList.add('govuk-input--error');
    supplierFieldError.classList.remove('hide');
    mrnFieldError.classList.remove('hide');
    mrnFileFieldError.classList.remove('hide');
    emptyStatusFieldError.classList.remove('hide');
    notificationPeriodFieldError.classList.remove('hide');
    postcodeFieldError.classList.remove('hide');
    // statusSelect.classList.add('select-error');
  } else {
    performSearch.href = "/internal/v02-0/search-measures/search-results";
  }
}


function intCheckMRN21() {
  const performSearch = document.getElementById('performSearch');
  const errorMRNSummary = document.getElementById('error-MRN-summary');
  const errorWithMRN = document.getElementById('errorWithMRN');
  const errorWithNothingSelected = document.getElementById('errorWithNothingSelected');
  const supplierErrorSection = document.getElementById('supplierErrorSection');
  const mrnErrorSection = document.getElementById('mrnErrorSection');
  const statusErrorSection = document.getElementById('statusErrorSection');
  const notificationPeriodErrorSection = document.getElementById('notificationPeriodErrorSection');
  const postcodeErrorSection = document.getElementById('postcodeErrorSection');
  const supplierFieldError = document.getElementById('supplier-field-error');
  const mrnFieldError = document.getElementById('mrn-field-error');
  const mrnFileFieldError = document.getElementById('mrn-file-field-error');
  const measureReferenceNumberInputField = document.getElementById('measure-reference-number');
  const emptyStatusFieldError = document.getElementById('empty-status-field-error');
  const notificationPeriodFieldError = document.getElementById('notification-period-field-error');
  const postcodeFieldError = document.getElementById('postcode-field-error');

  if((document.getElementById("measure-reference-number").value.length > 1) && (document.getElementById("file-upload").value != "")) {
    window.scrollTo(0, 0);
    errorMRNSummary.classList.remove('hide');
    errorWithMRN.classList.remove('hide');

    supplierFieldError.classList.remove('hide');
    mrnFieldError.classList.remove('hide');
    mrnFileFieldError.classList.remove('hide');
    mrnErrorSection.classList.add('govuk-form-group--error');
    measureReferenceNumberInputField.classList.add('govuk-input--error');
  } else if ((document.getElementById("measure-reference-number").value.length === 0) && (document.getElementById("file-upload").value === "") 
            // && (!selectedOptions)
            ) {
    window.scrollTo(0, 0);
    document.getElementById("chck1").checked = true;
    document.getElementById("chck2").checked = true;
    errorMRNSummary.classList.remove('hide');
    errorWithNothingSelected.classList.remove('hide');

    supplierErrorSection.classList.add('govuk-form-group--error');
    mrnErrorSection.classList.add('govuk-form-group--error');
    errorWithNothingSelected.classList.remove('hide');
    statusErrorSection.classList.add('govuk-form-group--error');
    notificationPeriodErrorSection.classList.add('govuk-form-group--error');
    postcodeErrorSection.classList.add('govuk-form-group--error');
    measureReferenceNumberInputField.classList.add('govuk-input--error');
    supplierFieldError.classList.remove('hide');
    mrnFieldError.classList.remove('hide');
    mrnFileFieldError.classList.remove('hide');
    emptyStatusFieldError.classList.remove('hide');
    notificationPeriodFieldError.classList.remove('hide');
    postcodeFieldError.classList.remove('hide');
    // statusSelect.classList.add('select-error');
  } else {
    performSearch.href = "/internal/v02-1/search-measures/search-results";
  }
}

// selectAllResultsCBs()
function selectAllResultsCBs() {
    console.log('SELECT ALL RESULTS CBs');
    // results-checkboxes
    let clist=document.getElementsByClassName("results-checkboxes");
    for (var i = 0; i < clist.length; ++i) { 
      // clist[i].checked = "checked";
      clist[i].checked = !clist[i].checked;
    }
}

// INTERNAL AUTOMATIC LATE EXTENSION function
function supplierChange() {
  document.getElementById("selectAsupplier").classList.add('hidden');
  document.getElementById("AVR").classList.add('hidden');
  document.getElementById("BGT").classList.add('hidden');
  document.getElementById("BLB").classList.add('hidden');
  document.getElementById("BRI").classList.add('hidden');
  document.getElementById("COP").classList.add('hidden');
  document.getElementById("ECY").classList.add('hidden');
  document.getElementById("EDF").classList.add('hidden');
  document.getElementById("EEN").classList.add('hidden');
  document.getElementById("EGE").classList.add('hidden');
  document.getElementById("EON").classList.add('hidden');
  document.getElementById("ESB").classList.add('hidden');
  document.getElementById("FLO").classList.add('hidden');
  document.getElementById("FOX").classList.add('hidden');
  document.getElementById("FUL").classList.add('hidden');
  document.getElementById("GNE").classList.add('hidden');
  document.getElementById("HUD").classList.add('hidden');
  document.getElementById("IGL").classList.add('hidden');
  document.getElementById("ISP").classList.add('hidden');
  document.getElementById("NPW").classList.add('hidden');
  document.getElementById("OCT").classList.add('hidden');
  document.getElementById("OVO").classList.add('hidden');
  document.getElementById("PES").classList.add('hidden');
  document.getElementById("PLA").classList.add('hidden');
  document.getElementById("RHE").classList.add('hidden');
  document.getElementById("SHL").classList.add('hidden');
  document.getElementById("SOE").classList.add('hidden');
  document.getElementById("SPK").classList.add('hidden');
  document.getElementById("SPW").classList.add('hidden');
  document.getElementById("SSE").classList.add('hidden');
  document.getElementById("TNK").classList.add('hidden');
  document.getElementById("TOE").classList.add('hidden');
  document.getElementById("UPL").classList.add('hidden');
  document.getElementById("UTA").classList.add('hidden');
  document.getElementById("UTW").classList.add('hidden');
  document.getElementById("XEN").classList.add('hidden');

  if (document.getElementById("supplierList").value === "select-a-supplier"){
    document.getElementById("selectAsupplier").classList.remove('hidden');
  }
  if (document.getElementById("supplierList").value === "AVR") {
    document.getElementById("AVR").classList.remove('hidden');
  }
  if (document.getElementById("supplierList").value === "BGT") {
    document.getElementById("BGT").classList.remove('hidden');
  }
  if (document.getElementById("supplierList").value === "BLB") {
    document.getElementById("BLB").classList.remove('hidden');
  }   
  if (document.getElementById("supplierList").value === "BRI") {
    document.getElementById("BRI").classList.remove('hidden');
  }
  if (document.getElementById("supplierList").value === "COP") {
    document.getElementById("COP").classList.remove('hidden');
  }
  if (document.getElementById("supplierList").value === "ECY") {
    document.getElementById("ECY").classList.remove('hidden');
  }
  if (document.getElementById("supplierList").value === "EDF") {
    document.getElementById("EDF").classList.remove('hidden');
  }
  if (document.getElementById("supplierList").value === "EEN") {
    document.getElementById("EEN").classList.remove('hidden');
  }
  if (document.getElementById("supplierList").value === "EGE") {
    document.getElementById("EGE").classList.remove('hidden');
  }
  if (document.getElementById("supplierList").value === "EON") {
    document.getElementById("EON").classList.remove('hidden');
  }
  if (document.getElementById("supplierList").value === "ESB") {
    document.getElementById("ESB").classList.remove('hidden');
  }
  if (document.getElementById("supplierList").value === "FLO") {
    document.getElementById("FLO").classList.remove('hidden');
  }
  if (document.getElementById("supplierList").value === "FOX") {
    document.getElementById("FOX").classList.remove('hidden');
  }
  if (document.getElementById("supplierList").value === "FUL") {
    document.getElementById("FUL").classList.remove('hidden');
  }
  if (document.getElementById("supplierList").value === "GNE") {
    document.getElementById("GNE").classList.remove('hidden');
  }
  if (document.getElementById("supplierList").value === "HUD") {
    document.getElementById("HUD").classList.remove('hidden');
  }
  if (document.getElementById("supplierList").value === "IGL") {
    document.getElementById("IGL").classList.remove('hidden');
  }
  if (document.getElementById("supplierList").value === "ISP") {
    document.getElementById("ISP").classList.remove('hidden');
  }
  if (document.getElementById("supplierList").value === "NPW") {
    document.getElementById("NPW").classList.remove('hidden');
  }
  if (document.getElementById("supplierList").value === "OCT") {
    document.getElementById("OCT").classList.remove('hidden');
  }
  if (document.getElementById("supplierList").value === "OVO") {
    document.getElementById("OVO").classList.remove('hidden');
  }
  if (document.getElementById("supplierList").value === "PES") {
    document.getElementById("PES").classList.remove('hidden');
  }  
  if (document.getElementById("supplierList").value === "PLA") {
    document.getElementById("PLA").classList.remove('hidden');
  }
  if (document.getElementById("supplierList").value === "RHE") {
    document.getElementById("RHE").classList.remove('hidden');
  }
  if (document.getElementById("supplierList").value === "SHL") {
    document.getElementById("SHL").classList.remove('hidden');
  }
  if (document.getElementById("supplierList").value === "SOE") {
    document.getElementById("SOE").classList.remove('hidden');
  }
  if (document.getElementById("supplierList").value === "SPK") {
    document.getElementById("SPK").classList.remove('hidden');
  }
  if (document.getElementById("supplierList").value === "SPW") {
    document.getElementById("SPW").classList.remove('hidden');
  }
  if (document.getElementById("supplierList").value === "SSE") {
    document.getElementById("SSE").classList.remove('hidden');
  }
  if (document.getElementById("supplierList").value === "TNK") {
    document.getElementById("TNK").classList.remove('hidden');
  }
  if (document.getElementById("supplierList").value === "TOE") {
    document.getElementById("TOE").classList.remove('hidden');
  }
  if (document.getElementById("supplierList").value === "UPL") {
    document.getElementById("UPL").classList.remove('hidden');
  }
  if (document.getElementById("supplierList").value === "UTA") {
    document.getElementById("UTA").classList.remove('hidden');
  }
  if (document.getElementById("supplierList").value === "UTW") {
    document.getElementById("UTW").classList.remove('hidden');
  }
  if (document.getElementById("supplierList").value === "XEN") {
    document.getElementById("XEN").classList.remove('hidden');
  }
}

// External: Search measure processing errors
function checkME() {
  console.log('Search measure processing errors');
  
  const performSearch = document.getElementById('performSearch');
  const errorMRNSummary = document.getElementById('error-MRN-summary');
  const errorWithMRN = document.getElementById('errorWithMRN');
  const mrnFieldError = document.getElementById('mrn-field-error');
  const mrnFileFieldError = document.getElementById('mrn-file-field-error');
  const measureReferenceNumberInputField = document.getElementById('measure-reference-number');

  if((document.getElementById("measure-reference-number").value.length > 1) && (document.getElementById("file-upload").value != "")) {
    window.scrollTo(0, 0);
    errorMRNSummary.classList.remove('hide');
    errorWithMRN.classList.remove('hide');
    mrnFieldError.classList.remove('hide');
    mrnFileFieldError.classList.remove('hide');
    measureReferenceNumberInputField.classList.add('govuk-input--error');
  } else if ((document.getElementById("measure-reference-number").value.length === 0) && (document.getElementById("file-upload").value === "") 
            // && (!selectedOptions)
          ) {
    window.scrollTo(0, 0);
    document.getElementById("chck1").checked = true;
    document.getElementById("chck2").checked = true;
    document.getElementById("chck3").checked = true;
    document.getElementById("chck4").checked = true;
    errorMRNSummary.classList.remove('hide');
    errorWithNothingSelected.classList.remove('hide');

    measureReferenceNumberInputField.classList.add('govuk-input--error');
    mrnFieldError.classList.remove('hide');
    mrnFileFieldError.classList.remove('hide');
  } else {
    performSearch.href = "/v10/measures/search-measure-errors/search-results";
  }
}

function checkME11() {
  console.log('Search measure processing errors');
  
  const performSearch = document.getElementById('performSearch');
  const errorMRNSummary = document.getElementById('error-MRN-summary');
  const errorWithMRN = document.getElementById('errorWithMRN');
  const mrnFieldError = document.getElementById('mrn-field-error');
  const mrnFileFieldError = document.getElementById('mrn-file-field-error');
  const measureReferenceNumberInputField = document.getElementById('measure-reference-number');

  if((document.getElementById("measure-reference-number").value.length > 1) && (document.getElementById("file-upload").value != "")) {
    window.scrollTo(0, 0);
    errorMRNSummary.classList.remove('hide');
    errorWithMRN.classList.remove('hide');
    mrnFieldError.classList.remove('hide');
    mrnFileFieldError.classList.remove('hide');
    measureReferenceNumberInputField.classList.add('govuk-input--error');
  } else if ((document.getElementById("measure-reference-number").value.length === 0) && (document.getElementById("file-upload").value === "") 
            // && (!selectedOptions)
          ) {
    window.scrollTo(0, 0);
    document.getElementById("chck1").checked = true;
    document.getElementById("chck2").checked = true;
    document.getElementById("chck3").checked = true;
    document.getElementById("chck4").checked = true;
    errorMRNSummary.classList.remove('hide');
    errorWithNothingSelected.classList.remove('hide');

    measureReferenceNumberInputField.classList.add('govuk-input--error');
    mrnFieldError.classList.remove('hide');
    mrnFileFieldError.classList.remove('hide');
  } else {
    performSearch.href = "/v11/measures/search-measure-errors/search-results";
  }
}

function checkME12_2() {
  console.log('Search measure processing errors');
  
  const performSearch = document.getElementById('performSearch');
  const errorMRNSummary = document.getElementById('error-MRN-summary');
  const errorWithMRN = document.getElementById('errorWithMRN');
  const mrnFieldError = document.getElementById('mrn-field-error');
  const mrnFileFieldError = document.getElementById('mrn-file-field-error');
  const measureReferenceNumberInputField = document.getElementById('measure-reference-number');

  if((document.getElementById("measure-reference-number").value.length > 1) && (document.getElementById("file-upload").value != "")) {
    window.scrollTo(0, 0);
    errorMRNSummary.classList.remove('hide');
    errorWithMRN.classList.remove('hide');
    mrnFieldError.classList.remove('hide');
    mrnFileFieldError.classList.remove('hide');
    measureReferenceNumberInputField.classList.add('govuk-input--error');
  } else if ((document.getElementById("measure-reference-number").value.length === 0) && (document.getElementById("file-upload").value === "") 
            // && (!selectedOptions)
          ) {
    window.scrollTo(0, 0);
    document.getElementById("chck1").checked = true;
    document.getElementById("chck2").checked = true;
    document.getElementById("chck3").checked = true;
    document.getElementById("chck4").checked = true;
    errorMRNSummary.classList.remove('hide');
    errorWithNothingSelected.classList.remove('hide');

    measureReferenceNumberInputField.classList.add('govuk-input--error');
    mrnFieldError.classList.remove('hide');
    mrnFileFieldError.classList.remove('hide');
  } else {
    performSearch.href = "/v12-2/measures/search-measure-errors/search-results";
  }
}


function otherSelected(status) {
  console.log('status', status);
  if (status === 'Other') {
    console.log('show text input for Other');
    const otherStatus = document.getElementById('otherStatus').classList.remove("hide");
  } else {
    console.log('hide Other text input');
    const otherStatus = document.getElementById('otherStatus').classList.add("hide");
  }
}
