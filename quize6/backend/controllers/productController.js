function saveProducts() {
  const newProducts = {
    Name: "",
    Price: "",
  };

  Products.save()
    .then((result) => console.log(result))
    .catch((err) => console.log(err));
}

module.exports = { saveProducts };
