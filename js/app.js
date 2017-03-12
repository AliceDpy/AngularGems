(function(){
  var app = angular.module('store', []);
  app.controller('StoreController', function(){
    //our code here
    this.products = gems;
  });

var gems = [{
    name: 'Dodecahedron',
    price: 2.95,
    description: '. . .',
    canPurchase: true,
    soldOut: true,
    images: [{
      full:'assets/gem-01.gif',
      thumb:'assets/gem-01.gif',
    }],
  },
  {
    name: 'Youpi',
    price: 23.10,
    description: '. . .',
    canPurchase: true,
    soldOut: true,
    images: [{
      full:'assets/gem-02.gif',
      thumb:'assets/gem-02.gif',
    }],
  },
  {
    name: 'Houla',
    price: 5.40,
    description: '. . .',
    canPurchase: true,
    soldOut: true,
    images: [{
      full:'assets/gem-03.gif',
      thumb:'assets/gem-03.gif',
    }],
  }]

})();
