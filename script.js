document.addEventListener("DOMContentLoaded", () => {
  // Form submission handler
  const form = document.getElementById("rethus-form")
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault()

      // Get form values
      const tipoId = document.getElementById("tipo-identificacion").value
      const numId = document.getElementById("numero-identificacion").value
      const nombre = document.getElementById("primer-nombre").value
      const apellido = document.getElementById("primer-apellido").value
      const captcha = document.getElementById("captcha-input").value

      // Validate form
      if (!tipoId || !numId || !captcha) {
        alert("Por favor complete todos los campos obligatorios")
        return
      }

      // Here you would normally send the data to the server
      console.log("Formulario enviado:", {
        tipoId,
        numId,
        nombre,
        apellido,
        captcha,
      })

      alert("Verificación iniciada. En un sistema real, esto consultaría la base de datos ReTHUS.")
    })
  }

  // Captcha refresh button
  const btnCambiar = document.querySelector(".btn-cambiar")
  if (btnCambiar) {
    btnCambiar.addEventListener("click", () => {
      alert("En un sistema real, esto generaría una nueva imagen captcha")
    })
  }

  // Menu button functionality
  const menuBtn = document.querySelector(".menu-btn")
  if (menuBtn) {
    menuBtn.addEventListener("click", () => {
      alert("Menú clickeado. En un sistema real, esto abriría un menú de navegación.")
    })
  }
})

