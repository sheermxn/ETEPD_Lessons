const tabela = document.querySelector('#tabela'), insert_items_row = document.querySelector('#insert_items_row')
const inputs = [document.querySelector('#estado_input'), document.querySelector('#capital_input'), document.querySelector('#sigla_input')]
const estados = [
    {
        Estado: "Acre",
        Capital: "Rio Branco",
        Sigla: "AC",
        Bandeira: `<img src="https://static.mundoeducacao.uol.com.br/mundoeducacao/2021/01/bandeira-do-estado-do-acre.jpg" alt="Bandeira" width="100">`
    },
    {
        Estado: "Alagoas",
        Capital: "Maceió",
        Sigla: "AL",
        Bandeira: `<img src="https://static.mundoeducacao.uol.com.br/mundoeducacao/2020/10/bandeira-de-alagoas.jpg" alt="Bandeira" width="100">`
    },
    {
        Estado: "Amapá",
        Capital: "Macapá",
        Sigla: "AP",
        Bandeira: `<img src="https://static.mundoeducacao.uol.com.br/mundoeducacao/2021/02/bandeira-amapa.jpg" alt="Bandeira" width="100">`
    },
    {
        Estado: "Amazonas",
        Capital: "Manaus",
        Sigla: "AM",
        Bandeira: `<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Bandeira_do_Amazonas_%28verso%29.svg/2560px-Bandeira_do_Amazonas_%28verso%29.svg.png" alt="Bandeira" width="100">`
    },
    {
        Estado: "Bahia",
        Capital: "Salvador",
        Sigla: "BA",
        Bandeira: `<img src="https://static.mundoeducacao.uol.com.br/mundoeducacao/2021/03/bandeira-bahia.jpg" alt="Bandeira" width="100">`
    },
    {
        Estado: "Ceará",
        Capital: "Fortaleza",
        Sigla: "CE",
        Bandeira: `<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Bandeira_do_Cear%C3%A1.svg/1200px-Bandeira_do_Cear%C3%A1.svg.png" alt="Bandeira" width="100">`
    },
    {
        Estado: "Espírito Santo",
        Capital: "Vitória",
        Sigla: "ES",
        Bandeira: `<img src="https://www.estadosecapitaisdobrasil.com/wp-content/uploads/2014/09/bandeira-espirito-santo.png" alt="Bandeira" width="100">`
    },
    {
        Estado: "Goiás",
        Capital: "Goiânia",
        Sigla: "GO",
        Bandeira: `<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Flag_of_Goi%C3%A1s.svg/2560px-Flag_of_Goi%C3%A1s.svg.png" alt="Bandeira" width="100">`
    },
    {
        Estado: "Maranhão",
        Capital: "São Luís",
        Sigla: "MA",
        Bandeira: `<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Bandeira_do_Maranh%C3%A3o.svg/1200px-Bandeira_do_Maranh%C3%A3o.svg.png" alt="Bandeira" width="100">`
    },
    {
        Estado: "Mato Grosso",
        Capital: "Cuiabá",
        Sigla: "MT",
        Bandeira: `<img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Bandeira_de_Mato_Grosso.svg" alt="Bandeira" width="100">`
    },
    {
        Estado: "Mato Grosso do Sul",
        Capital: "Campo Grande",
        Sigla: "MS",
        Bandeira: `<img src="https://a-static.mlcdn.com.br/800x560/bandeira-estado-mato-grosso-do-sul-1x145m-seriarte-digital/seriartedigital/b323b442f07c11ebb9124201ac18500e/e14b0a9dc9b14170f63912dbaa0f1ce7.jpeg" alt="Bandeira" width="100">`
    },
    {
        Estado: "Minas Gerais",
        Capital: "Belo Horizonte",
        Sigla: "MG",
        Bandeira: `<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Bandeira_de_Minas_Gerais.svg/243px-Bandeira_de_Minas_Gerais.svg.png" alt="Bandeira" width="100">`
    },
    {
        Estado: "Pará",
        Capital: "Belém",
        Sigla: "PA",
        Bandeira: `<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Bandeira_do_Par%C3%A1.svg/1200px-Bandeira_do_Par%C3%A1.svg.png" alt="Bandeira" width="100">`
    },
    {
        Estado: "Paraíba",
        Capital: "João Pessoa",
        Sigla: "PB",
        Bandeira: `<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Bandeira_da_Para%C3%ADba.svg/300px-Bandeira_da_Para%C3%ADba.svg.png" alt="Bandeira" width="100">`
    },
    {
        Estado: "Paraná",
        Capital: "Curitiba",
        Sigla: "PR",
        Bandeira: `<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Bandeira_do_Paran%C3%A1.svg/1200px-Bandeira_do_Paran%C3%A1.svg.png" alt="Bandeira" width="100">`
    },
    {
        Estado: "Pernambuco",
        Capital: "Recife",
        Sigla: "PE",
        Bandeira: `<img src="https://cdn.folhape.com.br/img/c/1200/900/dn_arquivo/2020/09/2.jpg" alt="Bandeira" width="100">`
    },
    {
        Estado: "Piauí",
        Capital: "Teresina",
        Sigla: "PI",
        Bandeira: `<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Bandeira_do_Piau%C3%AD.svg/1200px-Bandeira_do_Piau%C3%AD.svg.png" alt="Bandeira" width="100">`
    },
    {
        Estado: "Rio de Janeiro",
        Capital: "Rio de Janeiro",
        Sigla: "RJ",
        Bandeira: `<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Bandeira_do_estado_do_Rio_de_Janeiro.svg/1200px-Bandeira_do_estado_do_Rio_de_Janeiro.svg.png" alt="Bandeira" width="100">`
    },
    {
        Estado: "Rio Grande do Norte",
        Capital: "Natal",
        Sigla: "RN",
        Bandeira: `<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Bandeira_do_Rio_Grande_do_Norte.svg/1200px-Bandeira_do_Rio_Grande_do_Norte.svg.png" alt="Bandeira" width="100">`
    },
    {
        Estado: "Rio Grande do Sul",
        Capital: "Porto Alegre",
        Sigla: "RS",
        Bandeira: `<img src="https://estado.rs.gov.br/upload/recortes/201707/20075647_1210628_GDO.jpg" alt="Bandeira" width="100">`
    },
    {
        Estado: "Rondônia",
        Capital: "Porto Velho",
        Sigla: "RO",
        Bandeira: `<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Bandeira_de_Rond%C3%B4nia.svg/1200px-Bandeira_de_Rond%C3%B4nia.svg.png" alt="Bandeira" width="100">`
    },
    {
        Estado: "Roraima",
        Capital: "Boa Vista",
        Sigla: "RR",
        Bandeira: `<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Bandeira_de_Roraima.svg/1200px-Bandeira_de_Roraima.svg.png" alt="Bandeira" width="100">`
    },
    {
        Estado: "Santa Catarina",
        Capital: "Florianópolis",
        Sigla: "SC",
        Bandeira: `<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Bandeira_de_Santa_Catarina.svg/1200px-Bandeira_de_Santa_Catarina.svg.png" alt="Bandeira" width="100">`
    },
    {
        Estado: "São Paulo",
        Capital: "São Paulo",
        Sigla: "SP",
        Bandeira: `<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Bandeira_do_estado_de_S%C3%A3o_Paulo.svg/300px-Bandeira_do_estado_de_S%C3%A3o_Paulo.svg.png" alt="Bandeira" width="100">`
    },
    {
        Estado: "Sergipe",
        Capital: "Aracaju",
        Sigla: "SE",
        Bandeira: `<img src="https://www.estadosecapitaisdobrasil.com/wp-content/uploads/2014/09/bandeira-sergipe.png" alt="Bandeira" width="100">`
    },
    {
        Estado: "Tocantins",
        Capital: "Palmas",
        Sigla: "TO",
        Bandeira: `<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Bandeira_do_Tocantins.svg/1200px-Bandeira_do_Tocantins.svg.png" alt="Bandeira" width="100">`
    },
    {
        Estado: "Distrito Federal",
        Capital: "Brasília",
        Sigla: "DF",
        Bandeira: `<img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Bandeira_do_Distrito_Federal_%28Brasil%29.svg" alt="Bandeira" width="100">`
    }
]


