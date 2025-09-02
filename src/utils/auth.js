const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000"

export async function loginUser(email, password) {
  
  // --- Validaciones ---
  if (!email || !password) {
    alert("Correo o contraseña vacía, debe diligenciar todos los campos");
    return null
  }

  let correoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!correoRegex.test(email.trim())) {
    alert(
      'El correo electrónico no es válido, debe contener "@" y un dominio válido como "gmail.com"'
    )
    return null
  }

  // --- Envío de datos ---
  try {
    const response = await fetch(`${API_URL}/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })

    if (response.ok) {
      const data = await response.json()
      alert("Inicio de sesión exitoso")
      console.log("Usuario:", data.user)
      return data
    } else {
      alert("Email o contraseña incorrectos")
      return null
    }
  } catch (error) {
    alert("Error en el Inicio")
    console.error("Error:", error)
    return null
  }
}

export async function registerUser(email, password, confirmPassword) {

  // --- Validaciones ---
  if (!email || !password || !confirmPassword) {
    alert("Correo o contraseña vacía, debe diligenciar todos los campos")
    return null;
  }

  let correoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!correoRegex.test(email)) {
    alert(
      'El correo electrónico no es válido, debe contener "@" y un dominio válido como "gmail.com"'
    )
    return null
  }

  if (password !== confirmPassword) {
    alert("Las contraseñas no coinciden")
    return null
  }

  if (password.length < 12) {
    alert("La contraseña debe tener como mínimo 12 caracteres")
    return null
  }

  let contieneMayuscula = password.split("").some(
    (caracter) => caracter >= "A" && caracter <= "Z"
  );
  let contieneNumero = /\d/.test(password)

  if (!contieneMayuscula) {
    alert("La contraseña debe contener por lo menos una mayúscula")
    return null
  }
  if (!contieneNumero) {
    alert("La contraseña debe contener por lo menos un número")
    return null
  }

  // --- Envío de datos ---
  try {
    const response = await fetch(`${API_URL}/api/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      alert("Usuario registrado con éxito")
      return { success: true }
    } else {
      const errorData = await response.json()
      alert(`Error en el registro: ${errorData.error}`)
      return null
    }
  } catch (error) {
    alert("Error en el registro")
    console.error("Error:", error)
    return null
  }
}