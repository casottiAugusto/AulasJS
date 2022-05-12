function verde()
{
  document.querySelector('#titulo').classList.remove('azul');
  document.querySelector('#titulo').classList.remove('vermelho');
  document.querySelector('#titulo').classList.add('verde');
}
function vermelho()
{
  document.querySelector('#titulo').classList.remove('azul');
  document.querySelector('#titulo').classList.remove('verde');
  document.querySelector('#titulo').classList.add('vermelho');
  
}
function azul() {
  document.querySelector('#titulo').classList.remove('verde');
  document.querySelector('#titulo').classList.remove('vermelho');
  
  document.querySelector('#titulo').classList.add('azul');
}
function troca(params) {
  if (document.querySelector('#troca').classList.contains('preto1')) {
    document.querySelector('#troca').classList.remove('preto1');
    document.querySelector('#troca').classList.add('verde1');
  }else{
    document.querySelector('#troca').classList.remove('verde1');
    document.querySelector('#troca').classList.add('preto1');
  }
  
}