function buscar() {
  let section = window.document.getElementById("resultados-pesquisa"); // Seleciona a seção onde os resultados serão exibidos

  

  let campoPesquisa = document.getElementById("busca").value;

  if(!campoPesquisa){
    section.innerHTML = '<p>Nenhum resultado foi encontrado! Busque um atleta.</p>'
    return // finaliza o codigo caso entre neste condicional 
  }

  campoPesquisa =  campoPesquisa.toLowerCase()

  // inicializa uma string vazia para armazenar os resultados 
  let resultados = "";
  let titulo = '';
  let descricao = '';
  let tags = '';

  for (let dado of dados) {

    titulo = dado.titulo.toLowerCase()
    descricao = dado.descricao.toLowerCase()
    tags = dado.tags.toLowerCase()

    if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa) ) {
      resultados += `
      <div class="item-resultado"> 
        <h2> <a href="https://www.www.instagram.com/rebecarandrade/" target="_blank">${dado.titulo}</a></h2>
        <p class="descricao-meta"> 
          ${dado.descricao}</p>
        <a
          href='${dado.link}' 
          target="_blank"
          >Mais informções</a
        >
      </div>`;
    }

  }
  //se não existir resultados
    if(!resultados) {
      resultados = '<p>Nenhum resultado foi encontrado!</p>'
    }

  section.innerHTML = resultados; // Insere o HTML dos resultados na seção
}
