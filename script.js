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
  if (document.querySelector('.short').classList.contains('preto1')) {
    document.querySelector('.short').classList.remove('preto1');
    document.querySelector('.short').classList.add('verde1');
  }else{
    document.querySelector('.short').classList.remove('verde1');
    document.querySelector('.short').classList.add('preto1');
  }
}
function scrollagem(params) {
  
}