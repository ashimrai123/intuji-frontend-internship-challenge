//Trigger expansion and collapse using height property on list
document.addEventListener("DOMContentLoaded", function () {
    var faqItems = document.querySelectorAll(".faq__body__questions li");
    faqItems.forEach(function (faqItem) {
        var trigger = faqItem.querySelector("button");
        var isExpanded = false;
        trigger === null || trigger === void 0 ? void 0 : trigger.addEventListener("click", function () {
            if (!isExpanded) {
                faqItem.style.height = "7.5rem";
                trigger.style.backgroundColor = "#5f5c5c";
                trigger.style.color = "white";
                isExpanded = true;
            }
            else {
                faqItem.style.height = "3rem";
                trigger.style.backgroundColor = "#cfcfcf";
                trigger.style.color = "black";
                isExpanded = false;
            }
        });
    });
});
