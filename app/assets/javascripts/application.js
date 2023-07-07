//
// For guidance on how to add JavaScript see:
// https://prototype-kit.service.gov.uk/docs/adding-css-javascript-and-images
//

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
  }
];

// Build external user list
if (pageUrlPath === '/internal/v01-1/external-users/'){
  for (let i = 0; i < externalUsers.length; i++) {
    if (document.getElementById('extUsers')) {
      document.getElementById('extUsers').innerHTML += `
        <tr class="govuk-table__row">
          <td class="govuk-table__cell">` + externalUsers[i].supplierName + `</td>
          <td class="govuk-table__cell">` + externalUsers[i].firstName + `</td>
          <td class="govuk-table__cell">` + externalUsers[i].lastName + `</td>
          <td scope="row" class="govuk-table__header">` + externalUsers[i].emailAddress + `</td>
          <td class="govuk-table__cell">` + externalUsers[i].userType + `</td>
          <td class="govuk-table__cell">
            <a  class="govuk-link" 
                href="view-external-details" 
                onclick="viewExternalUserDetails(
                  '` + externalUsers[i].username + `',
                  '` + externalUsers[i].supplierName + `',
                  '` + externalUsers[i].title + `',
                  '` + externalUsers[i].firstName + `',
                  '` + externalUsers[i].middleName + `',
                  '` + externalUsers[i].lastName + `',
                  '` + externalUsers[i].emailAddress + `',
                  '` + externalUsers[i].telephoneNumber + `',
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
    "jobTitle": "Quality Assurance",
    "emailAddress": "andrew.johnstone@orgmail.com",
    "telephoneNumber": "07115552333",
    "userType": "Internal admin"
  }
];

// Build internal user list
if (pageUrlPath === '/internal/v01-1/internal-users/'){
  for (let i = 0; i < internalUsers.length; i++) {
    if (document.getElementById('intUsers')) {
      document.getElementById('intUsers').innerHTML += `
        <tr class="govuk-table__row">
          <td class="govuk-table__cell">` + internalUsers[i].username + `</td>
          <td class="govuk-table__cell">` + internalUsers[i].firstName + `</td>
          <td class="govuk-table__cell">` + internalUsers[i].lastName + `</td>
          <td scope="row" class="govuk-table__header">` + internalUsers[i].emailAddress + `</td>
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
    jobTitle, 
    emailAddress, 
    telephoneNumber,
    userType) {
  localStorage.setItem('int_username', username);
  localStorage.setItem('int_title', title);
  localStorage.setItem('int_firstName', firstName);
  localStorage.setItem('int_middleName', middleName);
  localStorage.setItem('int_lastName', lastName);
  localStorage.setItem('int_jobTitle', jobTitle);
  localStorage.setItem('int_emailAddress', emailAddress);
  localStorage.setItem('int_telephoneNumber', telephoneNumber);
  localStorage.setItem('int_userType', userType);
}

// Set Internal user details
if (pageUrlPath === '/internal/v01-1/internal-users/view-internal-details') {
  document.getElementById('username').innerText = localStorage.getItem('int_username');
  document.getElementById('title').innerText = localStorage.getItem('int_title');
  document.getElementById('firstName').innerText = localStorage.getItem('int_firstName');
  document.getElementById('middleName').innerText = localStorage.getItem('int_middleName');
  document.getElementById('lastName').innerText = localStorage.getItem('int_lastName');
  document.getElementById('jobTitle').innerText = localStorage.getItem('int_jobTitle');
  document.getElementById('emailAddress').innerText = localStorage.getItem('int_emailAddress');
  document.getElementById('telephoneNumber').innerText = localStorage.getItem('int_telephoneNumber');
  document.getElementById('userType').innerText = localStorage.getItem('int_userType');
}


// Accounts ############
// #####################
const accounts = [
  {
    "supplierName":           "ECO",
    "supplierLicenceNumber":  ["1234567890", "65748390120"]
  },{
    "supplierName":           "EON",
    "supplierLicenceNumber":  ["9876543618"]
  }
];

// Build accounts list
if (pageUrlPath === '/internal/v01-1/accounts/'){
  for (let i = 0; i < accounts.length; i++) {
    
    for (let j = 0; j < accounts[i].supplierLicenceNumber.length; j++) {
      console.log('licenceNumber(s):',i, accounts[i].supplierLicenceNumber[j]);
      // accounts[i].supplierLicenceNumber.length > 1 ? `<span>` + accounts[i].supplierLicenceNumber[j] + `</span>
    };
    
    if (document.getElementById('accountsList')) {
      document.getElementById('accountsList').innerHTML += `
        <tr class="govuk-table__row">
          <td class="govuk-table__cell">` + accounts[i].supplierName + `</td>
          <td class="govuk-table__cell">` + accounts[i].supplierLicenceNumber + `</td>
          <td class="govuk-table__cell">
            <a  class="govuk-link" 
                href="view-account-details" 
                onclick="viewAccountDetails(
                  '` + accounts[i].supplierName + `',
                  '` + accounts[i].supplierLicenceNumber + `'
                )">View
            </a>
          </td>
        </tr>
      `;
    }
  }
}

// Get account details
function viewAccountDetails(supplierName, supplierLicenceNumber) {
  localStorage.setItem('supplierName', supplierName);
  localStorage.setItem('supplierLicenceNumber', supplierLicenceNumber);
}

// Set account details
if (pageUrlPath === '/internal/v01-1/accounts/view-account-details') {
  document.getElementById('supplierName').innerText = localStorage.getItem('supplierName');
  document.getElementById('supplierLicenceNumber').innerText = localStorage.getItem('supplierLicenceNumber');
}

let num = 0;
// add another supplier licence
function addAnotherSupplierLicence() {
  if (document.getElementById('additionalLicenceNumbers')) {
    document.getElementById('additionalLicenceNumbers').innerHTML += `
    <div id="licenceNumber${num+1}">
      <input class="govuk-input govuk-!-width-full remove-button-supplement" id="supplierLicenceNumber${num+1}" name="supplierLicenceNumber${num+1}" type="text" autocomplete="supplierLicenceNumber${num+1}">
      <button class="govuk-button govuk-button--secondary remove-button" id="${num+1}" data-module="govuk-button" onclick="removeSupplierLicenceNumber(id)">X</button>
    </div>
    `;
  }
  num++;
}

function removeSupplierLicenceNumber(id) {
  const element = document.getElementById("licenceNumber"+id);
  element.remove();
}