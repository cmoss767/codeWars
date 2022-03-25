function fuelPrice(litres, pricePerLitre) {
    if(litres<2){
      return litres*pricePerLitre
    }else if(litres<4){
      return Number((litres*(pricePerLitre-0.05)).toFixed(2))
    }else if(litres<6){
      return Number((litres*(pricePerLitre-0.10)).toFixed(2))
    }else if(litres<8){
      return Number((litres*(pricePerLitre-0.15)).toFixed(2))
    }else if(litres<10){
      return Number((litres*(pricePerLitre-0.20)).toFixed(2))
    }else if(litres<12){
     return Number((litres*(pricePerLitre-0.25)).toFixed(2))
    }else{
      return Number((litres*(pricePerLitre-0.25)).toFixed(2))
    }
  }