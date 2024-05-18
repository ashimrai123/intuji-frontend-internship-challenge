//Trigger expansion and collapse using height property on list
document.addEventListener("DOMContentLoaded", () => {
  const faqItems = document.querySelectorAll(".faq__body__questions li");
  faqItems.forEach((faqItem) => {
    const trigger = faqItem.querySelector("button");
    let isExpanded = false;
    trigger?.addEventListener("click", () => {
      if (!isExpanded) {
        (faqItem as HTMLElement).style.height = "100%";
        trigger.style.backgroundColor = "#5f5c5c";
        trigger.style.color = "white";
        isExpanded = true;
      } else {
        (faqItem as HTMLElement).style.height = "4rem";
        trigger.style.backgroundColor = "#cfcfcf";
        trigger.style.color = "black";
        isExpanded = false;
      }
    });
  });
});