window.onload = () => {
    alert('Aperte na bandeira para remover o estado da lista.')
    for (var input of inputs) {
        input.addEventListener("input", e => {
            const element = e.target
            if (e.target.id == "estado_input") {
                for (estado of estados) {
                    const Estado = estado["Estado"]
                    if (Estado.toLowerCase() == e.target.value.toLowerCase()) {
                        const newRow = document.createElement('tr')
                        const estadoRow = document.createElement('td')
                        const capitalRow = document.createElement('td')
                        const siglaRow = document.createElement('td')
                        const bandeiraRow = document.createElement('td')

                        estadoRow.innerText = Estado
                        capitalRow.innerText = estado["Capital"]
                        siglaRow.innerText = estado["Sigla"]
                        bandeiraRow.innerHTML = `${estado["Bandeira"]}`

                        newRow.appendChild(estadoRow)
                        newRow.appendChild(capitalRow)
                        newRow.appendChild(siglaRow)
                        newRow.appendChild(bandeiraRow)
                        tabela.appendChild(newRow)

                        const img = bandeiraRow.children[0]

                        img.addEventListener("click", e => {
                            newRow.remove()
                        })
                    }
                }
            } else if (e.target.id == "capital_input") {
                for (estado of estados) {
                    const Capital = estado["Capital"]
                    if (Capital.toLowerCase() == e.target.value.toLowerCase()) {
                        const newRow = document.createElement('tr')
                        const estadoRow = document.createElement('td')
                        const capitalRow = document.createElement('td')
                        const siglaRow = document.createElement('td')
                        const bandeiraRow = document.createElement('td')

                        estadoRow.innerText = estado["Estado"]
                        capitalRow.innerText = Capital
                        siglaRow.innerText = estado["Sigla"]
                        bandeiraRow.innerHTML = `${estado["Bandeira"]}`

                        newRow.appendChild(estadoRow)
                        newRow.appendChild(capitalRow)
                        newRow.appendChild(siglaRow)
                        newRow.appendChild(bandeiraRow)
                        tabela.appendChild(newRow)

                        const img = bandeiraRow.children[0]

                        img.addEventListener("click", e => {
                            newRow.remove()
                        })
                    }
                }
            } else if (e.target.id == "sigla_input") {
                for (estado of estados) {
                    const Sigla = estado["Sigla"]
                    if (Sigla.toLowerCase() == e.target.value.toLowerCase()) {
                        const newRow = document.createElement('tr')
                        const estadoRow = document.createElement('td')
                        const capitalRow = document.createElement('td')
                        const siglaRow = document.createElement('td')
                        const bandeiraRow = document.createElement('td')

                        estadoRow.innerText = estado["Estado"]
                        capitalRow.innerText = estado["Capital"]
                        siglaRow.innerText = Sigla
                        bandeiraRow.innerHTML = `${estado["Bandeira"]}`

                        newRow.appendChild(estadoRow)
                        newRow.appendChild(capitalRow)
                        newRow.appendChild(siglaRow)
                        newRow.appendChild(bandeiraRow)
                        tabela.appendChild(newRow)

                        const img = bandeiraRow.children[0]

                        img.addEventListener("click", e => {
                            newRow.remove()
                        })
                    }
                }
            }
        })
    }
}