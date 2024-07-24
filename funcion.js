function encriptar() {
    let texto = document.getElementById('inputTexto').value;
    let textoEncriptado = texto
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
    document.getElementById('outputTexto').value = textoEncriptado;
    document.getElementById('outputTexto').style.display = 'block';
    document.getElementById('copiarTexto').style.display = 'block';
    document.getElementById('img2').style.display = 'none';
    document.getElementById('texto1').style.display = 'none';
    document.getElementById('tooltip').style.display = 'none';
    document.getElementById('texto2').style.display = 'none';
    document.getElementById('tooltip').style.display = 'none';
    document.getElementById('area-final').classList.add('click');

}

function desencriptar() {
    let texto = document.getElementById('outputTexto').value;
    let textoDesencriptado = texto
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
    document.getElementById('outputTexto').value = textoDesencriptado;
}

function copiarAlPortapapeles() {
    let texto = document.getElementById('outputTexto').value;
    navigator.clipboard.writeText(texto).then(() => {
        alert('Texto copiado con exito');
    }).catch(err => {
        alert('Error al copiar el texto: ', err);
    });
}