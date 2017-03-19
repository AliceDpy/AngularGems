(function(){
  var app = angular.module('store', []);
  app.controller('StoreController', function(){
    //our code here
    this.products = gems;
  });

  app.controller('PanelController', function(){
    this.tab = 1;

    this.selectTab = function(setTab){
      this.tab = setTab;
    };

    this.isSelected = function(checkTab) {
      return this.tab === checkTab;
    };
  });



var gems = [{
    name: 'Je me Lève',
    price: 2.95,
    description: 'lorem ipsum super',
    canPurchase: true,
    soldOut: true,
    images: [{
      full:'assets/bicycle.jpg',
    }],
  },
  {
    name: 'Et je Te',
    price: 23.10,
    description: 'je suis baptiste',
    canPurchase: true,
    soldOut: true,
    images: [{
      full:'assets/bicycle.jpg',
    }],
  },
  {
    name: 'Bouscule',
    price: 23.10,
    description: 'je suis baptiste',
    canPurchase: true,
    soldOut: true,
    images: [{
      full:'assets/bicycle.jpg',
    }],
  },
  {
    name: 'Tu ne Te',
    price: 23.10,
    description: 'je suis baptiste',
    canPurchase: true,
    soldOut: true,
    images: [{
      full:'assets/bicycle.jpg',
    }],
  },
  {
    name: 'Réveil Pas',
    price: 23.10,
    description: 'je suis baptiste',
    canPurchase: true,
    soldOut: true,
    images: [{
      full:'assets/bicycle.jpg',
    }],
  },
  {
    name: 'Comme',
    price: 23.10,
    description: 'je suis baptiste',
    canPurchase: true,
    soldOut: true,
    images: [{
      full:'assets/bicycle.jpg',
    }],
  },
  {
    name: 'D\'habitude',
    price: 23.10,
    description: 'je suis baptiste',
    canPurchase: true,
    soldOut: true,
    images: [{
      full:'assets/bicycle.jpg',
    }],
  },
  {
    name: 'Deuh',
    price: 5.40,
    description: 'tequila',
    canPurchase: true,
    soldOut: true,
    images: [{
      full:'assets/bicycle.jpg',
    }],
  }]

})();
