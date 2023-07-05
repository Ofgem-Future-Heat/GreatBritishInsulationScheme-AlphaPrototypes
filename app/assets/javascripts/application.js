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



// ############################################
// ############## Internal Users ##############
// ############################################
if (document.getElementById("secondaryNav") && pageUrlPath === '/internal/') {
  console.log('LOADED');
  document.getElementById("secondaryNav").style.display = 'none';
}

const username = "Cainan Able";

if (document.getElementById('headerUsername')) document.getElementById('headerUsername').innerText = username;
if (document.getElementById('welcomeUsernameMessage')) document.getElementById('welcomeUsernameMessage').innerText = username;

// Get External user details
function viewExternalUserDetails(accountName, username, title, firstname, middlename, lastname, jobTitle, emailAddress, telephoneNumber, userType) {
  localStorage.setItem('ext_accountName', accountName);
  localStorage.setItem('ext_username', username);
  localStorage.setItem('ext_title', title);
  localStorage.setItem('ext_firstname', firstname);
  localStorage.setItem('ext_middlename', middlename);
  localStorage.setItem('ext_lastname', lastname);
  localStorage.setItem('ext_jobTitle', jobTitle);
  localStorage.setItem('ext_emailAddress', emailAddress);
  localStorage.setItem('ext_telephoneNumber', telephoneNumber);
  localStorage.setItem('ext_userType', userType);
}

// Set External user details
if (pageUrlPath === '/internal/v01-1/external-users/view-external-details') {
  document.getElementById('accountName').innerText = localStorage.getItem('ext_accountName');
  document.getElementById('username').innerText = localStorage.getItem('ext_username');
  document.getElementById('title').innerText = localStorage.getItem('ext_title');
  document.getElementById('firstname').innerText = localStorage.getItem('ext_firstname');
  document.getElementById('middlename').innerText = localStorage.getItem('ext_middlename');
  document.getElementById('lastname').innerText = localStorage.getItem('ext_lastname');
  document.getElementById('jobTitle').innerText = localStorage.getItem('ext_jobTitle');
  document.getElementById('emailAddress').innerText = localStorage.getItem('ext_emailAddress');
  document.getElementById('telephoneNumber').innerText = localStorage.getItem('ext_telephoneNumber');
  document.getElementById('userType').innerText = localStorage.getItem('ext_userType');
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




// Get Internal user details
function viewInternalUserDetails(username, title, firstname, middlename, lastname, jobTitle, emailAddress, telephoneNumber, userType) {
  localStorage.setItem('int_username', username);
  localStorage.setItem('int_title', title);
  localStorage.setItem('int_firstname', firstname);
  localStorage.setItem('int_middlename', middlename);
  localStorage.setItem('int_lastname', lastname);
  localStorage.setItem('int_jobTitle', jobTitle);
  localStorage.setItem('int_emailAddress', emailAddress);
  localStorage.setItem('int_telephoneNumber', telephoneNumber);
  localStorage.setItem('int_userType', userType);
}

// Set Internal user details
if (pageUrlPath === '/internal/v01-1/internal-users/view-internal-details') {
  document.getElementById('username').innerText = localStorage.getItem('int_username');
  document.getElementById('title').innerText = localStorage.getItem('int_title');
  document.getElementById('firstname').innerText = localStorage.getItem('int_firstname');
  document.getElementById('middlename').innerText = localStorage.getItem('int_middlename');
  document.getElementById('lastname').innerText = localStorage.getItem('int_lastname');
  document.getElementById('jobTitle').innerText = localStorage.getItem('int_jobTitle');
  document.getElementById('emailAddress').innerText = localStorage.getItem('int_emailAddress');
  document.getElementById('telephoneNumber').innerText = localStorage.getItem('int_telephoneNumber');
  document.getElementById('userType').innerText = localStorage.getItem('int_userType');
}