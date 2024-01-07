window.onload = initPage;

function updatePrice(productType, newPrice, button) {
  var priceContainer = document.getElementById(productType).querySelector(".dynamicPriceContainer");
  priceContainer.innerHTML = "<h5 class='ofertat-box-price'>Fillon nga <span class='title-span'>€</span><span class='price-span'>" + newPrice + "</span></h5>";

  // Remove "active" class from all storage buttons within the same product box
  var storageButtons = document.getElementById(productType).querySelectorAll('.ofertat-box-storage');
  storageButtons.forEach(function(btn) {
    btn.classList.remove('active');
  });

  // Add "active" class to the clicked storage button
  button.classList.add('active');

  // Update the image based on the selected color
  updateImage(productType);
}

function updateColor(productType, color, button) {
  // Update the image based on the selected color
  updateImage(productType, color);

  // Remove "active-color" class from all color buttons within the same product box
  var colorButtons = document.getElementById(productType).querySelectorAll('.ofertat-box-color');
  colorButtons.forEach(function(btn) {
    btn.classList.remove('active-color');
  });

  // Add "active-color" class to the clicked color button
  button.classList.add('active-color');
}

function updateImage(productType, color) {
  var imageElement = document.getElementById(productType).querySelector(".ofertat-img");
  if (productType === 'iphone15') {
    if (color === 'Blue') {
      imageElement.src = "./shop-images/iphone15-blue.png";
    } else if (color === 'Black') {
      imageElement.src = "./shop-images/iphone15-black.png";
    } else if (color === 'Yellow') {
      imageElement.src = "./shop-images/iphone15-yellow.png";
    }
  } else if (productType === 'iphone15Pro') {
    if (color === 'Black') {
      imageElement.src = "./shop-images/iphone15pro-black.png";
    } else if (color === 'Natural') {
      imageElement.src = "./shop-images/iphone15pro-natural.png";
    } else if (color === 'Blue') {
      imageElement.src = "./shop-images/iphone15pro-blue.png";
    }
  } else if (productType === 'iphone14Plus') {
    if (color === 'Red') {
      imageElement.src = "./shop-images/iphone14plus-red.png";
    } else if (color === 'Blue') {
      imageElement.src = "./shop-images/iphone14plus-blue.png";
    } else if (color === 'Purple') {
      imageElement.src = "./shop-images/iphone14plus-purple.png";
    }
  }

  // mac images
  var imageElementMac = document.getElementById(productType).querySelector(".mac-ofertat-img");
  if (productType === 'MacBookAir') {
    if (color === 'Space Gray') {
      imageElementMac.src = "./shop-images/MacBookAir-Spacegray.png";
    } else if (color === 'Silver') {
      imageElementMac.src = "./shop-images/MacBookAir-Silver.png";
    } else if (color === 'Midnight') {
      imageElementMac.src = "./shop-images/MacBookAir-Midnight.png";
    }
  } else if (productType === 'MacBookPro') {
    if (color === 'Space Gray') {
      imageElementMac.src = "./shop-images/MacBookPro-Spacegray.png";
    } else if (color === 'Silver') {
      imageElementMac.src = "./shop-images/MacBookPro-Silver.png";
    }
  } else if (productType === 'iMac') {
    if (color === 'Green') {
      imageElementMac.src = "./shop-images/iMac-Green.png";
    } else if (color === 'Pink') {
      imageElementMac.src = "./shop-images/iMac-Pink.png";
    } else if (color === 'Orange') {
      imageElementMac.src = "./shop-images/iMac-Orange.png";
    }
  }
}

function updatePriceMac(productType, newPrice, button) {
  var priceContainer = document.getElementById(productType).querySelector(".mac-dynamicPriceContainer");
  priceContainer.innerHTML = "<h5 class='mac-ofertat-box-price'>Fillon nga <span class='mac-title-span'>€</span><span class='mac-price-span'>" + newPrice + "</span></h5>";

  // Remove "active" class from all size buttons within the same product box
  var sizeButtons = document.getElementById(productType).querySelectorAll('.mac-size-options button');
  sizeButtons.forEach(function(btn) {
    btn.classList.remove('active');
  });

  // Add "active" class to the clicked size button
  button.classList.add('active');
}

function updateSize(productType, newSize, button) {
  // Update the size based on the selected option
  updateSpecification(productType, newSize, button, "mac-size-options");

  // Update the price for Mac based on the selected size
  updatePriceMac(productType, newSize, button);
}

function updateSpecification(productType, newValue, button, optionClass) {
  var optionButtons = document.getElementById(productType).querySelectorAll('.' + optionClass + ' button');
  optionButtons.forEach(function(btn) {
    btn.classList.remove('active');
  });

  // Add "active" class to the clicked option button
  button.classList.add('active');
}
