function navigateToSection(elementId){
  const section=document.getElementById(elementId);
  if (section){
    section.scrollIntoView({behavior:'smooth'});
  }
}
