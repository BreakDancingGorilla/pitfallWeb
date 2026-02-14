/* ==========================================================
   CLEAN FULL SCRIPT REWRITE — FINAL VERSION WITH FIXES
   Supports:
   - 8 lists: cPL, ePL, phPL, puPL, cSL, eSL, phSL, puSL
   - Each item stored as { value: "text", weight: 0 }
   - Option 3 JSON import/export
   - No list reordering (weights only)
   ========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ----------------------------------------------------------
       DOM REFERENCES
    ---------------------------------------------------------- */
    const dataValue = document.getElementById("dataValue");
    const dataSelector = document.getElementById("dataSelector");

    const listElements = {
        cPL: document.getElementById("cPL"),
        ePL: document.getElementById("ePL"),
        phPL: document.getElementById("phPL"),
        puPL: document.getElementById("puPL"),
        cSL: document.getElementById("cSL"),
        eSL: document.getElementById("eSL"),
        phSL: document.getElementById("phSL"),
        puSL: document.getElementById("puSL")
    };

    /* ----------------------------------------------------------
       FIXED: SELECTOR → LIST KEY MAP
       (Your select returns cP, eP, phP, etc.)
       (Your lists use cPL, ePL, phPL, etc.)
    ---------------------------------------------------------- */
    const selectorMap = {
        cP: "cPL",
        eP: "ePL",
        phP: "phPL",
        puP: "puPL",
        cS: "cSL",
        eS: "eSL",
        phS: "phSL",
        puS: "puSL"
    };
    /* ----------------------------------------------------------
       SPLIT NUMBER INTO INDEX ARRAY
    ---------------------------------------------------------- */
    function numSplit(num) {
        return Array.from(String(num), Number).reverse();
    }
    /* ----------------------------------------------------------
       REMOVE ALL DOM ELEMENTS WITH SELECTOR
    ---------------------------------------------------------- */
    function removeElementsBySelector(selector) {
        // Select all elements that match the selector
        const elements = document.querySelectorAll(selector);

        // Iterate over the NodeList and remove each element
        elements.forEach(element => {
            element.remove();
        });
    }

    /* ----------------------------------------------------------
       MASTER DATA OBJECT — SAVED/LOADED TO/FROM JSON
    ---------------------------------------------------------- */
    let appData = {
        appName: "Local App",
        version: "1.0.0",
        settings: { theme: "dark", notifications: true },

        cPL: [],
        ePL: [],
        phPL: [],
        puPL: [],
        cSL: [],
        eSL: [],
        phSL: [],
        puSL: []
    };

    //EX: phSL: 0: {value: 'asdad', weight: 1}
    0   ///   array index    object

    /* ----------------------------------------------------------
       Display Weight
    ---------------------------------------------------------- */
    function updateDisplayWeightAll() {
        removeElementsBySelector(".circleNum");
        for (const [key, value] of Object.entries(appData)) {
            switch (key) {
                case "cPL":
                    var ul = listElements.cPL;
                    if (value.length > 0) {
                        for (let i = 0; i < value.length; i++) {
                            if (value[i].weight < 0) {
                                value[i].weight = 0;
                            }
                            console.log(value[i].weight);

                            let listItem = ul.children[i];

                            var numArray = numSplit(value[i].weight);
                            console.log(numArray);
                            for (let i = 0; i < numArray.length; i++) {
                                switch (numArray[i]) {
                                    case 1:
                                        const circle1 = document.createElement("img");
                                        circle1.src = "1-circle.svg";
                                        circle1.classList.add("circleNum");
                                        listItem.prepend(circle1);
                                        break;
                                    case 2:
                                        const circle2 = document.createElement("img");
                                        circle2.src = "2-circle.svg";
                                        circle2.classList.add("circleNum");
                                        listItem.prepend(circle2);
                                        break;
                                    case 3:
                                        const circle3 = document.createElement("img");
                                        circle3.src = "3-circle.svg";
                                        circle3.classList.add("circleNum");
                                        listItem.prepend(circle3);
                                        break;
                                    case 4:
                                        const circle4 = document.createElement("img");
                                        circle4.src = "4-circle.svg";
                                        circle4.classList.add("circleNum");
                                        listItem.prepend(circle4);
                                        break;
                                    case 5:
                                        const circle5 = document.createElement("img");
                                        circle5.src = "5-circle.svg";
                                        circle5.classList.add("circleNum");
                                        listItem.prepend(circle5);
                                        break;
                                    case 6:
                                        const circle6 = document.createElement("img");
                                        circle6.src = "6-circle.svg";
                                        circle6.classList.add("circleNum");
                                        listItem.prepend(circle6);
                                        break;
                                    case 7:
                                        const circle7 = document.createElement("img");
                                        circle7.src = "7-circle.svg";
                                        circle7.classList.add("circleNum");
                                        listItem.prepend(circle7);
                                        break;
                                    case 8:
                                        const circle8 = document.createElement("img");
                                        circle8.src = "8-circle.svg";
                                        circle8.classList.add("circleNum");
                                        listItem.prepend(circle8);
                                        break;
                                    case 9:
                                        const circle9 = document.createElement("img");
                                        circle9.src = "9-circle.svg";
                                        circle9.classList.add("circleNum");
                                        listItem.prepend(circle9);
                                        break;
                                    case 0:
                                        const circle0 = document.createElement("img");
                                        circle0.src = "0-circle.svg";
                                        circle0.classList.add("circleNum");
                                        listItem.prepend(circle0);
                                        break;

                                    default:
                                        break;
                                }

                            }
                        }
                    }
                    break;
                case "ePL":
                    var ul = listElements.ePL;
                    if (value.length > 0) {
                        for (let i = 0; i < value.length; i++) {
                            if (value[i].weight < 0) {
                                value[i].weight = 0;
                            }
                            console.log(value[i].weight);

                            let listItem = ul.children[i];

                            var numArray = numSplit(value[i].weight);
                            console.log(numArray);
                            for (let i = 0; i < numArray.length; i++) {
                                switch (numArray[i]) {
                                    case 1:
                                        const circle1 = document.createElement("img");
                                        circle1.src = "1-circle.svg";
                                        circle1.classList.add("circleNum");
                                        listItem.prepend(circle1);
                                        break;
                                    case 2:
                                        const circle2 = document.createElement("img");
                                        circle2.src = "2-circle.svg";
                                        circle2.classList.add("circleNum");
                                        listItem.prepend(circle2);
                                        break;
                                    case 3:
                                        const circle3 = document.createElement("img");
                                        circle3.src = "3-circle.svg";
                                        circle3.classList.add("circleNum");
                                        listItem.prepend(circle3);
                                        break;
                                    case 4:
                                        const circle4 = document.createElement("img");
                                        circle4.src = "4-circle.svg";
                                        circle4.classList.add("circleNum");
                                        listItem.prepend(circle4);
                                        break;
                                    case 5:
                                        const circle5 = document.createElement("img");
                                        circle5.src = "5-circle.svg";
                                        circle5.classList.add("circleNum");
                                        listItem.prepend(circle5);
                                        break;
                                    case 6:
                                        const circle6 = document.createElement("img");
                                        circle6.src = "6-circle.svg";
                                        circle6.classList.add("circleNum");
                                        listItem.prepend(circle6);
                                        break;
                                    case 7:
                                        const circle7 = document.createElement("img");
                                        circle7.src = "7-circle.svg";
                                        circle7.classList.add("circleNum");
                                        listItem.prepend(circle7);
                                        break;
                                    case 8:
                                        const circle8 = document.createElement("img");
                                        circle8.src = "8-circle.svg";
                                        circle8.classList.add("circleNum");
                                        listItem.prepend(circle8);
                                        break;
                                    case 9:
                                        const circle9 = document.createElement("img");
                                        circle9.src = "9-circle.svg";
                                        circle9.classList.add("circleNum");
                                        listItem.prepend(circle9);
                                        break;
                                    case 0:
                                        const circle0 = document.createElement("img");
                                        circle0.src = "0-circle.svg";
                                        circle0.classList.add("circleNum");
                                        listItem.prepend(circle0);
                                        break;

                                    default:
                                        break;
                                }

                            }
                        }
                    }
                    break;
                case "phPL":
                    console.log("hi");
                    var ul = listElements.phPL;
                    if (value.length > 0) {
                        console.log("hi");
                        for (let i = 0; i < value.length; i++) {
                            if (value[i].weight < 0) {
                                value[i].weight = 0;
                            }
                            console.log(value[i].weight);

                            let listItem = ul.children[i];

                            var numArray = numSplit(value[i].weight);
                            console.log(numArray);
                            for (let i = 0; i < numArray.length; i++) {
                                console.log("hi");
                                switch (numArray[i]) {
                                    case 1:
                                        const circle1 = document.createElement("img");
                                        circle1.src = "1-circle.svg";
                                        circle1.classList.add("circleNum");
                                        listItem.prepend(circle1);
                                        break;
                                    case 2:
                                        const circle2 = document.createElement("img");
                                        circle2.src = "2-circle.svg";
                                        circle2.classList.add("circleNum");
                                        listItem.prepend(circle2);
                                        break;
                                    case 3:
                                        const circle3 = document.createElement("img");
                                        circle3.src = "3-circle.svg";
                                        circle3.classList.add("circleNum");
                                        listItem.prepend(circle3);
                                        break;
                                    case 4:
                                        const circle4 = document.createElement("img");
                                        circle4.src = "4-circle.svg";
                                        circle4.classList.add("circleNum");
                                        listItem.prepend(circle4);
                                        break;
                                    case 5:
                                        const circle5 = document.createElement("img");
                                        circle5.src = "5-circle.svg";
                                        circle5.classList.add("circleNum");
                                        listItem.prepend(circle5);
                                        break;
                                    case 6:
                                        const circle6 = document.createElement("img");
                                        circle6.src = "6-circle.svg";
                                        circle6.classList.add("circleNum");
                                        listItem.prepend(circle6);
                                        break;
                                    case 7:
                                        const circle7 = document.createElement("img");
                                        circle7.src = "7-circle.svg";
                                        circle7.classList.add("circleNum");
                                        listItem.prepend(circle7);
                                        break;
                                    case 8:
                                        const circle8 = document.createElement("img");
                                        circle8.src = "8-circle.svg";
                                        circle8.classList.add("circleNum");
                                        listItem.prepend(circle8);
                                        break;
                                    case 9:
                                        const circle9 = document.createElement("img");
                                        circle9.src = "9-circle.svg";
                                        circle9.classList.add("circleNum");
                                        listItem.prepend(circle9);
                                        break;
                                    case 0:
                                        const circle0 = document.createElement("img");
                                        circle0.src = "0-circle.svg";
                                        circle0.classList.add("circleNum");
                                        listItem.prepend(circle0);
                                        break;

                                    default:
                                        break;
                                }

                            }
                        }
                    }
                    break;
                case "puPL":
                    var ul = listElements.puPL;
                    if (value.length > 0) {
                        for (let i = 0; i < value.length; i++) {
                            if (value[i].weight < 0) {
                                value[i].weight = 0;
                            }
                            console.log(value[i].weight);

                            let listItem = ul.children[i];

                            var numArray = numSplit(value[i].weight);
                            console.log(numArray);
                            for (let i = 0; i < numArray.length; i++) {
                                switch (numArray[i]) {
                                    case 1:
                                        const circle1 = document.createElement("img");
                                        circle1.src = "1-circle.svg";
                                        circle1.classList.add("circleNum");
                                        listItem.prepend(circle1);
                                        break;
                                    case 2:
                                        const circle2 = document.createElement("img");
                                        circle2.src = "2-circle.svg";
                                        circle2.classList.add("circleNum");
                                        listItem.prepend(circle2);
                                        break;
                                    case 3:
                                        const circle3 = document.createElement("img");
                                        circle3.src = "3-circle.svg";
                                        circle3.classList.add("circleNum");
                                        listItem.prepend(circle3);
                                        break;
                                    case 4:
                                        const circle4 = document.createElement("img");
                                        circle4.src = "4-circle.svg";
                                        circle4.classList.add("circleNum");
                                        listItem.prepend(circle4);
                                        break;
                                    case 5:
                                        const circle5 = document.createElement("img");
                                        circle5.src = "5-circle.svg";
                                        circle5.classList.add("circleNum");
                                        listItem.prepend(circle5);
                                        break;
                                    case 6:
                                        const circle6 = document.createElement("img");
                                        circle6.src = "6-circle.svg";
                                        circle6.classList.add("circleNum");
                                        listItem.prepend(circle6);
                                        break;
                                    case 7:
                                        const circle7 = document.createElement("img");
                                        circle7.src = "7-circle.svg";
                                        circle7.classList.add("circleNum");
                                        listItem.prepend(circle7);
                                        break;
                                    case 8:
                                        const circle8 = document.createElement("img");
                                        circle8.src = "8-circle.svg";
                                        circle8.classList.add("circleNum");
                                        listItem.prepend(circle8);
                                        break;
                                    case 9:
                                        const circle9 = document.createElement("img");
                                        circle9.src = "9-circle.svg";
                                        circle9.classList.add("circleNum");
                                        listItem.prepend(circle9);
                                        break;
                                    case 0:
                                        const circle0 = document.createElement("img");
                                        circle0.src = "0-circle.svg";
                                        circle0.classList.add("circleNum");
                                        listItem.prepend(circle0);
                                        break;

                                    default:
                                        break;
                                }

                            }
                        }
                    }
                    break;
                case "cSL":
                    var ul = listElements.cSL;
                    if (value.length > 0) {
                        for (let i = 0; i < value.length; i++) {
                            if (value[i].weight < 0) {
                                value[i].weight = 0;
                            }
                            console.log(value[i].weight);

                            let listItem = ul.children[i];

                            var numArray = numSplit(value[i].weight);
                            console.log(numArray);
                            for (let i = 0; i < numArray.length; i++) {
                                switch (numArray[i]) {
                                    case 1:
                                        const circle1 = document.createElement("img");
                                        circle1.src = "1-circle.svg";
                                        circle1.classList.add("circleNum");
                                        listItem.prepend(circle1);
                                        break;
                                    case 2:
                                        const circle2 = document.createElement("img");
                                        circle2.src = "2-circle.svg";
                                        circle2.classList.add("circleNum");
                                        listItem.prepend(circle2);
                                        break;
                                    case 3:
                                        const circle3 = document.createElement("img");
                                        circle3.src = "3-circle.svg";
                                        circle3.classList.add("circleNum");
                                        listItem.prepend(circle3);
                                        break;
                                    case 4:
                                        const circle4 = document.createElement("img");
                                        circle4.src = "4-circle.svg";
                                        circle4.classList.add("circleNum");
                                        listItem.prepend(circle4);
                                        break;
                                    case 5:
                                        const circle5 = document.createElement("img");
                                        circle5.src = "5-circle.svg";
                                        circle5.classList.add("circleNum");
                                        listItem.prepend(circle5);
                                        break;
                                    case 6:
                                        const circle6 = document.createElement("img");
                                        circle6.src = "6-circle.svg";
                                        circle6.classList.add("circleNum");
                                        listItem.prepend(circle6);
                                        break;
                                    case 7:
                                        const circle7 = document.createElement("img");
                                        circle7.src = "7-circle.svg";
                                        circle7.classList.add("circleNum");
                                        listItem.prepend(circle7);
                                        break;
                                    case 8:
                                        const circle8 = document.createElement("img");
                                        circle8.src = "8-circle.svg";
                                        circle8.classList.add("circleNum");
                                        listItem.prepend(circle8);
                                        break;
                                    case 9:
                                        const circle9 = document.createElement("img");
                                        circle9.src = "9-circle.svg";
                                        circle9.classList.add("circleNum");
                                        listItem.prepend(circle9);
                                        break;
                                    case 0:
                                        const circle0 = document.createElement("img");
                                        circle0.src = "0-circle.svg";
                                        circle0.classList.add("circleNum");
                                        listItem.prepend(circle0);
                                        break;

                                    default:
                                        break;
                                }

                            }
                        }
                    }
                    break;
                case "eSL":
                    var ul = listElements.eSL;
                    if (value.length > 0) {
                        for (let i = 0; i < value.length; i++) {
                            if (value[i].weight < 0) {
                                value[i].weight = 0;
                            }
                            console.log(value[i].weight);

                            let listItem = ul.children[i];

                            var numArray = numSplit(value[i].weight);
                            console.log(numArray);
                            for (let i = 0; i < numArray.length; i++) {
                                switch (numArray[i]) {
                                    case 1:
                                        const circle1 = document.createElement("img");
                                        circle1.src = "1-circle.svg";
                                        circle1.classList.add("circleNum");
                                        listItem.prepend(circle1);
                                        break;
                                    case 2:
                                        const circle2 = document.createElement("img");
                                        circle2.src = "2-circle.svg";
                                        circle2.classList.add("circleNum");
                                        listItem.prepend(circle2);
                                        break;
                                    case 3:
                                        const circle3 = document.createElement("img");
                                        circle3.src = "3-circle.svg";
                                        circle3.classList.add("circleNum");
                                        listItem.prepend(circle3);
                                        break;
                                    case 4:
                                        const circle4 = document.createElement("img");
                                        circle4.src = "4-circle.svg";
                                        circle4.classList.add("circleNum");
                                        listItem.prepend(circle4);
                                        break;
                                    case 5:
                                        const circle5 = document.createElement("img");
                                        circle5.src = "5-circle.svg";
                                        circle5.classList.add("circleNum");
                                        listItem.prepend(circle5);
                                        break;
                                    case 6:
                                        const circle6 = document.createElement("img");
                                        circle6.src = "6-circle.svg";
                                        circle6.classList.add("circleNum");
                                        listItem.prepend(circle6);
                                        break;
                                    case 7:
                                        const circle7 = document.createElement("img");
                                        circle7.src = "7-circle.svg";
                                        circle7.classList.add("circleNum");
                                        listItem.prepend(circle7);
                                        break;
                                    case 8:
                                        const circle8 = document.createElement("img");
                                        circle8.src = "8-circle.svg";
                                        circle8.classList.add("circleNum");
                                        listItem.prepend(circle8);
                                        break;
                                    case 9:
                                        const circle9 = document.createElement("img");
                                        circle9.src = "9-circle.svg";
                                        circle9.classList.add("circleNum");
                                        listItem.prepend(circle9);
                                        break;
                                    case 0:
                                        const circle0 = document.createElement("img");
                                        circle0.src = "0-circle.svg";
                                        circle0.classList.add("circleNum");
                                        listItem.prepend(circle0);
                                        break;

                                    default:
                                        break;
                                }

                            }
                        }
                    }
                    break;
                case "phSL":
                    var ul = listElements.phSL;
                    if (value.length > 0) {
                        for (let i = 0; i < value.length; i++) {
                            if (value[i].weight < 0) {
                                value[i].weight = 0;
                            }
                            console.log(value[i].weight);

                            let listItem = ul.children[i];

                            var numArray = numSplit(value[i].weight);
                            console.log(numArray);
                            for (let i = 0; i < numArray.length; i++) {
                                switch (numArray[i]) {
                                    case 1:
                                        const circle1 = document.createElement("img");
                                        circle1.src = "1-circle.svg";
                                        circle1.classList.add("circleNum");
                                        listItem.prepend(circle1);
                                        break;
                                    case 2:
                                        const circle2 = document.createElement("img");
                                        circle2.src = "2-circle.svg";
                                        circle2.classList.add("circleNum");
                                        listItem.prepend(circle2);
                                        break;
                                    case 3:
                                        const circle3 = document.createElement("img");
                                        circle3.src = "3-circle.svg";
                                        circle3.classList.add("circleNum");
                                        listItem.prepend(circle3);
                                        break;
                                    case 4:
                                        const circle4 = document.createElement("img");
                                        circle4.src = "4-circle.svg";
                                        circle4.classList.add("circleNum");
                                        listItem.prepend(circle4);
                                        break;
                                    case 5:
                                        const circle5 = document.createElement("img");
                                        circle5.src = "5-circle.svg";
                                        circle5.classList.add("circleNum");
                                        listItem.prepend(circle5);
                                        break;
                                    case 6:
                                        const circle6 = document.createElement("img");
                                        circle6.src = "6-circle.svg";
                                        circle6.classList.add("circleNum");
                                        listItem.prepend(circle6);
                                        break;
                                    case 7:
                                        const circle7 = document.createElement("img");
                                        circle7.src = "7-circle.svg";
                                        circle7.classList.add("circleNum");
                                        listItem.prepend(circle7);
                                        break;
                                    case 8:
                                        const circle8 = document.createElement("img");
                                        circle8.src = "8-circle.svg";
                                        circle8.classList.add("circleNum");
                                        listItem.prepend(circle8);
                                        break;
                                    case 9:
                                        const circle9 = document.createElement("img");
                                        circle9.src = "9-circle.svg";
                                        circle9.classList.add("circleNum");
                                        listItem.prepend(circle9);
                                        break;
                                    case 0:
                                        const circle0 = document.createElement("img");
                                        circle0.src = "0-circle.svg";
                                        circle0.classList.add("circleNum");
                                        listItem.prepend(circle0);
                                        break;

                                    default:
                                        break;
                                }

                            }
                        }
                    }
                    break;
                case "puSL":
                    var ul = listElements.puSL;
                    if (value.length > 0) {
                        for (let i = 0; i < value.length; i++) {
                            if (value[i].weight < 0) {
                                value[i].weight = 0;
                            }
                            console.log(value[i].weight);

                            let listItem = ul.children[i];

                            var numArray = numSplit(value[i].weight);
                            console.log(numArray);
                            for (let i = 0; i < numArray.length; i++) {
                                switch (numArray[i]) {
                                    case 1:
                                        const circle1 = document.createElement("img");
                                        circle1.src = "1-circle.svg";
                                        circle1.classList.add("circleNum");
                                        listItem.prepend(circle1);
                                        break;
                                    case 2:
                                        const circle2 = document.createElement("img");
                                        circle2.src = "2-circle.svg";
                                        circle2.classList.add("circleNum");
                                        listItem.prepend(circle2);
                                        break;
                                    case 3:
                                        const circle3 = document.createElement("img");
                                        circle3.src = "3-circle.svg";
                                        circle3.classList.add("circleNum");
                                        listItem.prepend(circle3);
                                        break;
                                    case 4:
                                        const circle4 = document.createElement("img");
                                        circle4.src = "4-circle.svg";
                                        circle4.classList.add("circleNum");
                                        listItem.prepend(circle4);
                                        break;
                                    case 5:
                                        const circle5 = document.createElement("img");
                                        circle5.src = "5-circle.svg";
                                        circle5.classList.add("circleNum");
                                        listItem.prepend(circle5);
                                        break;
                                    case 6:
                                        const circle6 = document.createElement("img");
                                        circle6.src = "6-circle.svg";
                                        circle6.classList.add("circleNum");
                                        listItem.prepend(circle6);
                                        break;
                                    case 7:
                                        const circle7 = document.createElement("img");
                                        circle7.src = "7-circle.svg";
                                        circle7.classList.add("circleNum");
                                        listItem.prepend(circle7);
                                        break;
                                    case 8:
                                        const circle8 = document.createElement("img");
                                        circle8.src = "8-circle.svg";
                                        circle8.classList.add("circleNum");
                                        listItem.prepend(circle8);
                                        break;
                                    case 9:
                                        const circle9 = document.createElement("img");
                                        circle9.src = "9-circle.svg";
                                        circle9.classList.add("circleNum");
                                        listItem.prepend(circle9);
                                        break;
                                    case 0:
                                        const circle0 = document.createElement("img");
                                        circle0.src = "0-circle.svg";
                                        circle0.classList.add("circleNum");
                                        listItem.prepend(circle0);
                                        break;

                                    default:
                                        break;
                                }

                            }
                        }
                    }
                    break;
                default:
                    console.log("obama alert: Section UpdateDisplayWeightAll - Key not in switch statement");
                    break;
            }
        }
    }

    /* ----------------------------------------------------------
       CREATE A NEW LIST ITEM IN THE DOM
    ---------------------------------------------------------- */
    function createListItem(listKey, itemObj) {
        const ul = listElements[listKey];

        const li = document.createElement("li");
        li.classList.add("list-item");

        const textSpan = document.createElement("span");
        textSpan.textContent = itemObj.value;

        const deleteBtn = document.createElement("button");
        deleteBtn.classList.add("list-item-button");
        deleteBtn.innerHTML = `<img src="x-circle.svg" class="list-item-button-img">`;

        const upBtn = document.createElement("button");
        upBtn.classList.add("list-item-button-up");
        upBtn.innerHTML = `<img src="arrow-up-circle.svg" class="list-item-button-img-up">`;

        const downBtn = document.createElement("button");
        downBtn.classList.add("list-item-button-down");
        downBtn.innerHTML = `<img src="arrow-down-circle.svg" class="list-item-button-img-down">`;

        li.appendChild(textSpan);
        li.appendChild(deleteBtn);
        li.appendChild(upBtn);
        li.appendChild(downBtn);
        ul.appendChild(li);

        /* ----------------------------------------------
           BUTTON EVENTS
        ---------------------------------------------- */

        // Delete item + remove weight entry
        deleteBtn.addEventListener("click", () => {
            const index = Array.from(ul.children).indexOf(li);
            appData[listKey].splice(index, 1);
            li.remove();
        });

        // Increase weight
        upBtn.addEventListener("click", () => {
            const index = Array.from(ul.children).indexOf(li);
            appData[listKey][index].weight++;
            console.log(appData);
            updateDisplayWeightAll();
        });

        // Decrease weight
        downBtn.addEventListener("click", () => {
            const index = Array.from(ul.children).indexOf(li);
            appData[listKey][index].weight--;
            console.log(appData[listKey]);
            updateDisplayWeightAll()
        });
    }

    /* ----------------------------------------------------------
       ADD NEW ITEM
    ---------------------------------------------------------- */
    document.getElementById("dataSubmit").addEventListener("click", () => {
        const value = dataValue.value.trim();
        const key = selectorMap[dataSelector.value];   // FIXED

        if (!value || !key) return;

        const newItem = { value, weight: 0 };
        appData[key].push(newItem);
        createListItem(key, newItem);

        dataValue.value = "";
        updateDisplayWeightAll()
    });

    /* ----------------------------------------------------------
       CAPITALIZE FIRST LETTER OF ALL LIST ITEMS
    ---------------------------------------------------------- */
    document.getElementById("dataCap").addEventListener("click", () => {
        for (const key in listElements) {
            const ul = listElements[key];

            ul.querySelectorAll("li span").forEach((span, i) => {
                const oldText = span.textContent;
                const newText = oldText.charAt(0).toUpperCase() + oldText.slice(1);

                span.textContent = newText;
                appData[key][i].value = newText;
            });
        }
    });

    /* ----------------------------------------------------------
       EXPORT JSON FILE
    ---------------------------------------------------------- */
    window.downloadJsonFile = function () {
        const jsonString = JSON.stringify(appData, null, 2);
        const blob = new Blob([jsonString], { type: "application/json" });
        const url = URL.createObjectURL(blob);

        const a = document.createElement("a");
        a.href = url;
        a.download = "the_winning_corner_data.json";
        document.body.appendChild(a);
        a.click();
        a.remove();

        URL.revokeObjectURL(url);
    };

    /* ----------------------------------------------------------
       IMPORT JSON FILE
    ---------------------------------------------------------- */
    document.getElementById("fileInput").addEventListener("change", event => {
        const file = event.target.files[0];
        if (!file) return;

        const reader = new FileReader();

        reader.onload = (e) => {
            try {
                const json = JSON.parse(e.target.result);

                // Replace all data
                appData = json;

                rebuildAllLists();

                document.getElementById("output").textContent = "File successfully loaded!";
            } catch (err) {
                document.getElementById("output").textContent =
                    "Error parsing JSON: " + err.message;
            }
        };

        reader.readAsText(file);

    });

    /* ----------------------------------------------------------
       REBUILD ALL LISTS FROM IMPORTED DATA
    ---------------------------------------------------------- */
    function rebuildAllLists() {
        for (const key in listElements) {
            const ul = listElements[key];
            ul.innerHTML = "";

            appData[key].forEach(item => createListItem(key, item));
        }
        updateDisplayWeightAll()
    }

});
