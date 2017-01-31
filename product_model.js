var _product = [
    {
        id: 1,
        name: 'Foo'
    },
    {
        id: 2,
        name: 'Bar'
    },
    {
        id: 3,
        name: 'Bazz'
    }
];

module.exports = {
    getProducts: function(){
        return _product;
    },
    deleteProduct: function(id){
        var toDelete = this.getProducts().filter(function(item){
            return item.id===id;
        })[0];
        var index = this.getProducts().indexOf(toDelete);
        this.getProducts().splice(index, 1);
    },
    editProduct: function(id, newName){
        var toEdit = this.getProducts().filter(function(item){
            return item.id===id;
        })[0];
        var index = this.getProducts().indexOf(toEdit)
        this.getProducts()[index].name=newName;
    },
    add: function(myName){
        var myId = this.getProducts().length;
        this.getProducts.push({id: myId, name: myName})
    }

};