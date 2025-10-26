// Função para mostrar elemento HTML e o código correspondente
function mostrarElemento(idElemento, idCodigo) {
  const el = document.getElementById(idElemento);
  const codigo = document.getElementById(idCodigo);

  if (el) {
    el.style.display = (el.style.display === "none" || el.style.display === "") ? "inline-block" : "none";
  }

  if (codigo) {
    codigo.classList.toggle("ativo");
  }
}

// Função para aplicar CSS dinamicamente e mostrar o código
function aplicarCSS(tipo, idCodigo) {
  const header = document.getElementById("header");
  const codigo = document.getElementById(idCodigo);

  codigo.classList.toggle("ativo");

  switch (tipo) {
    case "tamanho":
      header.style.height = header.style.height ? "" : "100px";
      header.style.width = "100%";
      break;

    case "posicionamento":
      header.style.display = "flex";
      header.style.justifyContent = header.style.justifyContent === "space-between" ? "center" : "space-between";
      header.style.alignItems = "center";
      break;

    case "margin":
      header.style.margin = header.style.margin ? "" : "20px";
      break;

    case "padding":
      header.style.padding = header.style.padding === "25px" ? "15px" : "25px";
      break;

    case "border":
      if (header.style.border) {
        header.style.border = "";
        header.style.borderRadius = "";
      } else {
        header.style.border = "2px solid cyan";
        header.style.borderRadius = "10px";
      }
      break;
  }
}
