function sample() {

    var f = document.getElementById("year"); //slect year
    var c = document.getElementById("personality"); //select personality
    var d = document.getElementById("gender"); //select gender
    var e = document.getElementById("status"); //select status
    var g = document.getElementById("yesorno"); //select yes or no



    if (f.value == "2018-2017" || f.value == "2017-2016" || f.value == "2016-2015" || f.value == "2015-2014" || f.value == "2014-2013" || f.value == "2013-2012" || f.value == "2012-2011") {
        document.getElementById("year-toshow").style.display = "";
    } else {
        document.getElementById("year-toshow").style.display = "none";
    }


    //when user click domistic company that show the cheack box
    if (c.value == "Domistic company") {
        document.getElementById("cheack-box").style.display = "";

    } else {
        document.getElementById("cheack-box").style.display = "none";
    }

    // when user click the individual in select option that shows the gender and resident options
    if (c.value == "individual") {
        document.getElementById("gender1").style.display = "";
        document.getElementById("resident1").style.display = "";

    } else {
        document.getElementById("gender1").style.display = "none";
        document.getElementById("resident1").style.display = "none";

    }


    //when user click all the attribute to calculate the tax then the tax will be calculate
    if (f.value == "2021-2020" && c.value == "individual" && e.value == "Resident" && g.value == "yes") {

        var userInput = Number(document.getElementById("taxNumber").value); // to get the user to value

        if (d.value == "Male") //if user clicks mail option
        {
            if (userInput > 0 && userInput < 500000) {

                var fC = userInput * (5 / 100);
                document.getElementById("incomeTaxNumber").value = fC;
                var surcharage = fC * (10 / 100);
                document.getElementById("Surcharge").value = surcharage;
                var health = fC * (4 / 100);
                document.getElementById("HealthandEducation").value = health;
                var total = fC + surcharage + health;
                document.getElementById("Total").value = total;

            } else if (userInput >= 500000 && userInput < 800000) {
                var sC = userInput * (10 / 100);
                document.getElementById("incomeTaxNumber").value = sC;
                var surcharage = sC * (10 / 100);
                document.getElementById("Surcharge").value = surcharage;
                var health = sC * (4 / 100);
                document.getElementById("HealthandEducation").value = health;
                var total = sC + surcharage + health;
                document.getElementById("Total").value = total;
            } else {
                var tC = userInput * (20 / 100);
                document.getElementById("incomeTaxNumber").value = tC;
                var surcharage = tC * (10 / 100);
                document.getElementById("Surcharge").value = surcharage;
                var health = tC * (4 / 100);
                document.getElementById("HealthandEducation").value = health;
                var total = tC + surcharage + health;
                document.getElementById("Total").value = total;
            }
        } else if (d.value == "Female") {
            if (userInput > 0 && userInput < 500000) {

                var fC = userInput;
                document.getElementById("incomeTaxNumber").value = fC;
                var surcharage = fC * (10 / 100);
                document.getElementById("Surcharge").value = surcharage;
                var health = fC * (4 / 100);
                document.getElementById("HealthandEducation").value = health;
                var total = fC + surcharage + health;
                document.getElementById("Total").value = total;

            } else if (userInput > 500000 && userInput < 800000) {
                var sC = userInput * (5 / 100);
                document.getElementById("incomeTaxNumber").value = sC;
                var surcharage = sC * (10 / 100);
                document.getElementById("Surcharge").value = surcharage;
                var health = sC * (4 / 100);
                document.getElementById("HealthandEducation").value = health;
                var total = sC + surcharage + health;
                document.getElementById("Total").value = total;
            } else {
                var tC = userInput * (10 / 100);
                document.getElementById("incomeTaxNumber").value = tC;
                var surcharage = tC * (10 / 100);
                document.getElementById("Surcharge").value = surcharage;
                var health = tC * (4 / 100);
                document.getElementById("HealthandEducation").value = health;
                var total = tC + surcharage + health;
                document.getElementById("Total").value = total;
            }

        }

    }

}