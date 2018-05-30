function Product(name, manufacturer, price) {
    this.id = nextId();
    this.name = name;
    this.manufacturer = manufacturer;
    this.price = price;
}

module.exports = {
    getPasswd: (name) => {
        (async () => {
            var products = await User.findAll({
                attributes: ['passwd'],
                where: {
                    name: name,
                }
            });
        })();
    }
};