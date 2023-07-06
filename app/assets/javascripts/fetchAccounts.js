console.log('Fetch Accounts is loaded');
var request = new XMLHttpRequest();
request.open('GET', '/public/javascripts/accounts.js', true);

request.onload = function() {
  var errorLoadingAccountsDiv = document.getElementById('errorLoadingAccountsDiv');
  var errorLoadingAccountsText = document.getElementById('errorLoadingAccountsText');
  var account = document.getElementById('account');
 
  if (this.status >= 200 && this.status < 400) {
    // Success!
    console.log('success: accounts loaded')

    if (errorLoadingAccountsDiv && account) {
      errorLoadingAccountsDiv.classList.add('hidden');
      account.classList.remove('hidden');
      var accounts = this.response;
      console.log(':: accounts', accounts);
    }
  } else {
    // We reached our target server, but it returned an error
    console.log('We reached our target server, but it returned an error')

    if (errorLoadingAccountsDiv && errorLoadingAccountsText && account) {
      errorLoadingAccountsText.innerHTML = "We are currently unable to load the list of accounts";
      errorLoadingAccountsDiv.classList.remove('hidden');
      account.classList.add('hidden');
    }
  }
};

request.onerror = function() {
  // There was a connection error of some sort
};

request.send();
function populateAccountSelect() {
  // console.log('populateSelect called');
//   THE JSON ARRAY.
// console.log('accounts', accounts);
  var accountList = document.getElementById('account');
  if (accountList)
    for (var i = 0; i < accounts.length; i++) {
      // POPULATE SELECT ELEMENT WITH JSON.
    //   console.log('accounts:', accounts[i]);
      accountList.innerHTML = accountList.innerHTML +
        '<option value="' + accounts[i] + '">' + accounts[i] + '</option>';
    }
}

populateAccountSelect(); 

