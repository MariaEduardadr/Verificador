function verificar () {
  
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if(fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } 
    else{
        var fsex = document.getElementsByName('redsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 12) {
                //Criança
               // img.setAttribute('src' , 'meninocriança.jpeg ')
            }
            else if (idade < 30) {
                //Jovem
               // img.setAttribute('src' , ' homemjovem.jpeg ')
            }
            else if (idade < 60) {
            //Adulto
           // img.setAttribute('src' , 'homemadulto.webp')
            }
            else{
                //Idoso
               // img.setAttribute('src' , 'idosohomem.jpeg ')
            }
        }
        else if (fsex[1].checked) {
            genero = 'Mulher'

            if (idade >= 0 && idade < 12) {
                //Criança
               // img.setAttribute('src' , 'meninababy.jpeg')
            }
            else if (idade < 30) {
                //Jovem
               // img.setAttribute('src' , 'mulherjovem.jpeg')
            }
            else if (idade < 60) {
            //Adulto
           // img.setAttribute('src' , 'mulheradulta.jpeg')
            }
            else{
                //Idoso
               // img.setAttribute('src' , 'idosamulher.webp')
            }

        }
        res.style.txtAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        //res.appendChild(img)
    }
}


