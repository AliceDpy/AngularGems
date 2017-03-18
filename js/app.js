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
    name: 'Dodecahedron',
    price: 2.95,
    description: 'lorem ipsum super',
    canPurchase: true,
    soldOut: true,
    images: [{
      full:'assets/gem-03.gif',
      thumb:'assets/gem-03.gif',
    }],
  },
  {
    name: 'Youpi',
    price: 23.10,
    description: 'je suis baptiste',
    canPurchase: true,
    soldOut: true,
    images: [{
      full:'assets/gem-03.gif',
      thumb:'assets/gem-03.gif',
    }],
  },
  {
    name: 'Houla',
    price: 5.40,
    description: 'tequila',
    canPurchase: true,
    soldOut: true,
    images: [{
      full:'assets/gem-03.gif',
      thumb:'assets/gem-03.gif',
    }],
  }]

})();
