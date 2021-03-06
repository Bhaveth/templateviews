var app = angular.module('myApp', []);

app.controller('ListController', function ($scope) {

  $scope.curPage = 1,
    $scope.itemsPerPage = 5,
    $scope.maxSize = 5;

  this.items = itemsDetails;


  $scope.numOfPages = function () {
    return Math.ceil(itemsDetails.length / $scope.itemsPerPage);

  };
  
  // inline filter
  $scope.showTenableFilter = false;
  $scope.tenableFilter = '';
  $scope.onTenableFilterClick = function() {
    $scope.showTenableFilter = true;

  }

  $scope.onTenableFilterRemove = function() {
    $scope.showTenableFilter = false;
    $scope.tenableFilter = '';
  }
  
  // inline filter end


  $scope.onPreviousClick = function () {
    this.curPage = this.curPage - 1;
    console.log('On previous click worked')
  }

  $scope.onNextClick = function () {
    this.curPage = this.curPage + 1;
    console.log('On next click worked')
  }


  $scope.disablePrevious = function () {
    return this.curPage == 1;
  }

  $scope.disableNext = function () {
    return this.curPage == this.numOfPages;
  }

  $scope.$watch('curPage + numPerPage', function () {
    var begin = (($scope.curPage - 1) * $scope.itemsPerPage),
      end = begin + $scope.itemsPerPage;

    $scope.filteredItems = itemsDetails.slice(begin, end);
  });
  
// check box code
  
$scope.selectedActionType = null;
$scope.selectedActions = []
$scope.onActionChange = function() {
  $scope.selectedActions = []
}

$scope.onSubmit = function() {
  console.log($scope.selectedActions);
  angular.forEach($scope.selectedActions, function(item, value){
    // item.value ? 0 : 1;
    console.log(value)
});
};

$scope.isChecked = function(item) {
  return item.itemCode == 102;
}

$scope.isActionSelected = function() {
  return !($scope.selectedActionType != null);
}

// check box code end
  
 // groupby code

$scope.showGroupBy = false;

$scope.onGroupByClick = function() {
  $scope.showGroupBy = true;
}

// group by code end 
  
  
  // select all 
$scope.selectAll = false;
$scope.onSelectAll = function() {
  angular.forEach($scope.filteredItems, function(item, value){
    if ($scope.selectAll) {
      $scope.selectedActions[item.itemCode] = true;
    } else {
      $scope.selectedActions[item.itemCode] = false;
    }
});
}

//select all end
  
});



var itemsDetails = [
  {
    itemCode: 100,
    itemName: 'ONE',
    itemDescription: 'Hey Hie',
    uom: 'FEET',
    available: 'YES',
    openStock: 7,
    restrictStock: 16,
    threshold: 0,
    active: 'YES'
  },
  {
    itemCode: 102,
    itemName: 'TWO',
    itemDescription: 'Hey Hie',
    uom: 'GALLONS',
    available: 'YES',
    openStock: 8,
    restrictStock: 15,
    threshold: 0,
    active: 'YES'
  },
  {
    itemCode: 103,
    itemName: 'THREE',
    itemDescription: 'Hey Hie',
    uom: 'GALLONS',
    available: 'YES',
    openStock: 0,
    restrictStock: 15,
    threshold: 0,
    active: 'YES'
  },
  {
    itemCode: 104,
    itemName: 'FOUR',
    itemDescription: 'Hey Hie',
    uom: 'FEET',
    available: 'YES',
    openStock: 0,
    restrictStock: 15,
    threshold: 0,
    active: 'YES'
  },
  {
    itemCode: 105,
    itemName: 'FIVE',
    itemDescription: 'Hey Hie',
    uom: 'FEET',
    available: 'YES',
    openStock: 0,
    restrictStock: 14,
    threshold: 0,
    active: 'YES'
  },
  {
    itemCode: 106,
    itemName: 'SIX',
    itemDescription: 'Hey Hie',
    uom: 'FEET',
    available: 'YES',
    openStock: 0,
    restrictStock: 5,
    threshold: 0,
    active: 'YES'
  },
  {
    itemCode: 107,
    itemName: 'SEVEN',
    itemDescription: 'Hey Hie',
    uom: 'GALLONS',
    available: 'YES',
    openStock: 0,
    restrictStock: 5,
    threshold: 0,
    active: 'YES'
  },
  {
    itemCode: 108,
    itemName: 'EIGHT',
    itemDescription: 'Hey Hie',
    uom: 'FEET',
    available: 'YES',
    openStock: 5,
    restrictStock: 0,
    threshold: 0,
    active: 'YES'
  },
  {
    itemCode: 109,
    itemName: 'NINE',
    itemDescription: 'Hey Hie',
    uom: 'GALLONS',
    available: 'YES',
    openStock: 5,
    restrictStock: 0,
    threshold: 0,
    active: 'YES'
  },
  {
    itemCode: 110,
    itemName: 'TEN',
    itemDescription: 'Hey Hie',
    uom: 'FEET',
    available: 'YES',
    openStock: 77,
    restrictStock: 0,
    threshold: 0,
    active: 'YES'
  }
];
