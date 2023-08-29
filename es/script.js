function cargarFooter() {
  fetch('footer.html')
      .then(response => response.text())
      .then(data => {
          document.getElementById('footerContainer').innerHTML = data;
      });
    
}

cargarFooter();
