const url = 'https://raw.githubusercontent.com/nieuwenhof/Api-2024-lal-/refs/heads/main/Estilos_Musicais.json'
async function vizualizaInfo(){
    const res = await fetch(url)
    const dados =  await res.json()

    const cursos = Object.keys(dados)
    const votos = Object.values(dados)
    const Estilo_mais_votado= cursos[0]
    const quantidadeDeVoto = Object.values(dados)[0]

    const data = [
        {
            x:cursos,
            y:votos,
            type: 'bar',
        }
    ]

    let paragrafo = document.createElement('p')

    paragrafo.classList.add('caixa-grafico__texto')
    
    paragrafo.innerHTML = ` Nessa pesquisa, buscou-se compreender qual o estilo musical mais escutado pelos brasileiros. O ${Estilo_mais_votado} foi o estilo mais votado entre todos, com um total de ${quantidadeDeVoto} votos, em uma pesquisa que teve um total de vinte e três mil e quinhentos participantes.`

    let caixa = document.getElementById('caixa-grafico')
    caixa.appendChild(paragrafo)

    let grafico = document.createElement('div')
    grafico.className ='grafico'
    caixa.appendChild(grafico)
    Plotly.newPlot(grafico, data)


}

vizualizaInfo()