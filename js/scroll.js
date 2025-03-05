const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));




const observerB = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      console.log(entry)
      if (entry.isIntersecting) {
        entry.target.classList.add('showb');
      } else {
        entry.target.classList.remove('showb');
      }
    });
  });
  
  const hiddenElementsB = document.querySelectorAll('.hiddenb');
  hiddenElementsB.forEach((el) => observerB.observe(el));


  const observerC = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      console.log(entry)
      if (entry.isIntersecting) {
        entry.target.classList.add('showc');
      } else {
        entry.target.classList.remove('showc');
      }
    });
  });
  
  const hiddenElementsC = document.querySelectorAll('.hiddenc');
  hiddenElementsC.forEach((el) => observerC.observe(el));



  const observerD = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      console.log(entry)
      if (entry.isIntersecting) {
        entry.target.classList.add('showd');
      } else {
        entry.target.classList.remove('showd');
      }
    });
  });
  
  const hiddenElementsD = document.querySelectorAll('.hiddend');
  hiddenElementsD.forEach((el) => observerD.observe(el));
