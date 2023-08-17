// ==UserScript==
// @name         InRiver - Remove disabled specification
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Removes specification fields which are disabled
// @author       You
// @match        https://portal2-prod1a-euw.productmarketingcloud.com/app/enrich
// @icon         https://www.google.com/s2/favicons?sz=64&domain=tampermonkey.net
// @grant        none
// @require      https://code.jquery.com/jquery-latest.min.js
// @require      https://gist.github.com/raw/2625891/waitForKeyElements.js
// ==/UserScript==

(function() {
    'use strict';

    waitForKeyElements (".entity-category__field-container", removeDisabledSpecification);
})();

function removeDisabledSpecification() {
    let categories = document.getElementsByClassName("entity-category__field-container");
    console.log(categories.length);
    for (let category of categories) {
        let lines = category.getElementsByTagName("div");
        for (let line of lines) {
            let columns = line.getElementsByTagName("span");
            if(columns[5].innerText != null && columns[5].innerText.includes("Disabled")) {
                line.style.display = "none";
            }
        }
    }
}