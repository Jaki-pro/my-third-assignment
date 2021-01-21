

function kilometerToMeter(kilometers) {
    var meter = kilometers * 1000;  // 1 kilometer=1000 meter
    return meter;
}
var metersCount = kilometerToMeter(10);
console.log(metersCount);


function budgetCalculator(watch, phone, laptop) {
    if (watch >= 1 && phone >= 1 && laptop >= 1) {
        var totalWatchPrice = watch * 50;   // price of a single watch is 50
        var totalPhonePrice = phone * 100;  // price of a single phone is 100
        var totalLaptopPrice = laptop * 500; // price of a single laptop is 500

        var totalPrice = totalWatchPrice + totalPhonePrice + totalLaptopPrice;

        return totalPrice;
    }
    else {
        return "Sorry...You didn't purchase any product"
    }

}
var priceOfElectronics = budgetCalculator(30, 21, 15);
console.log(priceOfElectronics);


function hotelCost(days) {
    var totalCost = 0;
    if (days <= 0) {
        return "At all you didn't book any hotel's room"
    }
    if (days <= 10) {
        var hotelCostPerDay = 100;  //given that hotel cost per days for 1 to 10 days is 100
        var firstHotelCost = days * 100;
        totalCost = firstHotelCost;

    }
    else if (days <= 20) {
        var firstHotelCost = 10 * 100;
        var hotelCostPerDay = 80;   //given that hotel cost per days for 11 to 20 days is 80
        var secondHotelCost = days * 80;
        totalCost = firstHotelCost + secondHotelCost;
    }
    else if (days >= 21) {
        var firstHotelCost = 10 * 100;
        var secondHotelCost = 10 * 80;
        var hotelCostPerDay = 80;
        var thirdHotelCost = days * 50   //given that hotel cost per days for 21 to infinity days is 50
        totalCost = firstHotelCost + secondHotelCost + thirdHotelCost;
    }

    return totalCost;
}
var cost = hotelCost(65);
console.log(cost);


function megaFriend(friends) {
    var length = friends.length; // length of Array,friends (perameter's value) 
    if (length > 0) {
        var largestFriend;
        var largestFriendLength = 0; // initializing the largestt string length 
        for (var i = 0; i < length; i++) {
            var lengthOfFriend = friends[i].length;

            if (lengthOfFriend > largestFriendLength) {
                largestFriendLength = lengthOfFriend;
                largestFriend = friends[i]; // largest string

            }
        }
        return largestFriend; // largest string
    }
    else {
        return "no friends included";
    }

}
var largestFriend = megaFriend(["jafor", "jakariya", "tasfiq", "jamil"]);
console.log(largestFriend);