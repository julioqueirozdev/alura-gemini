let section = window.document.getElementById("resultados-pesquisa"); // Seleciona a seção onde os resultados serão exibidos

let resultados = ""; // String vazia para armazenar o HTML dos resultados

function buscar() { // Função para gerar e exibir os resultados da pesquisa
  // Itera sobre cada dado da pesquisa e cria o HTML correspondente
  for (let dado of dados) {
    resultados += `
      <div class="item-resultado"> 
        <h2> 
          <a href="https://www.www.instagram.com/rebecarandrade/" target="_blank" 
             >${dado.titulo}</a> 
        </h2>
        <p class="descricao-meta"> 
          ${dado.descricao}
        </p>
        <a
          href='${dado.link}' 
          target="_blank"
          >Mais informções</a
        >
      </div>`;
  }

  section.innerHTML = resultados; // Insere o HTML dos resultados na seção
}

