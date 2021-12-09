function getAccount() {
  const account = Accounts.find({ id: req.params.id }, (err, account) => {
    console.log(err, account);
  });
  return account;
}

module.exports = { getAccount };
