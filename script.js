function confirmSubmit() {
  if (confirm("Está seguro que quiere enviar el formulario?")) {
    document.getElementById("formulario").submit();
  }
  return false;
}