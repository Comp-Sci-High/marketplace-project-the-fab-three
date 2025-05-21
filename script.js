 function goToPage(url) {
      window.location.href = url;
    }
function goToItemPage() {
  window.location.href = 'item.html'; // change 'item.html' to your actual item page filename
}
function scrollCarousel(direction) {
  const carousel = document.getElementById("carousel");
  const scrollAmount = 650; // matches card width
  carousel.scrollLeft += direction * scrollAmount;
}